import React from "react";
import CodeBlock from "../components/CodeBlock";

const ApiKeysContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Credentials
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        API Keys
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          API keys are special codes that your code uses to prove to CovoSign
          that it's allowed to make requests. It's like a username and password
          combined into one secret string. Never share your API key with anyone,
          just like you wouldn't share your bank password. There are sandbox
          keys for testing (like a playground) and production keys for real use.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-4">
        CovoSign uses API keys to authenticate requests. Keys are
        environment-specific (sandbox vs production) and can be personal or
        service keys for automation.
      </p>
      <p className="text-slate-600 mb-4">
        API keys serve as a form of authentication, which is the process of
        verifying the identity of a user or system. In RESTful APIs like
        CovoSign's, authentication ensures that only authorized clients can
        access protected resources. Environment-specific keys mean that keys are
        tied to either the sandbox (testing) or production (live) environment,
        preventing accidental mixing of test and real data. Personal keys are
        for individual developers, while service keys are for automated systems,
        allowing for better access control and auditing.
      </p>
      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-8">
        <li>Personal keys for individual developers</li>
        <li>Service account keys for automated systems</li>
        <li>
          Separate keys per environment to prevent test data from touching
          production
        </li>
        <li>Instant revocation and audit logging of usage</li>
        <li>Rotate keys regularly; store secrets in env vars or vaults</li>
      </ul>
    </div>
    <section className="mb-12">
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Key Type</th>
              <th className="px-6 py-4">Environment</th>
              <th className="px-6 py-4">Capability</th>
              <th className="px-6 py-4">Prefix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-slate-800">
                Sandbox
              </td>
              <td className="px-6 py-4 text-slate-600">Testing Only</td>
              <td className="px-6 py-4 text-slate-600">
                Can only create Sandbox keys
              </td>
              <td className="px-6 py-4 font-mono text-xs text-slate-500 bg-slate-50 rounded px-2 w-fit">
                csk_sandbox_
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-slate-800">
                Production
              </td>
              <td className="px-6 py-4 text-slate-600">Live Production</td>
              <td className="px-6 py-4 text-slate-600">
                Can create both Sandbox & Production keys
              </td>
              <td className="px-6 py-4 font-mono text-xs text-slate-500 bg-slate-50 rounded px-2 w-fit">
                csk_live_
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Production Key Access</div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2 font-semibold">Production keys are not created via the API.</p>
            <p className="mb-3">
              To obtain production credentials, please verify your <strong>Enterprise Plan</strong> status and contact support:
            </p>
            <a href="mailto:support@covosign.com" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
              support@covosign.com
            </a>
          </div>
        </div>
      </div>
    </section>
    <p className="text-slate-600 mb-6">
      The table above outlines the different types of API keys available in
      CovoSign. Sandbox keys are prefixed with 'csk_sandbox_' and are intended
      for development and testing purposes, allowing you to experiment without
      affecting live data. Production keys, prefixed with 'csk_live_', are for
      real-world use and require an enterprise subscription due to their higher
      privileges and rate limits. The capability column indicates what each key
      type can do, ensuring proper separation of concerns between testing and
      production environments.
    </p>
    <h2 className="text-xl font-bold text-slate-900 mb-6">Response Examples</h2>
    <p className="text-slate-600 mb-6">
      When you create an API key via the API, CovoSign returns a JSON response
      containing the key details. The 'code' field indicates the HTTP status
      code (201 for successful creation). The 'data' object includes the unique
      'id' of the key, the actual 'apiKey' string (which you must store
      securely), and metadata like the environment and name. Below are examples
      for both sandbox and production key creation responses.
    </p>
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span> Sandbox
          Key
        </h3>
        <div className="bg-[#1e2329] rounded-lg p-5 shadow-sm overflow-hidden text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "code": 201, 
  "statusText": "Created", 
  "message": "API key created successfully. Store it securely - it won't be shown again.", 
  "data": { 
    "id": "d6a776a3-f1d9-4a79-b1c6-be1e4bd8d78f", 
    "apiKey": "csk_sandbox_Mdi9ewW3Ch81P6abc123def456", 
    "keyPrefix": "csk_sandbox_Mdi9ewW3Ch81P6", 
    "name": "Testing Purposes Only", 
    "environment": "SANDBOX" 
  } 
}`}
          />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Production
          Key
        </h3>
        <div className="bg-[#1e2329] rounded-lg p-5 shadow-sm overflow-hidden text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "code": 201, 
  "statusText": "Created", 
  "message": "API key created successfully. Store it securely - it won't be shown again.", 
  "data": { 
    "id": "31b33a08-9ac8-4532-8342-e1111891d1cd", 
    "apiKey": "csk_live_dHQof7Yo89rwMlWRabc123def456", 
    "keyPrefix": "csk_live_dHQof7Yo89rwMlWR", 
    "name": "Live Production Key", 
    "environment": "PRODUCTION" 
  } 
}`}
          />
        </div>
      </div>
    </div>

    <section className="mt-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Creating API Keys</h2>
      <p className="text-slate-600 mb-6">
        You can programmatically create <strong>Sandbox</strong> API keys using the <code className="text-green-600 font-mono text-sm">/api/v1/api-keys</code> endpoint. This is useful for rotating keys or managing service accounts.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm font-mono text-slate-600 mb-6">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2">
          POST
        </span>{" "}
        /api/v1/api-keys
      </div>

      <div className="space-y-4 mb-8">
        <h3 className="font-semibold text-slate-800">Request Examples</h3>
        <div className="space-y-6">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Sandbox Key Request</div>
            <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
              <CodeBlock
                language="json"
                code={`{ 
  "name": "My Sandbox API Key", 
  "environment": "SANDBOX", 
  "allowedIps": ["192.168.1.1", "10.0.0.1"] 
}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-slate-800">Error Responses</h3>
        <div className="space-y-6">
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <div className="text-slate-400 mb-2">// 403 Forbidden (Enterprise Required)</div>
            <CodeBlock
              language="json"
              code={`{ "code": 403, "statusText": "Forbidden", "message": "Enterprise plan required for production API keys", "data": null }`}
            />
          </div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <div className="text-slate-400 mb-2">// 400 Bad Request (Validation)</div>
            <CodeBlock
              language="json"
              code={`{ "code": 400, "statusText": "Bad Request", "message": "Name must be between 1 and 200 characters", "data": null }`}
            />
          </div>
        </div>
      </div>
    </section>
  </article >
);

export default ApiKeysContent;
