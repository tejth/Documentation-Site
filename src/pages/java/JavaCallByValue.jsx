import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaCallByValue = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Call By Value vs Call By Reference' }
        ]}
        title="Call By Value vs Call By Reference in Java"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Introduction</h2>

      <p>
        One of the most common Java interview questions is:
      </p>

      <p>
        <strong>
          Is Java Call by Value or Call by Reference?
        </strong>
      </p>

      <p>
        The answer is:
      </p>

      <CodeBlock filename="answer.txt">{`Java is always Call by Value.`}</CodeBlock>

      <p>
        There is no true Call by Reference in Java.
      </p>

      <p>
        The confusion arises because object references are also passed by value.
      </p>

      <h2>What is Call by Value?</h2>

      <p>
        In Call by Value, a copy of the variable's value is passed to the
        method.
      </p>

      <ul>
        <li>Changes made inside the method do not affect the original variable.</li>
        <li>The method works on a copy of the value.</li>
        <li>Primitive data types always follow Call by Value.</li>
      </ul>

      <h2>Primitive Example</h2>

      <CodeBlock filename="primitive_example.java">{`class Test {

    static void change(int x) {
        x = 100;
    }

    public static void main(String[] args) {

        int num = 10;

        change(num);

        System.out.println(num);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`10`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li><strong>num</strong> contains value 10.</li>
        <li>When <strong>change(num)</strong> is called, a copy of 10 is passed.</li>
        <li>Method variable <strong>x</strong> becomes 100.</li>
        <li>Original variable <strong>num</strong> remains unchanged.</li>
      </ul>

      <h2>Memory Representation</h2>

      <CodeBlock filename="memory.txt">{`num = 10

change(num)

Copy passed:
x = 10

x = 100

Original num = 10`}</CodeBlock>

      <p>
        Since only a copy is modified, the original value remains unchanged.
      </p>

      <h2>Object Example (Most Asked Interview Question)</h2>

      <CodeBlock filename="object_example.java">{`class Student {
    int age;
}

class Test {

    static void change(Student s) {
        s.age = 25;
    }

    public static void main(String[] args) {

        Student st = new Student();

        st.age = 20;

        change(st);

        System.out.println(st.age);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`25`}</CodeBlock>

      <h3>Why Did Age Change?</h3>

      <p>
        Many developers incorrectly assume Java becomes Call by Reference here.
      </p>

      <p>
        That is not true.
      </p>

      <p>
        Java still passes a copy of the reference.
      </p>

      <CodeBlock filename="concept.txt">{`Original Reference ---> Student Object(age=20)

Copy of Reference ---> Same Student Object(age=20)`}</CodeBlock>

      <p>
        Both references point to the same object in heap memory.
      </p>

      <p>
        Therefore modifying the object's state through the copied reference
        changes the same underlying object.
      </p>

      <h2>Visual Understanding</h2>

      <CodeBlock filename="memory_diagram.txt">{`st --------> Student Object
               age = 20

s  --------> Student Object
               age = 20

s.age = 25

Student Object
age = 25`}</CodeBlock>

      <p>
        Since both references point to the same object, the object's data gets
        updated.
      </p>

      <h2>Can We Replace the Original Reference?</h2>

      <p>
        No.
      </p>

      <p>
        Even for objects, Java only passes a copy of the reference.
      </p>

      <CodeBlock filename="replace_reference.java">{`class Student {
    int age;
}

class Test {

    static void change(Student s) {

        s = new Student();

        s.age = 50;
    }

    public static void main(String[] args) {

        Student st = new Student();

        st.age = 20;

        change(st);

        System.out.println(st.age);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`20`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li>A copy of reference is passed to method.</li>
        <li>Inside method, reference variable <strong>s</strong> points to a new object.</li>
        <li>Original reference <strong>st</strong> is unaffected.</li>
        <li>Therefore age remains 20.</li>
      </ul>

      <h2>Important Interview Statement</h2>

      <CodeBlock filename="interview.txt">{`Java is strictly Call by Value.

For objects, Java passes a copy of the reference
(address), not the actual reference itself.

Object state can be modified,
but the original reference cannot be replaced
through a method call.`}</CodeBlock>

      <h2>Call by Value vs Call by Reference</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Call by Value</th>
            <th>Call by Reference</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>What is Passed?</td>
            <td>Copy of value</td>
            <td>Actual reference</td>
          </tr>

          <tr>
            <td>Original Variable Changes?</td>
            <td>No</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Supported in Java?</td>
            <td>Yes</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Objects</td>
            <td>Copy of reference</td>
            <td>Not applicable</td>
          </tr>
        </tbody>
      </table>

      <h2>Common Misconception</h2>

      <p>
        Many people say:
      </p>

      <CodeBlock filename="wrong.txt">{`Java objects are passed by reference.`}</CodeBlock>

      <p>
        This statement is incorrect.
      </p>

      <p>
        The correct statement is:
      </p>

      <CodeBlock filename="correct.txt">{`Java passes a copy of the object reference.

Hence Java is still Call by Value.`}</CodeBlock>

      <h2>Quick Revision</h2>

      <ul>
        <li>Java is always Call by Value.</li>
        <li>Primitive values are copied when passed to methods.</li>
        <li>Changes to primitive parameters do not affect original variables.</li>
        <li>Objects are not passed by reference.</li>
        <li>A copy of the reference is passed.</li>
        <li>Object state can be modified through the copied reference.</li>
        <li>Original reference cannot be replaced from inside a method.</li>
      </ul>

      <PageNav
        prev={{ label: 'Object Memory', path: '/java/object-memory' }}
        next={{ label: 'Inheritance', path: '/java/inheritance' }}
      />
    </DocPage>
  );
};

export default JavaCallByValue;