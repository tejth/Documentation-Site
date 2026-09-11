import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PandasDataCleaning = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Data Manipulation', href: '/dataanalysis/datamanipulation' },
          { label: 'Data Cleaning & Transformation' }
        ]}
        title="Pandas Data Cleaning & Transformation"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* ============================= */}
      {/* INTRODUCTION */}
      {/* ============================= */}

      <section>
        <h2>📘 Pandas Data Cleaning & Transformation</h2>

        <p>
          In real-world projects, data is rarely perfect. It may contain
          missing values, incorrect column names, different data types,
          duplicate information, or data spread across multiple files.
        </p>

        <p>
          Pandas provides many useful functions to inspect, clean,
          transform, analyze, combine and save data.
        </p>

        <div className="info-box">
          <strong>
            Inspect → Clean → Transform → Analyze → Combine → Save
          </strong>
        </div>

        <p>
          In this page, we will learn some of the most commonly used Pandas
          operations for data cleaning and analysis.
        </p>
      </section>

      {/* ============================= */}
      {/* ISNULL */}
      {/* ============================= */}

      <section>
        <h2>1. df.isnull()</h2>

        <h3>What is isnull()?</h3>

        <p>
          <code>isnull()</code> checks whether values in a DataFrame are
          <strong> missing (NaN)</strong>.
        </p>

        <p>It returns:</p>

        <ul>
          <li><strong>True</strong> → value is missing</li>
          <li><strong>False</strong> → value is present</li>
        </ul>

        <h3>Example</h3>

        <CodeBlock filename="isnull_example.py">{`import pandas as pd


df = pd.DataFrame({
    'Name': ['Amit', 'Rahul', 'Priya'],
    'Age': [20, None, 22],
    'City': ['Delhi', 'Jaipur', None]
})


print(df)


# Check missing values
print(df.isnull())`}</CodeBlock>

        <h3>Input</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Amit</td>
              <td>20</td>
              <td>Delhi</td>
            </tr>

            <tr>
              <td>Rahul</td>
              <td>NaN</td>
              <td>Jaipur</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>22</td>
              <td>NaN</td>
            </tr>
          </tbody>
        </table>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`    Name    Age   City
0  False  False  False
1  False   True  False
2  False  False   True`}</CodeBlock>

        <div className="info-box">
          <strong>
            NaN → True &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Value → False
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* ISNULL ANY */}
      {/* ============================= */}

      <section>
        <h2>2. df.isnull().any(axis=1)</h2>

        <p>
          This checks whether each row contains <strong>at least one missing
          value</strong>.
        </p>

        <h3>Incorrect Code</h3>

        <CodeBlock filename="incorrect.py">{`df.isnull.any(axis=1)`}</CodeBlock>

        <p>
          ❌ This is incorrect because <code>isnull</code> is a function and
          must be called using <code>()</code>.
        </p>

        <h3>Correct Code</h3>

        <CodeBlock filename="isnull_any.py">{`df.isnull().any(axis=1)`}</CodeBlock>

        <p>
          First, <code>isnull()</code> identifies missing values.
          Then <code>any()</code> checks whether any value is True.
        </p>

        <h3>Example</h3>

        <CodeBlock filename="row_missing_values.py">{`print(df.isnull().any(axis=1))`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`0    False
1     True
2     True
dtype: bool`}</CodeBlock>

        <h3>What does axis=1 mean?</h3>

        <p>
          <code>axis=1</code> means <strong>row-wise</strong>.
        </p>

        <CodeBlock filename="axis.txt">{`axis=0 → column-wise ↓

axis=1 → row-wise →`}</CodeBlock>

        <div className="info-box">
          <strong>
            df.isnull().any(axis=1)
          </strong>
          <br />
          Checks each row and asks: "Does this row contain any missing value?"
        </div>
      </section>

      {/* ============================= */}
      {/* ISNULL SUM */}
      {/* ============================= */}

      <section>
        <h2>3. df.isnull().sum()</h2>

        <p>
          <code>df.isnull().sum()</code> counts the number of missing values
          in each column.
        </p>

        <CodeBlock filename="missing_count.py">{`print(df.isnull().sum())`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`Name    0
Age     1
City    1
dtype: int64`}</CodeBlock>

        <h3>Meaning</h3>

        <CodeBlock filename="meaning.txt">{`Name → 0 missing
Age  → 1 missing
City → 1 missing`}</CodeBlock>

        <p>
          This is one of the most commonly used commands during
          <strong> data cleaning</strong>.
        </p>

        <h3>Remember</h3>

        <CodeBlock filename="quick_revision.txt">{`df.isnull()
→ Shows where missing values are.

df.isnull().sum()
→ Counts missing values.`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* FILLNA */}
      {/* ============================= */}

      <section>
        <h2>4. df.fillna(0)</h2>

        <p>
          <code>fillna()</code> is used to <strong>replace missing values</strong>.
        </p>

        <CodeBlock filename="fillna.py">{`df_filled = df.fillna(0)

print(df_filled)`}</CodeBlock>

        <p>
          It replaces every <code>NaN</code> with <code>0</code>.
        </p>

        <h3>Before</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Amit</td>
              <td>20</td>
              <td>Delhi</td>
            </tr>

            <tr>
              <td>Rahul</td>
              <td>NaN</td>
              <td>Jaipur</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>22</td>
              <td>NaN</td>
            </tr>
          </tbody>
        </table>

        <h3>After fillna(0)</h3>

        <CodeBlock filename="filled_output.txt">{`    Name   Age    City
0   Amit   20.0  Delhi
1   Rahul   0.0  Jaipur
2   Priya  22.0  0`}</CodeBlock>

        <h3>Real-world example</h3>

        <p>
          Suppose a dataset contains missing salary values.
        </p>

        <CodeBlock filename="salary_fill.py">{`df['Salary'] = df['Salary'].fillna(0)`}</CodeBlock>

        <p>
          The missing salary values will be replaced with <code>0</code>.
        </p>
      </section>

      {/* ============================= */}
      {/* DTYPES */}
      {/* ============================= */}

      <section>
        <h2>5. df.dtypes</h2>

        <p>
          <code>dtypes</code> tells us the <strong>data type of every
          column</strong>.
        </p>

        <CodeBlock filename="dtypes.py">{`print(df.dtypes)`}</CodeBlock>

        <h3>Example Output</h3>

        <CodeBlock filename="output.txt">{`Name     object
Age     float64
City     object
dtype: object`}</CodeBlock>

        <h3>Common Pandas Data Types</h3>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>int64</code></td>
              <td>Integer</td>
            </tr>

            <tr>
              <td><code>float64</code></td>
              <td>Decimal number</td>
            </tr>

            <tr>
              <td><code>object</code></td>
              <td>Usually text/string</td>
            </tr>

            <tr>
              <td><code>bool</code></td>
              <td>True/False</td>
            </tr>

            <tr>
              <td><code>datetime64</code></td>
              <td>Date/time</td>
            </tr>
          </tbody>
        </table>

        <h3>Example</h3>

        <CodeBlock filename="data_types.py">{`df = pd.DataFrame({
    'Name': ['Amit', 'Rahul'],
    'Age': [20, 21],
    'Salary': [25000.5, 30000.5]
})


print(df.dtypes)`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`Name       object
Age         int64
Salary    float64
dtype: object`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* RENAME */}
      {/* ============================= */}

      <section>
        <h2>6. df.rename()</h2>

        <p>
          <code>rename()</code> is used to <strong>change column names</strong>.
        </p>

        <CodeBlock filename="rename.py">{`df = df.rename(
    columns={
        'Sale Date': 'Sales Date'
    }
)`}</CodeBlock>

        <p>
          This changes:
        </p>

        <CodeBlock filename="rename_example.txt">{`Sale Date
    ↓
Sales Date`}</CodeBlock>

        <h3>General Syntax</h3>

        <CodeBlock filename="rename_syntax.py">{`df.rename(columns={
    'old_name': 'new_name'
})`}</CodeBlock>

        <h3>Rename Multiple Columns</h3>

        <CodeBlock filename="multiple_rename.py">{`df.rename(columns={
    'Name': 'Employee Name',
    'Age': 'Employee Age'
})`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* HEAD */}
      {/* ============================= */}

      <section>
        <h2>7. df.head()</h2>

        <p>
          <code>head()</code> displays the <strong>first 5 rows</strong> of a
          DataFrame by default.
        </p>

        <CodeBlock filename="head.py">{`print(df.head())`}</CodeBlock>

        <h3>Want First 3 Rows?</h3>

        <CodeBlock filename="head_3.py">{`df.head(3)`}</CodeBlock>

        <h3>Remember</h3>

        <CodeBlock filename="head_revision.txt">{`df.head()
→ First 5 rows

df.head(10)
→ First 10 rows

df.head(3)
→ First 3 rows`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* FILLNA MEAN ASTYPE */}
      {/* ============================= */}

      <section>
        <h2>8. fillna() + mean() + astype(int)</h2>

        <p>
          Consider the following code:
        </p>

        <CodeBlock filename="fillna_mean.py">{`df['Value_new'] = df['Value'].fillna(
    df['Value'].mean()
).astype(int)`}</CodeBlock>

        <p>
          This single line performs <strong>three operations</strong>.
        </p>

        <h3>Step 1: df['Value'].mean()</h3>

        <CodeBlock filename="mean.py">{`df['Value'].mean()`}</CodeBlock>

        <p>
          Suppose the values are:
        </p>

        <CodeBlock filename="values.txt">{`100
200
NaN
300`}</CodeBlock>

        <p>The average is:</p>

        <CodeBlock filename="calculation.txt">{`(100 + 200 + 300) / 3 = 200`}</CodeBlock>

        <h3>Step 2: fillna(mean)</h3>

        <CodeBlock filename="fill_with_mean.py">{`df['Value'].fillna(
    df['Value'].mean()
)`}</CodeBlock>

        <p>
          The missing value is replaced with <code>200</code>.
        </p>

        <CodeBlock filename="after_fill.txt">{`100
200
200
300`}</CodeBlock>

        <h3>Step 3: astype(int)</h3>

        <CodeBlock filename="astype.py">{`.astype(int)`}</CodeBlock>

        <p>
          This converts the values into integers.
        </p>

        <h3>Complete Code</h3>

        <CodeBlock filename="complete_example.py">{`df['Value_new'] = df['Value'].fillna(
    df['Value'].mean()
).astype(int)`}</CodeBlock>

        <h3>Result</h3>

        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Value_new</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>100</td>
              <td>100</td>
            </tr>

            <tr>
              <td>200</td>
              <td>200</td>
            </tr>

            <tr>
              <td>NaN</td>
              <td>200</td>
            </tr>

            <tr>
              <td>300</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>
            Missing value → Mean value → Integer
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* APPLY */}
      {/* ============================= */}

      <section>
        <h2>9. apply()</h2>

        <p>
          <code>apply()</code> allows us to apply a function to values in a
          Series or DataFrame.
        </p>

        <CodeBlock filename="apply.py">{`df['New Value'] = df['Value'].apply(
    lambda x: x**2
)`}</CodeBlock>

        <p>
          Here we are <strong>squaring every value</strong>.
        </p>

        <h3>Understanding lambda</h3>

        <CodeBlock filename="lambda.py">{`lambda x: x**2`}</CodeBlock>

        <p>
          It means:
        </p>

        <div className="info-box">
          <strong>
            Take a value x and return x².
          </strong>
        </div>

        <h3>Example</h3>

        <CodeBlock filename="apply_example.py">{`import pandas as pd


df = pd.DataFrame({
    'Value': [2, 3, 4, 5]
})


df['New Value'] = df['Value'].apply(
    lambda x: x**2
)


print(df)`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`   Value  New Value
0      2           4
1      3           9
2      4          16
3      5          25`}</CodeBlock>

        <h3>Simple Way to Understand</h3>

        <CodeBlock filename="apply_flow.txt">{`apply(lambda x: x**2)

Take every value
       ↓
Square it
       ↓
Store result`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* GROUPBY */}
      {/* ============================= */}

      <section>
        <h2>10. groupby()</h2>

        <p>
          <code>groupby()</code> is one of the most important functions in
          Pandas.
        </p>

        <p>
          It is used when we want to <strong>group data based on a
          column</strong> and then perform calculations.
        </p>

        <h3>Example Data</h3>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Laptop</td>
              <td>100</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>200</td>
            </tr>

            <tr>
              <td>Laptop</td>
              <td>300</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>

        <p>
          If we want the average value for each product:
        </p>

        <CodeBlock filename="groupby_mean.py">{`df.groupby('Product')['Value'].mean()`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* GROUPBY MEAN */}
      {/* ============================= */}

      <section>
        <h2>11. groupby().mean()</h2>

        <p>
          The following code groups rows according to <code>Product</code>,
          selects <code>Value</code>, and calculates the average.
        </p>

        <CodeBlock filename="groupby_mean.py">{`grouped_mean = df.groupby(
    'Product'
)['Value'].mean()`}</CodeBlock>

        <h3>Calculation</h3>

        <p><strong>Laptop:</strong></p>

        <CodeBlock filename="laptop_average.txt">{`(100 + 300) / 2 = 200`}</CodeBlock>

        <p><strong>Phone:</strong></p>

        <CodeBlock filename="phone_average.txt">{`(200 + 400) / 2 = 300`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`Product
Laptop    200.0
Phone     300.0
Name: Value, dtype: float64`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* GROUPBY MULTIPLE COLUMNS */}
      {/* ============================= */}

      <section>
        <h2>12. groupby() with Multiple Columns</h2>

        <p>
          We can group data using more than one column.
        </p>

        <CodeBlock filename="groupby_multiple.py">{`grouped_sum = df.groupby(
    ['Product', 'Region']
)['Value'].sum()`}</CodeBlock>

        <p>
          Here we group using:
        </p>

        <CodeBlock filename="group_columns.txt">{`Product
   +
Region`}</CodeBlock>

        <h3>Example</h3>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Region</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Laptop</td>
              <td>North</td>
              <td>100</td>
            </tr>

            <tr>
              <td>Laptop</td>
              <td>North</td>
              <td>200</td>
            </tr>

            <tr>
              <td>Laptop</td>
              <td>South</td>
              <td>300</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>North</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock filename="groupby_multiple.py">{`df.groupby(
    ['Product', 'Region']
)['Value'].sum()`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`Product  Region
Laptop   North     300
         South     300
Phone    North     400
Name: Value, dtype: int64`}</CodeBlock>

        <h3>Meaning</h3>

        <CodeBlock filename="meaning.txt">{`Laptop + North → 100 + 200 = 300
Laptop + South → 300
Phone + North  → 400`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* GROUPBY AGG */}
      {/* ============================= */}

      <section>
        <h2>13. groupby().agg()</h2>

        <p>
          <code>agg()</code> means <strong>aggregation</strong>.
        </p>

        <p>
          It allows us to perform multiple calculations at the same time.
        </p>

        <CodeBlock filename="groupby_agg.py">{`grouped_agg = df.groupby(
    'Region'
)['Value'].agg(
    ['mean', 'sum', 'count']
)`}</CodeBlock>

        <h3>Meaning</h3>

        <ul>
          <li><code>mean</code> → Average</li>
          <li><code>sum</code> → Total</li>
          <li><code>count</code> → Number of values</li>
        </ul>

        <h3>Example</h3>

        <CodeBlock filename="aggregation_example.py">{`Region   Value
North    100
North    200
North    300
South    400
South    500`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`        mean  sum  count
Region
North  200.0  600      3
South  450.0  900      2`}</CodeBlock>

        <h3>Understanding North</h3>

        <CodeBlock filename="north_calculation.txt">{`Values = 100, 200, 300

mean  = 200
sum   = 600
count = 3`}</CodeBlock>

        <div className="info-box">
          <strong>
            agg() = Perform multiple calculations together
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* MERGE */}
      {/* ============================= */}

      <section>
        <h2>🔗 14. pd.merge()</h2>

        <p>
          <code>merge()</code> is used to <strong>combine two
          DataFrames</strong>.
        </p>

        <p>
          It is similar to a <strong>JOIN in SQL</strong>.
        </p>

        <CodeBlock filename="merge_data.py">{`df1 = pd.DataFrame({
    'Key': ['A', 'B', 'C'],
    'Value1': [1, 2, 3]
})


df2 = pd.DataFrame({
    'Key': ['A', 'B', 'D'],
    'Value2': [5, 7, 9]
})`}</CodeBlock>

        <h3>df1</h3>

        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value1</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>A</td>
              <td>1</td>
            </tr>

            <tr>
              <td>B</td>
              <td>2</td>
            </tr>

            <tr>
              <td>C</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <h3>df2</h3>

        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value2</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>A</td>
              <td>5</td>
            </tr>

            <tr>
              <td>B</td>
              <td>7</td>
            </tr>

            <tr>
              <td>D</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================= */}
      {/* INNER MERGE */}
      {/* ============================= */}

      <section>
        <h2>15. pd.merge(..., how='inner')</h2>

        <p>
          An inner merge keeps only the keys that exist in
          <strong> both DataFrames</strong>.
        </p>

        <CodeBlock filename="inner_merge.py">{`pd.merge(
    df1,
    df2,
    on="Key",
    how="inner"
)`}</CodeBlock>

        <h3>on="Key"</h3>

        <p>
          This tells Pandas to match both DataFrames using the
          <code>Key</code> column.
        </p>

        <h3>how="inner"</h3>

        <p>
          This tells Pandas to keep only common keys.
        </p>

        <CodeBlock filename="common_keys.txt">{`df1 → A B C
df2 → A B D

Common → A B`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`  Key  Value1  Value2
0   A       1       5
1   B       2       7`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* MERGE TYPES */}
      {/* ============================= */}

      <section>
        <h2>🔥 Types of Merge</h2>

        <p>
          The <code>how</code> parameter determines which rows are kept.
        </p>

        <table>
          <thead>
            <tr>
              <th>Merge Type</th>
              <th>Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>inner</code></td>
              <td>Keep only common keys</td>
            </tr>

            <tr>
              <td><code>left</code></td>
              <td>Keep everything from left DataFrame</td>
            </tr>

            <tr>
              <td><code>right</code></td>
              <td>Keep everything from right DataFrame</td>
            </tr>

            <tr>
              <td><code>outer</code></td>
              <td>Keep everything from both DataFrames</td>
            </tr>
          </tbody>
        </table>

        <h3>Inner</h3>

        <CodeBlock filename="inner.py">{`pd.merge(
    df1,
    df2,
    on='Key',
    how='inner'
)`}</CodeBlock>

        <CodeBlock filename="inner_result.txt">{`A B`}</CodeBlock>

        <h3>Left</h3>

        <CodeBlock filename="left.py">{`pd.merge(
    df1,
    df2,
    on='Key',
    how='left'
)`}</CodeBlock>

        <CodeBlock filename="left_result.txt">{`A B C`}</CodeBlock>

        <h3>Right</h3>

        <CodeBlock filename="right.py">{`pd.merge(
    df1,
    df2,
    on='Key',
    how='right'
)`}</CodeBlock>

        <CodeBlock filename="right_result.txt">{`A B D`}</CodeBlock>

        <h3>Outer</h3>

        <CodeBlock filename="outer.py">{`pd.merge(
    df1,
    df2,
    on='Key',
    how='outer'
)`}</CodeBlock>

        <CodeBlock filename="outer_result.txt">{`A B C D`}</CodeBlock>

        <div className="info-box">
          <strong>
            inner → common
            <br />
            left → everything from left
            <br />
            right → everything from right
            <br />
            outer → everything
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* STRINGIO */}
      {/* ============================= */}

      <section>
        <h2>📄 16. StringIO</h2>

        <p>
          <code>StringIO</code> allows Python to treat a
          <strong> string like a file</strong>.
        </p>

        <CodeBlock filename="stringio_import.py">{`from io import StringIO`}</CodeBlock>

        <p>
          This is useful when JSON or other file-like data is stored directly
          inside a Python string.
        </p>

        <div className="info-box">
          <strong>
            StringIO = Treat a string as a file
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* READ JSON */}
      {/* ============================= */}

      <section>
        <h2>17. Reading JSON with pd.read_json()</h2>

        <p>
          Pandas provides <code>read_json()</code> for reading JSON data into
          a DataFrame.
        </p>

        <h3>Example</h3>

        <CodeBlock filename="read_json.py">{`import pandas as pd
from io import StringIO


data = '''
[
    {"name": "James", "age": 25},
    {"name": "John", "age": 30}
]
'''


df = pd.read_json(
    StringIO(data)
)


print(df)`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`    name  age
0  James   25
1   John   30`}</CodeBlock>

        <h3>Flow</h3>

        <CodeBlock filename="json_flow.txt">{`JSON string
     ↓
 StringIO
     ↓
pd.read_json()
     ↓
DataFrame`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* JSON OBJECT */}
      {/* ============================= */}

      <section>
        <h2>18. JSON Structure and Pandas</h2>

        <p>
          JSON structure matters when reading JSON data into Pandas.
        </p>

        <p>
          For example, a JSON object may look like:
        </p>

        <CodeBlock filename="employee.json">{`{
    "employee_name": "James",
    "email": "james@gmail.com",
    "job_profile": [
        {
            "title1": "Team lead",
            "title2": "Sr. Developer"
        }
    ]
}`}</CodeBlock>

        <p>
          A practical DataFrame-friendly structure can be represented as a
          list of records.
        </p>

        <CodeBlock filename="json_records.py">{`data = '''
[
    {
        "employee_name": "James",
        "email": "james@gmail.com",
        "job_profile": "Team lead"
    }
]
'''


df = pd.read_json(
    StringIO(data)
)


print(df)`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.txt">{`  employee_name          email job_profile
0         James  james@gmail.com   Team lead`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* TO JSON */}
      {/* ============================= */}

      <section>
        <h2>19. df.to_json()</h2>

        <p>
          <code>to_json()</code> converts a DataFrame into
          <strong> JSON format</strong>.
        </p>

        <CodeBlock filename="to_json.py">{`df.to_json(
    orient="index"
)`}</CodeBlock>

        <h3>Example</h3>

        <CodeBlock filename="dataframe_to_json.py">{`df = pd.DataFrame({
    'Name': ['Amit', 'Rahul'],
    'Age': [20, 21]
})


print(
    df.to_json(
        orient='index'
    )
)`}</CodeBlock>

        <h3>Output</h3>

        <CodeBlock filename="output.json">{`{
  "0": {
    "Name": "Amit",
    "Age": 20
  },
  "1": {
    "Name": "Rahul",
    "Age": 21
  }
}`}</CodeBlock>

        <h3>What does orient="index" mean?</h3>

        <p>
          Each DataFrame index becomes a JSON key.
        </p>

        <CodeBlock filename="index_mapping.txt">{`DataFrame index
       ↓
   JSON key

index 0 → "0"
index 1 → "1"`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* TO CSV */}
      {/* ============================= */}

      <section>
        <h2>20. df.to_csv()</h2>

        <p>
          <code>to_csv()</code> saves a DataFrame into a
          <strong> CSV file</strong>.
        </p>

        <CodeBlock filename="to_csv.py">{`df.to_csv(
    "wine.csv"
)`}</CodeBlock>

        <p>
          This creates a file named:
        </p>

        <CodeBlock filename="file_name.txt">{`wine.csv`}</CodeBlock>

        <h3>Example</h3>

        <CodeBlock filename="save_csv.py">{`df = pd.DataFrame({
    'Name': ['Amit', 'Rahul'],
    'Age': [20, 21]
})


df.to_csv(
    "students.csv"
)`}</CodeBlock>

        <p>
          By default, Pandas also saves the DataFrame index.
        </p>

        <h3>Without Index</h3>

        <CodeBlock filename="csv_without_index.py">{`df.to_csv(
    "students.csv",
    index=False
)`}</CodeBlock>

        <p>
          For most normal CSV exports, this is commonly used:
        </p>

        <CodeBlock filename="recommended_csv.py">{`df.to_csv(
    "file.csv",
    index=False
)`}</CodeBlock>

        <div className="info-box">
          <strong>
            index=False → Don't save the DataFrame index in the CSV file.
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* READ HTML */}
      {/* ============================= */}

      <section>
        <h2>🌐 21. pd.read_html()</h2>

        <p>
          <code>read_html()</code> reads HTML tables from a webpage and
          converts them into Pandas DataFrames.
        </p>

        <h3>Example</h3>

        <CodeBlock filename="read_html.py">{`url = "https://example.com"


tables = pd.read_html(
    url
)`}</CodeBlock>

        <p>
          The result is usually a <strong>list of DataFrames</strong>.
        </p>

        <CodeBlock filename="first_table.py">{`tables[0]`}</CodeBlock>

        <p>
          This means:
        </p>

        <div className="info-box">
          <strong>
            Give me the first table found on the webpage.
          </strong>
        </div>

        <h3>Flow</h3>

        <CodeBlock filename="html_flow.txt">{`Website
   ↓
HTML table
   ↓
pd.read_html()
   ↓
List of DataFrames`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* MATCH */}
      {/* ============================= */}

      <section>
        <h2>22. pd.read_html(url, match="Country", header=0)</h2>

        <p>
          The <code>match</code> and <code>header</code> parameters are useful
          when reading HTML tables.
        </p>

        <h3>match="Country"</h3>

        <p>
          A webpage may contain many tables.
        </p>

        <CodeBlock filename="match.py">{`pd.read_html(
    url,
    match="Country"
)`}</CodeBlock>

        <p>
          This tells Pandas to find tables containing the text
          <strong> "Country"</strong>.
        </p>

        <h3>Example</h3>

        <CodeBlock filename="html_tables.txt">{`Table 1:

Name    Age
Amit    20
Rahul   21


Table 2:

Country    Capital
India      Delhi
Japan      Tokyo`}</CodeBlock>

        <p>
          Using <code>match="Country"</code> helps Pandas select the table
          containing "Country".
        </p>
      </section>

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <section>
        <h2>23. header=0</h2>

        <p>
          <code>header=0</code> means:
        </p>

        <div className="info-box">
          <strong>
            Use row 0 as the column header.
          </strong>
        </div>

        <h3>Example</h3>

        <CodeBlock filename="header_example.txt">{`Country    Capital
India      Delhi
Japan      Tokyo`}</CodeBlock>

        <p>
          Pandas treats the first row as the column names:
        </p>

        <CodeBlock filename="headers.txt">{`Country    Capital
   ↓          ↓
Column 1    Column 2`}</CodeBlock>

        <h3>Complete Example</h3>

        <CodeBlock filename="read_html_parameters.py">{`pd.read_html(
    url,
    match="Country",
    header=0
)`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* REVISION TABLE */}
      {/* ============================= */}

      <section>
        <h2>🧠 Complete Revision Table</h2>

        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>df.isnull()</code></td>
              <td>Find missing values</td>
            </tr>

            <tr>
              <td><code>df.isnull().any(axis=1)</code></td>
              <td>Find rows containing missing values</td>
            </tr>

            <tr>
              <td><code>df.isnull().sum()</code></td>
              <td>Count missing values per column</td>
            </tr>

            <tr>
              <td><code>df.fillna(0)</code></td>
              <td>Replace missing values with 0</td>
            </tr>

            <tr>
              <td><code>df.dtypes</code></td>
              <td>Check column data types</td>
            </tr>

            <tr>
              <td><code>df.rename()</code></td>
              <td>Rename columns</td>
            </tr>

            <tr>
              <td><code>df.head()</code></td>
              <td>Show first 5 rows</td>
            </tr>

            <tr>
              <td><code>df.mean()</code></td>
              <td>Calculate average</td>
            </tr>

            <tr>
              <td><code>astype(int)</code></td>
              <td>Convert to integer</td>
            </tr>

            <tr>
              <td><code>apply()</code></td>
              <td>Apply a function</td>
            </tr>

            <tr>
              <td><code>lambda</code></td>
              <td>Create a small anonymous function</td>
            </tr>

            <tr>
              <td><code>groupby()</code></td>
              <td>Group data</td>
            </tr>

            <tr>
              <td><code>mean()</code></td>
              <td>Average</td>
            </tr>

            <tr>
              <td><code>sum()</code></td>
              <td>Total</td>
            </tr>

            <tr>
              <td><code>count()</code></td>
              <td>Number of values</td>
            </tr>

            <tr>
              <td><code>agg()</code></td>
              <td>Perform multiple calculations</td>
            </tr>

            <tr>
              <td><code>pd.merge()</code></td>
              <td>Combine DataFrames</td>
            </tr>

            <tr>
              <td><code>how='inner'</code></td>
              <td>Keep common records</td>
            </tr>

            <tr>
              <td><code>StringIO()</code></td>
              <td>Treat string like a file</td>
            </tr>

            <tr>
              <td><code>pd.read_json()</code></td>
              <td>Read JSON into DataFrame</td>
            </tr>

            <tr>
              <td><code>df.to_json()</code></td>
              <td>Convert DataFrame to JSON</td>
            </tr>

            <tr>
              <td><code>df.to_csv()</code></td>
              <td>Save DataFrame as CSV</td>
            </tr>

            <tr>
              <td><code>pd.read_html()</code></td>
              <td>Read HTML tables</td>
            </tr>

            <tr>
              <td><code>match=</code></td>
              <td>Select table containing specified text</td>
            </tr>

            <tr>
              <td><code>header=0</code></td>
              <td>Use first row as column names</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================= */}
      {/* MOST IMPORTANT */}
      {/* ============================= */}

      <section>
        <h2>🎯 Most Important Concepts to Remember</h2>

        <h3>Missing Data</h3>

        <CodeBlock filename="missing_data_revision.py">{`df.isnull()
→ Where are the missing values?


df.isnull().sum()
→ How many missing values?


df.fillna(0)
→ Replace missing values.`}</CodeBlock>

        <h3>Data Transformation</h3>

        <CodeBlock filename="transformation_revision.py">{`df['Value'].apply(
    lambda x: x**2
)

→ Apply an operation to every value.`}</CodeBlock>

        <h3>Grouping</h3>

        <CodeBlock filename="grouping_revision.py">{`df.groupby(
    'Product'
)['Value'].mean()

→ Average Value for each Product.


df.groupby(
    'Product'
)['Value'].sum()

→ Total Value for each Product.


df.groupby(
    'Region'
)['Value'].agg(
    ['mean', 'sum', 'count']
)

→ Multiple calculations at once.`}</CodeBlock>

        <h3>Combining Data</h3>

        <CodeBlock filename="merge_revision.py">{`pd.merge(
    df1,
    df2,
    on='Key',
    how='inner'
)

→ Join two DataFrames using a common column.`}</CodeBlock>

        <h3>File Handling</h3>

        <CodeBlock filename="file_handling_revision.py">{`pd.read_json()
→ JSON → DataFrame


df.to_json()
→ DataFrame → JSON


df.to_csv()
→ DataFrame → CSV file


pd.read_html()
→ HTML table → DataFrame`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* MENTAL MODEL */}
      {/* ============================= */}

      <section>
        <h2>⭐ One-Line Mental Model</h2>

        <p>
          Think of Pandas data analysis as a complete workflow:
        </p>

        <CodeBlock filename="pandas_workflow.txt">{`                    PANDAS
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       CLEAN        MODIFY       ANALYZE
          │            │            │
      isnull()      apply()      groupby()
      fillna()      rename()      agg()
      dtypes        astype()      mean()
          │            │            │
          └────────────┼────────────┘
                       ↓
                    COMBINE
                       │
                    merge()
                       ↓
                  SAVE / READ
                       │
              ┌────────┼────────┐
              ↓        ↓        ↓
            JSON      CSV      HTML`}</CodeBlock>

        <p>
          The overall process is:
        </p>

        <div className="info-box">
          <strong>
            First inspect and clean the data → transform it → analyze and
            group it → combine it with other data → read or save it in
            different formats.
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* INTERVIEW QUESTIONS */}
      {/* ============================= */}

      <section>
        <h2>🎯 Interview Questions</h2>

        <h3>1. What does isnull() do?</h3>

        <p>
          It checks whether values in a DataFrame are missing.
        </p>

        <h3>2. What is the difference between isnull() and isnull().sum()?</h3>

        <p>
          <code>isnull()</code> shows where missing values exist, while
          <code>isnull().sum()</code> counts missing values in each column.
        </p>

        <h3>3. What does axis=1 mean?</h3>

        <p>
          <code>axis=1</code> means the operation is performed row-wise.
        </p>

        <h3>4. What is fillna() used for?</h3>

        <p>
          It is used to replace missing values.
        </p>

        <h3>5. What does df.dtypes return?</h3>

        <p>
          It returns the data type of each DataFrame column.
        </p>

        <h3>6. What is groupby() used for?</h3>

        <p>
          It groups data based on one or more columns so that calculations
          can be performed on each group.
        </p>

        <h3>7. What is agg()?</h3>

        <p>
          <code>agg()</code> allows multiple aggregation operations such as
          mean, sum and count to be performed together.
        </p>

        <h3>8. What is pd.merge()?</h3>

        <p>
          <code>pd.merge()</code> combines two DataFrames using a common
          column or key.
        </p>

        <h3>9. What is the difference between inner and outer merge?</h3>

        <p>
          An inner merge keeps common records, while an outer merge keeps
          records from both DataFrames.
        </p>

        <h3>10. What is StringIO?</h3>

        <p>
          StringIO allows a string to be treated like a file.
        </p>

        <h3>11. What does df.to_csv() do?</h3>

        <p>
          It saves a DataFrame into a CSV file.
        </p>

        <h3>12. What does pd.read_html() return?</h3>

        <p>
          It reads HTML tables and usually returns a list of Pandas
          DataFrames.
        </p>
      </section>

      {/* ============================= */}
      {/* PAGE NAV */}
      {/* ============================= */}

      <PageNav
        prev={{
          label: 'Pandas',
          path: '/python/pandas'
        }}
        next={{
          label: 'NumPy',
          path: '/python/numpy'
        }}
      />

    </DocPage>
  );
};

export default PandasDataCleaning;