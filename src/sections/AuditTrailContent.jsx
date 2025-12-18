import React from "react";
import CodeBlock from "../components/CodeBlock";
import MermaidDiagram from "../components/MermaidDiagram";

const AuditTrailContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Audit Trail System
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          An audit trail is like a detailed receipt or log of everything that
          happened during the signing process. It records who signed when, from
          where, and how they were verified. This proves the document is
          legitimate and helps with legal compliance, like a permanent record of
          the transaction.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        A complete, tamper-resistant record generated for every completed
        signature request. Includes timestamps, IP addresses, signer identity,
        authentication methods, and an ordered event history. Audit trails are
        automatically produced the moment a request reaches{" "}
        <strong>COMPLETED</strong>.
      </p>
    </div>

    <section id="audit-overview" className="mb-12 scroll-mt-32">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            Automatic Generation
          </h3>
          <p className="text-sm text-slate-600">
            Created instantly when the last signer finishes. Outputs PDF
            (final).
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            Comprehensive Data
          </h3>
          <p className="text-sm text-slate-600">
            Request details, signers, timestamps, IP addresses, authentication
            methods, and full event history.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            Timezone Support
          </h3>
          <p className="text-sm text-slate-600">
            Automatic timezone resolution from IP addresses for legally
            accurate, local timestamps.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            Secure Storage
          </h3>
          <p className="text-sm text-slate-600">
            Stored as PDFs in S3 with configurable retention (default 7 years).
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          Event History &mdash; chronological log of all actions
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          Template-Based &mdash; professional Word template
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          Output &mdash; PDF
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          S3 Delivery &mdash; signed documents include audit URL
        </div>
      </div>
    </section>

    <section id="audit-data" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Captured Data
      </h2>

      <div className="mb-8">
        <h3 className="font-bold text-slate-800 mb-3 text-sm">
          Document Sections
        </h3>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Content</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-4 py-2 font-semibold">Audit ID</td>
                <td className="px-4 py-2">
                  Unique identifier for the audit trail
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">
                  Document Information
                </td>
                <td className="px-4 py-2">Document ID, name, title</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">
                  Requester Information
                </td>
                <td className="px-4 py-2">
                  Name, email, phone, user ID, IP address
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Request Details</td>
                <td className="px-4 py-2">
                  Timestamps, expiration, signing order, security level
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Signature History</td>
                <td className="px-4 py-2">
                  Per-signer details with timestamps and IP addresses
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Completion</td>
                <td className="px-4 py-2">Final completion timestamp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="font-bold text-slate-800 mb-3 text-sm">
          Request-Level Data
        </h3>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-2">Field</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Audit ID</td>
                <td className="px-4 py-2">
                  Format: AUD-{`{shortId}`}-{`{timestamp}`}
                </td>
                <td className="px-4 py-2 font-mono text-xs">
                  AUD-a1b2c3d4-20251030-143022
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">
                  Document ID / Name
                </td>
                <td className="px-4 py-2">Document UUID and title</td>
                <td className="px-4 py-2 font-mono text-xs">
                  UUID / "Employment Contract"
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Request ID</td>
                <td className="px-4 py-2">Signature request UUID</td>
                <td className="px-4 py-2 font-mono text-xs">UUID</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Requester</td>
                <td className="px-4 py-2">Name, email, phone, user ID</td>
                <td className="px-4 py-2 font-mono text-xs">
                  Jane Smith / jane@company.com
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">IP Address</td>
                <td className="px-4 py-2">Origination IP</td>
                <td className="px-4 py-2 font-mono text-xs">192.168.1.1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Security Level</td>
                <td className="px-4 py-2">Signature type & auth methods</td>
                <td className="px-4 py-2 font-mono text-xs">
                  Simple Electronic Signature / Email OTP
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Signing Order</td>
                <td className="px-4 py-2">Sequential or parallel</td>
                <td className="px-4 py-2 font-mono text-xs">Sequential</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Timestamps</td>
                <td className="px-4 py-2">Sent, expiration, completion</td>
                <td className="px-4 py-2 font-mono text-xs">
                  2025-10-30T14:30:22-05:00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-slate-800 mb-3 text-sm">
          Per-Signer Data
        </h3>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-2">Field</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Ordinal</td>
                <td className="px-4 py-2">Signing order position</td>
                <td className="px-4 py-2 font-mono text-xs">1st</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">
                  Name / Email / Phone
                </td>
                <td className="px-4 py-2">Recipient identity</td>
                <td className="px-4 py-2 font-mono text-xs">
                  John Doe / john@example.com
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">IP Address</td>
                <td className="px-4 py-2">Signing session IP</td>
                <td className="px-4 py-2 font-mono text-xs">192.168.1.5</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Signature Type</td>
                <td className="px-4 py-2">Method used</td>
                <td className="px-4 py-2 font-mono text-xs">
                  Simple Electronic Signature
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">
                  Signature Timestamp
                </td>
                <td className="px-4 py-2">When signed (ISO 8601)</td>
                <td className="px-4 py-2 font-mono text-xs">
                  2025-10-30T15:20:30-05:00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="audit-process" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Generation Workflow
      </h2>
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
        <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
          <li>
            <strong>Trigger:</strong> Last signer completes; event{" "}
            <code>SIGNATURE_REQUEST_COMPLETED</code> fires.
          </li>
          <li>
            <strong>Load Data:</strong> Request, document, recipients (with
            fields), and history events.
          </li>
          <li>
            <strong>Build Context:</strong> Resolve timezone from IPs, format
            timestamps, compute audit ID.
          </li>
          <li>
            <strong>Generate PDF:</strong> Produce final PDF.
          </li>
          <li>
            <strong>Store & Link:</strong> Upload to S3{" "}
            <code>audit-trails/{`{requestId}`}/audit-trail.pdf</code> and
            persist URL on the signed document.
          </li>
        </ol>
      </div>
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
        <MermaidDiagram
          chart={`flowchart TD
    A[Last Signer<br/>Completes] --> B[Load Data]
    B --> C[Build Context]
    C --> D[Generate PDF]
    D --> E[Store & Link]
    A --> F[SIGNATURE_REQUEST_COMPLETED<br/>Event Triggered]
    B --> G[Request, Document,<br/>Recipients, History]
    C --> H[Timezone Resolution,<br/>Timestamps, Audit ID]
    D --> I[Final PDF<br/>Generated]
    E --> J[S3 Upload &<br/>URL Linked]
    style A fill:#dcfce7,stroke:#22c55e
    style F fill:#fef3c7,stroke:#f59e0b`}
          className="mb-4"
        />
      </div>
      <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
        <CodeBlock
          language="java"
          code={`// From DocumentSigningServiceImpl.java - generateAndStoreAuditTrail method
private String generateAndStoreAuditTrail(SignatureRequest signatureRequest, TempFileManager tempFileManager) {
    try {
        AuditTrailDocument auditTrailDocument = auditTrailService.generateAuditTrailDocument(signatureRequest.getId());
        byte[] pdfBytes = auditTrailDocument.pdfBytes();
        if (pdfBytes == null || pdfBytes.length == 0) {
            log.warn("Audit trail PDF bytes are null or empty for request: {}", signatureRequest.getId());
            return null;
        }

        if (s3Service.isS3Enabled()) {
            String auditKey = "audit-trails/" + signatureRequest.getId() + "/audit-trail.pdf";
            try (ByteArrayInputStream stream = new ByteArrayInputStream(pdfBytes)) {
                return s3Service.uploadFile(stream, auditKey, "application/pdf", pdfBytes.length);
            }
        } else {
            Path auditPath = tempFileManager.createTempFile("audit-trail", ".pdf");
            Files.write(auditPath, pdfBytes);
            return auditPath.toString();
        }
    } catch (Exception ex) {
        log.warn("Failed to generate or upload audit trail for request {}: {}. Document processing will continue without audit trail.", 
                signatureRequest.getId(), ex.getMessage());
        return null;
    }
}`}
        />
      </div>
    </section>

    <section id="audit-api" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        API & Retrieval
      </h2>
      <div className="space-y-6">
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              GET
            </span>
            <code className="font-mono text-sm text-slate-700">
              /api/v1/documents/audit-trail/{`{requestId}`}/download
            </code>
          </div>
          <p className="text-xs text-slate-600">
            Downloads the generated PDF for a completed request. Auth: Bearer
            token.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#1e2329] rounded-lg p-5 text-white text-xs">
            <div className="text-slate-400 mb-2">// Response Headers</div>
            <CodeBlock
              language="http"
              code={`Content-Type: application/pdf\nContent-Disposition: attachment; filename="audit-trail.pdf"`}
            />
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h4 className="font-bold text-slate-800 mb-2 text-sm">
              Response Codes
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 font-mono">
              <li className="flex justify-between">
                <span>200</span>{" "}
                <span className="text-emerald-600">Success (PDF)</span>
              </li>
              <li className="flex justify-between">
                <span>400</span>{" "}
                <span className="text-orange-600">Request not completed</span>
              </li>
              <li className="flex justify-between">
                <span>401</span>{" "}
                <span className="text-red-600">Unauthorized</span>
              </li>
              <li className="flex justify-between">
                <span>404</span>{" "}
                <span className="text-red-600">Request not found</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 text-sm">
            Stored PDF Retrieval
          </h4>
          <p className="text-xs text-slate-600 mb-2">
            Completed requests keep a stored audit URL for fast access.
          </p>
          <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
            <CodeBlock
              language="java"
              code={`// From SignedDocumentServiceImpl.streamAuditTrailByRequestId
SignatureRequest signatureRequest = new SignatureRequest();
signatureRequest.setId(signatureRequestId);
var results = signedDocumentRepository.findBySignatureRequestOrderBySignedAtDesc(signatureRequest);

if (results == null || results.isEmpty()) {
    // Generate on-the-fly if not found
    var doc = auditTrailService.generateAuditTrailDocument(signatureRequestId);
    byte[] pdf = doc.pdfBytes();
    if (pdf == null || pdf.length == 0) {
        throw new ResourceNotFoundException("Audit trail not available for this request");
    }
    return new ByteArrayInputStream(pdf);
}

SignedDocument latest = results.getFirst();
String auditUrl = latest.getAuditTrailUrl();
if (auditUrl != null && !auditUrl.isBlank()) {
    if ((auditUrl.startsWith("http://") || auditUrl.startsWith("https://")) && auditUrl.contains("s3")) {
        String s3Key = extractS3KeyFromUrl(auditUrl);
        return s3Service.downloadFileAsStream(s3Key);
    }
}`}
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4 text-sm">
            API Retrieval Flow
          </h4>

          <MermaidDiagram
            chart={`flowchart TD
    A[Client] --> B[GET /audit-trail/...]
    B --> C{Check Request<br/>Completion}
    C -->|Completed| D[Return PDF<br/>200 OK]
    C -->|Not Ready| E[400 Bad Request]
    C -->|Invalid Auth| F[401/404 Error]
    style A fill:#e2e8f0
    style D fill:#dcfce7,stroke:#22c55e
    style E fill:#fee2e2,stroke:#ef4444
    style F fill:#fee2e2,stroke:#ef4444`}
            className="mb-4"
          />
        </div>
      </div>
    </section>

    <section id="audit-compliance" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        Legal Compliance
      </h2>
      <p className="text-slate-600 mb-6">
        Meets requirements for ESIGN, UETA, and eIDAS (Simple Electronic
        Signatures).
      </p>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="border border-slate-200 rounded-lg p-4 text-center">
          <h4 className="font-bold text-slate-800">ESIGN Act</h4>
          <p className="text-xs text-slate-500 mt-1">United States</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 text-center">
          <h4 className="font-bold text-slate-800">UETA</h4>
          <p className="text-xs text-slate-500 mt-1">
            Uniform Electronic Transactions
          </p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 text-center">
          <h4 className="font-bold text-slate-800">eIDAS</h4>
          <p className="text-xs text-slate-500 mt-1">European Union (Simple)</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-2">Requirement</th>
              <th className="px-4 py-2">Implementation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-2 font-semibold">Intent</td>
              <td className="px-4 py-2">Explicit click-to-sign recorded</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Identity</td>
              <td className="px-4 py-2">Email OTP & IP tracking</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Integrity</td>
              <td className="px-4 py-2">Tamper-resistant PDF output</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Retention</td>
              <td className="px-4 py-2">7-year storage policy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h4 className="font-bold text-slate-800 mb-2 text-sm">
          Data Included for Compliance
        </h4>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Signer identity: name, email, phone</li>
          <li>Authentication method: Email OTP verification</li>
          <li>Timestamps: ISO 8601 with timezone</li>
          <li>IP addresses: per signing session</li>
          <li>Document identity: UUID and title</li>
          <li>Signing order: sequential or parallel</li>
          <li>Event history: complete action log</li>
          <li>Completion proof: final completion timestamp</li>
        </ul>
      </div>
    </section>

    <section id="audit-events" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        Event History Tracking
      </h2>
      <p className="text-slate-600 mb-4">
        Audit trails embed the signature request history so you can see every
        state change.
      </p>
      <div className="overflow-hidden rounded-lg border border-slate-200 mb-4">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">When Recorded</th>
              <th className="px-4 py-2">Actor</th>
              <th className="px-4 py-2">Target</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-2">CREATED</td>
              <td className="px-4 py-2">Request created</td>
              <td className="px-4 py-2">Creator</td>
              <td className="px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="px-4 py-2">SENT</td>
              <td className="px-4 py-2">Request sent</td>
              <td className="px-4 py-2">Creator</td>
              <td className="px-4 py-2">First recipient(s)</td>
            </tr>
            <tr>
              <td className="px-4 py-2">VIEWED</td>
              <td className="px-4 py-2">Recipient opened link</td>
              <td className="px-4 py-2">Recipient</td>
              <td className="px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="px-4 py-2">SIGNED</td>
              <td className="px-4 py-2">Recipient signed</td>
              <td className="px-4 py-2">Recipient</td>
              <td className="px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="px-4 py-2">DECLINED</td>
              <td className="px-4 py-2">Recipient declined</td>
              <td className="px-4 py-2">Recipient</td>
              <td className="px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="px-4 py-2">REMINDER_SENT</td>
              <td className="px-4 py-2">Manual reminder</td>
              <td className="px-4 py-2">Creator</td>
              <td className="px-4 py-2">Recipient</td>
            </tr>
            <tr>
              <td className="px-4 py-2">CANCELLED</td>
              <td className="px-4 py-2">Request canceled</td>
              <td className="px-4 py-2">Creator</td>
              <td className="px-4 py-2">All recipients</td>
            </tr>
            <tr>
              <td className="px-4 py-2">EXPIRED</td>
              <td className="px-4 py-2">Deadline passed</td>
              <td className="px-4 py-2">System</td>
              <td className="px-4 py-2">Pending recipients</td>
            </tr>
            <tr>
              <td className="px-4 py-2">COMPLETED</td>
              <td className="px-4 py-2">All signatures collected</td>
              <td className="px-4 py-2">System</td>
              <td className="px-4 py-2">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="audit-timezone" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        Timezone Resolution
      </h2>
      <p className="text-slate-600 mb-4">
        Timestamps are localized using the signer/request IP. Falls back to UTC
        if no IP is available.
      </p>
      <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
        <CodeBlock
          language="java"
          code={`// Format: ISO 8601 with offset (e.g. 2025-10-30T14:30:22-05:00)
value.atOffset(ZoneOffset.UTC)
     .toInstant()
     .atZone(targetZone) // Resolved from IP
     .format(ISO_OFFSET_FORMATTER);`}
        />
      </div>
    </section>


  </article>
);

export default AuditTrailContent;
