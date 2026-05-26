import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonStrings() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Strings' }]}
        title="Strings"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Strings in Python</h2>
      <h3>1. Basic String Functions</h3>
      <CodeBlock filename="strings.py">{`<span class="cmt"># String Functions</span>

name = input("Enter your name: ")

print(name[1:5])          <span class="cmt"># Slicing</span>

print(name.upper())       <span class="cmt"># Convert to uppercase</span>

print(name.lower())       <span class="cmt"># Convert to lowercase</span>

print(name.capitalize())  <span class="cmt"># Capitalize first letter</span>

print(name.title())       <span class="cmt"># Capitalize every word</span>

print(name.replace("e", "a"))   <span class="cmt"># Replace characters</span>

print(name.split("a"))    <span class="cmt"># Split string</span>

print(len(name))          <span class="cmt"># Length of string</span>

print(name.count("a"))    <span class="cmt"># Count occurrences</span>

print(name.find("a"))     <span class="cmt"># Find index</span>

print(name.startswith("T"))   <span class="cmt"># Starts with</span>

print(name.endswith("n"))     <span class="cmt"># Ends with</span>

print(name.strip())       <span class="cmt"># Remove spaces</span>`}</CodeBlock>
      <h3>2. String Indexing and Slicing</h3>
      <CodeBlock filename="slicing.py">{`<span class="cmt"># String Indexing and Slicing</span>

str1 = "Python"

print(str1[0])      <span class="cmt"># First character</span>

print(str1[-1])     <span class="cmt"># Last character</span>

print(str1[0:4])    <span class="cmt"># Slicing</span>

print(str1[::-1])   <span class="cmt"># Reverse string</span>`}</CodeBlock>
      <h3>3. Reverse a String</h3>
      <CodeBlock filename="reverse.py">{`<span class="cmt"># Reverse a string using slicing</span>

str1 = "abc"

print(str1[::-1])

<span class="cmt"># Reverse using loop</span>

rev = ""

for char in str1:

    rev = char + rev

print(rev)`}</CodeBlock>
      <h3>4. Palindrome String</h3>
      <CodeBlock filename="palindrome.py">{`<span class="cmt"># Check palindrome using slicing</span>

str1 = "aba"

if str1 == str1[::-1]:

    print("Palindrome")

else:

    print("Not Palindrome")

<span class="cmt"># Check palindrome using loop</span>

str2 = "madam"

rev2 = ""

for char in str2:

    rev2 = char + rev2

if rev2 == str2:

    print("Palindrome")

else:

    print("Not Palindrome")`}</CodeBlock>
      <h3>5. Remove Spaces from String</h3>
      <CodeBlock filename="remove_spaces.py">{`<span class="cmt"># Remove spaces from string</span>

eg_str = "   heee hy   "

result = eg_str.replace(" ", "")

print(result)

<span class="cmt"># Remove spaces from start and end</span>

print(eg_str.strip())`}</CodeBlock>
      <h3>6. Count Vowels in a String</h3>
      <CodeBlock filename="vowels.py">{`<span class="cmt"># Count vowels in a string</span>

string = input("Enter a string: ")

count = 0

for ch in string.lower():

    if ch in "aeiou":

        count += 1

print("Total vowels:", count)`}</CodeBlock>
      <h3>7. Frequency of Characters</h3>
      <CodeBlock filename="frequency.py">{`<span class="cmt"># Frequency of characters</span>

string = "programming"

freq = {}

for ch in string:

    if ch in freq:

        freq[ch] += 1

    else:

        freq[ch] = 1

print(freq)`}</CodeBlock>
      <h3>8. Important Interview Questions</h3>
      <CodeBlock filename="duplicates.py">{`<span class="cmt"># Remove duplicate characters</span>

string = "programming"

result = ""

for ch in string:

    if ch not in result:

        result += ch

print(result)`}</CodeBlock>
      <h3>9. Remove Duplicate Characters</h3>
      <CodeBlock filename="anagram.py">{`<span class="cmt"># Check Anagram</span>

str1 = "listen"
str2 = "silent"

if sorted(str1) == sorted(str2):

    print("Anagram")

else:

    print("Not Anagram")`}</CodeBlock>
      <h3>10. Anagram Program</h3>

      <PageNav
        prev={{ label: 'Loops', path: '/python/loops' }}
        next={{ label: 'Lists and Tuples', path: '/python/lists' }}
      />
    </DocPage>
  );
}
