import React from 'react';
import { Settings, FileText, UserPlus, PenTool, Send, ShieldAlert, Webhook } from 'lucide-react';

export const creationSteps = [
  {
    id: 0,
    title: "Configure Environment",
    icon: <Settings className="w-4 h-4" />,
    shortDesc: "Setup .env file",
    fileType: ".env",
    code: `# CovoSign API Configuration\nAPI_KEY=your_api_key_here\nBASE_URL=https://api-staging.covosign.com/api/v1/enterprise\nWEBHOOK_SECRET=your_webhook_secret_here`,
  },
  {
    id: 1,
    title: "Create Request",
    icon: <FileText className="w-4 h-4" />,
    shortDesc: "Init client & upload PDF",
    fileType: "Python",
    code: `import os\nimport requests\nfrom dotenv import load_dotenv\n\nload_dotenv()\nAPI_KEY = os.getenv("API_KEY")\nBASE_URL = os.getenv("BASE_URL")\n\ndef create_signature_request():\n    url = f"{BASE_URL}/signature-requests"\n    with open("test.pdf", "rb") as file:\n        files = {"documentFile": ("test.pdf", file, "application/pdf")}\n        payload = { "title": "Test Document", "delivery_mode": "email" }\n        response = requests.post(url, headers={"X-API-Key": API_KEY}, files=files, data=payload)\n        return response.json().get("data", {}).get("id")`,
  },
  {
    id: 2,
    title: "Add Signer",
    icon: <UserPlus className="w-4 h-4" />,
    shortDesc: "Define recipient",
    fileType: "Python",
    code: `def add_recipient(request_id):\n    url = f"{BASE_URL}/signature-requests/{request_id}/recipients"\n    payload = { "email": "tyler@example.com", "name": "Tyler Tan", "signingOrder": 1 }\n    response = requests.post(url, headers={"X-API-Key": API_KEY}, json=payload)\n    return response.json().get("data", {}).get("id")`,
  },
  {
    id: 3,
    title: "Add Fields",
    icon: <PenTool className="w-4 h-4" />,
    shortDesc: "Place inputs",
    fileType: "Python",
    code: `def add_signature_fields(req_id, recip_id):\n    url = f"{BASE_URL}/signature-requests/{req_id}/fields"\n    field = { "type": "SIGNATURE", "page": 1, "x": 100, "y": 200, "recipientId": recip_id }\n    requests.post(url, headers={"X-API-Key": API_KEY}, json=field)`,
  },
  {
    id: 4,
    title: "Activate",
    icon: <Send className="w-4 h-4" />,
    shortDesc: "Send request",
    fileType: "Python",
    code: `def send_signature_request(request_id):\n    url = f"{BASE_URL}/signature-requests/{request_id}/send"\n    response = requests.post(url, headers={"X-API-Key": API_KEY})\n    return response.json().get("code") == 200`,
  },
];

export const webhookSteps = [
  {
    id: 0,
    title: "Setup",
    icon: <Settings className="w-4 h-4" />,
    shortDesc: "Imports",
    fileType: "Python",
    code: `import os\nimport hmac\nimport hashlib\nfrom flask import Flask, request, jsonify\n\napp = Flask(__name__)\nWEBHOOK_SECRET = os.getenv('WEBHOOK_SECRET')`,
  },
  {
    id: 1,
    title: "Verify",
    icon: <ShieldAlert className="w-4 h-4" />,
    shortDesc: "HMAC Check",
    fileType: "Python",
    code: `def verify_signature(payload: bytes, signature: str, secret: str) -> bool:\n    if not secret: return True\n    expected = hmac.new(secret.encode('utf-8'), payload, hashlib.sha256).hexdigest()\n    return hmac.compare_digest(f"sha256={expected}", signature)`,
  },
  {
    id: 2,
    title: "Handle",
    icon: <Webhook className="w-4 h-4" />,
    shortDesc: "Route Logic",
    fileType: "Python",
    code: `@app.route('/webhook', methods=['POST'])\ndef webhook_handler():\n    payload = request.get_data()\n    signature = request.headers.get('X-CovoSign-Signature')\n    if not verify_signature(payload, signature, WEBHOOK_SECRET):\n        return jsonify({'error': 'Invalid signature'}), 401\n    \n    data = request.get_json()\n    # Process data['eventType']\n    return jsonify({'status': 'success'}), 200`,
  },
];
