import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonPandas() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'DataAnalysis', href: '/dataanalysis/pandas' },
          { label: 'Pandas' }
        ]}
        title="Pandas"
        readTime="25 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Pandas in Python</h2>

      <p>
        Pandas is a powerful data manipulation library in Python that is
        widely used for data analysis and data cleaning. It provides two
        primary data structures: Series and DataFrame.
      </p>

      <p>
        A <strong>Series</strong> is a one-dimensional labeled array,
        while a <strong>DataFrame</strong> is a two-dimensional table
        with labeled rows and columns.
      </p>

      <h3>1. Installing and Importing Pandas</h3>

      <CodeBlock filename="install_pandas.py">{`# Install Pandas first.
# Run this command in the terminal, NOT inside the Python script.

# pip install pandas

# Import Pandas and give it the alias "pd"

import pandas as pd`}</CodeBlock>


      <h3>2. Creating a Pandas Series</h3>

      <p>
        A Series is a one-dimensional labeled array. It can contain
        numbers, strings, or other Python objects.
      </p>

      <CodeBlock filename="series.py">{`import pandas as pd

# Creating a Series from a Python list

data = [1, 2, 3, 4, 5]

series = pd.Series(data)

print("Series created from a list:")
print(series)`}</CodeBlock>


      <h3>3. Creating a Series from a Dictionary</h3>

      <p>
        When a dictionary is converted into a Series, its keys become
        the index labels and its values become the Series data.
      </p>

      <CodeBlock filename="series_dictionary.py">{`import pandas as pd

# Dictionary keys become the index of the Series

data = {
    'a': 1,
    'b': 2,
    'c': 3
}

series_dict = pd.Series(data)

print("Series created from a dictionary:")
print(series_dict)`}</CodeBlock>


      <h3>4. Creating a Series with Custom Index</h3>

      <CodeBlock filename="custom_series.py">{`import pandas as pd

data = [10, 20, 30]

# Create custom index labels
index = ['a', 'b', 'c']

series_custom = pd.Series(
    data,
    index=index
)

print("Series with custom index:")
print(series_custom)`}</CodeBlock>


      <h3>5. Creating a DataFrame</h3>

      <p>
        A DataFrame is a two-dimensional table containing rows and
        columns. It is one of the most important data structures in
        Pandas.
      </p>

      <CodeBlock filename="dataframe.py">{`import pandas as pd

# A DataFrame is a two-dimensional table
# containing rows and columns.

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Bangalore', 'New York', 'Russia']
}

df = pd.DataFrame(data)

print("DataFrame:")
print(df)`}</CodeBlock>


      <h3>6. Reading a CSV File</h3>

      <CodeBlock filename="read_csv.py">{`import pandas as pd

# Make sure "data.csv" exists in the same folder
# as this Python file.

df = pd.read_csv("data.csv")

# head() displays the first 5 rows

print("First 5 rows:")
print(df.head(5))

# tail() displays the last 5 rows

print("\\nLast 5 rows:")
print(df.tail(5))`}</CodeBlock>


      <h3>7. Selecting a Column</h3>

      <CodeBlock filename="select_column.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Select the "Name" column

print("Name column:")
print(df['Name'])`}</CodeBlock>


      <h3>8. loc vs iloc</h3>

      <p>
        <strong>loc</strong> and <strong>iloc</strong> are two of the
        most important methods for selecting rows and columns in Pandas.
      </p>

      <CodeBlock filename="loc_vs_iloc.py">{`import pandas as pd

# VERY IMPORTANT:
#
# loc  = LABEL-based indexing
# iloc = INTEGER POSITION-based indexing
#
# Easy trick to remember:
#
# loc  -> LABEL
# iloc -> INTEGER LOCATION


# Example DataFrame:
#
#       Name    Age     City
# 0     Krish   25      Delhi
# 1     John    20      Mumbai
# 2     Jack    30      Jaipur
#
#
# Here:
#
# Index label 0 -> Krish
# Index label 1 -> John
# Index label 2 -> Jack
#
# The position is also:
#
# Position 0 -> Krish
# Position 1 -> John
# Position 2 -> Jack
#
# In this example, LABEL and POSITION are the same
# numbers.
#
# Therefore, loc and iloc may appear to give the same result.
#
# The difference becomes clearer when we use custom indexes.


data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)


# -------------------- LOC --------------------
#
# loc is used for LABEL-based indexing.
#
# Syntax:
#
# df.loc[row_label, column_label]
#
#
# Example:
#
# df.loc[1]
#
# Means:
#
# "Give me the row whose INDEX LABEL is 1."

print("First row using loc:")
print(df.loc[0])


# We can also specify both row and column labels.
#
# df.loc[1, 'Age']
#
# Means:
#
# "Give me the value from the row whose label is 1
# and the column whose label is 'Age'."
#
# Result:
# 20

print("\\nAge of John using loc:")
print(df.loc[1, 'Age'])


# -------------------- ILOC --------------------
#
# iloc is used for INTEGER POSITION-based indexing.
#
# Syntax:
#
# df.iloc[row_position, column_position]
#
#
# Example:
#
# df.iloc[1]
#
# Means:
#
# "Give me the SECOND row."
#
# Remember:
#
# Python positions start from 0.
#
# Position 0 -> First row
# Position 1 -> Second row
# Position 2 -> Third row

print("\\nSecond row using iloc:")
print(df.iloc[1])


# We can also specify both row and column positions.
#
# df.iloc[1, 1]
#
# First 1 -> second row
# Second 1 -> second column
#
#
# Our columns are:
#
# Position 0 -> Name
# Position 1 -> Age
# Position 2 -> City
#
# Therefore:
#
# df.iloc[1, 1] gives 20.

print("\\nAge of John using iloc:")
print(df.iloc[1, 1])`}</CodeBlock>


      <h3>9. The Real Difference Between loc and iloc</h3>

      <CodeBlock filename="loc_iloc_custom_index.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)


# Change the DataFrame's index

df.index = ['A', 'B', 'C']

print("DataFrame with custom index:")
print(df)


# Now our DataFrame looks like:
#
#       Name    Age     City
# A     Krish   25      Delhi
# B     John    20      Mumbai
# C     Jack    30      Jaipur


# -------------------- LOC WITH CUSTOM INDEX --------------------
#
# loc uses the LABEL.
#
# df.loc['B']
#
# Means:
#
# "Give me the row whose LABEL is B."

print("\\nUsing loc with label 'B':")
print(df.loc['B'])


# We can also use:
#
# df.loc['B', 'Age']
#
# 'B'   -> row LABEL
# 'Age' -> column LABEL
#
# Result:
# 20

print("\\nUsing loc to get John's age:")
print(df.loc['B', 'Age'])


# -------------------- ILOC WITH CUSTOM INDEX --------------------
#
# iloc ignores the label and uses POSITION.
#
# df.iloc[1]
#
# Means:
#
# "Give me the row at POSITION 1."
#
# Position 1 is the second row.
#
# The second row happens to be John.

print("\\nUsing iloc with position 1:")
print(df.iloc[1])


# df.iloc[1, 1]
#
# First 1  -> second row
# Second 1 -> second column
#
# Result:
# 20

print("\\nUsing iloc to get John's age:")
print(df.iloc[1, 1])`}</CodeBlock>


      <h3>10. Important Difference Between loc and iloc</h3>

      <CodeBlock filename="loc_iloc_difference.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Change the index

df.index = ['A', 'B', 'C']


# Our indexes are now:
#
# A
# B
# C


# This works because loc uses LABELS:

print("loc['B']:")
print(df.loc['B'])


# This also works because B is the SECOND row
# and position 1 represents the second row.

print("\\niloc[1]:")
print(df.iloc[1])


# ------------------------------------------------
# This will NOT work:
#
# df.iloc['B']
#
# Why?
#
# Because iloc accepts INTEGER POSITIONS only.
#
# iloc -> 0, 1, 2, 3...
#
# It does NOT accept labels such as:
#
# 'A', 'B', 'C'


# Similarly, this will NOT work:
#
# df.loc[1]
#
# Why?
#
# Because our labels are now:
#
# A, B, C
#
# There is no label called 1.
#
#
# FINAL RULE:
#
# loc  -> LABEL
# iloc -> INTEGER POSITION`}</CodeBlock>


      <h3>11. loc vs iloc Slicing</h3>

      <p>
        Another important difference between <strong>loc</strong> and
        <strong>iloc</strong> is how slicing works.
      </p>

      <CodeBlock filename="loc_iloc_slicing.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Change index labels

df.index = ['A', 'B', 'C']


# -------------------- LOC SLICING --------------------
#
# df.loc['A':'B']
#
# loc includes BOTH A and B.
#
# Important:
#
# loc includes the END LABEL when slicing.

print("loc slicing A to B:")
print(df.loc['A':'B'])


# -------------------- ILOC SLICING --------------------
#
# df.iloc[0:2]
#
# Includes position 0 and position 1.
# Does NOT include position 2.
#
# This follows normal Python slicing rules.

print("\\niloc slicing position 0 to 2:")
print(df.iloc[0:2])`}</CodeBlock>


      <h3>12. Easy Way to Remember loc and iloc</h3>

      <CodeBlock filename="loc_iloc_memory.py">{`# LOC  -> LABEL
# ILOC -> INTEGER POSITION
#
#
# Think of a classroom:
#
# Seat       Student
# A1         Rahul
# A2         Aman
# A3         Tej
#
#
# loc['A2']
#
# -> "Give me the student at seat A2."
#
#
# iloc[1]
#
# -> "Give me the SECOND student."
#
#
# FINAL MEMORY TRICK:
#
#       LOC  = LABEL 🏷️
#       ILOC = INTEGER POSITION 🔢
#
#
# If you remember this, you will understand
# the basic difference between loc and iloc.`}</CodeBlock>


      <h3>13. at and iat</h3>

      <p>
        <strong>at</strong> and <strong>iat</strong> are useful when you
        want to access a single value from a DataFrame.
      </p>

      <CodeBlock filename="at_iat.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Change index labels

df.index = ['A', 'B', 'C']


# at -> access ONE value using labels.
#
# Syntax:
#
# df.at[row_label, column_label]

print("Using at:")
print(df.at['B', 'Age'])


# iat -> access ONE value using integer positions.
#
# Syntax:
#
# df.iat[row_position, column_position]

print("\\nUsing iat:")
print(df.iat[1, 1])


# Easy way to remember:
#
# at  -> label
# iat -> integer position
#
#
# loc  -> labels, can select multiple rows/columns
# iloc -> positions, can select multiple rows/columns
# at   -> one value using labels
# iat  -> one value using positions`}</CodeBlock>


      <h3>14. Adding a New Column</h3>

      <CodeBlock filename="add_column.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Add a Salary column.
#
# The number of values must match
# the number of rows.

df['Salary'] = [8999, 31000, 21000]

print("After adding Salary:")
print(df)`}</CodeBlock>


      <h3>15. Dropping a Column</h3>

      <CodeBlock filename="drop_column.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur'],
    'Salary': [8999, 31000, 21000]
}

df = pd.DataFrame(data)

# Drop the Salary column.
#
# axis=1 means we are working with columns.
#
# inplace=True modifies the original DataFrame.

df.drop(
    'Salary',
    axis=1,
    inplace=True
)

print("After dropping Salary:")
print(df)`}</CodeBlock>


      <h3>16. Modifying a Column</h3>

      <CodeBlock filename="modify_column.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# Increase everyone's age by 1.

df['Age'] = df['Age'] + 1

print("After increasing Age by 1:")
print(df)`}</CodeBlock>


      <h3>17. Checking Data Types</h3>

      <CodeBlock filename="data_types.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'City': ['Delhi', 'Mumbai', 'Jaipur']
}

df = pd.DataFrame(data)

# dtypes shows the data type of every column.

print("Data types:")
print(df.dtypes)`}</CodeBlock>


      <h3>18. Descriptive Statistics</h3>

      <p>
        The <strong>describe()</strong> method provides useful statistical
        information about numerical columns.
      </p>

      <CodeBlock filename="describe.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack'],
    'Age': [25, 20, 30],
    'Salary': [8999, 31000, 21000]
}

df = pd.DataFrame(data)

# describe() provides statistical information such as:
#
# count
# mean
# standard deviation
# minimum
# maximum
# quartiles

print("Descriptive statistics:")
print(df.describe())`}</CodeBlock>


      <h3>19. GroupBy and Mean</h3>

      <p>
        The <strong>groupby()</strong> method is used to group data
        based on one or more columns and perform calculations on
        those groups.
      </p>

      <CodeBlock filename="groupby.py">{`import pandas as pd

data = {
    'Name': ['Krish', 'John', 'Jack', 'Rahul'],
    'Age': [25, 20, 25, 20],
    'Value': [100, 200, 300, 400]
}

df = pd.DataFrame(data)

# groupby() groups rows based on Age.
#
# mean() calculates the average Value
# for each Age group.

average_value = df.groupby('Age')['Value'].mean()

print("Average Value grouped by Age:")
print(average_value)`}</CodeBlock>


      <h3>20. Pandas Summary</h3>

      <CodeBlock filename="pandas_summary.py">{`# ============================================================
# PANDAS QUICK SUMMARY
# ============================================================


# Series
# ------------------------------------------------------------

# One-dimensional labeled data

pd.Series([1, 2, 3])


# DataFrame
# ------------------------------------------------------------

# Two-dimensional labeled table

pd.DataFrame({
    'Name': ['Tej', 'Rahul'],
    'Age': [22, 23]
})


# Reading CSV
# ------------------------------------------------------------

pd.read_csv("data.csv")


# Selecting a column
# ------------------------------------------------------------

df['Name']


# loc
# ------------------------------------------------------------

# LABEL-based indexing

df.loc['B', 'Age']


# iloc
# ------------------------------------------------------------

# INTEGER POSITION-based indexing

df.iloc[1, 1]


# at
# ------------------------------------------------------------

# ONE value using labels

df.at['B', 'Age']


# iat
# ------------------------------------------------------------

# ONE value using integer positions

df.iat[1, 1]


# Adding column
# ------------------------------------------------------------

df['Salary'] = [10000, 20000]


# Dropping column
# ------------------------------------------------------------

df.drop('Salary', axis=1)


# Data types
# ------------------------------------------------------------

df.dtypes


# Statistics
# ------------------------------------------------------------

df.describe()


# Grouping
# ------------------------------------------------------------

df.groupby('Age')['Value'].mean()


# ============================================================
# FINAL MEMORY TRICK
# ============================================================
#
# loc  -> LABEL 🏷️
# iloc -> INTEGER POSITION 🔢
# at   -> ONE VALUE using LABEL
# iat  -> ONE VALUE using INTEGER POSITION
#
# Series    -> 1D labeled data
# DataFrame -> 2D labeled table
# ============================================================`}</CodeBlock>


      <h3>21. Most Asked Interview Questions on Pandas</h3>

      <CodeBlock filename="interview_questions.txt">{`1. What is Pandas and why is it used?

2. What is the difference between a Series
   and a DataFrame?

3. How do you create a Pandas Series?

4. How do you create a DataFrame?

5. How do you read a CSV file using Pandas?

6. What does head() do?

7. What does tail() do?

8. What is the difference between loc and iloc?

9. What is the difference between at and iat?

10. Why does loc['B'] work while iloc['B'] does not?

11. What is the difference between loc and iloc
    when slicing?

12. Why does loc include the ending label
    during slicing?

13. How do you add a new column to a DataFrame?

14. How do you delete a column from a DataFrame?

15. What does axis=1 mean in Pandas?

16. What does inplace=True do?

17. What does dtypes return?

18. What does describe() do?

19. What is groupby() in Pandas?

20. How do you calculate the mean of grouped data?

21. What is the difference between Pandas
    and NumPy?

22. Why is Pandas useful for data cleaning?`}</CodeBlock>


      <PageNav
        prev={{
          label: 'NumPy',
          path: '/dataanalysis/numpy'
        }}
        next={{
          label: 'Matplotlib',
          path: '/python/matplotlib'
        }}
      />
    </DocPage>
  );
}