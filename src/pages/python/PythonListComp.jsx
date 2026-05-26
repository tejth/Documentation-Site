import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonListComp() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Functions' }]}
        title="Functions"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>List Comprehension in Python</h2>
      <h3>1. Basic List Comprehension</h3>
      <CodeBlock filename="basic_list_comprehension.py">{`<span class="cmt"># Basic list comprehension</span>

lst = [1, 2, 3, 4]

new_list = [x for x in lst]

print(new_list)`}</CodeBlock>
      <h3>2. List of Cubes</h3>
      <CodeBlock filename="cubes.py">{`<span class="cmt"># List of cubes</span>

lst = [1, 2, 3, 4]

cubes = [x * x * x for x in lst]

print(cubes)`}</CodeBlock>
      <h3>3. Even Numbers using List Comprehension</h3>
      <CodeBlock filename="even_numbers.py">{`<span class="cmt"># Even numbers</span>

lst = [1, 2, 3, 4]

evens = [x for x in lst if x % 2 == 0]

print(evens)`}</CodeBlock>
      <h3>4. Remove Negative Numbers</h3>
      <CodeBlock filename="remove_negative.py">{`<span class="cmt"># Remove negative numbers</span>

neg = [1, 34, 23, -4, -9]

remove_neg = [x for x in neg if x &gt;= 0]

print(remove_neg)`}</CodeBlock>
      <h3>5. Flatten Nested List</h3>
      <CodeBlock filename="flatten_list.py">{`<span class="cmt"># Flatten nested list</span>

nested = [[1, 2], [3, 4], [5, 6]]

flatten = [item for sublist in nested for item in sublist]

print(flatten)`}</CodeBlock>
      <h3>6. Squares of Numbers</h3>
      <CodeBlock filename="squares.py">{`<span class="cmt"># Squares of numbers</span>

numbers = [1, 2, 3, 4, 5]

squares = [x * x for x in numbers]

print(squares)`}</CodeBlock>
      <h3>7. Convert Strings to Uppercase</h3>
      <CodeBlock filename="uppercase.py">{`<span class="cmt"># Convert strings to uppercase</span>

names = ["tej", "rahul", "aman"]

upper_names = [name.upper() for name in names]

print(upper_names)`}</CodeBlock>
      <h3>8. Create List of Odd Numbers</h3>
      <CodeBlock filename="odd_numbers.py">{`<span class="cmt"># Odd numbers</span>

numbers = [1, 2, 3, 4, 5, 6]

odds = [x for x in numbers if x % 2 != 0]

print(odds)`}</CodeBlock>
      <h3>9. List Comprehension with if-else</h3>
      <CodeBlock filename="if_else.py">{`<span class="cmt"># if-else in list comprehension</span>

numbers = [1, 2, 3, 4, 5]

result = ["Even" if x % 2 == 0 else "Odd" for x in numbers]

print(result)`}</CodeBlock>
      <h3>10. Traditional Loop vs List Comprehension</h3>
      <CodeBlock filename="comparison.py">{`<span class="cmt"># Traditional loop</span>

numbers = [1, 2, 3, 4]

squares = []

for x in numbers:

    squares.append(x * x)

print(squares)

<span class="cmt"># List comprehension</span>

squares2 = [x * x for x in numbers]

print(squares2)`}</CodeBlock>
      <h3>11. Nested List Comprehension</h3>
      <CodeBlock filename="nested_comprehension.py">{`<span class="cmt"># Nested list comprehension</span>

matrix = [

    [1, 2],
    [3, 4],
    [5, 6]

]

flatten = [num for row in matrix for num in row]

print(flatten)`}</CodeBlock>
      <h3>12. Advantages of List Comprehension</h3>
      <h3>13. Most Asked Interview Questions on List Comprehension</h3>

      <PageNav
        prev={{ label: 'Exception Handling', path: '/python/exception-handling' }}
        next={{ label: 'Lambda Functions', path: '/python/lambda-functions' }}
      />
    </DocPage>
  );
}
