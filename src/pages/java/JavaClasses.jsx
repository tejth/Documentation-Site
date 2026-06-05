import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaClasses = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Classes & Objects' }
        ]}
        title="Classes and Objects in Java"
        readTime="25 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Object Oriented Programming (OOP)</h2>

      <p>
        Object Oriented Programming approach is all about implementing a system
        as a collection of objects that have a state and behavior. These
        objects interact with each other to achieve the expected functionality.
      </p>

      <h2>Naming Conventions</h2>

      <ul>
        <li>Variables → Camel Case</li>
        <li>Classes → Start with Capital Letter</li>
        <li>Methods → Camel Case</li>
      </ul>

      <h2>Object</h2>

      <p>
        An object is a real world entity that has a well-defined state and
        behavior.
      </p>

      <ul>
        <li>Can be Tangible (Physical) or Intangible (Logical).</li>
        <li>Example: Car, Student, Employee, Banking System etc.</li>
      </ul>

      <h3>Characteristics of an Object</h3>

      <ul>
        <li>
          <strong>State:</strong> Condition or attributes of an object.
        </li>

        <li>
          <strong>Behavior:</strong> Actions performed by the object.
        </li>

        <li>
          <strong>Responsibility:</strong>
          <ul>
            <li>Knowing Responsibility (Knowledge of state).</li>
            <li>Doing Responsibility (Operations on state).</li>
          </ul>
        </li>

        <li>Communication between objects.</li>

        <li>Identity of object.</li>
      </ul>

      <div className="image-wrapper">
        <img
          src="/images/object-characteristics.jpg"
          alt="Object Characteristics"
          className="doc-image"
          style={{
            maxWidth: '500px',
            width: '100%',
            display: 'block',
            margin: '20px auto'
          }}
        />
      </div>

      <h3>Advantages of Objects</h3>

      <ul>
        <li>
          <strong>Modularity:</strong> Source code of one object can be written
          and maintained independently.
        </li>

        <li>
          <strong>Information Hiding:</strong> Internal implementation remains
          hidden.
        </li>

        <li>Debugging becomes easier.</li>

        <li>Promotes code reuse.</li>
      </ul>

      <h2>Software Objects</h2>

      <ul>
        <li>
          Many programs are written to represent real world objects.
        </li>

        <li>
          Software objects expose behavior through methods.
        </li>
      </ul>

      <h2>Classes</h2>

      <p>
        Class is a non-primitive user-defined datatype that acts as a blueprint
        for creating objects.
      </p>

      <ul>
        <li>Student is a class containing many student objects.</li>
        <li>
          A class can contain data members, methods, constructors and blocks.
        </li>
        <li>
          <strong>new</strong> keyword is used to allocate memory at runtime.
        </li>
      </ul>

      <h3>Class Contains Two Things</h3>

      <ul>
        <li>Data Members (Variables)</li>
        <li>Methods</li>
      </ul>

      <div className="image-wrapper">
        <img
          src="/images/object-memory-diagram.JPG"
          alt="Object Memory Diagram"
          className="doc-image"
          style={{
            maxWidth: '700px',
            width: '100%',
            display: 'block',
            margin: '20px auto'
          }}
        />
      </div>

      <h3>Ways to Create Objects in Java</h3>

      <div className="image-wrapper">
        <img
          src="/images/create-object-java.jpg"
          alt="Ways To Create Objects"
          className="doc-image"
          style={{
            maxWidth: '700px',
            width: '100%',
            display: 'block',
            margin: '20px auto'
          }}
        />
      </div>

      <ul>
        <li>Using new keyword</li>
        <li>Using newInstance()</li>
        <li>Using clone()</li>
        <li>Using Factory Method</li>
      </ul>

      <h2>Arguments vs Parameters</h2>

      <p>
        Inputs passed into methods are called <strong>Arguments</strong> and
        values received by methods are called <strong>Parameters</strong>.
      </p>

      <CodeBlock filename="employee.java">{`class Employee {

    private int id;
    private String name;
    private String designation;
    private int ssnNo;
    private int age;
    private double salary;

    private static int idCounter = 0;

    public Employee(
        String name,
        String designation,
        int ssnNo,
        int age,
        double salary
    ) {

        idCounter++;
        this.id = idCounter;

        this.name = name;
        this.designation = designation;
        this.ssnNo = ssnNo;
        this.age = age;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

public class Level1 {

    public static void main(String[] args) {

        Employee emp1 =
            new Employee(
                "Alice",
                "Software Engineer",
                123456789,
                30,
                80000
            );

        Employee emp2 =
            new Employee(
                "Bob",
                "Data Scientist",
                987654321,
                28,
                90000
            );

        System.out.println(
            "Employee 1: " +
            emp1.getName() +
            ", ID: " +
            emp1.getId()
        );

        System.out.println(
            "Employee 2: " +
            emp2.getName() +
            ", ID: " +
            emp2.getId()
        );
    }
}`}</CodeBlock>

      <div className="image-wrapper">
        <img
          src="/images/object-stack-heap.jpg"
          alt="Stack Heap Memory"
          className="doc-image"
          style={{
            maxWidth: '700px',
            width: '100%',
            display: 'block',
            margin: '20px auto'
          }}
        />
      </div>

      <h2>Constructors</h2>

      <p>
        Constructor is a special type of method used to initialize an object.
      </p>

      <h3>Properties of Constructor</h3>

      <ul>
        <li>Invoked at object creation time.</li>
        <li>Used to initialize object data members.</li>
        <li>Does not have a return type.</li>
        <li>Name must be same as class name.</li>
      </ul>

      <h3>Types of Constructors</h3>

      <ul>
        <li>
          <strong>Default Constructor</strong> - Created automatically by compiler.
        </li>

        <li>
          <strong>Parameterized Constructor</strong> - Takes parameters.
        </li>
      </ul>

      <h3>Important Points</h3>

      <ul>
        <li>Constructors cannot be inherited.</li>
        <li>Interfaces do not have constructors.</li>
        <li>
          this() and super() must be the first statement inside constructor.
        </li>
        <li>Constructor overloading is possible.</li>
        <li>Constructor overriding is not possible.</li>
      </ul>

      <h2>Constructor Overloading</h2>

      <p>
        Constructor overloading means creating multiple constructors with
        different parameter lists.
      </p>

      <CodeBlock filename="constructor_overloading.java">{`class Student {

    String name;
    int age;

    Student() {

        name = "Unknown";
        age = 0;
    }

    Student(String n, int a) {

        name = n;
        age = a;
    }

    void display() {

        System.out.println(
            name + " " + age
        );
    }

    public static void main(String[] args) {

        Student s1 = new Student();

        Student s2 =
            new Student(
                "Tejendra",
                20
            );

        s1.display();

        s2.display();
    }
}`}</CodeBlock>

      <h2>Singleton Class</h2>

      <p>
        Singleton class allows only one object of the class to be created.
      </p>

      <CodeBlock filename="singleton.java">{`class Singleton {

    private static Singleton obj =
        new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {

        return obj;
    }

    void show() {

        System.out.println(
            "Singleton Object Created"
        );
    }

    public static void main(String[] args) {

        Singleton s1 =
            Singleton.getInstance();

        s1.show();
    }
}`}</CodeBlock>

      <h2>Getters and Setters</h2>

      <p>
        Getters are used to retrieve data and setters are used to update data.
      </p>

      <CodeBlock filename="getter_setter.java">{`class Employee {

    private int salary;

    public void setSalary(int s) {

        salary = s;
    }

    public int getSalary() {

        return salary;
    }

    public static void main(String[] args) {

        Employee e =
            new Employee();

        e.setSalary(50000);

        System.out.println(
            e.getSalary()
        );
    }
}`}</CodeBlock>

      <h2>this Keyword</h2>

      <p>
        In Java, <strong>this</strong> refers to the current object whose
        method or constructor is currently executing.
      </p>

      <CodeBlock filename="this_keyword.java">{`class Student {

    String name;

    Student(String name) {

        this.name = name;
    }

    void show() {

        System.out.println(name);
    }

    public static void main(String[] args) {

        Student s1 =
            new Student(
                "Tejendra"
            );

        s1.show();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Tejendra`}</CodeBlock>

      <h3>Why Use this?</h3>

      <CodeBlock filename="why_this.java">{`Student(String name) {

    this.name = name;
}`}</CodeBlock>

      <ul>
        <li>name → Constructor parameter.</li>
        <li>this.name → Current object's variable.</li>
      </ul>

      <p>
        Without <strong>this</strong>, Java cannot distinguish between the
        instance variable and parameter when both have the same name.
      </p>

      <h3>Easy Understanding</h3>

      <p>
        <code>this.name</code> simply means:
      </p>

      <CodeBlock filename="meaning.txt">{`Current object's name`}</CodeBlock>

      <h2>Quick Revision</h2>

      <ul>
        <li>Object has state and behavior.</li>
        <li>Class is a blueprint of objects.</li>
        <li>new keyword allocates memory at runtime.</li>
        <li>Constructor initializes objects.</li>
        <li>Constructor overloading is possible.</li>
        <li>Singleton allows only one object.</li>
        <li>Getters and setters provide encapsulation.</li>
        <li>this refers to current object.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Functions',
          path: '/java/functions'
        }}
        next={{
          label: 'Constructors',
          path: '/java/constructors'
        }}
      />
    </DocPage>
  );
};

export default JavaClasses;