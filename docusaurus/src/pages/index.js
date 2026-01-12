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
            <div className={styles.heroCard}>
              <h2 className={styles.apiTitle}>API Overview</h2>
              <p className={styles.apiDescription}>
                Create an account and learn how to build on CovoSign.
              </p>
              <div className={styles.buttonGroup}>
                <Link
                  className="button button--primary"
                  to="/docs/guides">
                  Get Started
                </Link>
                <Link
                  className="button button--secondary"
                  to="/docs/authentication">
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>

          <Section title="Essentials">
            <Card
              title="Authentication"
              description="Learn how to authenticate your API requests using API keys and secure headers."
              to="/docs/authentication"
            />
            <Card
              title="Sandbox Environment"
              description="Test your integration safely with isolated data and mocked Webhooks."
              badge="Dev"
              to="/docs/sandbox"
            />
          </Section>

          <Section title="Features">
            <Card
              title="Workflows"
              description="Automate complex signing flows with sequential, parallel, or broadcast routing."
              to="/docs/workflows"
            />
            <Card
              title="Webhooks"
              description="Listen for real-time events like document completion or signer tracking."
              to="/docs/webhooks"
            />
            <Card
              title="Audit Trails"
              description="Access legally binding audit logs with IP tracking and timestamping."
              to="/docs/audit-trail"
            />
          </Section>

          <Section title="Tools">
            <Card
              title="API Keys"
              description="Manage your secret keys for both Production and Sandbox environments."
              to="/docs/api-keys"
            />
            <Card
              title="Interactive Guides"
              description="Step-by-step walkthroughs to create your first signature request in minutes."
              badge="New"
              to="/docs/guides"
            />
            <Card
              title="Status Lifecycle"
              description="Understand the state machine of requests and recipients."
              to="/docs/statuses"
            />
          </Section>

          <Section title="Reference">
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
          </Section>
        </div>
      </main>
    </Layout>
  );
}
