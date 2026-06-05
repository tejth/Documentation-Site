import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaAutoBoxingUnboxing = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Autoboxing & Unboxing' }
        ]}
        title="Autoboxing & Unboxing in Java"
        readTime="12 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What is Autoboxing and Unboxing?</h2>

      <p>
        Primitive datatypes in Java such as <strong>int</strong>,{' '}
        <strong>double</strong>, <strong>char</strong>, etc. are not objects.
        However, many Java APIs like collections require objects instead of
        primitive values.
      </p>

      <p>
        To solve this problem Java provides Wrapper Classes and supports
        automatic conversion between primitives and objects using:
      </p>

      <ul>
        <li>
          <strong>Autoboxing</strong> → Primitive to Wrapper Object
        </li>
        <li>
          <strong>Unboxing</strong> → Wrapper Object to Primitive
        </li>
      </ul>

      <h2>Wrapper Classes</h2>

      <p>
        Every primitive datatype in Java has a corresponding Wrapper Class.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Primitive Type</th>
            <th>Wrapper Class</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>int</td>
            <td>Integer</td>
          </tr>

          <tr>
            <td>double</td>
            <td>Double</td>
          </tr>

          <tr>
            <td>float</td>
            <td>Float</td>
          </tr>

          <tr>
            <td>long</td>
            <td>Long</td>
          </tr>

          <tr>
            <td>char</td>
            <td>Character</td>
          </tr>

          <tr>
            <td>boolean</td>
            <td>Boolean</td>
          </tr>

          <tr>
            <td>byte</td>
            <td>Byte</td>
          </tr>

          <tr>
            <td>short</td>
            <td>Short</td>
          </tr>
        </tbody>
      </table>

      <h2>Autoboxing</h2>

      <p>
        Autoboxing is the automatic conversion of a primitive value into its
        corresponding wrapper object.
      </p>

      <h3>Manual Boxing (Before Java 5)</h3>

      <CodeBlock filename="manual_boxing.java">{`int x = 10;

Integer obj = Integer.valueOf(x);`}</CodeBlock>

      <h3>Autoboxing (Java 5+)</h3>

      <CodeBlock filename="autoboxing.java">{`int a = 5;

Integer boxed = a;

System.out.println(boxed);`}</CodeBlock>

      <p>
        Java automatically converts the primitive int value into an Integer
        object.
      </p>

      <h2>Autoboxing with ArrayList</h2>

      <p>
        Collections can store only objects, not primitive datatypes.
      </p>

      <CodeBlock filename="arraylist_autoboxing.java">{`import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();

        list.add(10);

        list.add(20);

        list.add(30);

        System.out.println(list);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[10, 20, 30]`}</CodeBlock>

      <p>
        Here values 10, 20 and 30 are primitive integers but Java automatically
        converts them into Integer objects.
      </p>

      <h2>Unboxing</h2>

      <p>
        Unboxing is the automatic conversion of a wrapper object back into its
        primitive datatype.
      </p>

      <CodeBlock filename="unboxing.java">{`Integer obj = 100;

int value = obj;

System.out.println(value);`}</CodeBlock>

      <p>
        Java automatically converts the Integer object into an int primitive.
      </p>

      <h2>Unboxing in Expressions</h2>

      <CodeBlock filename="expression_unboxing.java">{`Integer a = 50;

Integer b = 30;

int sum = a + b;

System.out.println(sum);`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`80`}</CodeBlock>

      <p>
        Both Integer objects are automatically unboxed into primitive int values
        before addition.
      </p>

      <h2>Complete Example</h2>

      <CodeBlock filename="autoboxing_unboxing_example.java">{`import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> marks = new ArrayList<>();

        marks.add(85);

        marks.add(90);

        marks.add(78);

        int total = 0;

        for (int m : marks) {

            total += m;
        }

        System.out.println("Total: " + total);

        System.out.println("Avg: " + total / marks.size());
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Total: 253
Avg: 84`}</CodeBlock>

      <p>
        During insertion, integers are autoboxed into Integer objects.
      </p>

      <p>
        During iteration, Integer objects are automatically unboxed into int
        values.
      </p>

      <h2>Common Trap: NullPointerException</h2>

      <p>
        Unboxing a null wrapper object causes NullPointerException.
      </p>

      <CodeBlock filename="null_unboxing.java">{`Integer obj = null;

int x = obj;`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`Exception in thread "main"
java.lang.NullPointerException`}</CodeBlock>

      <p>
        Java tries to convert null into a primitive value, which is impossible.
      </p>

      <p>
        Always check for null before unboxing wrapper objects.
      </p>

      <h2>Common Trap: == vs equals()</h2>

      <CodeBlock filename="integer_cache.java">{`Integer a = 127;

Integer b = 127;

System.out.println(a == b);

Integer c = 200;

Integer d = 200;

System.out.println(c == d);

System.out.println(c.equals(d));`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`true
false
true`}</CodeBlock>

      <h2>Why Does This Happen?</h2>

      <p>
        Java maintains an Integer Cache for values ranging from:
      </p>

      <CodeBlock filename="cache_range.txt">{`-128 to 127`}</CodeBlock>

      <ul>
        <li>Values between -128 and 127 use cached Integer objects.</li>
        <li>Values outside this range create new Integer objects.</li>
        <li>
          <strong>==</strong> compares object references.
        </li>
        <li>
          <strong>equals()</strong> compares actual values.
        </li>
      </ul>

      <h3>Recommendation</h3>

      <p>
        Always use <strong>equals()</strong> when comparing wrapper class values.
      </p>

      <CodeBlock filename="equals_example.java">{`Integer x = 500;

Integer y = 500;

System.out.println(x.equals(y));`}</CodeBlock>

      <h2>Advantages of Autoboxing and Unboxing</h2>

      <ul>
        <li>Reduces manual conversion code.</li>
        <li>Improves code readability.</li>
        <li>Allows primitives to work with Collections Framework.</li>
        <li>Makes generic programming easier.</li>
      </ul>

      <h2>Disadvantages</h2>

      <ul>
        <li>Additional object creation may impact performance.</li>
        <li>Can lead to unexpected NullPointerExceptions.</li>
        <li>Extra memory consumption compared to primitives.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Primitive datatypes are not objects.</li>
        <li>Wrapper classes provide object representation of primitives.</li>
        <li>Autoboxing converts primitive → wrapper object.</li>
        <li>Unboxing converts wrapper object → primitive.</li>
        <li>Collections use wrapper classes instead of primitives.</li>
        <li>Null unboxing causes NullPointerException.</li>
        <li>Integer cache works for values from -128 to 127.</li>
        <li>Use equals() instead of == for wrapper comparisons.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Polymorphism',
          path: '/java/polymorphism'
        }}
        next={{
          label: 'Collections Framework',
          path: '/java/collections'
        }}
      />
    </DocPage>
  );
};

export default JavaAutoBoxingUnboxing;