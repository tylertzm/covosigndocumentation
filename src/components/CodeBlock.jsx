import React, { useMemo, useState } from 'react';

const CodeBlock = ({ code, language = "python" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const tokens = useMemo(() => {
    const highlightCode = (text) => {
      if (!text) return [];
      const patterns = [
        { type: 'comment', regex: /^(#.*|\/\/.*)/ },
        { type: 'comment_inline', regex: /(\s+#.*)/ },
        { type: 'string', regex: /(['"])(?:(?=(\\?))\2.)*?\1/ },
        { type: 'keyword', regex: /\b(def|class|return|import|from|if|else|elif|True|False|None|with|as|for|in|try|except|public|private|protected|void|static|new|async|await|const|let|var|function)\b/ },
        { type: 'builtin', regex: /\b(print|open|len|str|int|list|dict|set|bytes|hmac|hashlib|logging|console|Math|JSON|Promise)\b/ },
        { type: 'boolean', regex: /\b(true|false|True|False)\b/ },
        { type: 'constant', regex: /\b([A-Z_][A-Z0-9_]*)\b/ },
        { type: 'function', regex: /\b([a-z_][a-z0-9_]*)(?=\()/ },
      ];
      let tokens = [];
      let remaining = text;
      while (remaining.length > 0) {
        let match = null;
        let bestPattern = null;
        let minIndex = remaining.length;
        for (const pattern of patterns) {
          const m = remaining.match(pattern.regex);
          if (m && m.index < minIndex) {
            match = m;
            bestPattern = pattern;
            minIndex = m.index;
          }
        }
        if (match && minIndex === 0) {
          tokens.push({ type: bestPattern.type, content: match[0] });
          remaining = remaining.slice(match[0].length);
        } else if (match) {
          tokens.push({ type: 'text', content: remaining.slice(0, minIndex) });
          remaining = remaining.slice(minIndex);
        } else {
          tokens.push({ type: 'text', content: remaining });
          remaining = '';
        }
      }
      return tokens;
    };
    return highlightCode(code || '');
  }, [code]);

  const lines = useMemo(() => (code || '').split('\n'), [code]);

  const getColor = (type) => {
    switch (type) {
      case 'comment':
      case 'comment_inline': return 'text-slate-500 italic';
      case 'string': return 'text-amber-600';
      case 'keyword': return 'text-blue-700 font-semibold';
      case 'builtin': return 'text-indigo-600';
      case 'boolean': return 'text-rose-600';
      case 'constant': return 'text-teal-700';
      case 'function': return 'text-sky-700';
      default: return 'text-slate-800';
    }
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-blue-600 hover:text-blue-800"
          type="button"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="flex font-mono text-sm leading-6 text-slate-800">
        <div className="bg-slate-100 text-slate-400 px-3 py-3 text-right select-none">
          {lines.map((_, idx) => (
            <div key={idx} className="leading-6">{idx + 1}</div>
          ))}
        </div>
        <pre className="flex-1 whitespace-pre px-4 py-3 overflow-auto">
          {tokens.map((token, index) => (
            <span key={index} className={getColor(token.type)}>
              {token.content}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
