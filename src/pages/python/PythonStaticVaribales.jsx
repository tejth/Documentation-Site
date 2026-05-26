import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonStaticVaribales = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Static Variables' }
        ]}
        title="Static Variables and Static Methods"
        readTime="14 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Static Variables in Python</h2>

      <ul>
        <li>
          <p>
            Variables for which the value remains same for every object are
            called static variables or class variables.
          </p>
        </li>

        <li>
          <p>
            Static variables belong to the class, not to individual objects.
          </p>
        </li>

        <li>
          <p>
            They are shared among all objects of the class.
          </p>
        </li>
      </ul>

      <h2>Static Methods in Python</h2>

      <ul>
        <li>
          <p>
            Methods that do not need object reference are called static methods.
          </p>
        </li>

        <li>
          <p>
            Static methods are created using @staticmethod decorator.
          </p>
        </li>

        <li>
          <p>
            They can be called directly using class name.
          </p>
        </li>
      </ul>

      <h2>Why Static Variables are Used?</h2>

      <ul>
        <li>
          <p>
            To store common data shared by all objects.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            Counting number of objects created.
          </p>
        </li>

        <li>
          <p>
            Storing company name for all employees.
          </p>
        </li>
      </ul>

      <h3>1. Static Variable and Static Method Example</h3>

      <CodeBlock filename="static_variable.py">{`<span class="cmt"># Static/Class variable example</span>

class Customer:

    <span class="cmt"># Static class variable</span>

    counter = 1

    def __init__(self, name, age):

        self.__name = name

        self._age = age

        self.sno = Customer.counter

        Customer.counter = Customer.counter + 1

    @staticmethod

    def get_counter():

        return Customer.counter

c1 = Customer("Nitish", 34)

print(c1.counter)

c2 = Customer("Amit", 34)

print(c2.counter)

print(Customer.get_counter())`}</CodeBlock>

      <h2>Explanation of Above Program</h2>

      <ul>
        <li>
          <p>
            counter is a class variable shared by all objects.
          </p>
        </li>

        <li>
          <p>
            Each time object is created, counter value increases.
          </p>
        </li>

        <li>
          <p>
            get_counter() is a static method.
          </p>
        </li>

        <li>
          <p>
            Static method is called using class name.
          </p>
        </li>
      </ul>

      <h2>Difference Between Instance Variable and Static Variable</h2>

      <CodeBlock filename="instance_vs_static.txt">{`Instance Variable                Static Variable

Belongs to object                Belongs to class

Different for every object       Same for all objects

Created using self               Created directly in class

Accessed using object            Accessed using class name`}</CodeBlock>

      <h2>Accessing Static Variables</h2>

      <h3>2. Access Static Variable using Object</h3>

      <CodeBlock filename="access_static_object.py">{`<span class="cmt"># Access static variable using object</span>

class Demo:

    company = "Google"

d1 = Demo()

print(d1.company)`}</CodeBlock>

      <h3>3. Access Static Variable using Class</h3>

      <CodeBlock filename="access_static_class.py">{`<span class="cmt"># Access static variable using class</span>

class Demo:

    company = "Google"

print(Demo.company)`}</CodeBlock>

      <h2>Static Method Example</h2>

      <h3>4. Static Method Program</h3>

      <CodeBlock filename="static_method.py">{`<span class="cmt"># Static method example</span>

class MathOperations:

    @staticmethod

    def add(a, b):

        return a + b

print(MathOperations.add(10, 20))`}</CodeBlock>

      <h2>Important Notes</h2>

      <ul>
        <li>
          <p>
            Static methods cannot access instance variables directly.
          </p>
        </li>

        <li>
          <p>
            Static methods do not use self keyword.
          </p>
        </li>

        <li>
          <p>
            Class variables are memory efficient because all objects share same
            variable.
          </p>
        </li>
      </ul>

      <h2>Real Life Example</h2>

      <ul>
        <li>
          <p>
            College name for all students can be stored as static variable.
          </p>
        </li>

        <li>
          <p>
            Employee company name can be shared among all employee objects.
          </p>
        </li>
      </ul>

      <h2>Advantages of Static Variables</h2>

      <ul>
        <li>
          <p>
            Saves memory.
          </p>
        </li>

        <li>
          <p>
            Shared data management becomes easy.
          </p>
        </li>

        <li>
          <p>
            Useful for counters and configuration values.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is static variable in Python?
          </p>
        </li>

        <li>
          <p>
            Difference between instance variable and class variable.
          </p>
        </li>

        <li>
          <p>
            What is static method?
          </p>
        </li>

        <li>
          <p>
            Why static methods do not use self keyword?
          </p>
        </li>

        <li>
          <p>
            When should we use class variables?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Encapsulation', path: '/python/encapsulation' }}
        next={{ label: 'Inheritance', path: '/python/inheritance' }}
      />

    </DocPage>
  );
};

export default PythonStaticVaribales;