import React, { useState } from 'react';
import { navSections } from '../data/navData';
import './Sidebar.css';

function ChevronIcon({ open }) {
  return (
    <svg
      className={`chevron-icon ${open ? 'open' : ''}`}
      width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Sidebar({ collapsed, mobileSidebarOpen, currentPath }) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isItemActive = (path) => currentPath === path;

  const sidebarClass = [
    'sidebar',
    collapsed ? 'collapsed' : '',
    mobileSidebarOpen ? 'open' : '',
  ].filter(Boolean).join(' ');

  return (
    <aside className={sidebarClass} id="sidebar">
      <nav className="sidebar-nav">
        {navSections.map((section) => {
          const isExpanded = expandedSections[section.id];
          const hasActiveChild = section.items?.some(item => isItemActive(item.path));

          return (
            <div className="nav-section" key={section.id}>
              {section.collapsible ? (
                <button
                  className={`nav-section-header ${hasActiveChild ? 'has-active' : ''}`}
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isExpanded}
                >
                  <span className="nav-section-label-text">
                    {section.emoji && <span className="section-emoji">{section.emoji}</span>}
                    {section.label}
                  </span>
                  <ChevronIcon open={isExpanded} />
                </button>
              ) : (
                <span className="nav-section-label">{section.label}</span>
              )}

              <div className={`nav-items-container ${section.collapsible ? (isExpanded ? 'expanded' : 'collapsed-items') : 'always-open'}`}>
                {section.items.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`nav-item ${isItemActive(item.path) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', item.path);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                  >
                    {item.icon === 'home' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    )}
                    {item.icon === 'info' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    )}
                    <span>{item.label}</span>
                    {item.completed && <span className="completed-dot" title="Completed"></span>}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
