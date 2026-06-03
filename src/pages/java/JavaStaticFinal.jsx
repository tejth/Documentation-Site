import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaStaticFinal = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Static & Final' }
        ]}
        title="Static and Final Keywords in Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>final Keyword in Java</h2>

      <p>
        The <strong>final</strong> keyword is used to restrict modification.
      </p>

      <p>It can be applied to:</p>

      <ul>
        <li>Variables</li>
        <li>Methods</li>
        <li>Classes</li>
        <li>Parameters</li>
      </ul>

      <h2>A. Final Variable</h2>

      <p>
        A final variable can be assigned only once.
      </p>

      <CodeBlock filename="final_variable.java">{`final int age = 25;

// age = 30; // Compile Time Error`}</CodeBlock>

      <h3>Why Use Final Variables?</h3>

      <p>
        Final variables are commonly used for creating constants.
      </p>

      <CodeBlock filename="constant.java">{`final double PI = 3.14;`}</CodeBlock>

      <h3>Important Rule</h3>

      <p>
        A final variable can be declared first and assigned later,
        but only once.
      </p>

      <CodeBlock filename="blank_final.java">{`final double PI;

PI = 3.14;   // Valid

// PI = 3.14159; // Error`}</CodeBlock>

      <h3>Blank Final Variable</h3>

      <CodeBlock filename="blank_final_constructor.java">{`class Student {

    final int rollNo;

    Student(int rollNo) {

        this.rollNo = rollNo;
    }
}`}</CodeBlock>

      <p>
        Blank final variables must be initialized inside the constructor.
      </p>

      <h2>B. Final Method</h2>

      <p>
        A final method cannot be overridden by subclasses.
      </p>

      <CodeBlock filename="final_method.java">{`class Animal {

    final void sound() {

        System.out.println(
            "Animal Sound"
        );
    }
}

class Dog extends Animal {

    // Error

    // void sound() {}
}`}</CodeBlock>

      <h3>Why Use Final Methods?</h3>

      <ul>
        <li>Prevents modification of critical behavior.</li>
        <li>Provides security.</li>
        <li>Ensures business logic remains unchanged.</li>
      </ul>

      <h2>C. Final Class</h2>

      <p>
        A final class cannot be inherited.
      </p>

      <CodeBlock filename="final_class.java">{`final class Utility {

    void show() {

        System.out.println(
            "Utility"
        );
    }
}

// Error

// class Demo extends Utility {}`}</CodeBlock>

      <h3>Common Example</h3>

      <p>
        String class is a final class in Java.
      </p>

      <CodeBlock filename="string_final.txt">{`public final class String`}</CodeBlock>

      <h2>D. Final Parameter</h2>

      <p>
        A final parameter cannot be modified inside a method.
      </p>

      <CodeBlock filename="final_parameter.java">{`void print(final String name) {

    // name = "John"; // Error

    System.out.println(name);
}`}</CodeBlock>

      <h2>Summary of Final Keyword</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Applied To</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Variable</td>
            <td>Value cannot change</td>
          </tr>

          <tr>
            <td>Method</td>
            <td>Cannot be overridden</td>
          </tr>

          <tr>
            <td>Class</td>
            <td>Cannot be inherited</td>
          </tr>

          <tr>
            <td>Parameter</td>
            <td>Cannot be reassigned</td>
          </tr>
        </tbody>
      </table>

      <h2>static Keyword in Java</h2>

      <p>
        The <strong>static</strong> keyword means that the member belongs to
        the class rather than individual objects.
      </p>

      <h3>Can Be Applied To</h3>

      <ul>
        <li>Variables</li>
        <li>Methods</li>
        <li>Nested Classes</li>
      </ul>

      <h3>Cannot Be Applied To</h3>

      <ul>
        <li>Local Variables</li>
        <li>Method Parameters</li>
        <li>Top-Level Classes</li>
      </ul>

      <h2>A. Static Variable</h2>

      <p>
        Static variables are shared among all objects of the class.
      </p>

      <CodeBlock filename="static_variable.java">{`class Student {

    static String college = "IIT";

    String name;
}`}</CodeBlock>

      <h3>Memory Behavior</h3>

      <ul>
        <li>Created only once.</li>
        <li>Stored in Method Area.</li>
        <li>Shared among all objects.</li>
      </ul>

      <h2>B. Static Method</h2>

      <p>
        Static methods belong to the class rather than objects.
      </p>

      <CodeBlock filename="static_method.java">{`class MathUtil {

    static int add(
        int a,
        int b
    ) {

        return a + b;
    }
}`}</CodeBlock>

      <h3>Calling Static Method</h3>

      <CodeBlock filename="calling_static.java">{`MathUtil.add(10, 20);`}</CodeBlock>

      <h3>Real Example</h3>

      <p>
        The JVM calls <strong>main()</strong> without creating an object.
      </p>

      <CodeBlock filename="main_method.java">{`public static void main(String[] args)`}</CodeBlock>

      <h2>Rules of Static Methods</h2>

      <h3>Rule 1: Static Method Can Call Only Static Members Directly</h3>

      <CodeBlock filename="rule1.java">{`class Demo {

    static void show() {

        System.out.println(
            "show"
        );
    }

    static void test() {

        show(); // Valid
    }
}`}</CodeBlock>

      <h3>Rule 2: Static Method Can Directly Access Only Static Variables</h3>

      <CodeBlock filename="rule2.java">{`class Demo {

    static int x = 10;

    int y = 20;

    static void test() {

        System.out.println(x);

        // System.out.println(y);

        // Error
    }
}`}</CodeBlock>

      <h3>Rule 3: Static Method Cannot Use this Keyword</h3>

      <CodeBlock filename="rule3.java">{`class Demo {

    int age = 20;

    static void test() {

        // System.out.println(this.age);

        // Error
    }
}`}</CodeBlock>

      <h2>Accessing Non-Static Members from Static Method</h2>

      <p>
        To access non-static members inside a static method,
        an object must be created.
      </p>

      <CodeBlock filename="non_static_access.java">{`class Demo {

    int age = 20;

    void display() {

        System.out.println(age);
    }

    static void test() {

        Demo d = new Demo();

        System.out.println(d.age);

        d.display();
    }
}`}</CodeBlock>

      <h2>Static Block</h2>

      <p>
        A static block executes when the class is loaded into memory,
        before the main method.
      </p>

      <CodeBlock filename="static_block.java">{`class Demo {

    static {

        System.out.println(
            "Static Block"
        );
    }

    public static void main(String[] args) {

        System.out.println(
            "Main"
        );
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Static Block
Main`}</CodeBlock>

      <h2>Execution Order</h2>

      <ol>
        <li>Static Variables Initialization</li>
        <li>Static Block Execution</li>
        <li>Main Method Execution</li>
        <li>Object Creation (if any)</li>
      </ol>

      <h2>Static vs Final</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>static</th>
            <th>final</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Purpose</td>
            <td>Belongs to Class</td>
            <td>Restricts Modification</td>
          </tr>

          <tr>
            <td>Variable</td>
            <td>Shared by all objects</td>
            <td>Value cannot change</td>
          </tr>

          <tr>
            <td>Method</td>
            <td>Can be called without object</td>
            <td>Cannot be overridden</td>
          </tr>

          <tr>
            <td>Class</td>
            <td>Nested Classes Only</td>
            <td>Cannot be inherited</td>
          </tr>
        </tbody>
      </table>

      <h2>Interview Questions</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Can a constructor be static?</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Can a static method access non-static variables directly?</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Can a final method be overloaded?</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Can a final class be inherited?</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Can main() be non-static?</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Revision</h2>

      <ul>
        <li>final restricts modification.</li>
        <li>final variables become constants.</li>
        <li>final methods cannot be overridden.</li>
        <li>final classes cannot be inherited.</li>
        <li>static members belong to the class.</li>
        <li>Static variables are shared by all objects.</li>
        <li>Static methods can be called without objects.</li>
        <li>Static methods cannot use this keyword.</li>
        <li>Static blocks execute before main().</li>
      </ul>

      <PageNav
        prev={{
          label: 'Call By Value',
          path: '/java/call-by-value'
        }}
        next={{
          label: 'Inheritance',
          path: '/java/inheritance'
        }}
      />
    </DocPage>
  );
};

export default JavaStaticFinal;