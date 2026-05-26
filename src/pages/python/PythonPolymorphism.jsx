import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonPolymorphism = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Polymorphism' }
        ]}
        title="Polymorphism in Python"
        readTime="16 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Polymorphism in Python</h2>

      <ul>
        <li>
          <p>
            Polymorphism means one method can perform different tasks.
          </p>
        </li>

        <li>
          <p>
            The word polymorphism means "many forms".
          </p>
        </li>

        <li>
          <p>
            Same function, method or operator behaves differently in different
            situations.
          </p>
        </li>

        <li>
          <p>
            Polymorphism is one of the four pillars of OOPs.
          </p>
        </li>
      </ul>

      <h2>Types of Polymorphism</h2>

      <ul>
        <li>
          <p>
            1. Method Overloading
          </p>
        </li>

        <li>
          <p>
            2. Method Overriding
          </p>
        </li>

        <li>
          <p>
            3. Operator Overloading
          </p>
        </li>
      </ul>

      <h2>1. Method Overloading</h2>

      <ul>
        <li>
          <p>
            Same method name with different arguments is called method
            overloading.
          </p>
        </li>

        <li>
          <p>
            Python does not support true method overloading directly.
          </p>
        </li>

        <li>
          <p>
            We achieve it using default arguments.
          </p>
        </li>
      </ul>

      <h3>1. Method Overloading Example</h3>

      <CodeBlock filename="method_overloading.py">{`<span class="cmt"># Method overloading example</span>

class Demo:

    def add(self, a = None, b = None):

        if a != None and b != None:

            print(a + b)

        elif a != None:

            print(a)

obj = Demo()

obj.add(10)

obj.add(10, 20)`}</CodeBlock>

      <h3>2. Output of Method Overloading</h3>

      <CodeBlock filename="method_overloading_output.txt">{`10

30`}</CodeBlock>

      <h2>2. Method Overriding</h2>

      <ul>
        <li>
          <p>
            Method overriding happens when child class changes parent class
            method.
          </p>
        </li>

        <li>
          <p>
            Child class provides its own implementation of same method.
          </p>
        </li>
      </ul>

      <h3>3. Method Overriding Example</h3>

      <CodeBlock filename="method_overriding.py">{`<span class="cmt"># Method overriding example</span>

class Parent:

    def show(self):

        print("Parent class method")

class Child(Parent):

    def show(self):

        print("Child class method")

obj = Child()

obj.show()`}</CodeBlock>

      <h3>4. Output of Method Overriding</h3>

      <CodeBlock filename="method_overriding_output.txt">{`Child class method`}</CodeBlock>

      <h2>3. Operator Overloading</h2>

      <ul>
        <li>
          <p>
            Same operator behaves differently for different data types.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            + adds numbers and concatenates strings.
          </p>
        </li>
      </ul>

      <h3>5. Operator Overloading Example</h3>

      <CodeBlock filename="operator_overloading.py">{`<span class="cmt"># Operator overloading example</span>

print(10 + 20)

print("Tej" + " Sharma")

print([1, 2] + [3, 4])`}</CodeBlock>

      <h3>6. Output of Operator Overloading</h3>

      <CodeBlock filename="operator_overloading_output.txt">{`30

Tej Sharma

[1, 2, 3, 4]`}</CodeBlock>

      <h2>Custom Operator Overloading</h2>

      <ul>
        <li>
          <p>
            Python allows us to overload operators for custom classes using
            special methods.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            __add__() is used for + operator.
          </p>
        </li>
      </ul>

      <h3>7. Custom Operator Overloading Example</h3>

      <CodeBlock filename="custom_operator_overloading.py">{`<span class="cmt"># Custom operator overloading</span>

class Number:

    def __init__(self, value):

        self.value = value

    def __add__(self, other):

        return self.value + other.value

n1 = Number(10)

n2 = Number(20)

print(n1 + n2)`}</CodeBlock>

      <h2>Duck Typing in Polymorphism</h2>

      <ul>
        <li>
          <p>
            Duck typing means object type is less important than method it
            provides.
          </p>
        </li>

        <li>
          <p>
            If object behaves like required object, Python accepts it.
          </p>
        </li>
      </ul>

      <h3>8. Duck Typing Example</h3>

      <CodeBlock filename="duck_typing.py">{`<span class="cmt"># Duck typing example</span>

class Dog:

    def sound(self):

        print("Dog barks")

class Cat:

    def sound(self):

        print("Cat meows")

def animal_sound(animal):

    animal.sound()

d = Dog()

c = Cat()

animal_sound(d)

animal_sound(c)`}</CodeBlock>

      <h2>Advantages of Polymorphism</h2>

      <ul>
        <li>
          <p>
            Improves code flexibility.
          </p>
        </li>

        <li>
          <p>
            Makes code reusable.
          </p>
        </li>

        <li>
          <p>
            Reduces duplicate code.
          </p>
        </li>

        <li>
          <p>
            Helps in writing scalable applications.
          </p>
        </li>
      </ul>

      <h2>Real Life Example of Polymorphism</h2>

      <ul>
        <li>
          <p>
            Same person behaves differently with friends, teachers and parents.
          </p>
        </li>

        <li>
          <p>
            Same button on mobile performs different actions in different apps.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is polymorphism in Python?
          </p>
        </li>

        <li>
          <p>
            Difference between method overloading and overriding.
          </p>
        </li>

        <li>
          <p>
            What is operator overloading?
          </p>
        </li>

        <li>
          <p>
            Does Python support true method overloading?
          </p>
        </li>

        <li>
          <p>
            What is duck typing in Python?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Inheritance', path: '/python/inheritance' }}
        next={{ label: 'Abstraction', path: '/python/abstraction' }}
      />

    </DocPage>
  );
};

export default PythonPolymorphism;