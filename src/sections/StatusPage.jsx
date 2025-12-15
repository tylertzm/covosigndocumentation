import React from 'react';

const StatusPage = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">Core Concepts</div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Signature Statuses</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          When you send a document for signing, it goes through different stages, like 'draft', 'in progress', 'completed'. Each person signing also has their own status. Knowing these statuses helps you track where things are in the process, like checking if someone has signed yet or if it's done.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">The signature request lifecycle involves two parallel state machines: one for the <strong>Request</strong> itself, and one for each individual <strong>Recipient</strong>.</p>
    </div>

    <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">Standard Lifecycle</h2>
    <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pb-12">
      {[{ phase: "Creation", action: "User creates request", endpoint: "POST /signature-requests", statusChange: [{ label: "Request Status", from: null, to: "DRAFT", color: "slate" }, { label: "Recipient Status", from: null, to: "PENDING", color: "slate" }], description: "The request is initialized. Documents are uploaded. Recipients are created but not yet notified." }, { phase: "Processing", action: "User sends request", endpoint: "POST /send", statusChange: [{ label: "Request Status", from: "DRAFT", to: "IN_PROGRESS", color: "blue" }], description: "Emails sent. Status changes from Draft to In Progress." }, { phase: "Completion", action: "All recipients signed", endpoint: "System Event", statusChange: [{ label: "Request Status", from: "IN_PROGRESS", to: "COMPLETED", color: "emerald" }], description: "All parties have signed. Audit trail finalized." }]
        .map((step, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300"></div>
            <div className="flex flex-col gap-4">
              <div><span className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1 block">{step.phase} Phase</span><h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">{step.action}</h3><code className="text-xs font-mono text-green-600 mt-1 block bg-blue-50 w-fit px-2 py-0.5 rounded">{step.endpoint}</code></div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5"><div className="space-y-3">{step.statusChange.map((change, cIdx) => (<div key={cIdx} className="flex items-center gap-3 text-sm"><span className="font-semibold text-slate-700 w-32 shrink-0">{change.label}</span><div className="flex items-center gap-2">{change.from && (<><span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-200 text-slate-600">{change.from}</span></>)}<span className={`px-2 py-0.5 rounded text-xs font-bold ${change.color === 'slate' ? 'bg-slate-200 text-slate-700' : ''} ${change.color === 'blue' ? 'bg-green-100 text-green-700' : ''} ${change.color === 'emerald' ? 'bg-green-100 text-green-700' : ''}`}>{change.to}</span></div></div>))}</div></div>
              <p className="text-slate-600 leading-6 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
    </div>

    <hr className="my-12 border-slate-100" />

    <section id="req-management">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Request Management Rules</h2>
      <p className="text-slate-600 mb-8">Allowed actions based on the current status of the request.</p>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">Sender Actions (Out-Box)</h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr><th className="px-4 py-3">Status</th><th className="px-4 py-3">Allowed Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-semibold">Draft</td><td className="px-4 py-3 text-slate-600">Edit, Duplicate, Delete</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">In Progress</td><td className="px-4 py-3 text-slate-600">View, Cancel, Duplicate</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Done</td><td className="px-4 py-3 text-slate-600">View, Duplicate, Download, Audit Trail</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Canceled</td><td className="px-4 py-3 text-slate-600">View, Duplicate</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Expired</td><td className="px-4 py-3 text-slate-600">View, Duplicate</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">Recipient Actions (In-Box)</h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr><th className="px-4 py-3">Status</th><th className="px-4 py-3">Allowed Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-semibold text-green-600">In Progress</td><td className="px-4 py-3 text-slate-600">View & Sign (Active), View (Others)</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Done</td><td className="px-4 py-3 text-slate-600">View, Download, Audit Trail</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Canceled</td><td className="px-4 py-3 text-slate-600">View Only</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-green-600">Expired</td><td className="px-4 py-3 text-slate-600">View Only</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-slate-900 mb-4">Action Details</h3>
      <div className="space-y-4">
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">Duplicate Request</h4>
          <p className="text-sm text-slate-600">Generates a copy of the document with the same recipients and pre-defined fields. Renames to "Duplicate of [Title]" and redirects to Draft status. Completed fields are NOT copied.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">Send Reminder</h4>
          <p className="text-sm text-slate-600">Manually triggers a reminder email. If a signing order exists, only the <strong>Current Active Signer</strong> receives it. Otherwise, all unsigned recipients receive it.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">Audit Trail</h4>
          <p className="text-sm text-slate-600">Only available for "Done" documents. Generates a PDF containing request details and a chronological history of all actions (viewed, signed, etc.) by every party.</p>
        </div>
      </div>
    </section>
  </article>
);

export default StatusPage;
