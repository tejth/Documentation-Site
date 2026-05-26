import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({
  onSidebarToggle,
  theme,
  onThemeToggle
}) {

  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Example documentation pages
  const docs = [
    {
      title: 'Python Introduction',
      path: '/python/intro'
    },
    {
      title: 'Variables and Data Types',
      path: '/python/variables'
    },
    {
      title: 'Input and Output',
      path: '/python/input-output'
    },
    {
      title: 'Loops in Python',
      path: '/python/loops'
    },
    {
      title: 'Functions',
      path: '/python/functions'
    },
    {
      title: 'Lists and Tuples',
      path: '/python/lists'
    },
    {
      title: 'Dictionaries and Sets',
      path: '/python/dictionaries'
    },
    {
      title: 'OOPs in Python',
      path: '/python/oops'
    },
    {
      title: 'Inheritance',
      path: '/python/inheritance'
    },
    {
      title: 'Polymorphism',
      path: '/python/polymorphism'
    },
    {
      title: 'Decorators',
      path: '/python/decorators'
    },
    {
      title: 'JSON Files',
      path: '/python/json'
    },
    {
      title: 'Multithreading',
      path: '/python/multithreading'
    }
  ];

  // Filter docs based on search
  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  // Ctrl + K shortcut
  const handleKeyDown = (e) => {

    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {

      e.preventDefault();

      document.getElementById('searchInput')?.focus();

      setShowResults(true);
    }
  };

  useEffect(() => {

    document.addEventListener('keydown', handleKeyDown);

    return () =>
      document.removeEventListener('keydown', handleKeyDown);

  }, []);

  return (

    <header className="header">

      <div className="header-left">

        <button
          className="sidebar-toggle"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="/" className="logo">
          <span className="logo-bracket">&lt;</span>
          TejDocs
          <span className="logo-bracket">/&gt;</span>
        </a>

      </div>

      <div className="header-center">

        <div className="search-wrapper">

          <div className="search-bar">

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="text"
              placeholder="Search docs..."
              id="searchInput"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
            />

            <kbd>Ctrl K</kbd>

          </div>

          {/* Search Results */}

          {showResults && search.length > 0 && (

            <div className="search-results">

              {filteredDocs.length > 0 ? (

                filteredDocs.map((doc, index) => (

                  <a
                    key={index}
                    href={doc.path}
                    className="search-result-item"
                    onClick={() => setShowResults(false)}
                  >
                    {doc.title}
                  </a>

                ))

              ) : (

                <div className="no-results">
                  No documentation found
                </div>

              )}

            </div>

          )}

        </div>

      </div>

      <div className="header-right">

        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >

          {theme === 'dark' ? (

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />

              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />

              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />

              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />

              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>

          ) : (

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>

          )}

        </button>

        <a
          href="https://github.com/tejth"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>

          GitHub

        </a>

      </div>

    </header>
  );
}