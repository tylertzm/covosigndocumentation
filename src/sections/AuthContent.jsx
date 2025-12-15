import React from 'react';
import CodeBlock from '../components/CodeBlock';

const AuthContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Enterprise API
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Authentication</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Authentication is like checking ID before entering a club. For CovoSign's API, you need to prove who you are by including your API key in the request headers. Headers are like notes attached to your message telling the server 'Hey, I'm allowed to ask this'. We'll show you how to add it in different programming languages.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">All Enterprise API endpoints require secure authentication. Use API keys for programmatic access; multi-factor sign-in is recommended for console access.</p>
      <p className="text-slate-600 mb-8">
        Authentication in APIs is crucial for security, ensuring that only authorized users or systems can access sensitive operations. CovoSign's Enterprise API uses API keys as the primary authentication method for programmatic access, which is simpler than OAuth for server-to-server communications. For the web console, multi-factor authentication (MFA) adds an extra layer of security by requiring a second form of verification beyond just a password.
      </p>
    </div>

    <section id="auth-headers" className="mb-16 scroll-mt-32">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Headers</h2>
        <p className="text-slate-600 mb-6">
          HTTP headers are key-value pairs sent with API requests that provide metadata about the request. In authentication, headers carry credentials like API keys. CovoSign supports two header formats: a custom 'X-API-Key' header for direct key inclusion, and the standard 'Authorization: Bearer' header commonly used in REST APIs. The custom header is recommended for its clarity and security in server-side applications.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">RECOMMENDED</span>
                    <h4 className="font-bold text-slate-800">Custom Header</h4>
                </div>
                <div className="bg-slate-100 rounded p-3 font-mono text-xs text-slate-700">X-API-Key: csk_live_...</div>
                <p className="text-xs text-slate-600 mt-2">Use for server-to-server calls. Keep keys secret and scoped.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-3">Standard Header</h4>
                <div className="bg-slate-100 rounded p-3 font-mono text-xs text-slate-700">Authorization: Bearer csk_live_...</div>
                <p className="text-xs text-slate-600 mt-2">Bearer tokens are supported for clients that prefer standard auth headers.</p>
            </div>
        </div>
    </section>

    <section id="auth-clients" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Client Implementation</h2>
      <p className="text-slate-600 mb-6">
        Implementing authentication in your client code involves setting the appropriate headers in HTTP requests. The examples below show how to construct headers in popular programming languages. Note that the API key should be stored securely (e.g., in environment variables) and never hardcoded or exposed in client-side code. The 'Content-Type' header specifies the format of the request body, typically JSON for API calls.
      </p>
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-slate-700 mb-2">JavaScript</h4>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <CodeBlock language="javascript" code={`const headers = {\n  'Authorization': \`Bearer \${apiKey}\`,\n  'Content-Type': 'application/json'\n};`} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-700 mb-2">Python</h4>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <CodeBlock language="python" code={`headers = {\n    "Authorization": f"Bearer {self.api_key}",\n    "Content-Type": "application/json"\n}`} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-700 mb-2">Java</h4>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <CodeBlock language="java" code={`HttpHeaders headers = new HttpHeaders();\nheaders.set("Authorization", "Bearer " + apiKey);\nheaders.set("Content-Type", "application/json");`} />
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default AuthContent;
