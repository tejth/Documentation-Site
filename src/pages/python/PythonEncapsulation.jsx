import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonEncapsulation = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Encapsulation' }
        ]}
        title="Encapsulation in Python"
        readTime="20 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Encapsulation in Python</h2>

      <ul>
        <li>
          <p>
            Encapsulation means wrapping data members and methods into a single
            unit called class.
          </p>
        </li>

        <li>
          <p>
            It helps in data protection and security.
          </p>
        </li>

        <li>
          <p>
            Encapsulation is one of the four pillars of OOPs.
          </p>
        </li>
      </ul>

      <h2>Instance Variables</h2>

      <ul>
        <li>
          <p>
            The variables whose values are different for different objects are
            called instance variables.
          </p>
        </li>

        <li>
          <p>
            They are created using self keyword.
          </p>
        </li>

        <li>
          <p>
            num and den below are instance variables.
          </p>
        </li>
      </ul>

      <h3>1. Instance Variable Example</h3>

      <CodeBlock filename="instance_variable.py">{`<span class="cmt"># Instance variable example</span>

class Fraction:

    def __init__(self, n, d):

        self.num = n

        self.den = d

f1 = Fraction(3, 4)

f2 = Fraction(5, 6)

print(f1.num)

print(f2.den)`}</CodeBlock>

      <h2>Private Variables and Private Methods</h2>

      <ul>
        <li>
          <p>
            Private variables are accessible only inside the class.
          </p>
        </li>

        <li>
          <p>
            Private methods cannot be called directly from outside the class.
          </p>
        </li>

        <li>
          <p>
            Double underscore __ is used to create private members.
          </p>
        </li>

        <li>
          <p>
            They are generally accessed using getter and setter methods.
          </p>
        </li>
      </ul>

      <h2>Important Notes About Private Variables</h2>

      <ul>
        <li>
          <p>
            In Python, nothing is truly private.
          </p>
        </li>

        <li>
          <p>
            Internally __balance becomes _ATM__balance.
          </p>
        </li>

        <li>
          <p>
            Double underscore is mainly a warning for developers.
          </p>
        </li>

        <li>
          <p>
            Changing variable outside class creates a new variable instead of
            modifying original private variable.
          </p>
        </li>
      </ul>

      <h3>2. Private Variable Example</h3>

      <CodeBlock filename="private_variable.py">{`<span class="cmt"># Private variables example</span>

class ATM:

    def __init__(self):

        self.__pin = ""

        self.__balance = 0

        print(id(self))

        self.menu()

    def menu(self):

        print("ATM Menu")

    def set_pin(self, new_pin):

        if type(new_pin) == str:

            self.__pin = new_pin

        else:

            print("Not allowed")

sbi = ATM()

sbi._ATM__balance = "whsjdsg"

print(sbi._ATM__balance)`}</CodeBlock>

      <h2>Getter and Setter Methods</h2>

      <ul>
        <li>
          <p>
            Getter methods are used to access private variables.
          </p>
        </li>

        <li>
          <p>
            Setter methods are used to modify private variables safely.
          </p>
        </li>
      </ul>

      <h3>3. Getter and Setter Example</h3>

      <CodeBlock filename="getter_setter.py">{`<span class="cmt"># Getter and setter example</span>

class Student:

    def __init__(self):

        self.__marks = 0

    def set_marks(self, marks):

        if marks >= 0:

            self.__marks = marks

    def get_marks(self):

        return self.__marks

s1 = Student()

s1.set_marks(95)

print(s1.get_marks())`}</CodeBlock>

      <h2>Reference Variables</h2>

      <ul>
        <li>
          <p>
            When an object is assigned to a variable, that variable is called a
            reference variable.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            In ATM example, sbi is reference variable.
          </p>
        </li>
      </ul>

      <h2>Pass By Reference in Objects</h2>

      <ul>
        <li>
          <p>
            Objects of classes are mutable like lists, dictionaries and sets.
          </p>
        </li>

        <li>
          <p>
            Passing object into function can modify original object.
          </p>
        </li>
      </ul>

      <h3>4. Pass By Reference Example</h3>

      <CodeBlock filename="pass_by_reference.py">{`<span class="cmt"># Pass by reference example</span>

class Customer:

    def __init__(self, name):

        self.__name = name

    def greet(customer):

        print(id(customer))

        customer.name = "Nitish"

        print(customer.name)

cust = Customer("Ankita")

print(id(cust))

cust.greet()`}</CodeBlock>

      <h2>Collection of Objects</h2>

      <ul>
        <li>
          <p>
            Multiple objects can be stored inside lists, tuples or dictionaries.
          </p>
        </li>

        <li>
          <p>
            This is called collection of objects.
          </p>
        </li>
      </ul>

      <h3>5. Collection of Objects Example</h3>

      <CodeBlock filename="collection_of_objects.py">{`<span class="cmt"># Collection of objects</span>

class Customer:

    def __init__(self, name, age):

        self.name = name

        self.age = age

c1 = Customer("Nitish", 34)

c2 = Customer("Amit", 54)

c3 = Customer("Harish", 32)

L1 = [c1, c2, c3]

for i in L1:

    print(i.name, i.age)`}</CodeBlock>

      <h2>Advantages of Encapsulation</h2>

      <ul>
        <li>
          <p>
            Better data security.
          </p>
        </li>

        <li>
          <p>
            Prevents accidental data modification.
          </p>
        </li>

        <li>
          <p>
            Makes code more modular.
          </p>
        </li>

        <li>
          <p>
            Easier maintenance and debugging.
          </p>
        </li>
      </ul>

      <h2>Real Life Example of Encapsulation</h2>

      <ul>
        <li>
          <p>
            ATM machine hides internal banking operations from user.
          </p>
        </li>

        <li>
          <p>
            Mobile phones hide internal hardware complexity.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is encapsulation in Python?
          </p>
        </li>

        <li>
          <p>
            Difference between public and private variables.
          </p>
        </li>

        <li>
          <p>
            Why getter and setter methods are used.
          </p>
        </li>

        <li>
          <p>
            Is private variable truly private in Python?
          </p>
        </li>

        <li>
          <p>
            What are instance variables?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Basic of OOPs', path: '/python/oop' }}
        next={{ label: 'Static Variables', path: '/python/static-variables' }}
      />

    </DocPage>
  );
};

export default PythonEncapsulation;