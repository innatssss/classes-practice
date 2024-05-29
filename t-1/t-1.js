// Create a factory function that generates person objects with the following properties: name, age, and job. Also, add a method called introduce that logs a message introducing the person.

function createPerson(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    introduce: function () {
      console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.job}.`
      );
    },
  };
}

const person1 = createPerson("Dom", 30, "Engineer");
person1.introduce();
const person2 = createPerson("Abra", 25, "Designer");
person2.introduce();

// Create a factory function that generates bank account objects with properties accountNumber, accountHolder, and balance. Implement methods for depositing and withdrawing funds from the account.
function createBankAccount(accountNumber, accountHolder, balance) {
  return {
    accountNumber: accountNumber,
    accountHolder: accountHolder,
    balance: balance,

    //to deposit
    deposit: function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    },

    // to withdraw
    withdraw: function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    },
  };
}

const account1 = createBankAccount("123456", "Alice", 500);
account1.deposit(200);
account1.withdraw(100);

const account2 = createBankAccount("654321", "Bob", 1000);
account2.deposit(500);
account2.withdraw(2000);

//  Create a constructor function named Animal that takes species, name, and sound as parameters and creates animal objects. Include a method called makeSound that logs the sound the animal makes.
function Animal(species, name, sound) {
  this.species = species;
  this.name = name;
  this.sound = sound;

  this.makeSound = function () {
    console.log(`${this.name} the ${this.species} says ${this.sound}`);
  };
}

const dog = new Animal("Dog", "Buddy", "Woof");
dog.makeSound();
const cat = new Animal("Cat", "Whiskers", "Meow");
cat.makeSound();
const cow = new Animal("Cow", "Bessie", "Moo");
cow.makeSound();

//Create a constructor function named Book that takes title, author, and pages as parameters and creates book objects. Implement a method called read that logs a message indicating the book has been read.
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.read = function () {
    console.log(
      `You have read "${this.title}" by ${this.author}, which has ${this.pages} pages.`
    );
  };
}

const book1 = new Book("Norwegian Wood", "Haruki Murakami", 400);
book1.read(); // Output: You have read "Norwegian Wood" by Haruki Murakami, which has 400 pages.

const book2 = new Book("1984", "George Orwell", 328);
book2.read(); // Output: You have read "1984" by George Orwell, which has 328 pages.


//Create a class called Student with a constructor that takes name, age, and grade as parameters. Add a method called study that logs a message indicating the student is studying.
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}


const student1 = new Student('Anna', 21, 'Bell');
student1.study(); 

const student2 = new Student('Sofi', 19, 'Sellmann');
student2.study();

