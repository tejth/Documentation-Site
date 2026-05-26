import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonJsonFiles = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'JSON Files' }
        ]}
        title="JSON Files in Python"
        readTime="16 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>What is JSON?</h2>

      <ul>
        <li>
          <p>
            JSON stands for JavaScript Object Notation.
          </p>
        </li>

        <li>
          <p>
            It is a lightweight format used to store and exchange data.
          </p>
        </li>

        <li>
          <p>
            JSON is commonly used in APIs, web applications and databases.
          </p>
        </li>
      </ul>

      <h2>Why JSON is Used?</h2>

      <ul>
        <li>
          <p>
            Different programming languages can understand JSON.
          </p>
        </li>

        <li>
          <p>
            Python backend can send JSON data to JavaScript frontend.
          </p>
        </li>

        <li>
          <p>
            APIs usually return JSON responses.
          </p>
        </li>
      </ul>

      <h3>1. JSON Example</h3>

      <CodeBlock filename="json_example.json">{`{

    "name": "Tej",

    "age": 22,

    "skills": ["Python", "AI"]

}`}</CodeBlock>

      <h3>2. Similar Python Dictionary</h3>

      <CodeBlock filename="python_dictionary.py">{`<span class="cmt"># Python dictionary</span>

data = {

    "name": "Tej",

    "age": 22,

    "skills": ["Python", "AI"]

}`}</CodeBlock>

      <h2>Important Difference Between Python and JSON</h2>

      <CodeBlock filename="python_vs_json.txt">{`Python                         JSON

Dictionary                     Object

Single quotes allowed          Only double quotes

True / False                   true / false

None                           null`}</CodeBlock>

      <h2>Convert Python to JSON</h2>

      <ul>
        <li>
          <p>
            json.dumps() converts Python dictionary into JSON string.
          </p>
        </li>

        <li>
          <p>
            dumps means "dump string".
          </p>
        </li>
      </ul>

      <h3>3. Convert Dictionary to JSON</h3>

      <CodeBlock filename="json_dumps.py">{`<span class="cmt"># Convert Python dictionary to JSON</span>

import json

data = {

    "name": "Tej",

    "age": 22

}

json_data = json.dumps(data)

print(json_data)

print(type(json_data))`}</CodeBlock>

      <h3>4. Output of json.dumps()</h3>

      <CodeBlock filename="json_dumps_output.txt">{`{"name": "Tej", "age": 22}

<class 'str'>`}</CodeBlock>

      <ul>
        <li>
          <p>
            After conversion:
          </p>
        </li>

        <li>
          <p>
            dictionary → string
          </p>
        </li>
      </ul>

      <h2>Convert JSON String to Python</h2>

      <ul>
        <li>
          <p>
            json.loads() converts JSON string into Python dictionary.
          </p>
        </li>

        <li>
          <p>
            loads means "load string".
          </p>
        </li>
      </ul>

      <h3>5. Convert JSON String to Dictionary</h3>

      <CodeBlock filename="json_loads.py">{`<span class="cmt"># Convert JSON string to Python dictionary</span>

import json

json_data = '{"name":"Tej","age":22}'

python_data = json.loads(json_data)

print(python_data)

print(type(python_data))`}</CodeBlock>

      <h3>6. Output of json.loads()</h3>

      <CodeBlock filename="json_loads_output.txt">{`{'name': 'Tej', 'age': 22}

<class 'dict'>`}</CodeBlock>

      <h2>Write JSON Data to File</h2>

      <ul>
        <li>
          <p>
            json.dump() writes JSON data directly into a file.
          </p>
        </li>
      </ul>

      <h3>7. Write JSON File</h3>

      <CodeBlock filename="json_dump.py">{`<span class="cmt"># Write JSON to file</span>

import json

data = {

    "name": "Tej",

    "course": "Python"

}

with open("data.json", "w") as file:

    json.dump(data, file)`}</CodeBlock>

      <h3>8. Generated JSON File</h3>

      <CodeBlock filename="data.json">{`{

    "name": "Tej",

    "course": "Python"

}`}</CodeBlock>

      <h2>Pretty Printing JSON</h2>

      <ul>
        <li>
          <p>
            indent=4 formats JSON properly and improves readability.
          </p>
        </li>
      </ul>

      <h3>9. Pretty Printed JSON</h3>

      <CodeBlock filename="pretty_json.py">{`<span class="cmt"># Pretty printing JSON</span>

import json

data = {

    "name": "Tej",

    "course": "Python"

}

with open("data.json", "w") as file:

    json.dump(data, file, indent = 4)`}</CodeBlock>

      <h2>Read JSON File</h2>

      <ul>
        <li>
          <p>
            json.load() reads JSON data from a file.
          </p>
        </li>
      </ul>

      <h3>10. Read JSON File</h3>

      <CodeBlock filename="json_load.py">{`<span class="cmt"># Read JSON file</span>

import json

with open("data.json", "r") as file:

    data = json.load(file)

print(data)

print(type(data))`}</CodeBlock>

      <h2>Convert List to JSON</h2>

      <h3>11. List to JSON Example</h3>

      <CodeBlock filename="list_to_json.py">{`<span class="cmt"># Convert list to JSON</span>

import json

skills = ["Python", "AI", "Machine Learning"]

json_data = json.dumps(skills)

print(json_data)`}</CodeBlock>

      <h2>JSON API Example</h2>

      <h3>12. Example API JSON Response</h3>

      <CodeBlock filename="api_response.json">{`{

    "status": "success",

    "user": {

        "name": "Tej",

        "email": "tej@gmail.com"

    }

}`}</CodeBlock>

      <h2>Advantages of JSON</h2>

      <ul>
        <li>
          <p>
            Lightweight and fast.
          </p>
        </li>

        <li>
          <p>
            Easy to read and write.
          </p>
        </li>

        <li>
          <p>
            Supported by almost all programming languages.
          </p>
        </li>

        <li>
          <p>
            Widely used in APIs and web development.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            Difference between json.dump() and json.dumps().
          </p>
        </li>

        <li>
          <p>
            Difference between json.load() and json.loads().
          </p>
        </li>

        <li>
          <p>
            Difference between Python dictionary and JSON object.
          </p>
        </li>

        <li>
          <p>
            Why JSON is widely used in APIs.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Decorators', path: '/python/decorators' }}
        next={{ label: 'Basis of OOPs', path: '/python/oop' }}
      />

    </DocPage>
  );
};

export default PythonJsonFiles;