import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const JavaPrompt = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gen AI', href: '/genai/introduction' },
          { label: 'LangChain', href: '/genai/langchain-intro' },
          { label: 'Prompts' }
        ]}
        title="Prompts in LangChain"
        readTime="18 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>2. Prompts</h2>

      <p>
        Prompts refer to the inputs given to Large Language Models (LLMs).
      </p>

      <ul>
        <li>The better the prompt, the better the output.</li>
        <li>Prompts guide the model on what task to perform.</li>
        <li>Prompts can be static, dynamic, role-based, or example-based.</li>
        <li>Prompt engineering is one of the most important skills in Generative AI.</li>
      </ul>

      <h2>What is a Prompt?</h2>

      <p>
        A prompt is an instruction, question, or input provided to an AI model
        to generate a desired response.
      </p>

      <CodeBlock filename="simple_prompt.txt">{`Explain Artificial Intelligence in simple words.`}</CodeBlock>

      <p>
        The AI model reads the prompt and generates a response based on its
        training data and reasoning capabilities.
      </p>

      <h2>Types of Prompts in LangChain</h2>

      <ol>
        <li>Dynamic and Reusable Prompts</li>
        <li>Role-Based Prompts</li>
        <li>Few-Shot Prompting</li>
      </ol>

      <h2>1. Dynamic and Reusable Prompts</h2>

      <p>
        Dynamic prompts use variables that can be replaced at runtime.
      </p>

      <p>
        This allows the same prompt structure to be reused for multiple inputs.
      </p>

      <CodeBlock filename="dynamic_prompt.py">{`from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

llm = ChatOpenAI(
    api_key="YOUR_KEY"
)

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

      <h2>2. Role-Based Prompts</h2>

      <p>
        Role-based prompts define how the AI should behave.
      </p>

      <p>
        We generally use:
      </p>

      <ul>
        <li>System Role</li>
        <li>Human/User Role</li>
        <li>AI Role</li>
      </ul>

      <CodeBlock filename="role_based_prompt.py">{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(
    api_key="YOUR_KEY"
)

p = ChatPromptTemplate.from_messages([
    ("system", "You are a math teacher"),
    ("user", "2+2?")
])

print(
    llm.invoke(
        p.format_messages()
    ).content
)`}</CodeBlock>

      <h2>3. Few-Shot Prompting</h2>

      <p>
        Few-shot prompting teaches the model using examples before asking the
        actual question.
      </p>

      <CodeBlock filename="few_shot_prompt.py">{`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    api_key="YOUR_KEY"
)

prompt = """
English to Hindi:

Hello -> Namaste
Bye -> Alvida
Good Morning ->
"""

print(
    llm.invoke(prompt).content
)`}</CodeBlock>

      <p>
        Since examples are already provided, the model understands the pattern
        and predicts the correct output.
      </p>

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

      <ul>
        <li>Fixed input.</li>
        <li>Cannot be customized easily.</li>
        <li>Useful for simple tasks.</li>
      </ul>

      <h3>Dynamic Prompt</h3>

      <p>
        Dynamic prompts contain variables and can change based on user input.
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

response = llm.invoke(
    final_prompt
)

print(response)`}</CodeBlock>

      <ul>
        <li>Reusable.</li>
        <li>Flexible.</li>
        <li>Supports user-driven inputs.</li>
      </ul>

      <h2>Prompt Templates</h2>

      <p>
        PromptTemplate provides a structured way to create dynamic prompts using
        variables.
      </p>

      <p>
        Instead of manually creating strings using f-strings, we define a
        template once and provide values later.
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

      <h2>Why PromptTemplate is Preferred Over f-Strings?</h2>

      <h3>1. Built-in Validation</h3>

      <p>
        PromptTemplate checks whether all required variables are provided.
      </p>

      <CodeBlock filename="validation.py">{`prompt = PromptTemplate(
    input_variables=[
        "name",
        "age"
    ],
    template="Hello {name}, your age is {age}"
)

prompt.format(
    name="Tej"
)   # Error: Missing age`}</CodeBlock>

      <h3>2. Reusability</h3>

      <p>
        Define once and use multiple times.
      </p>

      <CodeBlock filename="reusability.py">{`prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple words"
)

print(
    prompt.format(topic="AI")
)

print(
    prompt.format(topic="Python")
)

print(
    prompt.format(topic="Blockchain")
)`}</CodeBlock>

      <h3>3. Works with LangChain Ecosystem</h3>

      <p>
        PromptTemplate integrates seamlessly with chains, agents, memory and
        other LangChain components.
      </p>

      <CodeBlock filename="prompt_with_chain.py">{`from langchain.chains import LLMChain
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
        Modern chat models do not receive a single large prompt.
      </p>

      <p>
        Instead, they receive a list of messages, each having a specific role.
      </p>

      <h3>Message Types</h3>

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

      <h2>1. System Message 🛠️</h2>

      <p>
        Sets rules and behavior for the AI model.
      </p>

      <ul>
        <li>You are a helpful assistant.</li>
        <li>You are a Java teacher.</li>
        <li>Answer like a software engineer.</li>
      </ul>

      <h2>2. Human Message 👤</h2>

      <p>
        Represents the user's query.
      </p>

      <ul>
        <li>Explain AI.</li>
        <li>Write Java code.</li>
        <li>Create a Python chatbot.</li>
      </ul>

      <h2>3. AI Message 🤖</h2>

      <p>
        Represents previous responses generated by the AI.
      </p>

      <p>
        It helps maintain conversational context and memory.
      </p>

      <CodeBlock filename="messages_example.py">{`from langchain.chat_models import ChatOpenAI
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

response = chat.invoke(
    messages
)

print(
    response.content
)`}</CodeBlock>

      <h2>Chat Prompt Templates</h2>

      <p>
        ChatPromptTemplate is used for creating structured chat-style prompts.
      </p>

      <p>
        It supports multiple roles such as:
      </p>

      <ul>
        <li>System</li>
        <li>Human</li>
        <li>AI</li>
      </ul>

      <CodeBlock filename="chat_prompt_template.py">{`from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        "You are a helpful teacher"
    ),
    (
        "human",
        "Explain {topic} in simple words"
    )
])

final_prompt = prompt.format_messages(
    topic="AI"
)

print(final_prompt)`}</CodeBlock>

      <h3>Dynamic Chat Prompt Example</h3>

      <CodeBlock filename="dynamic_chat_prompt.py">{`from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        "You are a {role}"
    ),
    (
        "human",
        "Explain {topic}"
    )
])

messages = prompt.format_messages(
    role="funny teacher",
    topic="Python"
)`}</CodeBlock>

      <h2>Message Placeholder</h2>

      <p>
        A MessagesPlaceholder is used when we want to insert a list of messages
        dynamically into a chat prompt.
      </p>

      <p>
        Instead of hardcoding the entire conversation, we leave a placeholder
        and inject messages later.
      </p>

      <CodeBlock filename="messages_placeholder.py">{`from langchain.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder
)

prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        "You are a helpful assistant"
    ),
    MessagesPlaceholder(
        variable_name="history"
    ),
    (
        "human",
        "{input}"
    )
])`}</CodeBlock>

      <h2>Benefits of Using Prompts Correctly</h2>

      <ul>
        <li>Improves response quality.</li>
        <li>Provides better control over AI behavior.</li>
        <li>Creates reusable workflows.</li>
        <li>Reduces hallucinations.</li>
        <li>Improves consistency of responses.</li>
        <li>Works seamlessly with LangChain components.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Prompts are inputs given to LLMs.</li>
        <li>Better prompts usually produce better results.</li>
        <li>PromptTemplate is used for dynamic prompts.</li>
        <li>Static prompts are fixed.</li>
        <li>Dynamic prompts use variables.</li>
        <li>Few-shot prompting teaches through examples.</li>
        <li>Chat models use messages instead of a single prompt.</li>
        <li>System messages define behavior.</li>
        <li>Human messages represent user queries.</li>
        <li>AI messages represent previous responses.</li>
        <li>ChatPromptTemplate helps create structured chat prompts.</li>
        <li>MessagesPlaceholder inserts conversations dynamically.</li>
      </ul>

      <PageNav
        prev={{
          label: 'LangChain Models',
          path: '/genai/langchain-models'
        }}
        next={{
          label: 'LangChain Chains',
          path: '/genai/langchain-chains'
        }}
      />
    </DocPage>
  );
};

export default JavaPrompt;