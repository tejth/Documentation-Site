import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function SQLite3() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'SQLite3' }
        ]}
        title="SQLite3"
        readTime="30 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <h2>1. What is SQL?</h2>

      <p>
        <strong>SQL</strong> stands for <strong>Structured Query Language</strong>.
      </p>

      <p>
        SQL is a standard language used for <strong>managing and manipulating
        relational databases</strong>.
      </p>

      <p>
        Using SQL, we can perform operations such as:
      </p>

      <ul>
        <li>Create databases and tables</li>
        <li>Insert data</li>
        <li>Read data</li>
        <li>Update data</li>
        <li>Delete data</li>
        <li>Search data</li>
        <li>Sort data</li>
        <li>Filter data</li>
        <li>Join multiple tables</li>
      </ul>

      <CodeBlock filename="sql_basic_idea.txt">{`SQL
 ↓
Language used to communicate with
relational databases

SQL can:
 ↓
CREATE
INSERT
SELECT
UPDATE
DELETE
JOIN
SORT
FILTER
GROUP`}</CodeBlock>

      {/* 2. What is SQLite */}
      <h2>2. What is SQLite?</h2>

      <p>
        <strong>SQLite</strong> is a self-contained, serverless and
        zero-configuration database engine.
      </p>

      <p>
        It is widely used as an <strong>embedded database system</strong>.
      </p>

      <p>
        Unlike databases such as MySQL or PostgreSQL, SQLite does not require
        a separate database server to run.
      </p>

      <h3>Simple Definition</h3>

      <CodeBlock filename="sqlite_definition.txt">{`SQLite

Self-contained
     +
Serverless
     +
Zero-configuration
     +
Embedded Database
     =
SQLite`}</CodeBlock>

      {/* 3. Features */}
      <h2>3. Important Features of SQLite</h2>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Simple Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Self-contained</td>
            <td>Everything required is contained in the SQLite library</td>
          </tr>
          <tr>
            <td>Serverless</td>
            <td>No separate database server is required</td>
          </tr>
          <tr>
            <td>Zero-configuration</td>
            <td>No complicated setup or configuration is required</td>
          </tr>
          <tr>
            <td>Lightweight</td>
            <td>Small and easy to use</td>
          </tr>
          <tr>
            <td>Embedded</td>
            <td>Can be directly included inside an application</td>
          </tr>
          <tr>
            <td>File-based</td>
            <td>Database is commonly stored in a single file</td>
          </tr>
        </tbody>
      </table>

      {/* 4. SQLite vs MySQL */}
      <h2>4. SQLite vs MySQL</h2>

      <table>
        <thead>
          <tr>
            <th>SQLite</th>
            <th>MySQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Serverless</td>
            <td>Uses a database server</td>
          </tr>
          <tr>
            <td>Usually stored in a file</td>
            <td>Managed by a database server</td>
          </tr>
          <tr>
            <td>Very easy to set up</td>
            <td>Requires server setup</td>
          </tr>
          <tr>
            <td>Good for embedded applications</td>
            <td>Commonly used for larger client-server applications</td>
          </tr>
        </tbody>
      </table>

      {/* 5. Applications */}
      <h2>5. Where is SQLite Used?</h2>

      <p>SQLite is commonly used in:</p>

      <ul>
        <li>Desktop applications</li>
        <li>Mobile applications</li>
        <li>Embedded systems</li>
        <li>Small web applications</li>
        <li>Testing and development</li>
        <li>Local storage</li>
        <li>Prototypes</li>
      </ul>

      {/* 6. Installation */}
      <h2>6. Installing SQLite</h2>

      <p>
        SQLite can be used directly through its command-line interface.
      </p>

      <p>
        On many systems, SQLite may already be available. You can check it
        using:
      </p>

      <CodeBlock filename="check_sqlite.txt">{`sqlite3 --version`}</CodeBlock>

      <p>
        If the command works, SQLite is available on your system.
      </p>

      <h3>Python SQLite3</h3>

      <p>
        Python already provides the built-in <code>sqlite3</code> module.
        Therefore, normally you do not need to install an additional package.
      </p>

      <CodeBlock filename="python_sqlite.py">{`import sqlite3`}</CodeBlock>

      {/* 7. Create Database */}
      <h2>7. Creating a Database</h2>

      <p>
        In SQLite, a database can be created simply by connecting to a file.
      </p>

      <CodeBlock filename="create_database.py">{`import sqlite3

connection = sqlite3.connect("college.db")

print("Database created successfully")

connection.close()`}</CodeBlock>

      <p>
        If <code>college.db</code> does not exist, SQLite creates it.
        If it already exists, SQLite opens the existing database.
      </p>

      <h3>Simple Flow</h3>

      <CodeBlock filename="database_flow.txt">{`Python Program
      ↓
sqlite3.connect()
      ↓
college.db
      ↓
SQLite Database`}</CodeBlock>

      {/* 8. Connection */}
      <h2>8. Connecting to a Database</h2>

      <p>
        The <code>connect()</code> function creates a connection with the
        SQLite database.
      </p>

      <CodeBlock filename="connection.py">{`import sqlite3

connection = sqlite3.connect("college.db")

print("Connected")

connection.close()`}</CodeBlock>

      <p>
        The <code>close()</code> method closes the database connection.
      </p>

      {/* 9. Cursor */}
      <h2>9. What is a Cursor?</h2>

      <p>
        A <strong>cursor</strong> is used to execute SQL commands and retrieve
        results from the database.
      </p>

      <CodeBlock filename="cursor.py">{`import sqlite3

connection = sqlite3.connect("college.db")

cursor = connection.cursor()

print("Cursor created")

connection.close()`}</CodeBlock>

      <h3>Easy Way to Remember</h3>

      <CodeBlock filename="connection_cursor.txt">{`Connection
    ↓
Connect Python with Database

Cursor
    ↓
Execute SQL Commands`}</CodeBlock>

      {/* 10. Create Table */}
      <h2>10. Creating a Table</h2>

      <p>
        A table stores data in rows and columns.
      </p>

      <CodeBlock filename="create_table.py">{`import sqlite3

connection = sqlite3.connect("college.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    course TEXT
)
""")

connection.commit()

connection.close()`}</CodeBlock>

      <h3>Table Structure</h3>

      <CodeBlock filename="table_structure.txt">{`students

+----+------+-----+--------+
| id | name | age | course |
+----+------+-----+--------+
|    |      |     |        |
+----+------+-----+--------+`}</CodeBlock>

      {/* 11. Data Types */}
      <h2>11. SQLite Data Types</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INTEGER</td>
            <td>Whole numbers</td>
          </tr>
          <tr>
            <td>REAL</td>
            <td>Decimal numbers</td>
          </tr>
          <tr>
            <td>TEXT</td>
            <td>Text/String values</td>
          </tr>
          <tr>
            <td>BLOB</td>
            <td>Binary data</td>
          </tr>
          <tr>
            <td>NULL</td>
            <td>Missing or unknown value</td>
          </tr>
        </tbody>
      </table>

      {/* 12. Insert */}
      <h2>12. Inserting Data</h2>

      <p>
        The <code>INSERT INTO</code> command is used to add data to a table.
      </p>

      <CodeBlock filename="insert_data.py">{`import sqlite3

connection = sqlite3.connect("college.db")

cursor = connection.cursor()

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES ('Tej', 21, 'AI')
""")

connection.commit()

connection.close()`}</CodeBlock>

      <h3>Insert Multiple Records</h3>

      <CodeBlock filename="insert_many.py">{`students = [
    ('Rahul', 21, 'CSE'),
    ('Aman', 22, 'AI'),
    ('Priya', 21, 'Data Science')
]

cursor.executemany("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", students)

connection.commit()`}</CodeBlock>

      <p>
        <code>executemany()</code> is useful when inserting multiple records.
      </p>

      {/* 13. Select */}
      <h2>13. Accessing / Reading Data</h2>

      <p>
        The <code>SELECT</code> statement is used to read data from a table.
      </p>

      <h3>Select All Data</h3>

      <CodeBlock filename="select_all.py">{`cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      <p>
        The <code>*</code> means all columns.
      </p>

      <h3>Select Specific Columns</h3>

      <CodeBlock filename="select_columns.py">{`cursor.execute(
    "SELECT name, course FROM students"
)

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      {/* 14. Fetchone */}
      <h2>14. fetchone()</h2>

      <p>
        <code>fetchone()</code> returns one record from the query result.
      </p>

      <CodeBlock filename="fetchone.py">{`cursor.execute("SELECT * FROM students")

row = cursor.fetchone()

print(row)`}</CodeBlock>

      {/* 15. Fetchall */}
      <h2>15. fetchall()</h2>

      <p>
        <code>fetchall()</code> returns all remaining records.
      </p>

      <CodeBlock filename="fetchall.py">{`cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      {/* 16. Where */}
      <h2>16. Filtering Data using WHERE</h2>

      <p>
        The <code>WHERE</code> clause is used to select only records that
        satisfy a condition.
      </p>

      <CodeBlock filename="where.py">{`cursor.execute("""
SELECT * FROM students
WHERE age = 21
""")

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      <h3>Another Example</h3>

      <CodeBlock filename="where_course.py">{`cursor.execute("""
SELECT * FROM students
WHERE course = 'AI'
""")`}</CodeBlock>

      {/* 17. Update */}
      <h2>17. Updating Data</h2>

      <p>
        The <code>UPDATE</code> command is used to modify existing data.
      </p>

      <CodeBlock filename="update_data.py">{`cursor.execute("""
UPDATE students
SET age = 22
WHERE name = 'Tej'
""")

connection.commit()`}</CodeBlock>

      <p>
        The <code>WHERE</code> clause is important because it specifies which
        records should be updated.
      </p>

      <h3>Without WHERE</h3>

      <CodeBlock filename="update_warning.txt">{`UPDATE students
SET age = 22;`}</CodeBlock>

      <p>
        This can update the age of <strong>every student</strong>. Therefore,
        always be careful when using <code>UPDATE</code>.
      </p>

      {/* 18. Delete */}
      <h2>18. Deleting Data</h2>

      <p>
        The <code>DELETE</code> command is used to remove records from a table.
      </p>

      <CodeBlock filename="delete_data.py">{`cursor.execute("""
DELETE FROM students
WHERE name = 'Tej'
""")

connection.commit()`}</CodeBlock>

      <p>
        Again, use <code>WHERE</code> carefully.
      </p>

      {/* 19. Delete all */}
      <h2>19. Delete All Records</h2>

      <CodeBlock filename="delete_all.txt">{`DELETE FROM students;`}</CodeBlock>

      <p>
        This removes all records from the table but does not remove the table
        itself.
      </p>

      {/* 20. Drop */}
      <h2>20. Dropping a Table</h2>

      <p>
        <code>DROP TABLE</code> completely removes a table.
      </p>

      <CodeBlock filename="drop_table.py">{`cursor.execute("""
DROP TABLE students
""")

connection.commit()`}</CodeBlock>

      <p>
        After dropping the table, its structure and data are removed.
      </p>

      <h3>DELETE vs DROP</h3>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>What it removes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DELETE</td>
            <td>Records</td>
          </tr>
          <tr>
            <td>DROP TABLE</td>
            <td>Entire table</td>
          </tr>
        </tbody>
      </table>

      {/* 21. ALTER */}
      <h2>21. ALTER TABLE</h2>

      <p>
        <code>ALTER TABLE</code> is used to modify the structure of an existing
        table.
      </p>

      <h3>Add a Column</h3>

      <CodeBlock filename="alter_table.py">{`cursor.execute("""
ALTER TABLE students
ADD COLUMN email TEXT
""")

connection.commit()`}</CodeBlock>

      <p>
        This adds a new <code>email</code> column to the table.
      </p>

      {/* 22. ORDER BY */}
      <h2>22. Sorting Data using ORDER BY</h2>

      <p>
        <code>ORDER BY</code> is used to sort query results.
      </p>

      <h3>Ascending Order</h3>

      <CodeBlock filename="order_by_asc.py">{`cursor.execute("""
SELECT * FROM students
ORDER BY age ASC
""")`}</CodeBlock>

      <h3>Descending Order</h3>

      <CodeBlock filename="order_by_desc.py">{`cursor.execute("""
SELECT * FROM students
ORDER BY age DESC
""")`}</CodeBlock>

      {/* 23. LIMIT */}
      <h2>23. LIMIT</h2>

      <p>
        <code>LIMIT</code> restricts the number of records returned.
      </p>

      <CodeBlock filename="limit.py">{`cursor.execute("""
SELECT * FROM students
LIMIT 5
""")`}</CodeBlock>

      <p>
        This returns at most five records.
      </p>

      {/* 24. AND OR */}
      <h2>24. AND and OR</h2>

      <p>
        Multiple conditions can be combined using <code>AND</code> and
        <code> OR</code>.
      </p>

      <h3>AND</h3>

      <CodeBlock filename="and.py">{`cursor.execute("""
SELECT * FROM students
WHERE age = 21 AND course = 'AI'
""")`}</CodeBlock>

      <p>
        Both conditions must be true.
      </p>

      <h3>OR</h3>

      <CodeBlock filename="or.py">{`cursor.execute("""
SELECT * FROM students
WHERE course = 'AI' OR course = 'CSE'
""")`}</CodeBlock>

      <p>
        At least one condition must be true.
      </p>

      {/* 25. LIKE */}
      <h2>25. Searching using LIKE</h2>

      <p>
        <code>LIKE</code> is used for pattern matching.
      </p>

      <CodeBlock filename="like.py">{`cursor.execute("""
SELECT * FROM students
WHERE name LIKE 'T%'
""")`}</CodeBlock>

      <p>
        <code>T%</code> means the name starts with <strong>T</strong>.
      </p>

      <h3>Common Wildcards</h3>

      <table>
        <thead>
          <tr>
            <th>Wildcard</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>%</code></td>
            <td>Any number of characters</td>
          </tr>
          <tr>
            <td><code>_</code></td>
            <td>Exactly one character</td>
          </tr>
        </tbody>
      </table>

      {/* 26. Aggregate */}
      <h2>26. Aggregate Functions</h2>

      <p>
        Aggregate functions perform calculations on multiple rows.
      </p>

      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COUNT()</td>
            <td>Counts records</td>
          </tr>
          <tr>
            <td>SUM()</td>
            <td>Adds values</td>
          </tr>
          <tr>
            <td>AVG()</td>
            <td>Calculates average</td>
          </tr>
          <tr>
            <td>MAX()</td>
            <td>Finds maximum</td>
          </tr>
          <tr>
            <td>MIN()</td>
            <td>Finds minimum</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="aggregate.py">{`cursor.execute("""
SELECT COUNT(*) FROM students
""")

print(cursor.fetchone())

cursor.execute("""
SELECT AVG(age) FROM students
""")

print(cursor.fetchone())`}</CodeBlock>

      {/* 27. GROUP BY */}
      <h2>27. GROUP BY</h2>

      <p>
        <code>GROUP BY</code> groups rows having the same value.
      </p>

      <CodeBlock filename="group_by.py">{`cursor.execute("""
SELECT course, COUNT(*)
FROM students
GROUP BY course
""")

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      {/* 28. DISTINCT */}
      <h2>28. DISTINCT</h2>

      <p>
        <code>DISTINCT</code> removes duplicate values from the result.
      </p>

      <CodeBlock filename="distinct.py">{`cursor.execute("""
SELECT DISTINCT course
FROM students
""")

rows = cursor.fetchall()

for row in rows:
    print(row)`}</CodeBlock>

      {/* 29. Constraints */}
      <h2>29. SQL Constraints</h2>

      <p>
        Constraints are rules applied to table columns.
      </p>

      <table>
        <thead>
          <tr>
            <th>Constraint</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PRIMARY KEY</td>
            <td>Uniquely identifies a row</td>
          </tr>
          <tr>
            <td>NOT NULL</td>
            <td>Prevents NULL values</td>
          </tr>
          <tr>
            <td>UNIQUE</td>
            <td>Prevents duplicate values</td>
          </tr>
          <tr>
            <td>DEFAULT</td>
            <td>Provides a default value</td>
          </tr>
          <tr>
            <td>CHECK</td>
            <td>Checks a condition</td>
          </tr>
        </tbody>
      </table>

      <h3>Example</h3>

      <CodeBlock filename="constraints.py">{`CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    age INTEGER CHECK(age >= 18),
    course TEXT DEFAULT 'CSE'
)`}</CodeBlock>

      {/* 30. Primary Key */}
      <h2>30. Primary Key</h2>

      <p>
        A <strong>Primary Key</strong> uniquely identifies each record in a
        table.
      </p>

      <CodeBlock filename="primary_key.py">{`CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
)`}</CodeBlock>

      <p>
        Two records should not have the same primary key value.
      </p>

      {/* 31. NULL */}
      <h2>31. NULL Values</h2>

      <p>
        <code>NULL</code> represents a missing or unknown value.
      </p>

      <h3>Find NULL values</h3>

      <CodeBlock filename="null.py">{`SELECT *
FROM students
WHERE email IS NULL;`}</CodeBlock>

      <h3>Find non-NULL values</h3>

      <CodeBlock filename="not_null.py">{`SELECT *
FROM students
WHERE email IS NOT NULL;`}</CodeBlock>

      {/* 32. JOIN */}
      <h2>32. JOIN</h2>

      <p>
        A <strong>JOIN</strong> combines data from multiple tables using a
        related column.
      </p>

      <h3>Example Tables</h3>

      <CodeBlock filename="join_tables.txt">{`students

id | name | course_id
---|------|----------
1  | Tej  | 101
2  | Aman | 102


courses

course_id | course
----------|--------
101       | AI
102       | CSE`}</CodeBlock>

      <h3>INNER JOIN</h3>

      <CodeBlock filename="inner_join.py">{`SELECT students.name, courses.course
FROM students
INNER JOIN courses
ON students.course_id = courses.course_id;`}</CodeBlock>

      <p>
        The JOIN connects related records from both tables.
      </p>

      {/* 33. Transactions */}
      <h2>33. Transactions and commit()</h2>

      <p>
        Database changes are normally saved using <code>commit()</code>.
      </p>

      <CodeBlock filename="commit.py">{`cursor.execute("""
INSERT INTO students (name, age, course)
VALUES ('Tej', 21, 'AI')
""")

connection.commit()`}</CodeBlock>

      <p>
        Without committing, changes may not be permanently saved.
      </p>

      {/* 34. Rollback */}
      <h2>34. rollback()</h2>

      <p>
        <code>rollback()</code> can undo changes that have not yet been
        committed.
      </p>

      <CodeBlock filename="rollback.py">{`try:

    cursor.execute("""
    INSERT INTO students (name, age, course)
    VALUES ('Tej', 21, 'AI')
    """)

    connection.commit()

except:

    connection.rollback()`}</CodeBlock>

      {/* 35. Parameterized Queries */}
      <h2>35. Parameterized Queries</h2>

      <p>
        When values come from users, use parameterized queries instead of
        directly putting user input into SQL strings.
      </p>

      <CodeBlock filename="parameterized_query.py">{`name = "Tej"
age = 21
course = "AI"

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", (name, age, course))

connection.commit()`}</CodeBlock>

      <p>
        The <code>?</code> placeholders allow SQLite to safely bind the
        supplied values.
      </p>

      {/* 36. Complete CRUD */}
      <h2>36. CRUD Operations</h2>

      <p>
        CRUD is one of the most important concepts in database programming.
      </p>

      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>SQL Command</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create</td>
            <td>INSERT</td>
          </tr>
          <tr>
            <td>Read</td>
            <td>SELECT</td>
          </tr>
          <tr>
            <td>Update</td>
            <td>UPDATE</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="crud.txt">{`CRUD

C → Create → INSERT

R → Read   → SELECT

U → Update → UPDATE

D → Delete → DELETE`}</CodeBlock>

      {/* 37. Complete Python Example */}
      <h2>37. Complete SQLite3 Python Example</h2>

      <p>
        The following example demonstrates the complete basic database flow.
      </p>

      <CodeBlock filename="complete_sqlite.py">{`import sqlite3

# Connect to database
connection = sqlite3.connect("college.db")

# Create cursor
cursor = connection.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    course TEXT
)
""")

# Insert data
cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", ("Tej", 21, "AI"))

# Save changes
connection.commit()

# Read data
cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)

# Update data
cursor.execute("""
UPDATE students
SET age = 22
WHERE name = ?
""", ("Tej",))

connection.commit()

# Delete data
cursor.execute("""
DELETE FROM students
WHERE name = ?
""", ("Tej",))

connection.commit()

# Close connection
connection.close()`}</CodeBlock>

      {/* 38. SQL Commands */}
      <h2>38. Important SQL Commands</h2>

      <CodeBlock filename="sql_commands.txt">{`CREATE TABLE
    ↓
Create a table

INSERT INTO
    ↓
Add data

SELECT
    ↓
Read data

UPDATE
    ↓
Modify data

DELETE
    ↓
Remove data

ALTER TABLE
    ↓
Modify table structure

DROP TABLE
    ↓
Remove table

ORDER BY
    ↓
Sort data

WHERE
    ↓
Filter data

GROUP BY
    ↓
Group data

JOIN
    ↓
Combine tables`}</CodeBlock>

      {/* 39. Database Workflow */}
      <h2>39. Complete SQLite Workflow</h2>

      <CodeBlock filename="sqlite_workflow.txt">{`Python Application
        ↓
sqlite3.connect()
        ↓
    Connection
        ↓
      Cursor
        ↓
   SQL Command
        ↓
┌───────┬────────┬────────┬────────┐
↓       ↓        ↓        ↓
CREATE INSERT SELECT UPDATE
                         ↓
                       DELETE
        ↓
 connection.commit()
        ↓
     Database
        ↓
      close()`}</CodeBlock>

      {/* 40. SQLite Architecture */}
      <h2>40. SQLite Architecture</h2>

      <p>
        SQLite is different from a traditional client-server database because
        the database engine can run directly inside the application.
      </p>

      <CodeBlock filename="sqlite_architecture.txt">{`Traditional Database

Application
     ↓
Database Server
     ↓
Database


SQLite

Application
     ↓
SQLite Engine
     ↓
Database File`}</CodeBlock>

      {/* 41. Useful Python Methods */}
      <h2>41. Important Python sqlite3 Methods</h2>

      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>connect()</code></td>
            <td>Connects to database</td>
          </tr>
          <tr>
            <td><code>cursor()</code></td>
            <td>Creates cursor</td>
          </tr>
          <tr>
            <td><code>execute()</code></td>
            <td>Executes SQL command</td>
          </tr>
          <tr>
            <td><code>executemany()</code></td>
            <td>Executes command for multiple records</td>
          </tr>
          <tr>
            <td><code>fetchone()</code></td>
            <td>Gets one row</td>
          </tr>
          <tr>
            <td><code>fetchall()</code></td>
            <td>Gets all rows</td>
          </tr>
          <tr>
            <td><code>commit()</code></td>
            <td>Saves changes</td>
          </tr>
          <tr>
            <td><code>rollback()</code></td>
            <td>Undo uncommitted changes</td>
          </tr>
          <tr>
            <td><code>close()</code></td>
            <td>Closes connection</td>
          </tr>
        </tbody>
      </table>

      {/* 42. SQL vs SQLite */}
      <h2>42. SQL vs SQLite</h2>

      <p>
        SQL and SQLite are not the same thing.
      </p>

      <table>
        <thead>
          <tr>
            <th>SQL</th>
            <th>SQLite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Language</td>
            <td>Database engine</td>
          </tr>
          <tr>
            <td>Used to communicate with databases</td>
            <td>Provides an actual database system</td>
          </tr>
          <tr>
            <td>Contains commands such as SELECT and INSERT</td>
            <td>Can execute SQL commands</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="sql_sqlite.txt">{`SQL
 ↓
Language

SQLite
 ↓
Database Engine
 ↓
Uses SQL`}</CodeBlock>

      {/* 43. Interview Questions */}
      <h2>43. Interview Questions</h2>

      <h3>1. What is SQL?</h3>

      <p>
        SQL stands for Structured Query Language. It is a standard language
        used for managing and manipulating relational databases.
      </p>

      <h3>2. What is SQLite?</h3>

      <p>
        SQLite is a self-contained, serverless and zero-configuration database
        engine that is commonly used as an embedded database system.
      </p>

      <h3>3. Is SQLite a database or a database server?</h3>

      <p>
        SQLite is a database engine, not a traditional client-server database
        server.
      </p>

      <h3>4. Does Python require an external package for SQLite?</h3>

      <p>
        Python provides the built-in <code>sqlite3</code> module, so an
        additional package is normally not required.
      </p>

      <h3>5. What is a cursor?</h3>

      <p>
        A cursor is an object used to execute SQL statements and retrieve
        results from the database.
      </p>

      <h3>6. What is CRUD?</h3>

      <p>
        CRUD stands for Create, Read, Update and Delete.
      </p>

      <h3>7. What is the purpose of commit()?</h3>

      <p>
        <code>commit()</code> saves the changes made to the database.
      </p>

      <h3>8. What is the difference between DELETE and DROP?</h3>

      <p>
        <code>DELETE</code> removes records from a table, while
        <code>DROP TABLE</code> removes the complete table.
      </p>

      <h3>9. What is a primary key?</h3>

      <p>
        A primary key uniquely identifies each record in a table.
      </p>

      <h3>10. What is a JOIN?</h3>

      <p>
        A JOIN combines related data from two or more tables.
      </p>

      {/* 44. Quick Revision */}
      <h2>44. Quick Revision</h2>

      <CodeBlock filename="sqlite_revision.txt">{`SQL
→ Language for relational databases

SQLite
→ Lightweight embedded database engine

connect()
→ Connect to database

cursor()
→ Create cursor

execute()
→ Execute SQL

CREATE TABLE
→ Create table

INSERT
→ Add data

SELECT
→ Read data

UPDATE
→ Modify data

DELETE
→ Remove data

WHERE
→ Filter data

ORDER BY
→ Sort data

GROUP BY
→ Group data

JOIN
→ Combine tables

commit()
→ Save changes

rollback()
→ Undo uncommitted changes

close()
→ Close connection`}</CodeBlock>

      {/* 45. Final Mental Model */}
      <h2>45. Complete Mental Model</h2>

      <CodeBlock filename="sqlite_mental_model.txt">{`             SQLITE3
                │
                ↓
        Connect Database
                │
                ↓
             Cursor
                │
                ↓
          Execute SQL
                │
        ┌───────┼────────┐
        ↓       ↓        ↓
      CREATE  INSERT   SELECT
        │       │        │
        ↓       ↓        ↓
      Table    Data     Read
                │
                ↓
             UPDATE
                │
                ↓
             DELETE
                │
                ↓
             COMMIT
                │
                ↓
          Save Changes
                │
                ↓
             CLOSE`}</CodeBlock>

      {/* 46. Summary */}
      <h2>46. Summary</h2>

      <p>
        SQLite3 is a simple and lightweight way to work with relational
        databases directly from Python.
      </p>

      <p>
        The most important concepts to remember are:
      </p>

      <CodeBlock filename="final_summary.txt">{`SQLite
  ↓
Database Engine

Python
  ↓
sqlite3 module

connect()
  ↓
Database Connection

cursor()
  ↓
Execute SQL

SQL
  ↓
CREATE
INSERT
SELECT
UPDATE
DELETE

commit()
  ↓
Save Changes

close()
  ↓
Close Database`}</CodeBlock>

      <p>
        Once you understand these operations, you have the foundation needed
        to work with SQLite databases in Python applications.
      </p>

      <PageNav
        prev={{ label: 'Regular Expressions', path: '/python/regular-expressions' }}
        next={{ label: 'Logging', path: '/python/logging' }}
      />

    </DocPage>
  );
}