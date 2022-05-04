export const mixqs = [
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
          "referens material mätt med referensmetod",
          "det rätta värdet"
        ],
        "wrong": [
          "tillverkarens kalibrator",
          "tillverkarens kvalitetskontroll",
          "medelvärdet",
          "medianen"
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
          "mediankoncentration",
          "mediannivå",
          "koncentrationsavvikelse",
          "högsta koncentration",
          "medelkoncentration",
          "högsta nivå"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "analyten",
          "det man mäter"
        ],
        "wrong": [
          "regressionkoefficienten",
          "variationen",
          "konfidensintervallet"
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
          "metodens median",
          "medelvärdet"
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
          "vilket spann av mätvärden",
          "vilken variation",
          "vilka mätvärden"
        ],
        "wrong": [
          "vilka avvikande värden",
          "vilka medianer",
          "vilka skillnader i mätvärden",
          "vilka medelvärden"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "uppenbart friska",
          "de utan uppenbar sjukdom",
          "de som verkar vara friska",
          "friska"
        ],
        "wrong": [
          "de som saknar alla sjukdomar som vi känner till",
          "unga och friska",
          "sjuka",
          "de som kan ha sjukdom",
          "de som inte står på någon medicin"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "en nivå av en analyt",
          "en gräns",
          "en nivå av en biomarkör",
          "ett mätvärde"
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
          "separerar",
          "särskiljer"
        ],
        "wrong": [
          "sammanför",
          "förenar",
          "införlivar",
          "visar vad som är gemensamt för",
          "kombinerar"
        ]
      },
      {
        "id": "$ans1E",
        "correct": [
          "friska",
          "de utan sjukdom"
        ],
        "wrong": [
          "de som överlever",
          "de med mild sjukdom",
          "de som kanske är friska"
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
          "slumpat urval",
          "randomiserat urval"
        ],
        "wrong": [
          "urval med mest män",
          "selekterat urval",
          "särskiljt urval",
          "sållat urval",
          "könsselekterat urval",
          "sovrat urval",
          "urval av enbart ungre"
        ]
      },
      {
        "id": "$ans1B",
        "correct": [
          "personer",
          "individer"
        ],
        "wrong": [
          "kvinnor",
          "män",
          "sjuka",
          "patienter",
          "äldre"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "inte ha tillstånd",
          "vara friska",
          "sakna tillstånd"
        ],
        "wrong": [
          "drabbade av tillstånd",
          "ha sjukdom",
          "innefatta tillstånd",
          "ha tillstånd"
        ]
      },
      {
        "id": "$ans1D",
        "correct": [
          "det mätvärde",
          "den measurand",
          "den biomarkör",
          "den analyt"
        ],
        "wrong": [
          "standardavvikelsen",
          "det konfidensintervall",
          "det medicinska ansvarsområdet",
          "den medicinska process",
          "sjukdomen",
          "diagnosen",
          "medelvärdet"
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
          "plussar en ihop",
          "summeras",
          "adderas"
        ],
        "wrong": [
          "faktoreras",
          "tar en medelvärdet av",
          "subtraheras",
          "kvadreras",
          "beräknas medianen av"
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
          "faktorerade avstånd",
          "medelvädesnormerade avstånd",
          "subtraherade avstånd",
          "normerade avstånd",
          "summerade avstånd",
          "avstånd upphöjt i fyra",
          "logaritmerade avstånd"
        ]
      },
      {
        "id": "$ans1C",
        "correct": [
          "summan av alla data delat med antal data",
          "medelvärdet"
        ],
        "wrong": [
          "95% konfidensintervalllet",
          "maxvärdet",
          "minsta värdet",
          "90% konfidensintervalllet",
          "medianen"
        ]
      },
      {
        "id": "$ans1D",
        "correct": [
          "antalet data minus ett",
          "datas antal minus 1",
          "datas antal minus ett",
          "datas antal minus ett tal som påverkas av antalet frihesgader",
          "antalet data minus 1"
        ],
        "wrong": [
          "antalet data minus två",
          "summan av all data",
          "antalet data multiplicerat med 1.5",
          "antalet jämna data",
          "medelvärdet av alla data ",
          "medelvärdet av alla data minus ett",
          "antalet data minus datas medelvärde",
          "antalet data minus 3",
          "antalet data plus ett"
        ]
      },
      {
        "id": "$ans1E",
        "correct": [
          ", sedan tar man roten ur."
        ],
        "wrong": [
          ", sedan kvadrerar man detta.",
          "."
        ]
      }
    ]
  }
];