import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const LangchainModels = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gen AI', href: '/genai/introduction' },
          { label: 'LangChain', href: '/genai/langchain-intro' },
          { label: 'Models' }
        ]}
        title="LangChain Models"
        readTime="20 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Components of LangChain</h2>

      <ul>
        <li>Models</li>
        <li>Prompts</li>
        <li>Chains</li>
        <li>Agents</li>
        <li>Indexes</li>
        <li>Memory</li>
      </ul>

      <h2>1. Models</h2>

      <p>
        In LangChain, <strong>Models</strong> are the core interfaces through
        which developers interact with AI models.
      </p>

      <p>
        LangChain provides a common interface that allows us to use different AI
        providers without changing large portions of code.
      </p>

      <h2>Why Do We Need the Model Component?</h2>

      <p>
        Consider that we want to create a chatbot.
      </p>

      <h3>Challenge 1: Understanding User Queries</h3>

      <p>
        The chatbot must understand what the user is asking. This is called
        <strong> Natural Language Understanding (NLU)</strong>.
      </p>

      <h3>Challenge 2: Generating Correct Responses</h3>

      <p>
        The chatbot must generate meaningful and context-aware responses.
      </p>

      <p>
        These first two challenges are solved using Large Language Models
        (LLMs).
      </p>

      <h3>Challenge 3: Huge Model Size</h3>

      <p>
        Modern LLMs contain millions or even billions of parameters.
      </p>

      <ul>
        <li>Model size can exceed 100 GB.</li>
        <li>Running such models locally is expensive.</li>
        <li>Requires powerful hardware and large storage.</li>
      </ul>

      <p>
        To solve this problem, AI companies host models on cloud servers and
        expose them through APIs.
      </p>

      <h3>Challenge 4: Different APIs</h3>

      <p>
        Every AI provider has different SDKs and implementation styles.
      </p>

      <ul>
        <li>OpenAI API is different.</li>
        <li>Claude API is different.</li>
        <li>Gemini API is different.</li>
        <li>Hugging Face API is different.</li>
      </ul>

      <p>
        LangChain solves this problem by providing a common abstraction called
        the <strong>Model Component</strong>.
      </p>

      <h2>Development Setup</h2>

      <CodeBlock filename="setup_steps.txt">{`1. Create a new folder
2. Open it in VS Code
3. Create a virtual environment
   python -m venv venv

4. Activate virtual environment
   venv\\Scripts\\activate

5. Create requirements.txt

6. Install packages
   pip install -r requirements.txt

7. Verify LangChain installation`}</CodeBlock>

      <h2>Without LangChain (OpenAI Chatbot)</h2>

      <p>
        When using OpenAI directly, we need to write provider-specific code.
      </p>

      <CodeBlock filename="openai_chatbot.py">{`from openai import OpenAI

client = OpenAI(
    api_key="YOUR_OPENAI_API_KEY"
)

while True:

    user_input = input("You: ")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": user_input
            }
        ]
    )

    print(
        "Bot:",
        response.choices[0].message.content
    )`}</CodeBlock>

      <h2>Without LangChain (Claude Chatbot)</h2>

      <CodeBlock filename="claude_chatbot.py">{`import anthropic

client = anthropic.Anthropic(
    api_key="YOUR_CLAUDE_API_KEY"
)

while True:

    user_input = input("You: ")

    response = client.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=200,
        messages=[
            {
                "role": "user",
                "content": user_input
            }
        ]
    )

    print(
        "Bot:",
        response.content[0].text
    )`}</CodeBlock>

      <p>
        Notice that OpenAI and Claude require completely different code.
      </p>

      <h2>OpenAI Using LangChain</h2>

      <p>
        With LangChain, the implementation becomes more standardized.
      </p>

      <CodeBlock filename="openai_langchain.py">{`from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

llm = ChatOpenAI(
    model="gpt-4o-mini",
    openai_api_key="YOUR_OPENAI_API_KEY"
)

while True:

    user_input = input("You: ")

    response = llm(
        [HumanMessage(
            content=user_input
        )]
    )

    print(
        "Bot:",
        response.content
    )`}</CodeBlock>

      <h2>Anthropic Using LangChain</h2>

      <CodeBlock filename="anthropic_langchain.py">{`from langchain_anthropic import ChatAnthropic
from langchain.schema import HumanMessage

llm = ChatAnthropic(
    model="claude-3-haiku-20240307",
    anthropic_api_key="YOUR_CLAUDE_API_KEY"
)

while True:

    user_input = input("You: ")

    response = llm(
        [HumanMessage(
            content=user_input
        )]
    )

    print(
        "Bot:",
        response.content
    )`}</CodeBlock>

      <h2>Hugging Face Using LangChain</h2>

      <CodeBlock filename="huggingface_langchain.py">{`from langchain_huggingface import HuggingFaceEndpoint

llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mistral-7B-Instruct-v0.2",
    huggingfacehub_api_token="YOUR_HUGGINGFACE_API_KEY",
    temperature=0.7,
    max_new_tokens=256
)

while True:

    user_input = input("You: ")

    if user_input.lower() == "exit":
        break

    response = llm.invoke(user_input)

    print("Bot:", response)`}</CodeBlock>

      <h2>Embedding Models Using LangChain</h2>

      <CodeBlock filename="embedding_model.py">{`from langchain_huggingface import HuggingFaceEmbeddings

embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

text = "LangChain makes working with LLMs easy."

embedding = embedding_model.embed_query(text)

print(embedding[:10])`}</CodeBlock>

      <h2>Types of Models in LangChain</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Model Type</th>
            <th>Input</th>
            <th>Output</th>
            <th>Use Cases</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Language / Chat Models</td>
            <td>Text</td>
            <td>Generated Text</td>
            <td>Chatbots, Q&A, Content Generation</td>
          </tr>

          <tr>
            <td>Embedding Models</td>
            <td>Text</td>
            <td>Vectors</td>
            <td>Search, RAG, Similarity Search</td>
          </tr>
        </tbody>
      </table>

      <h2>Language Models</h2>

      <p>
        Language Models (LLMs) and Chat Models take text as input and generate
        text as output.
      </p>

      <h3>Examples</h3>

      <ul>
        <li>GPT-4</li>
        <li>GPT-4o</li>
        <li>Claude</li>
        <li>Gemini</li>
        <li>Llama</li>
        <li>Mistral</li>
      </ul>

      <h2>Embedding Models</h2>

      <p>
        Embedding models convert text into numerical vectors.
      </p>

      <p>
        These vectors capture the semantic meaning of text and are heavily used
        in Retrieval Augmented Generation (RAG) systems.
      </p>

      <h3>Example Scenario</h3>

      <ol>
        <li>Convert 5 documents into embeddings.</li>
        <li>Store embeddings inside a vector database.</li>
        <li>User enters a query.</li>
        <li>Query is converted into embedding.</li>
        <li>Similarity search is performed.</li>
        <li>Most relevant document is returned.</li>
      </ol>

      <CodeBlock filename="embedding_flow.txt">{`Documents
    ↓
Embedding Model
    ↓
Vector Database
    ↓
User Query
    ↓
Query Embedding
    ↓
Similarity Search
    ↓
Most Relevant Result`}</CodeBlock>

      <h2>Open Source vs Closed Source Models</h2>

      <table className="doc-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Closed Source Models</th>
            <th>Open Source Models</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Examples</td>
            <td>GPT, Claude, Gemini</td>
            <td>Llama, Mistral, Gemma</td>
          </tr>

          <tr>
            <td>Source Code Access</td>
            <td>No</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Customization</td>
            <td>Limited</td>
            <td>High</td>
          </tr>

          <tr>
            <td>Hosting</td>
            <td>Provider Managed</td>
            <td>Self Hosted Possible</td>
          </tr>

          <tr>
            <td>Infrastructure Cost</td>
            <td>Low</td>
            <td>High</td>
          </tr>

          <tr>
            <td>Ease of Use</td>
            <td>Very Easy</td>
            <td>Moderate</td>
          </tr>

          <tr>
            <td>API Availability</td>
            <td>Built-in</td>
            <td>Depends on Deployment</td>
          </tr>

          <tr>
            <td>Maintenance</td>
            <td>Provider Handles</td>
            <td>User Handles</td>
          </tr>
        </tbody>
      </table>

      <h2>Disadvantages of Running Models Locally</h2>

      <ul>
        <li>Requires high-end CPU or GPU.</li>
        <li>Large storage requirements.</li>
        <li>High RAM consumption.</li>
        <li>Slower inference on normal laptops.</li>
        <li>Model updates must be managed manually.</li>
        <li>Electricity and maintenance costs increase.</li>
        <li>Scaling for multiple users becomes difficult.</li>
        <li>Initial setup can be complex.</li>
      </ul>

      <h2>Advantages of Using APIs</h2>

      <ul>
        <li>No need to download large models.</li>
        <li>Pay only for usage.</li>
        <li>Latest models are instantly available.</li>
        <li>Easy scalability.</li>
        <li>No infrastructure management.</li>
        <li>Fast deployment.</li>
      </ul>

      <h2>Why LangChain Models Are Important</h2>

      <ul>
        <li>Provides a unified interface for multiple AI providers.</li>
        <li>Reduces implementation complexity.</li>
        <li>Makes switching providers easier.</li>
        <li>Supports both LLMs and Embedding Models.</li>
        <li>Works with OpenAI, Anthropic, Gemini, Hugging Face and more.</li>
        <li>Forms the foundation of most LangChain applications.</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Models are the first component of LangChain.</li>
        <li>They provide a common interface for AI providers.</li>
        <li>LLMs generate text output.</li>
        <li>Embedding models generate vector representations.</li>
        <li>Embedding models are heavily used in RAG systems.</li>
        <li>LangChain hides provider-specific implementation details.</li>
        <li>Models can be open source or closed source.</li>
        <li>Cloud APIs remove the need to host large models locally.</li>
      </ul>

      <PageNav
        prev={{
          label: 'LangChain Introduction',
          path: '/genai/langchain-intro'
        }}
        next={{
          label: 'LangChain Prompts',
          path: '/genai/langchain-prompts'
        }}
      />
    </DocPage>
  );
};

export default LangchainModels;