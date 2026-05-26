import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonOopsBasic = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'OOPs Basics' }
        ]}
        title="OOPs Basics in Python"
        readTime="24 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What is OOPs?</h2>

      <ul>
        <li>
          <p>
            OOPS stands for Object Oriented Programming.
          </p>
        </li>

        <li>
          <p>
            It is a different way of writing code that deals with creating
            classes and objects.
          </p>
        </li>

        <li>
          <p>
            You can create your own data types using classes.
          </p>
        </li>

        <li>
          <p>
            Helps to manage big code more easily.
          </p>
        </li>

        <li>
          <p>
            Makes code reusable, organized and secure.
          </p>
        </li>
      </ul>

      <h2>Four Pillars of OOPs</h2>

      <ul>
        <li>
          <p>
            1. Abstraction
          </p>
        </li>

        <li>
          <p>
            2. Encapsulation
          </p>
        </li>

        <li>
          <p>
            3. Inheritance
          </p>
        </li>

        <li>
          <p>
            4. Polymorphism
          </p>
        </li>
      </ul>

      <h2>1. Abstraction</h2>

      <ul>
        <li>
          <p>
            Abstraction means hiding underlying complexity and showing only
            essential details to the user.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            While driving a car, you only use steering, brake and accelerator.
            Internal engine working is hidden.
          </p>
        </li>
      </ul>

      <h3>1. Abstraction Example</h3>

      <CodeBlock filename="abstraction_example.py">{`<span class="cmt"># Abstraction example</span>

class Car:

    def start(self):

        print("Car started")

c = Car()

c.start()`}</CodeBlock>

      <h2>2. Encapsulation</h2>

      <ul>
        <li>
          <p>
            Encapsulation means binding data and methods together into a single
            unit.
          </p>
        </li>

        <li>
          <p>
            It also helps in data hiding and security.
          </p>
        </li>
      </ul>

      <h3>2. Encapsulation Example</h3>

      <CodeBlock filename="encapsulation_example.py">{`<span class="cmt"># Encapsulation example</span>

class Bank:

    def __init__(self):

        self.balance = 1000

    def show_balance(self):

        print(self.balance)

b = Bank()

b.show_balance()`}</CodeBlock>

      <h2>3. Inheritance</h2>

      <ul>
        <li>
          <p>
            Inheritance allows one class to use properties and methods of
            another class.
          </p>
        </li>

        <li>
          <p>
            Helps in code reusability.
          </p>
        </li>
      </ul>

      <h3>3. Inheritance Example</h3>

      <CodeBlock filename="inheritance_example.py">{`<span class="cmt"># Inheritance example</span>

class Parent:

    def display(self):

        print("Parent class")

class Child(Parent):

    pass

c = Child()

c.display()`}</CodeBlock>

      <h2>4. Polymorphism</h2>

      <ul>
        <li>
          <p>
            Polymorphism means same method behaving differently in different
            situations.
          </p>
        </li>
      </ul>

      <h3>4. Polymorphism Example</h3>

      <CodeBlock filename="polymorphism_example.py">{`<span class="cmt"># Polymorphism example</span>

class Bird:

    def sound(self):

        print("Bird sound")

class Dog:

    def sound(self):

        print("Dog sound")

b = Bird()

d = Dog()

b.sound()

d.sound()`}</CodeBlock>

      <h2>What are Classes?</h2>

      <ul>
        <li>
          <p>
            Classes are blueprints for creating objects.
          </p>
        </li>

        <li>
          <p>
            A class defines properties (data) and methods (functions).
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            Dell Mouse is an object of Mouse class.
          </p>
        </li>

        <li>
          <p>
            SBI Bank can be considered as an object of Bank class.
          </p>
        </li>
      </ul>

      <h2>Class Contains Two Things</h2>

      <ul>
        <li>
          <p>
            Data (Variables / Attributes)
          </p>
        </li>

        <li>
          <p>
            Methods (Functions inside class)
          </p>
        </li>
      </ul>

      <h2>Difference Between Function and Method</h2>

      <CodeBlock filename="function_vs_method.txt">{`Function                         Method

Defined outside class            Defined inside class

Called directly                  Called using object

Independent                      Belongs to class`}</CodeBlock>

      <h2>Naming Convention</h2>

      <ul>
        <li>
          <p>
            Use PascalCase for class names.
          </p>
        </li>

        <li>
          <p>
            Use snake_case for methods and variables.
          </p>
        </li>
      </ul>

      <h3>5. Basic Class Example</h3>

      <CodeBlock filename="basic_class.py">{`<span class="cmt"># Basic class example</span>

class Student:

    def greet(self):

        print("Hello Student")

s1 = Student()

s1.greet()`}</CodeBlock>

      <h2>What are Objects?</h2>

      <ul>
        <li>
          <p>
            Everything in Python is an object.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>
      </ul>

      <CodeBlock filename="object_example.py">{`<span class="cmt"># Everything is object in Python</span>

a = 4

print(type(a))

<span class="cmt"># int object</span>`}</CodeBlock>

      <h2>Constructor in Python</h2>

      <ul>
        <li>
          <p>
            Constructor is a special method that runs automatically when object
            is created.
          </p>
        </li>

        <li>
          <p>
            Constructor name in Python is __init__().
          </p>
        </li>
      </ul>

      <h3>6. Constructor Example</h3>

      <CodeBlock filename="constructor_example.py">{`<span class="cmt"># Constructor example</span>

class Student:

    def __init__(self):

        print("Constructor called")

s1 = Student()`}</CodeBlock>

      <h2>Understanding self Keyword</h2>

      <ul>
        <li>
          <p>
            self refers to current object.
          </p>
        </li>

        <li>
          <p>
            Used to access variables and methods inside class.
          </p>
        </li>
      </ul>

      <h3>7. self Keyword Example</h3>

      <CodeBlock filename="self_keyword.py">{`<span class="cmt"># self keyword example</span>

class Student:

    def __init__(self, name):

        self.name = name

    def show(self):

        print(self.name)

s1 = Student("Tej")

s1.show()`}</CodeBlock>

      <h2>ATM Class Project</h2>

      <ul>
        <li>
          <p>
            Below is a mini real-world ATM system using classes and objects.
          </p>
        </li>
      </ul>

      <h3>8. Designing our own ATM Class</h3>

      <CodeBlock filename="atm_project.py">{`<span class="cmt"># Designing our own ATM class</span>

class ATM:

    def __init__(self):

        self.pin = ""

        self.balance = 0

        print(id(self))

        self.menu()

    def menu(self):

        userInput = input("Enter 1 to Create a Pin! \\n Enter 2 to Check Balance! \\n Enter 3 to Deposit Money! \\n Enter 4 to Withdraw money! \\n Enter 5 to exit!")

        if userInput == "1":

            self.create_pin()

        elif userInput == "2":

            self.check_balance()

        elif userInput == "3":

            self.deposit_money()

        elif userInput == "4":

            self.withdraw()

        else:

            self.exit_fun()

    def create_pin(self):

        new_pin = input("Enter your Pin: ")

        self.pin = new_pin

        print("Pin Created Successfully!")

    def check_balance(self):

        user_pin = input("Enter your Pin: ")

        if self.pin == user_pin:

            print(f"Your Current balance is {self.balance} !")

        else:

            print("Check pin and try again!")

    def deposit_money(self, dp_amount):

        if dp_amount <= 0:

            print("Enter a valid amount to deposit!")

        else:

            self.balance += dp_amount

            print(f"{dp_amount} deposited successfully to your bank account!")

    def withdraw(self, wit_amount):

        if wit_amount > self.balance:

            print("Your balance is too low!")

        else:

            user_pin = input("Enter pin to continue! ")

            if self.pin == user_pin:

                self.balance -= wit_amount

                print(f"Your account has been debited by {wit_amount}!")

            else:

                print("Enter a valid Pin!")

    def exit_fun(self):

        print("Thank you for choosing us!")

        print("Have a nice day!")

sbi = ATM()

print(id(sbi))

sbi.check_balance()

sbi.deposit_money(500)

sbi.check_balance()

sbi.withdraw(200)

sbi.check_balance()`}</CodeBlock>

      <h2>Advantages of OOPs</h2>

      <ul>
        <li>
          <p>
            Code reusability.
          </p>
        </li>

        <li>
          <p>
            Better code organization.
          </p>
        </li>

        <li>
          <p>
            Easier maintenance.
          </p>
        </li>

        <li>
          <p>
            Real-world modeling becomes simple.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What are the four pillars of OOPs?
          </p>
        </li>

        <li>
          <p>
            Difference between class and object.
          </p>
        </li>

        <li>
          <p>
            What is constructor in Python?
          </p>
        </li>

        <li>
          <p>
            Why self keyword is used?
          </p>
        </li>

        <li>
          <p>
            Difference between function and method.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Working with Json', path: '/python/json-files' }}
        next={{ label: 'Encapsulation', path: '/python/encapsulation' }}
      />

    </DocPage>
  );
};

export default PythonOopsBasic;