import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const Runnables = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'LangChain', href: '/langchain/runnables' },
          { label: 'Runnables' }
        ]}
        title="LangChain Runnables"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* ============================= */}
      {/* INTRODUCTION */}
      {/* ============================= */}

      <section>
        <h2>Why Need of Runnables in LangChain?</h2>

        <p>
          Initially, LangChain handled different tasks using separate
          components such as Prompt Templates, LLM wrappers and Output
          Parsers.
        </p>

        <p>
          However, these components were not always easy to connect because
          different components could have different interfaces.
        </p>

        <p>
          To solve this problem, LangChain introduced <strong>Runnables</strong>.
        </p>

        <p>
          A Runnable provides a standardized interface for components.
          Each Runnable follows a simple pattern:
        </p>

        <div className="info-box">
          <strong>Input → Process → Output</strong>
        </div>

        <p>
          This makes it easier to:
        </p>

        <ul>
          <li>Chain multiple steps together</li>
          <li>Reuse components</li>
          <li>Build complex workflows</li>
          <li>Create modular pipelines</li>
          <li>Scale LangChain applications more easily</li>
        </ul>

        <p>
          In short, <strong>Runnables unify how components interact</strong>,
          making LangChain pipelines more modular, consistent and easier
          to build.
        </p>
      </section>

      {/* ============================= */}
      {/* REAL LIFE ANALOGY */}
      {/* ============================= */}

      <section>
        <h2>🎬 Imagine This — Real-Life Analogy</h2>

        <p>
          Imagine that you walk into a restaurant kitchen.
        </p>

        <table>
          <thead>
            <tr>
              <th>Real Life</th>
              <th>LangChain</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Order</td>
              <td>Input</td>
            </tr>

            <tr>
              <td>Chef</td>
              <td>LLM</td>
            </tr>

            <tr>
              <td>Recipe</td>
              <td>Prompt</td>
            </tr>

            <tr>
              <td>Waiter plating nicely</td>
              <td>Output Parser</td>
            </tr>
          </tbody>
        </table>

        <p>
          The complete kitchen system can be compared to a
          <strong> Runnable pipeline</strong>.
        </p>

        <div className="info-box">
          <strong>
            Full Kitchen System = Runnable Pipeline
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* WHAT IS RUNNABLE */}
      {/* ============================= */}

      <section>
        <h2>🧠 What Runnable Really Is</h2>

        <p>
          Forget the complicated definition for a moment.
        </p>

        <p>
          Think of a Runnable as a worker who has only one job:
        </p>

        <blockquote>
          "Give me input, I'll give you output. No drama."
        </blockquote>

        <p>
          Every Runnable follows the same basic idea:
        </p>

        <div className="info-box">
          <strong>Input → Output</strong>
        </div>

        <p>
          In simple words:
        </p>

        <blockquote>
          "Bas input de, output le ja."
        </blockquote>

        <p>
          This common interface is what makes different LangChain
          components easy to connect.
        </p>
      </section>

      {/* ============================= */}
      {/* PROBLEM WITHOUT RUNNABLES */}
      {/* ============================= */}

      <section>
        <h2>🔥 Why LangChain Created Runnables?</h2>

        <p>
          Before Runnables, developers often had to manually call different
          components one after another.
        </p>

        <CodeBlock filename="messy_approach.py">{`# Without Runnables

prompt.format()
model.generate()
parse_output()`}</CodeBlock>

        <p>
          The problem was that different components did not always
          communicate in a consistent way.
        </p>

        <div className="warning-box">
          <strong>Problem:</strong> Everything was different, so connecting
          components cleanly could become difficult.
        </div>

        <p>
          It was like hiring three workers who don't talk to each other. 😭
        </p>
      </section>

      {/* ============================= */}
      {/* AFTER RUNNABLES */}
      {/* ============================= */}

      <section>
        <h2>😎 After Runnables</h2>

        <p>
          With Runnables, components follow a common input-output interface.
        </p>

        <CodeBlock filename="runnable_pipeline.py">{`prompt | model | parser`}</CodeBlock>

        <p>
          The output of one component automatically becomes the input of
          the next component.
        </p>

        <div className="info-box">
          <strong>
            Prompt → Model → Parser → Final Output
          </strong>
        </div>

        <p>
          This makes the complete pipeline cleaner and easier to understand.
        </p>
      </section>

      {/* ============================= */}
      {/* PIPE OPERATOR */}
      {/* ============================= */}

      <section>
        <h2>⚡ The "|" Operator — The Hero</h2>

        <p>
          The <code>|</code> operator is one of the most important concepts
          when working with LangChain Runnables.
        </p>

        <p>
          Think of <code>|</code> as a:
        </p>

        <ul>
          <li>Pipe</li>
          <li>Pipeline</li>
          <li>Conveyor belt</li>
        </ul>

        <CodeBlock filename="pipeline_flow.txt">{`Input
   ↓
[Prompt]
   ↓
[Model]
   ↓
[Parser]
   ↓
Output`}</CodeBlock>

        <p>
          So this:
        </p>

        <CodeBlock filename="simple_lcel.py">{`prompt | model | parser`}</CodeBlock>

        <p>
          means:
        </p>

        <div className="info-box">
          <strong>
            Input → Prompt → Model → Parser → Output
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* HARD CODED RUNNABLE */}
      {/* ============================= */}

      <section>
        <h2>Hardcoded Runnable Example</h2>

        <p>
          Before understanding LangChain's built-in Runnables, it is useful
          to create a small Runnable-like system manually.
        </p>

        <p>
          The following example creates a fake LLM, Prompt Template and
          Chain class.
        </p>

        <CodeBlock filename="hardcoded_runnable.py">{`import random


# Fake LLM class
# This simulates a real AI model
class NakliLLM:

    def __init__(self):
        # Runs when object is created
        print('LLM created')

    def predict(self, prompt):
        # This function takes a prompt
        # and returns a random response

        response_list = [
            'Delhi is the capital of India',
            'IPL is a cricket league',
            'AI stands for Artificial Intelligence'
        ]

        # Randomly pick one response
        # and return it as a dictionary
        return {'response': random.choice(response_list)}


# Fake Prompt Template
# Similar to LangChain PromptTemplate
class NakliPromptTemplate:

    def __init__(self, template, input_variables):

        # Store template and variables
        self.template = template
        self.input_variables = input_variables

    def format(self, input_dict):

        # Replace variables in template
        # with actual values
        return self.template.format(**input_dict)


# Create a prompt template
template = NakliPromptTemplate(
    template='Write a {length} poem about {topic}',
    input_variables=['length', 'topic']
)


# Fill the template with actual values
prompt = template.format({
    'length': 'short',
    'topic': 'india'
})


# Create fake LLM object
llm = NakliLLM()


# Call LLM with generated prompt
llm.predict(prompt)


# Fake Chain class
# Combines Prompt + LLM
class NakliLLMChain:

    def __init__(self, llm, prompt):

        # Store LLM and prompt template
        self.llm = llm
        self.prompt = prompt

    def run(self, input_dict):

        # Step 1:
        # Create final prompt
        final_prompt = self.prompt.format(input_dict)

        # Step 2:
        # Send prompt to LLM
        result = self.llm.predict(final_prompt)

        # Step 3:
        # Return only response text
        return result['response']


# Create template again
template = NakliPromptTemplate(
    template='Write a {length} poem about {topic}',
    input_variables=['length', 'topic']
)


# Create LLM
llm = NakliLLM()


# Create chain
chain = NakliLLMChain(llm, template)


# Run chain with inputs
chain.run({
    'length': 'short',
    'topic': 'india'
})`}</CodeBlock>

        <p>
          The above code manually creates a small AI pipeline.
        </p>

        <p>
          First, the input is converted into a prompt. Then the prompt is
          sent to the fake LLM. Finally, the response is returned.
        </p>

        <div className="info-box">
          <strong>
            Input → Prompt → LLM → Response
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* MANUAL CHAIN EXPLANATION */}
      {/* ============================= */}

      <section>
        <h2>What Did We Actually Build?</h2>

        <p>
          We created a custom chain class that connects the Prompt Template
          and LLM together.
        </p>

        <p>
          Instead of manually performing:
        </p>

        <ol>
          <li>Create prompt</li>
          <li>Send prompt to LLM</li>
          <li>Read response</li>
        </ol>

        <p>
          We wrapped these operations inside a single function.
        </p>

        <div className="info-box">
          <strong>Input → Process → Output</strong>
        </div>

        <p>
          This is basically the same idea behind a Runnable.
        </p>

        <p>
          LangChain provides this functionality in a standardized and
          reusable way.
        </p>
      </section>

      {/* ============================= */}
      {/* RUNNABLE PRIMITIVES */}
      {/* ============================= */}

      <section>
        <h2>🧱 Runnable Primitives</h2>

        <p>
          Runnable primitives are the basic building blocks used to construct
          LangChain workflows.
        </p>

        <table>
          <thead>
            <tr>
              <th>Runnable</th>
              <th>Simple Definition</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>RunnableSequence</td>
              <td>Runs multiple steps one after another.</td>
            </tr>

            <tr>
              <td>RunnableParallel</td>
              <td>Runs multiple branches at the same time.</td>
            </tr>

            <tr>
              <td>RunnablePassthrough</td>
              <td>Passes the input forward without changing it.</td>
            </tr>

            <tr>
              <td>RunnableBranch</td>
              <td>Chooses a path based on a condition.</td>
            </tr>

            <tr>
              <td>RunnableLambda</td>
              <td>Converts a normal Python function into a Runnable.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================= */}
      {/* CUSTOM RUNNABLE IMPLEMENTATION */}
      {/* ============================= */}

      <section>
        <h2>Creating Our Own Runnable System</h2>

        <p>
          We can understand Runnable primitives better by implementing a
          simplified version ourselves.
        </p>

        <CodeBlock filename="custom_runnable.py">{`from abc import ABC, abstractmethod
import random


# ==============================
# Base Runnable
# ==============================

class Runnable(ABC):

    @abstractmethod
    def invoke(self, input_data):
        pass

    # Every Runnable MUST implement invoke()
    # This is the core standard
    # Input → Output


# ==============================
# Task-Specific Runnable (LLM)
# ==============================

class NakliLLM(Runnable):

    def __init__(self):
        print('LLM created')

    def invoke(self, prompt):

        # Simulates an LLM response
        response_list = [
            'Delhi is the capital of India',
            'IPL is a cricket league',
            'AI stands for Artificial Intelligence'
        ]

        return {
            'response': random.choice(response_list)
        }

    def predict(self, prompt):

        # Extra method
        # Not required by Runnable
        # Used only for demonstration

        response_list = [
            'Delhi is the capital of India',
            'IPL is a cricket league',
            'AI stands for Artificial Intelligence'
        ]

        return {
            'response': random.choice(response_list)
        }


# ==============================
# Task-Specific Runnable
# Prompt Template
# ==============================

class NakliPromptTemplate(Runnable):

    def __init__(self, template, input_variables):

        self.template = template
        self.input_variables = input_variables

    def invoke(self, input_dict):

        # Converts dictionary input
        # into formatted prompt
        return self.template.format(**input_dict)

    def format(self, input_dict):

        # Helper method
        return self.template.format(**input_dict)


# ==============================
# Task-Specific Runnable
# Output Parser
# ==============================

class NakliStrOutputParser(Runnable):

    def __init__(self):
        pass

    def invoke(self, input_data):

        # Extract only response text
        return input_data['response']


# ==============================
# Runnable Primitive
# Connector / Chain
# ==============================

class RunnableConnector(Runnable):

    def __init__(self, runnable_list):

        self.runnable_list = runnable_list

    def invoke(self, input_data):

        # Run all Runnables sequentially
        # Output of one becomes
        # input of the next

        for runnable in self.runnable_list:
            input_data = runnable.invoke(input_data)

        return input_data


# ==============================
# Example 1: Simple Chain
# ==============================

# Step 1: Create prompt template
template = NakliPromptTemplate(
    template='Write a {length} poem about {topic}',
    input_variables=['length', 'topic']
)


# Step 2: Create fake LLM
llm = NakliLLM()


# Step 3: Create parser
parser = NakliStrOutputParser()


# Step 4: Connect everything
chain = RunnableConnector([
    template,
    llm,
    parser
])


# Flow:
# dict
#   ↓
# template
#   ↓
# string prompt
#   ↓
# LLM
#   ↓
# dictionary
#   ↓
# parser
#   ↓
# final string

chain.invoke({
    'length': 'long',
    'topic': 'india'
})


# ==============================
# Example 2: Chaining Chains
# ==============================

# First task:
# Generate a joke

template1 = NakliPromptTemplate(
    template='Write a joke about {topic}',
    input_variables=['topic']
)


# Second task:
# Explain the joke

template2 = NakliPromptTemplate(
    template='Explain the following joke {response}',
    input_variables=['response']
)


llm = NakliLLM()
parser = NakliStrOutputParser()


# Chain 1:
# Create joke

chain1 = RunnableConnector([
    template1,
    llm
])


# Chain 2:
# Explain joke

chain2 = RunnableConnector([
    template2,
    llm,
    parser
])


# Final chain:
# Output of chain1 goes into chain2

final_chain = RunnableConnector([
    chain1,
    chain2
])


# Flow:
# topic
#   ↓
# chain1
#   ↓
# joke
#   ↓
# chain2
#   ↓
# explanation
#   ↓
# final output

final_chain.invoke({
    'topic': 'cricket'
})`}</CodeBlock>

        <p>
          This example demonstrates the core idea of Runnables:
        </p>

        <div className="info-box">
          <strong>
            Every component follows the same invoke() → input/output pattern.
          </strong>
        </div>
      </section>

      <div className="image-wrapper">
        <img
          src="/images/rn1.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      {/* ============================= */}
      {/* TASK SPECIFIC RUNNABLES */}
      {/* ============================= */}

      <section>
        <h2>⚙️ Task-Specific Runnables</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn2.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          A task-specific Runnable is a Runnable designed to perform a
          particular task.
        </p>

        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Task</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>LLM Runnable</td>
              <td>Generates AI responses</td>
            </tr>

            <tr>
              <td>Prompt Runnable</td>
              <td>Creates formatted prompts</td>
            </tr>

            <tr>
              <td>Output Parser Runnable</td>
              <td>Processes model output</td>
            </tr>
          </tbody>
        </table>

        <p>
          These task-specific components can then be connected using
          Runnable primitives.
        </p>
      </section>
       <div className="image-wrapper">
        <img
          src="/images/rn2.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      {/* ============================= */}
      {/* RUNNABLE SEQUENCE */}
      {/* ============================= */}

      <section>
        <h2>1. Runnable Sequence</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn3.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          <strong>RunnableSequence</strong> runs multiple Runnable components
          one after another.
        </p>

        <div className="info-box">
          <strong>
            A → B → C → D
          </strong>
        </div>

        <p>
          The output of one step becomes the input of the next step.
        </p>

        <CodeBlock filename="runnable_sequence.py">{`# Import required classes
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
from langchain.schema.runnable import RunnableSequence


# Load environment variables
load_dotenv()


# First prompt:
# Generate a joke

prompt1 = PromptTemplate(
    template='Write a joke about {topic}',
    input_variables=['topic']
)


# Initialize OpenAI model
model = ChatOpenAI()


# Output parser
parser = StrOutputParser()


# Second prompt:
# Explain the generated joke

prompt2 = PromptTemplate(
    template='Explain the following joke - {text}',
    input_variables=['text']
)


# Create sequence

# Flow:
# prompt1
#   ↓
# model
#   ↓
# parser
#   ↓
# prompt2
#   ↓
# model
#   ↓
# parser

chain = RunnableSequence(
    prompt1,
    model,
    parser,
    prompt2,
    model,
    parser
)


# Run chain

print(
    chain.invoke({
        'topic': 'AI'
    })
)`}</CodeBlock>

        <p>
          Here the chain first creates a joke and then sends that joke to
          another prompt to generate its explanation.
        </p>
      </section>

      {/* ============================= */}
      {/* RUNNABLE PARALLEL */}
      {/* ============================= */}

      <section>
        <h2>2. Runnable Parallel</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn4.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          <strong>RunnableParallel</strong> allows multiple branches to run
          using the same input.
        </p>

        <div className="info-box">
          <strong>
            One Input → Multiple Tasks → Multiple Outputs
          </strong>
        </div>

        <p>
          For example, the same topic can be used to generate both a tweet
          and a LinkedIn post.
        </p>

        <CodeBlock filename="runnable_parallel.py">{`# Import required modules

from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv

from langchain.schema.runnable import (
    RunnableSequence,
    RunnableParallel
)


# Load environment variables
load_dotenv()


# Prompt 1:
# Generate a tweet

prompt1 = PromptTemplate(
    template='Generate a tweet about {topic}',
    input_variables=['topic']
)


# Prompt 2:
# Generate a LinkedIn post

prompt2 = PromptTemplate(
    template='Generate a Linkedin post about {topic}',
    input_variables=['topic']
)


# Initialize model
model = ChatOpenAI()


# Output parser
parser = StrOutputParser()


# Create parallel chain

# Both branches receive the same input
# and execute independently

parallel_chain = RunnableParallel({

    # Branch 1:
    # Generate tweet

    'tweet': RunnableSequence(
        prompt1,
        model,
        parser
    ),


    # Branch 2:
    # Generate LinkedIn post

    'linkedin': RunnableSequence(
        prompt2,
        model,
        parser
    )
})


# Run both chains together

result = parallel_chain.invoke({
    'topic': 'AI'
})


# Print tweet
print(result['tweet'])


# Print LinkedIn post
print(result['linkedin'])`}</CodeBlock>

        <p>
          The result is returned as a dictionary containing both outputs.
        </p>
      </section>

      {/* ============================= */}
      {/* RUNNABLE PASSTHROUGH */}
      {/* ============================= */}

      <section>
        <h2>3. Runnable Passthrough</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn5.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          <strong>RunnablePassthrough</strong> simply passes the input forward
          without changing it.
        </p>

        <div className="info-box">
          <strong>
            Input → RunnablePassthrough → Same Input
          </strong>
        </div>

        <CodeBlock filename="runnable_passthrough.py">{`# Import required modules

from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv

from langchain.schema.runnable import (
    RunnableSequence,
    RunnableParallel,
    RunnablePassthrough
)


# Load environment variables
load_dotenv()


# Prompt 1:
# Generate a joke

prompt1 = PromptTemplate(
    template='Write a joke about {topic}',
    input_variables=['topic']
)


# Initialize model
model = ChatOpenAI()


# Output parser
parser = StrOutputParser()


# Prompt 2:
# Explain the joke

prompt2 = PromptTemplate(
    template='Explain the following joke - {text}',
    input_variables=['text']
)


# Step 1:
# Generate joke

joke_gen_chain = RunnableSequence(
    prompt1,
    model,
    parser
)


# Step 2:
# Create parallel chain

parallel_chain = RunnableParallel({

    # Keep original joke unchanged

    'joke': RunnablePassthrough(),


    # Generate explanation

    'explanation': RunnableSequence(
        prompt2,
        model,
        parser
    )
})


# Step 3:
# Combine everything

# First generate joke
# Then send joke to parallel chain

final_chain = RunnableSequence(
    joke_gen_chain,
    parallel_chain
)


# Run chain

print(
    final_chain.invoke({
        'topic': 'cricket'
    })
)`}</CodeBlock>

        <p>
          Here, the same generated joke is used in two ways:
        </p>

        <ul>
          <li>One branch keeps the joke unchanged.</li>
          <li>The second branch generates an explanation.</li>
        </ul>
      </section>

      {/* ============================= */}
      {/* RUNNABLE BRANCH */}
      {/* ============================= */}

      <section>
        <h2>4. Runnable Branch</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn6.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          <strong>RunnableBranch</strong> is used when the chain needs to
          choose different paths depending on a condition.
        </p>

        <div className="info-box">
          <strong>
            Input → Condition → Selected Branch → Output
          </strong>
        </div>

        <p>
          For example:
        </p>

        <ul>
          <li>If a report is longer than 300 words → summarize it.</li>
          <li>If it is shorter → return the original report.</li>
        </ul>

        <CodeBlock filename="runnable_branch.py">{`# Import required modules

from langchain_openai import ChatOpenAI

from langchain_core.prompts import PromptTemplate

from langchain_core.output_parsers import StrOutputParser

from dotenv import load_dotenv

from langchain.schema.runnable import (
    RunnableSequence,
    RunnableParallel,
    RunnablePassthrough,
    RunnableBranch,
    RunnableLambda
)


# Load environment variables
load_dotenv()


# Prompt 1:
# Generate detailed report

prompt1 = PromptTemplate(
    template='Write a detailed report on {topic}',
    input_variables=['topic']
)


# Prompt 2:
# Summarize text

prompt2 = PromptTemplate(
    template='Summarize the following text \\n {text}',
    input_variables=['text']
)


# Initialize model
model = ChatOpenAI()


# Output parser
parser = StrOutputParser()


# Step 1:
# Generate report

report_gen_chain = prompt1 | model | parser


# Step 2:
# Conditional branch

# If report has more than 300 words:
# summarize it

# Otherwise:
# return original report

branch_chain = RunnableBranch(

    (
        lambda x: len(x.split()) > 300,
        prompt2 | model | parser
    ),

    RunnablePassthrough()
)


# Step 3:
# Combine everything

final_chain = RunnableSequence(
    report_gen_chain,
    branch_chain
)


# Run chain

print(
    final_chain.invoke({
        'topic': 'Russia vs Ukraine'
    })
)`}</CodeBlock>
      </section>

      {/* ============================= */}
      {/* RUNNABLE LAMBDA */}
      {/* ============================= */}

      <section>
        <h2>5. Runnable Lambda</h2>
         <div className="image-wrapper">
        <img
          src="/images/rn7.PNG"
          alt="Runnables"
          style={{
            width: '100%',
            maxWidth: '650px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

        <p>
          <strong>RunnableLambda</strong> provides a way to convert a normal
          Python function into a LangChain Runnable.
        </p>

        <p>
          This is useful when you want to add your own custom Python logic
          inside a LangChain pipeline.
        </p>

        <CodeBlock filename="runnable_lambda.py">{`# Import required modules

from langchain_openai import ChatOpenAI

from langchain_core.prompts import PromptTemplate

from langchain_core.output_parsers import StrOutputParser

from dotenv import load_dotenv

from langchain.schema.runnable import (
    RunnableSequence,
    RunnableLambda
)


# Load API key
load_dotenv()


# Prompt:
# Generate a joke

prompt = PromptTemplate(
    template='Write a joke about {topic}',
    input_variables=['topic']
)


# Initialize model
model = ChatOpenAI()


# Output parser
parser = StrOutputParser()


# Step 1:
# Create our own Python function

def add_emoji(text):

    # Modify the output
    return text + " 😂🔥"


# Step 2:
# Convert Python function into Runnable

emoji_runnable = RunnableLambda(
    add_emoji
)


# Step 3:
# Create complete chain

# Flow:
# topic
#   ↓
# prompt
#   ↓
# model
#   ↓
# parser
#   ↓
# add_emoji()
#   ↓
# final output

chain = RunnableSequence(
    prompt,
    model,
    parser,
    emoji_runnable
)


# Run chain

print(
    chain.invoke({
        'topic': 'AI'
    })
)`}</CodeBlock>

        <p>
          The important idea is that our normal Python function
          <code> add_emoji()</code> becomes a part of the LangChain pipeline.
        </p>
      </section>

      {/* ============================= */}
      {/* TYPES SUMMARY */}
      {/* ============================= */}

      <section>
        <h2>Runnable Types — Easy Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Runnable</th>
              <th>What It Does</th>
              <th>Easy Memory Trick</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>RunnableSequence</td>
              <td>Runs steps one after another</td>
              <td>A → B → C</td>
            </tr>

            <tr>
              <td>RunnableParallel</td>
              <td>Runs multiple branches together</td>
              <td>A → B + C</td>
            </tr>

            <tr>
              <td>RunnablePassthrough</td>
              <td>Passes input unchanged</td>
              <td>Same input</td>
            </tr>

            <tr>
              <td>RunnableBranch</td>
              <td>Selects a path based on condition</td>
              <td>If → This, Else → That</td>
            </tr>

            <tr>
              <td>RunnableLambda</td>
              <td>Adds custom Python logic</td>
              <td>Python function → Runnable</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================= */}
      {/* LCEL */}
      {/* ============================= */}

      <section>
        <h2>🧩 LCEL</h2>

        <p>
          <strong>LCEL</strong> stands for:
        </p>

        <div className="info-box">
          <strong>LangChain Expression Language</strong>
        </div>

        <p>
          LCEL provides a simple way to build LangChain chains using
          operators such as <code>|</code>.
        </p>

        <p>
          Instead of writing long RunnableSequence code, we can create the
          same pipeline using a much shorter syntax.
        </p>

        <h3>Without LCEL</h3>

        <CodeBlock filename="without_lcel.py">{`chain = RunnableSequence(
    prompt,
    model,
    parser
)`}</CodeBlock>

        <h3>With LCEL</h3>

        <CodeBlock filename="with_lcel.py">{`chain = prompt | model | parser`}</CodeBlock>

        <p>
          Both represent the same basic pipeline:
        </p>

        <div className="info-box">
          <strong>
            Prompt → Model → Parser
          </strong>
        </div>

        <p>
          Therefore, LCEL makes LangChain code shorter, cleaner and easier
          to read.
        </p>
      </section>

      {/* ============================= */}
      {/* COMPLETE FLOW */}
      {/* ============================= */}

      <section>
        <h2>🔄 Complete Runnable Flow</h2>

        <CodeBlock filename="runnable_flow.txt">{`                    INPUT
                      │
                      ▼
              ┌───────────────┐
              │    Prompt     │
              └───────────────┘
                      │
                      ▼
              ┌───────────────┐
              │      LLM      │
              └───────────────┘
                      │
                      ▼
              ┌───────────────┐
              │ Output Parser │
              └───────────────┘
                      │
                      ▼
                    OUTPUT`}</CodeBlock>

        <p>
          Depending on the application, we can replace the simple sequence
          with parallel branches, conditional branches, passthrough logic,
          or custom Python functions.
        </p>
      </section>

      {/* ============================= */}
      {/* WHY USE RUNNABLES */}
      {/* ============================= */}

      <section>
        <h2>🚀 Why Use Runnables?</h2>

        <ul>
          <li>
            <strong>Standardized:</strong> Components follow a common
            input-output interface.
          </li>

          <li>
            <strong>Composable:</strong> Multiple components can be connected
            easily.
          </li>

          <li>
            <strong>Reusable:</strong> Individual components can be reused
            in different pipelines.
          </li>

          <li>
            <strong>Flexible:</strong> Supports sequential, parallel and
            conditional workflows.
          </li>

          <li>
            <strong>Readable:</strong> LCEL makes chains easier to understand.
          </li>

          <li>
            <strong>Extensible:</strong> Custom Python functions can be added
            using RunnableLambda.
          </li>
        </ul>
      </section>

      {/* ============================= */}
      {/* EASY WAY TO REMEMBER */}
      {/* ============================= */}

      <section>
        <h2>🧠 Easy Way to Remember</h2>

        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Remember It As</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Runnable</td>
              <td>Input → Output worker</td>
            </tr>

            <tr>
              <td>|</td>
              <td>Pipeline / Conveyor belt</td>
            </tr>

            <tr>
              <td>RunnableSequence</td>
              <td>One after another</td>
            </tr>

            <tr>
              <td>RunnableParallel</td>
              <td>Many at the same time</td>
            </tr>

            <tr>
              <td>RunnablePassthrough</td>
              <td>Keep input unchanged</td>
            </tr>

            <tr>
              <td>RunnableBranch</td>
              <td>Choose based on condition</td>
            </tr>

            <tr>
              <td>RunnableLambda</td>
              <td>Your own Python function</td>
            </tr>

            <tr>
              <td>LCEL</td>
              <td>Short syntax for building pipelines</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================= */}
      {/* SUMMARY */}
      {/* ============================= */}

      <section>
        <h2>📌 Summary</h2>

        <p>
          Runnables were introduced to provide a common and standardized
          interface for LangChain components.
        </p>

        <p>
          Every Runnable follows the basic idea:
        </p>

        <div className="info-box">
          <strong>Input → Process → Output</strong>
        </div>

        <p>
          Different Runnable primitives can then be combined to create
          powerful workflows.
        </p>

        <ul>
          <li>RunnableSequence → sequential execution</li>
          <li>RunnableParallel → parallel execution</li>
          <li>RunnablePassthrough → pass input unchanged</li>
          <li>RunnableBranch → conditional execution</li>
          <li>RunnableLambda → custom Python logic</li>
        </ul>

        <p>
          Finally, <strong>LCEL</strong> provides a clean syntax for composing
          these components.
        </p>

        <CodeBlock filename="final_concept.py">{`# Traditional style

chain = RunnableSequence(
    prompt,
    model,
    parser
)


# LCEL style

chain = prompt | model | parser`}</CodeBlock>

        <div className="info-box">
          <strong>
            Runnables = Standardized Building Blocks<br />
            LCEL = Simple Language for Connecting Them
          </strong>
        </div>
      </section>

      {/* ============================= */}
      {/* INTERVIEW QUESTIONS */}
      {/* ============================= */}

      <section>
        <h2>🎯 Interview Questions</h2>

        <h3>1. What is a Runnable in LangChain?</h3>
        <p>
          A Runnable is a component that follows a standard input-output
          interface and can be connected with other components in a pipeline.
        </p>

        <h3>2. Why were Runnables introduced?</h3>
        <p>
          They were introduced to provide a standardized way of connecting
          different LangChain components and building modular workflows.
        </p>

        <h3>3. What does the | operator do?</h3>
        <p>
          The <code>|</code> operator connects Runnable components so that
          the output of one component becomes the input of the next.
        </p>

        <h3>4. What is RunnableSequence?</h3>
        <p>
          RunnableSequence executes multiple Runnable components sequentially,
          one after another.
        </p>

        <h3>5. What is RunnableParallel?</h3>
        <p>
          RunnableParallel executes multiple Runnable branches using the same
          input and returns their outputs together.
        </p>

        <h3>6. What is RunnablePassthrough?</h3>
        <p>
          RunnablePassthrough passes the input forward without modifying it.
        </p>

        <h3>7. What is RunnableBranch?</h3>
        <p>
          RunnableBranch selects and executes a particular Runnable based on
          a condition.
        </p>

        <h3>8. What is RunnableLambda?</h3>
        <p>
          RunnableLambda converts a normal Python function into a LangChain
          Runnable.
        </p>

        <h3>9. What is LCEL?</h3>
        <p>
          LCEL stands for LangChain Expression Language. It provides a concise
          syntax for composing LangChain pipelines.
        </p>

        <h3>10. What is the main benefit of LCEL?</h3>
        <p>
          LCEL makes LangChain chains shorter, cleaner and easier to read.
        </p>
      </section>

      {/* ============================= */}
      {/* PAGE NAVIGATION */}
      {/* ============================= */}

      <PageNav
        prev={{
          label: 'Chains',
          path: '/langchain/chains '
        }}
        next={{
          label: 'Indexes',
          path: '/langchain/indexes'
        }}
      />

    </DocPage>
  );
};

export default Runnables;