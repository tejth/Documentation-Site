import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function DocumentLoaders() {
  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'GenAI', href: '/genai/intro' },
          { label: 'Document Loaders' }
        ]}
        title="Document Loaders"
        readTime="20 min read"
        level="Beginner"
        updated="September 2026"
      />

      <h2>1. What is a Document Loader?</h2>
       <div className="image-wrapper">
        <img
          src="/images/dl1.png"
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
        A <strong>Document Loader</strong> is a component in LangChain used
        to load data from different sources such as text files, PDFs,
        websites, directories, and CSV files.
      </p>

      <p>
        The loader converts the external data into LangChain
        <strong> Document</strong> objects so that the data can later be used
        for tasks such as searching, summarization, question answering, and
        RAG applications.
      </p>

      <h3>Basic Flow</h3>

      <CodeBlock filename="document_loader_flow.txt">{`File / Website / CSV / PDF
            ↓
      Document Loader
            ↓
      Document Objects
            ↓
     page_content + metadata
            ↓
       LangChain Chain
            ↓
        Final Output`}</CodeBlock>

      <h2>2. What is a Document Object?</h2>

      <p>
        When a loader loads data, LangChain generally represents it as a
        <strong> Document</strong> object.
      </p>

      <p>A Document mainly contains:</p>

      <ul>
        <li>
          <strong>page_content</strong> — the actual text extracted from the
          source.
        </li>
        <li>
          <strong>metadata</strong> — additional information about the source,
          such as file name, page number, or source URL.
        </li>
      </ul>

      <CodeBlock filename="document_object.txt">{`Document(
    page_content="Actual text from the source...",
    metadata={
        "source": "cricket.txt"
    }
)`}</CodeBlock>

      <h3>Accessing Document Information</h3>

      <CodeBlock filename="access_document.py">{`print(docs[0].page_content)
print(docs[0].metadata)`}</CodeBlock>

      <h2>3. Main Document Loaders</h2>

      <p>
        Some commonly used LangChain document loaders are:
      </p>

      <table>
        <thead>
          <tr>
            <th>Loader</th>
            <th>Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TextLoader</td>
            <td>Loading text files</td>
          </tr>
          <tr>
            <td>PyPDFLoader</td>
            <td>Loading PDF files</td>
          </tr>
          <tr>
            <td>DirectoryLoader</td>
            <td>Loading multiple files from a directory</td>
          </tr>
          <tr>
            <td>WebBaseLoader</td>
            <td>Loading content from web pages</td>
          </tr>
          <tr>
            <td>CSVLoader</td>
            <td>Loading CSV files</td>
          </tr>
        </tbody>
      </table>

       <div className="image-wrapper">
        <img
          src="/images/dl2.png"
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

      <h2>4. TextLoader</h2>
       <div className="image-wrapper">
        <img
          src="/images/dl3.png"
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
        <strong>TextLoader</strong> is used to load data from a plain text
        file.
      </p>

      <h3>Basic Example</h3>

      <CodeBlock filename="text_loader.py">{`from langchain_community.document_loaders import TextLoader

loader = TextLoader(
    'cricket.txt',
    encoding='utf-8'
)

docs = loader.load()

print(type(docs))
print(len(docs))

print(docs[0].page_content)
print(docs[0].metadata)`}</CodeBlock>

      <h3>Understanding the Code</h3>

      <ul>
        <li>
          <strong>TextLoader()</strong> creates a loader for the text file.
        </li>
        <li>
          <strong>load()</strong> loads the file into Document objects.
        </li>
        <li>
          <strong>page_content</strong> gives the text.
        </li>
        <li>
          <strong>metadata</strong> gives information about the source.
        </li>
      </ul>

      <h3>Using TextLoader with an LLM</h3>

      <p>
        The loaded document can be passed to a LangChain chain.
      </p>

      <CodeBlock filename="text_loader_llm.py">{`from langchain_community.document_loaders import TextLoader
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

model = ChatOpenAI()

prompt = PromptTemplate(
    template='Write a summary for the following poem - \\n {poem}',
    input_variables=['poem']
)

parser = StrOutputParser()

loader = TextLoader(
    'cricket.txt',
    encoding='utf-8'
)

docs = loader.load()

chain = prompt | model | parser

print(
    chain.invoke({
        'poem': docs[0].page_content
    })
)`}</CodeBlock>

      <h2>5. PyPDFLoader</h2>
       <div className="image-wrapper">
        <img
          src="/images/dl4.png"
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
        <strong>PyPDFLoader</strong> is used to load text from PDF documents.
      </p>

      <h3>Installation</h3>

      <CodeBlock filename="terminal.txt">{`pip install pypdf langchain-community`}</CodeBlock>

      <h3>Basic Example</h3>

      <CodeBlock filename="pdf_loader.py">{`from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader('dl-curriculum.pdf')

docs = loader.load()

print(len(docs))

print(docs[0].page_content)
print(docs[1].metadata)`}</CodeBlock>

      <h3>How PyPDFLoader Works</h3>

      <CodeBlock filename="pdf_flow.txt">{`PDF File
   ↓
PyPDFLoader
   ↓
Extract Text
   ↓
Document Objects
   ↓
page_content + metadata`}</CodeBlock>

      <p>
        A PDF can contain multiple pages, so the loader can return multiple
        Document objects.
      </p>

      <h2>6. DirectoryLoader</h2>
       <div className="image-wrapper">
        <img
          src="/images/dl5.png"
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
        <strong>DirectoryLoader</strong> is useful when you want to load
        multiple files from a directory instead of loading each file
        individually.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="directory_loader.py">{`from langchain_community.document_loaders import (
    DirectoryLoader,
    PyPDFLoader
)

loader = DirectoryLoader(
    path='books',
    glob='*.pdf',
    loader_cls=PyPDFLoader
)

docs = loader.lazy_load()

for document in docs:
    print(document.metadata)`}</CodeBlock>

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
            <td>path</td>
            <td>Directory containing the files.</td>
          </tr>
          <tr>
            <td>glob</td>
            <td>Pattern used to select files.</td>
          </tr>
          <tr>
            <td>loader_cls</td>
            <td>Loader used to process each selected file.</td>
          </tr>
        </tbody>
      </table>

      <h3>Example Directory Structure</h3>

      <CodeBlock filename="folder_structure.txt">{`project/
│
├── books/
│   ├── book1.pdf
│   ├── book2.pdf
│   ├── book3.pdf
│   └── notes.txt
│
└── directory_loader.py`}</CodeBlock>

      <p>
        With <code>glob='*.pdf'</code>, only PDF files are selected.
      </p>

      <h3>load() vs lazy_load()</h3>

      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>load()</td>
            <td>Loads the documents directly and returns them.</td>
          </tr>
          <tr>
            <td>lazy_load()</td>
            <td>Loads documents lazily as they are iterated over.</td>
          </tr>
        </tbody>
      </table>

      <h3>Simple Mental Model</h3>

      <CodeBlock filename="lazy_loading.txt">{`load()
↓
Load everything

lazy_load()
↓
Load as needed while iterating`}</CodeBlock>

      <h2>7. WebBaseLoader</h2>

 <div className="image-wrapper">
        <img
          src="/images/dl6.png"
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
        <strong>WebBaseLoader</strong> is used to load content from a web page
        using its URL.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="web_loader.py">{`from langchain_community.document_loaders import WebBaseLoader

url = 'https://example.com'

loader = WebBaseLoader(url)

docs = loader.load()

print(len(docs))
print(docs[0].page_content)
print(docs[0].metadata)`}</CodeBlock>

      <h3>Using WebBaseLoader with an LLM</h3>

      <CodeBlock filename="web_loader_llm.py">{`from langchain_community.document_loaders import WebBaseLoader
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

model = ChatOpenAI()

prompt = PromptTemplate(
    template='Answer the following question \\n {question} from the following text - \\n {text}',
    input_variables=['question', 'text']
)

parser = StrOutputParser()

url = 'https://www.flipkart.com/apple-macbook-air-m2-16-gb-256-gb-ssd-macos-sequoia-mc7x4hn-a/p/itmdc5308fa78421'

loader = WebBaseLoader(url)

docs = loader.load()

chain = prompt | model | parser

print(
    chain.invoke({
        'question': 'What is the product that we are talking about?',
        'text': docs[0].page_content
    })
)`}</CodeBlock>

      <h3>Web Loader Flow</h3>

      <CodeBlock filename="web_loader_flow.txt">{`Website URL
     ↓
WebBaseLoader
     ↓
Web Page Content
     ↓
Document Object
     ↓
LLM / RAG Application`}</CodeBlock>

      <h2>8. CSVLoader</h2>

      <p>
        <strong>CSVLoader</strong> is used to load data from CSV files into
        LangChain Document objects.
      </p>

      <h3>Example</h3>

      <CodeBlock filename="csv_loader.py">{`from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(
    file_path='Social_Network_Ads.csv'
)

docs = loader.load()

print(len(docs))
print(docs[1])`}</CodeBlock>

      <h3>CSV Loading Flow</h3>

      <CodeBlock filename="csv_flow.txt">{`CSV File
   ↓
CSVLoader
   ↓
Document Objects
   ↓
page_content + metadata`}</CodeBlock>

      <h2>9. Document Loaders with RAG</h2>

      <p>
        Document loaders are an important first step in a RAG application.
        Before documents can be split, embedded, and stored in a vector
        database, they first need to be loaded.
      </p>

      <h3>Complete Flow</h3>

      <CodeBlock filename="loader_rag_flow.txt">{`Documents
   ↓
Document Loader
   ↓
Document Objects
   ↓
Text Splitter
   ↓
Chunks
   ↓
Embeddings
   ↓
Vector Database
   ↓
Retriever
   ↓
LLM
   ↓
Final Answer`}</CodeBlock>

      <h3>Example</h3>

      <p>
        Suppose you want to build a chatbot that answers questions from
        company PDFs.
      </p>

      <ol>
        <li>Use PyPDFLoader to load the PDFs.</li>
        <li>Split the documents into smaller chunks.</li>
        <li>Create embeddings for the chunks.</li>
        <li>Store the embeddings in a vector database.</li>
        <li>Retrieve relevant chunks when the user asks a question.</li>
        <li>Send the retrieved context to the LLM.</li>
      </ol>

      <h2>10. Choosing the Right Loader</h2>

      <table>
        <thead>
          <tr>
            <th>Your Data</th>
            <th>Recommended Loader</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TXT file</td>
            <td>TextLoader</td>
          </tr>
          <tr>
            <td>PDF file</td>
            <td>PyPDFLoader</td>
          </tr>
          <tr>
            <td>Multiple PDFs</td>
            <td>DirectoryLoader + PyPDFLoader</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>WebBaseLoader</td>
          </tr>
          <tr>
            <td>CSV file</td>
            <td>CSVLoader</td>
          </tr>
        </tbody>
      </table>

      <h2>11. Common Methods</h2>

      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>load()</td>
            <td>Load documents and return them.</td>
          </tr>
          <tr>
            <td>lazy_load()</td>
            <td>Load documents lazily during iteration.</td>
          </tr>
        </tbody>
      </table>

      <h2>12. Common Mistakes</h2>

      <h3>1. Wrong File Path</h3>

      <CodeBlock filename="wrong_path.py">{`loader = TextLoader('wrong_file.txt')`}</CodeBlock>

      <p>
        Make sure the file exists at the specified location.
      </p>

      <h3>2. Wrong Encoding</h3>

      <CodeBlock filename="encoding.py">{`loader = TextLoader(
    'cricket.txt',
    encoding='utf-8'
)`}</CodeBlock>

      <p>
        Specifying the correct encoding can help when loading text files
        containing special characters.
      </p>

      <h3>3. Wrong Loader</h3>

      <p>
        Use a loader that matches the type of data you are loading.
      </p>

      <CodeBlock filename="loader_selection.txt">{`TXT  → TextLoader
PDF  → PyPDFLoader
CSV  → CSVLoader
WEB  → WebBaseLoader`}</CodeBlock>

      <h3>4. Forgetting to Access page_content</h3>

      <CodeBlock filename="page_content.py">{`docs = loader.load()

print(docs[0].page_content)`}</CodeBlock>

      <h2>13. Easy Mental Model</h2>

      <CodeBlock filename="mental_model.txt">{`Different Data
      ↓
Choose the Correct Loader
      ↓
Document Objects
      ↓
page_content + metadata
      ↓
Process / Search / RAG`}</CodeBlock>

      <p>
        Think of a <strong>Document Loader</strong> as a bridge between your
        raw data and LangChain.
      </p>

      <h2>14. Interview Questions</h2>

      <h3>Q1. What is a Document Loader in LangChain?</h3>

      <p>
        A Document Loader loads data from external sources and converts it
        into LangChain Document objects.
      </p>

      <h3>Q2. What is TextLoader used for?</h3>

      <p>
        TextLoader is used to load plain text files.
      </p>

      <h3>Q3. What is PyPDFLoader?</h3>

      <p>
        PyPDFLoader is used to extract content from PDF files and represent
        it as Document objects.
      </p>

      <h3>Q4. Why use DirectoryLoader?</h3>

      <p>
        DirectoryLoader is useful for loading multiple files from a directory
        using a specified loader.
      </p>

      <h3>Q5. What is lazy_load()?</h3>

      <p>
        lazy_load() loads documents lazily as they are iterated over instead
        of immediately loading everything.
      </p>

      <h3>Q6. What is WebBaseLoader?</h3>

      <p>
        WebBaseLoader is used to load content from web pages.
      </p>

      <h3>Q7. What is CSVLoader?</h3>

      <p>
        CSVLoader loads rows from a CSV file into LangChain Document objects.
      </p>

      <h3>Q8. What is page_content?</h3>

      <p>
        page_content contains the actual text extracted from the loaded
        source.
      </p>

      <h3>Q9. What is metadata?</h3>

      <p>
        Metadata contains additional information about the source, such as
        file or page details.
      </p>

      <h3>Q10. Why are Document Loaders important in RAG?</h3>

      <p>
        They provide the first step for bringing external documents into a
        RAG pipeline before chunking, embedding, and retrieval.
      </p>

      <h2>15. Quick Revision</h2>

      <table>
        <thead>
          <tr>
            <th>Loader</th>
            <th>Data Source</th>
            <th>Main Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TextLoader</td>
            <td>Text files</td>
            <td>load()</td>
          </tr>
          <tr>
            <td>PyPDFLoader</td>
            <td>PDF files</td>
            <td>load()</td>
          </tr>
          <tr>
            <td>DirectoryLoader</td>
            <td>Directory of files</td>
            <td>load() / lazy_load()</td>
          </tr>
          <tr>
            <td>WebBaseLoader</td>
            <td>Web pages</td>
            <td>load()</td>
          </tr>
          <tr>
            <td>CSVLoader</td>
            <td>CSV files</td>
            <td>load()</td>
          </tr>
        </tbody>
      </table>

      <h2>16. Final Summary</h2>

      <p>
        Document Loaders allow LangChain to work with data from different
        sources.
      </p>

      <CodeBlock filename="summary.txt">{`Text File
   → TextLoader

PDF
   → PyPDFLoader

Multiple Files
   → DirectoryLoader

Website
   → WebBaseLoader

CSV
   → CSVLoader

All
   ↓
Document Objects
   ↓
page_content + metadata
   ↓
RAG / Chains / LLM Applications`}</CodeBlock>

      <p>
        <strong>
          Remember: Load the data first, then process it for your LangChain
          application.
        </strong>
      </p>

      <PageNav
        prev={{ label: 'RAG', path: '/langchain/rag' }}
        next={{ label: 'Text Splitters', path: '/lan/text-splitters' }}
      />
    </DocPage>
  );
}
