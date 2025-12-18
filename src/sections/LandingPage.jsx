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
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">API Overview</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Create an account and learn how to build on CovoSign.
                    </p>
                </div>
            </div>
            <Section title="Essentials">

                <div onClick={() => onNavigate("auth")}>
                    <Card
                        title="Authentication"
                        description="Learn how to authenticate your API requests using API keys and secure headers."
                    />
                </div>
                <div onClick={() => onNavigate("sandbox")}>
                    <Card
                        title="Sandbox Environment"
                        description="Test your integration safely with isolated data and mocked Webhooks."
                        badge="Dev"
                    />
                </div>
            </Section>

            <Section title="Features">
                <div onClick={() => onNavigate("workflows")}>
                    <Card
                        title="Workflows"
                        description="Automate complex signing flows with sequential, parallel, or broadcast routing."
                    />
                </div>
                <div onClick={() => onNavigate("webhooks")}>
                    <Card
                        title="Webhooks"
                        description="Listen for real-time events like document completion or signer tracking."
                    />
                </div>
                <div onClick={() => onNavigate("auditTrail")}>
                    <Card
                        title="Audit Trails"
                        description="Access legally binding audit logs with IP tracking and timestamping."
                    />
                </div>
            </Section>

            <Section title="Tools">
                <div onClick={() => onNavigate("apikeys")}>
                    <Card
                        title="API Keys"
                        description="Manage your secret keys for both Production and Sandbox environments."
                    />
                </div>
                <div onClick={() => onNavigate("guide")}>
                    <Card
                        title="Interactive Guides"
                        description="Step-by-step walkthroughs to create your first signature request in minutes."
                        badge="New"
                    />
                </div>
                <div onClick={() => onNavigate("statuses")}>
                    <Card
                        title="Status Lifecycle"
                        description="Understand the state machine of requests and recipients."
                    />
                </div>
            </Section>

            <Section title="Reference">
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
            </Section>
        </div >
    );
};

export default LandingPage;
