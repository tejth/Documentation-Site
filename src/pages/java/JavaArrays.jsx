import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaArrays = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Arrays' }
        ]}
        title="Arrays in Java"
        readTime="20 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What are Arrays?</h2>

      <p>
        Array is a data type that is used to store multiple values inside a single
        variable having same datatype.
      </p>

      <ul>
        <li>Arrays store elements in contiguous memory locations.</li>
        <li>All elements inside an array must have the same datatype.</li>
        <li>Array indexing starts from 0.</li>
        <li>Arrays have fixed size once created.</li>
      </ul>

      <h2>Important Note About Indexes</h2>

      <p>
        If you try to access an element outside the valid index range,
        Java throws <strong>ArrayIndexOutOfBoundsException</strong>.
      </p>

      <CodeBlock filename="array_exception.java">{`int[] arr = new int[5];

System.out.println(arr[5]);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Exception in thread "main"
java.lang.ArrayIndexOutOfBoundsException`}</CodeBlock>

      <h2>Declaring and Initializing Arrays</h2>

      <h3>Way 1 : Declaration + Initialization</h3>

      <CodeBlock filename="array_declaration.java">{`public class A1 {

    public static void main(String args[]) {

        int[] rollNo = new int[5];

        rollNo[0] = 24;
        rollNo[1] = 25;
        rollNo[2] = 26;
        rollNo[3] = 27;
        rollNo[4] = 28;

        for(int i = 0; i < rollNo.length; i++) {
            System.out.println(rollNo[i]);
        }
    }
}`}</CodeBlock>

      <h3>Way 2 : Direct Initialization</h3>

      <CodeBlock filename="array_direct_init.java">{`String[] names = {"aman", "Amit", "hemant"};

for(int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}`}</CodeBlock>

      <h2>How Array Declaration Works</h2>

      <CodeBlock filename="array_memory.java">{`int[] rollNums;

rollNums = new int[3];`}</CodeBlock>

      <ul>
        <li><strong>int[]</strong> → datatype of array.</li>
        <li><strong>rollNums</strong> → reference variable name.</li>
        <li><strong>new int[3]</strong> → creates array object of size 3 in heap memory.</li>
        <li>Reference variable stores address of array object.</li>
      </ul>

      <h2>Looping Through Arrays</h2>

      <CodeBlock filename="looping_array.java">{`int[] arr = {10, 20, 30, 40, 50};

for(int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`}</CodeBlock>

      <h2>Multi-Dimensional Arrays</h2>

      <p>
        Array having more than one dimension is called Multi-Dimensional Array.
        Example: 2D Array, 3D Array etc.
      </p>

      <h3>2D Array Example</h3>

      <CodeBlock filename="multi_dimensional.java">{`public class A1 {

    public static void main(String args[]) {

        int[][] marks = {
            {4, 5, 6},
            {7, 5, 9},
            {5, 8, 5}
        };

        for(int i = 0; i < marks.length; i++) {

            for(int j = 0; j < marks[i].length; j++) {
                System.out.println(marks[i][j]);
            }
        }
    }
}`}</CodeBlock>

      <h2>How Memory is Allocated in Arrays?</h2>

      <p>
        Whenever an array is declared, its reference variable is stored inside
        stack memory and actual array data is stored inside heap memory.
      </p>

      <CodeBlock filename="memory_allocation.java">{`int[] arr = new int[5];`}</CodeBlock>

      <ul>
        <li>Reference variable <strong>arr</strong> is stored in Stack Memory.</li>
        <li>Actual array object is stored in Heap Memory.</li>
        <li>Elements are stored in contiguous memory locations.</li>
      </ul>

      <h2>How Array Elements are Stored in Memory</h2>

      <CodeBlock filename="array_storage.java">{`int[] arr = {10, 20, 30, 40, 50};`}</CodeBlock>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Value</th>
            <th>Memory Address (Example)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>0</td>
            <td>10</td>
            <td>100</td>
          </tr>

          <tr>
            <td>1</td>
            <td>20</td>
            <td>104</td>
          </tr>

          <tr>
            <td>2</td>
            <td>30</td>
            <td>108</td>
          </tr>

          <tr>
            <td>3</td>
            <td>40</td>
            <td>112</td>
          </tr>

          <tr>
            <td>4</td>
            <td>50</td>
            <td>116</td>
          </tr>
        </tbody>
      </table>

      <p>
        Since integer takes 4 bytes, every next element address increases by 4.
      </p>

      <h2>Formula to Access Array Elements</h2>

      <p>
        Java internally calculates memory location of array elements using:
      </p>

      <CodeBlock filename="formula.txt">{`Address of arr[i] = Base Address + (Datatype Size × Index)`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="formula_example.txt">{`arr[3] = 100 + (4 × 3)
       = 112`}</CodeBlock>

      <h2>Default Values in Arrays</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Datatype</th>
            <th>Default Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>int</td>
            <td>0</td>
          </tr>

          <tr>
            <td>double</td>
            <td>0.0</td>
          </tr>

          <tr>
            <td>boolean</td>
            <td>false</td>
          </tr>

          <tr>
            <td>char</td>
            <td>\u0000</td>
          </tr>

          <tr>
            <td>String</td>
            <td>null</td>
          </tr>
        </tbody>
      </table>

      <h2>Boolean Memory Size in Java</h2>

      <p>
        According to official Java documentation, boolean does not have a fixed
        memory size. Its implementation depends on JVM and machine architecture.
      </p>

      <ul>
        <li>Boolean logically stores only <strong>true</strong> or <strong>false</strong>.</li>
        <li>Theoretically, 1 bit is enough to store boolean values.</li>
        <li>However, most JVMs use 1 byte for boolean arrays.</li>
      </ul>

      <h2>Why 1 Byte Instead of 1 Bit Improves CPU Utilization?</h2>

      <p>
        Modern CPUs are optimized to work with bytes rather than individual bits.
        Accessing 1 bit directly is slower because CPU must perform extra bitwise
        operations to isolate that single bit.
      </p>

      <ul>
        <li>1 byte = 8 bits.</li>
        <li>CPU can access full bytes efficiently.</li>
        <li>Bit-level operations require masking and shifting operations.</li>
        <li>Using 1 byte improves speed and simplifies memory access.</li>
      </ul>

      <h3>Example</h3>

      <p>
        Suppose booleans were stored as single bits.
      </p>

      <CodeBlock filename="boolean_bits.txt">{`10101100`}</CodeBlock>

      <p>
        To access one boolean value, CPU must:
      </p>

      <ul>
        <li>Load entire byte.</li>
        <li>Apply bit masking.</li>
        <li>Shift bits.</li>
        <li>Extract required value.</li>
      </ul>

      <p>
        This increases processing overhead. Using 1 byte per boolean avoids
        these extra operations and improves CPU utilization and execution speed.
      </p>

      <h2>Advantages of Arrays</h2>

      <ul>
        <li>Fast access using indexes.</li>
        <li>Stores multiple values together.</li>
        <li>Efficient memory management.</li>
        <li>Easy traversal using loops.</li>
      </ul>

      <h2>Limitations of Arrays</h2>

      <ul>
        <li>Fixed size.</li>
        <li>Can store only same datatype elements.</li>
        <li>Insertion and deletion operations are costly.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Arrays store multiple values of same datatype.</li>
        <li>Array indexing starts from 0.</li>
        <li>Arrays are stored in contiguous memory locations.</li>
        <li>Reference variable is stored in stack memory.</li>
        <li>Actual array object is stored in heap memory.</li>
        <li>Multi-dimensional arrays store data in rows and columns.</li>
        <li>Boolean usually uses 1 byte for better CPU efficiency.</li>
      </ul>

      <PageNav
        prev={{ label: 'Strings', path: '/java/strings' }}
        next={{ label: 'ArrayList', path: '/java/arraylist' }}
      />
    </DocPage>
  );
};

export default JavaArrays;

