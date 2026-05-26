import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonGenerators = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Generators' }
        ]}
        title="Generators in Python"
        readTime="14 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Generators in Python</h2>

      <ul>
        <li>
          <p>
            A generator is a simpler way to create iterators using yield.
          </p>
        </li>

        <li>
          <p>
            Generators produce values one at a time instead of storing all
            values in memory.
          </p>
        </li>

        <li>
          <p>
            Generators are memory efficient and commonly used for large data.
          </p>
        </li>
      </ul>

      <h2>Difference Between return and yield</h2>

      <CodeBlock filename="return_vs_yield.txt">{`return                         yield

Ends function                  Pauses function

Returns once                   Returns multiple times

Removes function from memory   Saves function state`}</CodeBlock>

      <h3>1. Function using return</h3>

      <CodeBlock filename="return_example.py">{`<span class="cmt"># Function using return</span>

def test():

    return 1

    return 2

print(test())`}</CodeBlock>

      <ul>
        <li>
          <p>
            Function ends immediately after return statement.
          </p>
        </li>
      </ul>

      <h3>2. Basic Generator Example</h3>

      <CodeBlock filename="basic_generator.py">{`<span class="cmt"># Basic generator example</span>

def numbers():

    yield 1

    yield 2

    yield 3

gen = numbers()

print(next(gen))

print(next(gen))

print(next(gen))`}</CodeBlock>

      <h2>How Generator Works</h2>

      <ul>
        <li>
          <p>
            When yield executes, function pauses temporarily.
          </p>
        </li>

        <li>
          <p>
            Function state and variables are saved.
          </p>
        </li>

        <li>
          <p>
            Next call resumes execution from same place.
          </p>
        </li>
      </ul>

      <h3>3. Visual Flow of Generator</h3>

      <CodeBlock filename="generator_flow.txt">{`yield 1  → pause

yield 2  → pause

yield 3  → pause`}</CodeBlock>

      <h3>4. Generator with Loop</h3>

      <CodeBlock filename="generator_loop.py">{`<span class="cmt"># Generator using loop</span>

def count(n):

    for i in range(n):

        yield i

gen = count(5)

for num in gen:

    print(num)`}</CodeBlock>

      <h3>5. Generator with next()</h3>

      <CodeBlock filename="generator_next.py">{`<span class="cmt"># Using next() with generator</span>

def values():

    yield "Python"

    yield "Java"

    yield "C++"

gen = values()

print(next(gen))

print(next(gen))

print(next(gen))`}</CodeBlock>

      <h2>Generator vs List</h2>

      <h3>6. Normal List Example</h3>

      <CodeBlock filename="list_example.py">{`<span class="cmt"># Normal list</span>

nums = [1, 2, 3, 4, 5]

print(nums)`}</CodeBlock>

      <ul>
        <li>
          <p>
            List stores all values in memory at once.
          </p>
        </li>
      </ul>

      <h3>7. Generator Example</h3>

      <CodeBlock filename="generator_memory.py">{`<span class="cmt"># Generator</span>

def nums():

    for i in range(5):

        yield i

gen = nums()

print(gen)`}</CodeBlock>

      <ul>
        <li>
          <p>
            Generator creates values only when needed.
          </p>
        </li>
      </ul>

      <h2>Generator Expression</h2>

      <ul>
        <li>
          <p>
            Generator expressions are similar to list comprehensions.
          </p>
        </li>

        <li>
          <p>
            Uses parentheses () instead of square brackets [].
          </p>
        </li>
      </ul>

      <h3>8. Generator Expression Example</h3>

      <CodeBlock filename="generator_expression.py">{`<span class="cmt"># Generator expression</span>

gen = (x * x for x in range(5))

for i in gen:

    print(i)`}</CodeBlock>

      <h2>Infinite Generator</h2>

      <h3>9. Infinite Generator Example</h3>

      <CodeBlock filename="infinite_generator.py">{`<span class="cmt"># Infinite generator</span>

def infinite():

    num = 1

    while True:

        yield num

        num += 1

gen = infinite()

print(next(gen))

print(next(gen))

print(next(gen))`}</CodeBlock>

      <h2>Advantages of Generators</h2>

      <ul>
        <li>
          <p>
            Memory efficient.
          </p>
        </li>

        <li>
          <p>
            Faster for large data processing.
          </p>
        </li>

        <li>
          <p>
            Generates values only when needed.
          </p>
        </li>

        <li>
          <p>
            Useful for streams and big files.
          </p>
        </li>
      </ul>

      <h2>Iterator vs Generator</h2>

      <ul>
        <li>
          <p>
            Iterators require __iter__() and __next__().
          </p>
        </li>

        <li>
          <p>
            Generators use yield and are easier to create.
          </p>
        </li>

        <li>
          <p>
            Generators automatically behave like iterators.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            Difference between return and yield.
          </p>
        </li>

        <li>
          <p>
            Difference between iterator and generator.
          </p>
        </li>

        <li>
          <p>
            Why generators are memory efficient.
          </p>
        </li>

        <li>
          <p>
            What is generator expression in Python.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Iterators', path: '/python/iterators' }}
        next={{ label: 'Decorators', path: '/python/decorators' }}
      />

    </DocPage>
  );
};

export default PythonGenerators;