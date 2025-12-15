import React from 'react';
import CodeBlock from '../components/CodeBlock';

const PaginationFiltersContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Pagination & Filters</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          When you have a lot of data, like a list of signature requests, you can't load everything at once. Pagination breaks it into pages, like chapters in a book. Filters let you find specific items, like searching for requests from a certain date or status. It's like using search and page numbers on a website to find what you need quickly.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">Retrieve large datasets efficiently with pagination and targeted filters (status, date ranges, recipient email, and more).</p>
    </div>
    <section id="page-cursor" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Cursor Pagination
      </h2>
      <p className="text-slate-600 mb-6">Instead of page numbers, we use opaque tokens (`cursor`) to navigate result sets. This ensures performance and consistency.</p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
        <h4 className="font-bold text-slate-700 mb-3 text-sm">Common Parameters</h4>
        <div className="space-y-3">
          <div className="flex gap-4 text-sm"><code className="text-green-600 font-mono w-24">limit</code><span className="text-slate-600">Items per page (default: 20, max: 100)</span></div>
          <div className="flex gap-4 text-sm"><code className="text-green-600 font-mono w-24">cursor</code><span className="text-slate-600">Token for the next/previous page</span></div>
          <div className="flex gap-4 text-sm"><code className="text-green-600 font-mono w-24">direction</code><span className="text-slate-600">`forward` (default) or `backward`</span></div>
        </div>
      </div>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock language="json" code={`{ \"data\": [...], \"pagination\": { \"hasNext\": true, \"hasPrevious\": false, \"nextCursor\": \"eyJwYWdlIjoyLCJsaW1pdCI6MjB9\", \"previousCursor\": null, \"totalCount\": 150 } }`} />
      </div>
    </section>
    <section id="page-filters" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Filtering
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">Request Filters</h4>
          <ul className="space-y-2 text-sm text-slate-600 font-mono"><li>status</li><li>createdAfter</li><li>recipientEmail</li><li>search</li></ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">Recipient Filters</h4>
          <ul className="space-y-2 text-sm text-slate-600 font-mono"><li>status</li><li>email</li><li>role</li></ul>
        </div>
      </div>
      <h4 className="text-sm font-bold text-slate-700 mb-3">Example Usage</h4>
      <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700 break-all border border-slate-200">GET /api/v1/signature-requests?status=COMPLETED&createdAfter=2024-01-01T00:00:00Z&limit=50</div>
      <p className="text-sm text-slate-600 mt-4">Use filters to narrow by status, email, title, and date ranges. Keep <code className="font-mono text-xs">limit</code> between 20-100 for best performance.</p>
    </section>
  </article>
);

export default PaginationFiltersContent;
