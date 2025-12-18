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
          <span className="text-slate-400">// Request Header (from you)</span><br />
          X-Correlation-ID: 7b3h98...
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          The <code className="font-mono text-xs">X-Correlation-ID</code> is primarily used for logging, debugging, and tracing requests across services.
        </p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 mt-2">
          <li>
            <strong>Client-Generated:</strong> You can generate a unique ID (e.g. UUID) and send it in the <code className="font-mono text-xs">X-Correlation-ID</code> header.
          </li>
          <li>
            <strong>Auto-Generated:</strong> If you don't provide one, CovoSign automatically generates a unique ID for the request.
          </li>
          <li>
            <strong>Response:</strong> The final ID (yours or ours) is always returned in the response headers.
          </li>
          <li>
            <strong>Tracing:</strong> This ID is attached to all internal logs and traces, allowing us to debug issues end-to-end. If you report an issue, providing this ID helps support find the exact logs.
          </li>
        </ul>
      </div>
    </section>
  </article>
);

export default CorrelationIdsContent;
