
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function RAG() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'GenAI', href: '/genai/intro' },
          { label: 'RAG' }
        ]}
        title="Retrieval Augmented Generation (RAG)"
        readTime="30 min read"
        level="Intermediate"
        updated="September 2026"
      />

      <h2>1. Problems with LLMs</h2>

      <p>
        Large Language Models (LLMs) are powerful, but they have some important
        limitations when used alone.
      </p>

      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Private Data</td>
            <td>The model does not automatically know your company's internal documents or personal files.</td>
          </tr>
          <tr>
            <td>Latest Information</td>
            <td>The model may not know information created after its training data.</td>
          </tr>
          <tr>
            <td>Hallucination</td>
            <td>The model can sometimes generate incorrect information confidently.</td>
          </tr>
        </tbody>
      </table>

      <h3>Example</h3>

      <p>
        Suppose your company has an HR policy PDF containing:
      </p>

      <CodeBlock filename="company_policy.txt">{`Employees receive 20 paid leaves per year.`}</CodeBlock>

      <p>
        A normal LLM does not automatically know this private document.
        RAG allows the application to retrieve this information and provide
        it to the LLM when answering the question.
      </p>

      <h2>2. Fine-Tuning</h2>
        <div className="image-wrapper">
        <img
          src="/images/rag2.png"
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

      <p>
        Fine-tuning means taking a pre-trained model and training it again
        using domain-specific data.
      </p>

      <p>
        During fine-tuning, the model's internal weights are changed.
      </p>

      <h3>Example</h3>

      <p>
        A general LLM can be fine-tuned using medical textbooks so that it
        becomes more specialized for medical questions.
      </p>

      <h3>Types of Fine-Tuning</h3>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Simple Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supervised Fine-Tuning</td>
            <td>Train using labeled input-output examples.</td>
            <td>Company HR questions with correct answers.</td>
          </tr>
          <tr>
            <td>Continuous Fine-Tuning</td>
            <td>Keep training the model as new data arrives.</td>
            <td>Updating an HR model every month.</td>
          </tr>
          <tr>
            <td>Instruction Fine-Tuning</td>
            <td>Train the model to follow instructions better.</td>
            <td>Training using instruction-style examples.</td>
          </tr>
          <tr>
            <td>RLHF</td>
            <td>Use human feedback to improve model responses.</td>
            <td>Humans rate generated answers.</td>
          </tr>
        </tbody>
      </table>

      <h3>Problems with Fine-Tuning</h3>

      <ul>
        <li>Requires technical expertise.</li>
        <li>Training can be expensive.</li>
        <li>Requires GPUs, time, and data preparation.</li>
        <li>New information may require additional training.</li>
        <li>There is a risk of catastrophic forgetting.</li>
      </ul>

      <h2>3. In-Context Learning</h2>

      <p>
        In-context learning means providing information directly inside the
        prompt so that the model can use it without retraining.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="prompt.txt">{`Context:
Employees receive 20 paid leaves per year.

Question:
How many paid leaves do employees receive?`}</CodeBlock>

      <p>
        The model can answer the question using the information supplied in
        the prompt without changing its weights.
      </p>

      <p>
        This idea leads directly to RAG: instead of manually putting
        information into every prompt, the system automatically retrieves
        relevant information and adds it to the prompt.
      </p>

      <h2>4. What is RAG?</h2>
        <div className="image-wrapper">
        <img
          src="/images/rag1.png"
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

      <p>
        <strong>RAG</strong> stands for:
      </p>

      <ul>
        <li><strong>Retrieval</strong></li>
        <li><strong>Augmentation</strong></li>
        <li><strong>Generation</strong></li>
      </ul>

      <p>
        RAG is a technique where relevant information is retrieved from an
        external knowledge source, added to the prompt, and then provided to
        an LLM to generate the final answer.
      </p>

      <h3>Simple RAG Flow</h3>

      <CodeBlock filename="rag_flow.txt">{`User Question
      ↓
Retrieve Relevant Data
      ↓
Add Data to Prompt
      ↓
LLM
      ↓
Final Answer`}</CodeBlock>

      <h3>Real-World Example</h3>

      <p>
        User asks:
      </p>

      <CodeBlock filename="question.txt">{`What is our company's leave policy?`}</CodeBlock>

      <p>
        RAG searches the company's documents, finds the relevant HR policy,
        adds that information to the prompt, and then the LLM generates the
        answer.
      </p>

      <h3>Why RAG Helps</h3>

      <table>
        <thead>
          <tr>
            <th>LLM Problem</th>
            <th>How RAG Helps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Private Data</td>
            <td>Connects the model to your own data source.</td>
          </tr>
          <tr>
            <td>Latest Data</td>
            <td>Retrieves updated information when the user asks.</td>
          </tr>
          <tr>
            <td>Hallucination</td>
            <td>Grounds the response using retrieved information.</td>
          </tr>
        </tbody>
      </table>

      <h2>5. RAG vs Fine-Tuning</h2>

      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>RAG</th>
            <th>Fine-Tuning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Model Weights</td>
            <td>Remain unchanged</td>
            <td>Are updated</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Usually cheaper to set up</td>
            <td>More expensive</td>
          </tr>
          <tr>
            <td>Updating Knowledge</td>
            <td>Update documents/database</td>
            <td>Retraining may be required</td>
          </tr>
          <tr>
            <td>Best For</td>
            <td>Facts and changing information</td>
            <td>Behavior, style, and specialized skills</td>
          </tr>
          <tr>
            <td>Sources</td>
            <td>Can show retrieved sources</td>
            <td>Harder to identify exactly what was learned</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Types of RAG</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Simple Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Naive RAG</td>
            <td>Basic retrieve → prompt → generate pipeline.</td>
          </tr>
          <tr>
            <td>Advanced RAG</td>
            <td>Adds techniques such as query rewriting, better chunking, and re-ranking.</td>
          </tr>
          <tr>
            <td>Modular RAG</td>
            <td>Uses separate flexible modules for different parts of the pipeline.</td>
          </tr>
          <tr>
            <td>Agentic RAG</td>
            <td>An agent decides when and what information to retrieve and may perform multiple retrieval steps.</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Indexing</h2>

      <p>
        Indexing is the process of preparing documents so that relevant
        information can be searched and retrieved efficiently later.
      </p>

      <p>
        This normally happens before users ask questions and is updated when
        the underlying data changes.
      </p>

      <h3>Indexing Pipeline</h3>

      <CodeBlock filename="indexing_pipeline.txt">{`Documents
    ↓
Document Ingestion
    ↓
Text Chunking
    ↓
Embedding Generation
    ↓
Vector Storage`}</CodeBlock>

      <h3>Step 1: Document Ingestion</h3>

      <p>
        Document ingestion means collecting and loading raw data into the
        RAG system.
      </p>

      <p>Common sources include:</p>

      <ul>
        <li>PDF files</li>
        <li>Word documents</li>
        <li>Websites</li>
        <li>Databases</li>
        <li>Text files</li>
      </ul>

      <p>
        Cleaning can also happen during this stage, such as removing
        unnecessary headers and footers or extracting text from scanned
        documents.
      </p>

      <h3>Step 2: Text Chunking</h3>

      <p>
        Large documents are divided into smaller pieces called
        <strong> chunks</strong>.
      </p>

      <p>
        Smaller focused chunks make retrieval more useful than searching
        one huge document.
      </p>

      <h4>Common Chunking Strategies</h4>

      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixed Size</td>
            <td>Split text after a fixed number of characters or words.</td>
          </tr>
          <tr>
            <td>Sentence/Paragraph</td>
            <td>Split at natural sentence or paragraph boundaries.</td>
          </tr>
          <tr>
            <td>Semantic Chunking</td>
            <td>Split when the meaning or topic changes.</td>
          </tr>
          <tr>
            <td>Sliding Window</td>
            <td>Use overlapping chunks to preserve context.</td>
          </tr>
        </tbody>
      </table>

      <h3>Step 3: Embedding Generation</h3>

      <p>
        An embedding converts text into a numerical vector representing its
        meaning.
      </p>

      <CodeBlock filename="embedding_example.txt">{`"Employees get 20 paid leaves per year"

        ↓

[0.12, -0.45, 0.88, ...]`}</CodeBlock>

      <p>
        Texts with similar meanings generally have similar vector
        representations.
      </p>

      <h3>Step 4: Vector Storage</h3>

      <p>
        The generated vectors are stored in a vector database so they can
        later be searched using similarity.
      </p>

      <p>Examples include:</p>

      <ul>
        <li>Pinecone</li>
        <li>FAISS</li>
        <li>Chroma</li>
        <li>Weaviate</li>
        <li>Milvus</li>
        <li>Qdrant</li>
      </ul>

      <p>
        The original text and metadata such as the source file or page number
        can also be stored along with the vector.
      </p>

      <h2>8. Retrieval</h2>

      <p>
        Retrieval happens when the user asks a question.
      </p>

      <p>
        The question is converted into an embedding and compared with vectors
        stored in the vector database.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="retrieval_example.txt">{`User:
How many leaves do I get?

        ↓

Embedding of the question

        ↓

Vector Database Search

        ↓

Relevant Chunk:
Employees get 20 paid leaves per year.`}</CodeBlock>

      <h3>Similarity Measurement</h3>

      <ul>
        <li>
          <strong>Cosine Similarity</strong> — measures the angle between
          vectors.
        </li>
        <li>
          <strong>Dot Product</strong> — another way to compare vectors.
        </li>
        <li>
          <strong>Euclidean Distance</strong> — measures distance between
          vectors.
        </li>
      </ul>

      <h3>Types of Retrieval</h3>

      <table>
        <thead>
          <tr>
            <th>Retrieval Type</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semantic Search</td>
            <td>Finds text based on meaning.</td>
          </tr>
          <tr>
            <td>Keyword Search</td>
            <td>Finds text using exact keywords, such as BM25.</td>
          </tr>
          <tr>
            <td>Hybrid Search</td>
            <td>Combines semantic and keyword search.</td>
          </tr>
        </tbody>
      </table>

      <h3>Retrieval Improvements</h3>

      <h4>Top-K Retrieval</h4>

      <p>
        Instead of retrieving only one chunk, the system can retrieve the top
        K most relevant chunks.
      </p>

      <CodeBlock filename="top_k.txt">{`User Question
     ↓
Vector Search
     ↓
Top 5 Relevant Chunks
     ↓
LLM`}</CodeBlock>

      <h4>Re-Ranking</h4>

      <p>
        Several chunks can first be retrieved and then re-ranked using another
        model so that the most relevant chunks are kept.
      </p>

      <h4>Query Rewriting</h4>

      <p>
        The user's original question can be rewritten or expanded into
        different queries to improve retrieval.
      </p>

      <h4>Multi-Query Retrieval</h4>

      <p>
        Multiple versions of a question can be generated and searched to
        retrieve more relevant information.
      </p>

      <h4>HyDE</h4>

      <p>
        HyDE (Hypothetical Document Embeddings) uses an LLM to generate a
        hypothetical document or answer and uses its embedding for retrieval.
      </p>

      <h2>9. Augmentation</h2>

      <p>
        Augmentation means combining the retrieved information with the
        user's original question to create a new prompt for the LLM.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="augmented_prompt.txt">{`Context:
Employees get 20 paid leaves per year.

Question:
How many leaves do I get?

Instruction:
Answer only using the given context.`}</CodeBlock>

      <p>
        The LLM now has both the user's question and the relevant information
        needed to answer it.
      </p>

      <h3>Important Considerations</h3>

      <ul>
        <li>
          <strong>Context Window:</strong> The LLM can only process a limited
          amount of information at once.
        </li>
        <li>
          <strong>Clear Instructions:</strong> The prompt can tell the model
          to answer only from the provided context.
        </li>
        <li>
          <strong>Chat History:</strong> Previous conversation can also be
          included for multi-turn applications.
        </li>
      </ul>

      <h2>10. Generation</h2>

      <p>
        Generation is the final stage where the LLM reads the augmented
        prompt and produces the answer.
      </p>

      <CodeBlock filename="generation.txt">{`Context:
Employees get 20 paid leaves per year.

Question:
How many leaves do I get?

↓

Answer:
You get 20 paid leaves per year.`}</CodeBlock>

      <p>
        Good RAG applications can also provide citations or source information
        so users can verify where the answer came from.
      </p>

      <h2>11. Complete RAG Pipeline</h2>

      <CodeBlock filename="complete_rag_pipeline.txt">{`                INDEXING
                    │
                    ▼
            Document Ingestion
                    │
                    ▼
              Text Chunking
                    │
                    ▼
             Embeddings
                    │
                    ▼
             Vector Database
                    │
                    │
                    │
User Question ──────┘
       │
       ▼
Query Embedding
       │
       ▼
Similarity Search
       │
       ▼
Relevant Chunks
       │
       ▼
Augmented Prompt
       │
       ▼
      LLM
       │
       ▼
Final Grounded Answer`}</CodeBlock>

      <h2>12. RAG Evaluation</h2>

      <p>
        A RAG system should not only generate answers; its retrieval and
        generated responses should also be evaluated.
      </p>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Simple Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Faithfulness / Groundedness</td>
            <td>Does the answer match the retrieved context?</td>
          </tr>
          <tr>
            <td>Answer Relevance</td>
            <td>Does the answer actually address the user's question?</td>
          </tr>
          <tr>
            <td>Context Precision</td>
            <td>How many retrieved chunks are actually useful?</td>
          </tr>
          <tr>
            <td>Context Recall</td>
            <td>Did retrieval find all the important information?</td>
          </tr>
        </tbody>
      </table>

      <h3>Simple Way to Understand Evaluation</h3>

      <CodeBlock filename="rag_evaluation.txt">{`Question
   ↓
Did we retrieve the right information?
   ↓
Context Precision / Recall
   ↓
Did the answer use that information correctly?
   ↓
Faithfulness
   ↓
Did the answer address the question?
   ↓
Answer Relevance`}</CodeBlock>

      <h2>13. Advantages of RAG</h2>

      <ul>
        <li>No need to retrain the model for every document update.</li>
        <li>Can work with private and company-specific information.</li>
        <li>Can use updated information from external data sources.</li>
        <li>Can reduce hallucination by grounding answers in retrieved data.</li>
        <li>Can provide source citations.</li>
        <li>Usually has a simpler update process than retraining a model.</li>
      </ul>

      <h2>14. Disadvantages of RAG</h2>

      <ul>
        <li>
          Poor retrieval can lead to poor answers.
        </li>
        <li>
          Requires additional components such as embeddings and vector
          databases.
        </li>
        <li>
          Retrieval adds extra processing time.
        </li>
        <li>
          The amount of context that can be passed to the LLM is limited.
        </li>
      </ul>

      <h2>15. Common RAG Use Cases</h2>

      <table>
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company Chatbot</td>
            <td>HR policy and internal document assistant.</td>
          </tr>
          <tr>
            <td>Customer Support</td>
            <td>Answer questions from product manuals.</td>
          </tr>
          <tr>
            <td>Legal / Medical Documents</td>
            <td>Search and answer questions about documents.</td>
          </tr>
          <tr>
            <td>Research Assistant</td>
            <td>Search through research papers.</td>
          </tr>
          <tr>
            <td>Personal Knowledge Base</td>
            <td>Ask questions about your own notes and documents.</td>
          </tr>
        </tbody>
      </table>

      <h2>16. RAG vs Normal LLM</h2>

      <table>
        <thead>
          <tr>
            <th>Normal LLM</th>
            <th>RAG System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User Question</td>
            <td>User Question</td>
          </tr>
          <tr>
            <td>↓</td>
            <td>↓</td>
          </tr>
          <tr>
            <td>LLM</td>
            <td>Retrieve Relevant Data</td>
          </tr>
          <tr>
            <td>↓</td>
            <td>↓</td>
          </tr>
          <tr>
            <td>Answer</td>
            <td>Augmented Prompt → LLM</td>
          </tr>
          <tr>
            <td></td>
            <td>↓</td>
          </tr>
          <tr>
            <td></td>
            <td>Grounded Answer</td>
          </tr>
        </tbody>
      </table>

      <h2>17. Easy Mental Model</h2>

      <p>
        Remember RAG using these four simple words:
      </p>

      <CodeBlock filename="mental_model.txt">{`INDEX
Prepare the documents.

RETRIEVE
Find the relevant information.

AUGMENT
Add that information to the prompt.

GENERATE
Let the LLM create the final answer.`}</CodeBlock>

      <h3>One-Line Memory Trick</h3>

      <p>
        <strong>
          RAG = Find the right information → Give it to the LLM → Generate the answer.
        </strong>
      </p>

      <h2>18. RAG Cheat Sheet</h2>

      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Remember</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RAG</td>
            <td>Retrieval + Augmentation + Generation</td>
          </tr>
          <tr>
            <td>Indexing</td>
            <td>Prepare data before retrieval.</td>
          </tr>
          <tr>
            <td>Chunking</td>
            <td>Break documents into smaller pieces.</td>
          </tr>
          <tr>
            <td>Embedding</td>
            <td>Convert text meaning into vectors.</td>
          </tr>
          <tr>
            <td>Vector Database</td>
            <td>Store and search vectors.</td>
          </tr>
          <tr>
            <td>Retrieval</td>
            <td>Find relevant chunks.</td>
          </tr>
          <tr>
            <td>Top-K</td>
            <td>Retrieve the top K results.</td>
          </tr>
          <tr>
            <td>Re-Ranking</td>
            <td>Sort retrieved results by relevance.</td>
          </tr>
          <tr>
            <td>Augmentation</td>
            <td>Add retrieved context to the prompt.</td>
          </tr>
          <tr>
            <td>Generation</td>
            <td>LLM generates the final answer.</td>
          </tr>
          <tr>
            <td>Groundedness</td>
            <td>Check whether the answer is supported by context.</td>
          </tr>
        </tbody>
      </table>

      <h2>19. Interview Questions</h2>

      <h3>Q1. What is RAG?</h3>

      <p>
        RAG stands for Retrieval Augmented Generation. It retrieves relevant
        information from an external knowledge source, adds it to the prompt,
        and then uses an LLM to generate the answer.
      </p>

      <h3>Q2. Why is RAG used?</h3>

      <p>
        RAG is used to provide an LLM with private, updated, or
        domain-specific information without retraining the model.
      </p>

      <h3>Q3. What are the three main stages of RAG?</h3>

      <p>
        Retrieval, Augmentation, and Generation.
      </p>

      <h3>Q4. What is indexing?</h3>

      <p>
        Indexing is the process of preparing documents for efficient
        retrieval. It generally includes ingestion, chunking, embedding
        generation, and vector storage.
      </p>

      <h3>Q5. What is an embedding?</h3>

      <p>
        An embedding is a numerical representation of text that captures its
        meaning and can be used for similarity search.
      </p>

      <h3>Q6. What is a vector database?</h3>

      <p>
        A vector database stores embeddings and allows the system to search
        for similar vectors.
      </p>

      <h3>Q7. What is chunking?</h3>

      <p>
        Chunking means splitting a large document into smaller pieces so that
        relevant information can be retrieved more effectively.
      </p>

      <h3>Q8. What is semantic search?</h3>

      <p>
        Semantic search finds information based on meaning rather than only
        matching exact words.
      </p>

      <h3>Q9. What is hybrid search?</h3>

      <p>
        Hybrid search combines semantic/vector search with keyword-based
        search.
      </p>

      <h3>Q10. What is Top-K retrieval?</h3>

      <p>
        Top-K retrieval means retrieving the K most relevant chunks from the
        knowledge base.
      </p>

      <h3>Q11. RAG vs Fine-Tuning?</h3>

      <p>
        RAG retrieves external information at query time without changing
        model weights, while fine-tuning trains the model again and changes
        its weights.
      </p>

      <h3>Q12. What happens if retrieval is poor?</h3>

      <p>
        Poor retrieval can provide irrelevant context to the LLM, which can
        result in a poor final answer.
      </p>

      <h2>20. Final RAG Summary</h2>

      <CodeBlock filename="rag_summary.txt">{`                RAG

          ┌───────────────┐
          │    INDEXING   │
          └───────┬───────┘
                  ↓
        Documents → Chunks
                  ↓
             Embeddings
                  ↓
          Vector Database
                  │
                  │
User Question ────┘
        ↓
    Retrieval
        ↓
 Relevant Chunks
        ↓
   Augmentation
        ↓
  Question + Context
        ↓
       LLM
        ↓
    Generation
        ↓
  Final Answer
        ↓
 Sources / Citations`}</CodeBlock>

      <p>
        <strong>
          RAG allows an LLM to use relevant external information at the time
          of the question instead of requiring the model to be retrained for
          every new piece of information.
        </strong>
      </p>

      <PageNav
        prev={{ label: 'Memory and Agents', path: '/langchain/mi' }}
        next={{ label: 'Memory & AI Agents', path: '/genai/memory-agents' }}
      />
    </DocPage>
  );
}
