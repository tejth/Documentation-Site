import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const Chains = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'LangChain', href: '/langchain/chains' },
          { label: 'Chains' }
        ]}
        title="LangChain Chains"
        readTime="20 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <h2>Chains</h2>

      <p>
        <strong>Chains</strong> are one of the important components used
        to build pipelines in LLM applications.
      </p>

      <p>
        A chain allows us to connect multiple components together so
        that the <strong>output of one component becomes the input
        of another component</strong>.
      </p>

      <p>
        For example, imagine that we have a 1000-word English document
        and we want to generate a Hindi summary.
      </p>

      <p>
        We can divide this task into two steps:
      </p>

      <ol>
        <li>First LLM translates the English text into Hindi.</li>
        <li>Second LLM summarizes the Hindi text.</li>
      </ol>

      <p>
        Manually connecting these steps can become difficult as the
        application becomes more complex. Chains make this process
        easier by connecting the different operations into a single
        pipeline.
      </p>

      <div className="info-box">
        <strong>Simple Idea:</strong> Output of one step → Input of the
        next step.
      </div>


      {/* =========================================================
          BASIC CHAIN FLOW
      ========================================================= */}

      <h2>Basic Chain Flow</h2>

      <CodeBlock filename="chain_flow.txt">{`Input
  ↓
Prompt
  ↓
LLM
  ↓
Output Parser
  ↓
Final Output`}</CodeBlock>


      {/* =========================================================
          TYPES OF CHAINS
      ========================================================= */}

      <h2>Types of Chains</h2>

      <p>
        LangChain workflows can be designed using different types of
        chaining patterns.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Chain Type</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><strong>Simple Chain</strong></td>
            <td>Connects one step directly to another.</td>
            <td>Prompt → LLM → Parser</td>
          </tr>

          <tr>
            <td><strong>Sequential Chain</strong></td>
            <td>Executes multiple steps one after another.</td>
            <td>Report → Summary</td>
          </tr>

          <tr>
            <td><strong>Parallel Chain</strong></td>
            <td>Executes independent tasks simultaneously.</td>
            <td>Notes + Quiz</td>
          </tr>

          <tr>
            <td><strong>Conditional Chain</strong></td>
            <td>Selects a path based on a condition.</td>
            <td>Positive → Response A</td>
          </tr>
        </tbody>
      </table>


      {/* =========================================================
          1. SIMPLE CHAIN
      ========================================================= */}

      <h2>1. Simple Chain</h2>

      <p>
        A <strong>Simple Chain</strong> connects one step directly to
        another.
      </p>

      <p>
        The output produced by one component is automatically passed
        to the next component.
      </p>

      <p>
        For example, we can create a chain that generates five
        interesting facts about a given topic.
      </p>

      <CodeBlock filename="simple_chain.py">{`from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser


# Load environment variables
load_dotenv()


# Create the prompt
prompt = PromptTemplate(
    template='Generate 5 interesting facts about {topic}',
    input_variables=['topic']
)


# Create the LLM
model = ChatOpenAI()


# Create the output parser
parser = StrOutputParser()


# Connect the components
#
# Prompt → Model → Parser
#
chain = prompt | model | parser


# Run the chain
result = chain.invoke({
    'topic': 'cricket'
})


# Display the final output
print(result)


# Display the chain structure
chain.get_graph().print_ascii()`}</CodeBlock>


      <h3>How Simple Chain Works</h3>

      <CodeBlock filename="simple_chain_flow.txt">{`Topic
  ↓
PromptTemplate
  ↓
ChatOpenAI
  ↓
StrOutputParser
  ↓
Final Answer`}</CodeBlock>

      <div className="info-box">
        <strong>Remember:</strong> The <code>|</code> operator connects
        different LangChain components together.
      </div>


      {/* =========================================================
          2. SEQUENTIAL CHAINING
      ========================================================= */}

      <h2>2. Sequential Chaining</h2>

      <p>
        <strong>Sequential Chaining</strong> means executing multiple
        steps one after another in a fixed order.
      </p>

      <p>
        Each step can use the output generated by the previous step.
      </p>

      <p>
        For example, we can first generate a detailed report about
        unemployment in India and then generate a five-point summary
        from that report.
      </p>

      <CodeBlock filename="sequential_chain.py">{`from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser


# Load environment variables
load_dotenv()


# Prompt for generating the detailed report
prompt1 = PromptTemplate(
    template='Generate a detailed report on {topic}',
    input_variables=['topic']
)


# Prompt for generating the summary
prompt2 = PromptTemplate(
    template='Generate a 5 pointer summary from the following text \\n {text}',
    input_variables=['text']
)


# Create the LLM
model = ChatOpenAI()


# Create the output parser
parser = StrOutputParser()


# Create the sequential chain
#
# Prompt 1
#    ↓
# Model
#    ↓
# Parser
#    ↓
# Prompt 2
#    ↓
# Model
#    ↓
# Parser
#
chain = prompt1 | model | parser | prompt2 | model | parser


# Run the chain
result = chain.invoke({
    'topic': 'Unemployment in India'
})


# Display the final summary
print(result)


# Display the chain structure
chain.get_graph().print_ascii()`}</CodeBlock>


      <h3>Sequential Chain Flow</h3>

      <CodeBlock filename="sequential_flow.txt">{`Input Topic
     ↓
Generate Detailed Report
     ↓
Report Output
     ↓
Generate Summary
     ↓
Final Summary`}</CodeBlock>

      <div className="info-box">
        <strong>Key Point:</strong> Sequential chains execute dependent
        operations one after another.
      </div>


      {/* =========================================================
          3. PARALLEL CHAINING
      ========================================================= */}

      <h2>3. Parallel Chaining</h2>
         <div className="image-wrapper">
        <img
          src="/images/ch1.PNG"
          alt="Chains"
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
        <strong>Parallel Chaining</strong> means running multiple
        independent tasks at the same time.
      </p>

      <p>
        It is useful when different operations use the same input but
        do not depend on each other's output.
      </p>

      <p>
        For example, from the same text we can independently generate
        short notes and a quiz. Once both operations are completed,
        their outputs can be merged into a single document.
      </p>

      <CodeBlock filename="parallel_chain.py">{`from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

from langchain.schema.runnable import RunnableParallel


# Load environment variables
load_dotenv()


# Create the models
model1 = ChatOpenAI()

model2 = ChatAnthropic(
    model_name='claude-3-7-sonnet-20250219'
)


# Prompt for generating notes
prompt1 = PromptTemplate(
    template='Generate short and simple notes from the following text \\n {text}',
    input_variables=['text']
)


# Prompt for generating quiz questions
prompt2 = PromptTemplate(
    template='Generate 5 short question answers from the following text \\n {text}',
    input_variables=['text']
)


# Prompt for merging notes and quiz
prompt3 = PromptTemplate(
    template='''Merge the provided notes and quiz into a single document.

Notes:
{notes}

Quiz:
{quiz}''',
    input_variables=['notes', 'quiz']
)


# Create the output parser
parser = StrOutputParser()


# Create the parallel chain
#
#                  ┌──→ Notes
# Input Text ──────┤
#                  └──→ Quiz
#
parallel_chain = RunnableParallel({
    'notes': prompt1 | model1 | parser,
    'quiz': prompt2 | model2 | parser
})


# Create the merge chain
merge_chain = prompt3 | model1 | parser


# Connect parallel chain with merge chain
chain = parallel_chain | merge_chain


# Input text
text = '''
Support vector machines (SVMs) are a set of supervised
learning methods used for classification, regression,
and outlier detection.

Advantages of SVMs:

- Effective in high dimensional spaces.
- Effective when the number of dimensions is greater
  than the number of samples.
- Uses a subset of training points called support vectors.
- Memory efficient.
- Supports different kernel functions.

Disadvantages of SVMs:

- Kernel selection and regularization are important when
  the number of features is much greater than the number
  of samples.
- SVMs do not directly provide probability estimates.
'''


# Run the complete chain
result = chain.invoke({
    'text': text
})


# Display the final document
print(result)


# Display the chain structure
chain.get_graph().print_ascii()`}</CodeBlock>


      <h3>Parallel Chain Flow</h3>

      <CodeBlock filename="parallel_flow.txt">{`                    ┌──→ Generate Notes ──┐
                    │                     │
Input Text ─────────┤                     ├──→ Merge
                    │                     │
                    └──→ Generate Quiz ───┘`}</CodeBlock>


      <div className="info-box">
        <strong>Important:</strong> Parallel chaining is useful when
        multiple operations are independent and can be executed
        simultaneously.
      </div>


      {/* =========================================================
          4. CONDITIONAL CHAINING
      ========================================================= */}

      <h2>4. Conditional Chaining</h2>
         <div className="image-wrapper">
        <img
          src="/images/ch2.PNG"
          alt="Chains"
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
        <strong>Conditional Chaining</strong> means executing different
        steps depending on a particular condition.
      </p>

      <p>
        In simple words, it works similarly to an
        <strong> if-else</strong> statement in programming.
      </p>

      <p>
        For example, we can first classify customer feedback as
        positive or negative. Based on the sentiment, we can then
        generate an appropriate response.
      </p>

      <CodeBlock filename="conditional_chain.py">{`from dotenv import load_dotenv
from typing import Literal

from pydantic import BaseModel, Field

from langchain_openai import ChatOpenAI

from langchain_core.prompts import PromptTemplate

from langchain_core.output_parsers import (
    StrOutputParser,
    PydanticOutputParser
)

from langchain.schema.runnable import (
    RunnableBranch,
    RunnableLambda
)


# Load environment variables
load_dotenv()


# Create the LLM
model = ChatOpenAI()


# Parser for normal text output
parser = StrOutputParser()


# Define the feedback structure
class Feedback(BaseModel):

    sentiment: Literal['positive', 'negative'] = Field(
        description='Give the sentiment of the feedback'
    )


# Create the Pydantic parser
parser2 = PydanticOutputParser(
    pydantic_object=Feedback
)


# Prompt for sentiment classification
prompt1 = PromptTemplate(
    template='''Classify the sentiment of the following feedback
into positive or negative.

Feedback:
{feedback}

{format_instruction}''',

    input_variables=['feedback'],

    partial_variables={
        'format_instruction': parser2.get_format_instructions()
    }
)


# Create the classifier chain
classifier_chain = prompt1 | model | parser2


# Prompt for positive feedback
prompt2 = PromptTemplate(
    template='''Write an appropriate response to this
positive feedback:

{feedback}''',

    input_variables=['feedback']
)


# Prompt for negative feedback
prompt3 = PromptTemplate(
    template='''Write an appropriate response to this
negative feedback:

{feedback}''',

    input_variables=['feedback']
)


# Create conditional branches
#
# Positive → Positive Response
# Negative → Negative Response
# Otherwise → Fallback Message
#
branch_chain = RunnableBranch(

    (
        lambda x: x.sentiment == 'positive',
        prompt2 | model | parser
    ),

    (
        lambda x: x.sentiment == 'negative',
        prompt3 | model | parser
    ),

    RunnableLambda(
        lambda x: 'Could not find sentiment'
    )
)


# Connect classifier and branch chain
chain = classifier_chain | branch_chain


# Run the chain
result = chain.invoke({
    'feedback': 'This is a beautiful phone'
})


# Display the final response
print(result)


# Display the chain structure
chain.get_graph().print_ascii()`}</CodeBlock>


      <h3>Conditional Chain Flow</h3>

      <CodeBlock filename="conditional_flow.txt">{`User Feedback
      ↓
Sentiment Classifier
      ↓
   ┌───┴────┐
   ↓        ↓
Positive  Negative
   ↓        ↓
Positive  Negative
Response  Response`}</CodeBlock>


      <div className="info-box">
        <strong>Think of it as:</strong> First classify the input,
        then select the appropriate branch based on the result.
      </div>


      {/* =========================================================
          HOW CONDITIONAL CHAIN WORKS
      ========================================================= */}

      <h2>How Conditional Chaining Works</h2>

      <ol>
        <li>The user provides feedback.</li>

        <li>
          The LLM classifies the feedback as either positive or
          negative.
        </li>

        <li>
          The Pydantic parser converts the model output into a
          structured object.
        </li>

        <li>
          The chain checks the sentiment.
        </li>

        <li>
          If the sentiment is positive, the positive-response chain
          is executed.
        </li>

        <li>
          If the sentiment is negative, the negative-response chain
          is executed.
        </li>

        <li>
          If no valid sentiment is found, the fallback function is
          executed.
        </li>
      </ol>


      {/* =========================================================
          COMPARISON
      ========================================================= */}

      <h2>Difference Between Chain Types</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>How It Works</th>
            <th>Flow</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><strong>Simple</strong></td>
            <td>Connects components directly.</td>
            <td>A → B → C</td>
          </tr>

          <tr>
            <td><strong>Sequential</strong></td>
            <td>Executes dependent steps one after another.</td>
            <td>A → B → C → D</td>
          </tr>

          <tr>
            <td><strong>Parallel</strong></td>
            <td>Executes independent tasks simultaneously.</td>
            <td>A → B + C → D</td>
          </tr>

          <tr>
            <td><strong>Conditional</strong></td>
            <td>Chooses a path based on a condition.</td>
            <td>A → Condition → B/C</td>
          </tr>
        </tbody>
      </table>


      {/* =========================================================
          IMPORTANT COMPONENTS
      ========================================================= */}

      <h2>Important Components Used</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><code>PromptTemplate</code></td>
            <td>Creates reusable prompts with variables.</td>
          </tr>

          <tr>
            <td><code>ChatOpenAI</code></td>
            <td>Connects the application with an OpenAI chat model.</td>
          </tr>

          <tr>
            <td><code>StrOutputParser</code></td>
            <td>Converts model output into a string.</td>
          </tr>

          <tr>
            <td><code>RunnableParallel</code></td>
            <td>Runs multiple independent chains in parallel.</td>
          </tr>

          <tr>
            <td><code>RunnableBranch</code></td>
            <td>Selects a chain based on a condition.</td>
          </tr>

          <tr>
            <td><code>RunnableLambda</code></td>
            <td>Allows custom Python functions to be used as runnables.</td>
          </tr>

          <tr>
            <td><code>PydanticOutputParser</code></td>
            <td>Converts model output into a structured Pydantic object.</td>
          </tr>
        </tbody>
      </table>


      {/* =========================================================
          WHY CHAINS ARE USEFUL
      ========================================================= */}

      <h2>Why Are Chains Useful?</h2>

      <p>
        Real-world LLM applications usually require multiple
        operations rather than a single prompt and a single model call.
        Chains help us combine these operations into a structured
        workflow.
      </p>

      <ul>
        <li>Connect multiple LLM operations.</li>

        <li>Automatically pass outputs between steps.</li>

        <li>Build complex LLM workflows.</li>

        <li>Execute independent tasks in parallel.</li>

        <li>Make decisions using conditional branches.</li>

        <li>Make workflows modular and reusable.</li>

        <li>Reduce manual handling of intermediate outputs.</li>
      </ul>


      {/* =========================================================
          EASY WAY TO REMEMBER
      ========================================================= */}

      <h2>Easy Way to Remember</h2>

      <CodeBlock filename="remember.txt">{`Simple
→ Connect components

Sequential
→ One after another

Parallel
→ At the same time

Conditional
→ Based on a condition`}</CodeBlock>


      {/* =========================================================
          REAL WORLD EXAMPLE
      ========================================================= */}

      <h2>Real-World Example</h2>

      <p>
        Consider an AI document-processing application.
      </p>

      <CodeBlock filename="real_world_flow.txt">{`Document
   ↓
Extract Information
   ↓
Generate Summary
   ↓
Check Condition
   ↓
┌───────────────────────┐
│                       │
↓                       ↓
Generate Report     Generate Alert
│                       │
└───────────┬───────────┘
            ↓
       Final Output`}</CodeBlock>


      {/* =========================================================
          SUMMARY
      ========================================================= */}

      <h2>Summary</h2>

      <ul>
        <li>
          <strong>Chains</strong> are used to build LLM workflows
          and pipelines.
        </li>

        <li>
          The output of one component can become the input of another
          component.
        </li>

        <li>
          <strong>Simple Chain</strong> connects components directly.
        </li>

        <li>
          <strong>Sequential Chain</strong> executes steps one after
          another.
        </li>

        <li>
          <strong>Parallel Chain</strong> executes independent tasks
          simultaneously.
        </li>

        <li>
          <strong>Conditional Chain</strong> selects a path based on
          a condition.
        </li>

        <li>
          The <code>|</code> operator is used to connect runnable
          components.
        </li>

        <li>
          <code>RunnableParallel</code> is used for parallel workflows.
        </li>

        <li>
          <code>RunnableBranch</code> is used for conditional workflows.
        </li>
      </ul>


      {/* =========================================================
          INTERVIEW QUESTIONS
      ========================================================= */}

      <h2>Interview Questions</h2>

      <h3>1. What is a Chain in LangChain?</h3>

      <p>
        A Chain is a sequence of connected components where the output
        of one component can become the input of another component.
      </p>


      <h3>2. What is a Simple Chain?</h3>

      <p>
        A Simple Chain connects components directly, for example:
        <strong> Prompt → LLM → Output Parser</strong>.
      </p>


      <h3>3. What is Sequential Chaining?</h3>

      <p>
        Sequential Chaining executes multiple dependent steps one
        after another in a fixed order.
      </p>


      <h3>4. What is Parallel Chaining?</h3>

      <p>
        Parallel Chaining executes independent tasks simultaneously
        and can combine their outputs later.
      </p>


      <h3>5. What is Conditional Chaining?</h3>

      <p>
        Conditional Chaining selects different execution paths based
        on a condition, similar to an if-else statement.
      </p>


      <h3>6. What is RunnableParallel?</h3>

      <p>
        <code>RunnableParallel</code> is used to execute multiple
        independent runnable components in parallel.
      </p>


      <h3>7. What is RunnableBranch?</h3>

      <p>
        <code>RunnableBranch</code> allows a workflow to select a
        particular runnable based on a condition.
      </p>


      <h3>8. What does the | operator do?</h3>

      <p>
        The pipe operator connects runnable components so that the
        output of one component flows into the next component.
      </p>


      <h3>9. Give a real-world example of chaining.</h3>

      <p>
        A document-processing system can extract information from a
        document, summarize it, classify it, and then generate a final
        report using multiple connected steps.
      </p>


      <h3>10. Sequential vs Parallel Chains?</h3>

      <p>
        Sequential chains execute dependent operations one after
        another, whereas parallel chains execute independent
        operations simultaneously.
      </p>


      {/* =========================================================
          PAGE NAVIGATION
      ========================================================= */}

      <PageNav
        prev={{
          label: 'Structured Output',
          path: '/langchain/structured-output'
        }}
        next={{
          label: 'Runnables',
          path: '/langchain/runnables'
        }}
      />

    </DocPage>
  );
};

export default Chains;