import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaEncapsulationAcessModifiers = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Java', href: '/java/introduction' },
          { label: 'Encapsulation & Access Modifiers' }
        ]}
        title="Encapsulation and Access Modifiers in Java"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Encapsulation</h2>

      <p>
        Encapsulation is one of the fundamental principles of Object-Oriented
        Programming (OOP).
      </p>

      <ul>
        <li>Both data and behavior should be together within an object.</li>
        <li>Data should not be directly accessible from outside.</li>
        <li>Access to data should be controlled through methods.</li>
        <li>It helps achieve data hiding and security.</li>
      </ul>

      <h2>Why Encapsulation?</h2>

      <p>
        Without encapsulation, any part of the program could directly modify
        object data, which may lead to unexpected behavior.
      </p>

      <ul>
        <li>Improves security.</li>
        <li>Improves maintainability.</li>
        <li>Reduces coupling between classes.</li>
        <li>Makes code easier to manage and debug.</li>
      </ul>

      <h2>Example of Encapsulation</h2>

      <CodeBlock filename="encapsulation_example.java">{`class Employee {

    private int salary;

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public int getSalary() {
        return salary;
    }
}

public class Main {

    public static void main(String[] args) {

        Employee emp = new Employee();

        emp.setSalary(50000);

        System.out.println(
            emp.getSalary()
        );
    }
}`}</CodeBlock>

      <p>
        Here salary is private and cannot be accessed directly. Access is
        controlled through getter and setter methods.
      </p>

      <h2>Access Modifiers</h2>

      <p>
        Access Modifiers define who can access:
      </p>

      <ul>
        <li>Variables</li>
        <li>Methods</li>
        <li>Constructors</li>
        <li>Classes</li>
      </ul>

      <h2>Types of Access Modifiers</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Accessible From</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>public</td>
            <td>Everywhere</td>
          </tr>

          <tr>
            <td>private</td>
            <td>Same Class Only</td>
          </tr>

          <tr>
            <td>protected</td>
            <td>Same Package + Inherited Subclasses</td>
          </tr>

          <tr>
            <td>default (no keyword)</td>
            <td>Same Package Only</td>
          </tr>
        </tbody>
      </table>

      <h2>Visual Representation</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Same Class</th>
            <th>Same Package</th>
            <th>Subclass</th>
            <th>Outside Package</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>public</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>

          <tr>
            <td>protected</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td>✗</td>
          </tr>

          <tr>
            <td>default</td>
            <td>✓</td>
            <td>✓</td>
            <td>✗</td>
            <td>✗</td>
          </tr>

          <tr>
            <td>private</td>
            <td>✓</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
          </tr>
        </tbody>
      </table>

      <h2>Understanding All Access Modifiers</h2>

      <CodeBlock filename="access_modifiers_example.java">{`class BankAccount {

    public String ownerName = "Alice";

    private double balance = 5000.0;

    protected String accountType = "Savings";

    String bankName = "ABC Bank";

    public void showBalance() {

        System.out.println(balance);
    }
}

class Main {

    public static void main(String[] args) {

        BankAccount acc = new BankAccount();

        System.out.println(acc.ownerName);

        System.out.println(acc.accountType);

        System.out.println(acc.bankName);

        // System.out.println(acc.balance);
    }
}`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li><strong>ownerName</strong> → public → accessible everywhere.</li>
        <li><strong>balance</strong> → private → accessible only inside BankAccount class.</li>
        <li><strong>accountType</strong> → protected → accessible in same package and subclasses.</li>
        <li><strong>bankName</strong> → default → accessible only inside same package.</li>
      </ul>

      <h2>1. Public Access Modifier</h2>

      <p>
        Members declared as public can be accessed from anywhere in the program.
      </p>

      <CodeBlock filename="public_example.java">{`public class Student {

    public String name = "Tej";
}`}</CodeBlock>

      <ul>
        <li>Accessible from any class.</li>
        <li>No access restrictions.</li>
      </ul>

      <h2>2. Private Access Modifier</h2>

      <p>
        Private members can only be accessed within the same class.
      </p>

      <CodeBlock filename="private_example.java">{`class Employee {

    private int salary = 50000;

    void display() {

        System.out.println(salary);
    }
}`}</CodeBlock>

      <ul>
        <li>Highest level of data hiding.</li>
        <li>Commonly used with getters and setters.</li>
      </ul>

      <h2>3. Protected Access Modifier</h2>

      <p>
        Protected members can be accessed:
      </p>

      <ul>
        <li>Within same package.</li>
        <li>Inside inherited subclasses.</li>
      </ul>

      <CodeBlock filename="protected_example.java">{`class Animal {

    protected void sound() {

        System.out.println("Animal Sound");
    }
}

class Dog extends Animal {

    void display() {

        sound();
    }
}`}</CodeBlock>

      <h2>4. Default Access Modifier</h2>

      <p>
        If no access modifier is specified, Java automatically uses default
        access.
      </p>

      <CodeBlock filename="default_example.java">{`class Student {

    String name = "Tej";
}`}</CodeBlock>

      <ul>
        <li>Accessible only within same package.</li>
        <li>Not accessible outside package.</li>
      </ul>

      <h2>Real World Encapsulation Example</h2>

      <CodeBlock filename="bank_account.java">{`public class BankAccount {

    private double balance;

    public BankAccount(double balance) {

        this.balance = balance;
    }

    public void deposit(double amount) {

        balance += amount;

        updateLog();
    }

    private void updateLog() {

        System.out.println(
            "Log updated."
        );
    }

    protected double getBalance() {

        return balance;
    }
}

class SavingsAccount extends BankAccount {

    public SavingsAccount(double balance) {

        super(balance);
    }

    public void checkBalance() {

        System.out.println(
            getBalance()
        );
    }
}`}</CodeBlock>

      <h3>Explanation</h3>

      <ul>
        <li>balance is private and hidden from outside classes.</li>
        <li>deposit() is public and can be called anywhere.</li>
        <li>updateLog() is private and used internally only.</li>
        <li>getBalance() is protected and accessible to subclasses.</li>
      </ul>

      <h2>Getters and Setters</h2>

      <p>
        Getters and Setters are commonly used to implement encapsulation.
      </p>

      <CodeBlock filename="getter_setter.java">{`class Employee {

    private int salary;

    public void setSalary(int salary) {

        this.salary = salary;
    }

    public int getSalary() {

        return salary;
    }
}`}</CodeBlock>

      <h2>Advantages of Encapsulation</h2>

      <ul>
        <li>Data hiding.</li>
        <li>Better security.</li>
        <li>Improved maintainability.</li>
        <li>Controlled access to variables.</li>
        <li>Reduced dependency between classes.</li>
        <li>Improved code reusability.</li>
      </ul>

      <h2>Interview Questions</h2>

      <h3>Why are variables usually declared private?</h3>

      <p>
        To prevent direct modification and ensure controlled access through
        methods.
      </p>

      <h3>Can a private method be inherited?</h3>

      <p>
        No. Private methods belong only to the class where they are declared.
      </p>

      <h3>Can a protected member be accessed outside the package?</h3>

      <p>
        Yes, but only through inheritance.
      </p>

      <h3>Which access modifier provides maximum accessibility?</h3>

      <p>
        public.
      </p>

      <h3>Which access modifier provides maximum restriction?</h3>

      <p>
        private.
      </p>

      <h2>Quick Revision</h2>

      <ul>
        <li>Encapsulation means binding data and methods together.</li>
        <li>Data should not have unrestricted access.</li>
        <li>Access Modifiers control visibility of members.</li>
        <li>public → accessible everywhere.</li>
        <li>private → accessible only inside same class.</li>
        <li>protected → same package + subclasses.</li>
        <li>default → same package only.</li>
        <li>Getters and Setters are used to achieve encapsulation.</li>
        <li>Encapsulation improves security and maintainability.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Static & Final',
          path: '/java/static-final'
        }}
        next={{
          label: 'Packages & Imports',
          path: '/java/packages'
        }}
      />
    </DocPage>
  );
};

export default JavaEncapsulationAcessModifiers;