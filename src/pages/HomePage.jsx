import React from 'react';
import CodeBlock from '../components/CodeBlock';
import './HomePage.css';

const topics = [
  {
    href: '/python/intro',
    className: 'python',
    icon: '🐍',
    title: 'Python',
    desc: 'From basics to advanced concepts like decorators, generators, ABCs, and multithreading.',
    tags: ['OOP', 'Decorators', 'Generators', 'Flask'],
  },
  {
    href: '#',
    className: 'java',
    icon: '☕',
    title: 'Java',
    desc: 'Core Java, OOP principles, collections, streams, lambdas, and multithreading.',
    tags: ['OOP', 'Streams', 'Collections'],
  },
  {
    href: '#',
    className: 'javascript',
    icon: '⚡',
    title: 'JavaScript',
    desc: 'Modern JS with ES6+, async/await, DOM, promises, and module systems.',
    tags: ['ES6+', 'Async', 'DOM'],
  },
  {
    href: '#',
    className: 'langchain',
    icon: '🔗',
    title: 'LangChain',
    desc: 'Building LLM-powered apps with chains, agents, tools, memory, and RAG pipelines.',
    tags: ['Chains', 'Agents', 'RAG'],
  },
  {
    href: '#',
    className: 'langgraph',
    icon: '🕸️',
    title: 'LangGraph',
    desc: 'StateGraph-based workflows, ReAct agents, Ollama local LLMs, and multi-node pipelines.',
    tags: ['StateGraph', 'Ollama', 'ReAct'],
  },
];

export default function HomePage() {
  const navigate = (path) => {
    if (path === '#') return;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <main className="main-content" id="mainContent">
      <section className="hero">
        <div className="hero-badge">✦ Personal Knowledge Base</div>
        <h1 className="hero-title">
          Everything I've <span className="highlight">Learned</span><br />in One Place
        </h1>
        <p className="hero-subtitle">
          A structured documentation of Python, Java, JavaScript, LangChain, and LangGraph — built by Tej while studying CSE at JECRC University.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/python/intro')}>Start with Python →</button>
          <a href="#topics" className="btn-ghost">Browse Topics</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">5</span><span className="stat-label">Languages / Frameworks</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Topics Covered</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">100+</span><span className="stat-label">Code Snippets</span></div>
        </div>
      </section>

      <section className="topics-section" id="topics">
        <h2 className="section-title">Browse by Topic</h2>
        <div className="topics-grid">
          {topics.map((t, i) => (
            <div
              key={i}
              className={`topic-card ${t.className}`}
              onClick={() => navigate(t.href)}
              style={{ cursor: t.href === '#' ? 'default' : 'pointer' }}
            >
              <div className="topic-icon">{t.icon}</div>
              <div className="topic-info">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <div className="topic-tags">
                  {t.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="topic-arrow">→</div>
            </div>
          ))}
          <div className="topic-card coming-soon">
            <div className="topic-icon">🚀</div>
            <div className="topic-info">
              <h3>More Coming Soon</h3>
              <p>React, Next.js, MongoDB, Flask, and more topics are being added regularly.</p>
              <div className="topic-tags">
                <span>React</span><span>Next.js</span><span>MongoDB</span>
              </div>
            </div>
            <div className="topic-arrow">✦</div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Quick Peek — Python Snippet</h2>
        <CodeBlock filename="decorator_example.py">{`<span class="kw">def</span> <span class="fn">timer</span>(func):
    <span class="kw">import</span> time
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        <span class="fn">print</span>(<span class="str">f"⏱ {'{'}func.__name{'}'} took {'{'}end - start:.4f{'}'}s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

<span class="dec">@timer</span>
<span class="kw">def</span> <span class="fn">compute_squares</span>(n):
    <span class="kw">return</span> [x**2 <span class="kw">for</span> x <span class="kw">in</span> range(n)]

result = compute_squares(<span class="num">100000</span>)
<span class="cmt"># ⏱ compute_squares took 0.0092s</span>`}</CodeBlock>
      </section>
    </main>
  );
}
