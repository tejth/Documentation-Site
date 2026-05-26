import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonExceptions() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Functions' }]}
        title="Functions"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Exception Handling in Python</h2>
      <h3>1. Example of Exception</h3>
      <CodeBlock filename="exception_example.py">{`<span class="cmt"># Example of exception</span>

print(10 / 0)

<span class="cmt"># ZeroDivisionError</span>`}</CodeBlock>
      <h3>2. Why Exception Handling is Important</h3>
      <CodeBlock filename="basic_try_except.py">{`<span class="cmt"># Basic syntax</span>

try:

    <span class="cmt"># risky code</span>

    print(10 / 0)

except:

    <span class="cmt"># handle error</span>

    print("Error occurred")`}</CodeBlock>
      <h3>3. Basic Syntax of Exception Handling</h3>
      <CodeBlock filename="full_structure.py">{`<span class="cmt"># Full structure of exception handling</span>

try:

    x = int(input("Enter number: "))

    print(10 / x)

except ZeroDivisionError:

    print("Cannot divide by zero")

except ValueError:

    print("Invalid input")

finally:

    print("Execution finished")`}</CodeBlock>
      <h3>4. Full Structure of Exception Handling</h3>
      <CodeBlock filename="multiple_exceptions.py">{`<span class="cmt"># Handling multiple exceptions</span>

try:

    num = int(input("Enter number: "))

    result = 100 / num

    print(result)

except ZeroDivisionError:

    print("Division by zero is not allowed")

except ValueError:

    print("Please enter valid integer")`}</CodeBlock>
      <h3>5. Explanation of Blocks</h3>
      <CodeBlock filename="zero_division.py">{`<span class="cmt"># ZeroDivisionError example</span>

try:

    print(10 / 0)

except ZeroDivisionError:

    print("Cannot divide by zero")`}</CodeBlock>
      <h3>6. Handling Multiple Exceptions</h3>
      <CodeBlock filename="value_error.py">{`<span class="cmt"># ValueError example</span>

try:

    age = int(input("Enter age: "))

    print(age)

except ValueError:

    print("Please enter numeric value")`}</CodeBlock>
      <h3>7. Common Exceptions in Python</h3>
      <CodeBlock filename="index_error.py">{`<span class="cmt"># IndexError example</span>

try:

    lst = [1, 2, 3]

    print(lst[10])

except IndexError:

    print("Index out of range")`}</CodeBlock>
      <h3>8. ZeroDivisionError Example</h3>
      <CodeBlock filename="key_error.py">{`<span class="cmt"># KeyError example</span>

try:

    student = {

        "name" : "Tej"

    }

    print(student["age"])

except KeyError:

    print("Key not found")`}</CodeBlock>
      <h3>9. ValueError Example</h3>
      <CodeBlock filename="file_error.py">{`<span class="cmt"># FileNotFoundError example</span>

try:

    with open("demo.txt", "r") as file:

        print(file.read())

except FileNotFoundError:

    print("File does not exist")`}</CodeBlock>
      <h3>10. IndexError Example</h3>
      <CodeBlock filename="finally_block.py">{`<span class="cmt"># finally block example</span>

try:

    print("Inside try block")

except:

    print("Error occurred")

finally:

    print("Always executed")`}</CodeBlock>
      <h3>11. KeyError Example</h3>
      <CodeBlock filename="raise_exception.py">{`<span class="cmt"># Custom exception using raise</span>

age = int(input("Enter age: "))

if age &lt; 18:

    raise ValueError("Age must be 18 or above")

print("Eligible")`}</CodeBlock>
      <h3>12. FileNotFoundError Example</h3>
      <CodeBlock filename="else_block.py">{`<span class="cmt"># else block example</span>

try:

    num = int(input("Enter number: "))

    print(num)

except ValueError:

    print("Invalid input")

else:

    print("No exception occurred")`}</CodeBlock>
      <h3>13. finally Block Example</h3>
      <h3>14. Custom Exception using raise</h3>
      <h3>15. else Block in Exception Handling</h3>
      <h3>16. Most Asked Interview Questions on Exceptions</h3>

      <PageNav
        prev={{ label: 'File Handling', path: '/python/file-handling' }}
        next={{ label: 'List Comprehensions', path: '/python/list-comprehensions' }}
      />
    </DocPage>
  );
}
