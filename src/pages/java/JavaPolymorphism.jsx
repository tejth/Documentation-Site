import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaPolyMorphism = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Polymorphism' }
        ]}
        title="Polymorphism in Java"
        readTime="18 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What is Polymorphism?</h2>

      <p>
        Polymorphism means <strong>one thing, many forms</strong>. The same method
        name can behave differently depending on the context.
      </p>

      <p>
        Polymorphism is one of the four pillars of Object-Oriented Programming (OOP)
        and helps make code flexible, reusable, and maintainable.
      </p>

      <h2>Types of Polymorphism</h2>

      <ul>
        <li>
          <strong>Compile-Time Polymorphism</strong> (Method Overloading)
        </li>
        <li>
          <strong>Runtime Polymorphism</strong> (Method Overriding)
        </li>
      </ul>

      <h2>1. Compile-Time Polymorphism (Method Overloading)</h2>

      <p>
        Method overloading occurs when multiple methods have the same name but
        different parameter lists within the same class.
      </p>

      <CodeBlock filename="method_overloading.java">{`class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calc = new Calculator();

        System.out.println(calc.add(2, 3));

        System.out.println(calc.add(2.5, 3.5));

        System.out.println(calc.add(1, 2, 3));
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`5
6.0
6`}</CodeBlock>

      <p>
        Java decides which method to execute during compilation based on the
        argument types and count.
      </p>

      <h2>Rules of Method Overloading</h2>

      <ul>
        <li>Method name must be same.</li>
        <li>Parameter list must be different.</li>
        <li>Return type alone cannot overload methods.</li>
        <li>Can differ by datatype or number of parameters.</li>
      </ul>

      <h2>2. Runtime Polymorphism (Method Overriding)</h2>

      <p>
        Method overriding occurs when a child class provides its own implementation
        of a method already present in the parent class.
      </p>

      <CodeBlock filename="method_overriding.java">{`class Shape {

    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {

    @Override
    void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle extends Shape {

    @Override
    void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

class Triangle extends Shape {

    @Override
    void draw() {
        System.out.println("Drawing a Triangle");
    }
}

public class Main {

    public static void main(String[] args) {

        Shape s1 = new Circle();

        Shape s2 = new Rectangle();

        Shape s3 = new Triangle();

        s1.draw();

        s2.draw();

        s3.draw();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Drawing a Circle
Drawing a Rectangle
Drawing a Triangle`}</CodeBlock>

      <p>
        Here the reference type is <strong>Shape</strong>, but the actual object
        determines which method gets executed at runtime.
      </p>

      <h2>How Runtime Polymorphism Works</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Reference Type</th>
            <th>Object Type</th>
            <th>Method Executed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Shape</td>
            <td>Circle</td>
            <td>Circle.draw()</td>
          </tr>

          <tr>
            <td>Shape</td>
            <td>Rectangle</td>
            <td>Rectangle.draw()</td>
          </tr>

          <tr>
            <td>Shape</td>
            <td>Triangle</td>
            <td>Triangle.draw()</td>
          </tr>
        </tbody>
      </table>

      <h2>Method Overloading vs Method Overriding</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Method Overloading</th>
            <th>Method Overriding</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Occurs In</td>
            <td>Same Class</td>
            <td>Parent & Child Class</td>
          </tr>

          <tr>
            <td>Polymorphism Type</td>
            <td>Compile-Time</td>
            <td>Runtime</td>
          </tr>

          <tr>
            <td>Parameters</td>
            <td>Must Differ</td>
            <td>Must Remain Same</td>
          </tr>

          <tr>
            <td>Inheritance Required</td>
            <td>No</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Decision Time</td>
            <td>Compile Time</td>
            <td>Runtime</td>
          </tr>
        </tbody>
      </table>

      <h1>Important Points About Polymorphism</h1>

      <h2>1. Static Belongs to Class, Not Objects</h2>

      <p>
        Static variables and methods belong to the class itself and are shared
        among all objects.
      </p>

      <CodeBlock filename="static_example.java">{`class Counter {

    static int count = 0;

    Counter() {
        count++;
    }

    static void showCount() {
        System.out.println("Count: " + count);
    }
}

public class Main {

    public static void main(String[] args) {

        Counter c1 = new Counter();

        Counter c2 = new Counter();

        Counter.showCount();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Count: 2`}</CodeBlock>

      <h3>Static Methods Cannot Be Overridden</h3>

      <CodeBlock filename="static_hiding.java">{`class Parent {

    static void greet() {
        System.out.println("Parent greet");
    }
}

class Child extends Parent {

    static void greet() {
        System.out.println("Child greet");
    }
}

public class Main {

    public static void main(String[] args) {

        Parent p = new Child();

        p.greet();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Parent greet`}</CodeBlock>

      <p>
        Static methods are resolved at compile time and therefore do not support
        runtime polymorphism.
      </p>

      <h2>2. Private Methods Cannot Be Overridden</h2>

      <p>
        Private methods are accessible only within the same class. Child classes
        cannot see them, therefore overriding is impossible.
      </p>

      <CodeBlock filename="private_method.java">{`class Parent {

    private void secret() {
        System.out.println("Parent secret");
    }

    void show() {
        secret();
    }
}

class Child extends Parent {

    private void secret() {
        System.out.println("Child secret");
    }
}

public class Main {

    public static void main(String[] args) {

        Parent p = new Child();

        p.show();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Parent secret`}</CodeBlock>

      <p>
        Child's secret() is a completely separate method and does not override
        Parent's secret().
      </p>

      <h2>3. Final Methods Cannot Be Overridden</h2>

      <p>
        The <strong>final</strong> keyword prevents a method from being overridden.
      </p>

      <CodeBlock filename="final_method.java">{`class Vehicle {

    final void startEngine() {
        System.out.println("Engine started");
    }
}

class Car extends Vehicle {

    // Compile-Time Error
    // void startEngine() {}
}`}</CodeBlock>

      <h2>4. Final Classes Cannot Be Inherited</h2>

      <p>
        A final class cannot have child classes.
      </p>

      <CodeBlock filename="final_class.java">{`final class Bike {

    void ride() {
        System.out.println("Riding bike");
    }
}

// Compile-Time Error
// class SportsBike extends Bike {}`}</CodeBlock>

      <p>
        A popular example from Java is the <strong>String</strong> class which is
        declared as final.
      </p>

      <h2>5. Variables Are Not Polymorphic</h2>

      <p>
        Polymorphism works only for methods. Variables are resolved using the
        reference type.
      </p>

      <CodeBlock filename="field_hiding.java">{`class Parent {

    String name = "Parent";
}

class Child extends Parent {

    String name = "Child";
}

public class Main {

    public static void main(String[] args) {

        Parent p = new Child();

        System.out.println(p.name);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Parent`}</CodeBlock>

      <p>
        Since fields are resolved using reference type, runtime polymorphism does
        not apply.
      </p>

      <h2>Methods Are Polymorphic</h2>

      <CodeBlock filename="method_polymorphism.java">{`class Parent {

    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {

    @Override
    void show() {
        System.out.println("Child");
    }
}

public class Main {

    public static void main(String[] args) {

        Parent p = new Child();

        p.show();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Child`}</CodeBlock>

      <p>
        For methods, Java uses the actual object type at runtime, which enables
        runtime polymorphism.
      </p>

      <h2>Quick Revision</h2>

      <ul>
        <li>Polymorphism means one thing, many forms.</li>
        <li>Method Overloading provides compile-time polymorphism.</li>
        <li>Method Overriding provides runtime polymorphism.</li>
        <li>Runtime polymorphism works through inheritance.</li>
        <li>Static methods are hidden, not overridden.</li>
        <li>Private methods cannot be overridden.</li>
        <li>Final methods cannot be overridden.</li>
        <li>Final classes cannot be inherited.</li>
        <li>Polymorphism works on methods, not variables.</li>
      </ul>

      <PageNav
        prev={{ label: 'Abstraction', path: '/java/abstraction' }}
        next={{ label: 'AutoBoxing', path: '/java/auto-boxing-unboxing' }}
      />
    </DocPage>
  );
};

export default JavaPolyMorphism;
