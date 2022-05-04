const mixqs = [
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
          "det rätta värdet",
          "referens material mätt med referensmetod"
        ],
        "wrong": [
          "medelvärdet",
          "tillverkarens kalibrator",
          "medianen",
          "tillverkarens kvalitetskontroll"
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
          "lägsta koncentration",
          "lägsta nivå"
        ],
        "wrong": [
          "högsta nivå",
          "medelkoncentration",
          "mediankoncentration",
          "högsta koncentration",
          "koncentrationsavvikelse",
          "mediannivå"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "analyten",
          "det man mäter"
        ],
        "wrong": [
          "konfidensintervallet",
          "variationen",
          "regressionkoefficienten"
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
          "medelvärdet",
          "metodens median"
        ]
      }
    ]
  },
  {
    "question": "Vilket påstående beskriver skillnaden mellan referensintervall och handlingsgränser.",
    "answerFormat": "Referensintervall visar $ans1A som är vanligt bland $ans1B. Handlingsgräns är $ans1C som på ett optimalt sätt $ans1D $ans1E och sjuka.",
    "variables": [
      {
        "id": "$ans1A",
        "correct": [
          "vilka mätvärden",
          "vilket spann av mätvärden",
          "vilken variation"
        ],
        "wrong": [
          "vilka medianer",
          "vilka avvikande värden",
          "vilka skillnader i mätvärden",
          "vilka medelvärden"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "de utan uppenbar sjukdom",
          "de som verkar vara friska",
          "friska",
          "uppenbart friska"
        ],
        "wrong": [
          "de som inte står på någon medicin",
          "de som saknar alla sjukdomar som vi känner till",
          "de som kan ha sjukdom",
          "unga och friska",
          "sjuka"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "en gräns",
          "ett mätvärde",
          "en nivå av en analyt",
          "en nivå av en biomarkör"
        ],
        "wrong": [
          "2 standardavvikelser över medlevärdet",
          "ett medelvärde",
          "den 97.5:e percentil",
          "en median",
          "ett spridingsmått"
        ]
      },
      {
        "id": "$ans1D",
        "correct": [
          "separerar",
          "särskiljer"
        ],
        "wrong": [
          "visar vad som är gemensamt för",
          "förenar",
          "sammanför",
          "kombinerar",
          "införlivar"
        ]
      },
      {
        "id": "$ans1E",
        "correct": [
          "friska",
          "de utan sjukdom"
        ],
        "wrong": [
          "de som kanske är friska",
          "de med mild sjukdom",
          "de som överlever"
        ]
      }
    ]
  },
  {
    "question": "Vilket påstående beskriver en referenspopulation?",
    "answerFormat": "Ett helst $ans1A av $ans1B som verkar $ans1C som påverkar $ans1D man vill skapa referensintervall för",
    "variables": [
      {
        "id": "$ans1A",
        "correct": [
          "konsekutivt urval",
          "randomiserat urval",
          "slumpat urval"
        ],
        "wrong": [
          "urval av enbart ungre",
          "urval med mest män",
          "sovrat urval",
          "könsselekterat urval",
          "selekterat urval",
          "sållat urval",
          "särskiljt urval"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "personer",
          "individer"
        ],
        "wrong": [
          "äldre",
          "män",
          "patienter",
          "kvinnor",
          "sjuka"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "vara friska",
          "sakna tillstånd",
          "inte ha tillstånd"
        ],
        "wrong": [
          "ha sjukdom",
          "innefatta tillstånd",
          "drabbade av tillstånd",
          "ha tillstånd"
        ]
      },
      {
        "id": "$ans1D",
        "correct": [
          "det mätvärde",
          "den biomarkör",
          "den measurand",
          "den analyt"
        ],
        "wrong": [
          "det medicinska ansvarsområdet",
          "standardavvikelsen",
          "medelvärdet",
          "sjukdomen",
          "det konfidensintervall",
          "diagnosen",
          "den medicinska process"
        ]
      }
    ]
  },
  {
    "question": "Vilket alternativ beskriver hur man beräknar standardavvikelse (SD) utifrån ett slumpat urval?",
    "answerFormat": "Först $ans1A datas $ans1B  från $ans1C delat med $ans1D$ans1E",
    "variables": [
      {
        "id": "$ans1A",
        "correct": [
          "summeras",
          "adderas",
          "plussar en ihop"
        ],
        "wrong": [
          "subtraheras",
          "tar en medelvärdet av",
          "beräknas medianen av",
          "kvadreras",
          "faktoreras"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "kvadrerade avstånd",
          "avstånd i kvadrat",
          "avstånd upphöjt i två"
        ],
        "wrong": [
          "avstånd upphöjt i tre",
          "subtraherade avstånd",
          "faktorerade avstånd",
          "normerade avstånd",
          "avstånd upphöjt i fyra",
          "summerade avstånd",
          "logaritmerade avstånd",
          "medelvädesnormerade avstånd"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "summan av alla data delat med antal data",
          "medelvärdet"
        ],
        "wrong": [
          "minsta värdet",
          "medianen",
          "90% konfidensintervalllet",
          "maxvärdet",
          "95% konfidensintervalllet"
        ]
      },
      {
        "id": "$ans1D",
        "correct": [
          "datas antal minus ett",
          "datas antal minus 1",
          "antalet data minus ett",
          "antalet data minus 1",
          "datas antal minus ett tal som påverkas av antalet frihesgader"
        ],
        "wrong": [
          "antalet jämna data",
          "antalet data minus datas medelvärde",
          "medelvärdet av alla data minus ett",
          "antalet data plus ett",
          "summan av all data",
          "antalet data minus 3",
          "antalet data multiplicerat med 1.5",
          "medelvärdet av alla data ",
          "antalet data minus två"
        ]
      },
      {
        "id": "$ans1E",
        "correct": [
          ", sedan tar man roten ur."
        ],
        "wrong": [
          ".",
          ", sedan kvadrerar man detta."
        ]
      }
    ]
  }
];