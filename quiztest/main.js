//import 'mixqs/mixqs.js';

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
          "question": "Skatta variansen för följande data.",
          "data": {
            dist: "normal",
            n: 12,
            mu: [25, 35],
            sigma: [5, 8]
          },
          correctAnswer: (data) => {
            const mean = data.reduce((s, n) => s + n) / data.length;
            const variance = data.reduce((s, n) => s + (n - mean) ** 2, 0) / (data.length - 1);
            return variance;
          }
        },
      ],
      mixqs: [
        {
          "question": "Vilket påstående beskriver det vi kallar för Bias?",
          "answerFormat": "$ans1A avvikelse från $ans1B",
          "variables": [
            {
              "id": "$ans1A",
              "correct": [
                "Systematisk"
              ],
              "wrong": [
                "Slumpmässig"
              ]
            },
            {
              "id": "$ans1B",
              "correct": [
                "från referens material mätt med referensmetod",
                "det rätta värdet"
              ],
              "wrong": [
                "från tillverkarens kvalitetskontroll",
                "median",
                "medelvärdet",
                "från tillverkarens kalibrator"
              ]
            }
          ]
        },
        {
          "question": "Vilket påstående beskriver det vi kallar för Limit of Quantification (LoQ)?",
          "answerFormat": "Den $ans1A av $ans1B där metoden ger ett CV under $ans1C",
          "variables": [
            {
              "id": "$ans1A",
              "correct": [
                "lägsta nivå",
                "lägsta koncentration"
              ],
              "wrong": [
                "högsta nivå",
                "koncentrationsavvikelse",
                "medel koncentration",
                "median nivå",
                "median koncentration",
                "högsta koncentration"
              ]
            },
            {
              "id": "$ans1B",
              "correct": [
                "analyten",
                "det man mäter"
              ],
              "wrong": [
                "variation"
              ]
            },
            {
              "id": "$ans1C",
              "correct": [
                0.2,
                "tjugo procent"
              ],
              "wrong": [
                0.1,
                0.4,
                0.5,
                1,
                "som är större än medelvärdet",
                "som är mindre än metodens median",
                "som är mindre än medelvärdet"
              ]
            }
          ]
        },
        {
          "question": "Vilket påstående beskriver skillnaden mellan referensintervall och handlingsgränser.",
          "answerFormat": "Referensintervall visar $ans1A  som är vanligt bland $ans1B. Handlingsgräns är $ans1C som på ett optimalt sätt $ans1D $ans1E och sjuka.",
          "variables": [
            {
              "id": "$ans1A",
              "correct": [
                "inom vilka gränser ",
                "vilket spann av mätvärden",
                "vilka mätvärden"
              ],
              "wrong": [
                "vilka medelvärden",
                "vilka avvikande värden",
                "vilka medianer",
                "vilka skillnader i mätvärden"
              ]
            },
            {
              "id": "$ans1B",
              "correct": [
                "de utan uppenbar sjukdom",
                "uppenbart friska",
                "friska",
                "de som verkar vara friska"
              ],
              "wrong": [
                "sjuka",
                "som är unga och friska",
                "som saknar alla sjukdomar som vi känner till",
                "som inte står på någon medicin",
                "som kan ha sjukdom"
              ]
            },
            {
              "id": "$ans1C",
              "correct": [
                "en nivå av en analyt",
                "en gräns",
                "ett mätvärde",
                "en nivå av en biomarkör"
              ],
              "wrong": [
                "ett spridingsmått",
                "en median",
                "ett medelvärde",
                "2 standardavvikelser över medlevärdet",
                "den 97.5:e percentil"
              ]
            },
            {
              "id": "$ans1D",
              "correct": [
                "sperarerar",
                "särskiljer"
              ],
              "wrong": [
                "införlivar",
                "kombinerar",
                "sammanför",
                "förenar",
                "visar vad som är gemensamt för"
              ]
            },
            {
              "id": "$ans1E",
              "correct": [
                "de utan sjukdom",
                "friska"
              ],
              "wrong": [
                "de som överlerer",
                "de med mild sjukdom",
                "de som kanske är friska"
              ]
            }
          ]
        },
        {
          "question": "Vilket påstående beskriver en referenspopulation?",
          "answerFormat": "Ett helst $ans1A  av $ans1B som verkar $ans1C som påverkar den $ans1D man vill skapa referensintervall för",
          "variables": [
            {
              "id": "$ans1A",
              "correct": [
                "randomiserat urval",
                "konsekutiv sampling",
                "slumpat urval"
              ],
              "wrong": [
                "urval med mest män",
                "sållat urval",
                "selekterat urval",
                "sovrat urval",
                "urval av enbart ungre",
                "särskiljt urval",
                "selekterat könsseleketrat urval"
              ]
            },
            {
              "id": "$ans1B",
              "correct": [
                "individer",
                "personer"
              ],
              "wrong": [
                "sjuka",
                "män",
                "patienter",
                "kvinnor",
                "äldre"
              ]
            },
            {
              "id": "$ans1C",
              "correct": [
                "vara friska",
                "inte ha tillsånd",
                "sakna tillstånd"
              ],
              "wrong": [
                "ha tillstånd",
                "innefatta tillstånd",
                "ha sjukdom",
                "drabbade av tillstånd"
              ]
            },
            {
              "id": "$ans1D",
              "correct": [
                "analyt",
                "mesurand",
                "mätvärde",
                "biomarkör"
              ],
              "wrong": [
                "Standardavvikelse",
                "diagnos",
                "medicinska process",
                "medicinsk ansvarsområde",
                "sjukdom",
                "medelvärde",
                "konfidensintervall"
              ]
            }
          ]
        },
        {
          "question": "Vilket påstående beskriver standardavvikelse (SD) i ett slumpat urval?",
          "answerFormat": "$ans1A av  datas $ans1B avstånd från  $ans1C delat med $ans1D",
          "variables": [
            {
              "id": "$ans1A",
              "correct": [
                "Plussar ihop",
                "Summan",
                "Addition"
              ],
              "wrong": [
                "Subtraktion",
                "Medelväde",
                "Kvadrering",
                "Median",
                "Faktorering"
              ]
            },
            {
              "id": "$ans1B",
              "correct": [
                "upphöjt i två",
                "kvadrerade"
              ],
              "wrong": [
                "subtraherade",
                "normerade",
                "summerade",
                "medelvädesnormerade",
                "upphöjt i tre",
                "logaritmerade",
                "faktorerade",
                "upphöjt i fyra"
              ]
            },
            {
              "id": "$ans1C",
              "correct": [
                "summan av alla data delat med antal data",
                "medelvärde"
              ],
              "wrong": [
                "median",
                "maxvärde",
                "minsta värde",
                "90% konfidensintervall",
                "95% konfidensintervall"
              ]
            },
            {
              "id": "$ans1D",
              "correct": [
                "datas antal minus 1",
                "antalet data minus 1",
                "datas antal minus ett",
                "antalet data minus ett",
                "datas antal minus ett tal som påverkas av antalet frihesgader"
              ],
              "wrong": [
                "summan av all data",
                "antalet data minus datas medelvärde",
                "medelvärdet av alla data minus ett",
                "medelvärdet av alla data ",
                "antalet data minus 3",
                "antalet data minus två",
                "antalet data multiplicerat med 1.5",
                "antalet data plus ett",
                "antalet jämna data"
              ]
            }
          ]
        }
      ]
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