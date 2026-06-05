import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaObjectMemory = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Object Memory' }
        ]}
        title="Java Object Memory and Object Size"
        readTime="15 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Object Size Formula</h2>

      <p>
        The size of a Java object depends on three components:
      </p>

      <CodeBlock filename="object_size_formula.txt">{`Object Size =
Object Header +
Actual Fields Size +
Padding (Multiple of 8)`}</CodeBlock>

      <h2>1. Object Header</h2>

      <p>
        Every Java object contains hidden metadata maintained by the JVM.
      </p>

      <h3>Header Components</h3>

      <CodeBlock filename="header_structure.txt">{`Object Header
    |
    |-- Mark Word (8 bytes)
    |-- Class Pointer (4 bytes)`}</CodeBlock>

      <h3>Mark Word Stores</h3>

      <ul>
        <li>Lock Information</li>
        <li>Synchronization Status</li>
        <li>HashCode</li>
        <li>Garbage Collection (GC) Information</li>
      </ul>

      <h3>Class Pointer Stores</h3>

      <ul>
        <li>Reference to Class Metadata</li>
        <li>Information about Fields</li>
        <li>Information about Methods</li>
        <li>Information about Constructors</li>
      </ul>

      <h3>Header Size</h3>

      <CodeBlock filename="header_size.txt">{`Mark Word     = 8 bytes
Class Pointer = 4 bytes
-----------------------
Header Size   = 12 bytes`}</CodeBlock>

      <h2>2. Exact Fields Size</h2>

      <p>
        This is the memory occupied by instance variables present inside
        the object.
      </p>

      <CodeBlock filename="field_example.java">{`class Person {

    byte age;
}`}</CodeBlock>

      <p>
        Since <strong>byte</strong> occupies 1 byte, field size = 1 byte.
      </p>

      <h2>3. Padding</h2>

      <p>
        JVM aligns objects to multiples of 8 bytes for better memory access
        and CPU efficiency.
      </p>

      <CodeBlock filename="padding_formula.txt">{`Padding =
Next Multiple of 8 - Current Size`}</CodeBlock>

      <h2>Example 1</h2>

      <CodeBlock filename="person_byte.java">{`class Person {

    byte age;
}`}</CodeBlock>

      <h3>Calculation</h3>

      <CodeBlock filename="calculation.txt">{`Header = 12 bytes
byte   = 1 byte
---------------
Total  = 13 bytes

Next multiple of 8 = 16

Padding = 16 - 13
        = 3 bytes`}</CodeBlock>

      <h3>Final Size</h3>

      <CodeBlock filename="result.txt">{`12 + 1 + 3 = 16 bytes`}</CodeBlock>

      <h2>Example 2</h2>

      <CodeBlock filename="person_int.java">{`class Person {

    int age;
}`}</CodeBlock>

      <h3>Calculation</h3>

      <CodeBlock filename="calculation.txt">{`Header = 12 bytes
int    = 4 bytes
---------------
Total  = 16 bytes`}</CodeBlock>

      <h3>Final Size</h3>

      <CodeBlock filename="result.txt">{`16 bytes
(No padding required)`}</CodeBlock>

      <h2>Example 3</h2>

      <CodeBlock filename="person_long.java">{`class Person {

    long salary;
}`}</CodeBlock>

      <h3>Calculation</h3>

      <CodeBlock filename="calculation.txt">{`Header = 12 bytes
long   = 8 bytes
---------------
Total  = 20 bytes

Next multiple of 8 = 24

Padding = 4 bytes`}</CodeBlock>

      <h3>Final Size</h3>

      <CodeBlock filename="result.txt">{`24 bytes`}</CodeBlock>

      <h2>Example 4</h2>

      <CodeBlock filename="person_multiple_fields.java">{`class Person {

    int age;
    boolean active;
}`}</CodeBlock>

      <h3>Calculation</h3>

      <CodeBlock filename="calculation.txt">{`Header  = 12 bytes
int     = 4 bytes
boolean = 1 byte
----------------
Total   = 17 bytes

Next multiple of 8 = 24

Padding = 7 bytes`}</CodeBlock>

      <h3>Final Size</h3>

      <CodeBlock filename="result.txt">{`24 bytes`}</CodeBlock>

      <h2>Empty Class Example</h2>

      <CodeBlock filename="empty_class.java">{`class A {

}`}</CodeBlock>

      <h3>Calculation</h3>

      <CodeBlock filename="calculation.txt">{`Header = 12 bytes
Fields = 0 bytes
---------------
Total  = 12 bytes

Padding = 4 bytes`}</CodeBlock>

      <h3>Final Size</h3>

      <CodeBlock filename="result.txt">{`16 bytes`}</CodeBlock>

      <h2>Interview Shortcut</h2>

      <p>
        For most Java interview questions (64-bit JVM with Compressed OOPs),
        you can directly remember:
      </p>

      <CodeBlock filename="shortcut.txt">{`Object Header = 12 bytes

Object Size =
12 +
Field Sizes +
Padding`}</CodeBlock>

      <h2>Common Java Data Type Sizes</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>byte</td>
            <td>1 byte</td>
          </tr>

          <tr>
            <td>boolean</td>
            <td>1 byte</td>
          </tr>

          <tr>
            <td>char</td>
            <td>2 bytes</td>
          </tr>

          <tr>
            <td>short</td>
            <td>2 bytes</td>
          </tr>

          <tr>
            <td>int</td>
            <td>4 bytes</td>
          </tr>

          <tr>
            <td>float</td>
            <td>4 bytes</td>
          </tr>

          <tr>
            <td>long</td>
            <td>8 bytes</td>
          </tr>

          <tr>
            <td>double</td>
            <td>8 bytes</td>
          </tr>

          <tr>
            <td>Reference</td>
            <td>4 bytes (Compressed OOPs)</td>
          </tr>
        </tbody>
      </table>

      <h2>Why JVM Uses Padding?</h2>

      <p>
        JVM aligns object sizes to multiples of 8 bytes because modern CPUs
        access aligned memory faster.
      </p>

      <ul>
        <li>Improves CPU cache utilization.</li>
        <li>Reduces memory access overhead.</li>
        <li>Speeds up object access.</li>
        <li>Helps JVM optimize memory layout.</li>
      </ul>

      <h2>Remember</h2>

      <CodeBlock filename="important_note.txt">{`JVM always aligns object size
to the nearest multiple of 8 bytes.`}</CodeBlock>

      <h2>Quick Example</h2>

      <CodeBlock filename="quick_example.java">{`class Person {

    byte age;
}`}</CodeBlock>

      <CodeBlock filename="answer.txt">{`12 (Header)
+ 1 (Field)
+ 3 (Padding)
-------------
16 bytes`}</CodeBlock>

      <h2>Quick Revision</h2>

      <ul>
        <li>Every Java object contains a hidden object header.</li>
        <li>Object Header = Mark Word + Class Pointer.</li>
        <li>Header size is usually 12 bytes.</li>
        <li>Field sizes depend on instance variables.</li>
        <li>JVM aligns objects to multiples of 8 bytes.</li>
        <li>Padding is added when required.</li>
        <li>Empty class still occupies memory.</li>
        <li>Object Size = Header + Fields + Padding.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Constructors',
          path: '/java/constructors'
        }}
        next={{
          label: 'Call By Value vs Call By Reference',
          path: '/java/call-by-value'
        }}
      />
    </DocPage>
  );
};

export default JavaObjectMemory;