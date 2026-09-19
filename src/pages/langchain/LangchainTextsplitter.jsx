
import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function TextSplitters() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'GenAI', href: '/genai/intro' },
          { label: 'Text Splitters' }
        ]}
        title="Text Splitters"
        readTime="25 min read"
        level="Intermediate"
        updated="September 2026"
      />

      <h2>1. What is a Text Splitter?</h2>
       <div className="image-wrapper">
        <img
          src="/images/lts1.png"
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
        A <strong>Text Splitter</strong> is used to break large text or
        documents into smaller, manageable pieces called
        <strong> chunks</strong>.
      </p>

      <p>
        Large documents are often too big to send directly to an LLM or
        process efficiently. Text splitting helps divide the content into
        smaller pieces while trying to preserve useful context.
      </p>

      <h3>Simple Example</h3>

      <CodeBlock filename="before_split.txt">{`Large Document
       ↓
     Text Splitter
       ↓
 ┌──────────┐
 │ Chunk 1  │
 ├──────────┤
 │ Chunk 2  │
 ├──────────┤
 │ Chunk 3  │
 └──────────┘`}</CodeBlock>

      <h2>2. Why Do We Need Text Splitting?</h2>

      <p>
        Text splitting is especially important in RAG applications because
        documents can contain thousands of words.
      </p>

      <ul>
        <li>LLMs have context-window limitations.</li>
        <li>Smaller chunks are easier to search.</li>
        <li>Relevant information can be retrieved more accurately.</li>
        <li>Embeddings work better with focused pieces of text.</li>
        <li>Only relevant chunks need to be sent to the LLM.</li>
      </ul>

      <h3>Text Splitting in RAG</h3>

      <CodeBlock filename="rag_text_splitting.txt">{`Document
    ↓
Document Loader
    ↓
Text Splitter
    ↓
Small Chunks
    ↓
Embeddings
    ↓
Vector Database
    ↓
Retriever
    ↓
LLM
    ↓
Answer`}</CodeBlock>

      <h2>3. Important Text Splitting Concepts</h2>

      <h3>Chunk Size</h3>

      <p>
        <strong>chunk_size</strong> controls the approximate maximum size of
        each chunk.
      </p>

      <CodeBlock filename="chunk_size.py">{`chunk_size=500`}</CodeBlock>

      <p>
        A larger chunk contains more context, while a smaller chunk is more
        focused.
      </p>

      <h3>Chunk Overlap</h3>

      <p>
        <strong>chunk_overlap</strong> controls how much content is repeated
        between neighboring chunks.
      </p>

      <CodeBlock filename="chunk_overlap.py">{`chunk_overlap=50`}</CodeBlock>

      <p>
        Overlap can help preserve context when an important sentence appears
        near the boundary between two chunks.
      </p>

      <h3>Simple Example</h3>

      <CodeBlock filename="overlap_example.txt">{`Chunk 1:
LangChain is a framework for building AI applications.
It supports multiple LLM providers.

Chunk 2:
It supports multiple LLM providers.
It can also be used to build RAG applications.`}</CodeBlock>

      <p>
        The repeated sentence provides additional context between the chunks.
      </p>

      <h2>4. Types of Text Splitting</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Main Idea</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Length-Based Splitting</td>
            <td>Split text according to a fixed length.</td>
          </tr>
          <tr>
            <td>Text Structure-Based Splitting</td>
            <td>Split using natural text separators and structure.</td>
          </tr>
          <tr>
            <td>Document Structured-Based Splitting</td>
            <td>Split code or structured documents according to their language structure.</td>
          </tr>
          <tr>
            <td>Semantic Meaning-Based Splitting</td>
            <td>Split when the meaning or topic changes.</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Length-Based Text Splitting</h2>
       <div className="image-wrapper">
        <img
          src="/images/lts2.png"
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
        Length-based splitting divides text into chunks according to a
        specified size.
      </p>

      <p>
        One commonly used splitter for this approach is
        <strong> CharacterTextSplitter</strong>.
      </p>

      <h3>Example with PDF</h3>

      <CodeBlock filename="character_text_splitter.py">{`from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader('dl-curriculum.pdf')

docs = loader.load()

splitter = CharacterTextSplitter(
    chunk_size=200,
    chunk_overlap=0,
    separator=''
)

result = splitter.split_documents(docs)

print(result[1].page_content)`}</CodeBlock>

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
            <td>chunk_size</td>
            <td>Maximum size of a chunk.</td>
          </tr>
          <tr>
            <td>chunk_overlap</td>
            <td>Number of characters shared between chunks.</td>
          </tr>
          <tr>
            <td>separator</td>
            <td>Character used to split the text.</td>
          </tr>
        </tbody>
      </table>

      <h3>Flow</h3>

      <CodeBlock filename="length_based_flow.txt">{`Large Text
    ↓
Fixed Length
    ↓
Chunk 1
Chunk 2
Chunk 3
Chunk 4`}</CodeBlock>

      <h2>6. Text Structure-Based Splitting</h2>
       <div className="image-wrapper">
        <img
          src="/images/lts3.png"
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
        Structure-based splitting tries to split text using natural
        separators rather than blindly cutting it at fixed positions.
      </p>

      <p>
        LangChain provides
        <strong> RecursiveCharacterTextSplitter</strong> for this type of
        splitting.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="recursive_splitter.py">{`from langchain.text_splitter import RecursiveCharacterTextSplitter

text = """
Space exploration has led to incredible scientific discoveries. From
landing on the Moon to exploring Mars, humanity continues to push the
boundaries of what’s possible beyond our planet.

These missions have not only expanded our knowledge of the universe but
have also contributed to advancements in technology here on Earth.
Satellite communications, GPS, and even certain medical imaging
techniques trace their roots back to innovations driven by space programs.
"""

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=0,
)

chunks = splitter.split_text(text)

print(len(chunks))
print(chunks)`}</CodeBlock>

      <h3>Why Recursive?</h3>

      <p>
        The splitter tries different separators recursively so that the text
        can be divided while preserving its natural structure as much as
        possible.
      </p>

      <CodeBlock filename="recursive_logic.txt">{`Large Text
    ↓
Paragraphs
    ↓
Sentences
    ↓
Smaller pieces
    ↓
Final Chunks`}</CodeBlock>

      <h2>7. Document Structured-Based Splitting</h2>
       <div className="image-wrapper">
        <img
          src="/images/lts4.png"
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
        Some documents have their own structure. Source code and Markdown,
        for example, contain meaningful structures that should ideally be
        preserved when splitting.
      </p>

      <p>
        LangChain's
        <strong> RecursiveCharacterTextSplitter.from_language()</strong>
        can be used to split content according to a programming language or
        document format.
      </p>

      <h3>Python Code Splitting</h3>

      <CodeBlock filename="python_code_splitter.py">{`from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    Language
)

text = """
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def get_details(self):
        return self.name

    def is_passing(self):
        return self.grade >= 6.0

student1 = Student("Aarav", 20, 8.2)

print(student1.get_details())

if student1.is_passing():
    print("The student is passing.")
else:
    print("The student is not passing.")
"""

splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.PYTHON,
    chunk_size=300,
    chunk_overlap=0,
)

chunks = splitter.split_text(text)

print(len(chunks))
print(chunks[0])`}</CodeBlock>

      <h3>Why Use Language.PYTHON?</h3>

      <p>
        When splitting Python code, the splitter can use Python's structure
        to create more meaningful chunks instead of treating the code as
        ordinary text.
      </p>

      <h3>Markdown Splitting</h3>

      <p>
        The same approach can be used for Markdown documents.
      </p>

      <CodeBlock filename="markdown_splitter.py">{`from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    Language
)

text = """
# Project Name: Smart Student Tracker

A simple Python-based project to manage and track student data.

## Features

- Add new students
- View student details
- Check if a student is passing

## Tech Stack

- Python 3.10+
- No external dependencies

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the application
"""

splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.MARKDOWN,
    chunk_size=200,
    chunk_overlap=0,
)

chunks = splitter.split_text(text)

print(len(chunks))
print(chunks[0])`}</CodeBlock>

      <h3>Useful Structured Formats</h3>

      <table>
        <thead>
          <tr>
            <th>Language / Format</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Python</td>
            <td>Python source code</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>JavaScript source code</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Java source code</td>
          </tr>
          <tr>
            <td>Markdown</td>
            <td>Documentation files</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Web page structure</td>
          </tr>
        </tbody>
      </table>

      <h2>8. Semantic Meaning-Based Splitting</h2>

      <p>
        Semantic splitting divides text according to
        <strong>meaning</strong> rather than only length or characters.
      </p>

      <p>
        The main idea is simple:
      </p>

      <CodeBlock filename="semantic_idea.txt">{`Same Meaning
     ↓
Keep Together

Different Meaning
     ↓
Create a New Chunk`}</CodeBlock>

      <h3>Example</h3>

      <CodeBlock filename="semantic_example.txt">{`1. LangChain helps build AI applications.
2. It supports multiple LLMs.
3. Cricket is popular in India.
4. IPL is very famous.`}</CodeBlock>

      <p>
        The first two sentences are about AI and LangChain, while the last
        two sentences are about cricket.
      </p>

      <h3>Expected Result</h3>

      <CodeBlock filename="semantic_chunks.txt">{`Chunk 1:
LangChain helps build AI applications.
It supports multiple LLMs.

Chunk 2:
Cricket is popular in India.
IPL is very famous.`}</CodeBlock>

      <h2>9. How Semantic Splitting Works</h2>

      <h3>Step 1: Split into Small Pieces</h3>

      <p>
        First, the text is divided into sentences or small pieces.
      </p>

      <CodeBlock filename="semantic_step_1.txt">{`S1: LangChain helps build AI apps.
S2: It supports multiple LLMs.
S3: Cricket is popular in India.
S4: IPL is very famous.`}</CodeBlock>

      <h3>Step 2: Generate Embeddings</h3>

      <p>
        Each sentence is converted into an embedding vector.
      </p>

      <CodeBlock filename="semantic_embeddings.txt">{`Sentence
    ↓
Embedding Model
    ↓
Vector

S1 → [0.12, 0.81, 0.44, ...]
S2 → [0.15, 0.79, 0.46, ...]
S3 → [0.91, 0.12, 0.22, ...]
S4 → [0.88, 0.14, 0.25, ...]`}</CodeBlock>

      <p>
        Similar meanings generally produce similar vector representations.
      </p>

      <h3>Step 3: Compare Similarity</h3>

      <p>
        The system compares nearby sentences using a similarity measurement
        such as cosine similarity.
      </p>

      <CodeBlock filename="similarity_scores.txt">{`S1 ↔ S2 = 0.92  → Same topic
S2 ↔ S3 = 0.30  → Topic changed
S3 ↔ S4 = 0.88  → Same topic`}</CodeBlock>

      <h3>Step 4: Decide Where to Split</h3>

      <CodeBlock filename="semantic_decision.txt">{`High Similarity
      ↓
Same Topic
      ↓
Keep Together

Low Similarity
      ↓
Topic Changed
      ↓
Split Here`}</CodeBlock>

      <h2>10. Semantic Splitting Complete Flow</h2>

      <CodeBlock filename="semantic_flow.txt">{`Original Text
      ↓
Split into Sentences
      ↓
Generate Embeddings
      ↓
Compare Similarity
      ↓
Find Topic Changes
      ↓
Create Chunks
      ↓
Use Chunks for RAG / Search`}</CodeBlock>

      <h2>11. Sliding Window in Semantic Splitting</h2>

      <p>
        Semantic splitting can use nearby sentences to understand whether
        the topic is continuing or changing.
      </p>

      <p>
        This can be thought of as a <strong>sliding window</strong> over the
        text.
      </p>

      <CodeBlock filename="sliding_window.txt">{`S1 → S2 → S3 → S4 → S5

Compare nearby sentences

S1 ↔ S2
S2 ↔ S3
S3 ↔ S4
S4 ↔ S5`}</CodeBlock>

      <p>
        This helps identify points where the semantic similarity drops and a
        new topic may have started.
      </p>

      <h2>12. Similarity Threshold</h2>

      <p>
        A threshold can be used to decide when the similarity between pieces
        of text is low enough to create a new chunk.
      </p>

      <CodeBlock filename="threshold.txt">{`Similarity >= 0.70
        ↓
Same topic
        ↓
Keep together

Similarity < 0.70
        ↓
Possible topic change
        ↓
Split`}</CodeBlock>

      <p>
        The value shown above is only an example for understanding the
        concept. The appropriate threshold depends on the application and
        embedding model.
      </p>

      <h2>13. Comparison of Text Splitters</h2>

      <table>
        <thead>
          <tr>
            <th>Splitter Type</th>
            <th>How It Splits</th>
            <th>Useful For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Length-Based</td>
            <td>Fixed size</td>
            <td>Simple text</td>
          </tr>
          <tr>
            <td>Recursive / Structure-Based</td>
            <td>Natural separators</td>
            <td>General documents</td>
          </tr>
          <tr>
            <td>Document Structured</td>
            <td>Document or language structure</td>
            <td>Code and Markdown</td>
          </tr>
          <tr>
            <td>Semantic</td>
            <td>Meaning/topic changes</td>
            <td>Topic-based documents</td>
          </tr>
        </tbody>
      </table>

      <h2>14. Length-Based vs Semantic Splitting</h2>

      <table>
        <thead>
          <tr>
            <th>Length-Based</th>
            <th>Semantic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Uses size</td>
            <td>Uses meaning</td>
          </tr>
          <tr>
            <td>Simple and fast</td>
            <td>More processing is required</td>
          </tr>
          <tr>
            <td>May split in the middle of a topic</td>
            <td>Attempts to split when the topic changes</td>
          </tr>
          <tr>
            <td>Does not require embeddings for basic splitting</td>
            <td>Uses embeddings to compare semantic similarity</td>
          </tr>
        </tbody>
      </table>

      <h2>15. Choosing the Right Text Splitter</h2>

      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple text</td>
            <td>Length-Based</td>
          </tr>
          <tr>
            <td>Normal documents</td>
            <td>Recursive / Structure-Based</td>
          </tr>
          <tr>
            <td>Python / Java / JavaScript code</td>
            <td>Language-Based Splitting</td>
          </tr>
          <tr>
            <td>Markdown documentation</td>
            <td>Markdown Splitting</td>
          </tr>
          <tr>
            <td>Topic-sensitive content</td>
            <td>Semantic Splitting</td>
          </tr>
        </tbody>
      </table>

      <h2>16. Text Splitter in a RAG Application</h2>

      <p>
        Text splitting is one of the most important preprocessing steps in
        a RAG pipeline.
      </p>

      <CodeBlock filename="rag_pipeline.txt">{`Document
   ↓
Document Loader
   ↓
Text Splitter
   ↓
Chunks
   ↓
Embedding Model
   ↓
Vector Database
   ↓
Retriever
   ↓
Relevant Chunks
   ↓
Prompt + Context
   ↓
LLM
   ↓
Answer`}</CodeBlock>

      <h2>17. Common Mistakes</h2>

      <h3>1. Chunk Size Too Large</h3>

      <p>
        Very large chunks may contain too much unrelated information and can
        reduce retrieval precision.
      </p>

      <h3>2. Chunk Size Too Small</h3>

      <p>
        Very small chunks may lose important context.
      </p>

      <h3>3. No Chunk Overlap</h3>

      <p>
        In some documents, important information can fall across chunk
        boundaries. A suitable overlap can help preserve context.
      </p>

      <h3>4. Wrong Splitter for the Data</h3>

      <p>
        Code, Markdown, and normal documents may benefit from different
        splitting strategies.
      </p>

      <h3>5. Assuming One Setting Works Everywhere</h3>

      <p>
        Chunk size and overlap should be tested according to the document
        type and the retrieval task.
      </p>

      <h2>18. Easy Mental Model</h2>

      <CodeBlock filename="mental_model.txt">{`Length-Based
→ Split by size

Recursive
→ Split by natural structure

Language-Based
→ Split according to code/document structure

Semantic
→ Split when meaning changes`}</CodeBlock>

      <h2>19. Interview Questions</h2>

      <h3>Q1. What is a Text Splitter?</h3>

      <p>
        A text splitter divides large text or documents into smaller chunks
        that can be processed efficiently by an LLM or retrieval system.
      </p>

      <h3>Q2. Why is text splitting important in RAG?</h3>

      <p>
        It makes documents easier to embed and retrieve and allows the system
        to send only relevant pieces of information to the LLM.
      </p>

      <h3>Q3. What is chunk size?</h3>

      <p>
        Chunk size controls the approximate size of each generated text
        chunk.
      </p>

      <h3>Q4. What is chunk overlap?</h3>

      <p>
        Chunk overlap is the amount of text repeated between neighboring
        chunks to help preserve context.
      </p>

      <h3>Q5. What is CharacterTextSplitter?</h3>

      <p>
        CharacterTextSplitter is a splitter that divides text based on
        character length and a specified separator.
      </p>

      <h3>Q6. What is RecursiveCharacterTextSplitter?</h3>

      <p>
        RecursiveCharacterTextSplitter attempts to split text using natural
        separators while keeping chunks within the desired size.
      </p>

      <h3>Q7. What is semantic text splitting?</h3>

      <p>
        Semantic splitting attempts to divide text when its meaning or topic
        changes rather than only splitting according to character length.
      </p>

      <h3>Q8. Why are embeddings used in semantic splitting?</h3>

      <p>
        Embeddings provide vector representations that can be compared to
        estimate semantic similarity between pieces of text.
      </p>

      <h3>Q9. What is cosine similarity?</h3>

      <p>
        Cosine similarity measures how similar two vectors are based on the
        angle between them.
      </p>

      <h3>Q10. Which splitter can be useful for Python code?</h3>

      <p>
        A language-aware splitter can be used, for example
        <code>RecursiveCharacterTextSplitter.from_language()</code> with
        <code>Language.PYTHON</code>.
      </p>

      <h2>20. Quick Revision</h2>

      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Remember</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text Splitter</td>
            <td>Break large text into smaller chunks.</td>
          </tr>
          <tr>
            <td>Chunk Size</td>
            <td>Controls chunk size.</td>
          </tr>
          <tr>
            <td>Chunk Overlap</td>
            <td>Preserves context between chunks.</td>
          </tr>
          <tr>
            <td>CharacterTextSplitter</td>
            <td>Length-based splitting.</td>
          </tr>
          <tr>
            <td>RecursiveCharacterTextSplitter</td>
            <td>Structure-aware general text splitting.</td>
          </tr>
          <tr>
            <td>Language Splitting</td>
            <td>Useful for code and structured formats.</td>
          </tr>
          <tr>
            <td>Semantic Splitting</td>
            <td>Splits according to meaning/topic changes.</td>
          </tr>
          <tr>
            <td>Embeddings</td>
            <td>Represent text as vectors.</td>
          </tr>
          <tr>
            <td>Cosine Similarity</td>
            <td>Measures vector similarity.</td>
          </tr>
        </tbody>
      </table>

      <h2>21. Final Summary</h2>

      <CodeBlock filename="text_splitter_summary.txt">{`Large Document
      ↓
Choose Splitting Strategy
      ↓
┌───────────────────────────────┐
│ Length-Based                  │
│ Recursive / Structure-Based   │
│ Language-Based                │
│ Semantic-Based                │
└───────────────────────────────┘
      ↓
Smaller Chunks
      ↓
Embeddings
      ↓
Vector Database
      ↓
Retrieval
      ↓
LLM
      ↓
Final Answer`}</CodeBlock>

      <p>
        <strong>
          Simple rule: Good chunking helps the RAG system retrieve the right
          information at the right time.
        </strong>
      </p>

      <PageNav
        prev={{ label: 'Document Loaders', path: '/langchain/documentloaders' }}
        next={{ label: 'Embeddings', path: '/langchain/embeddings' }}
      />
    </DocPage>
  );
}
