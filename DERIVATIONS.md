# Code Block Derivations & Explanations

This document contains a comprehensive collection of code blocks used throughout the documentation (excluding the interactive Python guide logic), along with technical context on how they were derived.

## 1. Authentication

### Header Construction
**Context:** Used in `AuthContent.jsx`. Authenticating requests requires specific HTTP headers.
**Derivation:** Standard HTTP `Authorization` header format (Bearer token) or custom `X-API-Key` header.
```javascript
// JavaScript
const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};
```
```python
# Python
headers = {
    "Authorization": f"Bearer {self.api_key}",
    "Content-Type": "application/json"
}
```
```java
// Java
HttpHeaders headers = new HttpHeaders();
headers.set("Authorization", "Bearer " + apiKey);
headers.set("Content-Type", "application/json");
```

### Direct Header Examples
**Context:** Used in `AuthContent.jsx`.
**Derivation:** Plain-text examples of header formatting.

**Custom Header:**
```http
X-API-Key: csk_live_...
```

**Standard Header:**
```http
Authorization: Bearer csk_live_...
```

## 2. Request & Response Standards

### Content Types
**Context:** Used in `RequestResponseContent.jsx`.
**Derivation:** Standard MIME types.
```http
application/json
multipart/form-data
```

### Response Wrapper
**Context:** Used in `RequestResponseContent.jsx`. All API responses are wrapped in a standard envelope.
**Derivation:** Based on industry-standard JSON API envelopes to provide consistent `success`, `data`, and `error` fields.
```json
{
  "success": true,
  "data": { "id": "req_12345", "status": "COMPLETED" },
  "error": null,
  "meta": {
    "requestId": "req_123abc",
    "correlationId": "corr_456def",
    "timestamp": "2025-12-10T10:30:45.123Z"
  }
}
```

### Pagination Object
**Context:** Used in `PaginationFiltersContent.jsx`.
**Derivation:** Cursor-based pagination standard. `nextCursor` is an opaque string (often Base64 encoded) used to fetch the next set of results.
```json
{
  "data": [{ "id": "req_123", "status": "COMPLETED" }],
  "pagination": {
    "hasNext": true,
    "hasPrevious": false,
    "nextCursor": "eyJwYWdlIjoyLCJsaW1pdCI6MjB9",
    "previousCursor": null,
    "totalCount": 150
  }
}
```

### Pagination Filter Usage
**Context:** Used in `PaginationFiltersContent.jsx`.
**Derivation:** Example query string for filtering.
```http
GET /api/v1/signature-requests?status=COMPLETED&createdAfter=2024-01-01T00:00:00Z&limit=50
```

## 3. Error Handling

### Error Structure
**Context:** Used in `ErrorsContent.jsx`.
**Derivation:** Standard error reporting format providing machine-readable `code` and human-readable `message`.
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": { "field": "email" }
  }
}
```

### Exponential Backoff Strategy
**Context:** Used in `ErrorsContent.jsx`.
**Derivation:** Standard reliability pattern. Retrying immediately usually fails; waiting exponentially increasing amounts of time (`2^attempt`) allows the server to recover.
```javascript
// Exponential Backoff Example
async requestWithRetry(method, path, data, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await this.request(method, path, data);
    } catch (error) {
      if (error.status < 500) throw error; // Don't retry client errors
      attempt++;
      await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
    }
  }
}
```

## 4. Idempotency

### Header Usage
**Context:** Used in `IdempotencyContent.jsx`.
**Derivation:** Standard header for idempotency keys.
```http
X-Idempotency-Key: req_1234567890abcdef
```

### Idempotency Key Generation
**Context:** Used in `IdempotencyContent.jsx`.
**Derivation:** Client-side generation of a unique key based on the request content. Using an MD5 hash of the payload ensures that the same data always generates the same key, preventing duplicate processing.
```javascript
generateIdempotencyKey(data) {
  const hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
  return `req_${hash}`;
}
```

### Conflict Response
**Context:** Used in `IdempotencyContent.jsx`.
**Derivation:** HTTP 409 Conflict status indicates a resource already exists.
```json
{
  "error": {
    "code": "IDEMPOTENCY_CONFLICT",
    "message": "Request already processed"
  }
}
```

## 5. Workflows & Recipients

### Single Signer Body
**Context:** Used in `WorkflowsContent.jsx`.
**Derivation:** Minimal JSON payload for a valid signature request.
```json
{
  "title": "Simple Agreement",
  "recipients": [
    {
      "email": "signer@example.com",
      "name": "John Doe",
      "role": "SIGNER",
      "signingOrder": 1
    }
  ],
  "fields": [ ... ]
}
```

### Parallel Workflow (Broadcast)
**Context:** Used in `WorkflowsContent.jsx`.
**Derivation:** `signingOrder` is identical (1) for all recipients, signaling the system to notify everyone simultaneously.
```json
"recipients": [
  { "email": "party1@example.com", "signingOrder": 1 },
  { "email": "party2@example.com", "signingOrder": 1 },
  { "email": "party3@example.com", "signingOrder": 1 }
]
```

### Sequential Workflow (Ordered)
**Context:** Used in `WorkflowsContent.jsx`.
**Derivation:** `signingOrder` increments (1, 2, 3...), signaling the system to block subsequent signers until previous ones complete.
```json
"recipients": [
  { "email": "manager@example.com", "signingOrder": 1 },
  { "email": "director@example.com", "signingOrder": 2 },
  { "email": "ceo@example.com", "signingOrder": 3 }
]
```

## 6. Field Types

### JSON Field Definitions
**Context:** Used in `FieldTypesContent.jsx`.
**Derivation:** JSON representation of field objects in the API. Coordinates (`x`, `y`) and dimensions (`width`, `height`) map to the PDF page layout.

**Signature Field:**
```json
{ "type": "SIGNATURE", "recipientId": "uuid", "page": 1, "x": 100, "y": 200, "width": 200, "height": 50, "required": true }
```

**Initials Field:**
```json
{ "type": "INITIALS", "recipientId": "uuid", "page": 1, "x": 100, "y": 200, "width": 100, "height": 30, "required": true }
```

**Date Field:**
```json
{ "type": "DATE", "recipientId": "uuid", "page": 1, "x": 100, "y": 200, "width": 150, "height": 20, "required": false }
```

**Text Field:**
```json
{ "type": "TEXT", "recipientId": "uuid", "page": 1, "x": 100, "y": 200, "width": 200, "height": 50, "required": true, "label": "Full Name" }
```

## 7. Audit Trails

### Java Generation Logic (Backend)
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Example Java service code demonstrating how an audit trail might be generated and uploaded to S3 internally upon request completion.
```java
// Triggered when last recipient completes
if (allRecipientsCompleted) {
    AuditTrailDocument auditTrailDocument =
        auditTrailService.generateAuditTrailDocument(signatureRequest.getId());

    String auditKey = "audit-trails/" + signatureRequest.getId() + "/audit-trail.pdf";
    String auditUrl = storageService.uploadFile(
        auditTrailDocument.pdfBytes(),
        auditKey,
        "application/pdf"
    );

    signedDocument.setAuditTrailUrl(auditUrl);
}
```

### Timezone Resolution
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Java 8+ `java.time` API usage to offset a UTC timestamp to a local timezone derived from an IP address.
```java
// Format: ISO 8601 with offset (e.g. 2025-10-30T14:30:22-05:00)
value.atOffset(ZoneOffset.UTC)
     .toInstant()
     .atZone(targetZone) // Resolved from IP
     .format(ISO_OFFSET_FORMATTER);
```

### Stored PDF Retrieval
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Pattern for retrieving a document via a pre-stored S3 URL key.
```java
SignedDocument signedDoc = signedDocumentRepository.findBySignatureRequestId(requestId);
String auditUrl = signedDoc.getAuditTrailUrl();
InputStream pdfStream = storageService.getFile(auditUrl);
```

### PDF Download Headers
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Standard HTTP headers for triggering a file download.
```http
Content-Type: application/pdf
Content-Disposition: attachment; filename="audit-trail.pdf"
```

### Custom Fields Logic
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Java code showing how to inject custom data into the audit trail context map.
```java
// 1) Add to context
details.put("customField", "Custom Value");
// 2) Bind to template
setLabeledValue(document, "Custom Field Label", context.details().get("customField"));
```

### Troubleshooting Commands
**Context:** Used in `AuditTrailContent.jsx`.
**Derivation:** Shell and SQL commands for debugging.

**List Templates:**
```bash
ls -la src/main/resources/templates/audit-trail/
```

**Verify DB Data:**
```sql
SELECT email, status, completed_at FROM recipients;
```

**Check Timezone:**
```java
ZoneId.of("America/New_York")
```

## 8. Webhooks & Security

### HMAC Signature Generation
**Context:** Used in `WebhooksContent.jsx`.
**Derivation:** Standard HMAC-SHA256 signature generation to verify payload integrity (Node.js & Python).
```javascript
const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
```
```python
expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
```

## 9. API Keys

### Key Creation Responses
**Context:** Used in `ApiKeysContent.jsx`.
**Derivation:** Example successful responses (HTTP 201) when creating keys via the Enterprise API.

**Sandbox Key:**
```json
{ "code": 201, "statusText": "Created", "message": "API key created successfully...", "data": { "id": "d6a776a3-f1d9-4a79-b1c6-be1e4bd8d78f", "apiKey": "csk_sandbox_Mdi9ewW3Ch81P6...", "keyPrefix": "csk_sandbox_Mdi9ewW3Ch81P6-V", "name": "Testing Purposes Only", "environment": "SANDBOX" } }
```

**Production Key:**
```json
{ "code": 201, "statusText": "Created", "message": "API key created successfully...", "data": { "id": "31b33a08-9ac8-4532-8342-e1111891d1cd", "apiKey": "csk_live_dHQof7Yo89rwMlWR...", "keyPrefix": "csk_live_dHQof7Yo89rwMlWR", "name": "Live Production Key", "environment": "PRODUCTION" } }
```

### Identity Creation
**Context:** Used in `IdentitiesContent.jsx`.
**Derivation:** Payload to create a machine identity with specific permissions.
```json
{ "name": "Document Processing Service", "permissions": ["SIGNATURE_REQUEST_CREATE"], "expiresAt": "2025-12-31T23:59:59Z" }
```

## 10. Sandbox

### Client Initialization
**Context:** Used in `SandboxContent.jsx`.
**Derivation:** Example JS client configuration showing how to point to the sandbox URL.
```javascript
// Initialize Sandbox Client
const sandboxClient = new CovoSignClient({
  baseUrl: 'https://api-sandbox.covosign.com',
  apiKey: 'csk_sandbox_...'
});
```

## 11. Rate Limits

### Response Headers
**Context:** Used in `RateLimitsContent.jsx`.
**Derivation:** Headers returned in every response to indicate current rate limit status.
```http
X-RateLimit-Limit
X-RateLimit-Remaining
X-RateLimit-Reset
```

## 12. Correlation IDs

### Header Usage
**Context:** Used in `CorrelationIdsContent.jsx`.
**Derivation:** Standard header for tracing.
```http
X-Correlation-ID: req_custom_123
```

## 13. Guides (Static Implementation)

### Environment Setup (.env)
**Context:** Used in `GuidesContent.jsx` (Step 0).
**Derivation:** Variable definitions required for the SDK/Client to function.
```bash
# CovoSign API Configuration
API_KEY=your_api_key_here
BASE_URL=https://api-staging.covosign.com/api/v1/enterprise
WEBHOOK_SECRET=your_webhook_secret_here
```

### Step 1: Create Request
**Context:** Used in `GuidesContent.jsx`.
**Derivation:** POST `signature_requests` request and response.

**Request:**
```json
{ "title": "NDA Agreement", "delivery_mode": "email" }
```

**Response:**
```json
{ "data": { "id": "req_123456", "status": "DRAFT", "title": "NDA" } }
```

### Step 2: Add Signer
**Context:** Used in `GuidesContent.jsx`.
**Derivation:** POST `recipients` request and response.

**Request:**
```json
{ "email": "alice@example.com", "name": "Alice", "role": "SIGNER", "signingOrder": 1 }
```

**Response:**
```json
{ "data": { "id": "rcp_987", "status": "PENDING" } }
```

### Step 3: Add Fields
**Context:** Used in `GuidesContent.jsx`.
**Derivation:** POST `fields` request and response.

**Request:**
```json
{ "recipientId": "rcp_987", "type": "SIGNATURE", "page": 1, "x": 100, "y": 200 }
```

**Response:**
```json
{ "data": { "id": "fld_456", "type": "SIGNATURE" } }
```

### Step 4: Activate Request
**Context:** Used in `GuidesContent.jsx`.
**Derivation:** POST `send` response.

**Response:**
```json
{ "data": { "id": "req_123456", "status": "ONGOING" } }
```
