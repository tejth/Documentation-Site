import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaCollection = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Collections Framework' }
        ]}
        title="Collections Framework in Java"
        readTime="18 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Collection Framework</h2>

      <p>
        A Collection is a group of objects stored together. The Java Collection
        Framework provides built-in classes and interfaces that help store,
        retrieve, manipulate and process data efficiently.
      </p>

      <h2>Why Not Just Use Arrays?</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Problem with Arrays</th>
            <th>Collection Framework Solution</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Fixed Size</td>
            <td>Dynamic Size</td>
          </tr>

          <tr>
            <td>No built-in utility methods</td>
            <td>Sorting, Searching, Adding, Removing available</td>
          </tr>

          <tr>
            <td>Cannot work efficiently with Generics</td>
            <td>Supports Generics</td>
          </tr>

          <tr>
            <td>Insertion & Deletion are difficult</td>
            <td>Easy Insert/Delete Operations</td>
          </tr>
        </tbody>
      </table>

      <h2>Collection Framework Hierarchy</h2>

      <CodeBlock filename="hierarchy.txt">{`Iterable
   |
   └── Collection
         |
         ├── List
         ├── Set
         └── Queue

Map (Separate Hierarchy)`}</CodeBlock>

      <ul>
        <li><strong>List</strong> → Ordered, duplicates allowed.</li>
        <li><strong>Set</strong> → No duplicates.</li>
        <li><strong>Queue</strong> → FIFO (First In First Out).</li>
        <li><strong>Map</strong> → Key-Value pairs.</li>
      </ul>

      <h2>1. List Interface</h2>

      <p>
        List maintains insertion order and allows duplicate values.
      </p>

      <h3>ArrayList</h3>

      <ul>
        <li>Most commonly used List implementation.</li>
        <li>Fast random access using indexes.</li>
        <li>Maintains insertion order.</li>
        <li>Duplicates are allowed.</li>
      </ul>

      <CodeBlock filename="ArrayListExample.java">{`import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Ravi");
        names.add("Priya");
        names.add("Ravi");

        System.out.println(names);

        System.out.println(names.get(1));

        names.remove("Ravi");

        System.out.println(names.size());
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[Ravi, Priya, Ravi]
Priya
2`}</CodeBlock>

      <h3>LinkedList</h3>

      <p>
        LinkedList is preferred when insertion and deletion operations occur
        frequently.
      </p>

      <CodeBlock filename="LinkedListExample.java">{`import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        LinkedList<Integer> nums = new LinkedList<>();

        nums.add(10);
        nums.addFirst(5);
        nums.addLast(20);

        System.out.println(nums);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[5, 10, 20]`}</CodeBlock>

      <h2>2. Set Interface</h2>

      <p>
        Set does not allow duplicate elements.
      </p>

      <h3>HashSet</h3>

      <ul>
        <li>No duplicate values.</li>
        <li>No insertion order guarantee.</li>
        <li>Fast lookup operations.</li>
      </ul>

      <CodeBlock filename="HashSetExample.java">{`import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        HashSet<String> cities = new HashSet<>();

        cities.add("Delhi");
        cities.add("Mumbai");
        cities.add("Delhi");

        System.out.println(cities);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[Mumbai, Delhi]`}</CodeBlock>

      <h3>LinkedHashSet</h3>

      <p>
        Maintains insertion order while preventing duplicates.
      </p>

      <CodeBlock filename="LinkedHashSetExample.java">{`import java.util.LinkedHashSet;

public class Main {

    public static void main(String[] args) {

        LinkedHashSet<String> fruits =
                new LinkedHashSet<>();

        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Mango");

        System.out.println(fruits);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[Banana, Apple, Mango]`}</CodeBlock>

      <h3>TreeSet</h3>

      <p>
        Automatically stores elements in sorted order.
      </p>

      <CodeBlock filename="TreeSetExample.java">{`import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        TreeSet<Integer> scores =
                new TreeSet<>();

        scores.add(50);
        scores.add(10);
        scores.add(30);

        System.out.println(scores);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`[10, 30, 50]`}</CodeBlock>

      <h2>3. Map Interface</h2>

      <p>
        Map stores data in key-value pair format.
      </p>

      <h3>HashMap</h3>

      <ul>
        <li>Stores key-value pairs.</li>
        <li>Duplicate keys are not allowed.</li>
        <li>Duplicate values are allowed.</li>
        <li>No insertion order guarantee.</li>
      </ul>

      <CodeBlock filename="HashMapExample.java">{`import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Integer> marks =
                new HashMap<>();

        marks.put("Ravi", 85);
        marks.put("Priya", 92);
        marks.put("Ravi", 78);

        System.out.println(marks);

        System.out.println(marks.get("Priya"));

        marks.remove("Ravi");

        System.out.println(
            marks.containsKey("Ravi")
        );
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`{Priya=92, Ravi=78}
92
false`}</CodeBlock>

      <h3>Iterating Through HashMap</h3>

      <CodeBlock filename="MapIteration.java">{`for(String key : marks.keySet()) {

    System.out.println(
        key + " -> " + marks.get(key)
    );
}`}</CodeBlock>

      <h2>4. Queue Interface</h2>

      <p>
        Queue follows FIFO (First In First Out) principle.
      </p>

      <CodeBlock filename="QueueExample.java">{`import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {

        Queue<String> queue =
                new LinkedList<>();

        queue.add("A");
        queue.add("B");
        queue.add("C");

        System.out.println(queue.peek());

        System.out.println(queue.poll());

        System.out.println(queue);
    }
}`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`A
A
[B, C]`}</CodeBlock>

      <h2>Collection Comparison Table</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Order</th>
            <th>Duplicates</th>
            <th>Null</th>
            <th>Best Use Case</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ArrayList</td>
            <td>Insertion Order</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>General Purpose List</td>
          </tr>

          <tr>
            <td>LinkedList</td>
            <td>Insertion Order</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>Frequent Insert/Delete</td>
          </tr>

          <tr>
            <td>HashSet</td>
            <td>No Order</td>
            <td>❌ No</td>
            <td>✅ One Null</td>
            <td>Unique Items</td>
          </tr>

          <tr>
            <td>LinkedHashSet</td>
            <td>Insertion Order</td>
            <td>❌ No</td>
            <td>✅ One Null</td>
            <td>Unique + Ordered</td>
          </tr>

          <tr>
            <td>TreeSet</td>
            <td>Sorted</td>
            <td>❌ No</td>
            <td>❌ No</td>
            <td>Unique + Sorted</td>
          </tr>

          <tr>
            <td>HashMap</td>
            <td>No Order</td>
            <td>Unique Keys</td>
            <td>✅ One Null Key</td>
            <td>Fast Key-Value Lookup</td>
          </tr>

          <tr>
            <td>LinkedHashMap</td>
            <td>Insertion Order</td>
            <td>Unique Keys</td>
            <td>✅ Yes</td>
            <td>Ordered Key-Value Storage</td>
          </tr>

          <tr>
            <td>TreeMap</td>
            <td>Sorted by Key</td>
            <td>Unique Keys</td>
            <td>❌ No</td>
            <td>Sorted Key-Value Storage</td>
          </tr>

          <tr>
            <td>Queue</td>
            <td>FIFO</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>Task Scheduling</td>
          </tr>
        </tbody>
      </table>

      <h2>Most Commonly Used Methods</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>add(x)</td>
            <td>Adds an element</td>
          </tr>

          <tr>
            <td>remove(x)</td>
            <td>Removes an element</td>
          </tr>

          <tr>
            <td>size()</td>
            <td>Returns number of elements</td>
          </tr>

          <tr>
            <td>contains(x)</td>
            <td>Checks whether element exists</td>
          </tr>

          <tr>
            <td>clear()</td>
            <td>Removes all elements</td>
          </tr>

          <tr>
            <td>isEmpty()</td>
            <td>Checks whether collection is empty</td>
          </tr>

          <tr>
            <td>get(index)</td>
            <td>Returns element at index (List only)</td>
          </tr>

          <tr>
            <td>put(key, value)</td>
            <td>Add key-value pair (Map only)</td>
          </tr>

          <tr>
            <td>get(key)</td>
            <td>Get value using key (Map only)</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Revision</h2>

      <ul>
        <li>Collection Framework stores and manages groups of objects.</li>
        <li>List → Ordered, duplicates allowed.</li>
        <li>Set → Unique elements only.</li>
        <li>Queue → FIFO structure.</li>
        <li>Map → Key-Value storage.</li>
        <li>ArrayList is the most commonly used collection.</li>
        <li>HashMap is the most commonly used map implementation.</li>
        <li>TreeSet and TreeMap automatically sort data.</li>
      </ul>

      <PageNav
        prev={{
          label: 'OOPs Practice Questions',
          path: '/java/ooppractice'
        }}
        next={{
          label: 'Exception Handling',
          path: '/java/exception-handling'
        }}
      />
    </DocPage>
  );
};

export default JavaCollection;