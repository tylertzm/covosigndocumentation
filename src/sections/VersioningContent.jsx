import React from 'react';

const VersioningContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">API Versioning</h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          APIs change over time, like software updates. Versioning keeps old code working while new features are added. CovoSign uses version numbers in the URL, like /api/v1, so you can choose which version to use and update your code when you're ready for changes.
        </p>
      </div>
    </div>

    <section id="ver-strategy" className="mb-16 scroll-mt-32">
        <h2 className="text-xl font-bold text-slate-900 mb-6">URL Path Strategy</h2>
        <div className="bg-slate-100 rounded p-4 font-mono text-sm text-slate-700">https://api.covosign.com/api/<span className="font-bold text-blue-600">v1</span>/resource</div>
        <p className="text-sm text-slate-600 mt-3">Pin to a version (e.g., <code className="font-mono text-xs">/api/v1</code>) to avoid breaking changes. Newer versions are additive; migration guides are provided before deprecations.</p>
    </section>

    <section id="ver-lifecycle" className="scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Lifecycle</h2>
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr><th className="px-6 py-4">Stage</th><th className="px-6 py-4">SLA</th><th className="px-6 py-4">Breaking Changes</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr><td className="px-6 py-4 font-bold text-emerald-600">Stable (v1)</td><td className="px-6 py-4">99.9%</td><td className="px-6 py-4">Not Allowed</td></tr>
            <tr><td className="px-6 py-4 font-bold text-amber-600">Beta</td><td className="px-6 py-4">Best Effort</td><td className="px-6 py-4">Possible</td></tr>
            <tr><td className="px-6 py-4 font-bold text-slate-400">Deprecated</td><td className="px-6 py-4">Limited</td><td className="px-6 py-4">N/A</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
);

export default VersioningContent;
