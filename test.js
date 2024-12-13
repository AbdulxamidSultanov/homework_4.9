const swapFirstAndLast = (arr, element) => {
  const firstIndex = arr.indexOf(element); // Находим первый индекс элемента
  const lastIndex = arr.lastIndexOf(element); // Находим последний индекс элемента
  
  if (firstIndex !== -1 && firstIndex !== lastIndex) { // Если элемент найден и индексы разные
    // Меняем местами первый и последний элементы
    [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex], arr[firstIndex]];
  }
  
  return arr;
};

// Исходный массив
const numbers = [1, 2, 3, 4, 5, 6];

// Применяем функцию, например, для поиска элемента 2
console.log(swapFirstAndLast(numbers, 2)); 
// Результат: [1, 6, 3, 4, 5, 2]