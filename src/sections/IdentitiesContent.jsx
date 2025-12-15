import React from 'react';
import CodeBlock from '../components/CodeBlock';

const IdentitiesContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4"> Enterprise Identities</div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">CovoSign Enterprise Identity System</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Identities in CovoSign are like special accounts for machines or automated systems, not people. They use API keys to access the service without needing a username and password. This is useful for apps that need to sign documents automatically, like in a workflow system, keeping things secure and trackable.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">Enterprise Identities allow organizations to create and manage programmatic identities used for automated workflows, integrations, and API-first applications.</p>
    </div>
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">What Is an Identity?</h2>
      <p className="text-slate-600 mb-6">An identity in CovoSign Enterprise is a non-human authentication entity designed for machine-to-machine communication. Identities provide granular API-only access and are isolated by permissions, audit trails, and rate limits.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2"> API Key Identities</h3>
          <p className="text-sm text-slate-600 mb-3">Created through the Enterprise API Key Management endpoints. Ideal for backend services and internal automation.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2"> Service Identities</h3>
          <p className="text-sm text-slate-600 mb-3">Scoped service accounts that use API keys for third-party or internal integrations. OAuth is not used.</p>
        </div>
      </div>
    </section>
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Identity vs. User Accounts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-5">
          <h4 className="font-bold text-slate-800 mb-3">User Accounts</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Authenticated via web login and JWT tokens</li>
            <li>Interactive sessions</li>
            <li>Role-based permissions (admin, user, etc.)</li>
            <li>Actions logged to user identity</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5">
          <h4 className="font-bold text-slate-800 mb-3">Enterprise Identities</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Authenticated via API keys (no OAuth)</li>
            <li>Stateless API-only access</li>
            <li>Granular API permissions</li>
            <li>Rate limits per identity</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">API Key Management</h2>
      <div className="space-y-12">
        <div>
          <h3 className="font-bold text-slate-800 mb-2 text-lg">Creating API Keys</h3>
          <p className="text-sm text-slate-600 mb-3">Create a programmatic identity with specific permissions for automation or integrations.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4 inline-block"><code className="text-xs font-mono text-blue-600 font-bold">POST /api/v1/enterprise/api-keys</code></div>
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs h-full">
            <CodeBlock language="json" code={`{ "name": "Document Processing Service", "permissions": ["SIGNATURE_REQUEST_CREATE"], "expiresAt": "2025-12-31T23:59:59Z" }`} />
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default IdentitiesContent;
