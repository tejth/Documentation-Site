import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, Callout, PageNav } from '../../components/DocLayout';

export default function PythonDataTypes() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Basics Of Python' }]}
        title="Basics of Python"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Variables and Data Types</h2>
      <ul>
        <li><p>Variables refers to the name given to a <strong>Memory Location</strong> storing some data.</p></li>
        <li><p>Data Types refers to the type of data stored in a variable. It defines the operations that can be performed on that data.</p></li>
      </ul>

      <CodeBlock filename="variables.py">{`<span class="cmt"># Rules for naming variables in Python:</span>
<span class="cmt"># 1. Variable names can contain letters, numbers, and underscores (_)</span>
<span class="cmt"># 2. Variable names cannot start with a number</span>
<span class="cmt"># 3. Variable names cannot contain spaces or special characters</span>
<span class="cmt"># 4. Python keywords like if, else, class, etc. cannot be used</span>
<span class="cmt"># 5. Variable names are case-sensitive (age and Age are different)</span>

a = 44       <span class="cmt"># Integer</span>
b = 2.0      <span class="cmt"># Float</span>
c = 1 + 3j   <span class="cmt"># Complex Number</span>

<span class="fn">print</span>(<span class="fn">type</span>(a))
<span class="fn">print</span>(<span class="fn">type</span>(b))
<span class="fn">print</span>(<span class="fn">type</span>(c))

<span class="fn">print</span>(c.real)   <span class="cmt"># Prints real part of complex number</span>`}</CodeBlock>

      <h2>Your First Python Program</h2>
      <p>Let's start with the classic Hello World and then look at some basic Python concepts:</p>
      <CodeBlock filename="hello.py">{`<span class="cmt"># This is a comment</span>
<span class="fn">print</span>(<span class="str">"Hello, World!"</span>)

<span class="cmt"># Variables — no type declaration needed</span>
name = <span class="str">"Tej"</span>
age = <span class="num">22</span>
gpa = <span class="num">8.5</span>
is_student = <span class="kw">True</span>

<span class="cmt"># String formatting (f-strings — the modern way)</span>
<span class="fn">print</span>(<span class="str">f"My name is {'{'}name{'}'} and I am {'{'}age{'}'} years old."</span>)

<span class="cmt"># Multiple assignment</span>
x, y, z = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>
a = b = c = <span class="num">0</span>`}</CodeBlock>

      <h2>Python Data Types — Quick Overview</h2>
      <p>Python has several built-in data types. Here's a fast look at the most important ones:</p>
      <CodeBlock filename="data_types.py">{`<span class="cmt"># Numbers</span>
integer = <span class="num">42</span>
floats = <span class="num">3.14</span>
complex_num = <span class="num">2</span> + <span class="num">3</span>j

<span class="cmt"># Strings</span>
single = <span class="str">'hello'</span>
double = <span class="str">"world"</span>
multiline = <span class="str">"""This is
a multiline string"""</span>

<span class="cmt"># Collections</span>
my_list = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="str">"four"</span>]          <span class="cmt"># Mutable, ordered</span>
my_tuple = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>)                 <span class="cmt"># Immutable, ordered</span>
my_set = {'{'}1, 2, 3{'}'}                   <span class="cmt"># Unique, unordered</span>
my_dict = {'{'}  <span class="str">"name"</span>: <span class="str">"Tej"</span>, <span class="str">"age"</span>: <span class="num">22</span>  {'}'} <span class="cmt"># Key-value pairs</span>

<span class="cmt"># Check type</span>
<span class="fn">print</span>(<span class="fn">type</span>(my_list))   <span class="cmt"># &lt;class 'list'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(my_dict))   <span class="cmt"># &lt;class 'dict'&gt;</span>`}</CodeBlock>

      <Callout type="tip" title="✅ Tip">
        Use <code>type()</code> to check a variable's type and <code>isinstance()</code> to check against a specific type — e.g., <code>isinstance(x, int)</code> returns <code>True</code> or <code>False</code>.
      </Callout>

      <h2>Input and Output</h2>
      <ul>
        <li><p><code>input()</code>: Python built in input function is used to take input from user, it takes the input as string format and passes to standard input screen and saves the input in the memory.</p></li>
        <li><p><code>print()</code>: Python built in print function is used to print output, it passes output to standard output screen and prints the data.</p></li>
      </ul>
      <CodeBlock filename="input_output.py">{`<span class="cmt"># Input and Output</span>

name = <span class="fn">input</span>(<span class="str">"Enter a name!"</span>)
<span class="fn">print</span>(name, end =<span class="str">" "</span>)

<span class="cmt"># end is a parameter inside print function that controls</span>
<span class="cmt"># what should be printed at end</span>`}</CodeBlock>

      <h2>Type Casting</h2>
      <ul>
        <li><p>Type casting simply means converting data from one type to another explicitly or implicitly.</p></li>
      </ul>
      <CodeBlock filename="type_casting.py">{`<span class="cmt"># Type Casting</span>

a = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter a number!"</span>))

<span class="fn">print</span>(a)
<span class="fn">print</span>(a * <span class="num">2</span>)      <span class="cmt"># IMPLICIT</span>

<span class="fn">print</span>(<span class="fn">type</span>(a))

<span class="fn">print</span>(<span class="fn">float</span>(a))   <span class="cmt"># EXPLICIT</span>`}</CodeBlock>

      <h2>Comments</h2>
      <ul>
        <li><p>Piece of code that doesn't get executed. It is used to make code readable by defining what a particular block of code is doing.</p></li>
        <li><p>In Python there is no option for multi line comment, but we can use triple quotes or string literal for that.</p></li>
      </ul>
      <CodeBlock filename="comments.py">{`<span class="cmt"># Comments</span>

<span class="str">"""
Program to add Two numbers
"""</span>

a = <span class="num">10</span>
b = <span class="num">2</span>

<span class="fn">print</span>(a + b)`}</CodeBlock>

      <h2>Basic Problems</h2>
      <p>Let's solve some beginner-friendly Python problems to understand concepts better.</p>

      <h3>1. Take Name and Age and Print Formatted Output</h3>
      <CodeBlock filename="name_age.py">{`name = <span class="fn">input</span>(<span class="str">"Enter your name: "</span>)
age = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter your age: "</span>))

<span class="fn">print</span>(<span class="str">f"My name is {'{'}name{'}'} and I am {'{'}age{'}'} years old."</span>)`}</CodeBlock>

      <h3>2. Temperature Conversion</h3>
      <CodeBlock filename="temperature.py">{`<span class="cmt"># Celsius to Fahrenheit Conversion</span>

celsius = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Enter temperature in Celsius: "</span>))

fahrenheit = (celsius * <span class="num">9</span>/<span class="num">5</span>) + <span class="num">32</span>

<span class="fn">print</span>(<span class="str">"Temperature in Fahrenheit:"</span>, fahrenheit)`}</CodeBlock>

      <h3>3. Swap Two Numbers</h3>
      <CodeBlock filename="swap.py">{`<span class="cmt"># Swap using temporary variable</span>

a = <span class="num">10</span>
b = <span class="num">20</span>

temp = a
a = b
b = temp

<span class="fn">print</span>(<span class="str">"After swapping:"</span>)
<span class="fn">print</span>(<span class="str">"a ="</span>, a)
<span class="fn">print</span>(<span class="str">"b ="</span>, b)

<span class="cmt"># Swap without temporary variable</span>

x = <span class="num">5</span>
y = <span class="num">8</span>

x, y = y, x

<span class="fn">print</span>(<span class="str">"After swapping:"</span>)
<span class="fn">print</span>(<span class="str">"x ="</span>, x)
<span class="fn">print</span>(<span class="str">"y ="</span>, y)`}</CodeBlock>

      <h3>4. Area of Circle</h3>
      <CodeBlock filename="circle_area.py">{`<span class="cmt"># Area of Circle</span>

radius = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Enter radius of circle: "</span>))

area = <span class="num">3.14</span> * radius * radius

<span class="fn">print</span>(<span class="str">"Area of Circle ="</span>, area)`}</CodeBlock>

      <PageNav
        prev={{ label: 'Introduction', path: '/python/intro' }}
        next={{ label: 'Operators and Conditional Statements', path: '/python/operators-conditionals' }}
      />
    </DocPage>
  );
}
