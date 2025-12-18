import React from "react";

const RateLimitsContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Enterprise API
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Rate Limits
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          Rate limits are like speed limits on the road. They prevent any one
          user from making too many requests too quickly, which could slow down
          the service for everyone. CovoSign allows a certain number of requests
          per minute, and if you go over, you have to wait. It's to keep things
          fair and fast for all users.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        To ensure fair usage and stability, CovoSign implements rate limiting
        per API key and environment. Limits are enforced using a Redis-based sliding
        window mechanism to ensure consistent performance.
      </p>
    </div>
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Production</h3>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
              LIVE
            </span>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              100{" "}
              <span className="text-base font-normal text-slate-500">
                req/min
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Per API Key</p>
            <div className="text-xs font-mono text-slate-500 bg-slate-50 p-2 rounded">
              csk_live_*
            </div>
          </div>
        </div>
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Sandbox</h3>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
              TEST
            </span>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              100{" "}
              <span className="text-base font-normal text-slate-500">
                req/min
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Per API Key (Default)
            </p>
            <p className="text-xs text-slate-500 mb-4">
              Configurable via <code className="font-mono">SANDBOX_RATE_LIMIT</code> environment variable.
            </p>
            <div className="text-xs font-mono text-slate-500 bg-slate-50 p-2 rounded">
              csk_sandbox_*
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Implementation Details</h2>
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mb-6">
        <h3 className="font-bold text-slate-800 mb-2">Redis-Based Sliding Window</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Rate limiting is implemented using a <strong>Redis-based sliding window</strong>. Each API request increments a counter (<code className="font-mono text-xs">INCR</code> operation) associated with your API key for the current minute. If the counter exceeds the limit, further requests are blocked until the next window begins.
        </p>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">API Key Quotas</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Sandbox Keys
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex justify-between items-center">
              <span>Max Active Keys</span>
              <span className="font-mono font-bold text-slate-900 border border-slate-200 rounded px-2 bg-slate-50">3</span>
            </li>
            <li className="flex justify-between items-center text-xs text-slate-500 italic">
              No Enterprise plan required
            </li>
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Production Keys
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex justify-between items-center">
              <span>Max Active Keys</span>
              <span className="font-mono font-bold text-slate-900 border border-slate-200 rounded px-2 bg-slate-50">5</span>
            </li>
            <li className="flex justify-between items-center text-xs text-slate-500 italic">
              Enterprise plan required
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-4 bg-slate-50 border border-slate-200 p-3 rounded-lg">
        <strong>Quota Validation:</strong> Quotas are strictly enforced during key creation. You will receive a specific error message if you attempt to create more keys than your plan allows.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Billing & Custom Limits</h2>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          Limits are integrated with your organization's <strong>Billing Plan</strong>. While the standard limits are fixed, the infrastructure supports custom configurations for Enterprise customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="bg-white p-3 rounded border border-slate-200">
            <strong className="block text-slate-900 mb-1">Quota Storage</strong>
            Stored in <code className="font-mono">BillingPlan.quotaDefaults</code> JSON field.
          </div>
          <div className="bg-white p-3 rounded border border-slate-200">
            <strong className="block text-slate-900 mb-1">Future Customization</strong>
            Plans can define custom <code className="font-mono">productionApiKeysPerAccount</code> and <code className="font-mono">apiKeyRateLimit</code>.
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Response Headers
      </h2>
      <p className="text-slate-600 mb-4">
        Every API response includes headers to help you monitor your current
        usage.
      </p>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs overflow-x-auto">
        <div className="grid grid-cols-[200px_1fr] gap-4 font-mono">
          <div className="text-blue-300">X-RateLimit-Limit</div>
          <div className="text-slate-400">
            Maximum requests allowed per minute window
          </div>
          <div className="text-blue-300">X-RateLimit-Remaining</div>
          <div className="text-slate-400">
            Requests remaining in the current window
          </div>
          <div className="text-blue-300">X-RateLimit-Reset</div>
          <div className="text-slate-400">
            Unix timestamp when the window resets
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-4">
        Monitor these headers to adjust client throughput. Use backoff or
        queuing when remaining capacity is low.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-6">Exceeded Limits</h2>
      <div className="flex gap-6 items-start">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 w-full">
          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
            429 Too Many Requests
          </h4>
          <p className="text-sm text-green-800 mb-4">
            If you exceed the rate limit, the API will return a 429 status code.
            The response will include a <code>Retry-After</code> header
            indicating how many seconds to wait.
          </p>
          <div className="bg-white rounded p-3 border border-green-200">
            <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">
              Best Practice
            </h5>
            <p className="text-sm text-slate-700">
              Implement exponential backoff, honor{" "}
              <code className="font-mono text-xs">Retry-After</code>, and spread
              bursts to stay within limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default RateLimitsContent;
