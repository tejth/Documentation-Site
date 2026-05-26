import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonMultiThreading = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Multithreading' }
        ]}
        title="Multithreading in Python"
        readTime="22 min read"
        level="Advanced"
        updated="May 2026"
      />

      <h2>What is Multithreading?</h2>

      <ul>
        <li>
          <p>
            Multithreading allows a program to run multiple tasks together.
          </p>
        </li>

        <li>
          <p>
            It improves performance and responsiveness of applications.
          </p>
        </li>

        <li>
          <p>
            Python provides multithreading using threading module.
          </p>
        </li>
      </ul>

      <h2>Using Thread in Python</h2>

      <h3>1. Basic Thread Example</h3>

      <CodeBlock filename="basic_thread.py">{`<span class="cmt"># Basic thread example</span>

import threading

import time

def task():

    print("Task started")

    time.sleep(3)

    print("Task completed")

t1 = threading.Thread(target = task)

t1.start()

print("Program ended")`}</CodeBlock>

      <h2>Important Terms in Multithreading</h2>

      <h3>a) Thread</h3>

      <ul>
        <li>
          <p>
            A small unit of execution inside a process.
          </p>
        </li>
      </ul>

      <h3>b) Main Thread</h3>

      <ul>
        <li>
          <p>
            Default thread that starts when program runs.
          </p>
        </li>
      </ul>

      <h3>c) Worker Thread</h3>

      <ul>
        <li>
          <p>
            Extra thread created to perform tasks.
          </p>
        </li>
      </ul>

      <h3>d) Concurrency</h3>

      <ul>
        <li>
          <p>
            Handling multiple tasks together.
          </p>
        </li>
      </ul>

      <h3>e) Parallelism</h3>

      <ul>
        <li>
          <p>
            Running tasks simultaneously using multiple CPUs.
          </p>
        </li>
      </ul>

      <h2>start() Method</h2>

      <ul>
        <li>
          <p>
            start() starts thread execution.
          </p>
        </li>

        <li>
          <p>
            Without start(), thread will not run.
          </p>
        </li>
      </ul>

      <CodeBlock filename="start_method.py">{`<span class="cmt"># start() example</span>

import threading

def show():

    print("Thread running")

t1 = threading.Thread(target = show)

t1.start()`}</CodeBlock>

      <h2>join() Method</h2>

      <ul>
        <li>
          <p>
            join() makes main program wait until thread finishes execution.
          </p>
        </li>
      </ul>

      <h3>2. join() Example</h3>

      <CodeBlock filename="join_method.py">{`<span class="cmt"># join() example</span>

import threading

import time

def task():

    time.sleep(2)

    print("Thread Finished")

t1 = threading.Thread(target = task)

t1.start()

t1.join()

print("Main Program Ended")`}</CodeBlock>

      <h2>Multiple Threads Example</h2>

      <h3>3. Multiple Threads</h3>

      <CodeBlock filename="multiple_threads.py">{`<span class="cmt"># Multiple threads example</span>

import threading

import time

def task(name):

    print(f"{name} started")

    time.sleep(2)

    print(f"{name} completed")

t1 = threading.Thread(target = task, args = ("Thread 1",))

t2 = threading.Thread(target = task, args = ("Thread 2",))

t1.start()

t2.start()

t1.join()

t2.join()

print("All work done")`}</CodeBlock>

      <h2>Real-Life Project Example</h2>

      <h3>4. Downloading Multiple Files Simultaneously</h3>

      <CodeBlock filename="file_downloader.py">{`<span class="cmt"># Multithreading project example</span>

import threading

import time

<span class="cmt"># Function to simulate file downloading</span>

def download_file(file_name):

    print(f"Starting download: {file_name}")

    <span class="cmt"># Simulate download time</span>

    time.sleep(3)

    print(f"Download completed: {file_name}")

<span class="cmt"># Main function</span>

def main():

    files = [

        "movie.mp4",

        "song.mp3",

        "image.png",

        "notes.pdf"

    ]

    threads = []

    <span class="cmt"># Creating threads</span>

    for file in files:

        t = threading.Thread(

            target = download_file,

            args = (file,)

        )

        threads.append(t)

        t.start()

    <span class="cmt"># Wait for all threads to finish</span>

    for t in threads:

        t.join()

    print("\\nAll files downloaded successfully")

<span class="cmt"># Special block</span>

if __name__ == "__main__":

    main()`}</CodeBlock>

      <h2>What is if __name__ == "__main__" ?</h2>

      <ul>
        <li>
          <p>
            This special condition checks whether the file is executed directly
            or imported into another file.
          </p>
        </li>

        <li>
          <p>
            If the file runs directly:
          </p>
        </li>

        <li>
          <p>
            __name__ becomes "__main__"
          </p>
        </li>

        <li>
          <p>
            Then main() function executes.
          </p>
        </li>

        <li>
          <p>
            If the file is imported into another Python file:
          </p>
        </li>

        <li>
          <p>
            main() will NOT run automatically.
          </p>
        </li>
      </ul>

      <h3>5. Example of __name__</h3>

      <CodeBlock filename="main_block.py">{`<span class="cmt"># Example of __name__ block</span>

def greet():

    print("Hello Tej")

if __name__ == "__main__":

    greet()`}</CodeBlock>

      <h2>Why is __main__ Important?</h2>

      <ul>
        <li>
          <p>
            Prevents unwanted code execution during imports.
          </p>
        </li>

        <li>
          <p>
            Helps organize large Python projects.
          </p>
        </li>

        <li>
          <p>
            Makes code reusable and modular.
          </p>
        </li>
      </ul>

      <h2>Daemon Threads</h2>

      <ul>
        <li>
          <p>
            Daemon threads run in background.
          </p>
        </li>

        <li>
          <p>
            They stop automatically when main program ends.
          </p>
        </li>
      </ul>

      <h3>6. Daemon Thread Example</h3>

      <CodeBlock filename="daemon_thread.py">{`<span class="cmt"># Daemon thread example</span>

import threading

import time

def background_task():

    while True:

        print("Background task running")

        time.sleep(1)

t1 = threading.Thread(target = background_task)

t1.daemon = True

t1.start()

time.sleep(3)

print("Main program ended")`}</CodeBlock>

      <h2>Advantages of Multithreading</h2>

      <ul>
        <li>
          <p>
            Faster execution of tasks.
          </p>
        </li>

        <li>
          <p>
            Better responsiveness.
          </p>
        </li>

        <li>
          <p>
            Useful for downloading and background operations.
          </p>
        </li>
      </ul>

      <h2>Disadvantages of Multithreading</h2>

      <ul>
        <li>
          <p>
            Debugging becomes difficult.
          </p>
        </li>

        <li>
          <p>
            Shared data can create synchronization problems.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is multithreading in Python?
          </p>
        </li>

        <li>
          <p>
            Difference between thread and process.
          </p>
        </li>

        <li>
          <p>
            What is start() method?
          </p>
        </li>

        <li>
          <p>
            What is join() method?
          </p>
        </li>

        <li>
          <p>
            What is daemon thread?
          </p>
        </li>

        <li>
          <p>
            What is if __name__ == "__main__" used for?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Polymorphism', path: '/python/polymorphism' }}
    
      />

    </DocPage>
  );
};

export default PythonMultiThreading;