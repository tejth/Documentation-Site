import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaLoops = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Loops' }
        ]}
        title="Loops in Java"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Loops in Java</h2>

      <p>
        Loops are used to repeat code multiple times.
      </p>

      <CodeBlock filename="without_loop.java">{`// Without loop

System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");`}</CodeBlock>

      <CodeBlock filename="with_loop.java">{`// With loop

for(int i = 1; i <= 3; i++){
    System.out.println("Hello");
}`}</CodeBlock>

      <h2>Types of Loops</h2>

      <ul>
        <li>while loop</li>
        <li>do-while loop</li>
        <li>for loop</li>
      </ul>

      <h2>1. while Loop</h2>

      <p>
        In while loop, condition is checked first.
      </p>

      <CodeBlock filename="while_loop.java">{`public class Main {

    public static void main(String[] args) {

        int i = 1;

        while(i <= 5){

            System.out.println(i);

            i++;
        }
    }
}`}</CodeBlock>

      <h3>Flow of while Loop</h3>

      <ul>
        <li>Condition checked</li>
        <li>If true → code executes</li>
        <li>Loop repeats</li>
        <li>Stops when condition becomes false</li>
      </ul>

      <h3>Important Point</h3>

      <p>
        If condition is false initially, loop never runs.
      </p>

      <CodeBlock filename="while_false.java">{`while(false){

    System.out.println("Hello");
}`}</CodeBlock>

      <h3>Infinite while Loop</h3>

      <CodeBlock filename="infinite_while.java">{`while(true){

    System.out.println("Running");
}`}</CodeBlock>

      <h2>2. do-while Loop</h2>

      <p>
        do-while loop executes at least once because condition is checked later.
      </p>

      <CodeBlock filename="do_while.java">{`public class Main {

    public static void main(String[] args) {

        int i = 10;

        do{

            System.out.println(i);

            i++;

        }while(i <= 5);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`10`}</CodeBlock>

      <h3>Difference Between while and do-while</h3>

      <table className="doc-table">
        <thead>
          <tr>
            <th>while</th>
            <th>do-while</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Condition checked first</td>
            <td>Condition checked later</td>
          </tr>

          <tr>
            <td>May execute 0 times</td>
            <td>Executes at least once</td>
          </tr>
        </tbody>
      </table>

      <h2>3. for Loop</h2>

      <p>
        for loop is best when number of iterations is known.
      </p>

      <CodeBlock filename="for_loop.java">{`public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 5; i++){

            System.out.println(i);
        }
    }
}`}</CodeBlock>

      <h3>Structure of for Loop</h3>

      <CodeBlock filename="for_structure.java">{`for(initialization; condition; update){

    // code
}`}</CodeBlock>

      <h3>Flow</h3>

      <ul>
        <li>Initialization runs once</li>
        <li>Condition is checked</li>
        <li>Code executes</li>
        <li>Update runs</li>
        <li>Loop repeats</li>
      </ul>

      <h2>Different Ways of Using for Loop</h2>

      <h3>1. Multiple Variables</h3>

      <CodeBlock filename="multiple_variables.java">{`for(int i = 1, j = 5; i <= 5; i++, j--){

    System.out.println(i + " " + j);
}`}</CodeBlock>

      <h3>2. Infinite for Loop</h3>

      <CodeBlock filename="infinite_for.java">{`for( ; ; ){

    System.out.println("Infinite");
}`}</CodeBlock>

      <h3>3. Enhanced for Loop (for-each)</h3>

      <p>
        Used for arrays and collections.
      </p>

      <CodeBlock filename="enhanced_for.java">{`int arr[] = {10, 20, 30};

for(int x : arr){

    System.out.println(x);
}`}</CodeBlock>

      <h2>Nested Loops</h2>

      <p>
        Loop inside another loop is called nested loop.
      </p>

      <CodeBlock filename="nested_loop.java">{`for(int i = 1; i <= 3; i++){

    for(int j = 1; j <= 3; j++){

        System.out.print("* ");
    }

    System.out.println();
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="nested_output.txt">{`* * *
* * *
* * *`}</CodeBlock>

      <h2>Jump Statements</h2>

      <h3>1. break</h3>

      <p>
        break stops the loop completely.
      </p>

      <CodeBlock filename="break_example.java">{`for(int i = 1; i <= 10; i++){

    if(i == 5)
        break;

    System.out.println(i);
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="break_output.txt">{`1
2
3
4`}</CodeBlock>

      <h3>2. continue</h3>

      <p>
        continue skips current iteration.
      </p>

      <CodeBlock filename="continue_example.java">{`for(int i = 1; i <= 5; i++){

    if(i == 3)
        continue;

    System.out.println(i);
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="continue_output.txt">{`1
2
4
5`}</CodeBlock>

      <h2>Labels in Java</h2>

      <p>
        Labels are names given to loops.
      </p>

      <ul>
        <li>Used with break</li>
        <li>Used with continue</li>
        <li>Helps control outer loops</li>
      </ul>

      <CodeBlock filename="labels.java">{`outer:

for(int i = 1; i <= 3; i++){

    for(int j = 1; j <= 3; j++){

        if(i == 2 && j == 2)
            break outer;

        System.out.println(i + " " + j);
    }
}`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li>break outer stops both loops</li>
        <li>Useful in nested loops</li>
      </ul>

      <h2>Comparison of Loops</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Loop</th>
            <th>Condition Checked</th>
            <th>Minimum Runs</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>while</td>
            <td>Before execution</td>
            <td>0</td>
          </tr>

          <tr>
            <td>do-while</td>
            <td>After execution</td>
            <td>1</td>
          </tr>

          <tr>
            <td>for</td>
            <td>Before execution</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Revision</h2>

      <ul>
        <li>
          <strong>while</strong> → condition checked first
        </li>

        <li>
          <strong>do-while</strong> → runs at least once
        </li>

        <li>
          <strong>for</strong> → best when iterations are known
        </li>

        <li>
          <strong>Enhanced for</strong> → used for arrays
        </li>

        <li>
          <strong>break</strong> → exits loop
        </li>

        <li>
          <strong>continue</strong> → skips iteration
        </li>

        <li>
          <strong>Labels</strong> → controls outer loops
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Conditional Statements', path: '/java/conditional' }}
        next={{ label: 'Strings', path: '/java/strings' }}
      />
    </DocPage>
  );
};

export default JavaLoops;