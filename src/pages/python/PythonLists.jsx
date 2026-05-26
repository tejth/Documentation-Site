import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonLists() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'List and Tuples' }]}
        title="List and Tuples"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />
      <h2>Lists in Python</h2>
      <h3>1. Creating and Accessing Lists</h3>
      <CodeBlock filename="list_basics.py">{`<span class="cmt"># Creating a list</span>

lst = [1, 2, 3, 4, 5]

print(lst)

<span class="cmt"># Indexing</span>

print(lst[0])
print(lst[-1])

<span class="cmt"># Slicing</span>

print(lst[1:4])

<span class="cmt"># Updating value</span>

lst[2] = 100

print(lst)`}</CodeBlock>
      <h3>2. Important List Functions</h3>
      <CodeBlock filename="list_functions.py">{`<span class="cmt"># Important list functions</span>

lst = [10, 20, 30]

lst.append(40)      <span class="cmt"># Add single element</span>

lst.extend([50, 60])   <span class="cmt"># Add multiple elements</span>

lst.insert(1, 15)   <span class="cmt"># Insert at index</span>

lst.remove(20)      <span class="cmt"># Remove element</span>

lst.pop()           <span class="cmt"># Remove last element</span>

lst.reverse()       <span class="cmt"># Reverse list</span>

lst.sort()          <span class="cmt"># Sort list</span>

print(lst)

print(len(lst))     <span class="cmt"># Length</span>

print(max(lst))     <span class="cmt"># Maximum value</span>

print(min(lst))     <span class="cmt"># Minimum value</span>

print(sum(lst))     <span class="cmt"># Sum of elements</span>`}</CodeBlock>
      <h3>3. Sum of Elements in List</h3>
      <CodeBlock filename="sum_list.py">{`<span class="cmt"># Sum of elements</span>

lst = [1, 2, 3, 4, 5]

sum = 0

for el in lst:

    sum += el

print(sum)`}</CodeBlock>
      <h3>4. Find Maximum and Minimum Element</h3>
      <CodeBlock filename="max_min.py">{`<span class="cmt"># Find max and min in list</span>

lst = [1, 2, 3, 4, 5]

print(max(lst))
print(min(lst))

max_val = lst[0]
min_val = lst[0]

for el in lst:

    if el > max_val:

        max_val = el

    if el &lt; min_val:

        min_val = el

print(max_val, min_val)`}</CodeBlock>
      <h3>5. Remove Duplicates from List</h3>
      <CodeBlock filename="duplicates.py">{`<span class="cmt"># Remove duplicates</span>

lst2 = [1, 2, 3, 2, 3, 4, 5, 5]

result = list(set(lst2))

print(result)

<span class="cmt"># Without using set</span>

result_lst = []

for el in lst2:

    if el not in result_lst:

        result_lst.append(el)

print(result_lst)`}</CodeBlock>
      <h3>6. Merge Two Lists</h3>
      <CodeBlock filename="merge_list.py">{`<span class="cmt"># Merge lists</span>

list1 = [1, 2, 3]

list2 = [4, 5, 6]

result_merge = list1 + list2

print(result_merge)

list1.extend(list2)

print(list1)`}</CodeBlock>
      <h3>7. Most Asked Interview Questions on Lists</h3>
      <CodeBlock filename="tuples.py">{`<span class="cmt"># Working with tuples</span>

tup = ()

tup = (50, 60, 70)

print(tup[0])

a, b, c = tup

print(b)

<span class="cmt"># Tuple slicing</span>

print(tup[1:3])

<span class="cmt"># Tuple length</span>

print(len(tup))

<span class="cmt"># Count function</span>

print(tup.count(50))

<span class="cmt"># Index function</span>

print(tup.index(60))`}</CodeBlock>
      <h2>Tuples in Python</h2>
      <h3>8. Working with Tuples</h3>
      <CodeBlock filename="list_vs_tuple.py">{`<span class="cmt"># List is mutable</span>

lst = [1, 2, 3]

lst[0] = 100

print(lst)

<span class="cmt"># Tuple is immutable</span>

tup = (1, 2, 3)

<span class="cmt"># tup[0] = 100   -> Error</span>

print(tup)`}</CodeBlock>
      <h3>9. List vs Tuple</h3>
      <h3>10. Most Asked Interview Questions on Tuples</h3>

      <PageNav
        prev={{ label: 'Strings', path: '/python/strings' }}
        next={{ label: 'Dictionaries and Sets', path: '/python/dictionaries-sets' }}
      />
    </DocPage>
  );
}
