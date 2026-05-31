import React from 'react';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const LangchainIntro = () => {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gen AI', href: '/genai/introduction' },
          { label: 'LangChain Introduction' }
        ]}
        title="Introduction to Generative AI & LangChain"
        readTime="15 min read"
        level="Beginner"
        updated="May 2026"
      />

      {/* ================= GEN AI ================= */}

      <h1>GEN AI</h1>

      <h2>Definition</h2>

      <p>
        Generative AI (Gen AI) is a type of Artificial Intelligence that is
        capable of creating new content by learning patterns from huge amounts
        of data and mimicking human creativity.
      </p>

      <p>
        This generated content can be:
      </p>

      <ul>
        <li>Text</li>
        <li>Images</li>
        <li>Audio</li>
        <li>Videos</li>
        <li>Code</li>
      </ul>

      <h2>Impacts of Gen AI</h2>

      <ul>
        <li>Customer Support</li>
        <li>Content Creation</li>
        <li>Education</li>
        <li>Software Development</li>
      </ul>

      <h2>Why Gen AI is Successful?</h2>

      <ul>
        <li>It solves real world problems.</li>
        <li>It is useful on a daily basis.</li>
        <li>It impacts the world economy.</li>
        <li>It is creating new jobs.</li>
        <li>It is highly accessible.</li>
      </ul>

      {/* ================= FOUNDATION MODELS ================= */}

      <h2>How to Study Gen AI?</h2>

      <p>
        Foundation Models are large general-purpose AI models trained on
        massive amounts of data.
      </p>

      <p>
        These models can be prompted or fine-tuned for specific tasks and
        serve as the foundation for modern AI applications.
      </p>

      <div className="image-wrapper">
        <img
          src="/images/ab4.PNG.png"
          alt="Foundation Models"
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

      <div className="image-wrapper">
        <img
          src="/images/9.PNG.png"
          alt="Builder vs User Perspective"
          style={{
            width: '100%',
            maxWidth: '850px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      <h2>Two Perspectives of Learning Gen AI</h2>

      <ul>
        <li>User Perspective</li>
        <li>Builder Perspective</li>
      </ul>

      <p>
        Depending on your role, you may focus on either building AI systems
        or consuming AI systems.
      </p>

      {/* ================= BUILDER ================= */}

      <h2>Builder's Perspective</h2>

      <p>
        Builder side is mainly focused on understanding how AI models are
        designed, trained, optimized, evaluated and deployed.
      </p>

      <div className="image-wrapper">
        <img
          src="/images/10.PNG.png"
          alt="Builder Perspective"
          style={{
            width: '100%',
            maxWidth: '950px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Topics Covered in Builder Side</h3>

      <ul>
        <li>Transformer Architecture</li>
        <li>Types of Transformers</li>
        <li>Encoder Only Models (BERT)</li>
        <li>Decoder Only Models (GPT)</li>
        <li>Encoder-Decoder Models (T5)</li>
        <li>Training Objectives</li>
        <li>Tokenization Strategies</li>
        <li>Training Strategies</li>
        <li>Handling Challenges</li>
        <li>Optimization</li>
        <li>Training Optimization</li>
        <li>Model Compression</li>
        <li>Inference Optimization</li>
        <li>Task Specific Tuning</li>
        <li>Instruction Tuning</li>
        <li>Continual Pretraining</li>
        <li>RLHF</li>
        <li>PEFT</li>
        <li>Evaluation</li>
        <li>Deployment</li>
      </ul>

      {/* ================= USER ================= */}

      <h2>User's Perspective</h2>

      <p>
        User side focuses on utilizing existing LLMs and building
        applications using AI technologies.
      </p>

      <div className="image-wrapper">
        <img
          src="/images/11.PNG.png"
          alt="User Perspective"
          style={{
            width: '100%',
            maxWidth: '950px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Topics Covered in User Side</h3>

      <ul>
        <li>Open Source vs Closed Source LLMs</li>
        <li>Using LLM APIs</li>
        <li>LangChain</li>
        <li>HuggingFace</li>
        <li>Ollama</li>
        <li>Prompt Engineering</li>
        <li>RAG (Retrieval Augmented Generation)</li>
        <li>Fine Tuning</li>
        <li>Agents</li>
        <li>LLMOps</li>
      </ul>

      <h2>Who Studies What?</h2>

      <ul>
        <li>User Side → Software Developers</li>
        <li>Builder Side → Data Scientists</li>
        <li>Both User + Builder Side → AI Engineers</li>
      </ul>

      <hr />

      {/* ================= LANGCHAIN ================= */}

      <h1>LangChain</h1>

      <h2>Definition</h2>

      <p>
        LangChain is an open-source framework that helps developers build
        LLM-based applications.
      </p>

      <p>
        It provides modular components and end-to-end tools that help build
        complex AI applications such as:
      </p>

      <ul>
        <li>Chatbots</li>
        <li>Question Answering Systems</li>
        <li>Retrieval-Augmented Generation (RAG)</li>
        <li>AI Agents</li>
        <li>Workflow Automation Systems</li>
      </ul>

      <h2>Advantages of LangChain</h2>

      <ul>
        <li>Supports all major LLMs.</li>
        <li>Simplifies development of AI applications.</li>
        <li>Provides integrations with popular tools.</li>
        <li>Open Source and Free.</li>
        <li>Actively maintained.</li>
        <li>Supports most Gen AI use cases.</li>
      </ul>

      {/* ================= USE CASE ================= */}

      <h2>Real Life Use Case</h2>

      <p>
        Suppose we want to build an application that accepts an Ebook PDF
        and answers user questions from that PDF.
      </p>

      <div className="image-wrapper">
        <img
          src="/images/12.PNG.png"
          alt="LangChain PDF Question Answering"
          style={{
            width: '100%',
            maxWidth: '750px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      <p>
        The user uploads a PDF and asks questions. The application
        extracts information from the document and generates answers.
      </p>

      {/* ================= ARCHITECTURE ================= */}

      <h2>Architecture of an LLM Based Application</h2>

      <div className="image-wrapper">
        <img
          src="/images/13.PNG.png"
          alt="LLM Architecture"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: 'auto',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Working Flow</h3>

      <ol>
        <li>User uploads PDF.</li>
        <li>PDF is stored in cloud storage.</li>
        <li>Text is extracted.</li>
        <li>Document is split into chunks.</li>
        <li>Embeddings are generated.</li>
        <li>Embeddings are stored in Vector Database.</li>
        <li>User asks a question.</li>
        <li>Question is converted into embeddings.</li>
        <li>Relevant chunks are retrieved.</li>
        <li>LLM generates the final response.</li>
      </ol>

      {/* ================= APPLICATIONS ================= */}

      <h2>What Can We Build Using LangChain?</h2>

      <ul>
        <li>Conversational Chatbots</li>
        <li>AI Knowledge Assistants</li>
        <li>AI Agents</li>
        <li>Workflow Automation</li>
        <li>Document Q&A Systems</li>
        <li>Research Assistants</li>
        <li>Summarization Tools</li>
      </ul>

      {/* ================= COMPONENTS ================= */}

      <h2>Core Components of LangChain</h2>

      <ul>
        <li>Models</li>
        <li>Prompts</li>
        <li>Chains</li>
        <li>Agents</li>
        <li>Indexes</li>
        <li>Memory</li>
      </ul>

      <h2>Quick Revision</h2>

      <ul>
        <li>Gen AI creates new content from learned patterns.</li>
        <li>Foundation Models are the base of modern AI systems.</li>
        <li>User Side focuses on building applications using AI.</li>
        <li>Builder Side focuses on training and optimizing AI models.</li>
        <li>AI Engineers understand both perspectives.</li>
        <li>LangChain is a framework for building LLM applications.</li>
        <li>RAG combines retrieval and generation.</li>
        <li>LangChain provides Models, Prompts, Chains, Agents, Indexes and Memory.</li>
      </ul>

      <PageNav
        prev={{
          label: 'Introduction to AI',
          path: '/genai/introduction'
        }}
        next={{
          label: 'LangChain Components',
          path: '/genai/langchain-components'
        }}
      />
    </DocPage>
  );
};

export default LangchainIntro;
