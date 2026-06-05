import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaPackages = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Packages' }
        ]}
        title="Packages in Java"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Packages in Java</h2>

      <p>
        A package is a folder/container that groups related classes together.
        Think of it like a folder on your computer used to organize files.
      </p>

      <h2>Why Use Packages?</h2>

      <ul>
        <li>Organize code neatly.</li>
        <li>Avoid class name conflicts.</li>
        <li>Control access using access modifiers.</li>
        <li>Easy code reuse.</li>
      </ul>

      <h2>Types of Packages</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Package Type</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Built-in Packages</td>
            <td>Provided by Java</td>
          </tr>

          <tr>
            <td>User-defined Packages</td>
            <td>Created by developers</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="package_types.txt">{`Packages
├── Built-in Packages
└── User-defined Packages`}</CodeBlock>

      <h2>1. Built-in Packages</h2>

      <p>
        Built-in packages are already available in Java. We simply import them
        and start using their classes.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Contains</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>java.lang</td>
            <td>String, Math, System (auto imported)</td>
          </tr>

          <tr>
            <td>java.util</td>
            <td>ArrayList, Scanner, HashMap</td>
          </tr>

          <tr>
            <td>java.io</td>
            <td>File, FileReader, BufferedReader</td>
          </tr>

          <tr>
            <td>java.net</td>
            <td>Socket, URL</td>
          </tr>

          <tr>
            <td>java.sql</td>
            <td>Database Connectivity Classes</td>
          </tr>
        </tbody>
      </table>

      <h3>Example: Using Built-in Package</h3>

      <CodeBlock filename="builtin_package.java">{`import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter name:");

        String name = sc.nextLine();

        System.out.println("Hello " + name);
    }
}`}</CodeBlock>

      <p>
        Here <strong>Scanner</strong> class is imported from the{' '}
        <strong>java.util</strong> package.
      </p>

      <h2>2. User-defined Packages</h2>

      <p>
        User-defined packages are created by programmers to organize their own
        classes.
      </p>

      <h3>Step 1: Create a Package</h3>

      <CodeBlock filename="Dog.java">{`package animal;

public class Dog {

    public void bark() {
        System.out.println("Woof!");
    }
}`}</CodeBlock>

      <p>
        The package declaration must always be the first statement in the file.
      </p>

      <h3>Step 2: Use Package in Another Class</h3>

      <CodeBlock filename="Main.java">{`import animal.Dog;

public class Main {

    public static void main(String[] args) {

        Dog d = new Dog();

        d.bark();
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Woof!`}</CodeBlock>

      <h2>Folder Structure</h2>

      <CodeBlock filename="project_structure.txt">{`project/
├── animal/
│   └── Dog.java
├── vehicle/
│   └── Car.java
└── Main.java`}</CodeBlock>

      <ul>
        <li>Dog.java belongs to package animal.</li>
        <li>Car.java belongs to package vehicle.</li>
        <li>Main.java can use classes from both packages.</li>
      </ul>

      <h2>Import Statement</h2>

      <p>
        The import statement is used to access classes from another package.
      </p>

      <h3>Import Single Class</h3>

      <CodeBlock filename="single_import.java">{`import java.util.Scanner;`}</CodeBlock>

      <p>
        Recommended because only the required class is imported.
      </p>

      <h3>Import Entire Package</h3>

      <CodeBlock filename="wildcard_import.java">{`import java.util.*;`}</CodeBlock>

      <p>
        Imports all accessible classes from the package.
      </p>

      <h2>Important Rules of Packages</h2>

      <ul>
        <li>Package statement must be the first line in a Java file.</li>
        <li>Directory structure should match package structure.</li>
        <li>One class can belong to only one package.</li>
        <li>Classes from other packages must be imported before use.</li>
        <li>java.lang package is imported automatically.</li>
      </ul>

      <h2>Advantages of Packages</h2>

      <ul>
        <li>Better project organization.</li>
        <li>Avoids naming conflicts.</li>
        <li>Improves maintainability.</li>
        <li>Provides access protection.</li>
        <li>Supports modular development.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Package is a container that groups related classes.</li>
        <li>Packages help organize large projects.</li>
        <li>Built-in packages are provided by Java.</li>
        <li>User-defined packages are created by developers.</li>
        <li>import keyword is used to access classes from other packages.</li>
        <li>java.lang is imported automatically.</li>
        <li>Folder structure should match package structure.</li>
      </ul>

      <PageNav
        prev={{ label: 'Encapsulation & Access Modifiers', path: '/java/encapsulation-access-modifiers' }}
        next={{ label: 'Inheritance', path: '/java/inheritance' }}
      />
    </DocPage>
  );
};

export default JavaPackages;