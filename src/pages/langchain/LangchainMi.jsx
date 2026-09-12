import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function MemoryAgents() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gen AI', href: '/genai/introduction' },
          { label: 'Memory & AI Agents' }
        ]}
        title="Memory & AI Agents"
        readTime="20 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* Introduction */}
      <section>
        <h2>1. Introduction</h2>

        <p>
          In a normal conversation with an LLM API, the model does not
          automatically remember previous conversations.
        </p>

        <p>
          To make an AI application remember previous messages, we need
          to implement a <strong>memory mechanism</strong>.
        </p>

        <p>
          AI Agents take this idea further. They can reason about a task
          and use external tools such as APIs, calculators, databases,
          search engines, and other services.
        </p>
      </section>

      {/* Memory */}
      <section>
        <h2>2. Memory</h2>

        <p>
          <strong>Memory</strong> allows an AI application to remember
          useful information from previous interactions.
        </p>

        <p>
          For example, suppose you tell an AI assistant:
        </p>

        <CodeBlock filename="conversation.txt">{`User: My name is Tej.
AI: Nice to meet you, Tej!

User: What is my name?
AI: Your name is Tej.`}</CodeBlock>

        <p>
          The second answer is possible only when the application provides
          the previous information to the model through some form of memory.
        </p>
      </section>

      {/* Stateless APIs */}
      <section>
        <h2>3. LLM APIs Are Stateless</h2>

        <p>
          Most LLM APIs are <strong>stateless</strong>.
        </p>

        <p>
          Stateless means that the API does not automatically remember
          what happened in the previous request.
        </p>

        <p>
          If we send:
        </p>

        <CodeBlock filename="request_1.py">{`response = model.invoke(
    "My name is Tej."
)`}</CodeBlock>

        <p>
          Then later send:
        </p>

        <CodeBlock filename="request_2.py">{`response = model.invoke(
    "What is my name?"
)`}</CodeBlock>

        <p>
          The second request may not know the name because the previous
          conversation was not included.
        </p>

        <p>
          Therefore, the application needs to maintain conversation history
          and provide the required context to the model.
        </p>
      </section>

      {/* Basic Memory Flow */}
      <section>
        <h2>4. How Memory Works</h2>

        <p>
          A simple memory system works like this:
        </p>

        <CodeBlock filename="memory_flow.txt">{`User Message
     ↓
Application
     ↓
Retrieve Previous Memory
     ↓
Combine Memory + New Message
     ↓
LLM
     ↓
Response
     ↓
Save Conversation`}</CodeBlock>

        <p>
          The important idea is that the application manages the memory
          and sends the required information to the LLM.
        </p>
      </section>

      {/* Types of Memory */}
      <section>
        <h2>5. Types of Memory</h2>

        <p>
          Different applications need different types of memory.
        </p>

        <h3>5.1 Conversation Buffer Memory</h3>

        <p>
          Conversation Buffer Memory stores the conversation transcript.
        </p>

        <p>
          It can be useful for short conversations because the model can
          receive the previous messages as context.
        </p>

        <CodeBlock filename="buffer_memory.txt">{`User: My name is Tej.
AI: Nice to meet you!

User: I am learning Python.
AI: That's great!

Memory stores:

User: My name is Tej.
AI: Nice to meet you!
User: I am learning Python.
AI: That's great!`}</CodeBlock>

        <p>
          <strong>Advantage:</strong> Simple and keeps the complete conversation.
        </p>

        <p>
          <strong>Disadvantage:</strong> The conversation can become very
          large and consume more tokens.
        </p>

        <h3>5.2 Conversation Buffer Window Memory</h3>

        <p>
          Buffer Window Memory keeps only the latest N interactions.
        </p>

        <p>
          For example, if the window size is 3, the system keeps only
          the latest three interactions.
        </p>

        <CodeBlock filename="window_memory.txt">{`Conversation:

1. User: Hello
2. User: My name is Tej
3. User: I am learning Python
4. User: Explain functions
5. User: Give me an example

Window = 3

Memory keeps:

3. I am learning Python
4. Explain functions
5. Give me an example`}</CodeBlock>

        <p>
          This helps control token usage because old messages are removed
          from the active context.
        </p>

        <h3>5.3 Summarizer Based Memory</h3>

        <p>
          Summarizer Based Memory creates a summary of older conversations
          instead of storing every message.
        </p>

        <CodeBlock filename="summary_memory.txt">{`Original conversation:

User: My name is Tej.
User: I am a BTech student.
User: I am learning Python.
User: I want to become an AI Engineer.
...

Summary:

The user is a BTech student named Tej who is
learning Python and wants to become an AI Engineer.`}</CodeBlock>

        <p>
          This reduces the amount of information that needs to be sent
          to the model while keeping the important context.
        </p>

        <h3>5.4 Custom Memory</h3>

        <p>
          Custom Memory is used when an application needs specialized
          information.
        </p>

        <p>
          Instead of storing the complete conversation, we can store
          important facts or application-specific state.
        </p>

        <CodeBlock filename="custom_memory.py">{`user_memory = {
    "name": "Tej",
    "preferred_language": "Python",
    "skill_level": "Beginner",
    "goal": "AI Engineer"
}

print(user_memory["name"])
print(user_memory["goal"])`}</CodeBlock>

        <p>
          Custom memory is useful for storing user preferences,
          important facts, application state, or other specialized data.
        </p>
      </section>

      {/* Memory Comparison */}
      <section>
        <h2>6. Memory Types Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Memory Type</th>
              <th>What It Stores</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversation Buffer</td>
              <td>Complete conversation</td>
              <td>Short chats</td>
            </tr>
            <tr>
              <td>Buffer Window</td>
              <td>Last N interactions</td>
              <td>Controlling token usage</td>
            </tr>
            <tr>
              <td>Summarizer Memory</td>
              <td>Summary of older conversations</td>
              <td>Long conversations</td>
            </tr>
            <tr>
              <td>Custom Memory</td>
              <td>Important application-specific information</td>
              <td>Advanced applications</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Why Memory */}
      <section>
        <h2>7. Why Do We Need Memory?</h2>

        <p>
          Memory makes an AI application more useful because it can
          maintain context across interactions.
        </p>

        <ul>
          <li>Remember previous conversation</li>
          <li>Remember user preferences</li>
          <li>Maintain context</li>
          <li>Provide personalized responses</li>
          <li>Support longer conversations</li>
          <li>Maintain application state</li>
        </ul>
      </section>

      {/* AI Agents */}
      <section>
        <h2>8. AI Agents</h2>

        <p>
          In simple words, an <strong>AI Agent</strong> can be thought of
          as a <strong>chatbot with superpowers</strong>.
        </p>

        <p>
          A normal chatbot mainly generates answers from the information
          available to it.
        </p>

        <p>
          An AI Agent can reason about a task and use tools to perform
          actions or obtain additional information.
        </p>
      </section>

      {/* Normal Chatbot vs Agent */}
      <section>
        <h2>9. Chatbot vs AI Agent</h2>

        <table>
          <thead>
            <tr>
              <th>Chatbot</th>
              <th>AI Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mainly answers questions</td>
              <td>Can perform multi-step tasks</td>
            </tr>
            <tr>
              <td>Usually depends on provided context</td>
              <td>Can use external tools</td>
            </tr>
            <tr>
              <td>Limited actions</td>
              <td>Can perform actions through tools/APIs</td>
            </tr>
            <tr>
              <td>Mostly response generation</td>
              <td>Reasoning + tool usage + response</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Real World Example */}
      <section>
        <h2>10. Real-World AI Agent Example</h2>

        <p>
          Suppose you ask an AI:
        </p>

        <CodeBlock filename="example.txt">{`User:
Find the best places to visit in summer in India.`}</CodeBlock>

        <p>
          The AI may provide places such as Shimla, Manali, Kashmir,
          or other suitable destinations.
        </p>

        <p>
          Now imagine you continue:
        </p>

        <CodeBlock filename="agent_task.txt">{`User:
Book a flight from Shimla to Mumbai on 24th January.`}</CodeBlock>

        <p>
          A normal chatbot cannot directly book the flight unless the
          application provides an appropriate booking capability.
        </p>

        <p>
          An AI Agent can use external tools or APIs to perform the
          required steps.
        </p>

        <CodeBlock filename="agent_flow.txt">{`User Request
     ↓
AI Agent
     ↓
Understand the task
     ↓
Reason about required steps
     ↓
Use Flight Search API
     ↓
Find suitable flight
     ↓
Use Booking API
     ↓
Complete the task
     ↓
Return Result`}</CodeBlock>
      </section>

      {/* Two Main Things */}
      <section>
        <h2>11. Two Main Things in an AI Agent</h2>

        <p>
          An AI Agent mainly needs two important capabilities:
        </p>

        <h3>1. Reasoning Capabilities</h3>

        <p>
          The agent needs to understand the user's request and decide
          what steps are required.
        </p>

        <CodeBlock filename="reasoning.txt">{`Task:
Find today's weather in Delhi and multiply
the temperature by 3.

Agent reasoning:

1. Need today's weather.
2. Use weather API.
3. Get temperature.
4. Multiply temperature by 3.
5. Return the result.`}</CodeBlock>

        <h3>2. Tools</h3>

        <p>
          Tools allow the agent to interact with external systems.
        </p>

        <p>
          Examples of tools include:
        </p>

        <ul>
          <li>Calculator</li>
          <li>Weather API</li>
          <li>Search API</li>
          <li>Database</li>
          <li>Flight booking API</li>
          <li>Payment API</li>
          <li>Code execution tools</li>
        </ul>
      </section>

      {/* Agent Example */}
      <section>
        <h2>12. AI Agent with Tools Example</h2>

        <p>
          Suppose an AI Agent has access to two tools:
        </p>

        <CodeBlock filename="tools.txt">{`Tool 1:
Weather API

Tool 2:
Calculator`}</CodeBlock>

        <p>
          Now the user asks:
        </p>

        <CodeBlock filename="user_question.txt">{`Can you multiply today's temperature
in Delhi by 3?`}</CodeBlock>

        <p>
          The agent can decide that it needs both tools.
        </p>

        <CodeBlock filename="agent_reasoning.txt">{`Step 1:
Use Weather API.

Result:
Delhi temperature = 32°C

Step 2:
Use Calculator.

32 × 3 = 96

Step 3:
Return answer.

Final Answer:
96`}</CodeBlock>
      </section>

      {/* Agent Architecture */}
      <section>
        <h2>13. Basic AI Agent Architecture</h2>

        <CodeBlock filename="agent_architecture.txt">{`                 User
                   ↓
              AI Agent
                   ↓
              Reasoning
                   ↓
        Decide Which Tool
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
    Calculator   Weather    Search
        API        API        API
        └──────────┼──────────┘
                   ↓
             Tool Result
                   ↓
              AI Agent
                   ↓
             Final Answer`}</CodeBlock>

        <p>
          The agent decides which tool is useful, calls the tool,
          receives the result, and then generates the final response.
        </p>
      </section>

      {/* Agent vs Chain */}
      <section>
        <h2>14. Chain vs AI Agent</h2>

        <p>
          A chain generally follows a predefined sequence of steps.
        </p>

        <CodeBlock filename="chain.txt">{`Input
  ↓
Prompt
  ↓
LLM
  ↓
Parser
  ↓
Output`}</CodeBlock>

        <p>
          An agent is more flexible because it can decide which tools
          or actions are required.
        </p>

        <CodeBlock filename="agent.txt">{`Input
  ↓
Agent
  ↓
Reason
  ↓
Choose Tool
  ↓
Use Tool
  ↓
Observe Result
  ↓
Reason Again
  ↓
Final Answer`}</CodeBlock>

        <table>
          <thead>
            <tr>
              <th>Chain</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Usually predefined flow</td>
              <td>Dynamic flow</td>
            </tr>
            <tr>
              <td>Steps are known beforehand</td>
              <td>Agent decides next action</td>
            </tr>
            <tr>
              <td>Less flexible</td>
              <td>More flexible</td>
            </tr>
            <tr>
              <td>May not need tools</td>
              <td>Often uses tools</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Real World Applications */}
      <section>
        <h2>15. Real-World Applications of AI Agents</h2>

        <ul>
          <li>
            <strong>Travel Agent:</strong> Search flights, hotels and
            travel information.
          </li>

          <li>
            <strong>Customer Support Agent:</strong> Search customer
            information and create support tickets.
          </li>

          <li>
            <strong>Shopping Agent:</strong> Search products, compare
            prices and recommend products.
          </li>

          <li>
            <strong>Finance Agent:</strong> Analyze financial information
            and perform calculations.
          </li>

          <li>
            <strong>Developer Agent:</strong> Read code, execute commands,
            identify errors and suggest fixes.
          </li>

          <li>
            <strong>Research Agent:</strong> Search multiple sources,
            collect information and prepare a report.
          </li>
        </ul>
      </section>

      {/* Memory + Agents */}
      <section>
        <h2>16. Memory + AI Agents</h2>

        <p>
          Memory and agents can also be combined.
        </p>

        <p>
          Memory allows the agent to remember useful information while
          tools allow it to interact with the outside world.
        </p>

        <CodeBlock filename="memory_agent.txt">{`User
 ↓
AI Agent
 ↓
Memory ← Previous Information
 ↓
Reasoning
 ↓
Choose Tool
 ↓
External Tool / API
 ↓
Tool Result
 ↓
Memory
 ↓
Final Response`}</CodeBlock>

        <p>
          This combination can be used to build more advanced AI assistants.
        </p>
      </section>

      {/* Easy Mental Model */}
      <section>
        <h2>17. Easy Way to Remember</h2>

        <CodeBlock filename="mental_model.txt">{`Memory = Remember

Chain = Follow predefined steps

Agent = Think + Choose + Use Tools

Tool = External capability

LLM = Brain that understands and generates text`}</CodeBlock>
      </section>

      {/* Key Concepts */}
      <section>
        <h2>18. Important Concepts</h2>

        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Simple Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stateless API</td>
              <td>Does not automatically remember previous requests</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>Stores useful conversation or user information</td>
            </tr>
            <tr>
              <td>Buffer Memory</td>
              <td>Stores conversation history</td>
            </tr>
            <tr>
              <td>Window Memory</td>
              <td>Stores only recent interactions</td>
            </tr>
            <tr>
              <td>Summary Memory</td>
              <td>Stores summarized conversation</td>
            </tr>
            <tr>
              <td>Custom Memory</td>
              <td>Stores application-specific information</td>
            </tr>
            <tr>
              <td>AI Agent</td>
              <td>AI system that can reason and use tools</td>
            </tr>
            <tr>
              <td>Reasoning</td>
              <td>Deciding what action should be taken</td>
            </tr>
            <tr>
              <td>Tool</td>
              <td>External capability available to the agent</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Interview Questions */}
      <section>
        <h2>19. Interview Questions</h2>

        <h3>Q1. What is memory in an LLM application?</h3>
        <p>
          Memory is a mechanism used to store and provide previous
          conversation or important information to an LLM application.
        </p>

        <h3>Q2. Are LLM APIs stateful?</h3>
        <p>
          LLM APIs are generally stateless. The application needs to
          provide previous conversation or stored context when required.
        </p>

        <h3>Q3. What is Conversation Buffer Memory?</h3>
        <p>
          It stores the conversation transcript and provides it as
          context to the model.
        </p>

        <h3>Q4. What is Buffer Window Memory?</h3>
        <p>
          It keeps only the latest N interactions instead of the complete
          conversation.
        </p>

        <h3>Q5. What is Summary Memory?</h3>
        <p>
          It summarizes older conversations so that important information
          can be retained with less context.
        </p>

        <h3>Q6. What is an AI Agent?</h3>
        <p>
          An AI Agent is an AI system that can reason about a task and
          use tools to perform actions or obtain information.
        </p>

        <h3>Q7. What are the main components of an AI Agent?</h3>
        <p>
          Two important components are reasoning capabilities and tools.
        </p>

        <h3>Q8. What is a tool in an AI Agent?</h3>
        <p>
          A tool is an external capability that an agent can use, such
          as a calculator, weather API, search API, database, or booking API.
        </p>

        <h3>Q9. What is the difference between a Chain and an Agent?</h3>
        <p>
          A chain generally follows a predefined sequence of operations,
          while an agent can dynamically decide which actions or tools
          are required.
        </p>
      </section>

      {/* Summary */}
      <section>
        <h2>20. Summary</h2>

        <ul>
          <li>LLM APIs are generally stateless.</li>
          <li>Memory helps an application maintain conversation context.</li>
          <li>Buffer Memory stores the conversation history.</li>
          <li>Buffer Window Memory keeps only recent interactions.</li>
          <li>Summary Memory stores a condensed version of older conversations.</li>
          <li>Custom Memory can store specialized information.</li>
          <li>AI Agents can reason about tasks.</li>
          <li>AI Agents can use external tools.</li>
          <li>Tools can include APIs, calculators, databases and search systems.</li>
          <li>Chains usually follow predefined steps.</li>
          <li>Agents can dynamically decide which steps and tools are required.</li>
        </ul>

        <CodeBlock filename="final_revision.txt">{`LLM
 ↓
Generates and understands text

Memory
 ↓
Helps remember useful information

Chain
 ↓
Follows predefined steps

Agent
 ↓
Reasons + chooses actions + uses tools

Tools
 ↓
Connect AI with the outside world`}</CodeBlock>
      </section>

      <PageNav
        prev={{ label: 'Indexes', path: '/langchain/indexes' }}
        next={{ label: 'AI Agent Tools', path: '/genai/agent-tools' }}
      />

    </DocPage>
  );
}