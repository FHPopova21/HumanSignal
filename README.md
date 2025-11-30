# AI SCREENING TOOL FOR ELDERLY RISK ASSESSMENT

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Описание на проекта

Интерактивен AI инструмент за социални работници, който подпомага ранното откриване на риск от депресия и социална изолация при възрастни хора. Системата позволява въвеждане на ключови данни за човек (здраве, мобилност, социална активност и среда). Моделът анализира информацията и връща оценка: нисък, среден или висок риск, придружена от обяснение и препоръчителни действия. Проектът не поставя медицинска диагноза — служи за първоначално насочване и приоритизация.

### 🎯 Основни цели

- ✅ Изграждане на практичен инструмент за бърз първичен скрининг на възрастни хора.
- ✅ Осигуряване на ясна, обяснима оценка на риска (low / medium / high).
- ✅ Предлагане на кратки, приложими препоръки за социалните работници.
- ✅ Създаване на прототип, подходящ за хакатон презентация и последващо доразвитие.

---

## ✨ Основни функционалности

- Интуитивен интерфейс за бързо попълване на ключови индикатори.
- Обясним AI: резултатите включват причините/факторите, довели до оценката (SHAP/feature importance).
- Класификационен/регресионен pipeline: възможност за двоична/трирегионална класификация (low/med/high) и/или регресионна оценка EURO-D.
- Модулна архитектура: отделни слоеве за данни, модел, API и frontend.
- Notebook-репозитории за репродуциране на експериментите и анализите.
---

## 📁 Структура на проекта

```
/ (root)
├── Dataset/
│ └── processed/
├── PresentationLayer/
│ └── public/
├── models/
├── src/
├── notebook/
├── reports/
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md

```

---

## 🚀 Инсталация

### Изисквания

- Python 3.9+ (препоръчително 3.13)
- pip или conda

### Стъпки за инсталация

1. **Клониране на repository**

```bash
git clone <repository_url>
cd hierarchical-demand-forecasting
```

2. **Създаване на virtual environment**

```bash
# С venv
python -m venv venv
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate     # Windows

# С conda (алтернативно)
conda create -n demand_forecasting python=3.13
conda activate demand_forecasting
```

3. **Инсталиране на зависимости**

```bash
pip install -r requirements.txt
```

---

## 📊 Резултати

## Моделен доклад 

### Baseline: Linear Regression
- Наблюдават се системни проблеми: подценяване на високите EURO-D стойности и поднапасване.
- Ограничена чувствителност при крайни случаи — неподходящ за директна употреба в production.

## Резултати и метрики
- Linear Regression (baseline): MAE = 1.446, RMSE = 1.822, R² = 0.336
- GBM (400 trees, lr=0.05, depth=3): MAE = 1.410, RMSE = 1.781, R² = 0.366 (на тест сет)
- RandomForest (200 trees): не показва значимо подобрение и дава признаци на overfit
- Ключови признаци (GBM): casp, sphus, adla, mobilityind, grossmotor (следвани от bmi, age).
Бележка: тези стойности са примерни — прилагайте локални notebooks в notebook/ за пълно възпроизвеждане.

### Подобрение: Gradient Boosting Model (GBM)
- По-нисък MAE (~2.5% спрямо линейния модел) и по-добро R² (+0.03).
- По-добра чувствителност към нелинейни зависимости и взаимодействия между признаците.
- GBM е избран като текущ нелинеен baseline.

### Препоръки
- Преформулиране на задачата като класификационен проблем (0–3 low, 4–7 medium, 8–12 high).
- Използване на SHAP за локална и глобална интерпретируемост.
- Лек grid search/optuna за подобряване на хиперпараметрите.
- Калибриране на вероятностите при необходимост.
---


## 🚧 Препоръки за подобрения

### Краткосрочни подобрения

1. **Обработка на outliers**

   - Идентифициране и обработка на екстремни стойности
   - Robust scaling методи

2. **Bias correction**

   - Калибрация на прогнозите за намаляване на систематичен bias
   - Post-processing техники

3. **Feature engineering**
   - Експерименти с допълнителни lag features
   - Сезонни patterns и trends

### Дългосрочни подобрения

1. **Архитектурни подобрения**

   - Residual connections
   - Attention mechanisms
   - Ensemble от множество модели

2. **Advanced техники**

   - Transformer архитектури за времеви серии
   - Hierarchical modeling за различни нива на агрегация
   - Transfer learning от други datasets

3. **Production готовност**
   - Model versioning
   - Automated retraining pipeline
   - A/B testing framework

---

## 👫 Екип 

| Име               | Роля       |
|-------------------|------------|
| Атанас Апостолов  | Backend    |
| Биляна Бадалова   | Frontend   |
| Иван Дочев        | Backend    |
| Филипа Попова     | Frontend   |


**Последна актуализация**: 2025
