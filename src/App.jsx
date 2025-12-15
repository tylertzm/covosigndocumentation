import React, { useState } from 'react';
import GuideModal from './components/GuideModal';
import { creationSteps, webhookSteps } from './data/guideSteps.jsx';
import {
  OverviewContent,
  SandboxContent,
  GuidesContent,
  AuthContent,
  RequestResponseContent,
  ErrorsContent,
  IdempotencyContent,
  PaginationFiltersContent,
  CorrelationIdsContent,
  WebhooksContent,
  VersioningContent,
  BestPracticesContent,
  ApiKeysContent,
  WorkflowsContent,
  StatusPage,
  FieldTypesContent,
  AuditTrailContent,
  IdentitiesContent,
  RateLimitsContent,
} from './sections';

const NAV_SECTIONS = [
  {
    title: "Getting Started",
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'guide', label: 'Quick Start', subsections: [{id: 'step-config', label: '1. Config'}, {id: 'step-create', label: '2. Create'}, {id: 'step-signer', label: '3. Signer'}, {id: 'step-activate', label: '4. Activate'}] },
      { id: 'sandbox', label: 'Sandbox', subsections: [{id: 'sandbox-urls', label: 'URLs'}, {id: 'sandbox-diff', label: 'Differences'}, {id: 'sandbox-test', label: 'Testing'}] },
      { id: 'apikeys', label: 'API Keys' }
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { id: 'reqres', label: 'Request/Response', subsections: [{id: 'req-format', label: 'Formats'}, {id: 'req-wrapper', label: 'Response Wrapper'}] },
      { id: 'errors', label: 'Error Handling', subsections: [{id: 'err-format', label: 'Structure'}, {id: 'err-codes', label: 'Codes'}, {id: 'err-retry', label: 'Retries'}] },
      { id: 'idempotency', label: 'Idempotency', subsections: [{id: 'idemp-header', label: 'Headers'}, {id: 'idemp-client', label: 'Client'}] },
      { id: 'pagination', label: 'Pagination', subsections: [{id: 'page-cursor', label: 'Cursor'}, {id: 'page-filters', label: 'Filters'}] },
      { id: 'correlation', label: 'Correlation IDs', subsections: [{id: 'corr-flow', label: 'Flow'}, {id: 'corr-header', label: 'Headers'}] },
      { id: 'versioning', label: 'Versioning', subsections: [{id: 'ver-strategy', label: 'Strategy'}, {id: 'ver-lifecycle', label: 'Lifecycle'}] },
      { id: 'webhooks', label: 'Webhooks', subsections: [{id: 'hooks-events', label: 'Events'}, {id: 'hooks-security', label: 'Security'}] },
      { id: 'workflows', label: 'Workflows' },
      { id: 'statuses', label: 'Statuses', subsections: [{id: 'status-lifecycle', label: 'Lifecycle'}, {id: 'req-management', label: 'Actions'}] },
      { id: 'fieldTypes', label: 'Field Types' },
      { id: 'auditTrail', label: 'Audit Trail', subsections: [
        {id: 'audit-overview', label: 'Overview'},
        {id: 'audit-data', label: 'Captured Data'},
        {id: 'audit-process', label: 'Generation'},
        {id: 'audit-api', label: 'API & Retrieval'},
        {id: 'audit-compliance', label: 'Compliance'},
        {id: 'audit-events', label: 'Events'},
        {id: 'audit-timezone', label: 'Timezone'},
        {id: 'audit-storage', label: 'Storage'},
        {id: 'audit-config', label: 'Config'},
        {id: 'audit-troubleshoot', label: 'Troubleshooting'},
        {id: 'audit-best', label: 'Best Practices'},
      ] },
      { id: 'identities', label: 'Identities' }
    ]
  },
  {
    title: "Enterprise API",
    items: [
      { id: 'auth', label: 'Authentication', subsections: [{id: 'auth-headers', label: 'Headers'}, {id: 'auth-clients', label: 'Clients'}] },
      { id: 'rateLimits', label: 'Rate Limits' },
      { id: 'bestPractices', label: 'Best Practices' }
    ]
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('overview');
  const [showGuide, setShowGuide] = useState(false);
  const [showWebhookGuide, setShowWebhookGuide] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {showGuide && <GuideModal onClose={() => setShowGuide(false)} guideSteps={creationSteps} title="Quick Start" />}
      {showWebhookGuide && <GuideModal onClose={() => setShowWebhookGuide(false)} guideSteps={webhookSteps} title="Webhook Tracker" />}

      <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">S</div>Signature API
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
        <aside className="w-64 hidden lg:block shrink-0 space-y-8 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto scrollbar-thin pr-4">
          {NAV_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <h5 className="font-semibold text-slate-900 mb-4">{section.title}</h5>
              <ul className="space-y-1 text-sm text-slate-600 border-l border-slate-200 ml-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setCurrentView(item.id);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className={`block w-full text-left pl-4 py-1.5 -ml-[1px] border-l-2 transition-colors ${
                        currentView === item.id ? 'border-blue-600 text-blue-600 font-medium' : 'border-transparent hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                    {currentView === item.id && item.subsections && (
                      <ul className="mt-1 mb-2 space-y-1">
                        {item.subsections.map((sub) => (
                          <li key={sub.id}>
                            <button onClick={() => scrollToSection(sub.id)} className="block w-full text-left pl-8 py-1 text-xs text-slate-500 hover:text-blue-600 transition-colors">
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {currentView === 'overview' && <OverviewContent />}
        {currentView === 'guide' && <GuidesContent onLaunchGuide={() => setShowGuide(true)} onViewStatuses={() => setCurrentView('statuses')} onViewApiKeys={() => setCurrentView('apikeys')} />}
        {currentView === 'sandbox' && <SandboxContent />}
        {currentView === 'apikeys' && <ApiKeysContent />}

        {currentView === 'reqres' && <RequestResponseContent />}
        {currentView === 'errors' && <ErrorsContent />}
        {currentView === 'idempotency' && <IdempotencyContent />}
        {currentView === 'pagination' && <PaginationFiltersContent />}
        {currentView === 'correlation' && <CorrelationIdsContent />}
        {currentView === 'versioning' && <VersioningContent />}
        {currentView === 'webhooks' && <WebhooksContent onLaunchGuide={() => setShowWebhookGuide(true)} />}
        {currentView === 'workflows' && <WorkflowsContent />}
        {currentView === 'statuses' && <StatusPage />}
        {currentView === 'fieldTypes' && <FieldTypesContent />}
        {currentView === 'auditTrail' && <AuditTrailContent />}
        {currentView === 'identities' && <IdentitiesContent />}

        {currentView === 'auth' && <AuthContent />}
        {currentView === 'rateLimits' && <RateLimitsContent />}
        {currentView === 'bestPractices' && <BestPracticesContent />}
      </main>
    </div>
  );
}
