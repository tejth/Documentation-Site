
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function MultithreadingMultiprocessing() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Multithreading & Multiprocessing' }
        ]}
        title="Multithreading & Multiprocessing in Python"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <section>
        <h2>1. Multithreading & Multiprocessing</h2>

        <p>
          Python provides <strong>Multithreading</strong> and{' '}
          <strong>Multiprocessing</strong> to perform multiple tasks
          concurrently or in parallel.
        </p>

        <p>
          The main difference is simple:
        </p>

        <ul>
          <li>
            <strong>Multithreading</strong> → mainly useful for I/O-bound tasks.
          </li>
          <li>
            <strong>Multiprocessing</strong> → mainly useful for CPU-bound tasks.
          </li>
        </ul>

        <CodeBlock filename="basic_idea.txt">{`Multithreading
      ↓
Multiple threads
      ↓
Same process
      ↓
Shared memory
      ↓
Best for I/O-bound tasks


Multiprocessing
      ↓
Multiple processes
      ↓
Separate memory
      ↓
Multiple CPU cores
      ↓
Best for CPU-bound tasks`}</CodeBlock>
      </section>

      {/* 2. Program */}
      <section>
        <h2>2. Program</h2>

        <p>
          A <strong>program</strong> is a sequence of instructions written
          in a programming language such as Python or C++.
        </p>

        <p>
          A program is a passive entity stored on disk. It does nothing
          until it is executed.
        </p>

        <CodeBlock filename="program.py">{`print("Hello World")`}</CodeBlock>

        <p>
          The Python file above is a program. When we execute it,
          it becomes a running process.
        </p>
      </section>

      {/* 3. Process */}
      <section>
        <h2>3. Process</h2>

        <p>
          A <strong>process</strong> is an instance of a program that is
          currently being executed.
        </p>

        <p>
          Every process has its own separate memory space.
        </p>

        <CodeBlock filename="process_memory.txt">{`Process

 ┌──────────────────────────────┐
 │        Code Segment          │
 │        Data Segment          │
 │        Heap                  │
 │                              │
 │        Stack                 │
 │        Registers             │
 └──────────────────────────────┘`}</CodeBlock>

        <h3>Key Properties of a Process</h3>

        <ol>
          <li>
            <strong>Separate memory space</strong> → one process normally
            cannot directly corrupt another process's memory.
          </li>
          <li>
            <strong>Resources</strong> → a process needs resources such as
            memory, CPU and file handles.
          </li>
          <li>
            <strong>Context switching</strong> → switching between processes
            is relatively expensive because the operating system must
            save and restore process state.
          </li>
        </ol>

        <p>
          <strong>Example:</strong> Opening two different applications
          creates separate processes.
        </p>
      </section>

      {/* 4. Thread */}
      <section>
        <h2>4. Thread</h2>

        <p>
          A <strong>thread</strong> is a unit of execution within a process.
        </p>

        <ul>
          <li>A process can have one or more threads.</li>
          <li>
            Threads inside the same process share memory such as the
            code segment, data and heap.
          </li>
          <li>
            Each thread has its own stack and registers.
          </li>
        </ul>

        <CodeBlock filename="thread_memory.txt">{`Process

 ┌──────────────────────────────────┐
 │ Code Segment                     │
 │ Data Segment                     │
 │ Heap                             │
 │                                  │
 │ Stack 1       Registers 1        │
 │ Stack 2       Registers 2        │
 └──────────────────────────────────┘

Threads share:
Code + Data + Heap

Each thread has:
Own Stack + Registers`}</CodeBlock>

        <h3>Example — MS Paint</h3>

        <ul>
          <li><strong>MS Paint</strong> → Process</li>
          <li><strong>Drawing a box</strong> → Thread</li>
          <li><strong>Drawing a circle</strong> → Another Thread</li>
        </ul>

        <p>
          Both threads run inside the same Paint process and share its
          resources.
        </p>
      </section>

      {/* 5. Process vs Thread */}
      <section>
        <h2>5. Process vs Thread</h2>

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Process</th>
              <th>Thread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Definition</td>
              <td>Instance of a program being executed</td>
              <td>Unit of execution within a process</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>Separate memory space</td>
              <td>Shares memory with other threads</td>
            </tr>
            <tr>
              <td>Own resources</td>
              <td>Own memory, stack and registers</td>
              <td>Own stack and registers</td>
            </tr>
            <tr>
              <td>Crash isolation</td>
              <td>Better isolation</td>
              <td>A thread can affect other threads in the process</td>
            </tr>
            <tr>
              <td>Context switching</td>
              <td>More expensive</td>
              <td>Cheaper than process switching</td>
            </tr>
            <tr>
              <td>Best suited for</td>
              <td>CPU-bound tasks</td>
              <td>I/O-bound tasks</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 6. When to use */}
      <section>
        <h2>6. When to Use Multithreading or Multiprocessing?</h2>

        <h3>Multithreading</h3>

        <p>
          Multithreading is mainly useful when a program spends a lot of
          time waiting for external operations.
        </p>

        <ul>
          <li>File operations</li>
          <li>Network requests</li>
          <li>API calls</li>
          <li>Web scraping</li>
          <li>Database queries</li>
        </ul>

        <p>
          Threads allow multiple I/O operations to overlap their waiting time.
        </p>

        <h3>Multiprocessing</h3>

        <p>
          Multiprocessing is mainly useful for tasks that require heavy
          CPU computation.
        </p>

        <ul>
          <li>Mathematical calculations</li>
          <li>Data processing</li>
          <li>Image processing</li>
          <li>Video processing</li>
          <li>CPU-heavy machine learning tasks</li>
        </ul>
      </section>

      {/* 7. GIL */}
      <section>
        <h2>7. Python GIL</h2>

        <p>
          <strong>GIL</strong> stands for <strong>Global Interpreter Lock</strong>.
        </p>

        <p>
          In standard CPython, the GIL means that threads do not achieve
          true CPU parallelism for Python bytecode.
        </p>

        <p>
          However, I/O operations can release the GIL, which is why
          multithreading is still useful for I/O-bound tasks.
        </p>

        <CodeBlock filename="gil.txt">{`CPU-bound task
      ↓
Heavy computation
      ↓
Threads are limited by GIL


I/O-bound task
      ↓
Waiting for network/file/API
      ↓
I/O can release GIL
      ↓
Threads can improve throughput`}</CodeBlock>
      </section>

      {/* 8. Basic Multithreading */}
      <section>
        <h2>8. Basic Multithreading</h2>

        <p>
          Python provides the built-in <strong>threading</strong> module
          for creating and managing threads.
        </p>

        <CodeBlock filename="multithreading.py">{`import threading
import time


def print_numbers():
    for i in range(5):
        time.sleep(2)
        print(f"Number: {i}")


def print_letter():
    for letter in "abcde":
        time.sleep(2)
        print(f"Letter: {letter}")


# Create 2 threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letter)

t = time.time()

# Start the threads
t1.start()
t2.start()

# Wait for the threads to complete
t1.join()
t2.join()

finished_time = time.time() - t

print(finished_time)`}</CodeBlock>

        <h3>Important Methods</h3>

        <ul>
          <li>
            <strong>Thread()</strong> → creates a thread object.
          </li>
          <li>
            <strong>start()</strong> → starts the thread.
          </li>
          <li>
            <strong>join()</strong> → waits for the thread to finish.
          </li>
        </ul>

        <CodeBlock filename="thread_flow.txt">{`Create Thread
      ↓
thread.start()
      ↓
Thread starts execution
      ↓
thread.join()
      ↓
Main program waits
      ↓
Thread finishes`}</CodeBlock>
      </section>

      {/* 9. Basic Multiprocessing */}
      <section>
        <h2>9. Basic Multiprocessing</h2>

        <p>
          Python provides the <strong>multiprocessing</strong> module
          for creating separate processes.
        </p>

        <p>
          Each process has its own Python interpreter and memory space,
          allowing CPU work to run across multiple CPU cores.
        </p>

        <CodeBlock filename="multiprocessing.py">{`import multiprocessing
import time


def square_numbers():
    for i in range(5):
        time.sleep(1)
        print(f"Square: {i * i}")


def cube_numbers():
    for i in range(5):
        time.sleep(1.5)
        print(f"Cube: {i * i * i}")


if __name__ == "__main__":

    # Create 2 processes
    p1 = multiprocessing.Process(target=square_numbers)
    p2 = multiprocessing.Process(target=cube_numbers)

    t = time.time()

    # Start the processes
    p1.start()
    p2.start()

    # Wait for the processes to complete
    p1.join()
    p2.join()

    finished_time = time.time() - t

    print(finished_time)`}</CodeBlock>

        <h3>Why use `if __name__ == "__main__"`?</h3>

        <p>
          This guard is especially important on Windows because new
          processes import the module again. Without the guard,
          the program can repeatedly create new processes.
        </p>

        <CodeBlock filename="main_guard.py">{`if __name__ == "__main__":
    # Start multiprocessing code here
    pass`}</CodeBlock>
      </section>

      {/* 10. ThreadPoolExecutor */}
      <section>
        <h2>10. ThreadPoolExecutor</h2>

        <p>
          <strong>ThreadPoolExecutor</strong> provides an easier way to
          manage multiple threads.
        </p>

        <p>
          Instead of manually creating and joining every thread, we can
          create a pool of worker threads.
        </p>

        <CodeBlock filename="thread_pool.py">{`from concurrent.futures import ThreadPoolExecutor
import time


def print_number(number):
    time.sleep(1)
    return f"Number: {number}"


numbers = [1, 2, 3, 4, 5]


with ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(print_number, numbers)


for result in results:
    print(result)`}</CodeBlock>

        <h3>Important Points</h3>

        <ul>
          <li>
            <strong>max_workers=3</strong> → maximum 3 worker threads
            can run at the same time.
          </li>
          <li>
            <strong>executor.map()</strong> → applies a function to
            every item.
          </li>
          <li>
            The <strong>with</strong> block automatically handles cleanup.
          </li>
          <li>
            Best suited for <strong>I/O-bound</strong> tasks.
          </li>
        </ul>
      </section>

      {/* 11. ProcessPoolExecutor */}
      <section>
        <h2>11. ProcessPoolExecutor</h2>

        <p>
          <strong>ProcessPoolExecutor</strong> is the multiprocessing
          counterpart of ThreadPoolExecutor.
        </p>

        <p>
          It uses separate processes and can utilize multiple CPU cores,
          making it suitable for CPU-bound tasks.
        </p>

        <CodeBlock filename="process_pool.py">{`from concurrent.futures import ProcessPoolExecutor
import time


def square_number(number):
    time.sleep(1)
    return f"Square: {number * number}"


numbers = [1, 2, 3, 4, 5]


if __name__ == "__main__":

    with ProcessPoolExecutor(max_workers=3) as executor:
        results = executor.map(square_number, numbers)


    for result in results:
        print(result)`}</CodeBlock>

        <h3>ThreadPool vs ProcessPool</h3>

        <table>
          <thead>
            <tr>
              <th>Executor</th>
              <th>Uses</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ThreadPoolExecutor</td>
              <td>Threads</td>
              <td>I/O-bound tasks</td>
            </tr>
            <tr>
              <td>ProcessPoolExecutor</td>
              <td>Processes</td>
              <td>CPU-bound tasks</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 12. Passing arguments */}
      <section>
        <h2>12. Passing Arguments to Threads</h2>

        <p>
          Arguments can be passed to a thread using the <strong>args</strong>
          parameter.
        </p>

        <CodeBlock filename="thread_arguments.py">{`import threading


def greet(name):
    print(f"Hello {name}")


thread = threading.Thread(
    target=greet,
    args=("Tej",)
)

thread.start()
thread.join()`}</CodeBlock>

        <p>
          Notice the comma in <strong>("Tej",)</strong>. It creates a tuple
          containing one value.
        </p>
      </section>

      {/* 13. Real World */}
      <section>
        <h2>13. Real-World Example — Web Scraping</h2>

        <p>
          Web scraping is a good example of an <strong>I/O-bound</strong>
          task because the program spends a lot of time waiting for
          responses from web servers.
        </p>

        <p>
          Instead of downloading pages one by one, multiple pages can
          be requested concurrently using threads.
        </p>

        <CodeBlock filename="web_scraping_threads.py">{`"""
Real-World Example: Multithreading for I/O-bound Tasks

Scenario: Web Scraping

Web scraping often involves making numerous network requests.
These tasks are I/O-bound because they spend a lot of time
waiting for responses from servers.
"""

import threading
import requests
from bs4 import BeautifulSoup


urls = [
    "https://python.langchain.com/v0.2/docs/introduction/",
    "https://python.langchain.com/v0.2/docs/concepts/",
    "https://python.langchain.com/v0.2/docs/tutorials/"
]


def fetch_content(url):
    response = requests.get(url)

    soup = BeautifulSoup(
        response.content,
        "html.parser"
    )

    print(
        f"Fetched {len(soup.text)} characters from {url}"
    )


threads = []


for url in urls:

    thread = threading.Thread(
        target=fetch_content,
        args=(url,)
    )

    threads.append(thread)
    thread.start()


# Wait for all threads to complete
for thread in threads:
    thread.join()


print("All pages fetched successfully.")`}</CodeBlock>

        <h3>How It Works</h3>

        <CodeBlock filename="web_scraping_flow.txt">{`URL 1 ──→ Thread 1 ──→ Server
URL 2 ──→ Thread 2 ──→ Server
URL 3 ──→ Thread 3 ──→ Server

              ↓
        Multiple requests
              ↓
        Concurrent waiting
              ↓
        Faster overall work`}</CodeBlock>

        <h3>Important Point</h3>

        <p>
          We store the threads in a list and call <strong>join()</strong>
          after starting all of them. If we joined each thread immediately
          after creating it, the work would become sequential.
        </p>
      </section>

      {/* 14. Concurrency vs Parallelism */}
      <section>
        <h2>14. Concurrency vs Parallelism</h2>

        <h3>Concurrency</h3>

        <p>
          Concurrency means multiple tasks are making progress during
          the same period of time. The tasks may take turns.
        </p>

        <h3>Parallelism</h3>

        <p>
          Parallelism means multiple tasks are actually running at the
          same time, usually on different CPU cores.
        </p>

        <CodeBlock filename="concurrency_parallelism.txt">{`Concurrency

Task A → waiting
Task B → running
Task A → running
Task B → waiting


Parallelism

CPU Core 1 → Task A
CPU Core 2 → Task B

Both execute at the same time.`}</CodeBlock>

        <p>
          In the simple model used here, multithreading is mainly associated
          with concurrency and multiprocessing with CPU parallelism.
        </p>
      </section>

      {/* 15. Decision Guide */}
      <section>
        <h2>15. Which One Should You Use?</h2>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Recommended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>API requests</td>
              <td>Multithreading</td>
            </tr>
            <tr>
              <td>Web scraping</td>
              <td>Multithreading</td>
            </tr>
            <tr>
              <td>Database queries</td>
              <td>Multithreading</td>
            </tr>
            <tr>
              <td>File operations</td>
              <td>Multithreading</td>
            </tr>
            <tr>
              <td>Heavy mathematical calculations</td>
              <td>Multiprocessing</td>
            </tr>
            <tr>
              <td>Image processing</td>
              <td>Multiprocessing</td>
            </tr>
            <tr>
              <td>Video processing</td>
              <td>Multiprocessing</td>
            </tr>
            <tr>
              <td>CPU-heavy data processing</td>
              <td>Multiprocessing</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 16. Cheat Sheet */}
      <section>
        <h2>16. Summary Cheat Sheet</h2>

        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I/O-bound, manual control</td>
              <td>threading.Thread</td>
            </tr>
            <tr>
              <td>I/O-bound, pooled approach</td>
              <td>ThreadPoolExecutor</td>
            </tr>
            <tr>
              <td>CPU-bound, manual control</td>
              <td>multiprocessing.Process</td>
            </tr>
            <tr>
              <td>CPU-bound, pooled approach</td>
              <td>ProcessPoolExecutor</td>
            </tr>
            <tr>
              <td>Start thread/process</td>
              <td>start()</td>
            </tr>
            <tr>
              <td>Wait for completion</td>
              <td>join()</td>
            </tr>
            <tr>
              <td>Pass arguments</td>
              <td>args=(arg1, arg2,)</td>
            </tr>
            <tr>
              <td>Windows multiprocessing</td>
              <td>if __name__ == "__main__":</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 17. Mental Model */}
      <section>
        <h2>17. Easy Mental Model</h2>

        <CodeBlock filename="mental_model.txt">{`                 Python Program
                       |
              ┌────────┴────────┐
              ↓                 ↓
           Thread            Process
              |                 |
        Same memory       Separate memory
              |                 |
        I/O-bound         CPU-bound
              |                 |
              ↓                 ↓
       Threading module   Multiprocessing
              |                 |
              ↓                 ↓
   ThreadPoolExecutor   ProcessPoolExecutor`}</CodeBlock>

        <p>
          <strong>Easy rule:</strong>
        </p>

        <p>
          If your program is mostly <strong>waiting</strong>, think
          <strong> multithreading</strong>.
        </p>

        <p>
          If your program is mostly <strong>calculating</strong>, think
          <strong> multiprocessing</strong>.
        </p>
      </section>

      {/* 18. Interview Questions */}
      <section>
        <h2>18. Interview Questions</h2>

        <h3>Q1. What is a process?</h3>
        <p>
          A process is an instance of a program that is being executed.
          It has its own memory space.
        </p>

        <h3>Q2. What is a thread?</h3>
        <p>
          A thread is a unit of execution inside a process.
        </p>

        <h3>Q3. What is the difference between process and thread?</h3>
        <p>
          Processes have separate memory spaces, while threads inside
          the same process share memory.
        </p>

        <h3>Q4. When should we use multithreading?</h3>
        <p>
          Multithreading is mainly useful for I/O-bound tasks such as
          network requests, APIs, file operations and web scraping.
        </p>

        <h3>Q5. When should we use multiprocessing?</h3>
        <p>
          Multiprocessing is mainly useful for CPU-bound tasks that
          require heavy computation.
        </p>

        <h3>Q6. What is GIL?</h3>
        <p>
          GIL stands for Global Interpreter Lock. In standard CPython,
          it limits simultaneous execution of Python bytecode by multiple
          threads, so threads do not provide true CPU parallelism for
          CPU-bound Python code.
        </p>

        <h3>Q7. What does `start()` do?</h3>
        <p>
          <strong>start()</strong> begins execution of a thread or process.
        </p>

        <h3>Q8. What does `join()` do?</h3>
        <p>
          <strong>join()</strong> waits for a thread or process to finish.
        </p>

        <h3>Q9. What is ThreadPoolExecutor?</h3>
        <p>
          ThreadPoolExecutor manages a pool of worker threads and is
          useful for I/O-bound tasks.
        </p>

        <h3>Q10. What is ProcessPoolExecutor?</h3>
        <p>
          ProcessPoolExecutor manages a pool of separate processes and
          is useful for CPU-bound tasks.
        </p>
      </section>

      {/* 19. Final Summary */}
      <section>
        <h2>19. Final Summary</h2>

        <ul>
          <li><strong>Program</strong> → instructions stored on disk.</li>
          <li><strong>Process</strong> → running instance of a program.</li>
          <li><strong>Thread</strong> → unit of execution inside a process.</li>
          <li><strong>Threads</strong> → share memory within a process.</li>
          <li><strong>Processes</strong> → have separate memory.</li>
          <li><strong>Multithreading</strong> → mainly for I/O-bound tasks.</li>
          <li><strong>Multiprocessing</strong> → mainly for CPU-bound tasks.</li>
          <li><strong>ThreadPoolExecutor</strong> → thread pool.</li>
          <li><strong>ProcessPoolExecutor</strong> → process pool.</li>
          <li><strong>start()</strong> → starts execution.</li>
          <li><strong>join()</strong> → waits for completion.</li>
          <li>
            <strong>if __name__ == "__main__":</strong> → important for
            multiprocessing, especially on Windows.
          </li>
        </ul>

        <CodeBlock filename="one_line_revision.txt">{`I/O-bound  → Multithreading → ThreadPoolExecutor

CPU-bound  → Multiprocessing → ProcessPoolExecutor

start() → Start execution

join()  → Wait for completion`}</CodeBlock>
      </section>

      <PageNav
        prev={{
          label: 'Polymorphism',
          path: '/python/polymorphism'
        }}
        next={{
          label: 'Regular Expressions',
          path: '/python/regular-expressions'
        }}
      />

    </DocPage>
  );
}
