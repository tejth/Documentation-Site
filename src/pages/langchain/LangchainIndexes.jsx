import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function Indexes() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'LangChain', href: '/langchain/indexes' },
          { label: 'Indexes' }
        ]}
        title="Indexes"
        readTime="15 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <h2>1. What are Indexes?</h2>

      <p>
        <strong>Indexes</strong> connect your application to external
        knowledge such as <strong>PDFs, websites, databases, and other
        documents</strong>.
      </p>

      <p>
        This allows an LLM application to use information that is not
        available in the model's original training knowledge.
      </p>

      <h3>Simple Idea</h3>

      <CodeBlock filename="indexes_idea.txt">{`LLM
 ↓
Own Knowledge

But what if we need external information?

        ↓

External Knowledge
(PDFs / Websites / Databases)
        ↓
      Indexes
        ↓
       LLM
        ↓
Better Answer`}</CodeBlock>

      {/* 2. Problem */}
      <h2>2. Why Do We Need Indexes?</h2>

      <p>
        Consider a simple example.
      </p>

      <p>
        Suppose you ask ChatGPT:
      </p>

      <CodeBlock filename="example_question.txt">{`"What is the notice period of Company XYZ?"`}</CodeBlock>

      <p>
        The LLM may not be able to answer this question because the required
        information may exist inside the company's private documents and the
        LLM does not automatically have access to that personal or private
        data.
      </p>

      <p>
        For example, the company's notice-period information might be stored
        inside:
      </p>

      <ul>
        <li>Company HR documents</li>
        <li>PDF files</li>
        <li>Internal databases</li>
        <li>Company websites</li>
        <li>Policy documents</li>
      </ul>

      <h3>The Problem</h3>

      <CodeBlock filename="problem.txt">{`User Question
      ↓
"What is the notice period of XYZ?"
      ↓
     LLM
      ↓
No access to private company information
      ↓
Unable to provide accurate answer`}</CodeBlock>

      {/* 3. Solution */}
      <h2>3. Solution: Connect LLM with External Knowledge</h2>

      <p>
        The problem can be solved by connecting the LLM application with
        external knowledge.
      </p>

      <p>
        <strong>Indexes</strong> help prepare external information so that
        relevant knowledge can later be retrieved and provided to the LLM.
      </p>

      <CodeBlock filename="solution.txt">{`External Knowledge
(PDF / Website / Database)
          ↓
       Indexing
          ↓
     Searchable Data
          ↓
      Relevant Data
          ↓
          LLM
          ↓
        Answer`}</CodeBlock>

      {/* 4. Four Components */}
      <h2>4. Four Major Components of Indexes</h2>

      <p>
        Indexes mainly involve four important components:
      </p>

      <ol>
        <li><strong>Document Loader</strong></li>
        <li><strong>Text Splitter</strong></li>
        <li><strong>Vector Store</strong></li>
        <li><strong>Retriever</strong></li>
      </ol>

      <h3>Four Components at a Glance</h3>

      <CodeBlock filename="four_components.txt">{`External Knowledge
       ↓
┌──────────────────┐
│  1. Doc Loader   │
└──────────────────┘
       ↓
┌──────────────────┐
│  2. Text Splitter│
└──────────────────┘
       ↓
┌──────────────────┐
│  3. Vector Store │
└──────────────────┘
       ↓
┌──────────────────┐
│  4. Retriever    │
└──────────────────┘
       ↓
    Relevant Data
       ↓
      LLM`}</CodeBlock>

      {/* 5. Document Loader */}
      <h2>5. Document Loader</h2>

      <p>
        A <strong>Document Loader</strong> loads information from external
        sources into the application.
      </p>

      <p>For example, it can load information from:</p>

      <ul>
        <li>PDF files</li>
        <li>Websites</li>
        <li>Text files</li>
        <li>CSV files</li>
        <li>Databases</li>
      </ul>

      <CodeBlock filename="document_loader.txt">{`PDF
Website
Database
Text File
   ↓
Document Loader
   ↓
Documents`}</CodeBlock>

      <p>
        In LangChain, different document loaders are available for different
        types of data sources.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="pdf_loader.py">{`from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("company_policy.pdf")

documents = loader.load()

print(documents)`}</CodeBlock>

      <p>
        Here, the PDF document is loaded into the application.
      </p>

      {/* 6. Text Splitter */}
      <h2>6. Text Splitter</h2>

      <p>
        Large documents are usually too big to process as one single piece.
        Therefore, the document is divided into smaller pieces called
        <strong> chunks</strong>.
      </p>

      <CodeBlock filename="text_splitter.txt">{`Large Document
      ↓
┌──────────────────────┐
│ Chunk 1              │
├──────────────────────┤
│ Chunk 2              │
├──────────────────────┤
│ Chunk 3              │
├──────────────────────┤
│ Chunk 4              │
└──────────────────────┘`}</CodeBlock>

      <p>
        This process is called <strong>text splitting</strong>.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="text_splitter.py">{`from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

chunks = text_splitter.split_documents(documents)

print(chunks)`}</CodeBlock>

      <h3>Important Parameters</h3>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>chunk_size</code></td>
            <td>Maximum size of each chunk</td>
          </tr>
          <tr>
            <td><code>chunk_overlap</code></td>
            <td>Amount of text shared between consecutive chunks</td>
          </tr>
        </tbody>
      </table>

      {/* 7. Vector Store */}
      <h2>7. Vector Store</h2>

      <p>
        After splitting the document into chunks, the chunks need to be
        converted into numerical representations called
        <strong> embeddings</strong>.
      </p>

      <p>
        These embeddings can then be stored in a <strong>Vector Store</strong>.
      </p>

      <CodeBlock filename="vector_store.txt">{`Document Chunks
      ↓
   Embeddings
      ↓
  Vector Store
      ↓
Searchable Knowledge`}</CodeBlock>

      <p>
        A vector store allows the application to efficiently search for
        information that is semantically similar to a user's question.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="vector_store.py">{`from langchain_community.vectorstores import FAISS

vector_store = FAISS.from_documents(
    chunks,
    embeddings
)`}</CodeBlock>

      <p>
        Here, the document chunks and their embeddings are stored in a FAISS
        vector store.
      </p>

      {/* 8. Retriever */}
      <h2>8. Retriever</h2>

      <p>
        A <strong>Retriever</strong> searches the stored knowledge and finds
        the most relevant pieces of information for a user's question.
      </p>

      <CodeBlock filename="retriever.txt">{`User Question
      ↓
   Retriever
      ↓
Search Vector Store
      ↓
Relevant Chunks
      ↓
      LLM`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="retriever.py">{`retriever = vector_store.as_retriever()

results = retriever.invoke(
    "What is the notice period?"
)

print(results)`}</CodeBlock>

      <p>
        The retriever searches the indexed information and returns the
        relevant document chunks.
      </p>

      {/* 9. Complete Flow */}
      <h2>9. Complete Indexing Flow</h2>

      <p>
        The four components work together in a pipeline.
      </p>

      <CodeBlock filename="complete_indexing_flow.txt">{`                External Knowledge
                ┌─────────┬─────────┐
                ↓         ↓         ↓
               PDF     Website   Database
                │         │         │
                └─────────┴─────────┘
                          ↓
                    Document Loader
                          ↓
                       Documents
                          ↓
                    Text Splitter
                          ↓
                        Chunks
                          ↓
                      Embeddings
                          ↓
                     Vector Store
                          ↓
                      Retriever
                          ↓
                  Relevant Information
                          ↓
                         LLM
                          ↓
                    Final Answer`}</CodeBlock>

      {/* 10. Query Flow */}
      <h2>10. What Happens When User Asks a Question?</h2>

      <p>
        Once the external knowledge has been indexed, the user can ask a
        question.
      </p>

      <CodeBlock filename="query_flow.txt">{`User
 ↓
"What is the notice period of XYZ?"
 ↓
Retriever
 ↓
Search indexed knowledge
 ↓
Find relevant chunk
 ↓
Relevant information
 ↓
LLM
 ↓
Generate answer
 ↓
User`}</CodeBlock>

      {/* 11. Real World Example */}
      <h2>11. Real-World Example</h2>

      <p>
        Suppose a company has a PDF containing its HR policies.
      </p>

      <CodeBlock filename="company_example.txt">{`company_hr_policy.pdf
        ↓
   Document Loader
        ↓
      Documents
        ↓
   Text Splitter
        ↓
       Chunks
        ↓
     Embeddings
        ↓
    Vector Store
        ↓
     Retriever
        ↓
Relevant HR policy
        ↓
       LLM
        ↓
"What is the notice period?"
        ↓
"According to the company policy..."`}</CodeBlock>

      <p>
        This allows the application to answer questions using the company's
        own knowledge base.
      </p>

      {/* 12. Indexes and RAG */}
      <h2>12. Indexes and RAG</h2>

      <p>
        Indexes are an important part of <strong>Retrieval-Augmented
        Generation (RAG)</strong> systems.
      </p>

      <p>
        In a RAG application, external documents are first prepared and
        indexed. When the user asks a question, the retriever finds relevant
        information and passes it to the LLM.
      </p>

      <CodeBlock filename="rag_flow.txt">{`Documents
    ↓
Document Loader
    ↓
Text Splitter
    ↓
Embeddings
    ↓
Vector Store
    ↓
Retriever
    ↓
Relevant Context
    ↓
LLM
    ↓
Answer`}</CodeBlock>

      {/* 13. Indexing vs Retrieval */}
      <h2>13. Indexing vs Retrieval</h2>

      <p>
        It is important to understand that indexing and retrieval are two
        different stages.
      </p>

      <table>
        <thead>
          <tr>
            <th>Indexing</th>
            <th>Retrieval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prepares external knowledge</td>
            <td>Finds relevant knowledge</td>
          </tr>
          <tr>
            <td>Loads documents</td>
            <td>Searches indexed data</td>
          </tr>
          <tr>
            <td>Splits documents</td>
            <td>Returns relevant chunks</td>
          </tr>
          <tr>
            <td>Creates embeddings</td>
            <td>Provides context to the LLM</td>
          </tr>
          <tr>
            <td>Stores vectors</td>
            <td>Runs when the user asks a question</td>
          </tr>
        </tbody>
      </table>

      <h3>Easy Way to Remember</h3>

      <CodeBlock filename="indexing_vs_retrieval.txt">{`INDEXING
"Prepare and store the knowledge"

RETRIEVAL
"Find the required knowledge"`}</CodeBlock>

      {/* 14. Four Components Table */}
      <h2>14. Four Components — Quick Revision</h2>

      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Main Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document Loader</td>
            <td>Loads external documents</td>
          </tr>
          <tr>
            <td>Text Splitter</td>
            <td>Breaks documents into smaller chunks</td>
          </tr>
          <tr>
            <td>Vector Store</td>
            <td>Stores vector representations of chunks</td>
          </tr>
          <tr>
            <td>Retriever</td>
            <td>Finds relevant chunks for a query</td>
          </tr>
        </tbody>
      </table>

      {/* 15. Mental Model */}
      <h2>15. Complete Mental Model</h2>

      <CodeBlock filename="mental_model.txt">{`External Knowledge
       ↓
"Bring the data"
       ↓
Document Loader
       ↓
"Break the data"
       ↓
Text Splitter
       ↓
"Convert + Store"
       ↓
Embeddings + Vector Store
       ↓
"Find the data"
       ↓
Retriever
       ↓
"Give context to LLM"
       ↓
LLM
       ↓
Answer`}</CodeBlock>

      {/* 16. Interview Questions */}
      <h2>16. Interview Questions</h2>

      <h3>1. What are Indexes in LangChain?</h3>

      <p>
        Indexes are used to connect an LLM application with external knowledge
        such as documents, websites, and databases so that relevant information
        can be retrieved when needed.
      </p>

      <h3>2. What are the four major components of Indexes?</h3>

      <p>
        The four major components are:
      </p>

      <ul>
        <li>Document Loader</li>
        <li>Text Splitter</li>
        <li>Vector Store</li>
        <li>Retriever</li>
      </ul>

      <h3>3. What is a Document Loader?</h3>

      <p>
        A Document Loader loads information from external sources such as PDFs,
        websites, text files, and databases.
      </p>

      <h3>4. Why do we split documents?</h3>

      <p>
        Large documents are divided into smaller chunks so that they can be
        processed and retrieved more efficiently.
      </p>

      <h3>5. What is a Vector Store?</h3>

      <p>
        A Vector Store stores vector representations of document chunks and
        allows efficient similarity-based searching.
      </p>

      <h3>6. What is a Retriever?</h3>

      <p>
        A Retriever searches the indexed knowledge and returns the information
        most relevant to a user's question.
      </p>

      <h3>7. What is the role of Indexes in RAG?</h3>

      <p>
        Indexes prepare and organize external knowledge so that relevant
        information can be retrieved and provided to the LLM as context.
      </p>

      {/* 17. Summary */}
      <h2>17. Summary</h2>

      <p>
        Indexes help an LLM application work with external knowledge that is
        not directly available to the model.
      </p>

      <CodeBlock filename="summary.txt">{`External Knowledge
       ↓
Document Loader
       ↓
Text Splitter
       ↓
Embeddings
       ↓
Vector Store
       ↓
Retriever
       ↓
Relevant Context
       ↓
LLM
       ↓
Final Answer`}</CodeBlock>

      <p>
        The easiest way to remember the four components is:
      </p>

      <CodeBlock filename="remember.txt">{`Loader     → Load

Splitter   → Break

Vector     → Store

Retriever  → Find`}</CodeBlock>



      <div className="image-wrapper">
        <img
          src="/images/in1.png"
          alt="Structure"
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

      <PageNav
        prev={{ label: 'Chains', path: '/langchain/chains' }}
        next={{ label: 'Document Loaders', path: '/genai/document-loaders' }}
      />

    </DocPage>
  );
}