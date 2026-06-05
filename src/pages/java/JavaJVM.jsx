import React from "react";
import CodeBlock from "../../components/CodeBlock";
import { DocPage, DocHeader, PageNav } from "../../components/DocLayout";

export default function JavaJVM() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Java", href: "/java/introduction" },
          { label: "JVM, JRE & JDK" },
        ]}
        title="JVM, JRE and JDK in Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Introduction</h2>

      <p>
        Java became popular mainly because of its portability feature. Java
        follows the principle:
      </p>

      <h3>Write Once Run Anywhere (WORA)</h3>

      <p>
        Unlike C/C++, Java programs do not directly generate platform-dependent
        machine code. Instead, Java code is converted into Bytecode which can
        run on any machine having JVM installed.
      </p>

      <h2>What is JVM?</h2>

      <p>
        JVM stands for <strong>Java Virtual Machine</strong>.
      </p>

      <ul>
        <li>JVM is a software installed on every platform.</li>

        <li>It converts Java Bytecode into Machine Code.</li>

        <li>JVM provides platform independence.</li>

        <li>JVM also provides security using Sandbox Environment.</li>

        <li>JVM handles Garbage Collection automatically.</li>

        <li>Modern JVM uses both Interpreter and JIT Compiler.</li>
      </ul>

      <h3>How JVM Works</h3>

      <ol>
        <li>Java source code (.java file) is written by developer.</li>

        <li>Java Compiler converts source code into Bytecode (.class file).</li>

        <li>JVM reads the Bytecode.</li>

        <li>JVM converts Bytecode into Machine Code.</li>

        <li>Program gets executed on operating system.</li>
      </ol>

      <h3>Interpreter + JIT Compiler</h3>

      <p>JVM internally uses:</p>

      <ul>
        <li>
          <strong>Interpreter</strong> → Executes code line by line.
        </li>

        <li>
          <strong>JIT Compiler (Just In Time Compiler)</strong> → Converts
          frequently used Bytecode into native machine code for faster
          execution.
        </li>
      </ul>

      <h3>Compiler vs Interpreter</h3>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Compiler</th>
            <th>Interpreter</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Converts entire program at once</td>
            <td>Converts line by line</td>
          </tr>

          <tr>
            <td>Faster execution after compilation</td>
            <td>Slower execution</td>
          </tr>

          <tr>
            <td>Generates machine code</td>
            <td>Executes instruction one by one</td>
          </tr>

          <tr>
            <td>C and C++ mainly use compiler</td>
            <td>Python mainly uses interpreter</td>
          </tr>
        </tbody>
      </table>

      <p>Java is both:</p>

      <ul>
        <li>Compiled Language</li>
        <li>Interpreted Language</li>
      </ul>

      <h2>What is JRE?</h2>

      <p>JRE stands for:</p>

      <h3>Java Runtime Environment</h3>

      <ul>
        <li>JRE = JVM + Class Libraries</li>

        <li>JRE is required to run Java applications.</li>

        <li>It contains predefined Java libraries.</li>

        <li>
          Example: Functions like <code>System.out.println()</code> are provided
          by Java class libraries.
        </li>
      </ul>

      <h3>Structure of JRE</h3>

      <CodeBlock filename="jre_structure.txt">{`JRE = JVM + Java Class Libraries`}</CodeBlock>

      <h2>What is JDK?</h2>

      <p>JDK stands for:</p>

      <h3>Java Development Kit</h3>

      <ul>
        <li>JDK contains everything needed to develop Java applications.</li>

        <li>JDK = JRE + Development Tools</li>

        <li>Includes:</li>
      </ul>

      <ul>
        <li>Compiler (javac)</li>
        <li>Debugger</li>
        <li>Documentation Tools</li>
        <li>Java Libraries</li>
      </ul>

      <h3>Structure of JDK</h3>

      <CodeBlock filename="jdk_structure.txt">{`JDK = JRE + Compiler + Debugger + Development Tools`}</CodeBlock>

      <h2>Difference Between JVM, JRE and JDK</h2>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>JVM</th>
            <th>JRE</th>
            <th>JDK</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Full Form</td>
            <td>Java Virtual Machine</td>
            <td>Java Runtime Environment</td>
            <td>Java Development Kit</td>
          </tr>

          <tr>
            <td>Main Purpose</td>
            <td>Runs Bytecode</td>
            <td>Runs Java Programs</td>
            <td>Develop Java Programs</td>
          </tr>

          <tr>
            <td>Contains JVM</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Contains Compiler</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Used By</td>
            <td>System</td>
            <td>Users</td>
            <td>Developers</td>
          </tr>
        </tbody>
      </table>

      <h2>Java Editions</h2>

      <h3>1. JSE (Java Standard Edition)</h3>

      <ul>
        <li>Core Java</li>
        <li>Basic Java Applications</li>
      </ul>

      <h3>2. JEE (Java Enterprise Edition)</h3>

      <ul>
        <li>Web Applications</li>
        <li>Enterprise Applications</li>
        <li>Servlets and APIs</li>
      </ul>

      <h3>3. JME (Java Micro Edition)</h3>

      <ul>
        <li>Used for lightweight devices</li>
        <li>Previously used in mobile applications</li>
      </ul>

      <h2>JVM Architecture Diagram</h2>

      <p>
        Below diagram shows how Java source code gets converted into machine
        code using JDK, JRE and JVM.
      </p>

      <div className="doc-image">
        <img
          src="/images/java-jvm-diagram.jpg"
          alt="JVM JDK JRE Diagram"
          className="diagram-image"
        />
      </div>

      <h2>First Java Program</h2>

      <CodeBlock filename="HelloWorld.java">{`class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello Java");

    }

}`}</CodeBlock>

      <h3>Compilation Command</h3>

      <CodeBlock filename="compile_command.txt">{`javac HelloWorld.java`}</CodeBlock>

      <h3>Run Command</h3>

      <CodeBlock filename="run_command.txt">{`java HelloWorld`}</CodeBlock>

      <h2>Important Interview Questions</h2>

      <h3>1. Difference Between JDK, JRE and JVM?</h3>

      <p>
        JDK is used for development, JRE is used to run Java applications, and
        JVM converts Bytecode into machine code.
      </p>

      <h3>2. Why Java is Platform Independent?</h3>

      <p>
        Because Java code is converted into Bytecode which can run on any
        platform having JVM installed.
      </p>

      <h3>3. Is JVM Platform Independent?</h3>

      <p>
        No. JVM is platform dependent because different operating systems
        require different JVM implementations.
      </p>

      <h3>4. Why Java is both Compiled and Interpreted?</h3>

      <p>
        Java source code is first compiled into Bytecode using compiler, then
        JVM interprets or JIT compiles the Bytecode during execution.
      </p>

      <h2>Important Notes</h2>

      <ul>
        <li>Bytecode is platform independent.</li>

        <li>JVM is platform dependent.</li>

        <li>Java provides automatic Garbage Collection.</li>

        <li>JDK is required for development.</li>

        <li>JRE is required for execution.</li>
      </ul>

      <PageNav
        prev={{
          label: "Java Introduction",
          path: "/java/intro",
        }}
        next={{
          label: "Java Variables",
          path: "/java/variables",
        }}
      />
    </DocPage>
  );
}
