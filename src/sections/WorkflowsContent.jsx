import React from 'react';
import CodeBlock from '../components/CodeBlock';

const WorkflowsContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Signer Workflow Types</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Workflows are the steps people follow to sign a document. Some documents need one person to sign, others need multiple people in order or at the same time. CovoSign lets you set up these workflows so the signing happens in the right sequence, like a team approving a contract step by step.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">CovoSign supports flexible signer workflows, including single-signer, parallel multi-signer, and sequential approval chains.</p>
    </div>

    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Single Signer Workflow
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 mb-6">
        <div>
          <p className="text-slate-600 mb-4">The simplest workflow sending a document to one recipient for signature.</p>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3 text-sm">Process Flow</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
              <li>Document Upload</li>
              <li>Recipient Addition (Role: SIGNER)</li>
              <li>Field Placement</li>
              <li>Request Creation (DRAFT)</li>
              <li>Send Request</li>
              <li>Recipient Signs</li>
              <li>Completion</li>
            </ol>
          </div>
        </div>
        <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs overflow-auto h-full">
          <CodeBlock
            language="json"
            code={`{
  "title": "Simple Agreement",
  "recipients": [
    {
      "email": "signer@example.com",
      "name": "John Doe",
      "role": "SIGNER",
      "signingOrder": 1
    }
  ],
  "fields": [ ... ]
}`}
          />
        </div>
      </div>
    </section>

    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Multi-Signer Workflows</h2>
      <p className="text-slate-600">Handle multiple recipients either simultaneously (Parallel) or in a specific order (Sequential) with automatic notifications and deadlines.</p>
    </div>

    <section className="mb-16 border-l-2 border-slate-200 pl-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        Parallel (Broadcast)
      </h3>
      <p className="text-slate-600 mb-4 text-sm">All recipients are notified simultaneously and can sign in any order.</p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-green-50/50 rounded-lg p-5 border border-green-100">
          <h4 className="font-bold text-green-900 mb-2 text-sm">Configuration Key</h4>
          <p className="text-sm text-green-800 mb-4">Set the same <code>signingOrder</code> (e.g., 1) for all recipients.</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">Bulk notification sending</li>
            <li className="flex gap-2">Faster completion time</li>
          </ul>
        </div>
        <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
          <CodeBlock
            language="json"
            code={`"recipients": [
  { "email": "party1@example.com", "signingOrder": 1 },
  { "email": "party2@example.com", "signingOrder": 1 },
  { "email": "party3@example.com", "signingOrder": 1 }
]`}
          />
        </div>
      </div>
    </section>

    <section className="mb-16 border-l-2 border-slate-200 pl-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        Sequential (Ordered)
      </h3>
      <p className="text-slate-600 mb-4 text-sm">Recipients are notified and must sign in a strict specific order (e.g., Employee &rarr; Manager &rarr; HR).</p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-green-50/50 rounded-lg p-5 border border-green-100">
          <h4 className="font-bold text-green-900 mb-2 text-sm">Configuration Key</h4>
          <p className="text-sm text-green-800 mb-4">Increment <code>signingOrder</code> (1, 2, 3...) for each step.</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">Controlled approval chain</li>
            <li className="flex gap-2">Later signers see previous signatures</li>
          </ul>
        </div>
        <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
          <CodeBlock
            language="json"
            code={`"recipients": [
  { "email": "manager@example.com", "signingOrder": 1 },
  { "email": "director@example.com", "signingOrder": 2 },
  { "email": "ceo@example.com", "signingOrder": 3 }
]`}
          />
        </div>
      </div>
    </section>

    <section className="mb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Workflow Comparison</h2>
        <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Feature</th>
              <th className="px-6 py-4">Parallel</th>
              <th className="px-6 py-4">Sequential</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-6 py-4 font-semibold text-slate-800">Signing Order</td>
              <td className="px-6 py-4 text-slate-600">Same (e.g., all 1)</td>
              <td className="px-6 py-4 text-slate-600">Incremental (1, 2, 3...)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-slate-800">Notification</td>
              <td className="px-6 py-4 text-slate-600">Immediate for all</td>
              <td className="px-6 py-4 text-slate-600">Only when previous step complete</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-slate-800">Completion</td>
              <td className="px-6 py-4 text-slate-600">When all sign</td>
              <td className="px-6 py-4 text-slate-600">When final signer signs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
);

export default WorkflowsContent;
