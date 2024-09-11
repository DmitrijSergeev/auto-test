enum Engine {
    petrol = 'Бензиновый',
    diesel = 'Дизельный',
    electric = 'Электрический'
}
enum Transmission {
    automatic = 'Автоматическая',
    manual = 'Ручная',
    robot = 'Роботизированная'
}
export type AutoTypes = {
    image: string
    brand: string
    model: string
    color: string
    price: number
    year: number
    engineType: Engine
    transmission: Transmission
    range: number
}

export const autos = [
    {
        image: "https://example.com/images/car.jpg", // URL изображения
        brand: "Toyota", // Бренд
        model: "Camry", // Модель
        color: "Черный", // Цвет
        price: 25000, // Цена
        year: 2020, // Год выпуска
        engineType: Engine.diesel, // Тип двигателя (Бензиновый, Дизельный, Электрический)
        transmission: Transmission.manual, // Трансмиссия (Автоматическая, Ручная, Роботизированная)
        range: 500 // Запас хода (в км)
    },
    {
        image: "https://example.com/images/car.jpg", // URL изображения
        brand: "BMW", // Бренд
        model: "Camry", // Модель
        color: "Черный", // Цвет
        price: 25000, // Цена
        year: 2020, // Год выпуска
        engineType: Engine.diesel, // Тип двигателя (Бензиновый, Дизельный, Электрический)
        transmission: Transmission.manual, // Трансмиссия (Автоматическая, Ручная, Роботизированная)
        range: 500 // Запас хода (в км)
    },
    {
        image: "https://example.com/images/car.jpg", // URL изображения
        brand: "Ford", // Бренд
        model: "Camry", // Модель
        color: "Черный", // Цвет
        price: 25000, // Цена
        year: 2020, // Год выпуска
        engineType: Engine.diesel, // Тип двигателя (Бензиновый, Дизельный, Электрический)
        transmission: Transmission.manual, // Трансмиссия (Автоматическая, Ручная, Роботизированная)
        range: 500 // Запас хода (в км)
    },
    {
        image: "https://example.com/images/car.jpg", // URL изображения
        brand: "Lada", // Бренд
        model: "Camry", // Модель
        color: "Черный", // Цвет
        price: 25000, // Цена
        year: 2020, // Год выпуска
        engineType: Engine.diesel, // Тип двигателя (Бензиновый, Дизельный, Электрический)
        transmission: Transmission.manual, // Трансмиссия (Автоматическая, Ручная, Роботизированная)
        range: 500 // Запас хода (в км)
    },
]



// export const auto: AutoTypes = {
//     image: "https://example.com/images/car.jpg", // URL изображения
//     brand: "Toyota", // Бренд
//     model: "Camry", // Модель
//     color: "Черный", // Цвет
//     price: 25000, // Цена
//     year: 2020, // Год выпуска
//     engineType: EngineTypes.diesel, // Тип двигателя (Бензиновый, Дизельный, Электрический)
//     transmission: "Автоматическая", // Трансмиссия (Автоматическая, Ручная, Роботизированная)
//     range: 500 // Запас хода (в км)
// };

// Проверка доступности полей в зависимости от типа двигателя
// if (auto.engineType === "Электрический") {
//     auto.transmission = undefined; // Удаляем поле transmission для электрических автомобилей
// } else {
//     auto.range = undefined; // Удаляем поле range для бензиновых и дизельных автомобилей
// }

// console.log(auto);