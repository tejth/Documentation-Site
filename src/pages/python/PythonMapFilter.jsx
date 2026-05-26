import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonMapFilter() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Map Filter Reduce' }
        ]}
        title="map(), filter() and reduce()"
        readTime="12 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>map(), filter() and reduce() in Python</h2>

      <ul>
        <li>
          <p>
            Python provides powerful built-in functions like map(), filter()
            and reduce() for functional programming.
          </p>
        </li>

        <li>
          <p>
            These functions are commonly used with lambda functions.
          </p>
        </li>

        <li>
          <p>
            They help in writing shorter, cleaner and efficient code.
          </p>
        </li>

        <li>
          <p>
            They work on iterables such as lists, tuples and sets.
          </p>
        </li>
      </ul>

      <h3>1. map() Function</h3>

      <p>
        map() applies a function to every element of an iterable.
      </p>

      <CodeBlock filename="map_example.py">{`<span class="cmt"># map() example</span>

numbers = [1, 2, 3, 4]

result = list(map(lambda x : x * x, numbers))

print(result)`}</CodeBlock>

      <h3>2. Convert Strings to Uppercase using map()</h3>

      <CodeBlock filename="uppercase_map.py">{`<span class="cmt"># Convert strings to uppercase</span>

names = ["tej", "rahul", "aman"]

upper_names = list(map(lambda x : x.upper(), names))

print(upper_names)`}</CodeBlock>

      <h3>3. filter() Function</h3>

      <ul>
        <li>
          <p>
            filter() selects elements based on a condition.
          </p>
        </li>

        <li>
          <p>
            It returns only those elements for which condition becomes True.
          </p>
        </li>
      </ul>

      <CodeBlock filename="filter_example.py">{`<span class="cmt"># filter() example</span>

numbers = [1, 2, 3, 4, 5, 6]

evens = list(filter(lambda x : x % 2 == 0, numbers))

print(evens)`}</CodeBlock>

      <h3>4. Filter Positive Numbers</h3>

      <CodeBlock filename="positive_filter.py">{`<span class="cmt"># Filter positive numbers</span>

nums = [-10, 20, -5, 40, 15]

positive = list(filter(lambda x : x > 0, nums))

print(positive)`}</CodeBlock>

      <h3>5. reduce() Function</h3>

      <ul>
        <li>
          <p>
            reduce() reduces the iterable into a single value.
          </p>
        </li>

        <li>
          <p>
            It repeatedly applies function on elements.
          </p>
        </li>

        <li>
          <p>
            reduce() is imported from functools module.
          </p>
        </li>
      </ul>

      <CodeBlock filename="reduce_example.py">{`<span class="cmt"># reduce() example</span>

from functools import reduce

nums = [1, 2, 3, 4]

result = reduce(lambda x, y : x + y, nums)

print(result)`}</CodeBlock>

      <h3>6. Find Product of List using reduce()</h3>

      <CodeBlock filename="product_reduce.py">{`<span class="cmt"># Find product using reduce()</span>

from functools import reduce

numbers = [1, 2, 3, 4]

product = reduce(lambda x, y : x * y, numbers)

print(product)`}</CodeBlock>

      <h3>7. Difference between map() and filter()</h3>

      <ul>
        <li>
          <p>
            map() transforms elements.
          </p>
        </li>

        <li>
          <p>
            filter() selects elements based on condition.
          </p>
        </li>

        <li>
          <p>
            map() returns modified values.
          </p>
        </li>

        <li>
          <p>
            filter() returns only matching values.
          </p>
        </li>
      </ul>

      <h3>8. Difference between map() and reduce()</h3>

      <ul>
        <li>
          <p>
            map() returns iterable with transformed values.
          </p>
        </li>

        <li>
          <p>
            reduce() returns single final value.
          </p>
        </li>

        <li>
          <p>
            map() works independently on each element.
          </p>
        </li>

        <li>
          <p>
            reduce() combines all elements together.
          </p>
        </li>
      </ul>

      <h3>9. Traditional Loop vs map()</h3>

      <CodeBlock filename="map_vs_loop.py">{`<span class="cmt"># Traditional loop</span>

numbers = [1, 2, 3, 4]

squares = []

for x in numbers:

    squares.append(x * x)

print(squares)

<span class="cmt"># Using map()</span>

result = list(map(lambda x : x * x, numbers))

print(result)`}</CodeBlock>

      <h3>10. Most Asked Interview Questions</h3>

      <ul>
        <li>
          <p>
            Difference between map(), filter() and reduce().
          </p>
        </li>

        <li>
          <p>
            Why reduce() is imported from functools module.
          </p>
        </li>

        <li>
          <p>
            Difference between list comprehension and map().
          </p>
        </li>

        <li>
          <p>
            Which is faster: loops or functional programming methods.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Lambda Functions', path: '/python/lambda-functions' }}
        next={{ label: 'Modules and Packages', path: '/python/modules' }}
      />

    </DocPage>
  );
}