import React from 'react';
import CodeBlock from '../components/CodeBlock';

const RequestResponseContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Request/Response Formats</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          When you talk to an API, you need to know how to send your messages (requests) and understand the replies (responses). CovoSign uses JSON format for data, like sending notes in a standard envelope. This makes it easy for your code to read and write the information without confusion.
        </p>
      </div>
    </div>

  <section id="req-format" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Standards</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-800 mb-3">Content Types</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="bg-slate-100 px-1 rounded">application/json</code> for bodies</li>
            <li><code className="bg-slate-100 px-1 rounded">multipart/form-data</code> for files</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-800 mb-3">Data Formats</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Dates:</strong> ISO 8601 (<code className="text-xs">2025-12-10T10:30:00Z</code>)</li>
            <li><strong>IDs:</strong> RFC 4122 UUID v4</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="req-wrapper" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Response Wrapper</h2>
      <p className="text-slate-600 mb-4">All API responses follow a consistent envelope format so you can handle success, errors, and metadata uniformly.</p>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="json"
          code={`{\n  \"success\": true,\n  \"data\": { ... },\n  \"error\": null,\n  \"meta\": {\n    \"requestId\": \"req_123...\",\n    \"correlationId\": \"req_123...\",\n    \"timestamp\": \"2025-12-10T10:30:45.123Z\"\n  }\n}`}
        />
      </div>
      <p className="text-sm text-slate-600 mt-4">The same pattern applies across endpoints, making it easier to parse results, surface errors, and trace requests.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Identifiers</h4>
          <p className="text-sm text-slate-600">IDs are UUID v4. Use them as opaque strings; avoid inferring meaning from prefixes.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Timestamps</h4>
          <p className="text-sm text-slate-600">All dates are ISO 8601 with timezone (Z). Store and compare as UTC; render in local time as needed.</p>
        </div>
      </div>
    </section>
  </article>
);

export default RequestResponseContent;
