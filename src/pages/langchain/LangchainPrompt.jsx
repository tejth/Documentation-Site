import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const LangchainPrompt = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'LangChain', href: '/langchain/introduction' },
          { label: 'Prompts' }
        ]}
        title="Prompts in LangChain"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>What are Prompts?</h2>

      <p>
        Prompts refer to the inputs given to LLMs (Large Language Models).
        The better the prompt, the better the generated output.
      </p>

      <ul>
        <li>Prompts are instructions given to a model.</li>
        <li>They guide the behavior and output of LLMs.</li>
        <li>Well-designed prompts improve response quality.</li>
        <li>LangChain provides powerful tools for creating reusable prompts.</li>
      </ul>

      <h2>Types of Prompts</h2>

      <h3>1. Dynamic and Reusable Prompts</h3>

      <p>
        Dynamic prompts use variables that can be replaced at runtime.
      </p>

      <CodeBlock filename="dynamic_prompt.py">{`from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

llm = ChatOpenAI(api_key="YOUR_KEY")

p = PromptTemplate.from_template(
    "Help {name} to {task}"
)

print(
    llm.invoke(
        p.format(
            name="Tej",
            task="learn AI"
        )
    ).content
)`}</CodeBlock>

      <h3>2. Role Based Prompts</h3>

      <p>
        Role based prompts allow you to assign a role to the AI such as teacher,
        developer, interviewer, doctor, etc.
      </p>

      <CodeBlock filename="role_based_prompt.py">{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(api_key="YOUR_KEY")

p = ChatPromptTemplate.from_messages([
    ("system", "You are a math teacher"),
    ("user", "2+2?")
])

print(
    llm.invoke(
        p.format_messages()
    ).content
)`}</CodeBlock>

      <h3>3. Few Shot Prompting</h3>

      <p>
        Few-shot prompting provides examples before asking the model to generate
        an answer.
      </p>

      <CodeBlock filename="few_shot_prompt.py">{`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(api_key="YOUR_KEY")

prompt = """English to Hindi:
Hello -> Namaste
Bye -> Alvida
Good morning ->"""

print(llm.invoke(prompt).content)`}</CodeBlock>

      <h2>Static vs Dynamic Prompts</h2>

      <h3>Static Prompt</h3>

      <p>
        A static prompt is hardcoded and remains the same every time.
      </p>

      <CodeBlock filename="static_prompt.py">{`from langchain.llms import OpenAI

llm = OpenAI()

response = llm.invoke(
    "Tell me a joke about programmers"
)

print(response)`}</CodeBlock>

      <h3>Dynamic Prompt</h3>

      <p>
        Dynamic prompts use variables and change according to user input.
      </p>

      <CodeBlock filename="dynamic_prompt_example.py">{`from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI

llm = OpenAI()

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Tell me a joke about {topic}"
)

final_prompt = prompt.format(
    topic="AI"
)

response = llm.invoke(final_prompt)

print(response)`}</CodeBlock>

      <h2>Prompt Templates</h2>

      <p>
        PromptTemplate provides a structured way to create reusable dynamic
        prompts.
      </p>

      <CodeBlock filename="prompt_template.py">{`from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["name"],
    template="Hello {name}, how are you?"
)

final_prompt = prompt.format(
    name="Tej"
)

print(final_prompt)`}</CodeBlock>

      <h2>Why PromptTemplate is Better than f-Strings?</h2>

      <h3>1. Validation</h3>

      <p>
        LangChain automatically validates whether required variables are passed.
      </p>

      <CodeBlock filename="validation.py">{`prompt = PromptTemplate(
    input_variables=["name", "age"],
    template="Hello {name}, your age is {age}"
)

prompt.format(name="Tej")
# Error: age missing`}</CodeBlock>

      <h3>2. Reusable</h3>

      <CodeBlock filename="reusable_prompt.py">{`prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple words"
)

print(prompt.format(topic="AI"))
print(prompt.format(topic="Python"))
print(prompt.format(topic="Blockchain"))`}</CodeBlock>

      <h3>3. Works Seamlessly with LangChain</h3>

      <CodeBlock filename="prompt_chain.py">{`from langchain.chains import LLMChain
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

llm = OpenAI()

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic}"
)

chain = LLMChain(
    llm=llm,
    prompt=prompt
)

response = chain.run("AI")

print(response)`}</CodeBlock>

      <h2>Messages in LangChain</h2>

      <p>
        Chat models work using messages instead of a single prompt string.
      </p>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Message Type</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>System Message</td>
            <td>Defines AI behavior and rules</td>
          </tr>
          <tr>
            <td>Human Message</td>
            <td>User query or instruction</td>
          </tr>
          <tr>
            <td>AI Message</td>
            <td>Previous AI response</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="messages.py">{`from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    SystemMessage,
    HumanMessage
)

chat = ChatOpenAI()

messages = [
    SystemMessage(
        content="You are a helpful teacher"
    ),
    HumanMessage(
        content="Explain Python in simple words"
    )
]

response = chat.invoke(messages)

print(response.content)`}</CodeBlock>

      <h2>Chat Prompt Templates</h2>

      <p>
        ChatPromptTemplate is used for creating chat-style prompts with system,
        human and AI roles.
      </p>

      <CodeBlock filename="chat_prompt_template.py">{`from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful teacher"),
    ("human", "Explain {topic} in simple words")
])

final_prompt = prompt.format_messages(
    topic="AI"
)

print(final_prompt)`}</CodeBlock>

      <CodeBlock filename="dynamic_chat_prompt.py">{`from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role}"),
    ("human", "Explain {topic}")
])

messages = prompt.format_messages(
    role="funny teacher",
    topic="Python"
)

print(messages)`}</CodeBlock>

      <h2>Messages Placeholder</h2>

      <p>
        MessagesPlaceholder allows you to dynamically insert chat history into a
        prompt. This is heavily used in chatbots and conversational AI systems.
      </p>

      <CodeBlock filename="messages_placeholder.py">{`from langchain.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder
)

from langchain.schema import (
    HumanMessage,
    AIMessage
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant"),
    MessagesPlaceholder(
        variable_name="history"
    ),
    ("human", "{question}")
])

messages = prompt.format_messages(
    history=[
        HumanMessage(
            content="What is AI?"
        ),
        AIMessage(
            content="AI is smart machines"
        )
    ],
    question="Explain in one line"
)

for msg in messages:
    print(msg)`}</CodeBlock>

      <h2>When to Use Each Prompt Type?</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Prompt Type</th>
            <th>Best Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Static Prompt</td>
            <td>Fixed instructions</td>
          </tr>
          <tr>
            <td>Dynamic Prompt</td>
            <td>User-driven input</td>
          </tr>
          <tr>
            <td>Role Based Prompt</td>
            <td>Controlling AI behavior</td>
          </tr>
          <tr>
            <td>Few Shot Prompting</td>
            <td>Teaching patterns using examples</td>
          </tr>
          <tr>
            <td>Chat Prompt Template</td>
            <td>Chat applications</td>
          </tr>
          <tr>
            <td>Messages Placeholder</td>
            <td>Conversation memory</td>
          </tr>
        </tbody>
      </table>

      <h2>Quick Revision</h2>

      <ul>
        <li>Prompts are instructions given to LLMs.</li>
        <li>Better prompts generally produce better responses.</li>
        <li>PromptTemplate helps create reusable prompts.</li>
        <li>ChatPromptTemplate creates structured chat prompts.</li>
        <li>System messages define AI behavior.</li>
        <li>Human messages contain user queries.</li>
        <li>AI messages store previous responses.</li>
        <li>MessagesPlaceholder injects conversation history dynamically.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Models',
          path: '/langchain/models'
        }}
        next={{
          label: 'Chains',
          path: '/langchain/chains'
        }}
      />
    </DocPage>
  );
};

export default LangchainPrompt;