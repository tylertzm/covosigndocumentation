import React from 'react';
import CodeBlock from '../components/CodeBlock';

const ErrorsContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Error Handling</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Errors happen when something goes wrong in your code or with the API. It's like when you try to open a door but it's locked. CovoSign sends back error messages to tell you what went wrong, so you can fix it. Learning to handle errors makes your app more robust and prevents crashes.
        </p>
      </div>
      <p className="text-slate-600 mb-8">
        Error handling is a critical aspect of API integration, ensuring your application can gracefully respond to unexpected situations. HTTP status codes provide standardized ways to communicate error types, while structured error responses give detailed information about what went wrong. Proper error handling prevents application crashes and provides better user experiences.
      </p>
    </div>

    <section id="err-format" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Error Structure</h2>
      <p className="text-slate-600 mb-4">
        CovoSign returns errors in a consistent JSON format that includes a success flag, error details, and optional additional information. The 'error' object contains a machine-readable code, a human-readable message, and sometimes field-specific details. HTTP status codes follow REST conventions: 4xx for client errors (your fault) and 5xx for server errors (our fault).
      </p>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="json"
          code={`{\n  \"success\": false,\n  \"data\": null,\n  \"error\": {\n    \"code\": \"VALIDATION_ERROR\",\n    \"message\": \"Invalid email format\",\n    \"details\": { \"field\": \"email\" }\n  }\n}`}
        />
      </div>
      <p className="text-sm text-slate-600 mt-3">Client errors (4xx) cover validation, auth, and conflicts; server errors (5xx) are transient and should be retried with backoff.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Handle client errors</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>Validate payloads before sending</li>
            <li>Check auth headers and scopes</li>
            <li>Resolve conflicts (409) before retrying</li>
          </ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Handle server errors</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>Retry with exponential backoff</li>
            <li>Use idempotency keys to avoid duplicates</li>
            <li>Log correlation IDs for support</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="err-codes" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Common Codes</h2>
      <p className="text-slate-600 mb-4">
        The table below lists frequently encountered HTTP status codes and their corresponding error codes in CovoSign. Status codes in the 400s indicate client-side issues that you can fix, while 500s indicate server problems. Each error code provides specific information about the type of problem encountered, helping you diagnose and resolve issues quickly.
      </p>
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr><th className="px-6 py-4">Status</th><th className="px-6 py-4">Code</th><th className="px-6 py-4">Meaning</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr><td className="px-6 py-4 font-mono text-green-600">400</td><td className="px-6 py-4 font-bold">VALIDATION_ERROR</td><td className="px-6 py-4">Invalid request parameters</td></tr>
            <tr><td className="px-6 py-4 font-mono text-green-600">401</td><td className="px-6 py-4 font-bold">INVALID_API_KEY</td><td className="px-6 py-4">Auth failed</td></tr>
            <tr><td className="px-6 py-4 font-mono text-green-600">429</td><td className="px-6 py-4 font-bold">RATE_LIMIT_EXCEEDED</td><td className="px-6 py-4">Too many requests</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="err-retry" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Retry Strategy</h2>
      <p className="text-slate-600 mb-4">
        When API calls fail due to transient issues (like network problems or temporary server overload), implementing a retry strategy can improve reliability. Exponential backoff increases the wait time between retries to avoid overwhelming the server. The example shows a JavaScript implementation that retries up to 3 times with increasing delays, but only for server errors (5xx status codes).
      </p>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="javascript"
          code={`// Exponential Backoff Example
async requestWithRetry(method, path, data, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await this.request(method, path, data);
    } catch (error) {
      if (error.status < 500) throw error; // Don't retry client errors
      attempt++;
      await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
    }
  }
}`}
        />
      </div>
    </section>
  </article>
);

export default ErrorsContent;
