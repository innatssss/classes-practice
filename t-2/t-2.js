//Create a shape hierarchy using classes in JavaScript. Implement a base class called Shape and two derived classes called Circle and Rectangle. Each class should have appropriate constructors and methods. Should have methods for getting area and circumference

class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error("getArea method must be implemented");
  }

  getCircumference() {
    throw new Error("getCircumference method must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  // get the area of the circle
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // get the circumference of the circle
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  //the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // circumference (perimeter) of the rectangle
  getCircumference() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
console.log(`Shape: ${circle.name}`);
console.log(`Area: ${circle.getArea()}`);
console.log(`Circumference: ${circle.getCircumference()}`);

const rectangle = new Rectangle(10, 5);
console.log(`Shape: ${rectangle.name}`);
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Circumference: ${rectangle.getCircumference()}`);

//Create a class hierarchy representing products in an online shop. Use inheritance to create a base class Product and derived classes like Book, Electronics, and Clothing. Each class should have appropriate properties and methods. Should have name and price and specific Add properties and methods specific to each type of product.Implement a method to apply a discount to the price for each type.
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Method to apply a discount
  applyDiscount(discount) {
    this.price -= this.price * (discount / 100);
  }
}

class Book extends Product {
  constructor(name, price, author, genre) {
    super(name, price);
    this.author = author;
    this.genre = genre;
  }

  // Method to get book details
  getDetails() {
    return `${this.name} by ${this.author}, Genre: ${
      this.genre
    }, Price: $${this.price.toFixed(2)}`;
  }
}

class Electronics extends Product {
  constructor(name, price, brand, warranty) {
    super(name, price);
    this.brand = brand;
    this.warranty = warranty;
  }

  // Method to get electronics details
  getDetails() {
    return `${this.name} by ${this.brand}, Warranty: ${
      this.warranty
    } years, Price: $${this.price.toFixed(2)}`;
  }
}

class Clothing extends Product {
  constructor(name, price, size, material) {
    super(name, price);
    this.size = size;
    this.material = material;
  }

  // Method to get clothing details
  getDetails() {
    return `${this.name}, Size: ${this.size}, Material: ${
      this.material
    }, Price: $${this.price.toFixed(2)}`;
  }
}

// Create instances of products
const book = new Book(
  "The Great Gatsby",
  10.99,
  "F. Scott Fitzgerald",
  "Classic"
);
const electronics = new Electronics("Laptop", 999.99, "Dell", 2);
const clothing = new Clothing("T-Shirt", 19.99, "L", "Cotton");

// product details
document.getElementById("book-details").innerText = book.getDetails();
document.getElementById("electronics-details").innerText =
  electronics.getDetails();
document.getElementById("clothing-details").innerText = clothing.getDetails();

// Function to apply discount
function applyDiscount(productType) {
  let product;
  switch (productType) {
    case "book":
      product = book;
      break;
    case "electronics":
      product = electronics;
      break;
    case "clothing":
      product = clothing;
      break;
    default:
      return;
  }
  product.applyDiscount(10); // Applying a 10% discount
  document.getElementById(`${productType}-details`).innerText =
    product.getDetails();
}


// Create a class hierarchy representing different types of animals in a zoo. Use inheritance to create a base class Animal and derived classes like Mammal, Bird, and Reptile. Each class should have appropriate properties and methods.Should have properties name, species and method makeSound(). Override the makeSound() method to log an appropriate sound for each type.

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        throw new Error('makeSound method must be implemented');
    }
}

class Mammal extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        return `${this.name} the ${this.species} says Roar!`;
    }
}

class Bird extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        return `${this.name} the ${this.species} sings Chirp chirp!`;
    }
}

class Reptile extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        return `${this.name} the ${this.species} hisses Ssssss!`;
    }
}

// instances of animals
const lion = new Mammal('Leo', 'Lion');
const sparrow = new Bird('Sunny', 'Sparrow');
const snake = new Reptile('Slither', 'Snake');

// animal information on the web page
const animalInfoDiv = document.getElementById('animal-info');

const lionInfo = document.createElement('p');
lionInfo.textContent = lion.makeSound();
animalInfoDiv.appendChild(lionInfo);

const sparrowInfo = document.createElement('p');
sparrowInfo.textContent = sparrow.makeSound();
animalInfoDiv.appendChild(sparrowInfo);

const snakeInfo = document.createElement('p');
snakeInfo.textContent = snake.makeSound();
animalInfoDiv.appendChild(snakeInfo);
