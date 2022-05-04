//import {mixqs} from 'mixqs.js';

const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 7,
      questions: [],
      choices: 4,
      numqs: [
        {
          "question": "Vid en mätning observerades följande värden. Vad blir SD för datan?",
          "data": {
            dist: "normal",
            n: 12,
            mu: [25, 35],
            sigma: [5, 8]
          },
          correctAnswer: (data) => {
            const mean = data.reduce((s, n) => s + n) / data.length;
            const variance = data.reduce((s, n) => s + (n - mean) ** 2, 0) / (data.length - 1);
            return Math.sqrt(variance);
          }
        },
        {
          "question": "Vid en mätning observerades följande värden. Vad blir medelvärdet för datan?",
          "data": {
            dist: "normal",
            n: 12,
            mu: [90, 230],
            sigma: [25, 30]
          },
          correctAnswer: (data) => {
            const mean = data.reduce((s, n) => s + n) / data.length;
            return mean;
          }
        },
        {
          "question": "Var ligger medianen för följande data?",
          "data": {
            dist: "normal",
            n: 7,
            mu: [10, 10],
            sigma: [2, 3]
          },
          correctAnswer: (data) => {
            n = data.length;
            if (n % 2 == 1) {
              return data.sort()[(n-1)/2];
            } else {
              return (data.sort()[n/2] + data.sort()[n/2 -1])/2;
            }
          }
        },
      ],
      mixqs: mixqs
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
    },
    resetQuiz() {
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.createQuestions();
    },
    createQuestions: function () {
      console.log("Yello!");
      this.questions = [];
      // Create NumQs
      this.numqs.forEach(numq => {
        q = this.createNumQQuestion(numq);
        this.questions.push(q);
      });
      // Create MixQs
      this.mixqs.forEach(mixq => {
        q = this.createMixQQuestion(mixq);
        this.questions.push(q);
      });
      this.questions = this.shuffle(this.questions);     
      this.count = this.questions.length;
    },

    shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    },

    createMixQQuestion(mixq) {
      correctAnswer = this.createCorrectAnswer(mixq);
      answers = [];
      for (let i = 0; i < this.choices; i++) {
        answers.push(this.createWrongAnswer(mixq, 0.6));
      }
      correctAnswerIdx = Math.floor(Math.random() * this.choices);
      answers.splice(correctAnswerIdx, 0, correctAnswer);
      q = {};
      q.question = mixq.question;
      q.answers = {
        a: answers[0],
        b: answers[1],
        c: answers[2],
        d: answers[3]
      }
      q.correctAnswer = ["a", "b", "c", "d"][correctAnswerIdx];
      return q;
    },
    createCorrectAnswer(mixq) {
      ans = mixq.answerFormat;
      mixq.variables.forEach((v, i) => {
        rnd = Math.floor(Math.random() * v.correct.length);
        ans = ans.replace(v.id, v.correct[rnd]);
      });
      return ans;
    },
    createWrongAnswer(mixq, probabilityWrong) {
      ans = mixq.answerFormat;
      definitelyWrong = Math.floor(Math.random() * mixq.variables.length);
      mixq.variables.forEach((v, i) => {
        if (Math.random() < probabilityWrong || i == definitelyWrong) {
          rnd = Math.floor(Math.random() * v.wrong.length);
          ans = ans.replace(v.id, v.wrong[rnd]);
        } else {
          rnd = Math.floor(Math.random() * v.correct.length);
          ans = ans.replace(v.id, v.correct[rnd]);
        }
      });
      return ans;
    },
    createNumQQuestion(numq) {
      data = this.generateData(numq.data);
      correctAnswer = numq.correctAnswer(data);
      answers = [];
      answers.push(correctAnswer * ((0.9 + (0.14 + Math.random() / 10) * (Math.random() < 0.5 ? 1 : -1))));
      answers.push(correctAnswer * ((0.9 + (0.14 + Math.random() / 10) * (Math.random() < 0.5))));
      answers.push(correctAnswer * ((0.9 + (0.14 + Math.random() / 10) * (Math.random() < 0.5))));
      correctAnswerIdx = Math.floor(Math.random() * this.choices);
      answers.splice(correctAnswerIdx, 0, correctAnswer);
      q = {};
      q.question = numq.question; //.replace("$data", data.join("\n"));
      q.data = data;
      q.answers = {
        a: (Math.round(10*answers[0])/10).toString().replace('.', ','),
        b: (Math.round(10*answers[1])/10).toString().replace('.', ','),
        c: (Math.round(10*answers[2])/10).toString().replace('.', ','),
        d: (Math.round(10*answers[3])/10).toString().replace('.', ',')
      }
      q.correctAnswer = ["a", "b", "c", "d"][correctAnswerIdx];
      return q;
    },
    randn() {
      var u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    },
    generateData(spec) {
      mu = Math.random() * (spec.mu[1] - spec.mu[0]) + spec.mu[0];
      sigma = Math.random() * (spec.sigma[1] - spec.sigma[0]) + spec.sigma[0];
      data = [];
      for (var i = 0; i < spec.n; i++) {
        x = this.randn() * sigma + mu;
        x = Math.round(10 * x) / 10;
        data.push(x);
      }
      return data;
    }
  },
  created: function () { this.createQuestions(); }
});

app.mount("#app");

/*
questions: [
        {
          question:
            "Rolex is a company that specializes in what type of product?",
          answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
          correctAnswer: "b",
        },
        {
          question: "When did Facebook launch?",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Einstein had trouble with mathematics when he was in school?",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
        */