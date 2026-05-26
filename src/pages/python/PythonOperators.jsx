import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonOperators() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Operators and Conditionals' }]}
        title="Operators and Conditional Statements"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Operators</h2>
      <ul>
        <li><p>Mathematical symbols that are used to perform mathematical operations.</p></li>
      </ul>
      <CodeBlock filename="operators.py">{`<span class="cmt"># Data Types and Arithmetic Operations</span>

a = 44
b = 2.0
c = 33.32123

<span class="fn">print</span>(<span class="fn">type</span>(a))
<span class="fn">print</span>(<span class="fn">type</span>(b))
<span class="fn">print</span>(<span class="fn">type</span>(c))

<span class="cmt"># Arithmetic Operators</span>

<span class="fn">print</span>(a + b)
<span class="fn">print</span>(a - b)
<span class="fn">print</span>(<span class="fn">round</span>(a / b, <span class="num">1</span>))
<span class="fn">print</span>(a // b)
<span class="fn">print</span>(a ** <span class="num">2</span>)
<span class="fn">print</span>(a % b)
<span class="fn">print</span>(a * b)

<span class="cmt"># Logical Operators (and, or, not)</span>

<span class="kw">if</span> (a > b <span class="kw">and</span> a > c):
    <span class="fn">print</span>(<span class="str">"Yes"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"No"</span>)

<span class="cmt"># Comparison Operators: == , &lt; , > , &lt;= , >=</span>
<span class="cmt"># Assignment Operators: = , += , -= , *= , /=</span>
<span class="cmt"># Membership Operators: in , not in</span>
<span class="cmt"># Identity Operators: is</span>
<span class="cmt"># Bitwise Operators: & , | , ^ , ~ , &lt;&lt; , >></span>`}</CodeBlock>

      <h2>Conditional Statements</h2>
      <ul>
        <li><p>If, elif, else</p></li>
        <li><p>Nested if, else</p></li>
      </ul>

      <h3>1. Largest of Three Numbers</h3>
      <CodeBlock filename="largest.py">{`<span class="cmt"># Largest of three numbers</span>

a = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter first number : "</span>))
b = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter second number : "</span>))
c = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter third number : "</span>))

<span class="kw">def</span> <span class="fn">find_largest</span>(a, b, c):
    <span class="kw">return</span> <span class="fn">max</span>(a, b, c)

<span class="fn">print</span>(<span class="fn">find_largest</span>(a, b, c))

<span class="kw">if</span> (a > b <span class="kw">and</span> a > c):
    <span class="fn">print</span>(a, <span class="str">"is greatest!"</span>)
<span class="kw">elif</span> (b > a <span class="kw">and</span> b > c):
    <span class="fn">print</span>(b, <span class="str">"is greatest!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(c, <span class="str">"is greatest!"</span>)`}</CodeBlock>

      <h3>2. Even or Odd</h3>
      <CodeBlock filename="even_odd.py">{`<span class="cmt"># Even or Odd</span>

num = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter a number: "</span>))

<span class="kw">if</span> num % <span class="num">2</span> == <span class="num">0</span>:
    <span class="fn">print</span>(<span class="str">"Even"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Odd"</span>)`}</CodeBlock>

      <h3>3. Leap Year Program</h3>
      <CodeBlock filename="leap_year.py">{`<span class="cmt"># Leap Year Program</span>

year = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter a year: "</span>))

<span class="kw">if</span> (year % <span class="num">4</span> == <span class="num">0</span> <span class="kw">and</span> year % <span class="num">100</span> != <span class="num">0</span>) <span class="kw">or</span> (year % <span class="num">400</span> == <span class="num">0</span>):
    <span class="fn">print</span>(<span class="str">"Leap Year"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Not a Leap Year"</span>)`}</CodeBlock>

      <PageNav
        prev={{ label: 'Basics Of Python', path: '/python/data-types' }}
        next={{ label: 'Loops', path: '/python/loops' }}
      />
    </DocPage>
  );
}
