import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonFileHandling() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Functions' }]}
        title="Functions"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>File Handling in Python</h2>
      <h3>1. Opening a File</h3>
      <CodeBlock filename="open_file.py">{`<span class="cmt"># Opening a file</span>

f = open("file.txt", "r")

print(f.read())

f.close()`}</CodeBlock>
      <h3>2. File Modes</h3>
      <CodeBlock filename="with_statement.py">{`<span class="cmt"># Using with statement</span>

with open("file.txt", "r") as f:

    data = f.read()

    print(data)`}</CodeBlock>
      <h3>3. Using with Statement (Best Practice)</h3>
      <CodeBlock filename="write_file.py">{`<span class="cmt"># Write text to file</span>

with open("file.txt", "w") as f:

    f.write("Hello Tej\n")

    f.write("Welcome to Python")`}</CodeBlock>
      <h3>4. Write Text to File</h3>
      <CodeBlock filename="count_words.py">{`<span class="cmt"># Read file and count words</span>

with open("file.txt", "r") as f:

    data = f.read()

words = data.split()

print("Word count:", len(words))`}</CodeBlock>
      <h3>5. Read File and Count Words</h3>
      <CodeBlock filename="append_file.py">{`<span class="cmt"># Append new content</span>

with open("file.txt", "a") as f:

    f.write("\nThis is new content")`}</CodeBlock>
      <h3>6. Append New Content</h3>
      <CodeBlock filename="copy_file.py">{`<span class="cmt"># Copy content to another file</span>

with open("file.txt", "r") as f:

    data = f.read()

with open("copy.txt", "w") as f:

    f.write(data)`}</CodeBlock>
      <h3>7. Copy Content to Another File</h3>
      <CodeBlock filename="file_methods.py">{`<span class="cmt"># Useful file methods</span>

f.read()        <span class="cmt"># Read complete file</span>

f.readline()    <span class="cmt"># Read one line</span>

f.readlines()   <span class="cmt"># Read all lines as list</span>`}</CodeBlock>
      <h3>8. Useful File Methods</h3>
      <CodeBlock filename="count_lines.py">{`<span class="cmt"># Count lines in file</span>

with open("data.txt", "r") as file:

    lines = file.readlines()

    print("Total lines:", len(lines))`}</CodeBlock>
      <h3>9. Count Total Lines in File</h3>
      <CodeBlock filename="data.txt">{`Hello
Python
File Handling`}</CodeBlock>
      <h3>10. Example File Content</h3>
      <CodeBlock filename="frequent_word.py">{`<span class="cmt"># Find most frequent word</span>

with open("data.txt", "r") as file:

    text = file.read().lower()

words = text.split()

freq = {}

for word in words:

    if word in freq:

        freq[word] += 1

    else:

        freq[word] = 1

most_word = max(freq, key = freq.get)

print("Most frequent word:", most_word)

print("Count:", freq[most_word])`}</CodeBlock>
      <h3>11. Find Most Frequent Word</h3>
      <CodeBlock filename="line_by_line.py">{`<span class="cmt"># Read file line by line</span>

with open("data.txt", "r") as file:

    for line in file:

        print(line.strip())`}</CodeBlock>
      <h3>12. Read File Line by Line</h3>
      <CodeBlock filename="exception_handling.py">{`<span class="cmt"># Exception handling in files</span>

try:

    with open("demo.txt", "r") as file:

        print(file.read())

except FileNotFoundError:

    print("File not found")`}</CodeBlock>
      <h3>13. Exception Handling with Files</h3>
      <h3>14. Most Asked Interview Questions on File Handling</h3>

      <PageNav
        prev={{ label: 'Functions', path: '/python/functions' }}
        next={{ label: 'Exception Handling', path: '/python/exception-handling' }}
      />
    </DocPage>
  );
}
