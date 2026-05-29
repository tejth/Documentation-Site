import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaFunctions = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Functions' }
        ]}
        title="Functions in Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What are Functions?</h2>

      <p>
        Function refers to a block of code that can be reused again and again
        to perform a particular task without writing the same full code multiple times.
      </p>

      <ul>
        <li>Functions help reduce code duplication.</li>
        <li>Functions improve readability of code.</li>
        <li>Functions make programs easier to manage and debug.</li>
        <li>Functions are also called methods in Java.</li>
      </ul>

      <h2>Syntax of Function</h2>

      <CodeBlock filename="function_syntax.java">{`returnType functionName(parameters) {

    // Function body

}`}</CodeBlock>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Part</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>returnType</td>
            <td>Specifies what function returns</td>
          </tr>

          <tr>
            <td>functionName</td>
            <td>Name of the function</td>
          </tr>

          <tr>
            <td>parameters</td>
            <td>Input values accepted by function</td>
          </tr>
        </tbody>
      </table>

      <h2>Function Declaration and Calling</h2>

      <p>
        Functions are declared outside main() method and can be called
        whenever required.
      </p>

      <CodeBlock filename="function_example.java">{`public class A1 {

    // Function Declaration and Initialization
    static void printarr(int arr[][]){

        for(int i = 0; i < arr.length; i++){

            for(int j = 0; j < arr[0].length; j++){

                System.out.println(arr[i][j]);
            }
        }
    }

    public static void main(String args[]){

        int[][] marks = {
            {4,5,6},
            {7,5,9},
            {5,8,5}
        };

        int[][] rollNums = {
            {3,55,78},
            {45,6,78}
        };

        // Function Calling
        printarr(marks);

        printarr(rollNums);
    }
}`}</CodeBlock>

      <h2>Types of Functions</h2>

      <p>
        Functions can be of two types:
      </p>

      <ul>
        <li>Void function returning nothing.</li>
        <li>Function having return type.</li>
      </ul>

      <h3>1. Void Function</h3>

      <p>
        Void functions do not return any value.
      </p>

      <CodeBlock filename="void_function.java">{`static void greet(){

    System.out.println("Hello");
}`}</CodeBlock>

      <h3>2. Function with Return Type</h3>

      <p>
        These functions return a value after execution.
      </p>

      <CodeBlock filename="return_function.java">{`static int sum(int a, int b){

    return a + b;
}`}</CodeBlock>

      <h2>Function Parameters and Arguments</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Parameter</td>
            <td>Variables declared in function definition</td>
          </tr>

          <tr>
            <td>Argument</td>
            <td>Actual values passed during function call</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="parameters_arguments.java">{`static int add(int a, int b){

    return a + b;
}

public static void main(String args[]){

    System.out.println(add(5, 6));
}`}</CodeBlock>

      <ul>
        <li><strong>a</strong> and <strong>b</strong> are parameters.</li>
        <li><strong>5</strong> and <strong>6</strong> are arguments.</li>
      </ul>

      <h2>Function Overloading</h2>

      <p>
        Function overloading means functions having same name but different
        parameters either in terms of datatype or number of parameters.
      </p>

      <CodeBlock filename="function_overloading.java">{`public class A1 {

    static int sum(int a, int b){

        return a + b;
    }

    static int sum(int a, int b, int c){

        return a + b + c;
    }

    public static void main(String args[]){

        System.out.println(sum(5, 6));

        System.out.println(sum(7, 8, 9));
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`11
24`}</CodeBlock>

      <h2>Rules of Function Overloading</h2>

      <ul>
        <li>Function name must be same.</li>
        <li>Parameters must be different.</li>
        <li>Return type alone cannot differentiate overloaded functions.</li>
      </ul>

      <h2>Chaining of Functions</h2>

      <p>
        Chaining of functions means one function calling another function.
      </p>

      <CodeBlock filename="function_chaining.java">{`public class A1 {

    static void hello(){

        System.out.println("Hello");

        hy();
    }

    static void hy(){

        System.out.println("Hy");

        bye();
    }

    static void bye(){

        System.out.println("Bye");
    }

    public static void main(String args[]){

        hello();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Hello
Hy
Bye`}</CodeBlock>

      <h2>Recursion</h2>

      <p>
        Recursion is a process in which a function calls itself.
      </p>

      <ul>
        <li>Recursion must have a base case.</li>
        <li>Without base case, recursion becomes infinite.</li>
      </ul>

      <h3>Factorial Using Recursion</h3>

      <CodeBlock filename="recursion.java">{`public class A1 {

    static int fact(int num){

        // Base Case
        if(num == 0 || num == 1){

            return 1;
        }

        return num * fact(num - 1);
    }

    public static void main(String args[]){

        System.out.println(fact(5));
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`120`}</CodeBlock>

      <h2>How Recursion Works</h2>

      <p>
        Function calls are stored inside stack memory.
      </p>

      <p>
        For factorial of 5:
      </p>

      <CodeBlock filename="recursion_steps.txt">{`fact(5)
5 * fact(4)
5 * 4 * fact(3)
5 * 4 * 3 * fact(2)
5 * 4 * 3 * 2 * fact(1)
5 * 4 * 3 * 2 * 1`}</CodeBlock>

      <h2>Advantages of Functions</h2>

      <ul>
        <li>Code reusability.</li>
        <li>Better readability.</li>
        <li>Easy debugging.</li>
        <li>Reduces code duplication.</li>
        <li>Improves modularity.</li>
      </ul>

      <h2>Limitations of Recursion</h2>

      <ul>
        <li>Consumes extra stack memory.</li>
        <li>Can cause StackOverflowError if recursion is infinite.</li>
        <li>Sometimes slower than loops.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Functions are reusable blocks of code.</li>
        <li>Functions can return values or return nothing.</li>
        <li>Function overloading allows same function name with different parameters.</li>
        <li>Function chaining means one function calling another.</li>
        <li>Recursion means function calling itself.</li>
        <li>Base case is necessary in recursion.</li>
      </ul>

      <PageNav
        prev={{ label: 'Arrays', path: '/java/arrays' }}
        next={{ label: 'OOPs', path: '/java/oops' }}
      />
    </DocPage>
  );
};

export default JavaFunctions;
