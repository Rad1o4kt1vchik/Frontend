# Lab 02 - Task 1: Fragment Drill & List Mapping

## Описание
Лабораторная работа по React, демонстрирующая использование фрагментов и рендеринг списков.

## Компоненты
- **FragmentLayout**: три siblings (header, main, footer) обёрнуты фрагментом
- **ItemList**: список из массива через .map() с key
- **CombinedComponent**: фрагмент с заголовком, списком и подсчётом элементов

## Установка и запуск

npm install
npm run dev

## Проверка в DevTools
Открой DevTools → Elements и найди FragmentLayout. 
Между родителем и header/main/footer не должно быть wrapper div.
