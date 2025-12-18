import React from "react";
import CodeBlock from "../components/CodeBlock";
import MermaidDiagram from "../components/MermaidDiagram";

const WebhooksContent = ({ onLaunchGuide }) => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Integration
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Webhooks
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Webhooks are like notifications your app gets when something happens,
          instead of constantly checking. When a document is signed, CovoSign
          sends a message to your server saying 'Hey, this happened'. It's great
          for keeping your app updated without wasting time or resources polling
          the API.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        Real-time notifications for signature events so you can update internal
        systems without polling.
      </p>
      <p className="text-slate-600 mb-4">
        Webhooks are HTTP callbacks that notify your application when specific
        events occur in CovoSign. Instead of repeatedly checking the API for
        status updates (polling), your server receives instant notifications,
        enabling real-time integrations and automated workflows. This push-based
        approach is more efficient and responsive than pull-based polling.
      </p>
      <button
        onClick={onLaunchGuide}
        className="mt-4 text-blue-600 font-semibold hover:underline flex items-center gap-1"
      >
        Launch Interactive Guide
      </button>
    </div>

    <section id="hooks-events" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Event Types</h2>
      <p className="text-slate-600 mb-4">
        CovoSign sends different types of webhook events to keep you informed
        about the signing process. Each event type corresponds to a specific
        action or state change in the signature workflow. By listening to these
        events, you can trigger appropriate actions in your application, such as
        updating databases, sending notifications, or initiating downstream
        processes.
      </p>
      <div className="grid gap-4 grid-cols-1">
        {[
          {
            name: "SIGNATURE_REQUEST_COMPLETED",
            desc: "All parties have signed the document.",
          },
          {
            name: "SIGNATURE_REQUEST_DECLINED",
            desc: "A recipient refused to sign.",
          },
          {
            name: "RECIPIENT_SIGNED",
            desc: "One specific recipient completed their part.",
          },
          {
            name: "RECIPIENT_ADDED",
            desc: "A new signer was added to the request.",
          },
        ].map((evt, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-lg p-4 bg-slate-50"
          >
            <code className="text-xs font-bold text-purple-700 block mb-1">
              {evt.name}
            </code>
            <span className="text-sm text-slate-600">{evt.desc}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-600 mt-4">
        Use webhooks to update internal systems, trigger automations, or notify
        users without polling the API.
      </p>
    </section>

    <section id="hooks-flow" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Webhook Flow</h2>
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">

        <MermaidDiagram
          chart={`flowchart TD
    A[Event Occurs<br/>SIGNATURE_REQUEST_*] --> B[Generate Payload<br/>& HMAC Signature]
    B --> C[POST to Webhook URL<br/>with JSON body]
    C --> D{Validate Signature<br/>HMAC SHA256}
    D -->|Valid| E[Process Event<br/>Return 200 OK]
    D -->|Invalid| F[Reject Webhook<br/>Return 401]
    C --> G[Retry on<br/>Non-200 Response]
    style A fill:#fef3c7,stroke:#f59e0b
    style E fill:#dcfce7,stroke:#22c55e
    style F fill:#fee2e2,stroke:#ef4444
    style G fill:#fed7aa,stroke:#ea580c`}
          className="mb-4"
        />
      </div>
      <div className="grid gap-4 grid-cols-1">
        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2">✓ Valid Webhook</h4>
          <p className="text-xs text-green-700">
            Signature verified. Process event and return 200 OK.
          </p>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <h4 className="font-bold text-red-800 mb-2">✗ Invalid Signature</h4>
          <p className="text-xs text-red-700">
            Signature mismatch. Reject webhook and return 401.
          </p>
        </div>
        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
          <h4 className="font-bold text-orange-800 mb-2">⏳ Retry Logic</h4>
          <p className="text-xs text-orange-700">
            Non-200 responses trigger exponential backoff retries.
          </p>
        </div>
      </div>
    </section>

    <section id="hooks-security" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Security (HMAC)</h2>
      <p className="text-slate-600 mb-4">
        Webhook security is crucial to prevent malicious actors from sending
        fake notifications to your endpoints. CovoSign uses HMAC (Hash-based
        Message Authentication Code) signatures to verify that webhook payloads
        are authentic and haven't been tampered with. You should always validate
        the signature on your server before processing the webhook data.
      </p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3 text-sm text-green-900 mb-6">
        <p>
          Never expose your Webhook Secret in client-side code. Verification
          must happen on your secure backend server.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-slate-700 mb-2">Node.js</h4>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <CodeBlock
              language="javascript"
              code={`const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');`}
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-700 mb-2">Python</h4>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <CodeBlock
              language="python"
              code={`expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()`}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <h4 className="font-semibold text-slate-800 mb-2 text-sm">
          Delivery & retries
        </h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Expect exponential backoff retries on non-200 responses.</li>
          <li>
            Log and validate{" "}
            <code className="font-mono text-xs">X-CovoSign-Signature</code>{" "}
            headers.
          </li>
          <li>Respond quickly (under a few seconds) to avoid timeouts.</li>
        </ul>
      </div>
    </section>
  </article>
);

export default WebhooksContent;
