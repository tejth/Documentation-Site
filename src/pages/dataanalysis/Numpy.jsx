import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonNumpy() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'DataAnalysis', href: '/dataanalysis' },
          { label: 'Numpy' }
        ]}
        title="Numpy"
        readTime="20 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>NumPy in Python</h2>

      <p>
        NumPy (Numerical Python) is a fundamental library for scientific
        computing in Python. It provides support for arrays and matrices,
        along with a collection of mathematical functions to operate on
        these data structures.
      </p>

      <h3>1. Installing and Importing NumPy</h3>

      <CodeBlock filename="install_numpy.py">{`# Install NumPy first.
# Run this command in the terminal, NOT inside the Python script.

# pip install numpy

# Import NumPy and give it the alias "np"
import numpy as np`}</CodeBlock>


      <h3>2. Creating NumPy Arrays</h3>

      <CodeBlock filename="creating_arrays.py">{`import numpy as np

# Creating a 1D array
arr1 = np.array([1, 2, 3, 4, 5])

print("1D Array:", arr1)

# Shape tells us the size of each dimension
print("Shape of arr1:", arr1.shape)

# Creating a 2D array using reshape()
arr2 = np.array([1, 2, 3, 4, 5])

# reshape() returns a new array.
# Store the result back in arr2 to change its shape.
arr2 = arr2.reshape((1, 5))

print("\\n2D Array using reshape:")
print(arr2)

print("Shape of arr2:", arr2.shape)

# Creating a 2D array directly
arr3 = np.array([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])

print("\\n2D Array:")
print(arr3)

print("Shape of arr3:", arr3.shape)`}</CodeBlock>


      <h3>3. NumPy Built-in Array Functions</h3>

      <CodeBlock filename="array_functions.py">{`import numpy as np

# np.arange()
# Creates numbers from start to stop with a given step.
# stop value is not included.

arange_array = np.arange(0, 10, 2)

print("np.arange(0, 10, 2):", arange_array)


# np.ones()
# Creates an array filled with 1s.

ones_array = np.ones((4, 5))

print("\\nArray of Ones:")
print(ones_array)


# np.eye()
# Creates an identity matrix.
# An identity matrix has 1s on the main diagonal
# and 0s everywhere else.

identity_matrix = np.eye(3)

print("\\nIdentity Matrix:")
print(identity_matrix)`}</CodeBlock>


      <h3>4. Array Properties</h3>

      <CodeBlock filename="array_properties.py">{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# dtype -> data type of elements
print("Data type:", arr.dtype)

# ndim -> number of dimensions
print("Number of dimensions:", arr.ndim)

# shape -> size of each dimension
print("Shape:", arr.shape)

# size -> total number of elements
print("Size:", arr.size)`}</CodeBlock>


      <h3>5. Vectorized Operations</h3>

      <p>
        NumPy allows us to perform mathematical operations directly on
        arrays without writing explicit loops.
      </p>

      <CodeBlock filename="vectorized_operations.py">{`import numpy as np

arr4 = np.array([1, 2, 3, 4, 5])

arr5 = np.array([66, 77, 33, 23, 12])

# Addition
print("Addition:", arr4 + arr5)

# Subtraction
print("Subtraction:", arr4 - arr5)

# Multiplication
print("Multiplication:", arr4 * arr5)

# Division
print("Division:", arr4 / arr5)`}</CodeBlock>


      <h3>6. Universal Functions (ufunc)</h3>

      <p>
        Universal functions, or ufuncs, perform mathematical operations
        element-by-element on NumPy arrays.
      </p>

      <CodeBlock filename="universal_functions.py">{`import numpy as np

arr6 = np.array([1, 2, 3, 4, 5])

# Square root of every element
print("Square Root:")
print(np.sqrt(arr6))

# Exponential of every element
print("\\nExponential:")
print(np.exp(arr6))

# Sine of every element
print("\\nSine:")
print(np.sin(arr6))

# Natural logarithm of every element
print("\\nNatural Log:")
print(np.log(arr6))`}</CodeBlock>


      <h3>7. Indexing and Slicing</h3>

      <CodeBlock filename="indexing_slicing.py">{`import numpy as np

arr7 = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

print("Original Array:")
print(arr7)


# Accessing a single element
# Syntax: array[row, column]

print("\\nElement at row 0, column 0:")
print(arr7[0, 0])


# Select rows from index 1 onwards
# and columns from index 2 onwards

print("\\narr7[1:, 2:]:")
print(arr7[1:, 2:])


# Select the first two rows

print("\\narr7[0:2]:")
print(arr7[0:2])


# Select first two rows
# and columns from index 1 onwards

print("\\narr7[0:2, 1:]:")
print(arr7[0:2, 1:])


# Select rows from index 1 onwards
# and columns from index 1 to 2
# The ending index 3 is excluded.

print("\\narr7[1:, 1:3]:")
print(arr7[1:, 1:3])`}</CodeBlock>


      <h3>8. Modifying a NumPy Array</h3>

      <CodeBlock filename="modify_array.py">{`import numpy as np

arr = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print("Original Array:")
print(arr)

# Change the element at row 0, column 0
# from 1 to 99

arr[0, 0] = 99

print("\\nModified Array:")
print(arr)`}</CodeBlock>


      <h3>9. Statistical Operations</h3>

      <CodeBlock filename="statistics.py">{`import numpy as np

arr8 = np.array([1, 2, 3, 4, 5])

# Calculate mean
mean = np.mean(arr8)

# Calculate standard deviation
std_dev = np.std(arr8)

print("Mean:", mean)

print("Standard Deviation:", std_dev)


# Other statistical functions

print("\\nStatistical Operations:")

print("Mean:", np.mean(arr8))

print("Median:", np.median(arr8))

print("Variance:", np.var(arr8))

# Note:
# NumPy uses np.var(), NOT np.variance()

print("Standard Deviation:", np.std(arr8))

print("Minimum:", np.min(arr8))

print("Maximum:", np.max(arr8))`}</CodeBlock>


      <h3>10. Normalization / Standardization</h3>

      <p>
        Standardization transforms data so that it has approximately a
        mean of 0 and a standard deviation of 1.
      </p>

      <CodeBlock filename="normalization.py">{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Calculate mean
mean = np.mean(arr)

# Calculate standard deviation
std_dev = np.std(arr)

# Standardization formula:
# (x - mean) / standard deviation

normalized_data = (arr - mean) / std_dev

print("Original Data:")
print(arr)

print("\\nNormalized Data:")
print(normalized_data)

print("\\nMean after normalization:")
print(np.mean(normalized_data))

print("Standard Deviation after normalization:")
print(np.std(normalized_data))`}</CodeBlock>


      <h3>11. Logical Operations and Filtering</h3>

      <p>
        NumPy allows us to filter array elements using Boolean conditions.
      </p>

      <CodeBlock filename="filtering.py">{`import numpy as np

arr8 = np.array([1, 2, 3, 4, 5])


# Select elements greater than 3

print("Elements greater than 3:")
print(arr8[arr8 > 3])


# Select elements greater than or equal to 3

print("\\nElements greater than or equal to 3:")
print(arr8[arr8 >= 3])


# Boolean condition
# Returns True or False for every element

print("\\nBoolean condition (arr8 > 3):")
print(arr8 > 3)`}</CodeBlock>


      <h3>12. Understanding Boolean Filtering</h3>

      <CodeBlock filename="boolean_filtering.py">{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# First, create a Boolean condition
condition = arr > 3

print("Boolean condition:")
print(condition)

# Use the condition to filter the array

filtered = arr[condition]

print("\\nFiltered values:")
print(filtered)

# We can also write it directly:

print("\\nDirect filtering:")
print(arr[arr > 3])`}</CodeBlock>


      <h3>13. Important NumPy Functions to Remember</h3>

      <CodeBlock filename="important_functions.py">{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Array creation
np.array([1, 2, 3])
np.arange(0, 10, 2)
np.ones((3, 3))
np.eye(3)

# Array properties
arr.dtype
arr.ndim
arr.shape
arr.size

# Mathematical operations
np.sqrt(arr)
np.exp(arr)
np.sin(arr)
np.log(arr)

# Statistical operations
np.mean(arr)
np.median(arr)
np.var(arr)
np.std(arr)
np.min(arr)
np.max(arr)

# Filtering
arr[arr > 3]`}</CodeBlock>


      <h3>14. Most Asked Interview Questions on NumPy</h3>

      <CodeBlock filename="interview_questions.txt">{`1. What is NumPy and why is it used?

2. What is the difference between a Python list and a NumPy array?

3. What does np.array() do?

4. What is the difference between a 1D and 2D NumPy array?

5. What does the reshape() function do?

6. What is the difference between shape, size, ndim, and dtype?

7. What is vectorization in NumPy?

8. What are NumPy universal functions (ufuncs)?

9. How does NumPy indexing work?

10. How do you slice a NumPy array?

11. How can you modify an element of a NumPy array?

12. How do you calculate mean, median, variance,
    and standard deviation?

13. What is standardization?
    
14. How can you filter elements from a NumPy array?

15. What is the difference between np.arange()
    and np.linspace()?

16. Why is NumPy generally faster than Python lists
    for numerical operations?`}</CodeBlock>


      <PageNav
        prev={{
          label: '',
          path: ''
        }}
        next={{
          label: 'Pandas',
          path: '/python/pandas'
        }}
      />
    </DocPage>
  );
}