import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonRegularExpression = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Regular Expressions' }
        ]}
        title="Regular Expressions in Python"
        readTime="20 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What are Regular Expressions?</h2>

      <ul>
        <li>
          <p>
            Regular Expressions (Regex) are patterns used to search and match text.
          </p>
        </li>

        <li>
          <p>
            Python provides regex support using the built-in <code>re</code> module.
          </p>
        </li>

        <li>
          <p>
            Regex is widely used for:
          </p>
        </li>

        <li>
          <p>Email Validation</p>
        </li>

        <li>
          <p>Password Validation</p>
        </li>

        <li>
          <p>Searching Text</p>
        </li>

        <li>
          <p>Data Cleaning</p>
        </li>

        <li>
          <p>Pattern Matching</p>
        </li>
      </ul>

      <h2>Importing re Module</h2>

      <CodeBlock filename="import_regex.py">{`<span class="cmt"># Importing regex module</span>

import re`}</CodeBlock>

      <h2>1. re.search()</h2>

      <ul>
        <li>
          <p>
            Searches the pattern anywhere inside the string.
          </p>
        </li>
      </ul>

      <CodeBlock filename="search.py">{`<span class="cmt"># re.search()</span>

import re

text = "Python is awesome"

result = re.search("Python", text)

print(result)`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="output.txt">{`<re.Match object>`}</CodeBlock>

      <h2>2. re.findall()</h2>

      <ul>
        <li>
          <p>
            Returns all matches as a list.
          </p>
        </li>
      </ul>

      <CodeBlock filename="findall.py">{`<span class="cmt"># re.findall()</span>

import re

text = "cat bat mat rat"

result = re.findall("at", text)

print(result)`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="findall_output.txt">{`['at', 'at', 'at', 'at']`}</CodeBlock>

      <h2>3. re.match()</h2>

      <ul>
        <li>
          <p>
            Checks pattern only at beginning of string.
          </p>
        </li>
      </ul>

      <CodeBlock filename="match.py">{`<span class="cmt"># re.match()</span>

import re

text = "Python Programming"

result = re.match("Python", text)

print(result)`}</CodeBlock>

      <h2>4. re.sub()</h2>

      <ul>
        <li>
          <p>
            Used to replace text using regex.
          </p>
        </li>
      </ul>

      <CodeBlock filename="sub.py">{`<span class="cmt"># re.sub()</span>

import re

text = "I love Java"

result = re.sub("Java", "Python", text)

print(result)`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="sub_output.txt">{`I love Python`}</CodeBlock>

      <h2>5. re.split()</h2>

      <ul>
        <li>
          <p>
            Splits string based on regex pattern.
          </p>
        </li>
      </ul>

      <CodeBlock filename="split.py">{`<span class="cmt"># re.split()</span>

import re

text = "apple,banana;orange mango"

result = re.split("[,; ]", text)

print(result)`}</CodeBlock>

      <h2>Important Regex Symbols</h2>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>.</td>
            <td>Any character</td>
          </tr>

          <tr>
            <td>^</td>
            <td>Starts with</td>
          </tr>

          <tr>
            <td>$</td>
            <td>Ends with</td>
          </tr>

          <tr>
            <td>*</td>
            <td>0 or more times</td>
          </tr>

          <tr>
            <td>+</td>
            <td>1 or more times</td>
          </tr>

          <tr>
            <td>?</td>
            <td>Optional</td>
          </tr>

          <tr>
            <td>[]</td>
            <td>Set of characters</td>
          </tr>

          <tr>
            <td>{}</td>
            <td>Number of repetitions</td>
          </tr>

          <tr>
            <td>\\d</td>
            <td>Digits</td>
          </tr>

          <tr>
            <td>\\w</td>
            <td>Word characters</td>
          </tr>

          <tr>
            <td>\\s</td>
            <td>Whitespace</td>
          </tr>
        </tbody>
      </table>

      <h2>Email Validation Example</h2>

      <CodeBlock filename="email_validation.py">{`<span class="cmt"># Email validation using regex</span>

import re

email = "tej@gmail.com"

pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$"

if re.match(pattern, email):

    print("Valid Email")

else:

    print("Invalid Email")`}</CodeBlock>

      <h2>Phone Number Validation</h2>

      <CodeBlock filename="phone_validation.py">{`<span class="cmt"># Phone number validation</span>

import re

phone = "9876543210"

pattern = r"^[0-9]{10}$"

if re.match(pattern, phone):

    print("Valid Number")

else:

    print("Invalid Number")`}</CodeBlock>

      <h2>Password Validation</h2>

      <CodeBlock filename="password_validation.py">{`<span class="cmt"># Password validation</span>

import re

password = "Tej@123"

pattern = r"^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$"

if re.match(pattern, password):

    print("Strong Password")

else:

    print("Weak Password")`}</CodeBlock>

      <h2>Extract Numbers from Text</h2>

      <CodeBlock filename="extract_numbers.py">{`<span class="cmt"># Extract numbers using regex</span>

import re

text = "My marks are 85 and 92"

numbers = re.findall("\\d+", text)

print(numbers)`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="extract_output.txt">{`['85', '92']`}</CodeBlock>

      <h2>Removing Special Characters</h2>

      <CodeBlock filename="remove_special_characters.py">{`<span class="cmt"># Remove special characters</span>

import re

text = "Hello@# Python!!"

clean = re.sub(r"[^a-zA-Z0-9 ]", "", text)

print(clean)`}</CodeBlock>

      <h3>Output</h3>

      <CodeBlock filename="clean_output.txt">{`Hello Python`}</CodeBlock>

      <h2>Regex Flags</h2>

      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>re.I</td>
            <td>Ignore case</td>
          </tr>

          <tr>
            <td>re.M</td>
            <td>Multiline</td>
          </tr>

          <tr>
            <td>re.S</td>
            <td>Dot matches newline</td>
          </tr>
        </tbody>
      </table>

      <h2>Case Insensitive Search</h2>

      <CodeBlock filename="ignore_case.py">{`<span class="cmt"># Ignore case example</span>

import re

text = "PYTHON"

result = re.search("python", text, re.I)

print(result)`}</CodeBlock>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What are Regular Expressions?
          </p>
        </li>

        <li>
          <p>
            Difference between re.search() and re.match().
          </p>
        </li>

        <li>
          <p>
            What is re.findall()?
          </p>
        </li>

        <li>
          <p>
            How to validate email using regex?
          </p>
        </li>

        <li>
          <p>
            Difference between * and + in regex.
          </p>
        </li>

        <li>
          <p>
            What are regex flags?
          </p>
        </li>
      </ul>

      <h2>Advantages of Regular Expressions</h2>

      <ul>
        <li>
          <p>
            Powerful text searching.
          </p>
        </li>

        <li>
          <p>
            Fast pattern matching.
          </p>
        </li>

        <li>
          <p>
            Useful in data validation.
          </p>
        </li>

        <li>
          <p>
            Helps in text processing and cleaning.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Multithreading', path: '/python/multithreading' }}
      />

    </DocPage>
  );
};

export default PythonRegularExpression;