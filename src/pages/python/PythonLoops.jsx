import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonLoops() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Loops' }]}
        title="Loops"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Loops</h2>
      <h3>1. for Loop Example</h3>
      <CodeBlock filename="for_loop.py">{`<span class="cmt"># for loop example</span>

for i in range(1, 6):

    print(i)`}</CodeBlock>
      <h3>2. while Loop Example</h3>
      <CodeBlock filename="while_loop.py">{`<span class="cmt"># while loop example</span>

i = 1

while i &lt;= 5:

    print(i)

    i += 1`}</CodeBlock>
      <h3>3. Prime Number Check</h3>
      <CodeBlock filename="prime_check.py">{`<span class="cmt"># Prime number check</span>

num = int(input("Enter a number : "))

def prime_check(num):

    if num &lt; 2:
        return False

    for i in range(2, num):

        if num % i == 0:
            return False

    return True

print(prime_check(num))`}</CodeBlock>
      <h3>4. Multiplication Table</h3>
      <CodeBlock filename="table.py">{`<span class="cmt"># Table Program</span>

n = int(input("Enter a number: "))

for i in range(1, 11):

    print(n, " * ", i, " = ", n * i)`}</CodeBlock>
      <h3>5. Print Numbers from 1 to 100</h3>
      <CodeBlock filename="numbers.py">{`<span class="cmt"># Print numbers from 1 to 100</span>

for i in range(1, 101):

    print(i, end = " ")`}</CodeBlock>
      <h3>6. Sum of First n Natural Numbers</h3>
      <CodeBlock filename="sum_natural.py">{`<span class="cmt"># Sum of first n natural numbers</span>

sum = 0

n = int(input("Enter value of n: "))

for i in range(1, n + 1):

    sum += i

print(sum)`}</CodeBlock>
      <h3>7. Factorial of a Number</h3>
      <CodeBlock filename="factorial.py">{`<span class="cmt"># Factorial of a number</span>

fact = 1

num = int(input("Enter a number: "))

if num == 0 or num == 1:

    print(num)

else:

    for i in range(2, num + 1):

        fact = fact * i

print(fact)`}</CodeBlock>
      <h3>8. break , continue , pass</h3>
      <CodeBlock filename="loop_control.py">{`<span class="cmt"># break (to come out of the loop)</span>

for i in range(1, 10):

    if i == 6:
        break

    else:
        print(i, end = " ")

print()

<span class="cmt"># continue (to skip current iteration)</span>

for i in range(1, 10):

    if i == 6:
        continue

    else:
        print(i, end = " ")

print()

<span class="cmt"># pass (used as placeholder statement)</span>

for i in range(1, 10):

    if i == 5:
        pass

    else:
        print(i, end = " ")`}</CodeBlock>

      <PageNav
        prev={{ label: 'Operators and Conditionals', path: '/python/operators-conditionals' }}
        next={{ label: 'Strings', path: '/python/strings' }}
      />
    </DocPage>
  );
}
