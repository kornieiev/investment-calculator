🎯 План изучения Tailwind CSS

1. Основы Layout и Spacing
   Время: 1-2 дня

margin, padding (m-, p-, mx-, my-, mt-, etc.)
width, height (w-, h-, max-w-, min-h-)
display (block, flex, grid, hidden)
Практика: Создайте карточку товара с отступами

===========================================================

2. Flexbox и Grid
   Время: 2-3 дня

flex, flex-col, justify-center, items-center
grid, grid-cols-3, gap-4
flex-wrap, flex-grow
Практика: Сделайте адаптивную галерею изображений

===========================================================

3. Цвета и Typography
   Время: 1-2 дня

text-, bg-, градиенты
font-size, font-weight, text-align
Цветовая палитра (50-950)
Практика: Оформите заголовки и текст для блога

===========================================================

4. Responsive Design
   Время: 2-3 дня

Breakpoints: sm:, md:, lg:, xl:
Mobile-first подход
Адаптивные сетки
Практика: Сделайте responsive навигацию

===========================================================

5. Hover, Focus и States
   Время: 1 день

hover:, focus:, active:
group-hover:, peer:
Transitions и animations
Практика: Интерактивные кнопки и формы

===========================================================

6. Позиционирование
   Время: 1 день

relative, absolute, fixed, sticky
top-, left-, right-, bottom-
z-index
Практика: Модальное окно и dropdown меню

===========================================================

7. Продвинутые темы
   Время: 2-3 дня

Кастомизация через tailwind.config.js
Создание компонентов с @apply
Dark mode
Кастомные цвета и размеры
Практика: Создайте свою дизайн-систему

# ===========================================================

# 📏 Урок 1: Основы Layout и Spacing

## Система отступов:

1 = 0.25rem (4px)
2 = 0.5rem (8px)
4 = 1rem (16px)
8 = 2rem (32px)
16 = 4rem (64px)

## Направленные отступы:

🔸 padding:
pt- = padding-top (сверху)
pb- = padding-bottom (снизу)
pl- = padding-left (слева)
pr- = padding-right (справа)
px- = padding по X-оси (лево+право)
py- = padding по Y-оси (верх+низ)
p-[25px] = кастомное значение padding в px
p-[100vh] = кастомное значение padding в vh
p-[2rem] = кастомное значение padding в rem

🔸 margin:
mt- = margin-top (сверху)
mb- = margin-bottom (снизу)
ml- = margin-left (слева)
mr- = margin-right (справа)
mx- = margin по X-оси (лево+право)
my- = margin по Y-оси (верх+низ)

## Размеры элементов (Width & Height):

| Числовые     | Процентные     | Специальные      |
| :----------- | :------------- | :--------------- |
| w-4 = 16px   | w-1/4 = 25%    | w-full = 100%    |
| w-8 = 32px   | w-1/3 = 33.33% | w-screen = 100vw |
| w-16 = 64px  | w-1/2 = 50%    | w-auto = auto    |
| w-32 = 128px | w-2/3 = 66.67% |                  |
| w-64 = 256px | w-3/4 = 75%    |                  |

🟢 h-screen = height: 100vh;
• Для hero секций на лендингах (первый экран сайта).
• Для страниц без скролла.
• Для центровки контента по вертикали.

## Min/Max размеры - полный список:

🔸 Минимальная ширина (min-width):

```
  min-w-0;     // min-width: 0px
  min-w-full;  // min-width: 100%
  min-w-min;   // min-width: min-content
  min-w-max;   // min-width: max-content
  min-w-fit;   // min-width: fit-content
```

🔸 Максимальная ширина (max-width):

```
  max-w-xs    // 320px
  max-w-sm    // 384px
  max-w-md    // 448px
  max-w-lg    // 512px
  max-w-xl    // 576px
  max-w-2xl   // 672px
  max-w-4xl   // 896px
  max-w-6xl   // 1152px
  max-w-7xl   // 1280px
  max-w-full  // 100%
  max-w-none  // none
```

🔸 Минимальная высота (min-height):

```
  min-h-0      // 0px
  min-h-full   // 100%
  min-h-screen // 100vh
  min-h-min    // min-content
  min-h-max    // max-content
  min-h-fit    // fit-content
  + числовые: min-h-4, min-h-8, min-h-16, min-h-24...
```

🔸 Максимальная высота (max-height):

```
  max-h-full   // 100%
  max-h-screen // 100vh
  max-h-none   // none
  + числовые: max-h-4, max-h-8, max-h-16...
```

🎯 Когда использовать:
🟢 min-w/min-h - когда:
• Кнопки не должны быть слишком маленькими
• Карточки должны иметь минимальный размер
• Текстовые поля нужной минимальной ширины

🟢 max-w/max-h - когда:
• Ограничить ширину контента (читаемость)
• Адаптивные контейнеры
• Предотвратить слишком широкие элементы

# 📐 Урок 2 (Flexbox & Grid)

## Display:

• block - Block элемент - занимает всю ширину
• inline - Inline элемент - только по содержимому
• inline-block - Inline-block - лучшее из двух миров

🔸 Скрытие элементов:
• hidden - Полностью скрыть
• invisible - Невидимый, но занимает место

🔸 Flex и Grid:
• flex - Flex контейнер

```html
<div className="flex bg-slate-100 p-2">
  <div className="bg-red-200 p-2">Item 1</div>
  <div className="bg-green-200 p-2">Item 2</div>
</div>
```

• grid - Grid контейнер
• grid-cols-3 - количество колонок
• gap-2 - отступы между элементами

```html
<div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
  <div className="bg-blue-200 p-2">Grid 1</div>
  <div className="bg-yellow-200 p-2">Grid 2</div>
</div>
```

# Flexbox - это одномерная система компоновки (строка ИЛИ столбец)

• flex - делает контейнер flex
• flex-col - вертикальное направление (по умолчанию горизонтальное)
• flex-row - горизонтальное направление (по умолчанию)
• flex-1 - элемент растягивается и занимает всё доступное место
• justify-start justify-center justify-end justify-between justify-around
• items-start items-center items-end items-stretch
• flex-wrap - перенос элементов на новую строку
• flex-nowrap - без переноса (по умолчанию)
• flex-shrink - уменьшение элементов
• justify-around - равномерное распределение с отступами
• justify-evenly - идеально равномерное распределение

```
Горизонтальное выравнивание:
|      justify-center | justify-center       |
| justify-between     |      justify-between |
| justify-start | justify-start              |
|                  justify-end | justify-end |
```

• items-center - элементы по центру по вертикали
• items-start - элементы прижаты к верху
• items-end - элементы прижаты к низу
• items-stretch - элементы растягиваются на всю высоту

```
Вертикальное выравнивание:
| ------------ | items-start | --------- | items-stretch |
| items-center | ----------- | --------- | items-stretch |
| ------------ | ----------- | items-end | items-stretch |
```

🔥 justify-center items-center - полное центрирование!
🔥 justify-between items-end - по краям и внизу

# Grid:

• grid - делает контейнер grid
• grid-cols-1 до grid-cols-12 - количество колонок
Эти значение задается вложенному элементу в grid сетку:
• col-span-2 - элемент занимает 2 колонки
• row-span-1 - занимает 1 строку (по умолчанию)
• row-span-2
• col-span-2 row-span-3 - займет два поля по вертикали и три по горизонтали
• gap-1 до gap-96 - отступы между элементами в flex/grid
• gap-x-4 - только горизонтальные отступы  
• gap-y-2 - только вертикальные отступы
• grid-rows-1 до grid-rows-6 - количество строк
• auto-cols-auto, auto-cols-min, auto-cols-max - авто-колонки

Пример кастомизации ширины колонок:
grid-cols-[40px_1fr] // тут \_ исп вместо пробела!!!

```
┌──────┬───────────────────────┐
│ 40px │   1fr                 │
│      │   (остальное место)   │
└──────┴───────────────────────┘
```

🎨 Важные утилиты:
• space-y-4 - отступы между дочерними элементами по вертикали
• divide-y - линии-разделители между элементами

# 🎨 Стилизация элементов:

## Закругление (Border Radius):

• rounded-sm - немного закругленные углы
• rounded - стандартные (0.25rem ≈ 4px)
• rounded-md - средние
• rounded-lg - большие
• rounded-xl - очень большие
• rounded-2xl - огромные
• rounded-3xl - максимально большие
• rounded-full - полностью круглые (для кнопок, аватаров)

## Направленное закругление:

• rounded-tl-lg - верхний левый
• rounded-tr-lg - верхний правый
• rounded-br-lg - нижний правый
• rounded-bl-lg - нижний левый

## Border (Рамки):

• border - толщина 1px
• border-2 - толщина 2px
• border-4 - толщина 4px
• border-8 - толщина 8px
• border-[3px] - кастомная толщина

## Цвета рамок:

• border-red-500 - красная рамка
• border-gray-300 - серая рамка
• border-blue-700 - синяя рамка

## Направления рамок:

• border-t - рамка сверху
• border-b - рамка снизу
• border-l - рамка слева
• border-r - рамка справа

## Стили рамок:

• border-solid - сплошная линия
• border-dashed - пунктирная линия
• border-dotted - точечная линия
• border-double - двойная линия
• border-none - без рамки

## Images (Изображения):

• object-cover - обрезает изображение, чтобы заполнить контейнер
• object-contain - сохраняет пропорции, без обрезания
• object-center - фокус по центру
• object-top - фокус вверху
• object-bottom - фокус внизу

# Typography (Типографика):

## 📏 Размеры шрифта (Font Size):

• text-xs - 0.75rem (12px) - Очень маленький текст
• text-sm - 0.875rem (14px) - Маленький текст  
• text-base - 1rem (16px) - Обычный текст (по умолчанию)
• text-lg - 1.125rem (18px) - Большой текст
• text-xl - 1.25rem (20px) - Очень большой текст
• text-2xl - 1.5rem (24px) - Заголовок H2
• text-3xl - 1.875rem (30px) - Заголовок H1  
• text-4xl - 2.25rem (36px) - Огромный заголовок
• text-5xl - 3rem (48px) - Супер заголовок
• text-6xl - 3.75rem (60px) - Мега заголовок
• text-7xl - 4.5rem (72px) - Гига заголовок
• text-8xl - 6rem (96px) - Максимальный заголовок
• text-9xl - 8rem (128px) - Экстремальный заголовок

## 💪 Толщина шрифта (Font Weight):

• font-thin - 100 - Тонкий шрифт
• font-extralight - 200 - Супер лёгкий
• font-light - 300 - Лёгкий шрифт
• font-normal - 400 - Обычный шрифт (по умолчанию)
• font-medium - 500 - Средний шрифт
• font-semibold - 600 - Полужирный
• font-bold - 700 - Жирный шрифт
• font-extrabold - 800 - Очень жирный
• font-black - 900 - Самый жирный

## 🎨 Цвет текста (Text Color):

• text-black - Чёрный текст
• text-white - Белый текст
• text-gray-500 - Серый текст (оттенки 50-950)
• text-red-500 - Красный текст
• text-blue-500 - Синий текст
• text-green-500 - Зелёный текст
• text-yellow-500 - Жёлтый текст
• text-purple-500 - Фиолетовый текст

## 📍 Выравнивание текста (Text Align):

• text-left - По левому краю
• text-center - По центру  
• text-right - По правому краю
• text-justify - По ширине

## 📝 Стиль текста (Text Style):

• italic - Курсив
• not-italic - Убрать курсив
• uppercase - ЗАГЛАВНЫЕ БУКВЫ
• lowercase - строчные буквы
• capitalize - Каждое Слово С Заглавной
• normal-case - Обычный регистр

## 🔗 Декорация текста (Text Decoration):

• underline - Подчёркнутый текст
• overline - Надчёркнутый текст
• line-through - Зачёркнутый текст
• no-underline - Убрать подчёркивание

## 📏 Межстрочный интервал (Line Height):

• leading-3 - 0.75rem (12px)
• leading-4 - 1rem (16px)
• leading-5 - 1.25rem (20px)
• leading-6 - 1.5rem (24px) - стандартный
• leading-7 - 1.75rem (28px)
• leading-8 - 2rem (32px)
• leading-9 - 2.25rem (36px)
• leading-10 - 2.5rem (40px)
• leading-none - 1 - Без отступа
• leading-tight - 1.25 - Плотный
• leading-snug - 1.375 - Уютный
• leading-normal - 1.5 - Нормальный
• leading-relaxed - 1.625 - Расслабленный
• leading-loose - 2 - Свободный

## 🎯 Практические примеры:

```html
<!-- Заголовок статьи -->
<h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
  Заголовок статьи
</h1>

<!-- Подзаголовок -->
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Подзаголовок</h2>

<!-- Обычный текст -->
<p className="text-base leading-relaxed text-gray-600">
  Обычный параграф текста с хорошим межстрочным интервалом
</p>

<!-- Акцентированный текст -->
<span className="text-lg font-medium text-blue-600 underline">
  Важная информация
</span>

<!-- Мелкий текст -->
<small className="text-sm text-gray-500 italic">
  Дополнительная информация
</small>
```

#

# 📱💻 Урок 4: Responsive Design

! Концепция Mobile-First
!! Tailwind использует подход mobile-first - стили пишутся сначала для мобильных, потом расширяются для больших экранов.

## Breakpoints (Точки разрыва):

• sm: 640px (small - планшет)
• md: 768px (medium - планшет)  
• lg: 1024px (large - десктоп)
• xl: 1280px (extra large)
• 2xl: 1536px (2x extra large)

```bash
    // Мобильная версия (по умолчанию):
    grid grid-cols-1 gap-4

    // Планшет и больше:
    md:grid-cols-2

    // Десктоп:
    lg:grid-cols-3
```

#

#

#

#

# 🎭 Основные псевдоселекторы:

## 🖱️ Состояния взаимодействия:

• hover: // при наведении мыши
• focus: // при получении фокуса (клик, Tab)
• active: // при нажатии (момент клика)
• visited: // посещенные ссылки
• disabled: // отключенные элементы

## 📍 Структурные псевдоселекторы:

• first: // первый дочерний элемент
• last: // последний дочерний элемент
• odd: // нечетные элементы (1, 3, 5...)
• even: // четные элементы (2, 4, 6...)
• empty: // пустые элементы

## 📝 Состояния формы:

• required: // обязательные поля
• invalid: // невалидные поля
• valid: // валидные поля
• checked: // отмеченные checkbox/radio

## 🖱️ Mouse States:

```bash
    hover:bg-blue-500     // при наведении мыши
    hover:scale-105       // увеличение при hover
    hover:shadow-xl       // тень при hover
    hover:text-white      // цвет текста при hover
    hover:rotate-6        // поворот при hover
```

## 🎯 Focus States:

```bash
    focus:outline-none    // убрать стандартную рамку фокуса
    focus:ring-4          // добавить кольцо фокуса
    focus:ring-blue-500   // цвет кольца фокуса
    focus:bg-gray-100     // цвет фона при фокусе
    focus:border-blue-500 // цвет рамки при фокусе
```

## 👆 Active States:

```bash
    active:bg-blue-700    // при нажатии
    active:scale-95       // уменьшение при клике
    active:translate-y-1  // сдвиг вниз при нажатии
```

## 🏢 Group Modifiers (групповые):

```html
<div className="group hover:bg-gray-100">
  <h3 className="group-hover:text-blue-600">Заголовок</h3>
  <p className="group-hover:translate-x-2">Текст сдвигается</p>
  <button className="group-hover:opacity-100 opacity-0">
    Кнопка появляется
  </button>
</div>
```

## 💡 Вложенные group'ы (для создания группы внутри групп:):

```html
<div className="group/card">
  // Именованная группа
  <div className="group/button">
    // Вложенная группа
    <span className="group-hover/card:text-red-500">Реагирует на card</span>
    <span className="group-hover/button:text-blue-500"
      >Реагирует на button</span
    >
  </div>
</div>
```

## 🚀 Другие group состояния:

• group-focus:opacity-100 // При фокусе на группе
• group-active:scale-95 // При клике на группе  
• group-disabled:opacity-50 // Если группа disabled

## 🔗 Peer Modifiers (соседние элементы):r

```html
<input className="peer" type="checkbox" />
<label className="peer-checked:text-blue-600">
  Меняет цвет когда checkbox отмечен
</label>
```

## 📍 Position-based (позиционные):

• first:rounded-t-lg // первый элемент
• last:rounded-b-lg // последний элемент  
• odd:bg-gray-100 // нечетные элементы
• even:bg-white // четные элементы

# 🎭 Основные псевдоэлементы:

## 🎯 Before и After псевдоэлементы:

• before: // ::before псевдоэлемент
• after: // ::after псевдоэлемент

```html
<div
  className="
  before:content-['★'] before:text-yellow-500 before:mr-2
  after:content-['NEW'] after:bg-red-500 after:text-white 
  after:text-xs after:px-1 after:rounded after:ml-2
"
>
  Продукт
</div>
```

## 🎯 Form псевдоэлементы:

• placeholder: // ::placeholder стили
• selection: // ::selection выделенный текст
• file: // input[type="file"] кнопка
• marker: // ::marker маркеры списков

## 🎨 Backdrop псевдоэлементы:

• backdrop: // ::backdrop для модальных окон

## 🌙 Dark mode:

<div className="
  bg-white dark:bg-gray-900
  text-black dark:text-white
"> Контент адаптируется под тему </div>
##

#

#

# ==================================================

# 🌈 Градиенты (Gradients):

## Направления градиентов:

• bg-gradient-to-r - слева направо →
• bg-gradient-to-l - справа налево ←  
• bg-gradient-to-t - снизу вверх ↑
• bg-gradient-to-b - сверху вниз ↓
• bg-gradient-to-tr - по диагонали ↗ (top-right)
• bg-gradient-to-tl - по диагонали ↖ (top-left)
• bg-gradient-to-br - по диагонали ↘ (bottom-right)
• bg-gradient-to-bl - по диагонали ↙ (bottom-left)

## Цвета градиента:

• from-blue-500 - начальный цвет
• to-purple-600 - конечный цвет  
• via-pink-500 - промежуточный цвет (опционально)

# 🌈 Gradient Text в Tailwind:

// Шаг 1: Применить градиент как background
bg-gradient-to-r from-blue-600 to-purple-600

// Шаг 2: Сделать текст прозрачным
text-transparent

// Шаг 3: Применить градиент к тексту
bg-clip-text

```html
<h1
  className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
>
  Gradient Text!
</h1>
```

## 🎭 Популярные градиенты:

```bash
// Радуга
bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent

// Огонь
bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent

// Океан
bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent

// Закат
bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent

// Неон
bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent
```

## Примеры градиентов:

```html
<!-- Простой горизонтальный градиент -->
<div className="bg-gradient-to-r from-blue-500 to-purple-600">
  <!-- Трёхцветный градиент -->
  <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600">
    <!-- Тёмный градиент -->
    <div className="bg-gradient-to-b from-gray-900 to-black"></div>
  </div>
</div>
```

# 🎭 Тени (Shadows):

• shadow-none - без тени
• shadow-sm - 0 1px 2px rgba(0, 0, 0, 0.05) - маленькая тень
• shadow - 0 1px 3px rgba(0, 0, 0, 0.1) - стандартная тень  
• shadow-md - 0 4px 6px rgba(0, 0, 0, 0.07) - средняя тень
• shadow-lg - 0 10px 15px rgba(0, 0, 0, 0.1) - большая тень
• shadow-xl - 0 20px 25px rgba(0, 0, 0, 0.1) - очень большая тень
• shadow-2xl - 0 25px 50px rgba(0, 0, 0, 0.25) - огромная тень
• shadow-inner - внутренняя тень

## Цветные тени:

• shadow-red-500/50 - красная тень с 50% прозрачностью
• shadow-blue-500/25 - синяя тень с 25% прозрачностью

# 💫 Opacity (Прозрачность):

• opacity-0 - полностью прозрачный (invisible)
• opacity-25 - 25% непрозрачности
• opacity-50 - 50% непрозрачности  
• opacity-75 - 75% непрозрачности
• opacity-100 - полностью непрозрачный (по умолчанию)

// Overlay скрыт по умолчанию, появляется при hover
opacity-0 group-hover:opacity-100

# 🎪 Трансформации (Transform):

## Scale (масштаб):

• scale-50 - уменьшить до 50%
• scale-75 - уменьшить до 75%
• scale-100 - нормальный размер
• scale-105 - увеличить до 105%
• scale-110 - увеличить до 110%  
• scale-125 - увеличить до 125%

## Rotate (поворот):

• rotate-0 - без поворота
• rotate-45 - поворот на 45°
• rotate-90 - поворот на 90°
• rotate-180 - поворот на 180°
• -rotate-45 - поворот на -45°

## Translate (сдвиг):

• translate-x-4 - сдвиг по X на 1rem
• translate-y-2 - сдвиг по Y на 0.5rem
• -translate-x-4 - сдвиг влево

# ⚡ Transitions (Переходы):

• transition-none - без анимации
• transition-all - анимация всех свойств
• transition-colors - анимация только цветов
• transition-transform - анимация только трансформации

## Duration (продолжительность):

• duration-75 - 75ms
• duration-150 - 150ms  
• duration-300 - 300ms (стандарт)
• duration-500 - 500ms
• duration-1000 - 1000ms (1 секунда)

## Примеры hover эффектов:

```html
<!-- Масштабирование при наведении -->
<div className="transition-transform duration-300 hover:scale-105">
  <!-- Изменение цвета при наведении -->
  <button
    className="transition-colors duration-200 bg-blue-500 hover:bg-blue-600"
  >
    <!-- Комбинированный эффект -->
    <div
      className="transition-all duration-300 hover:scale-105 hover:shadow-xl"
    ></div>
  </button>
</div>
```

# ==================================================

fit-content — размер элемента автоматически подстраивается под его содержимое, но не больше заданных ограничений (если они есть).

100vh — это значит 100% высоты видимой области экрана (viewport height).
• vh — это viewport height unit, то есть 1vh = 1% высоты окна браузера.
• 100vh = высота окна браузера полностью.

# ==================================================

#

#

# ==================================================

# Позиционирование (Position)

## Типы позиционирования:

• static // position: static (по умолчанию, в потоке документа)
• relative // position: relative (относительно своего обычного места)
• absolute // position: absolute (относительно ближайшего relative родителя)
• fixed // position: fixed (относительно окна браузера)
• sticky // position: sticky (липкое позиционирование)

## Координаты позиционирования:

// Основные направления
• top-0 // top: 0px
• top-4 // top: 1rem (16px)
• right-2 // right: 0.5rem (8px)
• bottom-0 // bottom: 0px
• left-1/2 // left: 50%

// Универсальные
• inset-0 // top: 0, right: 0, bottom: 0, left: 0 (заполняет весь родитель)
• inset-x-4 // left: 1rem, right: 1rem
• inset-y-2 // top: 0.5rem, bottom: 0.5rem

## Z-Index (слои):

• z-0 // z-index: 0
• z-10 // z-index: 10  
• z-auto // z-index: auto
• -z-10 // z-index: -10 (за другими элементами)

🟢 🎪 Z-Index слои (рекомендуемая иерархия):
z-0 // Обычный контент
z-10 // Dropdown меню, tooltips
z-20 // Sticky элементы  
z-30 // Навигация
z-40 // Floating кнопки
z-50 // Модальные окна

## 🎯 Практические примеры:

### 1. Badge поверх изображения (absolute):

<div className="relative">  {/* Родитель - relative */}
  <img src="product.jpg" className="w-full h-64" />
  
  {/* Badge в правом верхнем углу */}
  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded z-10">
    SALE
  </div>
</div>

### 2. Sticky навигация:

<nav className="sticky top-0 bg-white shadow-md z-50 px-6 py-4">
  <div className="flex justify-between items-center">
    <div>Logo</div>
    <div>Menu</div>
  </div>
</nav>

### 3. Fixed кнопка "Наверх":

<button className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-40 hover:bg-blue-600">
  ↑
</button>

### 4. Модальное окно (fixed):

<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="relative bg-white rounded-lg p-6 max-w-md mx-4">
    {/* Модальное содержимое */}
    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
      ✕
    </button>
    <h2>Заголовок модалки</h2>
    <p>Содержимое...</p>
  </div>
</div>

### 5. Dropdown меню:

<div className="relative group">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    Меню ▼
  </button>
  
  {/* Dropdown появляется при hover */}
  <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Пункт 1</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Пункт 2</a>
  </div>
</div>

### 6. Центрирование с absolute:

<div className="relative h-64 bg-gray-100">
  {/* Точное центрирование */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded">
    Идеально по центру!
  </div>
</div>

{/_ Или более простой способ _/}

<div className="relative h-64 bg-gray-100">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-blue-500 text-white p-4 rounded">
      Тоже по центру!
    </div>
  </div>
</div>

###

###

###

###

###

# ==================================================

# Продвинутые темы:

# ==================================================

tailwind.config.js - Это главный файл конфигурации Tailwind CSS, который позволяет:

- Добавлять кастомные цвета, размеры, шрифты
- Расширять дефолтные утилиты
- Создавать собственные breakpoints
- Настраивать темы и варианты

Конфигурация значений spacing в tailwind.config.js (для повторяющихся значений)

Чтобы добавить свои значения для spacing (например, p-18, m-88 и т.д.), нужно открыть файл tailwind.config.js и добавить следующий код 👇

```js
module.exports = {
  theme: {
    extend: {
      spacing: {
        18: "72px", // p-18 = 72px
        88: "350px", // m-88 = 350px
        128: "32rem", // w-128 = 32rem
      },
      colors: {
        "brand-blue": "#1E40AF", // кастомный цвет
        "brand-red": "#DC2626", // кастомный цвет
        "custom-gray": "#F3F4F6", // кастомный цвет
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"], // кастомный шрифт
        heading: ["Poppins", "sans-serif"], // кастомный шрифт
        mono: ["Fira Code", "monospace"], // кастомный шрифт
      },
      fontSize: {
        xxs: "0.625rem", // 10px
        "4.5xl": "2.625rem", // 42px
        huge: "5rem", // 80px
      },
      screens: {
        xs: "475px", // Дополнительный маленький
        "3xl": "1600px", // Очень большой экран
        tablet: "768px", // Именованный breakpoint
        laptop: "1024px",
        desktop: "1280px",
      },
      // кастомные тени:
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        heavy: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        "inner-lg": "inset 0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      // кастомное размытие:
      backdropBlur: {
        xs: "2px",
      },
      // кастомные анимации:
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-fast": "pulse 1s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
};
```

# 🎯 Как это использовать:

```html
// Кастомные цвета
<div className="bg-primary-500 text-white">
  <button className="bg-secondary hover:bg-secondary/80">
    // Кастомные размеры
    <div className="p-18 m-88">
      // Кастомные шрифты
      <h1 className="font-heading text-huge">
        // Кастомные breakpoints
        <div className="xs:block 3xl:text-center">
          // Кастомные анимации
          <div className="animate-fade-in animate-wiggle"></div>
        </div>
      </h1>
    </div>
  </button>
</div>
```

💡 Теперь можно использовать классы вроде p-18, m-88 или w-128 прямо в разметке.

# ==================================================

# Создание компонентов с @apply:

@apply - это директива Tailwind CSS, которая позволяет группировать утилиты в переиспользуемые CSS классы. Это мост между utility-first подходом и компонентным CSS.

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Здесь создаются компоненты с @apply */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200;
  }
}
```

## @layer - это способ организации CSS в слои с определенной иерархией. Tailwind обрабатывает слои в строгом порядке:

1. @layer base - Базовые стили (сброс, нормализация)
2. @layer components - Компоненты (кнопки, карточки)
3. @layer utilities - Утилиты (отступы, цвета)

```css
/* src/index.css */

/* 1. Импорт слоев Tailwind */
@tailwind base; /* Сброс стилей, normalize.css */
@tailwind components; /* Все компонентные классы */
@tailwind utilities; /* Все утилитарные классы */

/* 2. Ваши кастомные стили в слоях */
@layer base {
  /* Базовые стили для HTML элементов */
}

@layer components {
  /* Ваши компоненты с @apply */
}

@layer utilities {
  /* Ваши утилиты */
}
```

## 🎯 @layer base - Базовые стили:

Для чего: Стили для HTML тегов напрямую

```css
@layer base {
  /* Стили для всех h1 на сайте */
  h1 {
    @apply text-3xl font-bold text-gray-900;
  }

  /* Стили для всех параграфов */
  p {
    @apply text-base leading-relaxed text-gray-700;
  }

  /* Стили для всех ссылок */
  a {
    @apply text-blue-600 hover:text-blue-800 underline;
  }

  /* Кастомные CSS переменные */
  :root {
    --primary-color: #3b82f6;
    --secondary-color: #10b981;
  }

  /* Глобальные стили body */
  body {
    @apply font-sans bg-gray-50 text-gray-900;
  }
}
```

## 🧩 @layer components - Компоненты:

Для чего: Переиспользуемые классы-компоненты

```css
@layer components {
  /* Базовая кнопка */
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 
           font-medium rounded-md transition-colors duration-200 
           focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  /* Варианты кнопок */
  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700 
           focus:ring-blue-500;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-900 hover:bg-gray-300 
           focus:ring-gray-500;
  }

  /* Карточка */
  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200 
           overflow-hidden;
  }

  .card-header {
    @apply px-6 py-4 border-b border-gray-200 bg-gray-50;
  }

  .card-body {
    @apply px-6 py-4;
  }

  /* Инпут */
  .input {
    @apply block w-full px-3 py-2 border border-gray-300 
           rounded-md shadow-sm focus:outline-none 
           focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
  }
}
```

## ⚡ @layer utilities - Утилиты:

Для чего: Мелкие вспомогательные классы

```css
@layer utilities {
  /* Кастомная тень */
  .shadow-glow {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  }

  /* Скрытие скроллбара */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Градиентный текст */
  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 
           bg-clip-text text-transparent;
  }

  /* Анимация появления */
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
```

## 🏗️ Порядок приоритета (важно!):

CSS применяется в порядке слоев:
base → components → utilities

Это означает:

utilities перебивают components
components перебивают base

📁 Полный пример index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans bg-gray-50;
  }

  h1,
  h2,
  h3 {
    @apply font-bold text-gray-900;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium transition-colors;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }
}
```

## 🎯 Использование в компонентах:

```jsx
function MyComponent() {
  return (
    <div className='card'>
      <h1>Заголовок</h1>
      {/* стили из @layer base */}
      <p>Контент карточки</p>
      <button className='btn-primary text-shadow'>
        {/* btn-primary из @layer components */}
        {/* text-shadow из @layer utilities */}
        Кнопка
      </button>
    </div>
  );
}
```

# ==================================================

# 🌙 Dark Mode в Tailwind CSS

Dark Mode - это функция Tailwind CSS, которая позволяет легко создавать темную тему для вашего сайта. Tailwind использует CSS медиа-запрос `prefers-color-scheme` или класс для переключения тем.

## 🔧 Настройка Dark Mode в tailwind.config.js:

```js
module.exports = {
  darkMode: "media", // Автоматически по системным настройкам
  // или
  darkMode: "class", // Ручное переключение через класс 'dark'
  // или
  darkMode: "selector", // Новый способ (v3.4+)

  theme: {
    extend: {
      // Ваши кастомизации...
    },
  },
};
```

## 🎯 Варианты настройки Dark Mode:

### 1. **'media'** - Автоматический Dark Mode:

- Следует системным настройкам пользователя
- Автоматически переключается
- Нет контроля с JavaScript

```css
/* Автоматически применяется при темной теме системы */
@media (prefers-color-scheme: dark) {
  .dark\:bg-gray-900 {
    background-color: #111827;
  }
}
```

### 2. **'class'** - Ручное переключение:

- Полный контроль через JavaScript
- Класс 'dark' на html или body
- Можно сохранять выбор пользователя

```html
<!-- Light mode -->
<html class="">
  <body class="text-black bg-white"></body>
</html>

<!-- Dark mode -->
<html class="dark">
  <body class="text-black bg-white dark:bg-gray-900 dark:text-white"></body>
</html>
```

## 🎨 Основные классы Dark Mode:

### Фоны:

```html
<!-- Белый фон в light, темно-серый в dark -->
<div class="bg-white dark:bg-gray-900">
  <!-- Светло-серый в light, средне-серый в dark -->
  <div class="bg-gray-100 dark:bg-gray-800">
    <!-- Кастомные цвета для темной темы -->
    <div class="bg-blue-500 dark:bg-blue-600"></div>
  </div>
</div>
```

### Текст:

```html
<!-- Черный текст в light, белый в dark -->
<p class="text-black dark:text-white">
  <!-- Серый текст с разными оттенками -->
</p>

<p class="text-gray-700 dark:text-gray-300">
  <!-- Цветной текст с адаптацией -->
</p>

<p class="text-blue-600 dark:text-blue-400"></p>
```

### Границы:

```html
<!-- Границы адаптируются под тему -->
<div class="border-gray-200 dark:border-gray-700">
  <!-- Разделители -->
  <hr class="border-gray-300 dark:border-gray-600" />
</div>
```

### Тени:

```html
<!-- Тени для light и dark режимов -->
<div class="shadow-lg dark:shadow-2xl">
  <!-- Убрать тень в dark mode -->
  <div class="shadow-md dark:shadow-none"></div>
</div>
```

## 🔄 JavaScript для переключения Dark Mode:

### Базовая реализация:

```javascript
// Переключение темы
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Загрузка сохраненной темы при старте
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
}

// Вызываем при загрузке страницы
loadTheme();
```

### React хук для Dark Mode:

```jsx
import { useState, useEffect } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Проверяем сохраненную тему
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return [isDark, toggleTheme];
}

// Использование в компоненте
function ThemeToggle() {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
```

## 🎨 Цветовая палитра для Dark Mode:

### Рекомендуемые цвета:

**Backgrounds (Фоны):**

```html
<!-- Основные фоны -->
bg-white dark:bg-gray-900
<!-- Основной фон страницы -->
bg-gray-50 dark:bg-gray-800
<!-- Второстепенный фон -->
bg-gray-100 dark:bg-gray-700
<!-- Карточки, панели -->

<!-- Интерактивные элементы -->
bg-blue-500 dark:bg-blue-600
<!-- Кнопки -->
bg-red-500 dark:bg-red-600
<!-- Опасные действия -->
bg-green-500 dark:bg-green-600
<!-- Успешные действия -->
```

**Text (Текст):**

```html
<!-- Основной текст -->
text-gray-900 dark:text-gray-100
<!-- Заголовки -->
text-gray-700 dark:text-gray-300
<!-- Основной текст -->
text-gray-500 dark:text-gray-400
<!-- Второстепенный текст -->

<!-- Цветной текст -->
text-blue-600 dark:text-blue-400
<!-- Ссылки -->
text-red-600 dark:text-red-400
<!-- Ошибки -->
text-green-600 dark:text-green-400
<!-- Успех -->
```

**Borders (Границы):**

```html
border-gray-200 dark:border-gray-700
<!-- Основные границы -->
border-gray-300 dark:border-gray-600
<!-- Разделители -->
```

## 🧩 Компоненты с Dark Mode:

### Карточка с темной темой:

```jsx
function DarkCard({ title, content }) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-700 p-6'>
      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
        {title}
      </h3>
      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
        {content}
      </p>
    </div>
  );
}
```

### Навигация с темной темой:

```jsx
function Navigation() {
  return (
    <nav className='bg-white dark:bg-gray-900 shadow-md dark:shadow-lg border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='text-xl font-bold text-gray-900 dark:text-white'>
            Logo
          </div>
          <div className='flex space-x-4'>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md transition-colors'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md transition-colors'
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### Форма с темной темой:

```jsx
function DarkForm() {
  return (
    <form className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg'>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
          Email
        </label>
        <input
          type='email'
          className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors'
      >
        Submit
      </button>
    </form>
  );
}
```

## 🔥 Продвинутые техники:

### Градиенты для Dark Mode:

```html
<!-- Адаптивные градиенты -->
<div
  class="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700"
>
  <!-- Градиентный текст -->
  <h1
    class="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text"
  ></h1>
</div>
```

### Изображения для Dark Mode:

```jsx
function AdaptiveImage() {
  return (
    <picture>
      <source srcSet='dark-logo.png' media='(prefers-color-scheme: dark)' />
      <img src='light-logo.png' alt='Logo' className='h-8' />
    </picture>
  );
}

// Или с условным рендерингом
function ThemedImage({ isDark }) {
  return (
    <img
      src={isDark ? "dark-logo.png" : "light-logo.png"}
      alt='Logo'
      className='h-8'
    />
  );
}
```

### Системная интеграция:

```javascript
// Следить за изменениями системной темы
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      // Если пользователь не выбрал тему вручную
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });
```

## 💡 Лучшие практики Dark Mode:

### ✅ Что делать:

- **Тестируйте контрастность** - текст должен быть читаемым
- **Используйте приглушенные цвета** вместо чисто черного/белого
- **Адаптируйте изображения и иконки** под темную тему
- **Сохраняйте выбор пользователя** в localStorage
- **Плавные переходы** между темами с transition

### ❌ Чего избегать:

- **Резкий контраст** (#000000 на #FFFFFF)
- **Забывать про accessibility** - проверяйте контрастность
- **Игнорировать системные настройки** пользователя
- **Слишком яркие цвета** в темной теме

## 🎯 Готовый пример - Полноценная страница с Dark Mode:

```jsx
import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
      {/* Header */}
      <header className='bg-white dark:bg-gray-800 shadow-sm dark:shadow-lg'>
        <div className='max-w-4xl mx-auto px-4 py-6 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            My App
          </h1>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Card 1 */}
          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl p-6 border border-gray-200 dark:border-gray-700'>
            <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
              Light/Dark Card
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Эта карточка автоматически адаптируется под выбранную тему.
            </p>
            <button className='bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'>
              Click Me
            </button>
          </div>

          {/* Card 2 */}
          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl p-6 border border-gray-200 dark:border-gray-700'>
            <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
              Status Colors
            </h2>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-green-500 dark:bg-green-400'></div>
                <span className='text-green-700 dark:text-green-300'>
                  Success
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400'></div>
                <span className='text-yellow-700 dark:text-yellow-300'>
                  Warning
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-red-500 dark:bg-red-400'></div>
                <span className='text-red-700 dark:text-red-300'>Error</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
```
