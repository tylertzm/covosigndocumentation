import React from "react";
import CodeBlock from "../components/CodeBlock";

const IdempotencyContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Idempotency
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Idempotency is a fancy word that means 'doing something once, even if
          you try multiple times'. It's like pressing a button that only works
          once. In APIs, it prevents creating the same thing twice if your
          request gets sent multiple times due to network issues. You use a
          special key to identify your request uniquely.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        Prevent duplicate actions by attaching idempotency keys. Retries return
        the original result instead of creating new requests.
      </p>
    </div>

    <section id="idemp-header" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Implementation</h2>
      <p className="text-slate-600 mb-4">
        Provide a unique key in the header. Keys expire after 24 hours.
      </p>
      <div className="bg-slate-100 rounded p-4 font-mono text-sm text-slate-700 mb-6">
        Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000
      </div>

      <h3 className="font-bold text-slate-800 mb-3">Conflict Response (409)</h3>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="json"
          code={`{ "code": 409, "statusText": "Conflict", "message": "Request already processed with this idempotency key" }`}
        />
      </div>
    </section>

    <section id="idemp-client" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Client Example</h2>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="javascript"
          code={`generateIdempotencyKey(data) {
  const hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
  return \`req_\${hash}\`;
}`}
        />
      </div>
      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <h4 className="font-semibold text-slate-800 mb-2 text-sm">
          Best practices
        </h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Generate the key from stable inputs (operation + payload hash).
          </li>
          <li>Reuse the same key when retrying a request.</li>
          <li>
            Expect a 409 conflict if the exact request was already processed.
          </li>
        </ul>
      </div>
    </section>
  </article>
);

export default IdempotencyContent;
