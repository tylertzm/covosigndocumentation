import React from "react";

const CorrelationIdsContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Correlation IDs
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Correlation IDs are like tracking numbers for your requests. They help
          you follow a single request through all the steps in the system, from
          your app to the API to webhooks. It's useful for debugging, like
          knowing which log messages belong to the same user action, making it
          easier to troubleshoot issues.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        Use correlation IDs as breadcrumbs to trace a request across API calls,
        webhooks, logs, and audit trails.
      </p>
    </div>

    <section id="corr-flow" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Request Flow</h2>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center text-sm font-mono text-slate-600">
        Client &rarr; API Gateway &rarr; Service &rarr; Database &rarr; Webhooks
        <br />
        <span className="text-blue-600 font-bold mt-2 block">
          req_123... (Persists)
        </span>
      </div>
    </section>

    <section id="corr-header" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Usage</h2>
      <div className="space-y-4">
        <div className="bg-slate-100 rounded p-4 font-mono text-sm text-slate-700">
          X-Correlation-ID: req_custom_123
        </div>
        <p className="text-slate-600 text-sm">
          Pass this header to trace your own IDs. If omitted, CovoSign generates
          one and echoes it back in responses and webhooks.
        </p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Include the ID in logs for faster support.</li>
          <li>Use it to connect API calls, webhooks, and audit entries.</li>
          <li>Propagate the same ID across downstream services.</li>
        </ul>
      </div>
    </section>
  </article>
);

export default CorrelationIdsContent;
