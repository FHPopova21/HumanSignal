export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface Intervention {
  id: string;
  date: string;
  type: string;
  note: string;
}

export interface Case {
  id: string;
  name: string;
  age: number;
  risk: RiskLevel;
  lastAssessmentDate: string;
  lastIntervention: string | null;
  scoreBreakdown: {
    [key: string]: number; // simplified
  };
  keyFactors: string[];
  recommendations: string[];
  interventions: Intervention[];
  // Additional fields for form
  gender: 'Male' | 'Female';
  chronicConditions: number;
  mobility: string;
  caspScore: number;
}

export const cases: Case[] = [
  {
    id: "CASE-1024",
    name: "Иван Петров",
    age: 76,
    risk: "High",
    lastAssessmentDate: "2023-11-28",
    lastIntervention: null,
    gender: 'Male',
    chronicConditions: 2,
    mobility: "Трудно подвижен",
    caspScore: 12,
    scoreBreakdown: {
      social: 20,
      health: 80
    },
    keyFactors: [
      "Ниска мобилност",
      "Малък household (живее сам)",
      "Намалено качество на живот (CASP)"
    ],
    recommendations: [
      "Свържи се с близък",
      "Планирай посещение до 3 дни",
      "Запиши за социален асистент"
    ],
    interventions: []
  },
  {
    id: "CASE-1025",
    name: "Мария Георгиева",
    age: 82,
    risk: "Medium",
    lastAssessmentDate: "2023-11-15",
    lastIntervention: "Телефонен разговор (16.11.2023)",
    gender: 'Female',
    chronicConditions: 3,
    mobility: "Подвижна с помощ",
    caspScore: 24,
    scoreBreakdown: {
      social: 40,
      health: 40
    },
    keyFactors: [
      "Социална изолация",
      "Хронични заболявания"
    ],
    recommendations: [
      "Организирай посещение",
      "Предложи групови дейности"
    ],
    interventions: [
      {
        id: "int-1",
        date: "2023-11-16",
        type: "Телефонен разговор",
        note: "Проверка на състоянието, чувства се добре."
      }
    ]
  },
  {
    id: "CASE-1026",
    name: "Стефан Димитров",
    age: 69,
    risk: "Low",
    lastAssessmentDate: "2023-11-10",
    lastIntervention: "Посещение (11.11.2023)",
    gender: 'Male',
    chronicConditions: 1,
    mobility: "Напълно подвижен",
    caspScore: 42,
    scoreBreakdown: {
      social: 10,
      health: 10
    },
    keyFactors: [
      "Добро здравословно състояние",
      "Активен социален живот"
    ],
    recommendations: [
      "Профилактичен разговор след 3 месеца"
    ],
    interventions: [
      {
        id: "int-2",
        date: "2023-11-11",
        type: "Посещение",
        note: "Рутинно посещение."
      }
    ]
  },
  {
    id: "CASE-1027",
    name: "Елена Василева",
    age: 74,
    risk: "High",
    lastAssessmentDate: "2023-11-27",
    lastIntervention: null,
    gender: 'Female',
    chronicConditions: 4,
    mobility: "На легло",
    caspScore: 8,
    scoreBreakdown: {
      social: 90,
      health: 90
    },
    keyFactors: [
      "Пълна зависимост от грижи",
      "Депресивни симптоми",
      "Липса на подкрепа"
    ],
    recommendations: [
      "Спешно посещение",
      "Медицинска консултация",
      "Включване в програма за домашни грижи"
    ],
    interventions: []
  },
  {
    id: "CASE-1028",
    name: "Георги Николов",
    age: 80,
    risk: "Medium",
    lastAssessmentDate: "2023-11-20",
    lastIntervention: "Групова програма (22.11.2023)",
    gender: 'Male',
    chronicConditions: 2,
    mobility: "Подвижен",
    caspScore: 28,
    scoreBreakdown: {
      social: 50,
      health: 30
    },
    keyFactors: [
      "Загуба на партньор наскоро",
      "Риск от изолация"
    ],
    recommendations: [
      "Включване в клуб на пенсионера",
      "Регулярни обаждания"
    ],
    interventions: [
      {
        id: "int-3",
        date: "2023-11-22",
        type: "Групова програма",
        note: "Посети шах клуб."
      }
    ]
  }
];
