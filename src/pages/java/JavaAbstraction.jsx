import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaAbstraction = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Abstraction' }
        ]}
        title="Abstraction in Java"
        readTime="20 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What is Abstraction?</h2>

      <p>
        Abstraction means hiding complexity and showing only the necessary
        details to the user.
      </p>

      <p>
        Instead of exposing how something works internally, abstraction focuses
        on what an object can do.
      </p>

      <ul>
        <li>Hides implementation details.</li>
        <li>Shows only essential features.</li>
        <li>Makes code easier to use and maintain.</li>
        <li>Reduces complexity.</li>
      </ul>

      <h2>Levels of Abstraction in Java</h2>

      <ul>
        <li>
          <strong>Low-Level Abstraction</strong> → Methods and Classes
        </li>
        <li>
          <strong>High-Level Abstraction</strong> → Abstract Classes and
          Interfaces
        </li>
      </ul>

      <h2>Low-Level Abstraction (Methods & Classes)</h2>

      <p>
        Low-level abstraction hides internal implementation inside methods. The
        user simply calls the method without knowing how the result is produced.
      </p>

      <CodeBlock filename="circle.java">{`class Circle {

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}`}</CodeBlock>

      <CodeBlock filename="main.java">{`Circle c = new Circle(5.0);

System.out.println(c.getArea());`}</CodeBlock>

      <p>
        The user calls <strong>getArea()</strong> without knowing the internal
        formula <strong>π × r²</strong>.
      </p>

      <h2>High-Level Abstraction</h2>

      <p>
        High-level abstraction is achieved using:
      </p>

      <ul>
        <li>Abstract Classes</li>
        <li>Interfaces</li>
      </ul>

      <h2>Abstract Class</h2>

      <p>
        An abstract class acts as a blueprint for other classes.
      </p>

      <ul>
        <li>Can contain abstract methods.</li>
        <li>Can contain concrete methods.</li>
        <li>Cannot be instantiated directly.</li>
        <li>Child classes must implement abstract methods.</li>
      </ul>

      <CodeBlock filename="abstract_class.java">{`abstract class Animal {

    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void sound();

    void breathe() {
        System.out.println(name + " is breathing.");
    }
}

class Dog extends Animal {

    Dog(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " says: Woof!");
    }
}

class Cat extends Animal {

    Cat(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " says: Meow!");
    }
}`}</CodeBlock>

      <CodeBlock filename="main.java">{`Animal dog = new Dog("Bruno");

dog.sound();

dog.breathe();`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Bruno says: Woof!
Bruno is breathing.`}</CodeBlock>

      <h2>Interface</h2>

      <p>
        An interface is a contract that specifies what a class must do without
        defining how it should do it.
      </p>

      <ul>
        <li>Contains abstract methods.</li>
        <li>Supports multiple inheritance.</li>
        <li>Implemented using the implements keyword.</li>
      </ul>

      <CodeBlock filename="interface_example.java">{`interface Flyable {

    void fly();
}

interface Swimmable {

    void swim();
}

class Duck implements Flyable, Swimmable {

    @Override
    public void fly() {
        System.out.println("Duck is flying!");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming!");
    }
}`}</CodeBlock>

      <CodeBlock filename="main.java">{`Duck d = new Duck();

d.fly();

d.swim();`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Duck is flying!
Duck is swimming!`}</CodeBlock>

      <h2>Multiple Inheritance in Java</h2>

      <p>
        Java does not support multiple inheritance through classes but supports
        it through interfaces.
      </p>

      <CodeBlock filename="multiple_inheritance.java">{`interface Serializable {

    void save();
}

interface Printable {

    void print();
}

interface Loggable {

    default void log() {
        System.out.println("Logging...");
    }
}

class Report implements Serializable, Printable, Loggable {

    @Override
    public void save() {
        System.out.println("Saving report...");
    }

    @Override
    public void print() {
        System.out.println("Printing report...");
    }
}`}</CodeBlock>

      <CodeBlock filename="main.java">{`Report r = new Report();

r.save();

r.print();

r.log();`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Saving report...
Printing report...
Logging...`}</CodeBlock>

      <h2>Abstract Class vs Interface</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Abstract Class</th>
            <th>Interface</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Constructors</td>
            <td>✅ Yes</td>
            <td>❌ No</td>
          </tr>

          <tr>
            <td>Method Types</td>
            <td>Abstract + Concrete</td>
            <td>Abstract + Default (Java 8+)</td>
          </tr>

          <tr>
            <td>Variables</td>
            <td>Instance Variables Allowed</td>
            <td>Only static final constants</td>
          </tr>

          <tr>
            <td>Inheritance</td>
            <td>Single Inheritance</td>
            <td>Multiple Inheritance</td>
          </tr>

          <tr>
            <td>Access Modifiers</td>
            <td>Any Modifier</td>
            <td>public by default</td>
          </tr>

          <tr>
            <td>Speed</td>
            <td>Slightly Faster</td>
            <td>Slightly Slower</td>
          </tr>

          <tr>
            <td>Use When</td>
            <td>Sharing common code/state</td>
            <td>Defining capabilities/contracts</td>
          </tr>

          <tr>
            <td>Relationship</td>
            <td>is-a</td>
            <td>can-do</td>
          </tr>
        </tbody>
      </table>

      <h2>Multiple Inheritance Rules</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Allowed?</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>class A extends B, C</td>
            <td>❌ Not Allowed</td>
          </tr>

          <tr>
            <td>class A implements B, C</td>
            <td>✅ Allowed</td>
          </tr>

          <tr>
            <td>interface A extends B, C</td>
            <td>✅ Allowed</td>
          </tr>

          <tr>
            <td>class A extends B implements C, D</td>
            <td>✅ Allowed</td>
          </tr>
        </tbody>
      </table>

      <h2>Advantages of Abstraction</h2>

      <ul>
        <li>Reduces complexity.</li>
        <li>Improves code readability.</li>
        <li>Provides better security by hiding implementation details.</li>
        <li>Promotes code reuse.</li>
        <li>Makes applications easier to maintain.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Abstraction means hiding complexity and exposing essentials.</li>
        <li>Low-level abstraction is achieved using methods and classes.</li>
        <li>High-level abstraction is achieved using abstract classes and interfaces.</li>
        <li>Abstract classes can contain both abstract and concrete methods.</li>
        <li>Interfaces define contracts and support multiple inheritance.</li>
        <li>Java does not support multiple inheritance using classes.</li>
        <li>Multiple inheritance is achieved through interfaces.</li>
      </ul>

      <PageNav
        prev={{ label: 'Inheritance', path: '/java/inheritance' }}
        next={{ label: 'Polymorphism', path: '/java/polymorphism' }}
      />
    </DocPage>
  );
};

export default JavaAbstraction;