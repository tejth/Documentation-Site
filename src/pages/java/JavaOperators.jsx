import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function JavaOperators() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Operators' }
        ]}
        title="Java Operators"
        readTime="22 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What are Operators in Java?</h2>

      <p>
        Operators are special symbols in Java that are used to perform operations
        on variables and values.
      </p>

      <p>Example:</p>

      <CodeBlock filename="operators_example.java">{`int a = 10;
int b = 5;

System.out.println(a + b);`}</CodeBlock>

      <h2>Types of Operators in Java</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Operator Type</th>
            <th>Example</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Arithmetic</td>
            <td>+, -, *, /, %</td>
            <td>Mathematical calculations</td>
          </tr>

          <tr>
            <td>Unary</td>
            <td>++, --</td>
            <td>Increment / decrement</td>
          </tr>

          <tr>
            <td>Assignment</td>
            <td>=, +=, -=</td>
            <td>Assign values</td>
          </tr>

          <tr>
            <td>Relational</td>
            <td>{'<, >, ==, !='}</td>
            <td>Compare values</td>
          </tr>

          <tr>
            <td>Logical</td>
            <td>&amp;&amp;, ||, !</td>
            <td>Logical operations</td>
          </tr>

          <tr>
            <td>Bitwise</td>
            <td>&amp;, |, ^</td>
            <td>Bit-level operations</td>
          </tr>

          <tr>
            <td>Shift</td>
            <td>{'<<, >>'}</td>
            <td>Shift bits</td>
          </tr>

          <tr>
            <td>Ternary</td>
            <td>? :</td>
            <td>Short if-else</td>
          </tr>
        </tbody>
      </table>

      <h2>Operators Diagram</h2>

      <div className="image-container">
        <img
          src="/assets/java/operators.png"
          alt="Java Operators"
          className="doc-image"
        />
      </div>

      <h2>1. Arithmetic Operators</h2>

      <p>
        Arithmetic operators are used to perform mathematical calculations.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>+</td>
            <td>Addition</td>
            <td>a + b</td>
          </tr>

          <tr>
            <td>-</td>
            <td>Subtraction</td>
            <td>a - b</td>
          </tr>

          <tr>
            <td>*</td>
            <td>Multiplication</td>
            <td>a * b</td>
          </tr>

          <tr>
            <td>/</td>
            <td>Division</td>
            <td>a / b</td>
          </tr>

          <tr>
            <td>%</td>
            <td>Modulus</td>
            <td>a % b</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="arithmetic_operators.java">{`int a = 10;
int b = 3;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
System.out.println(a % b);`}</CodeBlock>

      <h2>2. Unary Operators</h2>

      <p>
        Unary operators work on only one operand.
      </p>

      <CodeBlock filename="unary_operators.java">{`int x = 5;

System.out.println(++x); // pre increment
System.out.println(x++); // post increment
System.out.println(--x); // pre decrement
System.out.println(x--); // post decrement`}</CodeBlock>

      <h3>Pre vs Post Increment</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>++x</td>
            <td>Increment first, then use value</td>
          </tr>

          <tr>
            <td>x++</td>
            <td>Use value first, then increment</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Assignment Operators</h2>

      <CodeBlock filename="assignment_operators.java">{`int y = 10;

y += 5;
System.out.println(y);

y -= 2;
System.out.println(y);

y *= 3;
System.out.println(y);

y /= 2;
System.out.println(y);`}</CodeBlock>

      <h2>4. Relational Operators</h2>

      <p>
        Relational operators compare values and return true or false.
      </p>

      <CodeBlock filename="relational_operators.java">{`int a = 5;
int b = 10;

System.out.println(a > b);
System.out.println(a < b);
System.out.println(a == b);
System.out.println(a != b);`}</CodeBlock>

      <h2>5. Logical Operators</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>&amp;&amp;</td>
            <td>Logical AND</td>
          </tr>

          <tr>
            <td>||</td>
            <td>Logical OR</td>
          </tr>

          <tr>
            <td>!</td>
            <td>Logical NOT</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="logical_operators.java">{`boolean p = true;
boolean q = false;

System.out.println(p && q);
System.out.println(p || q);
System.out.println(!p);`}</CodeBlock>

      <h3>Important Concept of &amp;&amp; and ||</h3>

      <ul>
        <li>
          <strong>&amp;&amp;</strong> stops execution if first condition becomes false.
        </li>

        <li>
          <strong>||</strong> stops execution if first condition becomes true.
        </li>

        <li>
          This concept is called <strong>Short Circuit Evaluation</strong>.
        </li>
      </ul>

      <CodeBlock filename="short_circuit.java">{`int a = 5;

if(a > 10 && ++a > 6){
    System.out.println("Hello");
}

System.out.println(a);`}</CodeBlock>

      <p>
        Since first condition is false, second condition will not execute.
      </p>

      <h2>6. Bitwise Operators</h2>

      <p>
        Bitwise operators work directly on binary bits.
      </p>

      <CodeBlock filename="bitwise_operators.java">{`int a = 5;
int b = 3;

System.out.println(a & b);
System.out.println(a | b);
System.out.println(a ^ b);`}</CodeBlock>

      <h2>7. Shift Operators</h2>

      <h3>Left Shift Operator &lt;&lt;</h3>

      <p>
        Left shift moves all bits toward left side.
      </p>

      <CodeBlock filename="left_shift.java">{`byte b = 1;

System.out.println(b << 1);
System.out.println(b << 2);
System.out.println(b << 3);`}</CodeBlock>

      <h3>How Left Shift Works</h3>

      <ul>
        <li>1 in binary → 00000001</li>
        <li>After first shift → 00000010 → 2</li>
        <li>After second shift → 00000100 → 4</li>
        <li>After third shift → 00001000 → 8</li>
      </ul>

      <h3>Important Rule</h3>

      <p>
        Left shifting by 1 means multiplying by 2.
      </p>

      <CodeBlock filename="shift_formula.java">{`x << 1 = x * 2
x << 2 = x * 4
x << 3 = x * 8`}</CodeBlock>

      <h3>Interesting Concept</h3>

      <p>
        When bits exceed the size of datatype, extra bits are lost.
      </p>

      <p>
        For byte:
      </p>

      <ul>
        <li>Size = 8 bits</li>
        <li>Range = -128 to 127</li>
      </ul>

      <CodeBlock filename="byte_shift.java">{`byte x = 64;

System.out.println(x << 1);`}</CodeBlock>

      <p>
        64 in binary:
      </p>

      <CodeBlock filename="binary_representation.java">{`01000000`}</CodeBlock>

      <p>
        After left shift:
      </p>

      <CodeBlock filename="binary_after_shift.java">{`10000000`}</CodeBlock>

      <p>
        MSB becomes 1, therefore result becomes negative.
      </p>

      <p>
        Final value becomes:
      </p>

      <CodeBlock filename="negative_result.java">{`-128`}</CodeBlock>

      <h3>Another Important Concept</h3>

      <p>
        If all bits shift out, result becomes zero.
      </p>

      <CodeBlock filename="zero_shift.java">{`byte n = 1;

System.out.println(n << 8);`}</CodeBlock>

      <h2>8. Ternary Operator</h2>

      <p>
        Ternary operator is a short form of if-else.
      </p>

      <CodeBlock filename="ternary_operator.java">{`int age = 18;

String result = (age >= 18) ? "Adult" : "Minor";

System.out.println(result);`}</CodeBlock>

      <h2>Complete Operators Program</h2>

      <CodeBlock filename="all_operators.java">{`public class OperatorsDemo {

    public static void main(String[] args) {

        // Arithmetic Operators
        int a = 10;
        int b = 3;

        System.out.println("Arithmetic Operators");
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);

        // Unary Operators
        int x = 5;

        System.out.println("Unary Operators");
        System.out.println(++x);
        System.out.println(x++);

        // Assignment Operators
        int y = 10;

        y += 5;
        System.out.println(y);

        // Relational Operators
        System.out.println(a > b);
        System.out.println(a < b);

        // Logical Operators
        boolean p = true;
        boolean q = false;

        System.out.println(p && q);
        System.out.println(p || q);

        // Bitwise Operators
        System.out.println(a & b);
        System.out.println(a | b);

        // Shift Operators
        int s = 4;

        System.out.println(s << 1);

        // Ternary Operator
        int age = 20;

        String result = (age >= 18)
                ? "Adult"
                : "Minor";

        System.out.println(result);
    }
}`}</CodeBlock>

      <h2>Most Important Interview Questions</h2>

      <h3>1. Difference between &amp;&amp; and &amp; ?</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>&amp;&amp;</th>
            <th>&amp;</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Short circuit operator</td>
            <td>Always evaluates both sides</td>
          </tr>

          <tr>
            <td>Used in conditions</td>
            <td>Used in bitwise operations</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Why does byte become negative after shifting?</h3>

      <p>
        Because MSB (Most Significant Bit) becomes 1 which represents negative
        number in 2's complement form.
      </p>

      <h3>3. What is operator precedence?</h3>

      <p>
        Operator precedence decides which operator executes first.
      </p>

      <p>
        Example:
      </p>

      <CodeBlock filename="precedence.java">{`int result = 10 + 5 * 2;

System.out.println(result);`}</CodeBlock>

      <p>
        Multiplication executes first.
      </p>

      <h3>4. Difference between == and equals() ?</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>==</th>
            <th>equals()</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Compares references</td>
            <td>Compares actual content</td>
          </tr>

          <tr>
            <td>Used with primitives</td>
            <td>Mainly used with objects</td>
          </tr>
        </tbody>
      </table>

      <PageNav
        prev={{ label: 'Type Conversion', path: '/java/type-conversion' }}
        next={{ label: 'Conditionals', path: '/java/conditionals' }}
      />
    </DocPage>
  );
}