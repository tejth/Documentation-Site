import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';

// Python pages
import PythonIntro from './pages/python/PythonIntro';
import PythonDataTypes from './pages/python/PythonDataTypes';
import PythonOperators from './pages/python/PythonOperators';
import PythonLoops from './pages/python/PythonLoops';
import PythonStrings from './pages/python/PythonStrings';
import PythonLists from './pages/python/PythonLists';
import PythonDicts from './pages/python/PythonDicts';
import PythonFunctions from './pages/python/PythonFunctions';
import PythonFileHandling from './pages/python/PythonFileHandling';
import PythonExceptions from './pages/python/PythonExceptions';
import PythonListComp from './pages/python/PythonListComp';
import PythonLambda from './pages/python/PythonLambda';
import PythonMapFilter from './pages/python/PythonMapFilter';
import PythonModulesPackages from './pages/python/PythonModulesPackages';
import PythonVirtualEnv from './pages/python/PythonVirtualEnv';
import PythonIterators from './pages/python/PythonIterators';
import PythonGenerators from './pages/python/PythonGenerators';
import PythonDecorators from './pages/python/PythonDecorators';
import PythonJsonFiles from './pages/python/PythonJsonFiles';
import PythonOopsBasic from './pages/python/PythonOopsBasic';
import PythonEncapsulation from './pages/python/PythonEncapsulation';
import PythonStaticVaribales from './pages/python/PythonStaticVaribales';
import PythonInheritance from './pages/python/PythonInheritance';
import PythonPolymorphism from './pages/python/PythonPolymorphism';
import PythonMultiThreading from './pages/python/PythonMultiThreading';
import PythonRegularExpression from './pages/python/PythonRegularExpression';


import './App.css';

function getPath() {
  return window.location.pathname;
}

function renderPage(path) {
  switch (path) {
    case '/': return <HomePage />;
    case '/python/intro': return <PythonIntro />;
    case '/python/data-types': return <PythonDataTypes />;
    case '/python/operators-conditionals': return <PythonOperators />;
    case '/python/loops': return <PythonLoops />;
    case '/python/strings': return <PythonStrings />;
    case '/python/lists': return <PythonLists />;
    case '/python/dictionaries-sets': return <PythonDicts />;
    case '/python/functions': return <PythonFunctions />;
    case '/python/file-handling': return <PythonFileHandling />;
    case '/python/exception-handling': return <PythonExceptions />;
    case '/python/list-comprehensions': return <PythonListComp />;
    case '/python/lambda-functions': return <PythonLambda />;
    case '/python/map-filter-reduce': return <PythonMapFilter />;
    case '/python/modules': return <PythonModulesPackages />;
    case '/python/virtual-environments': return <PythonVirtualEnv />;
    case '/python/iterators': return <PythonIterators />;
    case '/python/generators': return <PythonGenerators />;
    case '/python/decorators': return <PythonDecorators />;
    case '/python/json-files': return <PythonJsonFiles />;
    case '/python/oop': return <PythonOopsBasic />;
    case '/python/encapsulation': return <PythonEncapsulation />;
    case '/python/static-variables': return <PythonStaticVaribales />;
    case '/python/inheritance': return <PythonInheritance />;
    case '/python/polymorphism': return <PythonPolymorphism />;
    case '/python/multithreading': return <PythonMultiThreading />;
    case '/python/regular-expressions': return <PythonRegularExpression />;

  

    // Java coming soon
    case '/java/intro': return <ComingSoon title="Java Introduction" section="Java" />;
    case '/java/oop': return <ComingSoon title="OOP Concepts" section="Java" />;
    case '/java/collections': return <ComingSoon title="Collections" section="Java" />;
    case '/java/streams-lambdas': return <ComingSoon title="Streams & Lambdas" section="Java" />;
    case '/java/exception-handling': return <ComingSoon title="Exception Handling" section="Java" />;
    case '/java/multithreading': return <ComingSoon title="Multithreading" section="Java" />;

    // JS coming soon
    case '/javascript/intro': return <ComingSoon title="JavaScript Introduction" section="JavaScript" />;
    case '/javascript/es6-features': return <ComingSoon title="ES6+ Features" section="JavaScript" />;
    case '/javascript/async-await': return <ComingSoon title="Async / Await" section="JavaScript" />;
    case '/javascript/dom-manipulation': return <ComingSoon title="DOM Manipulation" section="JavaScript" />;
    case '/javascript/promises': return <ComingSoon title="Promises" section="JavaScript" />;
    case '/javascript/modules': return <ComingSoon title="Modules" section="JavaScript" />;

    // LangChain/LangGraph coming soon
    case '/langchain/intro': return <ComingSoon title="LangChain Introduction" section="LangChain" />;
    case '/langchain/agents-tools': return <ComingSoon title="Agents & Tools" section="LangChain" />;
    case '/langchain/rag-pipelines': return <ComingSoon title="RAG Pipelines" section="LangChain" />;
    case '/langgraph/intro': return <ComingSoon title="LangGraph Introduction" section="LangGraph" />;
    case '/langgraph/stategraph': return <ComingSoon title="StateGraph" section="LangGraph" />;
    case '/langgraph/ollama-integration': return <ComingSoon title="Ollama Integration" section="LangGraph" />;

    default: return <HomePage />;
  }
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getPath());
  const [theme, setTheme] = useState(() => localStorage.getItem('tejdocs-theme') || 'dark');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem('tejdocs-sidebar') === 'collapsed';
  });
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = window.innerWidth <= 900;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleThemeToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('tejdocs-theme', next);
  };

  const handleSidebarToggle = () => {
    if (isMobile) {
      setMobileSidebarOpen(p => !p);
    } else {
      const next = !sidebarCollapsed;
      setSidebarCollapsed(next);
      localStorage.setItem('tejdocs-sidebar', next ? 'collapsed' : 'open');
    }
  };

  const isDocPage = currentPath !== '/';
  const sidebarClass = [
    sidebarCollapsed ? 'collapsed' : '',
    mobileSidebarOpen ? 'open' : '',
  ].filter(Boolean).join(' ');

  return (
    <div data-theme={theme}>
      <Header
        onSidebarToggle={handleSidebarToggle}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <Sidebar
        collapsed={sidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        currentPath={currentPath}
        className={sidebarClass}
      />
      {isDocPage ? (
        <main
          className="main-content doc-main"
          id="mainContent"
          style={{ marginLeft: sidebarCollapsed ? 0 : 'var(--sidebar-w)' }}
        >
          {renderPage(currentPath)}
        </main>
      ) : (
        <div style={{ marginLeft: sidebarCollapsed ? 0 : 'var(--sidebar-w)', transition: 'margin-left 0.2s ease' }}>
          {renderPage(currentPath)}
        </div>
      )}
    </div>
  );
}
