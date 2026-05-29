import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function JavaConditional() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Conditional Statements' }
        ]}
        title="Conditional Statements in Java"
        readTime="24 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Flow Control in Java</h2>

      <p>
        Flow of control can be controlled using:
      </p>

      <ul>
        <li>Selection Statements</li>
        <li>Iteration Statements</li>
        <li>Jump Statements</li>
      </ul>

      <p>
        An iteration is the act of repeating a defined task over and over again.
      </p>

      <h2>What are Conditional Statements?</h2>

      <p>
        Conditional statements help a program make decisions based on conditions.
      </p>

      <p>Example:</p>

      <ul>
        <li>If marks &gt; 90 → print "Excellent"</li>
        <li>Else → print "Good"</li>
      </ul>

      <h3>Java Mainly Provides</h3>

      <ol>
        <li>if Statement</li>
        <li>if-else Statement</li>
        <li>else-if Ladder</li>
        <li>switch Statement</li>
      </ol>

      <h2>1. if Statement</h2>

      <p>
        Executes code only when condition is true.
      </p>

      <h3>Syntax</h3>

      <CodeBlock filename="if_syntax.java">{`if(condition){

    // code

}`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="if_statement.java">{`public class Main {

    public static void main(String[] args) {

        int age = 20;

        if(age >= 18){

            System.out.println("Eligible to vote");

        }
    }
}`}</CodeBlock>

      <h3>Flow of if Statement</h3>

      <ul>
        <li>Condition is checked</li>
        <li>If condition is true → block executes</li>
        <li>If condition is false → block is skipped</li>
      </ul>

      <h2>2. if-else Statement</h2>

      <p>
        Used when we have two choices.
      </p>

      <h3>Syntax</h3>

      <CodeBlock filename="if_else_syntax.java">{`if(condition){

    // true block

}
else{

    // false block

}`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="if_else.java">{`public class Main {

    public static void main(String[] args) {

        int number = 5;

        if(number % 2 == 0){

            System.out.println("Even");

        }
        else{

            System.out.println("Odd");

        }
    }
}`}</CodeBlock>

      <h2>3. else-if Ladder</h2>

      <p>
        Used when there are multiple conditions.
      </p>

      <h3>Syntax</h3>

      <CodeBlock filename="else_if_syntax.java">{`if(condition1){

}
else if(condition2){

}
else if(condition3){

}
else{

}`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="else_if_example.java">{`public class Main {

    public static void main(String[] args) {

        int marks = 82;

        if(marks >= 90){

            System.out.println("Grade A");

        }
        else if(marks >= 75){

            System.out.println("Grade B");

        }
        else if(marks >= 50){

            System.out.println("Grade C");

        }
        else{

            System.out.println("Fail");

        }
    }
}`}</CodeBlock>

      <h3>How else-if Works</h3>

      <ul>
        <li>Java checks conditions from top to bottom</li>
        <li>First true condition executes</li>
        <li>Remaining conditions are skipped</li>
      </ul>

      <h3>Important Point</h3>

      <p>
        Order of conditions matters.
      </p>

      <h4>Wrong Order Example</h4>

      <CodeBlock filename="wrong_order.java">{`int marks = 95;

if(marks >= 50){

    System.out.println("Pass");

}
else if(marks >= 90){

    System.out.println("Topper");

}`}</CodeBlock>

      <h4>Output</h4>

      <CodeBlock filename="output.txt">{`Pass`}</CodeBlock>

      <p>
        Because first condition already became true.
      </p>

      <h2>Difference Between Multiple if and else-if</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Multiple if</th>
            <th>else-if</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>All conditions are checked</td>
            <td>Stops after first true condition</td>
          </tr>

          <tr>
            <td>Multiple blocks can execute</td>
            <td>Only one block executes</td>
          </tr>

          <tr>
            <td>Can be slower</td>
            <td>Generally faster</td>
          </tr>
        </tbody>
      </table>

      <h3>Multiple if Example</h3>

      <CodeBlock filename="multiple_if.java">{`int x = 10;

if(x > 5)

    System.out.println("A");

if(x > 8)

    System.out.println("B");`}</CodeBlock>

      <h4>Output</h4>

      <CodeBlock filename="output.txt">{`A
B`}</CodeBlock>

      <h3>else-if Example</h3>

      <CodeBlock filename="else_if_difference.java">{`int x = 10;

if(x > 5)

    System.out.println("A");

else if(x > 8)

    System.out.println("B");`}</CodeBlock>

      <h4>Output</h4>

      <CodeBlock filename="output2.txt">{`A`}</CodeBlock>

      <h2>4. switch Statement</h2>

      <p>
        switch is used when one variable has many fixed possible values.
      </p>

      <p>
        It is a better alternative for long else-if chains.
      </p>

      <h3>Syntax</h3>

      <CodeBlock filename="switch_syntax.java">{`switch(variable){

    case value1:

        // code
        break;

    case value2:

        // code
        break;

    default:

        // code
}`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="switch_example.java">{`public class Main {

    public static void main(String[] args) {

        int day = 3;

        switch(day){

            case 1:

                System.out.println("Monday");
                break;

            case 2:

                System.out.println("Tuesday");
                break;

            case 3:

                System.out.println("Wednesday");
                break;

            default:

                System.out.println("Invalid day");
        }
    }
}`}</CodeBlock>

      <h4>Output</h4>

      <CodeBlock filename="switch_output.txt">{`Wednesday`}</CodeBlock>

      <h2>What Does break Do?</h2>

      <p>
        break stops execution after matching case.
      </p>

      <p>
        Without break, execution continues to next cases.
      </p>

      <h2>Fall Through Concept</h2>

      <CodeBlock filename="fall_through.java">{`int x = 2;

switch(x){

    case 1:

        System.out.println("One");

    case 2:

        System.out.println("Two");

    case 3:

        System.out.println("Three");
}`}</CodeBlock>

      <h4>Output</h4>

      <CodeBlock filename="fall_output.txt">{`Two
Three`}</CodeBlock>

      <p>
        Since there is no break, execution continues to next cases.
      </p>

      <h2>default Case</h2>

      <p>
        default runs when no case matches.
      </p>

      <CodeBlock filename="default_case.java">{`default:

    System.out.println("No match");`}</CodeBlock>

      <h2>Data Types Allowed in switch</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Allowed</th>
            <th>Not Allowed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>byte</td>
            <td>float</td>
          </tr>

          <tr>
            <td>short</td>
            <td>double</td>
          </tr>

          <tr>
            <td>int</td>
            <td>boolean</td>
          </tr>

          <tr>
            <td>char</td>
            <td>Complex expressions</td>
          </tr>

          <tr>
            <td>String</td>
            <td>-</td>
          </tr>

          <tr>
            <td>enum</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2>Why switch Can Be Faster Than if-else</h2>

      <p>
        In if-else, conditions are checked one by one.
      </p>

      <CodeBlock filename="if_else_chain.java">{`if(x == 1)

else if(x == 2)

else if(x == 3)`}</CodeBlock>

      <p>
        Worst case:
      </p>

      <ul>
        <li>All conditions may be checked</li>
        <li>Execution time increases</li>
      </ul>

      <p>
        In switch, JVM can directly jump to matching case.
      </p>

      <h2>Jump Table Concept</h2>

      <p>
        JVM internally creates a structure called Jump Table.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Value</th>
            <th>Jump Address</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Address A</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Address B</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Address C</td>
          </tr>
        </tbody>
      </table>

      <p>
        If x = 2 → JVM directly jumps to Address B.
      </p>

      <h2>tableswitch vs lookupswitch</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>tableswitch</th>
            <th>lookupswitch</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Values</td>
            <td>Continuous</td>
            <td>Sparse</td>
          </tr>

          <tr>
            <td>Speed</td>
            <td>Very Fast</td>
            <td>Moderate</td>
          </tr>

          <tr>
            <td>Memory Usage</td>
            <td>Higher</td>
            <td>Lower</td>
          </tr>

          <tr>
            <td>Search Type</td>
            <td>Direct Indexing</td>
            <td>Binary Search</td>
          </tr>
        </tbody>
      </table>

      <h3>tableswitch Example</h3>

      <CodeBlock filename="tableswitch.java">{`switch(x){

    case 1:
    case 2:
    case 3:
    case 4:
}`}</CodeBlock>

      <p>
        Since values are continuous, JVM uses tableswitch.
      </p>

      <h3>lookupswitch Example</h3>

      <CodeBlock filename="lookupswitch.java">{`switch(x){

    case 10:
    case 100:
    case 1000:
}`}</CodeBlock>

      <p>
        Since values are sparse, JVM uses lookupswitch.
      </p>

      <h2>Limitations of switch</h2>

      <ol>
        <li>
          Only equality check is possible.
        </li>

        <li>
          Range conditions are not possible directly.
        </li>

        <li>
          Cannot use float, double and boolean.
        </li>

        <li>
          Duplicate cases are not allowed.
        </li>
      </ol>

      <h2>When To Use if-else</h2>

      <ul>
        <li>When ranges exist</li>
        <li>When complex conditions exist</li>
        <li>When logical operators are needed</li>
      </ul>

      <CodeBlock filename="if_else_usage.java">{`if(age > 18 && citizen == true){

    System.out.println("Eligible");

}`}</CodeBlock>

      <h2>When To Use switch</h2>

      <ul>
        <li>Checking one variable</li>
        <li>Fixed exact values</li>
        <li>Menu systems</li>
        <li>Command handling</li>
      </ul>

      <p>Examples:</p>

      <ul>
        <li>Calculator Menu</li>
        <li>Game Controls</li>
        <li>Day Selection</li>
      </ul>

      <h2>Modern Switch Expression (Java 14+)</h2>

      <CodeBlock filename="modern_switch.java">{`int day = 2;

String result = switch(day){

    case 1 -> "Monday";

    case 2 -> "Tuesday";

    case 3 -> "Wednesday";

    default -> "Invalid";
};

System.out.println(result);`}</CodeBlock>

      <h3>Advantages</h3>

      <ul>
        <li>No break needed</li>
        <li>Cleaner syntax</li>
        <li>Less boilerplate code</li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <h3>1. Difference Between if-else and switch?</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>if-else</th>
            <th>switch</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Works with ranges</td>
            <td>Works with exact values</td>
          </tr>

          <tr>
            <td>Complex conditions possible</td>
            <td>Only equality check</td>
          </tr>

          <tr>
            <td>Can be slower</td>
            <td>Can be faster</td>
          </tr>
        </tbody>
      </table>

      <h3>2. What is Fall Through in switch?</h3>

      <p>
        When break is missing, execution continues to next cases.
      </p>

      <h3>3. Why switch is faster sometimes?</h3>

      <p>
        Because JVM can use jump tables and directly jump to matching case.
      </p>

      <h3>4. Can we use String in switch?</h3>

      <p>
        Yes. Java supports String in switch from Java 7 onwards.
      </p>

      <PageNav
        prev={{ label: 'Operators', path: '/java/operators' }}
        next={{ label: 'Loops', path: '/java/loops' }}
      />
    </DocPage>
  );
}