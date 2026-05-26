import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonIterators = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Iterators' }
        ]}
        title="Iterators in Python"
        readTime="14 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Iterable and Iterator in Python</h2>

      <ul>
        <li>
          <p>
            Iterables and iterators are important concepts in Python that help
            in looping through data.
          </p>
        </li>

        <li>
          <p>
            Python loops internally use iterators.
          </p>
        </li>

        <li>
          <p>
            Understanding iterators is very important for interviews and
            advanced Python concepts.
          </p>
        </li>
      </ul>

      <h2>What is an Iterable?</h2>

      <ul>
        <li>
          <p>
            An iterable is anything that you can loop over using a for loop.
          </p>
        </li>

        <li>
          <p>
            Examples of iterables:
          </p>
        </li>

        <li>
          <p>
            list, tuple, string, set and dictionary.
          </p>
        </li>
      </ul>

      <h3>1. Iterable Example</h3>

      <CodeBlock filename="iterable_example.py">{`<span class="cmt"># Iterable example</span>

nums = [1, 2, 3]

for i in nums:

    print(i)

<span class="cmt"># nums is iterable</span>`}</CodeBlock>

      <h2>What is an Iterator?</h2>

      <ul>
        <li>
          <p>
            An iterator is an object that remembers its position and gives
            values one by one.
          </p>
        </li>

        <li>
          <p>
            Iterators use:
          </p>
        </li>

        <li>
          <p>
            <code>__iter__()</code> and <code>__next__()</code>
          </p>
        </li>
      </ul>

      <h3>2. Creating Iterator using iter()</h3>

      <CodeBlock filename="iter_function.py">{`<span class="cmt"># Creating iterator</span>

nums = [1, 2, 3]

it = iter(nums)

print(next(it))

print(next(it))

print(next(it))`}</CodeBlock>

      <h2>How Iterator Works Internally</h2>

      <ul>
        <li>
          <p>
            When a for loop runs, Python internally converts iterable into
            iterator.
          </p>
        </li>
      </ul>

      <h3>3. Internal Working of for Loop</h3>

      <CodeBlock filename="internal_iterator.py">{`<span class="cmt"># Internal working of for loop</span>

nums = [1, 2, 3]

it = iter(nums)

print(next(it))

print(next(it))

print(next(it))`}</CodeBlock>

      <h2>StopIteration Exception</h2>

      <ul>
        <li>
          <p>
            After all elements are finished, iterator raises StopIteration.
          </p>
        </li>
      </ul>

      <h3>4. StopIteration Example</h3>

      <CodeBlock filename="stop_iteration.py">{`<span class="cmt"># StopIteration example</span>

nums = [1, 2, 3]

it = iter(nums)

print(next(it))

print(next(it))

print(next(it))

print(next(it))

<span class="cmt"># StopIteration</span>`}</CodeBlock>

      <h2>Iterator with String</h2>

      <h3>5. String Iterator Example</h3>

      <CodeBlock filename="string_iterator.py">{`<span class="cmt"># String iterator</span>

name = "Tej"

it = iter(name)

print(next(it))

print(next(it))

print(next(it))`}</CodeBlock>

      <h2>Iterator with Tuple</h2>

      <h3>6. Tuple Iterator Example</h3>

      <CodeBlock filename="tuple_iterator.py">{`<span class="cmt"># Tuple iterator</span>

data = (10, 20, 30)

it = iter(data)

print(next(it))

print(next(it))

print(next(it))`}</CodeBlock>

      <h2>Custom Iterator in Python</h2>

      <ul>
        <li>
          <p>
            We can create our own iterator class using __iter__() and
            __next__().
          </p>
        </li>
      </ul>

      <h3>7. Custom Iterator Example</h3>

      <CodeBlock filename="custom_iterator.py">{`<span class="cmt"># Custom iterator example</span>

class Counter:

    def __init__(self, max):

        self.max = max

        self.current = 1

    def __iter__(self):

        return self

    def __next__(self):

        if self.current <= self.max:

            num = self.current

            self.current += 1

            return num

        else:

            raise StopIteration

c = Counter(3)

for i in c:

    print(i)`}</CodeBlock>

      <h2>Explanation of Custom Iterator</h2>

      <ul>
        <li>
          <p>
            __iter__() returns iterator object itself.
          </p>
        </li>

        <li>
          <p>
            __next__() returns next value one by one.
          </p>
        </li>

        <li>
          <p>
            StopIteration stops iteration when elements finish.
          </p>
        </li>
      </ul>

      <h2>Iterator vs Iterable</h2>

      <ul>
        <li>
          <p>
            Iterable can be looped over.
          </p>
        </li>

        <li>
          <p>
            Iterator generates elements one at a time.
          </p>
        </li>

        <li>
          <p>
            Iterable uses iter().
          </p>
        </li>

        <li>
          <p>
            Iterator uses next().
          </p>
        </li>
      </ul>

      <h2>Advantages of Iterators</h2>

      <ul>
        <li>
          <p>
            Memory efficient.
          </p>
        </li>

        <li>
          <p>
            Useful for large data processing.
          </p>
        </li>

        <li>
          <p>
            Generates values one by one instead of storing all at once.
          </p>
        </li>

        <li>
          <p>
            Used internally by loops in Python.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            Difference between iterable and iterator.
          </p>
        </li>

        <li>
          <p>
            What is StopIteration exception?
          </p>
        </li>

        <li>
          <p>
            Difference between iter() and next().
          </p>
        </li>

        <li>
          <p>
            How for loop works internally in Python.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Virtual Environment', path: '/python/virtual-environments' }}
        next={{ label: 'Generators', path: '/python/generators' }}
      />

    </DocPage>
  );
};

export default PythonIterators;