import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaNegativeNumbers = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Negative Numbers & Floating Point Storage' }
        ]}
        title="Negative Numbers and Floating Point Storage"
        readTime="28 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>How Negative Numbers are Stored in Memory</h2>

      <p>
        Computers store negative numbers using a technique called:
      </p>

      <CodeBlock filename="concept.txt">{`2's Complement`}</CodeBlock>

      <h2>Example: Storing -42</h2>

      <h3>Step 1: Convert 42 to Binary</h3>

      <CodeBlock filename="binary.java">{`42 = 00101010`}</CodeBlock>

      <h3>Step 2: Find 1's Complement</h3>

      <p>
        Flip all bits:
      </p>

      <CodeBlock filename="ones_complement.java">{`00101010

↓

11010101`}</CodeBlock>

      <h3>Step 3: Find 2's Complement</h3>

      <p>
        Add 1 to the 1's complement.
      </p>

      <CodeBlock filename="twos_complement.java">{`11010101

+       1

----------

11010110`}</CodeBlock>

      <h3>Final Representation of -42</h3>

      <CodeBlock filename="final_negative.java">{`-42 = 11010110`}</CodeBlock>

      <h2>Important Rules</h2>

      <ul>
        <li>
          For positive numbers, MSB (Most Significant Bit) is 0.
        </li>

        <li>
          For negative numbers, MSB becomes 1.
        </li>

        <li>
          Computers use 2's complement for storing negative integers.
        </li>
      </ul>

      <h2>How to Identify Negative Number from Binary</h2>

      <p>
        Suppose we have:
      </p>

      <CodeBlock filename="check_negative.java">{`1010110`}</CodeBlock>

      <p>
        Since MSB is 1, the number is negative.
      </p>

      <h3>Find Original Number</h3>

      <CodeBlock filename="recover_number.java">{`1010110

1's complement → 00101001

2's complement → 00101010

= 42

Therefore answer = -42`}</CodeBlock>

      <h2>Why Floating Point Storage is Needed?</h2>

      <p>
        Integers are easy to store:
      </p>

      <CodeBlock filename="integers.txt">{`5
10
42`}</CodeBlock>

      <p>
        But decimal numbers like:
      </p>

      <CodeBlock filename="decimal_numbers.txt">{`8.125
0.7
3.14`}</CodeBlock>

      <p>
        cannot be stored directly in simple binary form.
      </p>

      <p>
        Therefore computers use:
      </p>

      <CodeBlock filename="ieee754.txt">{`IEEE 754 Floating Point Format`}</CodeBlock>

      <h2>IEEE 754 Float Structure</h2>

      <p>
        In Java, float uses 32 bits.
      </p>

      <table className="custom-table datatype-table">
        <thead>
          <tr>
            <th>Part</th>
            <th>Size</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sign Bit</td>
            <td>1 bit</td>
            <td>Stores positive or negative sign</td>
          </tr>

          <tr>
            <td>Exponent</td>
            <td>8 bits</td>
            <td>Stores exponent value</td>
          </tr>

          <tr>
            <td>Mantissa</td>
            <td>23 bits</td>
            <td>Stores precision/fraction</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="float_structure.txt">{`| sign | exponent | mantissa |

| 1bit | 8 bits   | 23 bits  |`}</CodeBlock>

      <h2>Example: Storing 8.125f</h2>

      <CodeBlock filename="float_example.java">{`float f = 8.125f;`}</CodeBlock>

      <h2>Step 1: Convert Integer Part to Binary</h2>

      <CodeBlock filename="integer_binary.java">{`8 = 1000`}</CodeBlock>

      <h2>Step 2: Convert Decimal Part to Binary</h2>

      <p>
        Decimal part:
      </p>

      <CodeBlock filename="decimal_part.txt">{`0.125`}</CodeBlock>

      <p>
        Multiply repeatedly by 2:
      </p>

      <CodeBlock filename="decimal_conversion.txt">{`0.125 × 2 = 0.25 → 0

0.25 × 2 = 0.5 → 0

0.5 × 2 = 1.0 → 1`}</CodeBlock>

      <h3>Final Binary</h3>

      <CodeBlock filename="binary_decimal.txt">{`0.125 = 0.001`}</CodeBlock>

      <h2>Step 3: Combine Both Parts</h2>

      <CodeBlock filename="combined_binary.txt">{`8.125 = 1000.001`}</CodeBlock>

      <h2>Step 4: Normalize the Number</h2>

      <p>
        Floating point numbers are stored in scientific notation form.
      </p>

      <CodeBlock filename="normalize.java">{`1000.001

↓

1.000001 × 2^3`}</CodeBlock>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Part</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mantissa</td>
            <td>1.000001</td>
          </tr>

          <tr>
            <td>Exponent</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 5: Exponent Bias</h2>

      <p>
        IEEE 754 stores exponent using bias.
      </p>

      <p>
        For float:
      </p>

      <CodeBlock filename="bias.java">{`Bias = 127`}</CodeBlock>

      <p>
        Formula:
      </p>

      <CodeBlock filename="bias_formula.java">{`Stored Exponent = Actual Exponent + Bias`}</CodeBlock>

      <p>
        Here:
      </p>

      <CodeBlock filename="bias_calculation.java">{`3 + 127 = 130`}</CodeBlock>

      <h2>Step 6: Convert Exponent to Binary</h2>

      <CodeBlock filename="exponent_binary.java">{`130 = 10000010`}</CodeBlock>

      <h2>Step 7: Store Mantissa</h2>

      <p>
        IEEE 754 does not store first 1 because normalized numbers always start with 1.
      </p>

      <CodeBlock filename="mantissa.java">{`00000100000000000000000`}</CodeBlock>

      <h2>Step 8: Sign Bit</h2>

      <ul>
        <li>
          Positive number → 0
        </li>

        <li>
          Negative number → 1
        </li>
      </ul>

      <p>
        Since 8.125 is positive:
      </p>

      <CodeBlock filename="sign_bit.java">{`0`}</CodeBlock>

      <h2>Final IEEE 754 Representation</h2>

      <table className="custom-table datatype-table">
        <thead>
          <tr>
            <th>Part</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sign</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Exponent</td>
            <td>10000010</td>
          </tr>

          <tr>
            <td>Mantissa</td>
            <td>00000100000000000000000</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="final_ieee754.java">{`0 10000010 00000100000000000000000`}</CodeBlock>

      <h2>Why 0.7f is Not Exact?</h2>

      <CodeBlock filename="float_precision.java">{`float f = 0.7f;`}</CodeBlock>

      <p>
        Some decimal numbers cannot be represented exactly in binary.
      </p>

      <p>
        Similar to:
      </p>

      <CodeBlock filename="fraction_example.txt">{`1 / 3 = 0.333333333...`}</CodeBlock>

      <p>
        Binary representation of 0.7 also becomes infinite.
      </p>

      <p>
        Therefore computer stores an approximation.
      </p>

      <h3>Famous Floating Point Problem</h3>

      <CodeBlock filename="floating_error.java">{`System.out.println(0.1 + 0.2);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`0.30000000000000004`}</CodeBlock>

      <h2>Meaning of Mantissa</h2>

      <p>
        Mantissa stores precision of floating point number.
      </p>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Datatype</th>
            <th>Mantissa Bits</th>
            <th>Accuracy</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>float</td>
            <td>23 bits</td>
            <td>Less accurate</td>
          </tr>

          <tr>
            <td>double</td>
            <td>52 bits</td>
            <td>More accurate</td>
          </tr>
        </tbody>
      </table>

      <h2>Why We Add f in Java?</h2>

      <CodeBlock filename="float_suffix.java">{`float f = 8.125f;`}</CodeBlock>

      <p>
        Because decimal numbers are treated as double by default in Java.
      </p>

      <p>
        Therefore we use:
      </p>

      <CodeBlock filename="float_suffix_reason.java">{`f`}</CodeBlock>

      <p>
        to explicitly tell Java compiler that value is float.
      </p>

      <h2>Most Asked Interview Questions</h2>

      <h3>1. Why do computers use 2's complement?</h3>

      <p>
        It simplifies arithmetic operations and negative number storage.
      </p>

      <h3>2. What is IEEE 754?</h3>

      <p>
        Standard format used for floating point number representation.
      </p>

      <h3>3. Why floating point numbers are not always accurate?</h3>

      <p>
        Because some decimal values cannot be represented exactly in binary.
      </p>

      <h3>4. Difference Between float and double?</h3>

      <p>
        double uses more bits and provides higher precision.
      </p>

      <PageNav
        prev={{
          label: 'Variables and Data Types',
          path: '/java/variables'
        }}
        next={{
          label: 'Type Conversion and Casting',
          path: '/java/type-conversion'
        }}
      />
    </DocPage>
  );
};

export default JavaNegativeNumbers;