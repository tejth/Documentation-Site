import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaIntroduction = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Introduction to Java' }
        ]}
        title="Introduction to Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What is Java?</h2>

      <ul>
        <li>
          <p>
            Java is a high-level, object-oriented, class-based and concurrent programming language.
          </p>
        </li>

        <li>
          <p>
            Java follows the philosophy:
          </p>
        </li>

        <li>
          <p>
            <strong>WORA → Write Once Run Anywhere</strong>
          </p>
        </li>

        <li>
          <p>
            Java applications can run on multiple platforms without changing the code.
          </p>
        </li>

        <li>
          <p>
            Java is widely used in:
          </p>
        </li>

        <li>
          <p>Web Development</p>
        </li>

        <li>
          <p>Android Development</p>
        </li>

        <li>
          <p>Backend APIs</p>
        </li>

        <li>
          <p>Enterprise Applications</p>
        </li>

        <li>
          <p>Cloud Applications</p>
        </li>
      </ul>

      <h2>Who Created Java?</h2>

      <ul>
        <li>
          <p>
            Java was created by <strong>James Gosling</strong>.
          </p>
        </li>

        <li>
          <p>
            He is also known as the <strong>Father of Java</strong>.
          </p>
        </li>

        <li>
          <p>
            Java was developed by the <strong>Green Team</strong> at Sun Microsystems.
          </p>
        </li>

        <li>
          <p>
            Development started in June 1991.
          </p>
        </li>
      </ul>

      <h2>Why Java Was Created?</h2>

      <ul>
        <li>
          <p>
            Earlier programming languages like C and C++ had many problems.
          </p>
        </li>

        <li>
          <p>
            The biggest issue was portability.
          </p>
        </li>
      </ul>

      <h2>Problems with C and C++</h2>

      <h3>1. Portability Issue</h3>

      <ul>
        <li>
          <p>
            C and C++ are platform dependent languages.
          </p>
        </li>

        <li>
          <p>
            Code compiled for one machine may not work on another machine.
          </p>
        </li>

        <li>
          <p>
            Different operating systems generate different machine code.
          </p>
        </li>

        <li>
          <p>
            Different processors have different instruction sets (ISA).
          </p>
        </li>

        <li>
          <p>
            Therefore machine code changes from platform to platform.
          </p>
        </li>
      </ul>

      <h3>Platform = Processor + Operating System</h3>

      <ul>
        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            Intel + Windows
          </p>
        </li>

        <li>
          <p>
            ARM + MacOS
          </p>
        </li>
      </ul>

      <h3>2. Memory Management Problem</h3>

      <ul>
        <li>
          <p>
            In C/C++, developers manually allocate and deallocate memory.
          </p>
        </li>

        <li>
          <p>
            This can cause memory leaks.
          </p>
        </li>
      </ul>

      <h3>3. Pointer Complexity</h3>

      <ul>
        <li>
          <p>
            C/C++ uses pointers heavily.
          </p>
        </li>

        <li>
          <p>
            Pointers make code difficult and unsafe.
          </p>
        </li>
      </ul>

      <h3>4. Multiple Inheritance Complexity</h3>

      <ul>
        <li>
          <p>
            Multiple inheritance in C++ can create ambiguity problems.
          </p>
        </li>
      </ul>

      <h2>How Java Solved Portability Problem?</h2>

      <ul>
        <li>
          <p>
            Java introduced JVM (Java Virtual Machine).
          </p>
        </li>

        <li>
          <p>
            Java compiler converts source code into Bytecode.
          </p>
        </li>

        <li>
          <p>
            Bytecode is platform independent.
          </p>
        </li>

        <li>
          <p>
            JVM converts bytecode into machine code for the specific platform.
          </p>
        </li>
      </ul>

      <h3>Java Execution Flow</h3>

      <CodeBlock filename="java_execution.txt">{`Java Source Code (.java)

        ↓

Java Compiler (javac)

        ↓

Bytecode (.class)

        ↓

JVM

        ↓

Machine Code

        ↓

Output`}</CodeBlock>

      <h2>Important Point</h2>

      <ul>
        <li>
          <p>
            Java bytecode is platform independent.
          </p>
        </li>

        <li>
          <p>
            JVM is platform dependent.
          </p>
        </li>
      </ul>

      <h2>Features of Java</h2>

      <h3>1. Simple</h3>

      <ul>
        <li>
          <p>
            No pointers.
          </p>
        </li>

        <li>
          <p>
            Automatic garbage collection.
          </p>
        </li>

        <li>
          <p>
            Easy syntax similar to C++.
          </p>
        </li>
      </ul>

      <h3>2. Object-Oriented</h3>

      <ul>
        <li>
          <p>
            Everything revolves around classes and objects.
          </p>
        </li>
      </ul>

      <h3>3. Secure</h3>

      <ul>
        <li>
          <p>
            Java runs inside JVM sandbox environment.
          </p>
        </li>

        <li>
          <p>
            No direct memory access.
          </p>
        </li>
      </ul>

      <h3>4. Portable</h3>

      <ul>
        <li>
          <p>
            Java programs can run on different platforms.
          </p>
        </li>
      </ul>

      <h3>5. Multithreaded</h3>

      <ul>
        <li>
          <p>
            Java supports multithreading.
          </p>
        </li>
      </ul>

      <h3>6. Robust</h3>

      <ul>
        <li>
          <p>
            Strong memory management.
          </p>
        </li>

        <li>
          <p>
            Exception handling support.
          </p>
        </li>
      </ul>

      <h2>First Java Program</h2>

      <CodeBlock filename="HelloWorld.java">{`<span class="cmt">// First Java Program</span>

class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello World");

    }

}`}</CodeBlock>

      <h2>Explanation of Above Program</h2>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>class</td>
            <td>Defines a class</td>
          </tr>

          <tr>
            <td>main()</td>
            <td>Program starting point</td>
          </tr>

          <tr>
            <td>System.out.println()</td>
            <td>Prints output</td>
          </tr>

          <tr>
            <td>String[] args</td>
            <td>Command line arguments</td>
          </tr>
        </tbody>
      </table>

      <h2>Compiling and Running Java Program</h2>

      <CodeBlock filename="terminal">{`<span class="cmt"># Compile Java Program</span>

javac HelloWorld.java

<span class="cmt"># Run Java Program</span>

java HelloWorld`}</CodeBlock>

      <h2>Difference Between JDK, JRE and JVM</h2>

      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>JDK</td>
            <td>Java Development Kit</td>
          </tr>

          <tr>
            <td>JRE</td>
            <td>Java Runtime Environment</td>
          </tr>

          <tr>
            <td>JVM</td>
            <td>Java Virtual Machine</td>
          </tr>
        </tbody>
      </table>

      <h2>Important Interview Questions</h2>

      <ul>
        <li>
          <p>
            Why Java is platform independent?
          </p>
        </li>

        <li>
          <p>
            Difference between JDK, JRE and JVM.
          </p>
        </li>

        <li>
          <p>
            What is Bytecode?
          </p>
        </li>

        <li>
          <p>
            What is JVM?
          </p>
        </li>

        <li>
          <p>
            Why Java is called secure language?
          </p>
        </li>

        <li>
          <p>
            What is WORA?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Documentation Home', path: '/' }}
        next={{ label: 'Variables and Data Types', path: '/java/variables' }}
      />

    </DocPage>
  );
};

export default JavaIntroduction;