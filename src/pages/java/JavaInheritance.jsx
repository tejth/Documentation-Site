import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaInheritance = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Inheritance' }
        ]}
        title="Inheritance in Java"
        readTime="20 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What is Inheritance?</h2>

      <p>
        Inheritance is a mechanism in Java where a child class acquires the
        properties and methods of a parent class.
      </p>

      <p>
        Think of it like a child inheriting traits from parents in real life.
      </p>

      <ul>
        <li>Promotes code reusability.</li>
        <li>Reduces code duplication.</li>
        <li>Creates parent-child relationships between classes.</li>
        <li>Supports method overriding and polymorphism.</li>
      </ul>

      <h3>Keyword Used</h3>

      <CodeBlock filename="keyword.java">{`extends`}</CodeBlock>

      <h2>Basic Example of Inheritance</h2>

      <CodeBlock filename="inheritance_example.java">{`class Animal {

    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Barking...");
    }
}

class Main {

    public static void main(String[] args) {

        Dog d = new Dog();

        d.eat();   // inherited from Animal

        d.bark();  // Dog's own method
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Eating...
Barking...`}</CodeBlock>

      <h2>Types of Inheritance</h2>

      <h3>1. Single Inheritance</h3>

      <p>
        One parent class and one child class.
      </p>

      <CodeBlock filename="single_inheritance.java">{`class Animal {
    void eat() {}
}

class Dog extends Animal {
    void bark() {}
}`}</CodeBlock>

      <CodeBlock filename="diagram.txt">{`Animal
   |
   |
  Dog`}</CodeBlock>

      <h3>2. Multilevel Inheritance</h3>

      <p>
        A chain of inheritance where one class inherits another inherited class.
      </p>

      <CodeBlock filename="multilevel.java">{`class Animal {
    void eat() {}
}

class Dog extends Animal {
    void bark() {}
}

class Puppy extends Dog {
    void weep() {}
}`}</CodeBlock>

      <CodeBlock filename="diagram.txt">{`Animal
   |
  Dog
   |
 Puppy`}</CodeBlock>

      <p>
        Puppy can access methods of both Dog and Animal.
      </p>

      <h3>3. Hierarchical Inheritance</h3>

      <p>
        One parent class with multiple child classes.
      </p>

      <CodeBlock filename="hierarchical.java">{`class Animal {
    void eat() {}
}

class Dog extends Animal {
    void bark() {}
}

class Cat extends Animal {
    void meow() {}
}`}</CodeBlock>

      <CodeBlock filename="diagram.txt">{`        Animal
       /      \\
     Dog      Cat`}</CodeBlock>

      <h3>4. Multiple Inheritance ❌</h3>

      <p>
        One child class inheriting from multiple parent classes.
      </p>

      <p>
        Java does not support Multiple Inheritance using classes because of the
        Diamond Problem.
      </p>

      <CodeBlock filename="multiple_inheritance.java">{`class A {
    void show() {}
}

class B {
    void show() {}
}

class C extends A, B {
} // ERROR`}</CodeBlock>

      <h3>Diamond Problem</h3>

      <CodeBlock filename="diamond_problem.txt">{`        A
       / \\
      B   C
       \\ /
        D`}</CodeBlock>

      <CodeBlock filename="diamond_problem.java">{`class A {

    void show() {
        System.out.println("A");
    }
}

class B extends A {

    void show() {
        System.out.println("B");
    }
}

class C extends A {

    void show() {
        System.out.println("C");
    }
}

// If Java allowed this:

class D extends B, C {
    // Which show() should be called?
}`}</CodeBlock>

      <p>
        Java avoids this ambiguity by not allowing multiple inheritance with classes.
      </p>

      <h3>Java's Solution → Interfaces</h3>

      <CodeBlock filename="interface_solution.java">{`interface B {

    default void show() {
        System.out.println("B");
    }
}

interface C {

    default void show() {
        System.out.println("C");
    }
}

class D implements B, C {

    @Override
    public void show() {

        B.super.show();
    }
}`}</CodeBlock>

      <h3>5. Hybrid Inheritance</h3>

      <p>
        Combination of two or more inheritance types.
      </p>

      <CodeBlock filename="hybrid.txt">{`        A
       / \\
      B   C
       \\ /
        D`}</CodeBlock>

      <p>
        Hybrid inheritance is not supported with classes in Java. It can be
        achieved using interfaces.
      </p>

      <h2>super Keyword</h2>

      <p>
        The <strong>super</strong> keyword refers to the immediate parent class
        object.
      </p>

      <h2>Use Case 1: Calling Parent Constructor</h2>

      <CodeBlock filename="super_constructor.java">{`class Animal {

    String name;

    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {

    Dog(String name) {

        super(name);
    }
}`}</CodeBlock>

      <p>
        super(name) calls the constructor of the parent class.
      </p>

      <h2>Use Case 2: Calling Parent Method</h2>

      <CodeBlock filename="super_method.java">{`class Animal {

    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {

    void sound() {

        super.sound();

        System.out.println("Woof");
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Some sound
Woof`}</CodeBlock>

      <h2>Use Case 3: Accessing Parent Variable</h2>

      <CodeBlock filename="super_variable.java">{`class Animal {

    String type = "Animal";
}

class Dog extends Animal {

    String type = "Dog";

    void show() {

        System.out.println(type);

        System.out.println(super.type);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Dog
Animal`}</CodeBlock>

      <h2>super Keyword Summary</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Syntax</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Parent Constructor</td>
            <td>super()</td>
            <td>Calls parent constructor</td>
          </tr>

          <tr>
            <td>Parameterized Constructor</td>
            <td>super(value)</td>
            <td>Calls parameterized parent constructor</td>
          </tr>

          <tr>
            <td>Parent Method</td>
            <td>super.methodName()</td>
            <td>Calls overridden parent method</td>
          </tr>

          <tr>
            <td>Parent Variable</td>
            <td>super.variableName</td>
            <td>Access hidden parent variable</td>
          </tr>
        </tbody>
      </table>

      <h2>Advantages of Inheritance</h2>

      <ul>
        <li>Code reusability.</li>
        <li>Reduces duplication.</li>
        <li>Improves maintainability.</li>
        <li>Supports polymorphism.</li>
        <li>Creates logical relationships between classes.</li>
      </ul>

      <h2>Limitations of Inheritance</h2>

      <ul>
        <li>Tight coupling between parent and child classes.</li>
        <li>Can make code difficult to understand if overused.</li>
        <li>Multiple inheritance is not supported with classes.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Inheritance allows a child class to acquire parent properties and methods.</li>
        <li>The extends keyword is used for inheritance.</li>
        <li>Types: Single, Multilevel, Hierarchical, Multiple and Hybrid.</li>
        <li>Multiple inheritance is not supported using classes.</li>
        <li>Diamond Problem causes ambiguity.</li>
        <li>Interfaces provide a solution to multiple inheritance.</li>
        <li>super is used to access parent constructors, methods and variables.</li>
      </ul>

      <PageNav
        prev={{ label: 'Packages', path: '/java/packages' }}
        next={{ label: 'Polymorphism', path: '/java/polymorphism' }}
      />
    </DocPage>
  );
};

export default JavaInheritance;