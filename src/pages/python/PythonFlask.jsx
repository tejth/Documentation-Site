
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function Flask() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Flask' }
        ]}
        title="Flask"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. What is Flask */}
      <section>
        <h2>1. What is Flask?</h2>

        <p>
          <strong>Flask</strong> is a web framework created using the
          <strong> Python</strong> programming language.
        </p>

        <p>
          A web framework provides tools that make it easier to build
          websites and web APIs without manually handling low-level
          networking and HTTP request processing.
        </p>

        <p>
          Flask is called a <strong>micro-framework</strong> because it
          provides the basic features and allows you to add other
          components such as databases, authentication, and extensions
          when needed.
        </p>

        <h3>Why is Flask popular?</h3>

        <ul>
          <li>Lightweight and easy to learn</li>
          <li>Very flexible</li>
          <li>Good for REST APIs</li>
          <li>Useful for ML model deployment</li>
          <li>Good for small and medium web applications</li>
          <li>Provides a development server and debugger</li>
        </ul>

        <CodeBlock filename="flask.txt">{`Python Code
     ↓
   Flask
     ↓
Web Application
     ↓
Website / API`}</CodeBlock>
      </section>

      {/* 2. Web Server vs Web Application */}
      <section>
        <h2>2. Web Server vs Web Application</h2>

        <p>
          It is important to understand the difference between a
          <strong> web server</strong> and a <strong>web application</strong>.
        </p>

        <CodeBlock filename="web_architecture.txt">{`Client
  │
  │ HTTP Request
  ↓
Web Server
  │
  │ WSGI
  ↓
Flask Web Application
  │
  ├── /home
  ├── /about
  ├── /api
  └── Other functionality
  │
  ↓
HTTP Response
  │
  ↓
Client`}</CodeBlock>

        <h3>Web Server</h3>

        <p>
          A web server receives HTTP requests from users and forwards
          them to the web application.
        </p>

        <p>
          Examples include deployment platforms and servers such as
          AWS EC2, Azure App Service, Apache, IIS, and Gunicorn.
        </p>

        <h3>Web Application</h3>

        <p>
          The web application contains your actual Flask code. It
          decides what should happen when a user requests a particular
          URL.
        </p>

        <p>
          For example:
        </p>

        <CodeBlock filename="routes.txt">{`/home
/about
/api
/products
/login`}</CodeBlock>

        <p>
          The web server and Flask application communicate through
          <strong> WSGI</strong>.
        </p>
      </section>

      {/* 3. WSGI */}
      <section>
        <h2>3. WSGI — Web Server Gateway Interface</h2>

        <p>
          <strong>WSGI</strong> stands for
          <strong> Web Server Gateway Interface</strong>.
        </p>

        <p>
          It defines how a web server communicates with a Python web
          application such as Flask.
        </p>

        <CodeBlock filename="wsgi.txt">{`Web Server
    │
    │ WSGI
    ↓
Flask Application
    │
    ↓
Response`}</CodeBlock>

        <h3>Creating the Flask Application</h3>

        <CodeBlock filename="app.py">{`from flask import Flask

app = Flask(__name__)`}</CodeBlock>

        <p>
          The line <strong>app = Flask(__name__)</strong> creates an
          instance of the Flask class.
        </p>

        <p>
          This Flask application instance acts as the WSGI application
          that can receive requests and generate responses.
        </p>

        <p>
          <strong>Easy way to remember:</strong>
        </p>

        <CodeBlock filename="wsgi_memory.txt">{`WSGI = Bridge

Web Server
    ↕
   WSGI
    ↕
Flask Application`}</CodeBlock>
      </section>

      {/* 4. Jinja2 */}
      <section>
        <h2>4. Jinja2 Template Engine</h2>

        <p>
          <strong>Jinja2</strong> is Flask's template engine.
        </p>

        <p>
          It allows us to create dynamic HTML pages by inserting
          variables, loops, and conditions into HTML files.
        </p>

        <CodeBlock filename="jinja_flow.txt">{`Python / Database
       ↓
      Data
       ↓
     Jinja2
       ↓
   HTML Template
       ↓
  Final Web Page`}</CodeBlock>

        <h3>Jinja2 Syntax</h3>

        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Syntax</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Print variable</td>
              <td>{'{{ variable_name }}'}</td>
            </tr>

            <tr>
              <td>If / For statements</td>
              <td>{'{% if condition %} ... {% endif %}'}</td>
            </tr>

            <tr>
              <td>Comments</td>
              <td>{'{# comment #}'}</td>
            </tr>

            <tr>
              <td>Template inheritance</td>
              <td>{'{% extends "base.html" %}'}</td>
            </tr>

            <tr>
              <td>Include another file</td>
              <td>{'{% include "header.html" %}'}</td>
            </tr>
          </tbody>
        </table>

        <h3>Example HTML Template</h3>

        <CodeBlock filename="templates/index.html">{`<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>

<body>

    <h1>Hello, {{ name }}!</h1>

    {% if items %}

        <ul>
            {% for item in items %}
                <li>{{ item }}</li>
            {% endfor %}
        </ul>

    {% else %}

        <p>No items found.</p>

    {% endif %}

</body>
</html>`}</CodeBlock>

        <h3>Rendering the Template</h3>

        <CodeBlock filename="app.py">{`from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():

    return render_template(
        "index.html",
        name="Tej",
        items=["Apple", "Banana"]
    )


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <p>
          Flask's <strong>render_template()</strong> looks for HTML
          files inside the <strong>templates/</strong> folder.
        </p>
      </section>

      {/* 5. Folder Structure */}
      <section>
        <h2>5. Standard Flask Folder Structure</h2>

        <CodeBlock filename="project_structure.txt">{`flask-project/
│
├── app.py
├── requirements.txt
│
├── templates/
│   ├── index.html
│   ├── about.html
│   └── form.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
└── venv/`}</CodeBlock>

        <table>
          <thead>
            <tr>
              <th>Folder / File</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>app.py</td>
              <td>Main Flask application</td>
            </tr>

            <tr>
              <td>templates/</td>
              <td>HTML templates</td>
            </tr>

            <tr>
              <td>static/</td>
              <td>CSS, JavaScript and images</td>
            </tr>

            <tr>
              <td>requirements.txt</td>
              <td>Project dependencies</td>
            </tr>

            <tr>
              <td>venv/</td>
              <td>Python virtual environment</td>
            </tr>
          </tbody>
        </table>

        <h3>Static Files</h3>

        <p>
          CSS, JavaScript, and images can be placed inside the
          <strong> static/</strong> folder.
        </p>

        <CodeBlock filename="index.html">{`<link
    rel="stylesheet"
    href="{{ url_for('static', filename='css/style.css') }}"
>`}</CodeBlock>
      </section>

      {/* 6. Basic Flask App */}
      <section>
        <h2>6. Basic Flask Application</h2>

        <p>
          Let's create the smallest possible Flask application.
        </p>

        <CodeBlock filename="app.py">{`from flask import Flask

app = Flask(__name__)


@app.route("/")
def welcome():

    return "<h1>Welcome to Flask</h1>"


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <h3>Understanding the Code</h3>

        <p>
          <strong>Flask(__name__)</strong> creates the Flask application.
        </p>

        <p>
          <strong>@app.route("/")</strong> connects the URL
          <strong> /</strong> with the function below it.
        </p>

        <p>
          <strong>def welcome()</strong> executes when a user visits
          the root URL.
        </p>

        <p>
          <strong>app.run(debug=True)</strong> starts Flask's development
          server and enables debugging.
        </p>

        <h3>Debug Mode</h3>

        <p>
          Debug mode provides features such as automatic reloading when
          code changes and a detailed debugger when an error occurs.
        </p>

        <p>
          <strong>Important:</strong> Do not leave debug mode enabled
          in a production deployment.
        </p>
      </section>

      {/* 7. Multiple Routes */}
      <section>
        <h2>7. Multiple Routes</h2>

        <p>
          A Flask application can contain multiple routes.
        </p>

        <CodeBlock filename="app.py">{`from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def welcome():

    return "<h1>Welcome to Flask</h1>"


@app.route("/index")
def index():

    return render_template("index.html")


@app.route("/about")
def about():

    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <p>
          Each route maps a URL to a Python function.
        </p>

        <CodeBlock filename="routes.txt">{`/          → welcome()
/index     → index()
/about     → about()`}</CodeBlock>
      </section>

      {/* 8. GET POST */}
      <section>
        <h2>8. HTTP Methods — GET vs POST</h2>

        <p>
          Flask routes accept <strong>GET</strong> requests by default.
          To accept form submissions, we can explicitly allow
          <strong> POST</strong>.
        </p>

        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>GET</td>
              <td>Retrieve data</td>
            </tr>

            <tr>
              <td>POST</td>
              <td>Send or create data</td>
            </tr>

            <tr>
              <td>PUT</td>
              <td>Update data</td>
            </tr>

            <tr>
              <td>DELETE</td>
              <td>Delete data</td>
            </tr>
          </tbody>
        </table>

        <h3>Flask GET and POST Example</h3>

        <CodeBlock filename="app.py">{`from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/form", methods=["GET", "POST"])
def form():

    if request.method == "POST":

        name = request.form["name"]

        return f"Hello {name}"

    return render_template("form.html")


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <h3>HTML Form</h3>

        <CodeBlock filename="templates/form.html">{`<!DOCTYPE html>
<html>

<body>

    <form action="/form" method="POST">

        <label for="name">
            Enter your name:
        </label>

        <input
            type="text"
            name="name"
            id="name"
        >

        <input
            type="submit"
            value="Submit"
        >

    </form>

</body>
</html>`}</CodeBlock>
      </section>

      {/* 9. Request Object */}
      <section>
        <h2>9. Working with the Request Object</h2>

        <p>
          Flask provides the <strong>request</strong> object to access
          information sent by the client.
        </p>

        <table>
          <thead>
            <tr>
              <th>Expression</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>request.method</td>
              <td>Returns HTTP method such as GET or POST</td>
            </tr>

            <tr>
              <td>request.form</td>
              <td>Accesses submitted form data</td>
            </tr>

            <tr>
              <td>request.args</td>
              <td>Accesses query-string parameters</td>
            </tr>

            <tr>
              <td>request.get_json()</td>
              <td>Reads JSON request data</td>
            </tr>
          </tbody>
        </table>

        <h3>Form Data</h3>

        <CodeBlock filename="form_data.py">{`name = request.form["name"]

print(name)`}</CodeBlock>

        <h3>Query Parameters</h3>

        <p>
          Suppose the URL is:
        </p>

        <CodeBlock filename="url.txt">{`/search?q=flask`}</CodeBlock>

        <p>
          We can access <strong>q</strong> using:
        </p>

        <CodeBlock filename="query_parameter.py">{`query = request.args.get("q")

print(query)`}</CodeBlock>

        <p>
          <strong>Important:</strong> request.method is a string such as
          "GET" or "POST". It is not used to retrieve form fields.
        </p>

        <CodeBlock filename="common_mistake.txt">{`Wrong:

request.method["name"]


Correct:

request.form["name"]`}</CodeBlock>
      </section>

      {/* 10. Dynamic URLs */}
      <section>
        <h2>10. Dynamic URLs — Variable Rules</h2>

        <p>
          Flask allows us to capture values directly from a URL and
          pass them to the Python function.
        </p>

        <CodeBlock filename="dynamic_routes.py">{`from flask import Flask

app = Flask(__name__)


@app.route("/user/<name>")
def greet_user(name):

    return f"Hello, {name}!"


@app.route("/post/<int:post_id>")
def show_post(post_id):

    return f"Post number: {post_id}"


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <h3>Example</h3>

        <CodeBlock filename="dynamic_url.txt">{`/user/Tej

Output:

Hello, Tej!


/post/10

Output:

Post number: 10`}</CodeBlock>

        <h3>URL Converters</h3>

        <table>
          <thead>
            <tr>
              <th>Converter</th>
              <th>Accepts</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{'<string>'}</td>
              <td>Text without a slash</td>
            </tr>

            <tr>
              <td>{'<int:x>'}</td>
              <td>Integer</td>
            </tr>

            <tr>
              <td>{'<float:x>'}</td>
              <td>Floating-point number</td>
            </tr>

            <tr>
              <td>{'<path:x>'}</td>
              <td>Text that can contain slashes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 11. REST APIs */}
      <section>
        <h2>11. Building REST APIs with Flask</h2>

        <p>
          Flask can be used to create <strong>REST APIs</strong>.
        </p>

        <p>
          REST APIs commonly use HTTP methods to perform CRUD operations.
        </p>

        <CodeBlock filename="crud.txt">{`Create  → POST
Read    → GET
Update  → PUT
Delete  → DELETE`}</CodeBlock>

        <h3>Simple REST API</h3>

        <CodeBlock filename="api.py">{`from flask import Flask, jsonify, request

app = Flask(__name__)


items = {
    1: "Apple",
    2: "Banana"
}


@app.route("/items", methods=["GET"])
def get_items():

    return jsonify(items)


@app.route("/items", methods=["POST"])
def create_item():

    data = request.get_json()

    new_id = max(items.keys()) + 1

    items[new_id] = data["name"]

    return jsonify({
        new_id: data["name"]
    }), 201


@app.route("/items/<int:item_id>", methods=["PUT"])
def update_item(item_id):

    data = request.get_json()

    if item_id in items:

        items[item_id] = data["name"]

        return jsonify({
            item_id: items[item_id]
        })

    return jsonify({
        "error": "Not found"
    }), 404


@app.route("/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):

    if item_id in items:

        del items[item_id]

        return jsonify({
            "message": "Deleted"
        }), 200

    return jsonify({
        "error": "Not found"
    }), 404


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>
      </section>

      {/* 12. jsonify */}
      <section>
        <h2>12. jsonify() and JSON Data</h2>

        <p>
          <strong>jsonify()</strong> converts Python dictionaries or
          lists into JSON HTTP responses.
        </p>

        <CodeBlock filename="jsonify.py">{`from flask import jsonify

data = {
    "name": "Tej",
    "role": "AI Engineer"
}

return jsonify(data)`}</CodeBlock>

        <h3>Reading JSON from a Request</h3>

        <CodeBlock filename="request_json.py">{`from flask import request

data = request.get_json()

print(data)`}</CodeBlock>

        <p>
          This is commonly used when APIs receive JSON data from clients
          such as frontend applications, Postman, or other services.
        </p>
      </section>

      {/* 13. Templates vs Raw HTML */}
      <section>
        <h2>13. Why Use Templates Instead of Raw HTML?</h2>

        <p>
          We can return HTML directly from a Flask function:
        </p>

        <CodeBlock filename="bad_example.py">{`@app.route("/")
def home():

    return "<h1>Hello</h1><p>Welcome</p>"`}</CodeBlock>

        <p>
          However, writing large HTML pages inside Python becomes
          difficult to maintain.
        </p>

        <p>
          A better approach is to use:
        </p>

        <CodeBlock filename="better_approach.txt">{`Python
  ↓
render_template()
  ↓
templates/index.html
  ↓
HTML Response`}</CodeBlock>

        <p>
          This keeps Python logic and HTML presentation separate.
        </p>
      </section>

      {/* 14. Requirements */}
      <section>
        <h2>14. requirements.txt</h2>

        <p>
          <strong>requirements.txt</strong> contains the Python
          dependencies required by the project.
        </p>

        <CodeBlock filename="requirements.txt">{`Flask==3.0.3`}</CodeBlock>

        <h3>Generate requirements.txt</h3>

        <CodeBlock filename="terminal.txt">{`pip freeze > requirements.txt`}</CodeBlock>

        <h3>Install Dependencies</h3>

        <CodeBlock filename="terminal.txt">{`pip install -r requirements.txt`}</CodeBlock>

        <p>
          This makes it easier to recreate the project environment
          on another machine.
        </p>
      </section>

      {/* 15. Running */}
      <section>
        <h2>15. Running a Flask Application</h2>

        <p>
          First save your application, for example as
          <strong> app.py</strong>.
        </p>

        <CodeBlock filename="terminal.txt">{`python app.py`}</CodeBlock>

        <p>
          Flask starts its development server.
        </p>

        <CodeBlock filename="terminal_output.txt">{`* Running on http://127.0.0.1:5000

* Debugger is active!`}</CodeBlock>

        <p>
          Open the displayed address in your browser to access the
          application.
        </p>

        <h3>Common HTTP Status Codes</h3>

        <table>
          <thead>
            <tr>
              <th>Status Code</th>
              <th>Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>200</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>201</td>
              <td>Created</td>
            </tr>

            <tr>
              <td>304</td>
              <td>Not Modified</td>
            </tr>

            <tr>
              <td>404</td>
              <td>Not Found</td>
            </tr>

            <tr>
              <td>500</td>
              <td>Internal Server Error</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 16. Complete Mini Project */}
      <section>
        <h2>16. Complete Mini Flask Application</h2>

        <p>
          Here is a small application combining routes, templates,
          forms, and dynamic URLs.
        </p>

        <h3>Project Structure</h3>

        <CodeBlock filename="project.txt">{`flask-app/
│
├── app.py
│
└── templates/
    ├── index.html
    ├── about.html
    └── form.html`}</CodeBlock>

        <h3>app.py</h3>

        <CodeBlock filename="app.py">{`from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():

    return render_template(
        "index.html",
        name="Tej"
    )


@app.route("/about")
def about():

    return render_template("about.html")


@app.route("/user/<name>")
def user(name):

    return f"Hello, {name}!"


@app.route("/form", methods=["GET", "POST"])
def form():

    if request.method == "POST":

        name = request.form["name"]

        return f"Welcome, {name}!"

    return render_template("form.html")


if __name__ == "__main__":
    app.run(debug=True)`}</CodeBlock>

        <h3>index.html</h3>

        <CodeBlock filename="templates/index.html">{`<!DOCTYPE html>
<html>

<head>
    <title>Flask App</title>
</head>

<body>

    <h1>Welcome {{ name }}</h1>

    <p>This is my Flask application.</p>

</body>

</html>`}</CodeBlock>

        <h3>form.html</h3>

        <CodeBlock filename="templates/form.html">{`<!DOCTYPE html>
<html>

<body>

    <h1>Enter Your Name</h1>

    <form
        action="/form"
        method="POST"
    >

        <input
            type="text"
            name="name"
            placeholder="Enter name"
        >

        <button type="submit">
            Submit
        </button>

    </form>

</body>

</html>`}</CodeBlock>
      </section>

      {/* 17. Flask Request Flow */}
      <section>
        <h2>17. How a Flask Request Works</h2>

        <CodeBlock filename="request_flow.txt">{`1. User opens a URL
          ↓
2. Browser sends HTTP request
          ↓
3. Web server receives request
          ↓
4. WSGI forwards request to Flask
          ↓
5. Flask finds matching route
          ↓
6. Route function executes
          ↓
7. Flask creates response
          ↓
8. Response goes back to browser`}</CodeBlock>

        <p>
          This is the basic flow behind a Flask web application.
        </p>
      </section>

      {/* 18. Easy Mental Model */}
      <section>
        <h2>18. Easy Mental Model</h2>

        <CodeBlock filename="flask_mental_model.txt">{`FLASK

Flask
  │
  ├── Routes
  │     └── Decide which function runs
  │
  ├── Request
  │     └── Reads data from user
  │
  ├── Templates
  │     └── HTML pages
  │
  ├── Jinja2
  │     └── Dynamic HTML
  │
  ├── Static
  │     └── CSS / JS / Images
  │
  └── REST API
        └── JSON data`}</CodeBlock>

        <p>
          <strong>One-line memory trick:</strong>
        </p>

        <CodeBlock filename="memory.txt">{`Route → Request → Logic → Response`}</CodeBlock>
      </section>

      {/* 19. Flask Cheat Sheet */}
      <section>
        <h2>19. Flask Cheat Sheet</h2>

        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Remember</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Flask</td>
              <td>Python web framework</td>
            </tr>

            <tr>
              <td>WSGI</td>
              <td>Bridge between web server and Python application</td>
            </tr>

            <tr>
              <td>Flask(__name__)</td>
              <td>Creates Flask application instance</td>
            </tr>

            <tr>
              <td>@app.route()</td>
              <td>Maps URL to function</td>
            </tr>

            <tr>
              <td>render_template()</td>
              <td>Renders HTML from templates folder</td>
            </tr>

            <tr>
              <td>Jinja2</td>
              <td>Creates dynamic HTML</td>
            </tr>

            <tr>
              <td>request.method</td>
              <td>Returns HTTP method</td>
            </tr>

            <tr>
              <td>request.form</td>
              <td>Gets submitted form data</td>
            </tr>

            <tr>
              <td>request.args</td>
              <td>Gets URL query parameters</td>
            </tr>

            <tr>
              <td>request.get_json()</td>
              <td>Reads JSON request data</td>
            </tr>

            <tr>
              <td>jsonify()</td>
              <td>Returns JSON response</td>
            </tr>

            <tr>
              <td>templates/</td>
              <td>HTML files</td>
            </tr>

            <tr>
              <td>static/</td>
              <td>CSS, JS and images</td>
            </tr>

            <tr>
              <td>GET</td>
              <td>Read data</td>
            </tr>

            <tr>
              <td>POST</td>
              <td>Create/send data</td>
            </tr>

            <tr>
              <td>PUT</td>
              <td>Update data</td>
            </tr>

            <tr>
              <td>DELETE</td>
              <td>Delete data</td>
            </tr>

            <tr>
              <td>requirements.txt</td>
              <td>Project dependencies</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 20. Best Practices */}
      <section>
        <h2>20. Best Practices</h2>

        <ul>
          <li>
            Keep HTML inside the <strong>templates/</strong> folder.
          </li>

          <li>
            Keep CSS, JavaScript, and images inside
            <strong> static/</strong>.
          </li>

          <li>
            Use <strong>render_template()</strong> instead of writing
            large HTML strings inside Python.
          </li>

          <li>
            Validate and sanitize user input from forms.
          </li>

          <li>
            Use appropriate HTTP status codes in APIs.
          </li>

          <li>
            Keep dependencies in <strong>requirements.txt</strong>.
          </li>

          <li>
            Use a virtual environment for each project.
          </li>

          <li>
            Never use <strong>debug=True</strong> in production.
          </li>
        </ul>
      </section>

      {/* 21. Interview Questions */}
      <section>
        <h2>21. Flask Interview Questions</h2>

        <h3>Q1. What is Flask?</h3>

        <p>
          Flask is a lightweight Python web framework used for building
          web applications and APIs.
        </p>

        <h3>Q2. Why is Flask called a micro-framework?</h3>

        <p>
          Because Flask provides the essential web features and allows
          developers to add other functionality when required.
        </p>

        <h3>Q3. What is WSGI?</h3>

        <p>
          WSGI is the interface that allows a web server to communicate
          with a Python web application.
        </p>

        <h3>Q4. What is Jinja2?</h3>

        <p>
          Jinja2 is the template engine used by Flask to create
          dynamic HTML pages.
        </p>

        <h3>Q5. What does @app.route() do?</h3>

        <p>
          It maps a URL to a Python function.
        </p>

        <h3>Q6. What is render_template()?</h3>

        <p>
          It loads an HTML template from the templates folder and
          renders it with the provided data.
        </p>

        <h3>Q7. Difference between request.form and request.args?</h3>

        <p>
          <strong>request.form</strong> is used for submitted form data,
          while <strong>request.args</strong> is used for query-string
          parameters in the URL.
        </p>

        <h3>Q8. What is jsonify()?</h3>

        <p>
          jsonify() creates a JSON HTTP response from Python data.
        </p>

        <h3>Q9. What are GET, POST, PUT and DELETE?</h3>

        <p>
          They are HTTP methods commonly used for reading, creating,
          updating, and deleting resources.
        </p>

        <h3>Q10. What is the templates folder?</h3>

        <p>
          It is the folder where Flask looks for HTML templates used
          by render_template().
        </p>

        <h3>Q11. What is the static folder?</h3>

        <p>
          It is commonly used for static files such as CSS,
          JavaScript, and images.
        </p>

        <h3>Q12. Why should debug mode not be used in production?</h3>

        <p>
          Debug mode is intended for development and can expose
          detailed debugging information.
        </p>
      </section>

      {/* 22. Final Summary */}
      <section>
        <h2>22. Final Summary</h2>

        <CodeBlock filename="flask_summary.txt">{`Flask
 ↓
Python Web Framework


Application
 ↓
app = Flask(__name__)


Routing
 ↓
@app.route("/")


HTML Pages
 ↓
render_template()
 ↓
templates/


Dynamic HTML
 ↓
Jinja2


User Input
 ↓
request.form
request.args
request.get_json()


REST API
 ↓
GET
POST
PUT
DELETE


JSON Response
 ↓
jsonify()


Web Server ↔ WSGI ↔ Flask App`}</CodeBlock>

        <p>
          Flask is a lightweight and flexible way to build Python web
          applications, REST APIs, and applications that expose
          machine-learning or AI models through HTTP endpoints.
        </p>
      </section>

      <PageNav
        prev={{
          label: 'Logging',
          path: '/python/logging'
        }}
        next={{
          label: 'Streamlit',
          path: '/python/streamlit'
        }}
      />

    </DocPage>
  );
}