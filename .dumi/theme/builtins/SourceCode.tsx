import React, { useRef, useEffect } from 'react';
import { useCopy } from 'dumi/theme';
import './SourceCode.less';
export default ({ code, lang, showCopy = true }) => {
  let preElement = useRef();
  let CodeElement = useRef();

  const [copyCode, copyStatus] = useCopy();

  useEffect(() => {
    try {
      // @ts-ignore
      hljs.highlightBlock(preElement.current);
      // @ts-ignore
      hljs.highlightBlock(CodeElement.current);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="liuqh_code_block">
      <button
        className="code-block-copy-btn"
        data-status={copyStatus}
        onClick={() => copyCode(code)}
      >
        {copyStatus !== 'copied' ? (
          'Copy'
        ) : (
          <span style={{ color: 'green' }}>Success</span>
        )}
      </button>
      <pre className={`language-${lang}`} ref={preElement}>
        <code ref={CodeElement}>{code}</code>
      </pre>
    </div>
  );
};
