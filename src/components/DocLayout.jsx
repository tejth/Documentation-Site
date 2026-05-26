import React from 'react';
import './DocLayout.css';

export function DocPage({ children }) {
  return <article className="doc-page">{children}</article>;
}

export function DocHeader({ breadcrumbs, title, readTime, level, updated }) {
  return (
    <div className="doc-header">
      <div className="doc-breadcrumb">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span className="crumb-text">{crumb.label}</span>}
          </React.Fragment>
        ))}
      </div>
      <h1 className="doc-title">{title}</h1>
      <div className="doc-meta">
        {readTime && <span>📖 {readTime}</span>}
        {level && <span>🎓 {level}</span>}
        {updated && <span>📅 Updated {updated}</span>}
      </div>
    </div>
  );
}

export function Callout({ type = 'info', title, children }) {
  return (
    <div className={`callout ${type}`}>
      <strong>{title}</strong>
      {children}
    </div>
  );
}

export function PageNav({ prev, next }) {
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="page-nav">
      {prev ? (
        <button className="page-nav-item" onClick={() => navigate(prev.path)}>
          <span className="nav-dir">← Previous</span>
          <span className="nav-title">{prev.label}</span>
        </button>
      ) : <div />}
      {next ? (
        <button className="page-nav-item next" onClick={() => navigate(next.path)}>
          <span className="nav-dir">Next →</span>
          <span className="nav-title">{next.label}</span>
        </button>
      ) : <div />}
    </div>
  );
}
