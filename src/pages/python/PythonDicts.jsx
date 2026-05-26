import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonDicts() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Dictionaries and Sets' }]}
        title="Dictionaries and Sets"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Dictionaries in Python</h2>
      <h3>1. Creating and Accessing Dictionary</h3>
      <CodeBlock filename="dictionary_basics.py">{`<span class="cmt"># Creating dictionary</span>

student = {

    "name" : "Tej",
    "age" : 22,
    "marks" : 90

}

print(student)

<span class="cmt"># Accessing values</span>

print(student["name"])

print(student.get("marks"))

<span class="cmt"># Updating values</span>

student["age"] = 23

print(student)

<span class="cmt"># Adding new key-value pair</span>

student["city"] = "Jaipur"

print(student)`}</CodeBlock>
      <h3>2. Important Dictionary Functions</h3>
      <CodeBlock filename="dictionary_functions.py">{`<span class="cmt"># Important dictionary functions</span>

student = {

    "name" : "Tej",
    "age" : 22,
    "marks" : 90

}

print(student.keys())      <span class="cmt"># Get all keys</span>

print(student.values())    <span class="cmt"># Get all values</span>

print(student.items())     <span class="cmt"># Get key-value pairs</span>

student.update({"city" : "Jaipur"})   <span class="cmt"># Update dictionary</span>

print(student)

student.pop("age")         <span class="cmt"># Remove key</span>

print(student)

student.clear()            <span class="cmt"># Remove all elements</span>

print(student)`}</CodeBlock>
      <h3>3. Word Frequency Counter</h3>
      <CodeBlock filename="word_frequency.py">{`<span class="cmt"># Word Frequency Counter</span>

text = input("Enter a text: ")

words = text.split()

freq = {}

for word in words:

    if word in freq:

        freq[word] += 1

    else:

        freq[word] = 1

print(freq)`}</CodeBlock>
      <h3>4. Maximum Marks of Topper</h3>
      <CodeBlock filename="topper.py">{`<span class="cmt"># Maximum marks of topper</span>

students = {

    "Tej" : 85,
    "Rahul" : 92,
    "Aman" : 88

}

topper = max(students, key = students.get)

print("Topper:", topper)

print("Marks:", students[topper])`}</CodeBlock>
      <h3>5. Common Elements in Lists using Dictionary Concept</h3>
      <CodeBlock filename="common_elements.py">{`<span class="cmt"># Common elements in lists</span>

list1 = [1, 2, 3, 4]

list2 = [3, 4, 5, 6]

common = [x for x in list1 if x in list2]

print(common)`}</CodeBlock>
      <h2>Sets in Python</h2>
      <h3>6. Creating and Accessing Sets</h3>
      <CodeBlock filename="set_basics.py">{`<span class="cmt"># Creating sets</span>

a = {1, 2, 3}

b = {3, 4, 5}

print(a)

print(b)

<span class="cmt"># Adding element</span>

a.add(10)

print(a)

<span class="cmt"># Removing element</span>

a.remove(2)

print(a)`}</CodeBlock>
      <h3>7. Important Set Operations</h3>
      <CodeBlock filename="set_operations.py">{`<span class="cmt"># Set operations</span>

a = {1, 2, 3}

b = {3, 4, 5}

print(a &amp; b)   <span class="cmt"># Intersection</span>

print(a | b)   <span class="cmt"># Union</span>

print(a - b)   <span class="cmt"># Difference</span>

print(a ^ b)   <span class="cmt"># Symmetric Difference</span>`}</CodeBlock>
      <h3>8. Remove Duplicates using Set</h3>
      <CodeBlock filename="remove_duplicates.py">{`<span class="cmt"># Remove duplicates using set</span>

lst = [1, 2, 2, 3, 4, 4, 5]

result = list(set(lst))

print(result)`}</CodeBlock>
      <h3>9. Most Asked Interview Questions on Dictionaries</h3>
      <h3>10. Most Asked Interview Questions on Sets</h3>

      <PageNav
        prev={{ label: 'Lists and Tuples', path: '/python/lists' }}
        next={{ label: 'Functions', path: '/python/functions' }}
      />
    </DocPage>
  );
}
