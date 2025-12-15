import React from 'react';

const OverviewContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Introduction
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">What is CovoSign?</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Imagine you have a paper document that needs signatures from multiple people. Instead of printing, mailing, and waiting weeks, CovoSign lets you do it all online. You upload the document, add signature boxes, invite people via email, and they sign from their phone or computer. It's like digital paperwork that saves time and trees!
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        CovoSign is a digital signature platform to create, send, and manage end-to-end signing workflows. Upload documents,
        place fields, invite recipients by email, and track completion with built-in audit trails.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Why it matters</h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Speed: signatures in minutes, not weeks</li>
            <li>Security: cryptographic protection and audit trails</li>
            <li>Tracking: see when and where documents were signed</li>
            <li>Accessibility: sign anywhere, any device</li>
            <li>Compliance: legally binding in most regions</li>
          </ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Where it fits</h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Customer and vendor agreements</li>
            <li>Employee onboarding and HR forms</li>
            <li>Approvals that need sequencing or parallel signing</li>
            <li>Consent collection and internal approvals</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-slate-900 mb-2">Core flow</h3>
        <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1">
          <li>Upload a PDF or DOCX.</li>
          <li>Place signature, text, date, and initial fields.</li>
          <li>Add recipients and define order (sequential or parallel).</li>
          <li>Send via email; recipients sign from any device.</li>
          <li>Track status, download the signed file, and access the audit trail.</li>
        </ol>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          RESTful Architecture
        </h3>
        <p className="text-slate-600 text-sm">Predictable resource-oriented URLs, standard HTTP response codes, and JSON-encoded request/response bodies.</p>
      </div>
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          Enterprise Security
        </h3>
        <p className="text-slate-600 text-sm">Bank-grade security with API Key authentication, HMAC webhook verification, and full audit trails.</p>
      </div>
    </div>
  </article>
);

export default OverviewContent;
