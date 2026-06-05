import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaConstructors = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Constructor Chaining' }
        ]}
        title="Constructor Chaining in Java"
        readTime="12 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Constructor Chaining</h2>

      <p>
        In Java, constructor chaining means calling one constructor from
        another constructor. It helps avoid code duplication and ensures
        common initialization logic is written only once.
      </p>

      <p>
        The <strong>this()</strong> keyword is used to call another constructor
        within the same class.
      </p>

      <h2>Why Constructor Chaining?</h2>

      <ul>
        <li>Reduces code duplication.</li>
        <li>Centralizes initialization logic.</li>
        <li>Makes code easier to maintain.</li>
        <li>Improves readability.</li>
      </ul>

      <h2>Rules of Constructor Chaining</h2>

      <ul>
        <li>this() must be the first statement inside a constructor.</li>
        <li>Only one constructor can be called using this().</li>
        <li>Constructors can be chained across multiple constructors.</li>
        <li>Eventually one constructor must perform the actual initialization.</li>
      </ul>

      <h2>Case 1: Default Constructor → Parameterized Constructor</h2>

      <p>
        Here, the default constructor calls the parameterized constructor
        using this().
      </p>

      <CodeBlock filename="student_constructor_chaining.java">{`class Student {

    String name;
    int age;

    Student() {

        this("Unknown", 18);

        System.out.println(
            "Default constructor executed"
        );
    }

    Student(String name, int age) {

        this.name = name;
        this.age = age;

        System.out.println(
            "Parameterized constructor executed"
        );
    }

    void display() {

        System.out.println(
            name + " " + age
        );
    }

    public static void main(String[] args) {

        Student s = new Student();

        s.display();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Parameterized constructor executed
Default constructor executed
Unknown 18`}</CodeBlock>

      <p>
        First the parameterized constructor executes because it is called
        using <strong>this("Unknown", 18)</strong>.
      </p>

      <h2>Case 2: Multiple Constructors Chained Together</h2>

      <p>
        A constructor can call another constructor, which can further call
        another constructor, creating a chain.
      </p>

      <CodeBlock filename="employee_constructor_chain.java">{`class Employee {

    String name;
    int age;
    double salary;

    Employee() {

        this("John");

        System.out.println(
            "Constructor 1"
        );
    }

    Employee(String name) {

        this(name, 25);

        System.out.println(
            "Constructor 2"
        );
    }

    Employee(String name, int age) {

        this(name, age, 50000);

        System.out.println(
            "Constructor 3"
        );
    }

    Employee(
        String name,
        int age,
        double salary
    ) {

        this.name = name;
        this.age = age;
        this.salary = salary;

        System.out.println(
            "Constructor 4"
        );
    }

    public static void main(String[] args) {

        new Employee();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Constructor 4
Constructor 3
Constructor 2
Constructor 1`}</CodeBlock>

      <h3>Execution Flow</h3>

      <ul>
        <li>Employee() calls Employee(String).</li>
        <li>Employee(String) calls Employee(String, int).</li>
        <li>Employee(String, int) calls Employee(String, int, double).</li>
        <li>The last constructor executes first.</li>
        <li>Control then returns back step by step.</li>
      </ul>

      <h2>Case 3: Using this to Differentiate Instance Variables</h2>

      <p>
        Besides constructor chaining, <strong>this</strong> is also used to
        refer to the current object's variables.
      </p>

      <CodeBlock filename="car_this_keyword.java">{`class Car {

    String model;
    int year;

    Car(String model, int year) {

        this.model = model;
        this.year = year;
    }

    void display() {

        System.out.println(
            model + " " + year
        );
    }

    public static void main(String[] args) {

        Car c =
            new Car(
                "BMW",
                2025
            );

        c.display();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`BMW 2025`}</CodeBlock>

      <h3>Why Use this?</h3>

      <CodeBlock filename="example.java">{`Car(String model, int year) {

    this.model = model;
    this.year = year;
}`}</CodeBlock>

      <ul>
        <li>model → Constructor parameter.</li>
        <li>this.model → Current object's variable.</li>
        <li>year → Constructor parameter.</li>
        <li>this.year → Current object's variable.</li>
      </ul>

      <p>
        Without <strong>this</strong>, Java cannot differentiate between
        instance variables and parameters when both have the same name.
      </p>

      <h2>Case 4: Constructor Chaining with IIB (Instance Initialization Block)</h2>

      <p>
        Instance Initialization Block (IIB) executes before the constructor
        body whenever an object is created.
      </p>

      <CodeBlock filename="constructor_chain_iib.java">{`class Demo {

    {
        System.out.println("IIB");
    }

    Demo() {

        this(10);

        System.out.println(
            "Constructor A"
        );
    }

    Demo(int x) {

        this(10, 20);

        System.out.println(
            "Constructor B"
        );
    }

    Demo(int x, int y) {

        this("Java");

        System.out.println(
            "Constructor C"
        );
    }

    Demo(String s) {

        this('A');

        System.out.println(
            "Constructor D"
        );
    }

    Demo(char ch) {

        System.out.println(
            "Constructor E"
        );
    }

    public static void main(String[] args) {

        new Demo();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`IIB
Constructor E
Constructor D
Constructor C
Constructor B
Constructor A`}</CodeBlock>

      <h3>Execution Flow</h3>

      <ol>
        <li>IIB executes first.</li>
        <li>Demo() calls Demo(int).</li>
        <li>Demo(int) calls Demo(int, int).</li>
        <li>Demo(int, int) calls Demo(String).</li>
        <li>Demo(String) calls Demo(char).</li>
        <li>Constructor E executes first.</li>
        <li>Control returns back to D → C → B → A.</li>
      </ol>

      <h2>Important Interview Questions</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Can constructor call another constructor?</td>
            <td>Yes, using this().</td>
          </tr>

          <tr>
            <td>Can this() appear anywhere?</td>
            <td>No, it must be the first statement.</td>
          </tr>

          <tr>
            <td>Can constructors be overridden?</td>
            <td>No.</td>
          </tr>

          <tr>
            <td>Can constructors be overloaded?</td>
            <td>Yes.</td>
          </tr>

          <tr>
            <td>When does IIB execute?</td>
            <td>Before constructor execution.</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Revision</h2>

      <ul>
        <li>Constructor chaining avoids duplicate code.</li>
        <li>this() is used to call another constructor.</li>
        <li>this() must be the first statement.</li>
        <li>Constructors can be chained multiple levels deep.</li>
        <li>this refers to the current object.</li>
        <li>IIB executes before constructors.</li>
        <li>Constructors can be overloaded but not overridden.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Classes & Objects',
          path: '/java/classes'
        }}
        next={{
          label: 'Object Memory Management',
          path: '/java/object-memory'
        }}
      />
    </DocPage>
  );
};

export default JavaConstructors;