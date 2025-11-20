import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const codeRef = useRef();

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
