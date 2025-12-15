import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { creationSteps } from '../data/guideSteps.jsx';

const GuidesContent = ({ onLaunchGuide, onViewStatuses, onViewApiKeys }) => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-8 flex items-center gap-3 text-sm">
      <div className="bg-white p-1.5 rounded-md border border-slate-200 shadow-sm text-slate-500">
      </div>
      <span className="text-slate-600">
        Don't have credentials?{' '}
        <button onClick={onViewApiKeys} className="text-green-600 font-semibold hover:underline">
          Learn about our API Keys
        </button>{' '}
        to get started.
      </span>
    </div>

    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Guides
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Create your first Signature Request</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          This section has step-by-step guides to help you create your first signature request using CovoSign. It's like a tutorial that walks you through the process, from setting up your environment to sending the document for signing. Even if you're new to coding, you can follow along and see how it works in a safe sandbox environment first.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">Step-by-step guide to configure your environment, create, and activate your request, mirroring the production flow.</p>

      <div onClick={onLaunchGuide} className="rounded-xl p-8 border border-slate-200 bg-white cursor-pointer transition-colors hover:border-slate-300">
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-slate-200 text-slate-600 bg-slate-50">
          Interactive guide
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900">Try the interactive guide</h3>
        <p className="text-slate-600 mb-6 max-w-md">Launch the walkthrough to see the Python implementation end-to-end.</p>
        <button className="border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
          Launch Guide
        </button>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Playground (Sandbox)</h4>
          <p className="text-sm text-slate-600">Use your sandbox API key and <code className="font-mono text-xs text-green-600">https://api-sandbox.covosign.com</code> to try requests safely.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Move to production</h4>
          <p className="text-sm text-slate-600">Swap to <code className="font-mono text-xs text-green-600">https://api.covosign.com</code> and production keys when ready. Workflows stay the same.</p>
        </div>
      </div>
    </div>

    <section id="step-config" className="space-y-6 mb-16 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900">Step 0: Configure Environment</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600">
        <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs font-bold mr-2">FILE</span> .env
      </div>
      <div className="bg-[#1e2329] rounded-lg p-6 shadow-sm overflow-hidden text-white">
        <CodeBlock code={creationSteps[0].code} language=".env" />
      </div>
    </section>

    <section id="step-create" className="space-y-6 mb-16 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900">Step 1: Create Request</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">POST</span> /signature_requests
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "title": "NDA Agreement", "delivery_mode": "email" }`} />
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Response</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "data": { "id": "req_123456", "status": "DRAFT", "title": "NDA" } }`} />
          </div>
        </div>
      </div>
    </section>

    <section id="step-signer" className="space-y-6 mb-16 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900">Step 2: Add a Signer</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">POST</span> /signature_requests/{`{id}`}/recipients
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "email": "alice@example.com", "name": "Alice", "role": "SIGNER", "signingOrder": 1 }`} />
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Response</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "data": { "id": "rcp_987", "status": "PENDING" } }`} />
          </div>
        </div>
      </div>
    </section>

    <section id="step-fields" className="space-y-6 mb-16 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900">Step 3: Add Fields</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">POST</span> /signature_requests/{`{id}`}/fields
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "recipientId": "rcp_987", "type": "SIGNATURE", "page": 1, "x": 100, "y": 200 }`} />
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Response</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "data": { "id": "fld_456", "type": "SIGNATURE" } }`} />
          </div>
        </div>
      </div>
    </section>

    <section id="step-activate" className="space-y-6 pb-20 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900">Step 4: Activate Request</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">POST</span> /signature_requests/{`{id}`}/send
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full flex items-center justify-center text-slate-500 italic">(No Request Body)</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Response</div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "data": { "id": "req_123456", "status": "ONGOING" } }`} />
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default GuidesContent;
