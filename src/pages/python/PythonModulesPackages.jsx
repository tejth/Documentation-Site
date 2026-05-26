import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonModulesPackages() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Modules & Packages' }
        ]}
        title="Modules & Packages"
        readTime="14 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Modules & Packages in Python</h2>

      <ul>
        <li>
          <p>
            Modules and packages help organize Python code into reusable files
            and folders.
          </p>
        </li>

        <li>
          <p>
            They make projects cleaner, modular and easier to maintain.
          </p>
        </li>

        <li>
          <p>
            Python provides many built-in modules like math, random and datetime.
          </p>
        </li>
      </ul>

      <h2>What is a Module?</h2>

      <ul>
        <li>
          <p>
            A module is simply a Python file (.py) that contains code such as
            functions, variables or classes.
          </p>
        </li>

        <li>
          <p>
            Modules help in code reusability.
          </p>
        </li>
      </ul>

      <h3>1. Creating Your Own Module</h3>

      <CodeBlock filename="mymodule.py">{`<span class="cmt"># Creating a module</span>

def greet():

    print("Hello")`}</CodeBlock>

      <h3>2. Importing Custom Module</h3>

      <CodeBlock filename="main.py">{`<span class="cmt"># Importing custom module</span>

import mymodule

mymodule.greet()`}</CodeBlock>

      <h2>What is a Package?</h2>

      <ul>
        <li>
          <p>
            A package is a folder that contains multiple Python modules.
          </p>
        </li>

        <li>
          <p>
            Packages are used to organize large projects properly.
          </p>
        </li>
      </ul>

      <h3>3. Package Structure Example</h3>

      <CodeBlock filename="package_structure.txt">{`mypackage/

    ├── module1.py

    ├── module2.py

    ├── module3.py`}</CodeBlock>

      <h2>Importing Code in Python</h2>

      <h3>4. import module</h3>

      <CodeBlock filename="import_module.py">{`<span class="cmt"># import module</span>

import math

print(math.sqrt(16))

print(math.factorial(5))`}</CodeBlock>

      <ul>
        <li>
          <p>
            Access functions using module.function().
          </p>
        </li>
      </ul>

      <h3>5. from module import something</h3>

      <CodeBlock filename="from_import.py">{`<span class="cmt"># from module import something</span>

from math import factorial

print(factorial(5))`}</CodeBlock>

      <ul>
        <li>
          <p>
            No need to write module name again and again.
          </p>
        </li>
      </ul>

      <h3>6. Import Everything (Not Recommended)</h3>

      <CodeBlock filename="import_all.py">{`<span class="cmt"># Import everything</span>

from math import *

print(sqrt(25))

print(pow(2, 3))`}</CodeBlock>

      <ul>
        <li>
          <p>
            Not recommended in large projects because it may create confusion.
          </p>
        </li>
      </ul>

      <h2>Important Built-in Modules</h2>

      <h3>7. Using math Module</h3>

      <CodeBlock filename="math_module.py">{`<span class="cmt"># Using math module</span>

import math

print(math.sqrt(36))

print(math.ceil(4.2))

print(math.floor(4.9))

print(math.pi)`}</CodeBlock>

      <h3>8. Using random Module</h3>

      <CodeBlock filename="random_module.py">{`<span class="cmt"># Using random module</span>

import random

print(random.randint(1, 10))

print(random.choice(['a', 'b', 'c']))`}</CodeBlock>

      <h3>9. Generate Random Password</h3>

      <CodeBlock filename="password_generator.py">{`<span class="cmt"># Generate random password</span>

import random
import string

length = 8

characters = string.ascii_letters + string.digits + string.punctuation

password = ''.join(random.choice(characters) for i in range(length))

print(password)`}</CodeBlock>

      <ul>
        <li>
          <p>
            Generates a strong random password.
          </p>
        </li>
      </ul>

      <h3>10. Using datetime Module</h3>

      <CodeBlock filename="datetime_module.py">{`<span class="cmt"># Using datetime module</span>

import datetime

now = datetime.datetime.now()

print("Current date and time:", now)

print("Year:", now.year)

print("Month:", now.month)

print("Day:", now.day)`}</CodeBlock>

      <h3>11. Formatting Date and Time</h3>

      <CodeBlock filename="date_format.py">{`<span class="cmt"># Formatting date</span>

import datetime

now = datetime.datetime.now()

print(now.strftime("%d-%m-%Y"))

print(now.strftime("%H:%M:%S"))`}</CodeBlock>

      <h3>12. Alias in Python Imports</h3>

      <CodeBlock filename="alias_import.py">{`<span class="cmt"># Alias import</span>

import math as m

print(m.sqrt(49))

print(m.pi)`}</CodeBlock>

      <ul>
        <li>
          <p>
            Aliases help shorten long module names.
          </p>
        </li>
      </ul>

      <h3>13. Check Available Functions in Module</h3>

      <CodeBlock filename="dir_function.py">{`<span class="cmt"># Check available functions</span>

import math

print(dir(math))`}</CodeBlock>

      <h2>Advantages of Modules and Packages</h2>

      <ul>
        <li>
          <p>
            Improves code reusability.
          </p>
        </li>

        <li>
          <p>
            Makes project organized and maintainable.
          </p>
        </li>

        <li>
          <p>
            Reduces code duplication.
          </p>
        </li>

        <li>
          <p>
            Easier debugging and testing.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            Difference between module and package.
          </p>
        </li>

        <li>
          <p>
            Difference between import and from import.
          </p>
        </li>

        <li>
          <p>
            Why importing everything using * is not recommended.
          </p>
        </li>

        <li>
          <p>
            Difference between built-in module and user-defined module.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'map(), filter() and reduce()', path: '/python/map-filter-reduce' }}
        next={{ label: 'Virtual Environments', path: '/python/virtual-environments' }}
      />

    </DocPage>
  );
}