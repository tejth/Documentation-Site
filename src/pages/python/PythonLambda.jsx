import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonLambda() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Functions' }]}
        title="Functions"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Lambda Functions in Python</h2>
      <h3>1. Basic Lambda Function</h3>
      <CodeBlock filename="basic_lambda.py">{`<span class="cmt"># Basic lambda function</span>

square = lambda x : x * x

print(square(5))`}</CodeBlock>
      <h3>2. Lambda Function with Multiple Parameters</h3>
      <CodeBlock filename="multiple_parameters.py">{`<span class="cmt"># Lambda with multiple parameters</span>

add = lambda a, b : a + b

print(add(10, 20))`}</CodeBlock>
      <h3>3. Lambda with map()</h3>
      <CodeBlock filename="map_function.py">{`<span class="cmt"># Multiply list elements using map()</span>

lst = [1, 2, 3, 4, 5]

multiply_result = list(map(lambda x : x * x, lst))

print(multiply_result)`}</CodeBlock>
      <h3>4. Lambda with filter()</h3>
      <CodeBlock filename="filter_function.py">{`<span class="cmt"># Filter odd numbers using filter()</span>

lst = [1, 2, 3, 4, 5]

odd_num = list(filter(lambda x : x % 2 != 0, lst))

print(odd_num)`}</CodeBlock>
      <h3>5. Lambda with reduce()</h3>
      <CodeBlock filename="reduce_function.py">{`<span class="cmt"># Lambda with reduce()</span>

from functools import reduce

lst = [1, 2, 3, 4, 5]

result = reduce(lambda a, b : a + b, lst)

print(result)`}</CodeBlock>
      <h3>6. Find Maximum Number using Lambda</h3>
      <CodeBlock filename="maximum.py">{`<span class="cmt"># Find maximum number</span>

maximum = lambda a, b : a if a &gt; b else b

print(maximum(20, 10))`}</CodeBlock>
      <h3>7. Sort List using Lambda</h3>
      <CodeBlock filename="sorting.py">{`<span class="cmt"># Sort list using lambda</span>

students = [

    ("Tej", 90),
    ("Rahul", 75),
    ("Aman", 85)

]

students.sort(key = lambda x : x[1])

print(students)`}</CodeBlock>
      <h3>8. Convert Strings to Uppercase using map()</h3>
      <CodeBlock filename="uppercase_map.py">{`<span class="cmt"># Convert strings to uppercase</span>

names = ["tej", "rahul", "aman"]

upper = list(map(lambda x : x.upper(), names))

print(upper)`}</CodeBlock>
      <h3>9. Filter Positive Numbers</h3>
      <CodeBlock filename="positive_numbers.py">{`<span class="cmt"># Filter positive numbers</span>

numbers = [-5, 10, -2, 20, 15]

positive = list(filter(lambda x : x &gt; 0, numbers))

print(positive)`}</CodeBlock>
      <h3>10. Difference between Normal Function and Lambda</h3>
      <CodeBlock filename="comparison.py">{`<span class="cmt"># Normal function</span>

def square(x):

    return x * x

print(square(4))

<span class="cmt"># Lambda function</span>

square2 = lambda x : x * x

print(square2(4))`}</CodeBlock>
      <h3>11. Advantages of Lambda Functions</h3>
      <h3>12. Limitations of Lambda Functions</h3>
      <h3>13. Most Asked Interview Questions on Lambda Functions</h3>

      <PageNav
        prev={{ label: 'List Comprehensions', path: '/python/list-comprehensions' }}
        next={{ label: 'Map, Filter and Reduce', path: '/python/map-filter-reduce' }}
      />
    </DocPage>
  );
}
