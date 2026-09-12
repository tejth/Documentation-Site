import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function PythonLogging() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Logging' }
        ]}
        title="Logging in Python"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <h2>1. What is Logging?</h2>

      <p>
        <strong>Logging</strong> is the process of recording information about
        what is happening inside a program.
      </p>

      <p>
        Logs help developers understand what happened when an application is
        running, especially when something goes wrong.
      </p>

      <h3>Simple Example</h3>

      <CodeBlock filename="logging_idea.txt">{`Application
     ↓
Something happens
     ↓
Log the information
     ↓
Log File / Console
     ↓
Developer can understand what happened`}</CodeBlock>

      <p>
        Instead of using <code>print()</code> everywhere, real-world
        applications usually use the Python <strong>logging</strong> module.
      </p>

      {/* 2. Why Logging */}
      <h2>2. Why Do We Need Logging?</h2>

      <p>
        Imagine you have an online shopping application.
      </p>

      <p>
        A customer places an order, but the payment fails. Later, the
        developer wants to know what happened.
      </p>

      <p>
        Without logging, it can be difficult to understand the sequence of
        events.
      </p>

      <CodeBlock filename="without_logging.txt">{`Customer places order
        ↓
Payment fails
        ↓
Application continues
        ↓
Developer has no useful information

Problem:
What happened?
Why did payment fail?`}</CodeBlock>

      <p>
        With logging:
      </p>

      <CodeBlock filename="with_logging.txt">{`Customer places order
        ↓
INFO: Order created
        ↓
INFO: Payment processing started
        ↓
ERROR: Payment failed
        ↓
Developer checks logs
        ↓
Finds the problem`}</CodeBlock>

      {/* 3. Logging vs Print */}
      <h2>3. Logging vs print()</h2>

      <p>
        Beginners often use <code>print()</code> to understand what their
        program is doing.
      </p>

      <CodeBlock filename="print_example.py">{`print("User logged in")

print("Payment started")

print("Payment completed")`}</CodeBlock>

      <p>
        This works for simple programs, but it is not ideal for large
        applications.
      </p>

      <h3>Logging provides more control</h3>

      <CodeBlock filename="logging_example.py">{`import logging

logging.info("User logged in")

logging.info("Payment started")

logging.info("Payment completed")`}</CodeBlock>

      <table>
        <thead>
          <tr>
            <th>print()</th>
            <th>logging</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple output</td>
            <td>Designed for application events</td>
          </tr>
          <tr>
            <td>No log levels</td>
            <td>Supports different log levels</td>
          </tr>
          <tr>
            <td>Limited control</td>
            <td>Highly configurable</td>
          </tr>
          <tr>
            <td>Not ideal for large applications</td>
            <td>Suitable for large applications</td>
          </tr>
        </tbody>
      </table>

      {/* 4. Logging Module */}
      <h2>4. Python Logging Module</h2>

      <p>
        Python provides a built-in <code>logging</code> module.
      </p>

      <p>
        Therefore, we normally do not need to install an external package.
      </p>

      <CodeBlock filename="import_logging.py">{`import logging`}</CodeBlock>

      {/* 5. Basic Logging */}
      <h2>5. Basic Logging</h2>

      <p>
        The simplest way to start logging is by using
        <code>logging.basicConfig()</code>.
      </p>

      <CodeBlock filename="basic_logging.py">{`import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application started")

logging.warning("This is a warning")

logging.error("Something went wrong")`}</CodeBlock>

      <p>
        The <code>basicConfig()</code> function provides a simple way to
        configure logging.
      </p>

      {/* 6. Log Levels */}
      <h2>6. Logging Levels</h2>

      <p>
        Logging levels tell us how important a particular message is.
      </p>

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DEBUG</td>
            <td>Detailed information useful for debugging</td>
          </tr>
          <tr>
            <td>INFO</td>
            <td>Normal information about application execution</td>
          </tr>
          <tr>
            <td>WARNING</td>
            <td>Something unexpected happened, but the program can continue</td>
          </tr>
          <tr>
            <td>ERROR</td>
            <td>A problem occurred</td>
          </tr>
          <tr>
            <td>CRITICAL</td>
            <td>A very serious problem occurred</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="log_levels.txt">{`DEBUG
  ↓
Detailed information

INFO
  ↓
Normal application event

WARNING
  ↓
Something unexpected

ERROR
  ↓
Something failed

CRITICAL
  ↓
Very serious failure`}</CodeBlock>

      {/* 7. Debug */}
      <h2>7. DEBUG</h2>

      <p>
        <code>DEBUG</code> is used for detailed information that is mainly
        useful during development and troubleshooting.
      </p>

      <CodeBlock filename="debug.py">{`import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("User ID received: 101")
logging.debug("Starting database query")`}</CodeBlock>

      {/* 8. Info */}
      <h2>8. INFO</h2>

      <p>
        <code>INFO</code> is used to record normal application events.
      </p>

      <CodeBlock filename="info.py">{`import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application started")
logging.info("User logged in")
logging.info("Order created")`}</CodeBlock>

      {/* 9. Warning */}
      <h2>9. WARNING</h2>

      <p>
        <code>WARNING</code> indicates that something unexpected happened,
        but the application may still continue.
      </p>

      <CodeBlock filename="warning.py">{`import logging

logging.basicConfig(level=logging.WARNING)

logging.warning("Disk space is getting low")`}</CodeBlock>

      {/* 10. Error */}
      <h2>10. ERROR</h2>

      <p>
        <code>ERROR</code> is used when an operation fails.
      </p>

      <CodeBlock filename="error.py">{`import logging

logging.basicConfig(level=logging.ERROR)

logging.error("Database connection failed")`}</CodeBlock>

      {/* 11. Critical */}
      <h2>11. CRITICAL</h2>

      <p>
        <code>CRITICAL</code> represents a very serious problem that may
        prevent the application from working properly.
      </p>

      <CodeBlock filename="critical.py">{`import logging

logging.basicConfig(level=logging.CRITICAL)

logging.critical("Application cannot start")`}</CodeBlock>

      {/* 12. BasicConfig */}
      <h2>12. Configuring Logging using basicConfig()</h2>

      <p>
        <code>basicConfig()</code> can be used to configure basic logging
        behaviour.
      </p>

      <CodeBlock filename="basic_config.py">{`import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s - %(message)s'
)

logging.info("Application started")
logging.warning("Low memory")`}</CodeBlock>

      {/* 13. Format */}
      <h2>13. Log Message Format</h2>

      <p>
        The <code>format</code> parameter controls how the log message is
        displayed.
      </p>

      <CodeBlock filename="log_format.py">{`import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info("Application started")`}</CodeBlock>

      <h3>Important Format Fields</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>%(asctime)s</code></td>
            <td>Date and time</td>
          </tr>
          <tr>
            <td><code>%(levelname)s</code></td>
            <td>Log level</td>
          </tr>
          <tr>
            <td><code>%(message)s</code></td>
            <td>Log message</td>
          </tr>
          <tr>
            <td><code>%(name)s</code></td>
            <td>Logger name</td>
          </tr>
          <tr>
            <td><code>%(filename)s</code></td>
            <td>File name</td>
          </tr>
          <tr>
            <td><code>%(lineno)d</code></td>
            <td>Line number</td>
          </tr>
        </tbody>
      </table>

      {/* 14. File Logging */}
      <h2>14. Saving Logs to a File</h2>

      <p>
        Logs can be written to a file instead of only displaying them on the
        console.
      </p>

      <CodeBlock filename="file_logging.py">{`import logging

logging.basicConfig(
    filename='app.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info("Application started")
logging.warning("Low disk space")
logging.error("Database error")`}</CodeBlock>

      <p>
        The messages will be stored inside <code>app.log</code>.
      </p>

      <h3>Real-World Use</h3>

      <CodeBlock filename="file_log_flow.txt">{`Application
     ↓
Logging
     ↓
app.log
     ↓
Developer
     ↓
Check what happened`}</CodeBlock>

      {/* 15. Multiple Loggers */}
      <h2>15. Multiple Loggers</h2>

      <p>
        In a large application, different parts of the application may need
        their own loggers.
      </p>

      <p>
        For example, an e-commerce application may have:
      </p>

      <CodeBlock filename="multiple_loggers.txt">{`E-Commerce Application

        ┌───────────────┐
        │ Authentication│
        └───────┬───────┘
                ↓
        auth_logger

        ┌───────────────┐
        │    Payment    │
        └───────┬───────┘
                ↓
       payment_logger

        ┌───────────────┐
        │    Orders     │
        └───────┬───────┘
                ↓
        order_logger`}</CodeBlock>

      <p>
        Python allows us to create multiple named loggers using
        <code>logging.getLogger()</code>.
      </p>

      <CodeBlock filename="multiple_loggers.py">{`import logging

auth_logger = logging.getLogger("auth")

payment_logger = logging.getLogger("payment")

order_logger = logging.getLogger("order")

auth_logger.info("User logged in")

payment_logger.info("Payment started")

order_logger.info("Order created")`}</CodeBlock>

      {/* 16. Logger Names */}
      <h2>16. Logger Name</h2>

      <p>
        A logger name helps identify which part of the application generated
        the log.
      </p>

      <CodeBlock filename="logger_name.py">{`import logging

logger = logging.getLogger("payment")

logger.warning("Payment gateway is slow")`}</CodeBlock>

      <p>
        Here, <code>payment</code> identifies the source of the log message.
      </p>

      {/* 17. __name__ */}
      <h2>17. Using __name__ with Logger</h2>

      <p>
        A common practice is to create a logger using the module's
        <code>__name__</code>.
      </p>

      <CodeBlock filename="module_logger.py">{`import logging

logger = logging.getLogger(__name__)

logger.info("User service started")`}</CodeBlock>

      <p>
        This automatically gives the logger the name of the current Python
        module.
      </p>

      {/* 18. Logger Architecture */}
      <h2>18. Logging Architecture</h2>

      <p>
        Python logging mainly works using four important components:
      </p>

      <ol>
        <li><strong>Logger</strong></li>
        <li><strong>Handler</strong></li>
        <li><strong>Formatter</strong></li>
        <li><strong>Filter</strong></li>
      </ol>

      <CodeBlock filename="logging_architecture.txt">{`Application
     ↓
   Logger
     ↓
 Handler
     ↓
 Formatter
     ↓
Output

Output can be:
 ↓
Console
File
Other destination`}</CodeBlock>

      {/* 19. Logger */}
      <h2>19. Logger</h2>

      <p>
        A <strong>Logger</strong> is the object that your application uses to
        create log messages.
      </p>

      <CodeBlock filename="logger.py">{`import logging

logger = logging.getLogger("my_app")

logger.info("Application started")`}</CodeBlock>

      {/* 20. Handler */}
      <h2>20. Handler</h2>

      <p>
        A <strong>Handler</strong> decides where the log message should go.
      </p>

      <p>For example:</p>

      <ul>
        <li>Console</li>
        <li>File</li>
        <li>Other destinations</li>
      </ul>

      <CodeBlock filename="handler.py">{`import logging

logger = logging.getLogger("my_app")

console_handler = logging.StreamHandler()

logger.addHandler(console_handler)

logger.warning("Warning message")`}</CodeBlock>

      {/* 21. File Handler */}
      <h2>21. FileHandler</h2>

      <p>
        <code>FileHandler</code> sends log messages to a file.
      </p>

      <CodeBlock filename="file_handler.py">{`import logging

logger = logging.getLogger("my_app")

file_handler = logging.FileHandler("app.log")

logger.addHandler(file_handler)

logger.error("Database error")`}</CodeBlock>

      {/* 22. Formatter */}
      <h2>22. Formatter</h2>

      <p>
        A <strong>Formatter</strong> controls the structure of a log message.
      </p>

      <CodeBlock filename="formatter.py">{`import logging

logger = logging.getLogger("my_app")

handler = logging.StreamHandler()

formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

handler.setFormatter(formatter)

logger.addHandler(handler)

logger.info("Application started")`}</CodeBlock>

      {/* 23. Set Level */}
      <h2>23. Setting Logger and Handler Levels</h2>

      <p>
        A logger and its handlers can have different log levels.
      </p>

      <CodeBlock filename="set_level.py">{`import logging

logger = logging.getLogger("my_app")

logger.setLevel(logging.DEBUG)

handler = logging.StreamHandler()

handler.setLevel(logging.INFO)

logger.addHandler(handler)

logger.debug("Debug message")
logger.info("Info message")
logger.error("Error message")`}</CodeBlock>

      {/* 24. Multiple Handlers */}
      <h2>24. Multiple Handlers</h2>

      <p>
        A single logger can have multiple handlers.
      </p>

      <p>
        For example, we may want:
      </p>

      <CodeBlock filename="multiple_handlers.txt">{`Logger
  │
  ├── Console Handler
  │       ↓
  │    Console
  │
  └── File Handler
          ↓
       app.log`}</CodeBlock>

      <CodeBlock filename="multiple_handlers.py">{`import logging

logger = logging.getLogger("app")

logger.setLevel(logging.DEBUG)

console_handler = logging.StreamHandler()

file_handler = logging.FileHandler("app.log")

formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

console_handler.setFormatter(formatter)

file_handler.setFormatter(formatter)

logger.addHandler(console_handler)

logger.addHandler(file_handler)

logger.info("Application started")

logger.error("Something went wrong")`}</CodeBlock>

      {/* 25. Configuring Logger */}
      <h2>25. Configuring Loggers</h2>

      <p>
        In larger applications, it is better to keep logging configuration
        separate from application logic.
      </p>

      <p>
        A common approach is to create a dedicated logging configuration
        function.
      </p>

      <CodeBlock filename="logging_config.py">{`import logging

def configure_logging():

    logger = logging.getLogger("my_app")

    logger.setLevel(logging.DEBUG)

    console_handler = logging.StreamHandler()

    file_handler = logging.FileHandler("app.log")

    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )

    console_handler.setFormatter(formatter)

    file_handler.setFormatter(formatter)

    logger.addHandler(console_handler)

    logger.addHandler(file_handler)

    return logger`}</CodeBlock>

      {/* 26. Using Configured Logger */}
      <h2>26. Using the Configured Logger</h2>

      <CodeBlock filename="main.py">{`from logging_config import configure_logging

logger = configure_logging()

logger.info("Application started")

logger.warning("Low memory")

logger.error("Database error")`}</CodeBlock>

      {/* 27. Multiple Logger Configuration */}
      <h2>27. Configuring Multiple Loggers</h2>

      <p>
        A large application can have separate loggers for different modules.
      </p>

      <CodeBlock filename="multiple_logger_config.py">{`import logging

def configure_logger(name, filename):

    logger = logging.getLogger(name)

    logger.setLevel(logging.DEBUG)

    handler = logging.FileHandler(filename)

    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )

    handler.setFormatter(formatter)

    logger.addHandler(handler)

    return logger


auth_logger = configure_logger(
    "auth",
    "auth.log"
)

payment_logger = configure_logger(
    "payment",
    "payment.log"
)

order_logger = configure_logger(
    "order",
    "order.log"
)

auth_logger.info("User logged in")

payment_logger.info("Payment completed")

order_logger.info("Order created")`}</CodeBlock>

      <p>
        Now different parts of the application can have separate log files.
      </p>

      <CodeBlock filename="logger_files.txt">{`Authentication
      ↓
   auth.log

Payment
      ↓
  payment.log

Orders
      ↓
   order.log`}</CodeBlock>

      {/* 28. Exception Logging */}
      <h2>28. Logging Exceptions</h2>

      <p>
        Logging is especially useful when an exception occurs.
      </p>

      <CodeBlock filename="exception_logging.py">{`import logging

logging.basicConfig(
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

try:

    result = 10 / 0

except Exception:
    logging.exception("An error occurred")`}</CodeBlock>

      <p>
        <code>logging.exception()</code> records the error along with useful
        traceback information.
      </p>

      {/* 29. Real World */}
      <h2>29. Real-World Use Case: E-Commerce Application</h2>

      <p>
        Imagine an e-commerce application containing three major modules:
      </p>

      <ul>
        <li>Authentication</li>
        <li>Payment</li>
        <li>Orders</li>
      </ul>

      <CodeBlock filename="ecommerce_logging.txt">{`                 E-Commerce App
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     Authentication   Payment       Orders
          ↓             ↓             ↓
     auth_logger   payment_logger  order_logger
          ↓             ↓             ↓
      auth.log     payment.log     order.log`}</CodeBlock>

      <h3>Authentication Logger</h3>

      <CodeBlock filename="auth.py">{`import logging

logger = logging.getLogger("auth")

def login(username):

    logger.info(
        f"Login attempt for user: {username}"
    )

    logger.info("Login successful")`}</CodeBlock>

      <h3>Payment Logger</h3>

      <CodeBlock filename="payment.py">{`import logging

logger = logging.getLogger("payment")

def process_payment():

    logger.info("Payment started")

    try:
        # Payment processing
        logger.info("Payment successful")

    except Exception:
        logger.exception("Payment failed")`}</CodeBlock>

      <h3>Order Logger</h3>

      <CodeBlock filename="orders.py">{`import logging

logger = logging.getLogger("orders")

def create_order():

    logger.info("Creating new order")

    logger.info("Order created successfully")`}</CodeBlock>

      {/* 30. Real World Flow */}
      <h2>30. Real-World Logging Flow</h2>

      <CodeBlock filename="real_world_flow.txt">{`User
 ↓
Login
 ↓
auth_logger
 ↓
auth.log

User
 ↓
Place Order
 ↓
order_logger
 ↓
order.log

User
 ↓
Make Payment
 ↓
payment_logger
 ↓
payment.log

If something fails
 ↓
ERROR / EXCEPTION
 ↓
Developer checks logs`}</CodeBlock>

      {/* 31. Logging Best Practices */}
      <h2>31. Logging Best Practices</h2>

      <p>Some useful rules when using logging:</p>

      <ul>
        <li>Use meaningful log messages.</li>
        <li>Use the correct log level.</li>
        <li>Use named loggers in larger applications.</li>
        <li>Do not log sensitive information such as passwords.</li>
        <li>Use files for persistent logs.</li>
        <li>Use exception logging for unexpected errors.</li>
        <li>Keep logging configuration separate when the application grows.</li>
      </ul>

      <CodeBlock filename="best_practices.txt">{`Good Logging

INFO
→ User successfully logged in

WARNING
→ Disk space is getting low

ERROR
→ Database connection failed

CRITICAL
→ Application cannot start

Avoid:
→ password=123456
→ credit card details
→ unnecessary sensitive information`}</CodeBlock>

      {/* 32. Complete Example */}
      <h2>32. Complete Logging Example</h2>

      <CodeBlock filename="complete_logging.py">{`import logging

# Create logger
logger = logging.getLogger("shopping_app")

# Set logger level
logger.setLevel(logging.DEBUG)

# Create console handler
console_handler = logging.StreamHandler()

# Create file handler
file_handler = logging.FileHandler("shopping.log")

# Create formatter
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# Apply formatter
console_handler.setFormatter(formatter)

file_handler.setFormatter(formatter)

# Add handlers
logger.addHandler(console_handler)

logger.addHandler(file_handler)


def login(username):

    logger.info(
        f"Login attempt: {username}"
    )


def create_order(order_id):

    logger.info(
        f"Order created: {order_id}"
    )


def make_payment(amount):

    logger.info(
        f"Payment started: {amount}"
    )

    try:

        if amount <= 0:
            raise ValueError(
                "Invalid payment amount"
            )

        logger.info("Payment successful")

    except Exception:

        logger.exception(
            "Payment failed"
        )


# Application
logger.info("Application started")

login("tej")

create_order(101)

make_payment(500)

make_payment(-10)

logger.info("Application finished")`}</CodeBlock>

      {/* 33. Logging Architecture */}
      <h2>33. Complete Logging Architecture</h2>

      <CodeBlock filename="complete_architecture.txt">{`                 Python Application
                         │
                         ↓
                      Logger
                         │
                ┌────────┴────────┐
                ↓                 ↓
        Console Handler      File Handler
                ↓                 ↓
             Console          app.log
                │                 │
                └────────┬────────┘
                         ↓
                      Formatter
                         ↓
                 Formatted Log
                         ↓
              Developer / Monitoring`}</CodeBlock>

      {/* 34. Quick Revision */}
      <h2>34. Quick Revision</h2>

      <CodeBlock filename="logging_revision.txt">{`logging
→ Python's built-in logging module

Logger
→ Creates log messages

Handler
→ Decides where logs go

Formatter
→ Controls log format

Filter
→ Controls which records are allowed

DEBUG
→ Detailed debugging information

INFO
→ Normal application information

WARNING
→ Unexpected situation

ERROR
→ Operation failed

CRITICAL
→ Very serious problem

getLogger()
→ Create/get a named logger

basicConfig()
→ Basic logging configuration

FileHandler
→ Send logs to a file

StreamHandler
→ Send logs to console

exception()
→ Log exception with traceback`}</CodeBlock>

      {/* 35. Mental Model */}
      <h2>35. Complete Mental Model</h2>

      <CodeBlock filename="logging_mental_model.txt">{`Application
     ↓
   Logger
     ↓
Create Log Message
     ↓
Choose Log Level
     ↓
   Handler
     ↓
┌──────────────┬──────────────┐
↓              ↓
Console       File
↓              ↓
Terminal      app.log
       \        /
        \      /
         ↓    ↓
       Formatter
           ↓
      Final Log`}</CodeBlock>

      {/* 36. Interview Questions */}
      <h2>36. Interview Questions</h2>

      <h3>1. What is logging in Python?</h3>

      <p>
        Logging is the process of recording information about the execution
        and behaviour of an application.
      </p>

      <h3>2. Why is logging better than print()?</h3>

      <p>
        Logging provides levels, formatting, file output, multiple loggers,
        handlers and better control over application messages.
      </p>

      <h3>3. What are the logging levels?</h3>

      <p>
        The main levels are DEBUG, INFO, WARNING, ERROR and CRITICAL.
      </p>

      <h3>4. What is a Logger?</h3>

      <p>
        A Logger is an object used by an application to create log messages.
      </p>

      <h3>5. What is a Handler?</h3>

      <p>
        A Handler determines where a log message should be sent, such as the
        console or a file.
      </p>

      <h3>6. What is a Formatter?</h3>

      <p>
        A Formatter controls the structure and appearance of log messages.
      </p>

      <h3>7. What is getLogger()?</h3>

      <p>
        <code>getLogger()</code> is used to create or retrieve a named logger.
      </p>

      <h3>8. Why use multiple loggers?</h3>

      <p>
        Multiple loggers allow different parts of a large application to
        maintain separate and meaningful logging.
      </p>

      <h3>9. What is FileHandler?</h3>

      <p>
        FileHandler sends log messages to a file.
      </p>

      <h3>10. What does logging.exception() do?</h3>

      <p>
        It logs an exception and includes traceback information that helps
        developers understand where the error occurred.
      </p>

      {/* 37. Summary */}
      <h2>37. Summary</h2>

      <p>
        Logging is an important part of real-world Python applications because
        it helps developers understand what is happening inside their
        applications.
      </p>

      <CodeBlock filename="final_summary.txt">{`Python Logging
      ↓
    Logger
      ↓
Log Level
      ↓
   Handler
      ↓
┌───────────┬───────────┐
↓           ↓
Console     File
             ↓
          app.log

Important Levels:
DEBUG
INFO
WARNING
ERROR
CRITICAL

Important Components:
Logger
Handler
Formatter
Filter`}</CodeBlock>

      <p>
        The easiest way to remember the logging system is:
      </p>

      <CodeBlock filename="easy_memory.txt">{`Logger
→ "Create the message"

Handler
→ "Where should it go?"

Formatter
→ "How should it look?"

Level
→ "How important is it?"`}</CodeBlock>

      <PageNav
        prev={{ label: 'SQLite3', path: '/python/sqlite3' }}
        next={{ label: 'Python Exception Handling', path: '/python/exception-handling' }}
      />

    </DocPage>
  );
}