import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonFunctions() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Functions' }]}
        title="Functions"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Functions in Python</h2>
      <h3>1. Creating and Calling Function</h3>
      <CodeBlock filename="functions.py">{`<span class="cmt"># Creating function</span>

def greet():

    print("Hello World")

<span class="cmt"># Calling function</span>

greet()`}</CodeBlock>
      <h3>2. Parameters vs Arguments</h3>
      <CodeBlock filename="parameters_arguments.py">{`<span class="cmt"># Parameters vs Arguments</span>

def greet(name):   <span class="cmt"># name = parameter</span>

    print("Hello", name)

greet("Tej")       <span class="cmt"># "Tej" = argument</span>`}</CodeBlock>
      <h3>3. Function with Return Value</h3>
      <CodeBlock filename="return_function.py">{`<span class="cmt"># Function with return value</span>

def add(a, b):

    return a + b

result = add(10, 20)

print(result)`}</CodeBlock>
      <h3>4. Modern Function Declaration with Return Type</h3>
      <CodeBlock filename="type_hinting.py">{`<span class="cmt"># Function with type hints</span>

def add(a: int, b: int) -&gt; int:

    return a + b

print(add(5, 10))`}</CodeBlock>
      <h3>5. Types of Parameters in Python</h3>
      <CodeBlock filename="positional.py">{`<span class="cmt"># Positional Arguments</span>

def info(name, age):

    print(name, age)

info("Tej", 22)`}</CodeBlock>
      <h3>6. Positional Arguments</h3>
      <CodeBlock filename="keyword.py">{`<span class="cmt"># Keyword Arguments</span>

def info(name, age):

    print(name, age)

info(age = 22, name = "Tej")`}</CodeBlock>
      <h3>7. Keyword Arguments</h3>
      <CodeBlock filename="default_arguments.py">{`<span class="cmt"># Default Arguments</span>

def greet(name = "Guest"):

    print("Hello", name)

greet()

greet("Tej")`}</CodeBlock>
      <h3>8. Default Arguments</h3>
      <CodeBlock filename="default_rule.py">{`<span class="cmt"># Wrong</span>

# def func(a = 10, b):

<span class="cmt"># Correct</span>

def func(a, b = 10):

    pass`}</CodeBlock>
      <h3>9. Important Rule for Default Parameters</h3>
      <CodeBlock filename="args.py">{`<span class="cmt"># *args stores multiple positional arguments</span>

def add(*numbers):

    return sum(numbers)

print(add(1, 2, 3, 4))

print(add(10, 20))`}</CodeBlock>
      <h3>10. Variable-Length Arguments (*args)</h3>
      <CodeBlock filename="kwargs.py">{`<span class="cmt"># **kwargs stores multiple keyword arguments</span>

def details(**data):

    print(data)

details(name = "Tej", age = 22)

details(city = "Jaipur", country = "India")`}</CodeBlock>
      <h3>11. Variable-Length Keyword Arguments (**kwargs)</h3>
      <CodeBlock filename="lambda.py">{`<span class="cmt"># Lambda Function</span>

square = lambda x : x * x

print(square(5))

add = lambda a, b : a + b

print(add(10, 20))`}</CodeBlock>
      <h3>12. Lambda Function</h3>
      <CodeBlock filename="recursion.py">{`<span class="cmt"># Recursive Function</span>

def factorial(n):

    if n == 0 or n == 1:

        return 1

    return n * factorial(n - 1)

print(factorial(5))`}</CodeBlock>
      <h3>13. Recursive Function</h3>
      <CodeBlock filename="scope.py">{`<span class="cmt"># Local variable</span>

def demo():

    x = 10

    print(x)

demo()

<span class="cmt"># Global variable</span>

y = 20

def test():

    print(y)

test()`}</CodeBlock>
      <h3>14. Scope of Variables</h3>
      <h3>15. Most Asked Interview Questions on Functions</h3>

      <PageNav
        prev={{ label: 'Dictionaries and Sets', path: '/python/dictionaries-sets' }}
        next={{ label: 'File Handling', path: '/python/file-handling' }}
      />
    </DocPage>
  );
}
