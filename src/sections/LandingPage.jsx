import React from "react";

const Card = ({ title, description, badge }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-600 text-sm">{title}</h3>
            {badge && (
                <span className="text-[10px] items-center font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wide">
                    {badge}
                </span>
            )}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    </div>
);

const LandingPage = ({ onNavigate }) => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Developer Resources</h1>
            </div>

            <Section title="Correlation ID">
                <div onClick={() => onNavigate("correlation")}>
                    <Card
                        title="Correlation IDs"
                        description="Track requests across distributed systems with unique identifiers and correlation headers."
                    />
                </div>
            </Section>

            <Section title="Essentials">
                <div onClick={() => onNavigate("guide")}>
                    <Card
                        title="Quick Start"
                        description="Step-by-step walkthrough to create your first signature request in minutes."
                        badge="Start"
                    />
                </div>
                <div onClick={() => onNavigate("workflows")}>
                    <Card
                        title="Signer Workflow Types"
                        description="Automate complex signing flows with sequential, parallel, or single signer routing."
                    />
                </div>
                <div onClick={() => onNavigate("fieldTypes")}>
                    <Card
                        title="Signature Field Types"
                        description="Explore available field types for signature requests and form data collection."
                    />
                </div>
                <div onClick={() => onNavigate("statuses")}>
                    <Card
                        title="Signature Statuses"
                        description="Understand the lifecycle and state transitions of signature requests and recipients."
                    />
                </div>
            </Section>

            <Section title="Developer Onboarding">
                <div onClick={() => onNavigate("auth")}>
                    <Card
                        title="Authentication"
                        description="Learn how to authenticate your API requests using API keys and secure headers."
                    />
                </div>
                <div onClick={() => onNavigate("apikeys")}>
                    <Card
                        title="API Keys"
                        description="Manage your secret keys for both Production and Sandbox environments."
                    />
                </div>
                <div onClick={() => onNavigate("sandbox")}>
                    <Card
                        title="Sandbox Environment"
                        description="Test your integration safely with isolated data and mocked webhooks."
                        badge="Dev"
                    />
                </div>
                <div onClick={() => onNavigate("webhooks")}>
                    <Card
                        title="Webhooks"
                        description="Listen for real-time events like document completion or signer tracking."
                    />
                </div>
            </Section>

            <Section title="Request/Response Format">
                <div onClick={() => onNavigate("reqres")}>
                    <Card
                        title="Request & Response"
                        description="Standard JSON formats, envelopes, and data types used across the API."
                    />
                </div>
                <div onClick={() => onNavigate("errors")}>
                    <Card
                        title="Error Handling"
                        description="Comprehensive guide to error codes, messages, and retry strategies."
                    />
                </div>
                <div onClick={() => onNavigate("rateLimits")}>
                    <Card
                        title="Rate Limits"
                        description="Understand API limits and how to handle 429 Too Many Requests."
                    />
                </div>
                <div onClick={() => onNavigate("idempotency")}>
                    <Card
                        title="Idempotency"
                        description="Prevent duplicate requests with idempotency keys and safe retry patterns."
                    />
                </div>
            </Section>

            <Section title="Audit Trail">
                <div onClick={() => onNavigate("auditTrail")}>
                    <Card
                        title="Audit Trail"
                        description="Access legally binding audit logs with IP tracking, timestamps, and compliance data."
                    />
                </div>
            </Section>
        </div >
    );
};

export default LandingPage;
