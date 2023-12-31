# lists-test-task

## Технологии: Vue3 (Options API), Pinia, Vite, Prettier

## Текст задания:

Левая панель имеет список Lists с вложенными списками неких Items. У каждого Item есть параметры "количество" и "цвет", которые можно менять вручную. Item помечается как выбранный с помощью чекбокса.

Все выбранные Items отображаются на правой панели в отдельном блоке для каждого List в указанном количестве в виде цветных квадратиков.

Каждый отдельный блок List имеет два состояния: отсортированное и перемешанное в случайном порядке.

Входные данные: 5 листов от 4 до 10 вложенных элементов (произвольно)

## Требования:

- При клике на чекбокс уровня List должны выбираться все вложенные Items. Если все вложенные Items уже выбраны, то снимать с них выделение. Если выбран хотя бы один Item, но не все, то отображать точку в чекбоксе родительского List. (выполнено)
- Должна быть возможность изменять параметр "количество" у Item; (выполнено)
- Должна быть возможность изменять параметр "цвет" у Item; (выполнено)
- Сортировка и перемешивание List'ов по отдельности; (выполнено)
- Все действия на странице должны происходить без её перезагрузки; (выполнено)
- Все изменяемые значения должны быть реактивными; (выполнено)
- У каждого Item изначально должны быть указаны параметры "количество" и "цвет" по умолчанию (задать произвольно). (выполнено)

### Дополнительно

- Lists в левой панели должны сворачиваться и разворачиваться; (выполнено)
- При клике на квадратик в правой панели он должен удаляться (уменьшаться параметр
  "количество" у соответствующего Item). (выполнено)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
