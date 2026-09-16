
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function Streamlit() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Streamlit' }
        ]}
        title="Streamlit"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. What is Streamlit */}
      <section>
        <h2>1. What is Streamlit?</h2>

        <p>
          <strong>Streamlit</strong> is an open-source Python framework
          used to quickly build interactive web applications for
          <strong> Machine Learning</strong> and
          <strong> Data Science</strong> projects.
        </p>

        <p>
          The main advantage is that you can create a web application
          using Python without having to write HTML, CSS, or JavaScript
          for the basic interface.
        </p>

        <CodeBlock filename="streamlit.txt">{`Python Script
      ↓
   Streamlit
      ↓
Interactive Web App`}</CodeBlock>

        <h3>Install Streamlit</h3>

        <CodeBlock filename="terminal.txt">{`pip install streamlit`}</CodeBlock>

        <h3>Run a Streamlit App</h3>

        <CodeBlock filename="terminal.txt">{`streamlit run app.py`}</CodeBlock>

        <p>
          Streamlit starts a local web application that can be opened
          in your browser.
        </p>
      </section>

      {/* 2. Requirements */}
      <section>
        <h2>2. requirements.txt</h2>

        <p>
          A Machine Learning and Data Science Streamlit project can
          contain dependencies such as:
        </p>

        <CodeBlock filename="requirements.txt">{`ipykernel
numpy
pandas
matplotlib
seaborn
flask
memory_profiler
streamlit
scikit-learn`}</CodeBlock>

        <p>
          Install all dependencies using:
        </p>

        <CodeBlock filename="terminal.txt">{`pip install -r requirements.txt`}</CodeBlock>
      </section>

      {/* 3. Basic App */}
      <section>
        <h2>3. Your First Streamlit App</h2>

        <p>
          The basic Streamlit application starts by importing Streamlit.
        </p>

        <CodeBlock filename="app.py">{`import streamlit as st

st.title("Hello Streamlit")

st.write("This is a simple text")`}</CodeBlock>

        <p>
          Save this code as <strong>app.py</strong> and run:
        </p>

        <CodeBlock filename="terminal.txt">{`streamlit run app.py`}</CodeBlock>
      </section>

      {/* 4. Title */}
      <section>
        <h2>4. Titles and Text</h2>

        <h3>st.title()</h3>

        <p>
          Displays a large title on the page.
        </p>

        <CodeBlock filename="title.py">{`st.title("My Machine Learning App")`}</CodeBlock>

        <h3>st.write()</h3>

        <p>
          <strong>st.write()</strong> is Streamlit's general-purpose
          display function.
        </p>

        <CodeBlock filename="write.py">{`st.write("Hello")

st.write(100)

st.write("Machine Learning")

st.write(my_dataframe)`}</CodeBlock>

        <p>
          It can automatically handle different types of Python objects
          and display them appropriately.
        </p>

        <h3>Other Text Functions</h3>

        <CodeBlock filename="text_functions.py">{`st.header("Main Header")

st.subheader("Sub Header")

st.text("Simple plain text")

st.write("Generic Streamlit output")`}</CodeBlock>
      </section>

      {/* 5. DataFrame */}
      <section>
        <h2>5. Displaying a DataFrame</h2>

        <p>
          Streamlit can display pandas DataFrames directly.
        </p>

        <CodeBlock filename="dataframe.py">{`import streamlit as st
import pandas as pd


df = pd.DataFrame({
    "first column": [1, 2, 3, 4],
    "second column": [10, 20, 30, 40]
})


st.write("Here is the dataframe")

st.write(df)`}</CodeBlock>

        <h3>st.dataframe()</h3>

        <p>
          Another option is <strong>st.dataframe()</strong>, which is
          designed specifically for interactive DataFrame display.
        </p>

        <CodeBlock filename="dataframe_display.py">{`st.dataframe(df)`}</CodeBlock>

        <p>
          The displayed table can be interacted with in the browser.
        </p>
      </section>

      {/* 6. Charts */}
      <section>
        <h2>6. Charts in Streamlit</h2>

        <p>
          Streamlit provides simple built-in chart functions.
        </p>

        <h3>Line Chart</h3>

        <CodeBlock filename="line_chart.py">{`import streamlit as st
import pandas as pd
import numpy as np


chart_data = pd.DataFrame(
    np.random.randn(20, 3),
    columns=["a", "b", "c"]
)


st.line_chart(chart_data)`}</CodeBlock>

        <h3>Other Built-in Charts</h3>

        <CodeBlock filename="charts.py">{`st.line_chart(data)

st.bar_chart(data)

st.area_chart(data)

st.map(data)`}</CodeBlock>

        <p>
          These functions are useful when you want quick visualizations
          without manually creating Matplotlib plots.
        </p>
      </section>

      {/* 7. Text Input */}
      <section>
        <h2>7. Text Input Widget</h2>

        <p>
          <strong>st.text_input()</strong> allows the user to enter text.
        </p>

        <CodeBlock filename="text_input.py">{`import streamlit as st


name = st.text_input("Enter your name:")


if name:

    st.write(f"Hello, {name}")`}</CodeBlock>

        <p>
          The value entered by the user is stored in the
          <strong> name</strong> variable.
        </p>
      </section>

      {/* 8. Execution Model */}
      <section>
        <h2>8. Streamlit Execution Model</h2>

        <p>
          One of the most important concepts in Streamlit is its
          execution model.
        </p>

        <p>
          Whenever the user interacts with a widget, Streamlit
          <strong> reruns the entire Python script from top to bottom</strong>.
        </p>

        <CodeBlock filename="execution_model.txt">{`User changes widget
        ↓
Streamlit reruns script
        ↓
Script executes top → bottom
        ↓
Updated UI`}</CodeBlock>

        <p>
          This is why Streamlit applications are generally written as
          simple Python scripts rather than traditional event-driven
          frontend applications.
        </p>
      </section>

      {/* 9. Slider */}
      <section>
        <h2>9. Slider Widget</h2>

        <p>
          A slider allows the user to select a value from a range.
        </p>

        <CodeBlock filename="slider.py">{`import streamlit as st


age = st.slider(
    "Select your age:",
    0,
    100,
    25
)


st.write(f"Your age is {age}.")`}</CodeBlock>

        <p>
          The general syntax is:
        </p>

        <CodeBlock filename="slider_syntax.txt">{`st.slider(
    label,
    min_value,
    max_value,
    default_value
)`}</CodeBlock>
      </section>

      {/* 10. Selectbox */}
      <section>
        <h2>10. Selectbox — Dropdown</h2>

        <p>
          <strong>st.selectbox()</strong> creates a dropdown menu.
        </p>

        <CodeBlock filename="selectbox.py">{`import streamlit as st


options = [
    "Python",
    "Java",
    "C++",
    "JavaScript"
]


choice = st.selectbox(
    "Choose your favorite language:",
    options
)


st.write(f"You selected {choice}.")`}</CodeBlock>
      </section>

      {/* 11. File Upload */}
      <section>
        <h2>11. File Upload</h2>

        <p>
          Streamlit provides <strong>st.file_uploader()</strong> for
          uploading files through the web interface.
        </p>

        <h3>Upload a CSV File</h3>

        <CodeBlock filename="csv_upload.py">{`import streamlit as st
import pandas as pd


uploaded_file = st.file_uploader(
    "Choose a CSV file",
    type="csv"
)


if uploaded_file is not None:

    df = pd.read_csv(uploaded_file)

    st.write(df)`}</CodeBlock>

        <p>
          The uploaded file can then be processed using pandas.
        </p>
      </section>

      {/* 12. Saving CSV */}
      <section>
        <h2>12. Saving a DataFrame as CSV</h2>

        <CodeBlock filename="save_csv.py">{`import pandas as pd


data = {
    "Name": ["John", "Jane", "Jake", "Jill"],
    "Age": [28, 24, 35, 40],
    "City": [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston"
    ]
}


df = pd.DataFrame(data)


df.to_csv("sampledata.csv")


print(df)`}</CodeBlock>

        <p>
          <strong>to_csv()</strong> saves a pandas DataFrame as a CSV file.
        </p>
      </section>

      {/* 13. Sidebar */}
      <section>
        <h2>13. Sidebar</h2>

        <p>
          Streamlit allows widgets to be placed in a sidebar using
          <strong> st.sidebar</strong>.
        </p>

        <CodeBlock filename="sidebar.py">{`import streamlit as st


st.sidebar.title("Sidebar Title")


value = st.sidebar.slider(
    "Some slider",
    0,
    10
)


st.write(f"Selected value: {value}")`}</CodeBlock>

        <p>
          A sidebar is useful for keeping input controls separate from
          the main output area.
        </p>

        <CodeBlock filename="sidebar_layout.txt">{`┌─────────────────────────────────────┐
│ Sidebar        │ Main Page          │
│                │                    │
│ Slider         │ Prediction         │
│ Dropdown       │ Charts             │
│ Input          │ Results            │
└─────────────────────────────────────┘`}</CodeBlock>
      </section>

      {/* 14. Quick Reference */}
      <section>
        <h2>14. Streamlit Quick Reference</h2>

        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Title</td>
              <td>st.title()</td>
            </tr>

            <tr>
              <td>Header</td>
              <td>st.header()</td>
            </tr>

            <tr>
              <td>Subheader</td>
              <td>st.subheader()</td>
            </tr>

            <tr>
              <td>Generic display</td>
              <td>st.write()</td>
            </tr>

            <tr>
              <td>Plain text</td>
              <td>st.text()</td>
            </tr>

            <tr>
              <td>Text input</td>
              <td>st.text_input()</td>
            </tr>

            <tr>
              <td>Number input</td>
              <td>st.number_input()</td>
            </tr>

            <tr>
              <td>Slider</td>
              <td>st.slider()</td>
            </tr>

            <tr>
              <td>Dropdown</td>
              <td>st.selectbox()</td>
            </tr>

            <tr>
              <td>Multi-select</td>
              <td>st.multiselect()</td>
            </tr>

            <tr>
              <td>Button</td>
              <td>st.button()</td>
            </tr>

            <tr>
              <td>Checkbox</td>
              <td>st.checkbox()</td>
            </tr>

            <tr>
              <td>File upload</td>
              <td>st.file_uploader()</td>
            </tr>

            <tr>
              <td>DataFrame</td>
              <td>st.dataframe()</td>
            </tr>

            <tr>
              <td>Static table</td>
              <td>st.table()</td>
            </tr>

            <tr>
              <td>Line chart</td>
              <td>st.line_chart()</td>
            </tr>

            <tr>
              <td>Bar chart</td>
              <td>st.bar_chart()</td>
            </tr>

            <tr>
              <td>Area chart</td>
              <td>st.area_chart()</td>
            </tr>

            <tr>
              <td>Map</td>
              <td>st.map()</td>
            </tr>

            <tr>
              <td>Sidebar</td>
              <td>st.sidebar</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 15. ML App Introduction */}
      <section>
        <h2>15. Building an ML App with Streamlit</h2>

        <p>
          Streamlit is particularly useful for turning a trained Machine
          Learning model into an interactive application.
        </p>

        <p>
          We will build an <strong>Iris Flower Species Classifier</strong>
          using a Random Forest model.
        </p>

        <CodeBlock filename="ml_app_flow.txt">{`Iris Dataset
     ↓
Pandas DataFrame
     ↓
Random Forest
     ↓
Streamlit Sidebar
     ↓
User Inputs
     ↓
Model Prediction
     ↓
Predicted Species`}</CodeBlock>

        <h3>Application Steps</h3>

        <ol>
          <li>Load the Iris dataset.</li>
          <li>Convert it into a pandas DataFrame.</li>
          <li>Train a Random Forest classifier.</li>
          <li>Create input sliders in the sidebar.</li>
          <li>Collect flower measurements.</li>
          <li>Send the values to the model.</li>
          <li>Get the predicted class.</li>
          <li>Convert the class number to a species name.</li>
          <li>Display prediction probabilities.</li>
        </ol>
      </section>

      {/* 16. Iris Dataset */}
      <section>
        <h2>16. Loading the Iris Dataset</h2>

        <p>
          Scikit-learn provides the Iris dataset as a built-in dataset.
        </p>

        <CodeBlock filename="load_iris.py">{`from sklearn.datasets import load_iris
import pandas as pd


iris = load_iris()


df = pd.DataFrame(
    iris.data,
    columns=iris.feature_names
)


df["species"] = iris.target


print(df.head())`}</CodeBlock>

        <p>
          The dataset contains measurements such as sepal length,
          sepal width, petal length, and petal width.
        </p>
      </section>

      {/* 17. Random Forest */}
      <section>
        <h2>17. Training Random Forest</h2>

        <p>
          <strong>RandomForestClassifier</strong> is used to train the
          classification model.
        </p>

        <CodeBlock filename="random_forest.py">{`from sklearn.ensemble import RandomForestClassifier


model = RandomForestClassifier()


model.fit(
    df.iloc[:, :-1],
    df["species"]
)`}</CodeBlock>

        <p>
          The model learns the relationship between the flower
          measurements and the target species.
        </p>
      </section>

      {/* 18. Caching */}
      <section>
        <h2>18. Caching in Streamlit</h2>

        <p>
          Streamlit reruns the entire script whenever a widget changes.
          If expensive operations are performed every time, the app can
          become slow.
        </p>

        <p>
          Streamlit provides caching mechanisms to avoid unnecessary
          repeated work.
        </p>

        <h3>@st.cache_data</h3>

        <p>
          Use this for data-related operations such as loading or
          transforming data.
        </p>

        <CodeBlock filename="cache_data.py">{`@st.cache_data
def load_data():

    iris = load_iris()

    df = pd.DataFrame(
        iris.data,
        columns=iris.feature_names
    )

    df["species"] = iris.target

    return df, iris.target_names`}</CodeBlock>

        <h3>@st.cache_resource</h3>

        <p>
          Use this for resources such as trained models or other
          expensive reusable objects.
        </p>

        <CodeBlock filename="cache_resource.py">{`@st.cache_resource
def train_model(df):

    model = RandomForestClassifier()

    model.fit(
        df.iloc[:, :-1],
        df["species"]
    )

    return model`}</CodeBlock>

        <p>
          In an ML application, caching prevents the model from being
          retrained every time the user changes a slider.
        </p>
      </section>

      {/* 19. Sidebar ML Inputs */}
      <section>
        <h2>19. Sidebar Inputs for ML Prediction</h2>

        <p>
          The sidebar is useful for collecting the flower measurements.
        </p>

        <CodeBlock filename="sidebar_inputs.py">{`sepal_length = st.sidebar.slider(
    "Sepal length (cm)",
    float(df["sepal length (cm)"].min()),
    float(df["sepal length (cm)"].max()),
    float(df["sepal length (cm)"].mean())
)


sepal_width = st.sidebar.slider(
    "Sepal width (cm)",
    float(df["sepal width (cm)"].min()),
    float(df["sepal width (cm)"].max()),
    float(df["sepal width (cm)"].mean())
)


petal_length = st.sidebar.slider(
    "Petal length (cm)",
    float(df["petal length (cm)"].min()),
    float(df["petal length (cm)"].max()),
    float(df["petal length (cm)"].mean())
)


petal_width = st.sidebar.slider(
    "Petal width (cm)",
    float(df["petal width (cm)"].min()),
    float(df["petal width (cm)"].max()),
    float(df["petal width (cm)"].mean())
)`}</CodeBlock>

        <p>
          Notice that the minimum, maximum, and default values are
          calculated directly from the dataset.
        </p>
      </section>

      {/* 20. Prediction */}
      <section>
        <h2>20. Making the Prediction</h2>

        <p>
          The four slider values are combined into a two-dimensional
          list because the model expects input in a tabular format.
        </p>

        <CodeBlock filename="prediction.py">{`input_data = [[
    sepal_length,
    sepal_width,
    petal_length,
    petal_width
]]


prediction = model.predict(input_data)


predicted_species = target_names[
    prediction[0]
]


st.subheader("Prediction")


st.write(
    f"The predicted species is: "
    f"**{predicted_species}**"
)`}</CodeBlock>

        <CodeBlock filename="prediction_flow.txt">{`User Inputs
    ↓
[Sepal Length,
 Sepal Width,
 Petal Length,
 Petal Width]
    ↓
Random Forest
    ↓
Numeric Class
    ↓
target_names
    ↓
Species Name`}</CodeBlock>
      </section>

      {/* 21. Probability */}
      <section>
        <h2>21. Prediction Probabilities</h2>

        <p>
          Random Forest can also provide probabilities for the
          different classes.
        </p>

        <CodeBlock filename="probability.py">{`proba = model.predict_proba(
    input_data
)[0]


proba_df = pd.DataFrame({

    "Species": target_names,

    "Probability": proba

}).sort_values(
    "Probability",
    ascending=False
)


st.write("Prediction confidence:")


st.bar_chart(
    proba_df.set_index("Species")
)`}</CodeBlock>

        <p>
          This creates a table containing each species and its
          corresponding predicted probability.
        </p>
      </section>

      {/* 22. Complete ML App */}
      <section>
        <h2>22. Complete Iris Streamlit ML App</h2>

        <p>
          The following example combines the concepts from this page
          into one complete application.
        </p>

        <CodeBlock filename="iris_classifier_app.py">{`"""
Iris Flower Species Classifier

A simple Streamlit ML application demonstrating:

- Loading the Iris dataset
- Creating a pandas DataFrame
- Training a Random Forest classifier
- Using sidebar sliders
- Making predictions
- Displaying prediction probabilities

Run with:

streamlit run iris_classifier_app.py
"""


import streamlit as st
import pandas as pd

from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier


# ---------------------------------------------------------
# 1. Load and cache dataset
# ---------------------------------------------------------

@st.cache_data
def load_data():

    iris = load_iris()

    df = pd.DataFrame(
        iris.data,
        columns=iris.feature_names
    )

    df["species"] = iris.target

    return df, iris.target_names


df, target_names = load_data()


# ---------------------------------------------------------
# 2. Train and cache model
# ---------------------------------------------------------

@st.cache_resource
def train_model(df):

    model = RandomForestClassifier()

    model.fit(
        df.iloc[:, :-1],
        df["species"]
    )

    return model


model = train_model(df)


# ---------------------------------------------------------
# 3. App title
# ---------------------------------------------------------

st.title("🌸 Iris Flower Species Predictor")


st.write(
    "This app uses a Random Forest Classifier "
    "trained on the classic Iris dataset to "
    "predict the species of a flower."
)


# ---------------------------------------------------------
# 4. Training data
# ---------------------------------------------------------

st.subheader("Training Data Preview")


st.dataframe(
    df.head()
)


# ---------------------------------------------------------
# 5. Sidebar
# ---------------------------------------------------------

st.sidebar.title(
    "Input Flower Measurements"
)


sepal_length = st.sidebar.slider(
    "Sepal length (cm)",
    float(df["sepal length (cm)"].min()),
    float(df["sepal length (cm)"].max()),
    float(df["sepal length (cm)"].mean())
)


sepal_width = st.sidebar.slider(
    "Sepal width (cm)",
    float(df["sepal width (cm)"].min()),
    float(df["sepal width (cm)"].max()),
    float(df["sepal width (cm)"].mean())
)


petal_length = st.sidebar.slider(
    "Petal length (cm)",
    float(df["petal length (cm)"].min()),
    float(df["petal length (cm)"].max()),
    float(df["petal length (cm)"].mean())
)


petal_width = st.sidebar.slider(
    "Petal width (cm)",
    float(df["petal width (cm)"].min()),
    float(df["petal width (cm)"].max()),
    float(df["petal width (cm)"].mean())
)


# ---------------------------------------------------------
# 6. Prepare input
# ---------------------------------------------------------

input_data = [[
    sepal_length,
    sepal_width,
    petal_length,
    petal_width
]]


# ---------------------------------------------------------
# 7. Prediction
# ---------------------------------------------------------

prediction = model.predict(
    input_data
)


predicted_species = target_names[
    prediction[0]
]


st.subheader("Prediction")


st.write(
    f"🌼 The predicted species is: "
    f"**{predicted_species}**"
)


# ---------------------------------------------------------
# 8. Prediction probabilities
# ---------------------------------------------------------

proba = model.predict_proba(
    input_data
)[0]


proba_df = pd.DataFrame({

    "Species": target_names,

    "Probability": proba

}).sort_values(
    "Probability",
    ascending=False
)


st.write("Prediction confidence:")


st.bar_chart(
    proba_df.set_index("Species")
)`}</CodeBlock>

        <h3>Run the Application</h3>

        <CodeBlock filename="terminal.txt">{`streamlit run iris_classifier_app.py`}</CodeBlock>
      </section>

      {/* 23. Complete Architecture */}
      <section>
        <h2>23. Iris App Architecture</h2>

        <CodeBlock filename="iris_architecture.txt">{`                 Streamlit App
                       │
                       ↓
                Load Iris Dataset
                       │
                       ↓
                Pandas DataFrame
                       │
                       ↓
               Random Forest Model
                       │
                       ↓
              Cached Model Resource
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
        Sidebar Inputs       Data Preview
             │
             ↓
       Flower Measurements
             │
             ↓
       Random Forest Predict
             │
             ↓
        Species Prediction
             │
             ↓
       Prediction Probability
             │
             ↓
          Streamlit UI`}</CodeBlock>
      </section>

      {/* 24. Common Mistakes */}
      <section>
        <h2>24. Common Mistakes</h2>

        <h3>1. Typo in st.write()</h3>

        <CodeBlock filename="mistake.txt">{`Wrong:

st.wwrite("Hello")


Correct:

st.write("Hello")`}</CodeBlock>

        <h3>2. Forgetting Imports</h3>

        <CodeBlock filename="imports.py">{`import streamlit as st
import pandas as pd
import numpy as np`}</CodeBlock>

        <p>
          If you use <strong>pd</strong> or <strong>np</strong> without
          importing pandas or NumPy, the application will fail.
        </p>

        <h3>3. Forgetting Conditional Logic</h3>

        <CodeBlock filename="conditional.py">{`name = st.text_input(
    "Enter your name"
)


if name:

    st.write(
        f"Hello {name}"
    )`}</CodeBlock>

        <p>
          The condition prevents the application from trying to use
          an empty input unnecessarily.
        </p>

        <h3>4. Retraining the Model on Every Interaction</h3>

        <p>
          Because Streamlit reruns the script whenever a widget changes,
          an uncached model-training operation can run repeatedly.
        </p>

        <p>
          For larger ML models, use caching such as
          <strong> @st.cache_resource</strong> for the trained model.
        </p>
      </section>

      {/* 25. Important Execution Model */}
      <section>
        <h2>25. Streamlit + Machine Learning Execution Model</h2>

        <CodeBlock filename="ml_execution.txt">{`Without Caching

User moves slider
       ↓
Script reruns
       ↓
Dataset loads
       ↓
Model trains
       ↓
Prediction
       ↓
UI


With Caching

User moves slider
       ↓
Script reruns
       ↓
Cached dataset
       ↓
Cached model
       ↓
Prediction
       ↓
UI`}</CodeBlock>

        <p>
          Caching can therefore prevent expensive work from being
          unnecessarily repeated during widget interactions.
        </p>
      </section>

      {/* 26. Mental Model */}
      <section>
        <h2>26. Easy Mental Model</h2>

        <CodeBlock filename="streamlit_mental_model.txt">{`STREAMLIT

Python Code
     ↓
Streamlit
     ↓
Widgets
     ↓
User Interaction
     ↓
Script Reruns
     ↓
Updated Output`}</CodeBlock>

        <h3>For ML Apps</h3>

        <CodeBlock filename="ml_mental_model.txt">{`Dataset
   ↓
Model
   ↓
Cache Model
   ↓
User Inputs
   ↓
Prediction
   ↓
Result`}</CodeBlock>

        <p>
          <strong>Easy rule:</strong> Streamlit turns Python code into
          an interactive web interface.
        </p>
      </section>

      {/* 27. Cheat Sheet */}
      <section>
        <h2>27. Streamlit Cheat Sheet</h2>

        <CodeBlock filename="cheat_sheet.txt">{`Display
st.title()
st.header()
st.subheader()
st.write()
st.text()


Input
st.text_input()
st.number_input()
st.slider()
st.selectbox()
st.multiselect()
st.checkbox()
st.button()


Files
st.file_uploader()


Data
st.dataframe()
st.table()


Charts
st.line_chart()
st.bar_chart()
st.area_chart()
st.map()


Layout
st.sidebar


Caching
@st.cache_data
@st.cache_resource


Run
streamlit run app.py`}</CodeBlock>
      </section>

      {/* 28. Interview Questions */}
      <section>
        <h2>28. Streamlit Interview Questions</h2>

        <h3>Q1. What is Streamlit?</h3>

        <p>
          Streamlit is an open-source Python framework used to build
          interactive web applications, especially for Data Science
          and Machine Learning projects.
        </p>

        <h3>Q2. Do we need HTML, CSS and JavaScript to build a basic Streamlit app?</h3>

        <p>
          No. Streamlit allows us to build the basic interface using
          Python.
        </p>

        <h3>Q3. How do you run a Streamlit application?</h3>

        <CodeBlock filename="answer.txt">{`streamlit run app.py`}</CodeBlock>

        <h3>Q4. What does st.write() do?</h3>

        <p>
          st.write() is a general-purpose display function that can
          display text, numbers, DataFrames and other supported objects.
        </p>

        <h3>Q5. What happens when a user changes a Streamlit widget?</h3>

        <p>
          Streamlit reruns the Python script from top to bottom.
        </p>

        <h3>Q6. What is st.sidebar?</h3>

        <p>
          st.sidebar is used to place widgets and controls in the
          application's sidebar.
        </p>

        <h3>Q7. What is st.file_uploader()?</h3>

        <p>
          It provides a widget that allows users to upload files to
          the Streamlit application.
        </p>

        <h3>Q8. Why is caching useful in Streamlit ML applications?</h3>

        <p>
          Because Streamlit reruns the script after widget interactions,
          caching can prevent expensive operations such as loading data
          or training a model from being unnecessarily repeated.
        </p>

        <h3>Q9. What is @st.cache_data?</h3>

        <p>
          It is used to cache data-related computations.
        </p>

        <h3>Q10. What is @st.cache_resource?</h3>

        <p>
          It is useful for caching reusable resources such as trained
          Machine Learning models.
        </p>

        <h3>Q11. Why is Streamlit useful for Machine Learning?</h3>

        <p>
          It allows a developer to quickly create an interactive
          interface around an ML model using Python.
        </p>
      </section>

      {/* 29. Final Summary */}
      <section>
        <h2>29. Final Summary</h2>

        <CodeBlock filename="final_summary.txt">{`Streamlit
    ↓
Python Web App


Install
    ↓
pip install streamlit


Run
    ↓
streamlit run app.py


Display
    ↓
st.title()
st.write()
st.dataframe()


Input
    ↓
st.text_input()
st.slider()
st.selectbox()
st.checkbox()


Files
    ↓
st.file_uploader()


Charts
    ↓
st.line_chart()
st.bar_chart()
st.area_chart()


Layout
    ↓
st.sidebar


ML App
    ↓
Dataset
    ↓
Model
    ↓
User Input
    ↓
Prediction


Caching
    ↓
@st.cache_data
@st.cache_resource


Important Concept

Widget Interaction
       ↓
Script Reruns
       ↓
Updated UI`}</CodeBlock>

        <p>
          <strong>One-line definition:</strong> Streamlit lets you turn
          Python, Data Science, and Machine Learning code into interactive
          web applications quickly.
        </p>
      </section>

      <PageNav
        prev={{
          label: 'Flask',
          path: '/python/flask'
        }}
        next={{
          label: 'Meaowww',
          path: '/'
        }}
      />

    </DocPage>
  );
}
