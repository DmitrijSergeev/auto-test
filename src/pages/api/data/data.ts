export const auto = {
    image: "https://example.com/images/car.jpg", // URL изображения
    brand: "Toyota", // Бренд
    model: "Camry", // Модель
    color: "Черный", // Цвет
    price: 25000, // Цена
    year: 2020, // Год выпуска
    engineType: "Бензиновый", // Тип двигателя (Бензиновый, Дизельный, Электрический)
    transmission: "Автоматическая", // Трансмиссия (Автоматическая, Ручная, Роботизированная)
    range: 500 // Запас хода (в км)
};

// Проверка доступности полей в зависимости от типа двигателя
if (auto.engineType === "Электрический") {
    auto.transmission = undefined; // Удаляем поле transmission для электрических автомобилей
} else {
    auto.range = undefined; // Удаляем поле range для бензиновых и дизельных автомобилей
}

console.log(auto);