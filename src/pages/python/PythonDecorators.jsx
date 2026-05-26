import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonDecorators = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Decorators' }
        ]}
        title="Decorators in Python"
        readTime="18 min read"
        level="Advanced"
        updated="May 2026"
      />

      <h2>Decorators in Python</h2>

      <ul>
        <li>
          <p>
            Decorators are one of the most important advanced Python concepts.
          </p>
        </li>

        <li>
          <p>
            Used heavily in Flask, Django, FastAPI, logging, authentication,
            timing functions and AI frameworks.
          </p>
        </li>

        <li>
          <p>
            Decorators help modify functions without changing original code.
          </p>
        </li>
      </ul>

      <h2>Simple Definition</h2>

      <ul>
        <li>
          <p>
            A decorator is a function that modifies another function without
            changing its original code.
          </p>
        </li>
      </ul>

      <h2>Functions are First-Class Objects</h2>

      <ul>
        <li>
          <p>
            In Python, functions are treated like normal variables.
          </p>
        </li>

        <li>
          <p>
            Functions can be stored in variables.
          </p>
        </li>

        <li>
          <p>
            Functions can be passed as arguments.
          </p>
        </li>

        <li>
          <p>
            Functions can be returned from another function.
          </p>
        </li>
      </ul>

      <h3>1. Function Stored in Variable</h3>

      <CodeBlock filename="function_variable.py">{`<span class="cmt"># Function stored in variable</span>

def greet():

    print("Hello")

x = greet

x()`}</CodeBlock>

      <h3>2. Function Inside Function</h3>

      <CodeBlock filename="inner_function.py">{`<span class="cmt"># Function inside function</span>

def outer():

    def inner():

        print("Inner function")

    inner()

outer()`}</CodeBlock>

      <h3>3. Returning Function from Function</h3>

      <CodeBlock filename="return_function.py">{`<span class="cmt"># Returning function from function</span>

def outer():

    def inner():

        print("Hello")

    return inner

x = outer()

x()`}</CodeBlock>

      <h2>Basic Decorator Structure</h2>

      <CodeBlock filename="decorator_structure.py">{`<span class="cmt"># Basic decorator structure</span>

def decorator_function(original_function):

    def wrapper():

        print("Something before function")

        original_function()

        print("Something after function")

    return wrapper`}</CodeBlock>

      <h2>Using Decorator Normally</h2>

      <h3>4. Manual Decorator Usage</h3>

      <CodeBlock filename="manual_decorator.py">{`<span class="cmt"># Using decorator manually</span>

def decorator_function(original_function):

    def wrapper():

        print("Before function")

        original_function()

        print("After function")

    return wrapper

def say_hello():

    print("Hello")

decorated = decorator_function(say_hello)

decorated()`}</CodeBlock>

      <h2>Real Decorator Syntax using @</h2>

      <h3>5. Decorator using @ Syntax</h3>

      <CodeBlock filename="real_decorator.py">{`<span class="cmt"># Real decorator syntax</span>

def decorator_function(original_function):

    def wrapper():

        print("Before function")

        original_function()

        print("After function")

    return wrapper

@decorator_function
def greet():

    print("Hello")

greet()`}</CodeBlock>

      <h2>Output of Decorator</h2>

      <CodeBlock filename="decorator_output.txt">{`Before function

Hello

After function`}</CodeBlock>

      <h2>Decorator with Arguments</h2>

      <h3>6. Decorator Handling Arguments</h3>

      <CodeBlock filename="decorator_arguments.py">{`<span class="cmt"># Decorator with arguments</span>

def decorator_function(original_function):

    def wrapper(name):

        print("Before function")

        original_function(name)

        print("After function")

    return wrapper

@decorator_function
def greet(name):

    print("Hello", name)

greet("Tej")`}</CodeBlock>

      <h2>Using *args and **kwargs</h2>

      <ul>
        <li>
          <p>
            *args and **kwargs make decorators flexible for any number of
            arguments.
          </p>
        </li>
      </ul>

      <h3>7. Flexible Decorator Example</h3>

      <CodeBlock filename="args_kwargs_decorator.py">{`<span class="cmt"># Flexible decorator</span>

def decorator_function(original_function):

    def wrapper(*args, **kwargs):

        print("Before function")

        original_function(*args, **kwargs)

        print("After function")

    return wrapper

@decorator_function
def add(a, b):

    print(a + b)

add(10, 20)`}</CodeBlock>

      <h2>Real World Example — Timing Function</h2>

      <h3>8. Timing Decorator</h3>

      <CodeBlock filename="timing_decorator.py">{`<span class="cmt"># Timing decorator</span>

import time

def timer(func):

    def wrapper():

        start = time.time()

        func()

        end = time.time()

        print("Execution Time:", end - start)

    return wrapper

@timer
def test():

    for i in range(1000000):

        pass

test()`}</CodeBlock>

      <h2>Authentication Style Decorator</h2>

      <h3>9. Login Check Example</h3>

      <CodeBlock filename="auth_decorator.py">{`<span class="cmt"># Authentication decorator</span>

is_logged_in = True

def login_required(func):

    def wrapper():

        if is_logged_in:

            func()

        else:

            print("Please login first")

    return wrapper

@login_required
def dashboard():

    print("Welcome to dashboard")

dashboard()`}</CodeBlock>

      <h2>Why Decorators are Powerful</h2>

      <ul>
        <li>
          <p>
            Avoid changing original function code.
          </p>
        </li>

        <li>
          <p>
            Reuse common functionality easily.
          </p>
        </li>

        <li>
          <p>
            Used for logging, authentication and caching.
          </p>
        </li>

        <li>
          <p>
            Makes code cleaner and modular.
          </p>
        </li>
      </ul>

      <h2>Common Uses of Decorators</h2>

      <ul>
        <li>
          <p>
            Flask routes.
          </p>
        </li>

        <li>
          <p>
            Django authentication.
          </p>
        </li>

        <li>
          <p>
            API validation.
          </p>
        </li>

        <li>
          <p>
            Logging and monitoring.
          </p>
        </li>

        <li>
          <p>
            Timing execution.
          </p>
        </li>

        <li>
          <p>
            Memoization and caching.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What are decorators in Python?
          </p>
        </li>

        <li>
          <p>
            Why functions are called first-class objects.
          </p>
        </li>

        <li>
          <p>
            Difference between wrapper and original function.
          </p>
        </li>

        <li>
          <p>
            Why *args and **kwargs are used in decorators.
          </p>
        </li>

        <li>
          <p>
            Real-world use cases of decorators.
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Generators', path: '/python/generators' }}
        next={{ label: 'Working with Json', path: '/python/json-files' }}
      />

    </DocPage>
  );
};

export default PythonDecorators;