import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, Callout, PageNav } from '../../components/DocLayout';

export default function PythonIntro() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Python', href: '/python/intro' }, { label: 'Introduction' }]}
        title="🐍 Python — Introduction"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />
      <p className="doc-intro">
        Python is a high-level, interpreted, general-purpose programming language known for its clean syntax and readability. Created by Guido van Rossum in 1991, Python has become one of the world's most popular languages — used in web development, data science, AI/ML, automation, and more.
      </p>

      <h2>What is Python?</h2>
      <p>Python is an <strong>interpreted</strong> language, meaning code is executed line-by-line by the Python interpreter rather than being compiled to machine code first. This makes it easy to test and debug, but slightly slower than compiled languages like C or Java.</p>
      <p>Python was developed by <strong>Guido van Rossum</strong> in 1991.</p>
      <p>Key characteristics of Python:</p>
      <ul>
        <li><strong>Readable syntax</strong> — Python uses indentation instead of braces, forcing clean code.</li>
        <li><strong>Dynamically typed</strong> — You don't declare variable types; Python figures it out at runtime.</li>
        <li><strong>Multi-paradigm</strong> — Supports procedural, object-oriented, and functional programming styles.</li>
        <li><strong>Large standard library</strong> — "Batteries included" means tons of built-in modules.</li>
        <li><strong>Huge ecosystem</strong> — PyPI hosts 500,000+ packages for everything imaginable.</li>
        <li><strong>High-Level Language</strong> — Abstracts away low-level details, making it easier to write and understand code.</li>
        <li><strong>Object Oriented</strong> — Supports concept of classes and objects.</li>
        <li><strong>Large Number of Applications</strong> — Used in web development, data science, AI/ML, automation, Instagram Backend, Youtube Recommendation Algorithm and more.</li>
      </ul>
      <Callout type="info" title="💡 Fun Fact">
        Python's name comes from "Monty Python's Flying Circus," not the snake. Guido van Rossum was a fan while writing Python.
      </Callout>

      <h2>Installing Python</h2>
      <p>Download the latest version from <code>python.org</code>. As of 2026, Python 3.13 is the stable release. Always use Python 3 — Python 2 reached end-of-life in 2020.</p>
      <CodeBlock filename="terminal">{`<span class="cmt"># Check Python version</span>
python --version
<span class="cmt"># Python 3.13.0</span>

<span class="cmt"># Install a package using pip</span>
pip install requests

<span class="cmt"># Create a virtual environment (best practice)</span>
python -m venv myenv
source myenv/bin/activate   <span class="cmt"># macOS/Linux</span>
myenv\\Scripts\\activate      <span class="cmt"># Windows</span>`}</CodeBlock>

      <h2>Your First Python Program</h2>
      <p>Let's start with the classic Hello World and then look at some basic Python concepts:</p>
      <CodeBlock filename="hello.py">{`<span class="cmt"># This is a comment</span>
<span class="fn">print</span>(<span class="str">"Hello, World!"</span>)

<span class="cmt"># Variables — no type declaration needed</span>
name = <span class="str">"Tej"</span>
age = <span class="num">22</span>
gpa = <span class="num">8.5</span>
is_student = <span class="kw">True</span>

<span class="cmt"># String formatting (f-strings — the modern way)</span>
<span class="fn">print</span>(<span class="str">f"My name is {'{'}name{'}'} and I am {'{'}age{'}'} years old."</span>)

<span class="cmt"># Multiple assignment</span>
x, y, z = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>
a = b = c = <span class="num">0</span>`}</CodeBlock>

      <h2>Why Learn Python?</h2>
      <p>Python is used across virtually every domain of software development. As a CSE student, Python is one of the most valuable tools in your arsenal:</p>
      <ul>
        <li>🤖 <strong>AI & Machine Learning</strong> — TensorFlow, PyTorch, scikit-learn, Hugging Face</li>
        <li>🌐 <strong>Web Development</strong> — Flask, Django, FastAPI</li>
        <li>📊 <strong>Data Science</strong> — pandas, NumPy, Matplotlib, Seaborn</li>
        <li>🔧 <strong>Automation & Scripting</strong> — file operations, web scraping, task automation</li>
        <li>🔗 <strong>LLM / AI Apps</strong> — LangChain, LangGraph, OpenAI, Anthropic SDKs</li>
        <li>☁️ <strong>DevOps & Cloud</strong> — AWS Lambda, Google Cloud Functions, Ansible</li>
      </ul>
      <Callout type="warn" title="⚠️ Note">
        Python can be slower than Java or C++ for CPU-intensive tasks. For performance-critical code, look into NumPy (which uses C under the hood) or consider PyPy — a faster Python implementation.
      </Callout>

      <PageNav
        prev={{ label: 'Overview', path: '/' }}
        next={{ label: 'Basics Of Python', path: '/python/data-types' }}
      />
    </DocPage>
  );
}
