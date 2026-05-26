import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonInheritance = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Inheritance' }
        ]}
        title="Inheritance in Python"
        readTime="26 min read"
        level="Intermediate"
        updated="May 2026"
      />

      <h2>Relationships in OOPs</h2>

      <ul>
        <li>
          <p>
            Relationships in OOPs are mainly of two types.
          </p>
        </li>

        <li>
          <p>
            Aggregation (has-a relationship)
          </p>
        </li>

        <li>
          <p>
            Inheritance (is-a relationship)
          </p>
        </li>
      </ul>

      <h2>Aggregation (Has-a Relationship)</h2>

      <ul>
        <li>
          <p>
            Aggregation means one class contains another class object.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            Customer has an Address.
          </p>
        </li>
      </ul>

      <h3>1. Aggregation Example</h3>

      <CodeBlock filename="aggregation_example.py">{`<span class="cmt"># Aggregation example</span>

class Address:

    def __init__(self, city):

        self.city = city

class Customer:

    def __init__(self, name, address):

        self.name = name

        self.address = address

addr = Address("Jaipur")

cust = Customer("Tej", addr)

print(cust.name)

print(cust.address.city)`}</CodeBlock>

      <h2>Inheritance (Is-a Relationship)</h2>

      <ul>
        <li>
          <p>
            Inheritance means child class inheriting constructors, data members
            and methods of parent class.
          </p>
        </li>

        <li>
          <p>
            Private members are not inheritable.
          </p>
        </li>

        <li>
          <p>
            Example:
          </p>
        </li>

        <li>
          <p>
            Smartphone is a Product.
          </p>
        </li>

        <li>
          <p>
            It promotes code reusability and DRY principle.
          </p>
        </li>

        <li>
          <p>
            Instead of writing same code multiple times, we inherit it from
            parent class.
          </p>
        </li>
      </ul>

      <h2>Real World Example of Inheritance</h2>

      <ul>
        <li>
          <p>
            Suppose Admin and Student both need login and register functions.
          </p>
        </li>

        <li>
          <p>
            Instead of creating them separately, create a User class.
          </p>
        </li>

        <li>
          <p>
            Admin and Student classes inherit from User class.
          </p>
        </li>
      </ul>

      <h3>2. Simple Inheritance Example</h3>

      <CodeBlock filename="simple_inheritance.py">{`<span class="cmt"># Simple inheritance example</span>

class User:

    def login(self):

        print("Login Function")

    def register(self):

        print("Register Function")

class Student(User):

    pass

s1 = Student()

s1.login()

s1.register()`}</CodeBlock>

      <h2>Constructor Inheritance</h2>

      <ul>
        <li>
          <p>
            First child constructor is checked.
          </p>
        </li>

        <li>
          <p>
            If child constructor is not present then parent constructor is
            invoked.
          </p>
        </li>
      </ul>

      <h3>3. Constructor Inheritance Example</h3>

      <CodeBlock filename="constructor_inheritance.py">{`<span class="cmt"># Constructor inheritance example</span>

class Parent:

    def __init__(self):

        print("Parent constructor")

class Child(Parent):

    pass

obj = Child()`}</CodeBlock>

      <h2>Types of Inheritance</h2>

      <ul>
        <li>
          <p>
            1. Single Inheritance
          </p>
        </li>

        <li>
          <p>
            2. Multilevel Inheritance
          </p>
        </li>

        <li>
          <p>
            3. Hierarchical Inheritance
          </p>
        </li>

        <li>
          <p>
            4. Multiple Inheritance
          </p>
        </li>

        <li>
          <p>
            5. Hybrid Inheritance
          </p>
        </li>
      </ul>

      <h2>Single Inheritance</h2>

      <ul>
        <li>
          <p>
            One child class inherits from one parent class.
          </p>
        </li>
      </ul>

      <h3>4. Single Inheritance Example</h3>

      <CodeBlock filename="single_inheritance.py">{`<span class="cmt"># Single inheritance</span>

class Parent:

    def home(self):

        print("Parent has home")

class Child(Parent):

    def bike(self):

        print("Child has bike")

obj = Child()

obj.home()

obj.bike()`}</CodeBlock>

      <h2>Method Overriding</h2>

      <ul>
        <li>
          <p>
            When child class defines same method as parent class, it is called
            method overriding.
          </p>
        </li>
      </ul>

      <h3>5. Method Overriding Example</h3>

      <CodeBlock filename="method_overriding.py">{`<span class="cmt"># Method overriding example</span>

class Parent:

    def show(self):

        print("Parent class method")

class Child(Parent):

    def show(self):

        print("Child class method")

obj = Child()

obj.show()`}</CodeBlock>

      <h2>Multiple Inheritance</h2>

      <ul>
        <li>
          <p>
            One child class inherits from multiple parent classes.
          </p>
        </li>
      </ul>

      <h3>6. Multiple Inheritance Example</h3>

      <CodeBlock filename="multiple_inheritance.py">{`<span class="cmt"># Multiple inheritance example</span>

class Father:

    def money(self):

        print("Father has money")

class Mother:

    def care(self):

        print("Mother gives care")

class Child(Father, Mother):

    pass

obj = Child()

obj.money()

obj.care()`}</CodeBlock>

      <h2>Multilevel Inheritance</h2>

      <ul>
        <li>
          <p>
            Child inherits from parent and another class inherits from child.
          </p>
        </li>
      </ul>

      <h3>7. Multilevel Inheritance Example</h3>

      <CodeBlock filename="multilevel_inheritance.py">{`<span class="cmt"># Multilevel inheritance example</span>

class Grandfather:

    def land(self):

        print("Grandfather has land")

class Father(Grandfather):

    def car(self):

        print("Father has car")

class Son(Father):

    def bike(self):

        print("Son has bike")

obj = Son()

obj.land()

obj.car()

obj.bike()`}</CodeBlock>

      <h2>Hierarchical Inheritance</h2>

      <ul>
        <li>
          <p>
            Multiple child classes inherit from same parent class.
          </p>
        </li>
      </ul>

      <h3>8. Hierarchical Inheritance Example</h3>

      <CodeBlock filename="hierarchical_inheritance.py">{`<span class="cmt"># Hierarchical inheritance example</span>

class Parent:

    def home(self):

        print("Parent has home")

class Son(Parent):

    pass

class Daughter(Parent):

    pass

obj1 = Son()

obj2 = Daughter()

obj1.home()

obj2.home()`}</CodeBlock>

      <h2>Hybrid Inheritance</h2>

      <ul>
        <li>
          <p>
            Combination of multiple inheritance types is called hybrid
            inheritance.
          </p>
        </li>
      </ul>

      <h3>9. Hybrid Inheritance Example</h3>

      <CodeBlock filename="hybrid_inheritance.py">{`<span class="cmt"># Hybrid inheritance example</span>

class A:

    def showA(self):

        print("Class A")

class B(A):

    def showB(self):

        print("Class B")

class C(A):

    def showC(self):

        print("Class C")

class D(B, C):

    def showD(self):

        print("Class D")

obj = D()

obj.showA()

obj.showB()

obj.showC()

obj.showD()`}</CodeBlock>

      <h2>super() in Python</h2>

      <ul>
        <li>
          <p>
            super() is used to call methods or constructors of parent class from
            child class.
          </p>
        </li>

        <li>
          <p>
            Helps in reusing parent class code.
          </p>
        </li>

        <li>
          <p>
            Avoids duplicate code.
          </p>
        </li>
      </ul>

      <h2>Calling Parent Function Using super()</h2>

      <h3>10. super() Method Example</h3>

      <CodeBlock filename="super_method.py">{`<span class="cmt"># Calling parent method using super()</span>

class Parent:

    def show(self):

        print("This is parent class")

class Child(Parent):

    def display(self):

        super().show()

        print("This is child class")

obj = Child()

obj.display()`}</CodeBlock>

      <h2>Calling Parent Constructor Using super()</h2>

      <h3>11. Without super()</h3>

      <CodeBlock filename="without_super.py">{`<span class="cmt"># Without super()</span>

class Parent:

    def __init__(self):

        print("Parent constructor")

class Child(Parent):

    def __init__(self):

        print("Child constructor")

obj = Child()`}</CodeBlock>

      <h3>12. Using super() Constructor</h3>

      <CodeBlock filename="with_super.py">{`<span class="cmt"># Using super() constructor</span>

class Parent:

    def __init__(self):

        print("Parent constructor")

class Child(Parent):

    def __init__(self):

        super().__init__()

        print("Child constructor")

obj = Child()`}</CodeBlock>

      <h2>Passing Values Using super()</h2>

      <h3>13. Passing Parameters Example</h3>

      <CodeBlock filename="super_parameters.py">{`<span class="cmt"># Passing values using super()</span>

class Parent:

    def __init__(self, name):

        self.name = name

class Child(Parent):

    def __init__(self, name, age):

        super().__init__(name)

        self.age = age

    def show(self):

        print(self.name)

        print(self.age)

obj = Child("Tej", 21)

obj.show()`}</CodeBlock>

      <h2>Advantages of Inheritance</h2>

      <ul>
        <li>
          <p>
            Code reusability.
          </p>
        </li>

        <li>
          <p>
            Reduces duplicate code.
          </p>
        </li>

        <li>
          <p>
            Easier maintenance.
          </p>
        </li>

        <li>
          <p>
            Follows DRY principle.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is inheritance in Python?
          </p>
        </li>

        <li>
          <p>
            Difference between aggregation and inheritance.
          </p>
        </li>

        <li>
          <p>
            Explain different types of inheritance.
          </p>
        </li>

        <li>
          <p>
            What is method overriding?
          </p>
        </li>

        <li>
          <p>
            Why super() is used in Python?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Static Variables', path: '/python/static-variables' }}
        next={{ label: 'Polymorphism', path: '/python/polymorphism' }}
      />

    </DocPage>
  );
};

export default PythonInheritance;