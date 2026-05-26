import React from 'react';
import { DocPage, DocHeader } from '../components/DocLayout';
import './ComingSoon.css';

export default function ComingSoon({ title, section, prev, next }) {
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <DocPage>
      <DocHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: section || 'Docs' }, { label: title }]}
        title={title}
        updated="Coming Soon"
      />
      <div className="coming-soon-container">
        <div className="coming-soon-icon">🚧</div>
        <h2>This page is coming soon</h2>
        <p>This module is currently being written. Check back soon — it will be added shortly!</p>
        <div className="coming-soon-actions">
          {prev && <button onClick={() => navigate(prev.path)}>← {prev.label}</button>}
          {next && <button onClick={() => navigate(next.path)}>{next.label} →</button>}
        </div>
      </div>
    </DocPage>
  );
}
