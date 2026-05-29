import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaStrings = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Strings' }
        ]}
        title="Strings in Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What are Strings?</h2>

      <p>
        Strings are objects in Java used to store sequence of characters.
      </p>

      <ul>
        <li>String is a class available in <strong>java.lang</strong> package.</li>
        <li>Strings are immutable in Java.</li>
        <li>Anything written inside double quotes is treated as String.</li>
      </ul>

      <div className="image-wrapper">
        <img
          src="/1.jpg"
          alt="Java String Concepts"
          className="doc-image"
        />
      </div>

      <h2>Creating Strings in Java</h2>

      <p>
        Strings can be created in multiple ways.
      </p>

      <h3>1. Using String Literal</h3>

      <CodeBlock filename="string_literal.java">{`String str = "Hello";`}</CodeBlock>

      <ul>
        <li>Stored inside String Constant Pool.</li>
        <li>Memory efficient.</li>
      </ul>

      <h3>2. Using new Keyword</h3>

      <CodeBlock filename="new_string.java">{`String str = new String("Java");`}</CodeBlock>

      <ul>
        <li>Stored inside Heap Memory.</li>
        <li>Creates new object every time.</li>
      </ul>

      <h3>3. Using Another String Object</h3>

      <CodeBlock filename="copy_string.java">{`String str1 = "Hello";

String str2 = str1;

System.out.println(str2);`}</CodeBlock>

      <h3>4. Using Concatenation</h3>

      <CodeBlock filename="concat_string.java">{`String str = "Hello" + " Java";

System.out.println(str);`}</CodeBlock>

      <h2>String Storage in Memory</h2>

      <p>
        Java stores String literals inside a special memory area called:
      </p>

      <h3>String Constant Pool (SCP)</h3>

      <ul>
        <li>Used to save memory.</li>
        <li>Duplicate String literals share same memory.</li>
        <li>Only literals are stored in SCP.</li>
      </ul>

      <CodeBlock filename="scp_example.java">{`String s1 = "Hello";

String s2 = "Hello";

System.out.println(s1 == s2);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`true`}</CodeBlock>

      <p>
        Both references point to same object in String Constant Pool.
      </p>

      <h2>String Literal vs String Object</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>String Literal</th>
            <th>String Object</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Memory Location</td>
            <td>String Constant Pool</td>
            <td>Heap Memory</td>
          </tr>

          <tr>
            <td>Memory Sharing</td>
            <td>Yes</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Object Creation</td>
            <td>Only once</td>
            <td>New object every time</td>
          </tr>

          <tr>
            <td>Performance</td>
            <td>Faster</td>
            <td>Slower</td>
          </tr>
        </tbody>
      </table>

      <div className="image-wrapper">
        <img
          src="/2(1).JPG"
          alt="Java String Functions"
          className="doc-image"
        />
      </div>

      <h2>Immutability of Strings</h2>

      <p>
        Strings are immutable which means once created, their values cannot be changed.
      </p>

      <CodeBlock filename="immutable.java">{`String s = "Hello";

s.concat(" Java");

System.out.println(s);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Hello`}</CodeBlock>

      <p>
        concat() creates new String object but original string remains unchanged.
      </p>

      <h2>Common String Functions</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>length()</td>
            <td>Returns length of String</td>
            <td>"Java".length()</td>
          </tr>

          <tr>
            <td>charAt()</td>
            <td>Returns character at index</td>
            <td>str.charAt(0)</td>
          </tr>

          <tr>
            <td>toUpperCase()</td>
            <td>Converts to uppercase</td>
            <td>str.toUpperCase()</td>
          </tr>

          <tr>
            <td>toLowerCase()</td>
            <td>Converts to lowercase</td>
            <td>str.toLowerCase()</td>
          </tr>

          <tr>
            <td>trim()</td>
            <td>Removes spaces</td>
            <td>str.trim()</td>
          </tr>

          <tr>
            <td>substring()</td>
            <td>Returns part of string</td>
            <td>str.substring(1,4)</td>
          </tr>

          <tr>
            <td>replace()</td>
            <td>Replaces characters</td>
            <td>str.replace('a','x')</td>
          </tr>

          <tr>
            <td>equals()</td>
            <td>Compares contents</td>
            <td>s1.equals(s2)</td>
          </tr>

          <tr>
            <td>compareTo()</td>
            <td>Lexicographical comparison</td>
            <td>s1.compareTo(s2)</td>
          </tr>
        </tbody>
      </table>

      <h2>Examples of String Functions</h2>

      <CodeBlock filename="string_methods.java">{`public class Main {

    public static void main(String[] args) {

        String str = "  Java Programming  ";

        System.out.println(str.length());

        System.out.println(str.charAt(2));

        System.out.println(str.toUpperCase());

        System.out.println(str.toLowerCase());

        System.out.println(str.trim());

        System.out.println(str.substring(0, 4));

        System.out.println(str.replace('a', 'x'));
    }
}`}</CodeBlock>

      <h2>equals() vs == Operator</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>equals()</th>
            <th>== Operator</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Compares contents</td>
            <td>Compares references</td>
          </tr>

          <tr>
            <td>Checks actual values</td>
            <td>Checks memory address</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="equals_vs_operator.java">{`String s1 = "Hello";

String s2 = "Hello";

String s3 = new String("Hello");

System.out.println(s1 == s2);

System.out.println(s1 == s3);

System.out.println(s1.equals(s3));`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`true
false
true`}</CodeBlock>

      <h2>compareTo() Method</h2>

      <p>
        compareTo() compares strings lexicographically.
      </p>

      <CodeBlock filename="compare_to.java">{`String s1 = "abc";

String s2 = "abd";

System.out.println(s1.compareTo(s2));`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`-1`}</CodeBlock>

      <ul>
        <li>0 → Strings are equal</li>
        <li>Positive → First string is greater</li>
        <li>Negative → Second string is greater</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Strings are objects in Java.</li>
        <li>String literals are stored in SCP.</li>
        <li>Strings are immutable.</li>
        <li>equals() compares values.</li>
        <li>== compares references.</li>
        <li>String methods help manipulate text easily.</li>
      </ul>

      <PageNav
        prev={{ label: 'Loops', path: '/java/loops' }}
        next={{ label: 'Arrays', path: '/java/arrays' }}
      />
    </DocPage>
  );
};

export default JavaStrings;