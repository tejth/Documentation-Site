
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function LLMChain() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gen AI', href: '/genai/introduction' },
          { label: 'LangChain', href: '/genai/langchain-intro' },
          { label: 'Chains' }
        ]}
        title="LangChain Chains"
        readTime="30 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. What is a Chain? */}
      <section>
        <h2>1. What is a Chain?</h2>

        <p>
          In LangChain, a <strong>chain</strong> is a sequence of
          connected components that work together to complete a task.
        </p>

        <p>
          In simple words, a chain is like a pipeline where the output
          of one step becomes the input of the next step.
        </p>

        <CodeBlock filename="chain.txt">{`Input
  ↓
Prompt
  ↓
LLM
  ↓
Output Parser
  ↓
Final Output`}</CodeBlock>

        <p>
          For example, we can create a chain that receives a topic,
          asks an LLM to explain it, and converts the response into
          a simple string.
        </p>
      </section>

      {/* 2. Why Chains */}
      <section>
        <h2>2. Why Do We Need Chains?</h2>

        <p>
          Instead of writing every operation separately, LangChain allows
          us to connect operations into a reusable workflow.
        </p>

        <ul>
          <li>Connect prompts and models.</li>
          <li>Build multi-step workflows.</li>
          <li>Run independent tasks in parallel.</li>
          <li>Choose different workflows using conditions.</li>
          <li>Connect LLMs with retrievers and databases.</li>
          <li>Build RAG applications.</li>
          <li>Create reusable AI workflows.</li>
        </ul>
      </section>

      {/* 3. Components */}
      <section>
        <h2>3. Basic Components of a Chain</h2>

        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Prompt</td>
              <td>Provides instructions to the model</td>
            </tr>
            <tr>
              <td>LLM / Chat Model</td>
              <td>Generates the response</td>
            </tr>
            <tr>
              <td>Output Parser</td>
              <td>Converts model output into a useful format</td>
            </tr>
            <tr>
              <td>Retriever</td>
              <td>Finds relevant documents</td>
            </tr>
            <tr>
              <td>Runnable</td>
              <td>Represents a component that can be executed</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock filename="components.txt">{`Input
  ↓
Prompt
  ↓
Model
  ↓
Parser
  ↓
Output`}</CodeBlock>
      </section>

      {/* 4. Modern LCEL */}
      <section>
        <h2>4. Modern LangChain Chain Syntax</h2>

        <p>
          Modern LangChain applications commonly use
          <strong> LCEL (LangChain Expression Language)</strong>.
        </p>

        <p>
          Components can be connected using the pipe operator
          <strong> | </strong>.
        </p>

        <CodeBlock filename="lcel.py">{`chain = prompt | model | parser`}</CodeBlock>

        <p>
          The output of the prompt becomes the input to the model,
          and the output of the model becomes the input to the parser.
        </p>

        <CodeBlock filename="lcel_flow.txt">{`Prompt
  |
  ↓
Model
  |
  ↓
Parser
  |
  ↓
Output`}</CodeBlock>
      </section>

      {/* 5. Basic LLMChain */}
      <section>
        <h2>5. LLMChain</h2>

        <p>
          <strong>LLMChain</strong> is the classic LangChain concept
          where a prompt is connected to an LLM.
        </p>

        <p>
          In modern LangChain code, the same type of workflow is usually
          written using LCEL.
        </p>

        <CodeBlock filename="modern_llm_chain.py">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser


model = ChatOpenAI()
parser = StrOutputParser()


prompt = PromptTemplate(
    template="Explain {topic} in simple words",
    input_variables=["topic"]
)


chain = prompt | model | parser


result = chain.invoke({
    "topic": "Artificial Intelligence"
})


print(result)`}</CodeBlock>

        <h3>Older LLMChain Syntax</h3>

        <p>
          Older LangChain tutorials may use the following style:
        </p>

        <CodeBlock filename="old_llmchain.py">{`from langchain.chains import LLMChain

chain = LLMChain(
    llm=model,
    prompt=prompt
)`}</CodeBlock>

        <p>
          When learning from older tutorials, you may still encounter
          the <strong>LLMChain</strong> class.
        </p>
      </section>

      {/* 6. Types Overview */}
      <section>
        <h2>6. Types of Chains</h2>

        <p>
          LangChain workflows can be designed in different ways depending
          on the problem.
        </p>

        <table>
          <thead>
            <tr>
              <th>Chain / Workflow</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>LLMChain</td>
              <td>Prompt + LLM workflow</td>
            </tr>
            <tr>
              <td>Sequential Chain</td>
              <td>Run multiple steps one after another</td>
            </tr>
            <tr>
              <td>SimpleSequentialChain</td>
              <td>Simple sequential workflow</td>
            </tr>
            <tr>
              <td>Parallel Chain</td>
              <td>Run independent tasks together</td>
            </tr>
            <tr>
              <td>Conditional / Branch Chain</td>
              <td>Choose a path based on a condition</td>
            </tr>
            <tr>
              <td>RetrievalQA</td>
              <td>Retrieve documents and answer a question</td>
            </tr>
            <tr>
              <td>Conversational Retrieval</td>
              <td>Retrieval combined with conversation history</td>
            </tr>
            <tr>
              <td>Router Chain</td>
              <td>Choose the appropriate chain</td>
            </tr>
            <tr>
              <td>Transform Chain</td>
              <td>Transform input before processing</td>
            </tr>
            <tr>
              <td>Stuff Chain</td>
              <td>Put documents into one prompt</td>
            </tr>
            <tr>
              <td>Map-Reduce Chain</td>
              <td>Process documents separately and combine results</td>
            </tr>
            <tr>
              <td>Refine Chain</td>
              <td>Iteratively improve an answer</td>
            </tr>
            <tr>
              <td>SQL Chain</td>
              <td>Use natural language to work with SQL databases</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 7. Sequential */}
      <section>
        <h2>7. Sequential Chain</h2>

        <p>
          A <strong>Sequential Chain</strong> executes multiple steps
          one after another.
        </p>

        <CodeBlock filename="sequential.txt">{`Input
  ↓
Step 1
  ↓
Step 2
  ↓
Step 3
  ↓
Output`}</CodeBlock>

        <p>
          Example: first generate a report and then generate a summary
          from that report.
        </p>

        <CodeBlock filename="sequential_chain.py">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser


model = ChatOpenAI()
parser = StrOutputParser()


prompt1 = PromptTemplate(
    template="Generate a detailed report on {topic}",
    input_variables=["topic"]
)


prompt2 = PromptTemplate(
    template="""
Generate a 5-point summary from:

{text}
""",
    input_variables=["text"]
)


chain = (
    prompt1
    | model
    | parser
    | prompt2
    | model
    | parser
)


result = chain.invoke({
    "topic": "Unemployment in India"
})


print(result)`}</CodeBlock>
      </section>

      {/* 8. SimpleSequential */}
      <section>
        <h2>8. SimpleSequentialChain</h2>

        <p>
          <strong>SimpleSequentialChain</strong> is an older LangChain
          abstraction for connecting simple chains sequentially.
        </p>

        <p>
          Each step generally passes its output directly to the next step.
        </p>

        <CodeBlock filename="simple_sequential.py">{`from langchain.chains import LLMChain
from langchain.chains import SimpleSequentialChain
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate


model = ChatOpenAI()


prompt1 = PromptTemplate(
    template="Give me a short description of {topic}",
    input_variables=["topic"]
)


chain1 = LLMChain(
    llm=model,
    prompt=prompt1
)


prompt2 = PromptTemplate(
    template="Create a title for this text: {text}",
    input_variables=["text"]
)


chain2 = LLMChain(
    llm=model,
    prompt=prompt2
)


overall_chain = SimpleSequentialChain(
    chains=[chain1, chain2]
)


result = overall_chain.run("Artificial Intelligence")

print(result)`}</CodeBlock>

        <p>
          This is mainly useful for understanding older LangChain examples.
          Modern applications commonly use LCEL instead.
        </p>
      </section>

      {/* 9. Parallel */}
      <section>
        <h2>9. Parallel Chain</h2>

        <p>
          A parallel chain runs independent tasks at the same time.
        </p>

        <CodeBlock filename="parallel.txt">{`                    Input
                      |
              ┌───────┴───────┐
              ↓               ↓
            Notes            Quiz
              ↓               ↓
              └───────┬───────┘
                      ↓
                    Output`}</CodeBlock>

        <CodeBlock filename="parallel_chain.py">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel


model = ChatOpenAI()
parser = StrOutputParser()


notes_prompt = PromptTemplate(
    template="Generate short notes from {text}",
    input_variables=["text"]
)


quiz_prompt = PromptTemplate(
    template="Generate 5 questions from {text}",
    input_variables=["text"]
)


parallel_chain = RunnableParallel({
    "notes": notes_prompt | model | parser,
    "quiz": quiz_prompt | model | parser
})


result = parallel_chain.invoke({
    "text": "Machine Learning is a field of AI..."
})


print(result)`}</CodeBlock>
      </section>

      {/* 10. Conditional */}
      <section>
        <h2>10. Conditional / Branch Chain</h2>

        <p>
          A conditional chain chooses a different path depending on
          a condition.
        </p>

        <CodeBlock filename="branch.txt">{`Input
  ↓
Condition
  ↓
 ┌─────────────┐
 ↓             ↓
Branch A     Branch B
 ↓             ↓
 └──────┬──────┘
        ↓
      Output`}</CodeBlock>

        <p>
          For example, customer feedback can be classified as positive
          or negative.
        </p>

        <CodeBlock filename="branch_chain.py">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableBranch


model = ChatOpenAI()
parser = StrOutputParser()


positive_prompt = PromptTemplate(
    template="Write a thank-you response to: {feedback}",
    input_variables=["feedback"]
)


negative_prompt = PromptTemplate(
    template="Write a helpful apology response to: {feedback}",
    input_variables=["feedback"]
)


positive_chain = positive_prompt | model | parser

negative_chain = negative_prompt | model | parser


branch = RunnableBranch(
    (
        lambda x: x["sentiment"] == "positive",
        positive_chain
    ),
    (
        lambda x: x["sentiment"] == "negative",
        negative_chain
    ),
    lambda x: "Unknown sentiment"
)


result = branch.invoke({
    "sentiment": "positive",
    "feedback": "The product is excellent!"
})


print(result)`}</CodeBlock>
      </section>

      {/* 11. RetrievalQA */}
      <section>
        <h2>11. RetrievalQA Chain</h2>

        <p>
          <strong>RetrievalQA</strong> is used when we want an LLM to
          answer questions using information retrieved from documents.
        </p>

        <p>
          This is an important concept behind <strong>RAG</strong>
          (Retrieval-Augmented Generation).
        </p>

        <CodeBlock filename="retrieval_qa.txt">{`User Question
      ↓
    Retriever
      ↓
Relevant Documents
      ↓
     Prompt
      ↓
      LLM
      ↓
    Answer`}</CodeBlock>

        <h3>Simple Example</h3>

        <CodeBlock filename="retrieval_qa.py">{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate


model = ChatOpenAI()


def retrieval_qa(question, retriever):

    documents = retriever.invoke(question)

    context = "\\n\\n".join(
        document.page_content
        for document in documents
    )

    prompt = ChatPromptTemplate.from_template("""
Answer the question using only the
provided context.

Context:
{context}

Question:
{question}
""")


    chain = prompt | model

    return chain.invoke({
        "context": context,
        "question": question
    })


answer = retrieval_qa(
    "What is LangChain?",
    retriever
)

print(answer)`}</CodeBlock>

        <p>
          The retriever first finds relevant information and then the
          model generates an answer using that information.
        </p>
      </section>

      {/* 12. Conversational Retrieval */}
      <section>
        <h2>12. Conversational Retrieval Chain</h2>

        <p>
          A conversational retrieval workflow combines document retrieval
          with conversation history.
        </p>

        <p>
          This is useful for chatbots that need to answer follow-up
          questions based on earlier conversation.
        </p>

        <CodeBlock filename="conversational_retrieval.txt">{`User Question
      +
Chat History
      ↓
Question Understanding
      ↓
Retriever
      ↓
Relevant Documents
      ↓
LLM
      ↓
Context-Aware Answer`}</CodeBlock>

        <h3>Example Concept</h3>

        <CodeBlock filename="conversation_example.txt">{`User:
What is Python?

AI:
Python is a programming language...


User:
Who created it?

AI:
Guido van Rossum created Python.`}</CodeBlock>

        <p>
          The second question depends on the previous conversation.
          Memory or chat history helps the system understand what
          "it" refers to.
        </p>
      </section>

      {/* 13. Router */}
      <section>
        <h2>13. Router Chain</h2>

        <p>
          A <strong>Router Chain</strong> decides which chain should
          handle a particular input.
        </p>

        <p>
          Imagine an AI assistant that receives questions about
          mathematics, programming, and general knowledge.
        </p>

        <CodeBlock filename="router_chain.txt">{`                 User Question
                       ↓
                     Router
              ┌────────┼────────┐
              ↓        ↓        ↓
          Math Chain  Code   General
              ↓        ↓        ↓
              └────────┼────────┘
                       ↓
                    Response`}</CodeBlock>

        <h3>Example</h3>

        <CodeBlock filename="router_example.py">{`def choose_chain(question):

    question = question.lower()

    if "calculate" in question:
        return "math"

    elif "python" in question:
        return "programming"

    else:
        return "general"


question = "How do I write a Python loop?"

route = choose_chain(question)

print(route)`}</CodeBlock>

        <p>
          In a real application, the router can itself be powered by
          an LLM so that it can intelligently select the appropriate
          chain.
        </p>
      </section>

      {/* 14. Transform */}
      <section>
        <h2>14. Transform Chain</h2>

        <p>
          A <strong>Transform Chain</strong> processes or transforms
          the input before sending it to another component.
        </p>

        <CodeBlock filename="transform_chain.txt">{`Raw Input
    ↓
Transform
    ↓
Cleaned / Modified Input
    ↓
LLM
    ↓
Output`}</CodeBlock>

        <h3>Example</h3>

        <CodeBlock filename="transform.py">{`from langchain_core.runnables import RunnableLambda


clean_text = RunnableLambda(
    lambda x: x["text"].strip().lower()
)


result = clean_text.invoke({
    "text": "   HELLO LANGCHAIN   "
})


print(result)`}</CodeBlock>

        <p>
          Transformations are useful for cleaning, formatting or
          restructuring data before the next step.
        </p>
      </section>

      {/* 15. Stuff */}
      <section>
        <h2>15. Stuff Documents Chain</h2>

        <p>
          A <strong>Stuff chain</strong> puts multiple documents into
          a single prompt and sends that prompt to the LLM.
        </p>

        <CodeBlock filename="stuff_chain.txt">{`Document 1 ─┐
Document 2 ─┤
Document 3 ─┤
             ↓
        Combine Documents
             ↓
           Prompt
             ↓
            LLM
             ↓
          Answer`}</CodeBlock>

        <p>
          It is simple and works well when the combined documents fit
          within the model's context window.
        </p>

        <CodeBlock filename="stuff_concept.py">{`context = "\\n\\n".join(
    document.page_content
    for document in documents
)


prompt = f"""
Answer the question using the
following documents:

{context}

Question:
{question}
"""


response = model.invoke(prompt)

print(response)`}</CodeBlock>
      </section>

      {/* 16. Map Reduce */}
      <section>
        <h2>16. Map-Reduce Chain</h2>

        <p>
          A <strong>Map-Reduce chain</strong> is useful when we have
          many documents that need to be processed.
        </p>

        <p>
          First, each document is processed separately. Then the
          individual results are combined into a final answer.
        </p>

        <CodeBlock filename="map_reduce.txt">{`Document 1 ─→ LLM ─→ Summary 1 ─┐
Document 2 ─→ LLM ─→ Summary 2 ─┤
Document 3 ─→ LLM ─→ Summary 3 ─┤
                                  ↓
                               Reduce
                                  ↓
                            Final Summary`}</CodeBlock>

        <h3>Simple Conceptual Example</h3>

        <CodeBlock filename="map_reduce.py">{`summaries = []

for document in documents:

    summary = model.invoke(
        f"Summarize this:\\n{document}"
    )

    summaries.append(summary)


combined = "\\n".join(summaries)


final_answer = model.invoke(
    f"Create one final summary from:\\n{combined}"
)


print(final_answer)`}</CodeBlock>

        <p>
          Map-Reduce is especially useful when all documents cannot
          comfortably fit into a single prompt.
        </p>
      </section>

      {/* 17. Refine */}
      <section>
        <h2>17. Refine Chain</h2>

        <p>
          A <strong>Refine chain</strong> creates an initial answer and
          then repeatedly improves it using additional documents.
        </p>

        <CodeBlock filename="refine_chain.txt">{`Document 1
    ↓
Initial Answer
    ↓
Document 2
    ↓
Improve Answer
    ↓
Document 3
    ↓
Improve Again
    ↓
Final Answer`}</CodeBlock>

        <h3>Simple Concept</h3>

        <CodeBlock filename="refine.py">{`answer = model.invoke(
    f"Create an answer from:\\n{documents[0]}"
)


for document in documents[1:]:

    answer = model.invoke(
        f"""
Improve the following answer
using this additional information.

Current answer:
{answer}

New information:
{document}
"""
    )


print(answer)`}</CodeBlock>

        <p>
          The main idea is continuous improvement as new information
          becomes available.
        </p>
      </section>

      {/* 18. SQL */}
      <section>
        <h2>18. SQL Chain</h2>

        <p>
          A <strong>SQL chain</strong> allows an LLM application to
          interact with a SQL database using natural-language questions.
        </p>

        <CodeBlock filename="sql_chain.txt">{`User
 ↓
"How many students are in the database?"
 ↓
LLM
 ↓
Generate SQL
 ↓
SQL Database
 ↓
Execute Query
 ↓
Result
 ↓
LLM
 ↓
Natural Language Answer`}</CodeBlock>

        <h3>Example Concept</h3>

        <CodeBlock filename="sql_example.py">{`question = "How many students are there?"


sql_query = model.invoke(
    f"""
Convert this question into SQL:

{question}
"""
)


print(sql_query)


result = database.run(
    sql_query.content
)


answer = model.invoke(
    f"""
Explain this database result
in simple words:

{result}
"""
)


print(answer)`}</CodeBlock>

        <p>
          SQL chains are useful for applications such as analytics
          assistants and database question-answering systems.
        </p>
      </section>

      {/* 19. Multiple Inputs */}
      <section>
        <h2>19. Chain with Multiple Inputs</h2>

        <p>
          A prompt can contain multiple variables.
        </p>

        <CodeBlock filename="multiple_inputs.py">{`from langchain_core.prompts import PromptTemplate


prompt = PromptTemplate(
    template="""
Explain {topic}
for a {audience}
in {language}.
""",
    input_variables=[
        "topic",
        "audience",
        "language"
    ]
)


chain = prompt | model | parser


result = chain.invoke({
    "topic": "Generative AI",
    "audience": "beginner",
    "language": "English"
})


print(result)`}</CodeBlock>
      </section>

      {/* 20. get_graph */}
      <section>
        <h2>20. Visualizing a Chain</h2>

        <p>
          LangChain allows us to inspect the structure of runnable
          workflows using <strong>get_graph()</strong>.
        </p>

        <CodeBlock filename="graph.py">{`chain.get_graph().print_ascii()`}</CodeBlock>

        <p>
          This is especially useful when a workflow contains many
          connected components.
        </p>

        <CodeBlock filename="graph.txt">{`Prompt
  ↓
Model
  ↓
Parser
  ↓
Output`}</CodeBlock>
      </section>

      {/* 21. Real World */}
      <section>
        <h2>21. Real-World Example</h2>

        <p>
          Imagine an AI assistant for an educational platform.
        </p>

        <CodeBlock filename="education_ai.txt">{`Student Question
       ↓
      Router
       ↓
 ┌─────┼─────────┐
 ↓     ↓         ↓
Math  Python   General
 ↓     ↓         ↓
 └─────┼─────────┘
       ↓
    Response`}</CodeBlock>

        <p>
          Another application could use retrieval:
        </p>

        <CodeBlock filename="education_rag.txt">{`Student Question
       ↓
    Retriever
       ↓
Course Documents
       ↓
      LLM
       ↓
Answer from Course Material`}</CodeBlock>
      </section>

      {/* 22. Chain vs Agent */}
      <section>
        <h2>22. Chain vs AI Agent</h2>

        <table>
          <thead>
            <tr>
              <th>Chain</th>
              <th>AI Agent</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Usually follows a predefined workflow</td>
              <td>Can dynamically decide what to do</td>
            </tr>

            <tr>
              <td>Steps are generally known beforehand</td>
              <td>Can select tools dynamically</td>
            </tr>

            <tr>
              <td>Good for predictable workflows</td>
              <td>Good for complex dynamic tasks</td>
            </tr>

            <tr>
              <td>Prompt → Model → Output</td>
              <td>Reason → Tool → Observe → Reason</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock filename="chain_vs_agent.txt">{`CHAIN

Input
 ↓
Step 1
 ↓
Step 2
 ↓
Step 3
 ↓
Output


AGENT

Input
 ↓
Reason
 ↓
Choose Tool
 ↓
Use Tool
 ↓
Observe
 ↓
Reason Again
 ↓
Final Answer`}</CodeBlock>
      </section>

      {/* 23. Comparison */}
      <section>
        <h2>23. Chain Types Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Chain</th>
              <th>Best Used For</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>LLMChain</td>
              <td>Basic prompt + LLM workflow</td>
            </tr>

            <tr>
              <td>Sequential</td>
              <td>Multi-step workflows</td>
            </tr>

            <tr>
              <td>SimpleSequential</td>
              <td>Simple step-by-step workflows</td>
            </tr>

            <tr>
              <td>Parallel</td>
              <td>Independent tasks</td>
            </tr>

            <tr>
              <td>Branch</td>
              <td>Conditional workflows</td>
            </tr>

            <tr>
              <td>RetrievalQA</td>
              <td>Question answering over documents</td>
            </tr>

            <tr>
              <td>Conversational Retrieval</td>
              <td>RAG chatbot with conversation context</td>
            </tr>

            <tr>
              <td>Router</td>
              <td>Selecting an appropriate chain</td>
            </tr>

            <tr>
              <td>Transform</td>
              <td>Cleaning or transforming input</td>
            </tr>

            <tr>
              <td>Stuff</td>
              <td>Combining documents into one prompt</td>
            </tr>

            <tr>
              <td>Map-Reduce</td>
              <td>Processing many documents</td>
            </tr>

            <tr>
              <td>Refine</td>
              <td>Improving answers iteratively</td>
            </tr>

            <tr>
              <td>SQL</td>
              <td>Natural-language database queries</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 24. Best Practices */}
      <section>
        <h2>24. Best Practices</h2>

        <ul>
          <li>Keep prompts clear and specific.</li>
          <li>Use PromptTemplate for reusable prompts.</li>
          <li>Use output parsers when structured output is needed.</li>
          <li>Use sequential workflows for dependent tasks.</li>
          <li>Use parallel workflows for independent tasks.</li>
          <li>Use branching for conditional logic.</li>
          <li>Use retrieval when external knowledge is required.</li>
          <li>Keep sensitive API keys in environment variables.</li>
          <li>Use graph visualization for complex workflows.</li>
          <li>Prefer modern Runnable/LCEL patterns for new code.</li>
        </ul>
      </section>

      {/* 25. Mental Model */}
      <section>
        <h2>25. Easy Mental Model</h2>

        <CodeBlock filename="chains_mental_model.txt">{`Basic Chain

Input
 ↓
Prompt
 ↓
Model
 ↓
Parser
 ↓
Output


Sequential Chain

Step 1
 ↓
Step 2
 ↓
Step 3


Parallel Chain

       ┌→ Task A ─┐
Input ─┤          ├→ Output
       └→ Task B ─┘


Branch Chain

Input
 ↓
Condition
 ↓
Branch A / Branch B


Retrieval Chain

Question
 ↓
Retriever
 ↓
Documents
 ↓
LLM
 ↓
Answer


Router Chain

Question
 ↓
Router
 ↓
Select Chain
 ↓
Answer


Map-Reduce

Documents
 ↓
Map
 ↓
Individual Results
 ↓
Reduce
 ↓
Final Answer


Refine

Document 1
 ↓
Answer
 ↓
Document 2
 ↓
Improved Answer
 ↓
Document 3
 ↓
Final Answer`}</CodeBlock>
      </section>

      {/* 26. Interview Questions */}
      <section>
        <h2>26. Interview Questions</h2>

        <h3>Q1. What is a chain in LangChain?</h3>

        <p>
          A chain is a sequence of connected components used to
          complete an AI task.
        </p>

        <h3>Q2. What is LLMChain?</h3>

        <p>
          LLMChain is the classic abstraction for connecting a prompt
          with an LLM. Modern LangChain applications commonly use
          LCEL instead.
        </p>

        <h3>Q3. What is Sequential Chain?</h3>

        <p>
          It executes multiple operations one after another, where
          one step's output can become the next step's input.
        </p>

        <h3>Q4. What is a Parallel Chain?</h3>

        <p>
          A parallel chain runs independent operations at the same time.
        </p>

        <h3>Q5. What is a Router Chain?</h3>

        <p>
          A Router Chain selects the most appropriate chain for a
          particular input.
        </p>

        <h3>Q6. What is RetrievalQA?</h3>

        <p>
          RetrievalQA combines document retrieval with an LLM to
          answer questions using retrieved information.
        </p>

        <h3>Q7. What is a Conversational Retrieval Chain?</h3>

        <p>
          It combines retrieval with conversation history so that
          follow-up questions can be understood in context.
        </p>

        <h3>Q8. What is a Stuff Chain?</h3>

        <p>
          A Stuff chain puts multiple documents into a single prompt
          and sends them to the model.
        </p>

        <h3>Q9. What is Map-Reduce?</h3>

        <p>
          It processes documents separately and then combines the
          individual results into a final result.
        </p>

        <h3>Q10. What is Refine Chain?</h3>

        <p>
          It creates an initial answer and continuously improves it
          using additional documents.
        </p>

        <h3>Q11. What is the difference between a Chain and an Agent?</h3>

        <p>
          A chain usually follows a predefined workflow, while an
          agent can dynamically reason and decide which tools or
          actions to use.
        </p>
      </section>

      {/* 27. Final Summary */}
      <section>
        <h2>27. Final Summary</h2>

        <p>
          LangChain chains allow us to build structured AI workflows
          by connecting different components together.
        </p>

        <CodeBlock filename="final_revision.txt">{`LLMChain
Prompt → Model → Output


Sequential
Step 1 → Step 2 → Step 3


Parallel
        ┌→ Task 1 ─┐
Input ──┤         ├→ Output
        └→ Task 2 ─┘


Conditional
Input → Condition → Branch


RetrievalQA
Question → Retriever → Documents → LLM → Answer


Conversational Retrieval
Question + History → Retriever → LLM → Answer


Router
Question → Router → Appropriate Chain


Transform
Input → Transform → Model


Stuff
Documents → One Prompt → LLM


Map-Reduce
Documents → Individual Processing → Combine


Refine
Document → Answer → Improve → Final Answer


SQL
Question → SQL → Database → Result → Answer`}</CodeBlock>

        <p>
          <strong>Easy rule:</strong> choose the chain based on the
          workflow your application needs.
        </p>
      </section>

      <PageNav
        prev={{
          label: 'Chains',
          path: '/langchain/chains'
        }}
        next={{
          label: 'Indexes',
          path: '/langchain/indexes'
        }}
      />

    </DocPage>
  );
}
