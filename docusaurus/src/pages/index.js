import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Card from '../components/Card';
import Section from '../components/Section';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Developer Resources"
      description="CovoSign Enterprise E-Signature API Documentation">
      <main className="bg-white min-h-screen">
        <div className={styles.landingContainer}>
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Developer Resources</h1>
          </div>

          <Section title="Correlation ID">
            <Card
              title="Correlation IDs"
              description="Track requests across distributed systems with unique identifiers and correlation headers."
              to="/docs/correlation-ids"
            />
          </Section>

          <Section title="Essentials">
            <Card
              title="Quick Start"
              description="Step-by-step walkthrough to create your first signature request in minutes."
              badge="Start"
              to="/docs/guides"
            />
            <Card
              title="Signer Workflow Types"
              description="Automate complex signing flows with sequential, parallel, or single signer routing."
              to="/docs/workflows"
            />
            <Card
              title="Signature Field Types"
              description="Explore available field types for signature requests and form data collection."
              to="/docs/field-types"
            />
            <Card
              title="Signature Statuses"
              description="Understand the lifecycle and state transitions of signature requests and recipients."
              to="/docs/statuses"
            />
          </Section>

          <Section title="Developer Onboarding">
            <Card
              title="Authentication"
              description="Learn how to authenticate your API requests using API keys and secure headers."
              to="/docs/authentication"
            />
            <Card
              title="API Keys"
              description="Manage your secret keys for both Production and Sandbox environments."
              to="/docs/api-keys"
            />
            <Card
              title="Sandbox Environment"
              description="Test your integration safely with isolated data and mocked webhooks."
              badge="Dev"
              to="/docs/sandbox"
            />
            <Card
              title="Webhooks"
              description="Listen for real-time events like document completion or signer tracking."
              to="/docs/webhooks"
            />
          </Section>

          <Section title="Request/Response Format">
            <Card
              title="Request & Response"
              description="Standard JSON formats, envelopes, and data types used across the API."
              to="/docs/request-response"
            />
            <Card
              title="Error Handling"
              description="Comprehensive guide to error codes, messages, and retry strategies."
              to="/docs/errors"
            />
            <Card
              title="Rate Limits"
              description="Understand API limits and how to handle 429 Too Many Requests."
              to="/docs/rate-limits"
            />
            <Card
              title="Idempotency"
              description="Prevent duplicate requests with idempotency keys and safe retry patterns."
              to="/docs/idempotency"
            />
          </Section>

          <Section title="Audit Trail">
            <Card
              title="Audit Trail"
              description="Access legally binding audit logs with IP tracking, timestamps, and compliance data."
              to="/docs/audit-trail"
            />
          </Section>
        </div>
      </main>
    </Layout>
  );
}
