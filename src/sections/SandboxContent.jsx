import React from "react";
import CodeBlock from "../components/CodeBlock";

const SandboxContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Environments
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Sandbox Environment
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          The sandbox is like a practice playground for your code. You can test
          your app with CovoSign without affecting real documents or people.
          It's safe to make mistakes here, and data gets cleaned up after 30
          days. Use it to learn and debug before going live with real
          signatures.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        Isolated testing environment mirroring production functionality using
        mock data. Designed for development and integration testing.
      </p>
    </div>

    <section id="sandbox-urls" className="mb-12 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Environment URLs
      </h2>
      <div className="overflow-hidden rounded-lg border border-slate-200 mb-8">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Environment</th>
              <th className="px-6 py-4">Base URL</th>
              <th className="px-6 py-4">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-6 py-4 font-semibold text-green-700">
                Production
              </td>
              <td className="px-6 py-4 font-mono text-xs">
                https://api.covosign.com
              </td>
              <td className="px-6 py-4">Live signatures</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-green-700">
                Sandbox
              </td>
              <td className="px-6 py-4 font-mono text-xs">
                https://api-sandbox.covosign.com
              </td>
              <td className="px-6 py-4">Testing & Dev</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="sandbox-diff" className="mb-12 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Usage Limits & Retention
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-green-50/50">
          <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
            Sandbox Constraints
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex gap-2">
              <span className="font-bold">•</span> 30-day Data Retention
              (auto-cleanup)
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> 500 lifetime signature
              request sends per user (sandbox)
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> 5MB File Size Limit
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Rate Limit: 1,000 req/min
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Emails are delivered (good
              for test addresses)
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Exact feature parity with
              production
            </li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-green-50/50">
          <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
            Production Specs
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex gap-2">
              <span className="font-bold">•</span> Permanent Retention
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Unlimited requests (plan
              based)
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Rate Limit: 100 req/min
              (Standard)
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span> Real Email Delivery
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="sandbox-test" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Testing Strategy
      </h2>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="javascript"
          code={`// Initialize Sandbox Client
const sandboxClient = new CovoSignClient({
  baseUrl: 'https://api-sandbox.covosign.com',
  apiKey: 'csk_sandbox_...'
});

// Create Test Request
const result = await sandboxClient.createSignatureRequest({
  title: 'Test Agreement',
  recipients: [{ email: 'test@example.com', name: 'Test User' }],
  documents: [{ name: 'test.pdf', content: base64Content }]
});`}
        />
      </div>
      <div className="mt-4 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h4 className="font-semibold text-slate-800 mb-1">
          Migrating to production
        </h4>
        <p>
          Swap the base URL to{" "}
          <code className="font-mono text-xs text-green-600">
            https://api.covosign.com
          </code>{" "}
          and use production API keys. Keep the same payloads and workflows.
        </p>
      </div>
    </section>
  </article>
);

export default SandboxContent;
