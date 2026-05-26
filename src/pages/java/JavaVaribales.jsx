import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaVaribales = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Variables and Data Types' }
        ]}
        title="Java Variables and Data Types"
        readTime="20 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Variables / Identifiers / Literals</h2>

      <p>
        Variables are names given to memory locations that store data.
        They act like containers that hold values.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="variables_example.java">{`int a = 4;`}</CodeBlock>

      <ul>
        <li>
          <strong>a</strong> → Variable / Identifier
        </li>

        <li>
          <strong>4</strong> → Literal
        </li>
      </ul>

      <h2>Rules for Naming Variables</h2>

      <ul>
        <li>Variable name should be meaningful</li>

        <li>Cannot begin with a digit</li>

        <li>Cannot use Java keywords</li>

        <li>
          Cannot contain special characters except underscore (_)
        </li>

        <li>Java is case-sensitive</li>
      </ul>

      <h3>Valid Variables</h3>

      <CodeBlock filename="valid_variables.java">{`int age = 21;

String student_name = "Tej";

double salary2026 = 45000;`}</CodeBlock>

      <h3>Invalid Variables</h3>

      <CodeBlock filename="invalid_variables.java">{`// Invalid variable names

// int 1age = 10;

// int class = 20;

// int user-name = 30;`}</CodeBlock>

      <h2>Four Types of Variables</h2>

      <h3>1. Instance Variables</h3>

      <ul>
        <li>
          Declared inside class but outside methods.
        </li>

        <li>
          Created when object is created.
        </li>

        <li>
          Accessible throughout the class.
        </li>
      </ul>

      <CodeBlock filename="instance_variable.java">{`class Student {

    String name;

    int age;

}`}</CodeBlock>

      <h3>2. Local Variables</h3>

      <ul>
        <li>
          Declared inside methods or blocks.
        </li>

        <li>
          Visible only inside that method.
        </li>

        <li>
          Access modifiers cannot be used.
        </li>
      </ul>

      <CodeBlock filename="local_variable.java">{`class Demo {

    void show() {

        int x = 10;

        System.out.println(x);

    }

}`}</CodeBlock>

      <h3>3. Parameters</h3>

      <ul>
        <li>
          Variables passed into methods/functions.
        </li>

        <li>
          Used to send and receive values.
        </li>
      </ul>

      <CodeBlock filename="parameters.java">{`class Demo {

    void greet(String name) {

        System.out.println(name);

    }

}`}</CodeBlock>

      <h3>4. Static / Class Variables</h3>

      <ul>
        <li>
          Declared using static keyword.
        </li>

        <li>
          Only one copy exists for all objects.
        </li>
      </ul>

      <CodeBlock filename="static_variable.java">{`class Student {

    static String college = "JECRC";

}`}</CodeBlock>

      <h2>Data Types in Java</h2>

      <p>
        Java is a <strong>Statically Typed Language</strong>.
      </p>

      <p>
        It means variable datatype must be declared before use.
      </p>

      <h3>Primitive Data Types</h3>

      <ul>
        <li>
          <strong>Integer Types</strong> →
          byte, short, int, long
        </li>

        <li>
          <strong>Floating Point Types</strong> →
          float, double
        </li>

        <li>
          <strong>Character Type</strong> →
          char
        </li>

        <li>
          <strong>Boolean Type</strong> →
          true / false
        </li>
      </ul>

      <h2>Java Data Types Diagram</h2>

      <div className="doc-image">
        <img
          src="/images/javadatatypes.jpg"
          alt="Java Data Types Diagram"
          className="diagram-image"
        />
      </div>

      <h2>Primitive Data Types Table</h2>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Datatype</th>
            <th>Size</th>
            <th>Example</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>byte</td>
            <td>1 byte</td>
            <td>10</td>
          </tr>

          <tr>
            <td>short</td>
            <td>2 bytes</td>
            <td>100</td>
          </tr>

          <tr>
            <td>int</td>
            <td>4 bytes</td>
            <td>5000</td>
          </tr>

          <tr>
            <td>long</td>
            <td>8 bytes</td>
            <td>100000L</td>
          </tr>

          <tr>
            <td>float</td>
            <td>4 bytes</td>
            <td>3.14f</td>
          </tr>

          <tr>
            <td>double</td>
            <td>8 bytes</td>
            <td>99.999</td>
          </tr>

          <tr>
            <td>char</td>
            <td>2 bytes</td>
            <td>'A'</td>
          </tr>

          <tr>
            <td>boolean</td>
            <td>1 bit</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <h2>Important Java Datatypes</h2>

      <p>
        Below table shows the most commonly used Java datatypes,
        their memory size and value range.
      </p>

      <table className="custom-table datatype-table">
        <thead>
          <tr>
            <th>Datatype</th>
            <th>Width (Bytes)</th>
            <th>Range</th>
            <th>Example</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>byte</td>
            <td>1</td>
            <td>-128 to 127</td>
            <td>10</td>
          </tr>

          <tr>
            <td>int</td>
            <td>4</td>
            <td>-2,147,483,648 to 2,147,483,647</td>
            <td>5000</td>
          </tr>

          <tr>
            <td>float</td>
            <td>4</td>
            <td>~ ±3.4e−038 to ±3.4e+038</td>
            <td>3.14f</td>
          </tr>

          <tr>
            <td>double</td>
            <td>8</td>
            <td>~ ±1.7e−308 to ±1.7e+308</td>
            <td>99.999</td>
          </tr>

          <tr>
            <td>char</td>
            <td>2</td>
            <td>0 to 65,535 (Unicode)</td>
            <td>'A'</td>
          </tr>

          <tr>
            <td>boolean</td>
            <td>1 bit</td>
            <td>true / false</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <h2>Important Notes</h2>

      <ul>
        <li>
          Java supports Unicode characters.
        </li>

        <li>
          char stores single character inside single quotes.
        </li>

        <li>
          String stores multiple characters inside double quotes.
        </li>

        <li>
          boolean only supports true or false.
        </li>
      </ul>

      <h2>Binary Number Concept</h2>

      <p>
        Binary numbers are represented using only:
      </p>

      <CodeBlock filename="binary_concept.txt">{`0 and 1`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="binary_example.txt">{`2 = 10

(2^1 + 2^0)`}</CodeBlock>

      <h3>Important Formula</h3>

      <CodeBlock filename="formula.txt">{`Maximum value using n bits = 2^n - 1`}</CodeBlock>

      <h2>Comments in Java</h2>

      <p>
        Comments are used to explain code.
        Compiler ignores comments.
      </p>

      <h3>Single Line Comment</h3>

      <CodeBlock filename="single_comment.java">{`// This is single line comment`}</CodeBlock>

      <h3>Multi Line Comment</h3>

      <CodeBlock filename="multi_comment.java">{`/*

This is
multi line comment

*/`}</CodeBlock>

      <h2>Complete Example Program</h2>

      <CodeBlock filename="Demo.java">{`public class Demo {

    public static void main(String[] args) {

        float f1 = 8.125f;

        System.out.printf("%.20f%n", f1);

        System.out.println("Hello, World!");

        int a = 5;

        byte b = 10;

        short d = 100;

        long e = 1000L;

        float f = 3.14f;

        String s = "Java Programming";

        char c = 'A';

        byte g = 0b101;

        byte h = 0XF;

        double i = 6.022e23;

        long j = 123456_23_32;

        System.out.println("Integer: " + a);

        System.out.println("Float: " + f);

        System.out.println("String: " + s);

        System.out.println("Character: " + c);

        System.out.println("Byte: " + b);

        System.out.println("Short: " + d);

        System.out.println("Long: " + e);

        System.out.println("Binary: " + g);

        System.out.println("Hexadecimal: " + h);

        System.out.println("Double: " + i);

        System.out.println("Long with underscores: " + j);

    }

}`}</CodeBlock>

      <h2>Explanation of Special Literals</h2>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1000L</td>
            <td>Long datatype literal</td>
          </tr>

          <tr>
            <td>3.14f</td>
            <td>Float datatype literal</td>
          </tr>

          <tr>
            <td>0b101</td>
            <td>Binary literal</td>
          </tr>

          <tr>
            <td>0XF</td>
            <td>Hexadecimal literal</td>
          </tr>

          <tr>
            <td>6.022e23</td>
            <td>Scientific notation</td>
          </tr>

          <tr>
            <td>123_456</td>
            <td>Underscore for readability</td>
          </tr>
        </tbody>
      </table>

      <h2>Most Asked Interview Questions</h2>

      <h3>1. Why Java is called Statically Typed Language?</h3>

      <p>
        Because datatype of variable must be declared before use.
      </p>

      <h3>2. Difference Between float and double?</h3>

      <p>
        float uses 4 bytes while double uses 8 bytes and provides more precision.
      </p>

      <h3>3. Difference Between char and String?</h3>

      <p>
        char stores single character while String stores collection of characters.
      </p>

      <h3>4. Why long uses L and float uses f?</h3>

      <p>
        To tell Java compiler that value belongs to long or float datatype.
      </p>

      <PageNav
        prev={{
          label: 'JVM, JRE and JDK',
          path: '/java/jvm'
        }}
        next={{
          label: 'Operators in Java',
          path: '/java/operators'
        }}
      />
    </DocPage>
  );
};

export default JavaVaribales;