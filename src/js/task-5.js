//* deque (double-ended queue)
import Deque from 'double-ended-queue';

const deque = new Deque();

// Додаємо елементи в дек
deque.push(1); // Додає елемент в кінець
deque.unshift(2); // Додає елемент на початок

// Виведення та видалення елементів
// console.log(deque.pop()); // Видаляє і повертає елемент з кінця -> 1
// console.log(deque.shift()); // Видаляє і повертає елемент з початку -> 2

// Додаємо кілька елементів
deque.push(3);
deque.push(4);
deque.push(5);

// Доступ до елементів
// console.log(deque.peekFront()); // Отримує перший елемент -> 3
// console.log(deque.peekBack()); // Отримує останній елемент -> 5

// Отримання розміру черги
// console.log(deque.length); // Output: 3

// Перевірка, чи порожня черга
// console.log(deque.isEmpty()); // Output: false

// Видаляємо всі елементи
deque.clear();
// console.log(deque.isEmpty()); // Output: true
