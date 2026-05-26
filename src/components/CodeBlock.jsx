import React, { useState } from 'react';
import './CodeBlock.css';

export default function CodeBlock({ filename, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = children?.replace(/<[^>]+>/g, '') || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-showcase">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="code-filename">{filename}</span>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="code-block">
        <code dangerouslySetInnerHTML={{ __html: children }} />
      </pre>
    </div>
  );
}
