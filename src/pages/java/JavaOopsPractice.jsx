import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaOopsPractice = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'OOPs Practice Questions' }
        ]}
        title="Java OOPs Practice Questions"
        readTime="20 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <p>
        This section contains commonly asked Java OOP and TCS Xplore style
        practice questions with complete solutions. The questions cover classes,
        objects, arrays, sorting, prime numbers, documents, books and more.
      </p>

      <h2>Question 1: Compare 2D Points for Distance from Origin</h2>

      <p>
        Create a Point class having x and y coordinates. Read three points and
        return the point having the maximum distance from origin.
      </p>

      <h3>Sample Input</h3>

      <CodeBlock filename="input.txt">{`2 2
3 3
-4 -4`}</CodeBlock>

      <h3>Sample Output</h3>

      <CodeBlock filename="output.txt">{`-4.0
-4.0`}</CodeBlock>

      <CodeBlock filename="PointDistance.java">{`import java.util.Scanner;

class Point {
    double x;
    double y;
}

class Solution {

    public static Point pointWithHighestOriginDistance(
            Point p1,
            Point p2,
            Point p3) {

        double d1 = Math.sqrt(p1.x * p1.x + p1.y * p1.y);
        double d2 = Math.sqrt(p2.x * p2.x + p2.y * p2.y);
        double d3 = Math.sqrt(p3.x * p3.x + p3.y * p3.y);

        if (d1 >= d2 && d1 >= d3)
            return p1;
        else if (d2 >= d1 && d2 >= d3)
            return p2;
        else
            return p3;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Point p1 = new Point();
        p1.x = sc.nextDouble();
        p1.y = sc.nextDouble();

        Point p2 = new Point();
        p2.x = sc.nextDouble();
        p2.y = sc.nextDouble();

        Point p3 = new Point();
        p3.x = sc.nextDouble();
        p3.y = sc.nextDouble();

        Point result =
                pointWithHighestOriginDistance(p1, p2, p3);

        System.out.println(result.x);
        System.out.println(result.y);
    }
}`}</CodeBlock>

      <hr />

      <h2>Question 2: Find Minimum Character in a String</h2>

      <p>
        Read a string and print the character having the smallest ASCII value.
      </p>

      <h3>Sample Input</h3>

      <CodeBlock filename="input.txt">{`Hello`}</CodeBlock>

      <h3>Sample Output</h3>

      <CodeBlock filename="output.txt">{`H`}</CodeBlock>

      <CodeBlock filename="MinimumCharacter.java">{`import java.util.*;

public class Solution {

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        String s = sc.next();

        char min = s.charAt(0);

        for (int i = 1; i < s.length(); i++) {

            if (s.charAt(i) < min) {
                min = s.charAt(i);
            }
        }

        System.out.println(min);
    }
}`}</CodeBlock>

      <hr />

      <h2>Question 3: Factorials of Input Numbers</h2>

      <p>
        Read five numbers and print factorial of each number. Use long datatype
        to avoid overflow.
      </p>

      <CodeBlock filename="FactorialQuestions.java">{`import java.util.*;

public class Solution {

    public static long fact(long num) {

        if (num == 0 || num == 1)
            return 1;

        long factorial = 1;

        for (long i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    }

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        long num1 = sc.nextLong();
        long num2 = sc.nextLong();
        long num3 = sc.nextLong();
        long num4 = sc.nextLong();
        long num5 = sc.nextLong();

        System.out.println(fact(num1));
        System.out.println(fact(num2));
        System.out.println(fact(num3));
        System.out.println(fact(num4));
        System.out.println(fact(num5));
    }
}`}</CodeBlock>

      <hr />

      <h2>Question 4: Find Second Largest Prime Number</h2>

      <p>
        Read n numbers and display the second largest prime number among them.
      </p>

      <h3>Sample Input</h3>

      <CodeBlock filename="input.txt">{`6
1 3 17 33 44 43`}</CodeBlock>

      <h3>Sample Output</h3>

      <CodeBlock filename="output.txt">{`17`}</CodeBlock>

      <CodeBlock filename="SecondLargestPrime.java">{`import java.util.*;

public class Solution {

    static boolean isPrime(int n) {

        if (n < 2)
            return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {

            if (n % i == 0)
                return false;
        }

        return true;
    }

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        List<Integer> primes = new ArrayList<>();

        for (int i = 0; i < n; i++) {

            int num = sc.nextInt();

            if (isPrime(num))
                primes.add(num);
        }

        Collections.sort(primes, Collections.reverseOrder());

        System.out.println(
            primes.get(primes.size() - 2)
        );
    }
}`}</CodeBlock>

      <hr />

      <h2>Question 5: Documents With Odd Pages</h2>

      <p>
        Create a Document class and return documents containing odd number of
        pages sorted according to id.
      </p>

      <CodeBlock filename="DocumentQuestion.java">{`import java.util.*;

class Document {

    int id;
    String title;
    String folderName;
    int pages;

    Document(
            int id,
            String title,
            String folderName,
            int pages) {

        this.id = id;
        this.title = title;
        this.folderName = folderName;
        this.pages = pages;
    }
}

public class Solution {

    public static Document[] docsWithOddPages(
            Document[] docs) {

        List<Document> oddList =
                new ArrayList<>();

        for (Document d : docs) {

            if (d.pages % 2 != 0)
                oddList.add(d);
        }

        oddList.sort((a, b) -> a.id - b.id);

        return oddList.toArray(
                new Document[0]);
    }
}`}</CodeBlock>

      <hr />

      <h2>Question 6: Sort Books by Price</h2>

      <p>
        Create a Book class and sort all books according to price in ascending
        order.
      </p>

      <CodeBlock filename="BookSorting.java">{`import java.util.*;

class Book {

    int id;
    String title;
    String author;
    double price;

    Book(
            int id,
            String title,
            String author,
            double price) {

        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

public class Solution {

    public static Book[] sortBooksByPrice(
            Book[] books) {

        Arrays.sort(
            books,
            (a, b) ->
                Double.compare(a.price, b.price)
        );

        return books;
    }
}`}</CodeBlock>

      <h2>Quick Revision</h2>

      <ul>
        <li>Practice object creation and class design.</li>
        <li>Understand sorting using Collections and Arrays.</li>
        <li>Use ArrayList for dynamic storage.</li>
        <li>Learn object-based problem solving.</li>
        <li>Important for TCS Xplore and Java interviews.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Autoboxing & Unboxing',
          path: '/java/autoboxing-unboxing'
        }}
        next={{
          label: 'Exception Handling',
          path: '/java/exception-handling'
        }}
      />
    </DocPage>
  );
};

export default JavaOopsPractice;