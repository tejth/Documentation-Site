import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaTypeConversion = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Type Conversion' }
        ]}
        title="Java Type Conversion"
        readTime="12 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Type Conversion in Java</h2>

      <p>
        Type conversion means converting one datatype into another datatype.
        Java performs type conversion in different ways depending on the size
        and compatibility of data types.
      </p>

      <h2>Types of Type Conversion</h2>

      <ul>
        <li>
          <strong>Implicit Conversion (Widening Conversion)</strong>
        </li>

        <li>
          <strong>Explicit Conversion (Casting / Narrowing Conversion)</strong>
        </li>

        <li>
          <strong>Truncating Conversion</strong>
        </li>
      </ul>

      <h2>1. Implicit Conversion</h2>

      <ul>
        <li>
          Also called as <strong>Widening Conversion</strong>.
        </li>

        <li>
          Smaller datatype is automatically converted into larger datatype.
        </li>

        <li>
          Done automatically by Java compiler.
        </li>

        <li>
          Destination datatype should be larger than source datatype.
        </li>
      </ul>

      <h3>Conversion Flow</h3>

      <div className="info-box">
        byte → short → int → long → float → double
      </div>

      <CodeBlock filename="implicit_conversion.java">{`<span class="cmt">// Implicit conversion example</span>

byte b = 2;

int i;

i = b;   <span class="cmt">// byte automatically converted to int</span>

System.out.println(i);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`2`}</CodeBlock>

      <h2>2. Explicit Conversion</h2>

      <ul>
        <li>
          Also called as <strong>Casting</strong> or
          <strong> Narrowing Conversion</strong>.
        </li>

        <li>
          Larger datatype is converted into smaller datatype manually.
        </li>

        <li>
          Data loss may occur.
        </li>
      </ul>

      <h3>Syntax</h3>

      <CodeBlock filename="syntax.java">{`datatype variable = (datatype) value;`}</CodeBlock>

      <CodeBlock filename="explicit_conversion.java">{`<span class="cmt">// Explicit conversion example</span>

int x = 100;

byte y = (byte) x;

System.out.println(y);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`100`}</CodeBlock>

      <h2>Important Interview Concept</h2>

      <p>
        What happens if value exceeds datatype range?
      </p>

      <CodeBlock filename="overflow_example.java">{`byte a = (byte) 300;

System.out.println(a);`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li>
          Range of byte:
          <strong> -128 to 127</strong>
        </li>

        <li>
          300 cannot fit inside byte.
        </li>

        <li>
          Java performs modulo operation internally.
        </li>
      </ul>

      <h3>Shortcut Formula</h3>

      <CodeBlock filename="formula.txt">{`300 % 256 = 44`}</CodeBlock>

      <p>
        Therefore:
      </p>

      <CodeBlock filename="result.txt">{`byte a = 44`}</CodeBlock>

      <h2>3. Truncating Conversion</h2>

      <ul>
        <li>
          Occurs when float or double is converted into int.
        </li>

        <li>
          Decimal part gets removed.
        </li>

        <li>
          No rounding happens.
        </li>
      </ul>

      <CodeBlock filename="truncation.java">{`double d = 3.14;

int n = (int) d;

System.out.println(n);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`3`}</CodeBlock>

      <h2>Automatic Type Promotion</h2>

      <ul>
        <li>
          In expressions, smaller datatypes automatically become int.
        </li>

        <li>
          Arithmetic operations on byte/short/char produce int result.
        </li>
      </ul>

      <CodeBlock filename="type_promotion.java">{`byte a = 10;

byte b = 20;

int result = a + b;

System.out.println(result);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`30`}</CodeBlock>

      <h2>Complete Program</h2>

      <CodeBlock filename="demo.java">{`public class demo {

    public static void main(String[] args) {

        <span class="cmt">// Implicit conversion</span>

        byte b = 2;

        int i;

        i = b;

        System.out.println("Value of i: " + i);

        <span class="cmt">// Explicit conversion</span>

        int x = 100;

        byte y = (byte) x;

        System.out.println("Value of y: " + y);

        <span class="cmt">// Truncation example</span>

        double d = 3.14;

        int n = (int) d;

        System.out.println("Value of n: " + n);

        <span class="cmt">// Automatic Type Promotion</span>

        byte a = 10;

        byte c = 20;

        int result = a + c;

        System.out.println("Result of a + c: " + result);
    }
}`}</CodeBlock>

      <h2>Type Conversion Table</h2>

      <table className="custom-table datatype-table">
        <thead>
          <tr>
            <th>Conversion Type</th>
            <th>Description</th>
            <th>Example</th>
            <th>Data Loss</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Implicit Conversion</td>
            <td>Automatic smaller to larger conversion</td>
            <td>byte → int</td>
            <td>No</td>
          </tr>

          <tr>
            <td>Explicit Conversion</td>
            <td>Manual larger to smaller conversion</td>
            <td>int → byte</td>
            <td>Possible</td>
          </tr>

          <tr>
            <td>Truncating Conversion</td>
            <td>Decimal part removed</td>
            <td>double → int</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Type Promotion</td>
            <td>Smaller types become int in expressions</td>
            <td>byte + byte → int</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h2>Most Asked Interview Questions</h2>

      <h3>1. Difference between implicit and explicit conversion?</h3>

      <ul>
        <li>
          Implicit conversion is automatic.
        </li>

        <li>
          Explicit conversion is manual using casting.
        </li>
      </ul>

      <h3>2. Why does byte + byte return int?</h3>

      <p>
        Because Java automatically promotes smaller datatypes to int during
        arithmetic operations.
      </p>

      <h3>3. What is truncation in Java?</h3>

      <p>
        Removing decimal part while converting float/double into int.
      </p>

      <h3>4. Why can data loss happen in explicit conversion?</h3>

      <p>
        Because larger datatype may contain values outside the range of smaller
        datatype.
      </p>

      <PageNav
        prev={{
          label: 'Variables and Datatypes',
          path: '/java/variables'
        }}
        next={{
          label: 'Operators in Java',
          path: '/java/operators'
        }}
      />
    </DocPage>
  );
};

export default JavaTypeConversion;