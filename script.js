// 1. Добавить элемент
let arr = [1, 2];
arr.push(3);
console.log(arr);

// 2. Удалить элемент
arr = ["a", "b", "c"];
console.log(arr.pop());

// 3. Проверка наличия
arr = [10, 20, 30, 40];
console.log(arr.includes(100));

// 4. Получить подмассив
arr = [5, 10, 15, 20, 25];
console.log(arr.slice(1, 4));

// 5. Замена через splice
arr = [1, 2, 3, 4];
arr.splice(1, 2, "X", "Y");
console.log(arr);

// 6. Умножение элементов
arr = [2, 4, 6];
console.log(arr.map(x => x * 10));

// 7. Фильтрация чётных чисел
arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter(x => x % 2 === 0));

// 8. Сумма элементов
arr = [10, 20, 30, 40];
console.log(arr.reduce((sum, x) => sum + x, 0));

// 9. Найти объект
let users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Olga" }
];
console.log(users.find(user => user.name === "Ivan"));

// 10. Сортировка
arr = [100, 5, 20, 15];
console.log(arr.sort((a, b) => a - b));

// 11. Анализ данных пользователей
users = [
    { id: 1, name: "Anna", age: 25, city: "Moscow", salary: 80000 },
    { id: 2, name: "Ivan", age: 30, city: "SPb", salary: 120000 },
    { id: 3, name: "Olga", age: 22, city: "Moscow", salary: 60000 },
    { id: 4, name: "Alex", age: 35, city: "SPb", salary: 150000 }
];
let result = users
    .filter(u => u.city === "Moscow" && u.age > 23)
    .sort((a, b) => b.salary - a.salary)
    .map(u => u.name);
console.log(result);

// 12. Трансформация матрицы
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let transformed = matrix
    .flat()
    .filter(n => n % 2 !== 0)
    .map(n => n * 2)
    .sort((a, b) => a - b);
console.log(transformed);

// 13. Фильтрация списка товаров
const products = [
    { id: 1, name: "Ноутбук", price: 25000 },
    { id: 2, name: "Мышь", price: 800 },
    { id: 3, name: "Клавиатура", price: 1200 },
    { id: 4, name: "Наушники", price: 1500 }
];
let cheapProducts = products
    .filter(p => p.price < 1000)
    .sort((a, b) => a.price - b.price);
console.log(cheapProducts);

// 14. Поиск пользователя по email
users = [
    { id: 1, name: "Иван", email: "ivan@mail.com" },
    { id: 2, name: "Мария", email: "maria@mail.com" },
    { id: 3, name: "Алексей", email: "alex@mail.com" }
];
const searchEmail = "maria@mail.com";
console.log(users.find(u => u.email === searchEmail));

// 15. Подсчет общей суммы заказа
const cartItems = [
    { id: 1, name: "Футболка", price: 500, quantity: 2 },
    { id: 2, name: "Джинсы", price: 2000, quantity: 1 },
    { id: 3, name: "Кроссовки", price: 3000, quantity: 1 }
];
let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total);

// 16. Получение списка имен пользователей
users = [
    { id: 1, name: "Иван", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Алексей", age: 28 }
];
console.log(users.map(u => u.name));

// 17. Поиск самого дорогого товара
products = [
    { id: 1, name: "Телефон", price: 15000 },
    { id: 2, name: "Планшет", price: 25000 },
    { id: 3, name: "Ноутбук", price: 45000 }
];
let mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max);
console.log(mostExpensive);

// 18. Проверка наличия товара в корзине
const cart = [
    { id: 1, name: "Книга", price: 500 },
    { id: 2, name: "Ручка", price: 50 },
    { id: 3, name: "Блокнот", price: 200 }
];
const productIdToCheck = 2;
console.log(cart.some(item => item.id === productIdToCheck));

// 19. Удаление товара из корзины
let cartMutable = [
    { id: 1, name: "Книга", price: 500 },
    { id: 2, name: "Ручка", price: 50 },
    { id: 3, name: "Блокнот", price: 200 }
];
const productIdToRemove = 2;
cartMutable = cartMutable.filter(item => item.id !== productIdToRemove);
console.log(cartMutable);

// 20. Добавление нового товара в корзину
cartMutable = [
    { id: 1, name: "Книга", price: 500 },
    { id: 2, name: "Ручка", price: 50 }
];
const newProduct = { id: 3, name: "Карандаш", price: 30 };
if (!cartMutable.some(item => item.id === newProduct.id)) {
    cartMutable.push(newProduct);
}
console.log(cartMutable);
