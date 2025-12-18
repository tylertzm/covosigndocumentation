import React, { useState } from "react";
import GuideModal from "./components/GuideModal";
import { creationSteps, webhookSteps } from "./data/guideSteps.jsx";
import { LandingPage, SandboxContent, GuidesContent, AuthContent, RequestResponseContent, ErrorsContent, IdempotencyContent, PaginationFiltersContent, CorrelationIdsContent, WebhooksContent, BestPracticesContent, ApiKeysContent, WorkflowsContent, StatusPage, FieldTypesContent, AuditTrailContent, RateLimitsContent } from "./sections";

const NAV_SECTIONS = [
  {
    title: "Getting Started",
    items: [

      {
        id: "guide",
        label: "Quick Start",
        subsections: [
          { id: "step-config", label: "1. Config" },
          { id: "step-create", label: "2. Create" },
          { id: "step-signer", label: "3. Signer" },
          { id: "step-activate", label: "4. Activate" },
        ],
      },
      {
        id: "sandbox",
        label: "Sandbox",
        subsections: [
          { id: "sandbox-urls", label: "URLs" },
          { id: "sandbox-diff", label: "Differences" },
          { id: "sandbox-test", label: "Testing" },
        ],
      },
      { id: "apikeys", label: "API Keys" },
    ],
  },
  {
    title: "Features",
    items: [
      {
        id: "workflows",
        label: "Signature Workflows",
        subsections: [
          { id: "workflow-single", label: "Single Signer" },
          { id: "workflow-parallel", label: "Parallel" },
          { id: "workflow-sequential", label: "Sequential" },
        ],
      },
      {
        id: "statuses",
        label: "Statuses",
        subsections: [
          { id: "status-lifecycle", label: "Lifecycle" },
          { id: "req-management", label: "Actions" },
        ],
      },
      { id: "fieldTypes", label: "Field Types" },
      {
        id: "auditTrail",
        label: "Audit Trail",
        subsections: [
          { id: "audit-overview", label: "Overview" },
          { id: "audit-data", label: "Captured Data" },
          { id: "audit-process", label: "Generation" },
          { id: "audit-api", label: "API & Retrieval" },
          { id: "audit-compliance", label: "Compliance" },
          { id: "audit-events", label: "Events" },
          { id: "audit-timezone", label: "Timezone" },
        ],
      },

    ],
  },
  {
    title: "Enterprise API",
    items: [
      {
        id: "reqres",
        label: "Request/Response",
        subsections: [
          { id: "req-format", label: "Formats" },
          { id: "req-wrapper", label: "Response Wrapper" },
        ],
      },
      {
        id: "errors",
        label: "Error Handling",
        subsections: [
          { id: "err-format", label: "Structure" },
          { id: "err-codes", label: "Codes" },
          { id: "err-retry", label: "Retries" },
        ],
      },
      {
        id: "idempotency",
        label: "Idempotency",
        subsections: [
          { id: "idemp-header", label: "Headers" },
          { id: "idemp-client", label: "Client" },
        ],
      },
      {
        id: "pagination",
        label: "Pagination",
        subsections: [
          { id: "page-cursor", label: "Cursor" },
          { id: "page-filters", label: "Filters" },
        ],
      },
      {
        id: "correlation",
        label: "Correlation IDs",
        subsections: [
          { id: "corr-flow", label: "Flow" },
          { id: "corr-header", label: "Headers" },
        ],
      },
      {
        id: "webhooks",
        label: "Webhooks",
        subsections: [
          { id: "hooks-events", label: "Events" },
          { id: "hooks-security", label: "Security" },
        ],
      },
      {
        id: "auth",
        label: "Authentication",
        subsections: [
          { id: "auth-headers", label: "Headers" },
          { id: "auth-clients", label: "Clients" },
        ],
      },
      { id: "rateLimits", label: "Rate Limits" },
      { id: "bestPractices", label: "Best Practices" },
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("resources");
  const [currentView, setCurrentView] = useState("guide");
  const [showGuide, setShowGuide] = useState(false);
  const [showWebhookGuide, setShowWebhookGuide] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (viewId) => {
    setActiveTab("documentation");
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const getSidebarSections = () => {
    // Return all sections for documentation
    return NAV_SECTIONS;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      {showGuide && (
        <GuideModal
          onClose={() => setShowGuide(false)}
          guideSteps={creationSteps}
          title="Quick Start"
        />
      )}
      {showWebhookGuide && (
        <GuideModal
          onClose={() => setShowWebhookGuide(false)}
          guideSteps={webhookSteps}
          title="Webhook Tracker"
        />
      )}

      <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur z-20 shrink-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div
              className="font-bold text-slate-900 text-lg cursor-pointer flex items-center gap-2"
              onClick={() => setActiveTab("resources")}
            >
              <div className="w-6 h-6 bg-slate-900 rounded-lg"></div>
              CovoSign
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab("resources")}
                className={`${activeTab === "resources" ? "text-blue-600" : "text-slate-500 hover:text-slate-800"} transition-colors`}
              >
                Resources
              </button>
              <button
                onClick={() => {
                  setActiveTab("documentation");
                  setCurrentView("guide");
                }}
                className={`${activeTab === "documentation" ? "text-blue-600" : "text-slate-500 hover:text-slate-800"} transition-colors`}
              >
                Documentation
              </button>
              <a
                href="https://api-staging.covosign.com/redoc#section/CovoSign-Enterprise-API/Authentication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-800 transition-colors"
              >
                API Reference
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Expands to fill available space */}
      <div className="flex-1 flex flex-col">
        {activeTab === "resources" && (
          <LandingPage onNavigate={handleNavigate} />
        )}

        {activeTab === "documentation" && (
          <main className="max-w-6xl mx-auto px-6 py-12 flex gap-12 w-full">
            <aside className="w-64 hidden lg:block shrink-0 space-y-8 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto scrollbar-thin pr-4">
              {getSidebarSections().map((section, idx) => (
                <div key={idx} className="animate-in slide-in-from-left-4 duration-500 fade-in fill-mode-backwards" style={{ animationDelay: `${idx * 100}ms` }}>
                  <h5 className="font-semibold text-slate-900 mb-4">
                    {section.title}
                  </h5>
                  <ul className="space-y-1 text-sm text-slate-600 border-l border-slate-200 ml-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setCurrentView(item.id);
                            window.scrollTo({ top: 0, behavior: "instant" });
                          }}
                          className={`block w-full text-left pl-4 py-1.5 -ml-[1px] border-l-2 transition-colors ${currentView === item.id
                            ? "border-blue-600 text-blue-600 font-medium"
                            : "border-transparent hover:text-slate-900"
                            }`}
                        >
                          {item.label}
                        </button>
                        {currentView === item.id && item.subsections && (
                          <ul className="mt-1 mb-2 space-y-1">
                            {item.subsections.map((sub) => (
                              <li key={sub.id}>
                                <button
                                  onClick={() => scrollToSection(sub.id)}
                                  className="block w-full text-left pl-8 py-1 text-xs text-slate-500 hover:text-blue-600 transition-colors"
                                >
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

            <div className="flex-1 min-w-0">

              {currentView === "guide" && (
                <GuidesContent
                  onLaunchGuide={() => setShowGuide(true)}
                  onViewStatuses={() => setCurrentView("statuses")}
                  onViewApiKeys={() => setCurrentView("apikeys")}
                />
              )}
              {currentView === "sandbox" && <SandboxContent />}
              {currentView === "apikeys" && <ApiKeysContent />}

              {currentView === "reqres" && <RequestResponseContent />}
              {currentView === "errors" && <ErrorsContent />}
              {currentView === "idempotency" && <IdempotencyContent />}
              {currentView === "pagination" && <PaginationFiltersContent />}
              {currentView === "correlation" && <CorrelationIdsContent />}
              {currentView === "webhooks" && (
                <WebhooksContent onLaunchGuide={() => setShowWebhookGuide(true)} />
              )}
              {currentView === "workflows" && <WorkflowsContent />}
              {currentView === "statuses" && <StatusPage />}
              {currentView === "fieldTypes" && <FieldTypesContent />}
              {currentView === "auditTrail" && <AuditTrailContent />}


              {currentView === "auth" && <AuthContent />}
              {currentView === "rateLimits" && <RateLimitsContent />}
              {currentView === "bestPractices" && <BestPracticesContent />}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
