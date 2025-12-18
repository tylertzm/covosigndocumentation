import React from "react";
import CodeBlock from "../components/CodeBlock";
import MermaidDiagram from "../components/MermaidDiagram";

const FieldTypesContent = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        {" "}
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Signature Field Types
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          When you want someone to sign a document, you need to tell them where
          to put their signature or other info. These are called fields.
          CovoSign has different types like signature, initials, date, and text
          fields. It's like placing sticky notes on a paper saying 'Sign here'
          or 'Write your name here'. Each field has a position and size on the
          page.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        CovoSign supports four types of signature fields that can be added to
        documents.
      </p>
      <p className="text-slate-600 mb-8">
        Fields are interactive elements placed on PDF documents that collect
        specific types of input from signers. Each field type serves a different
        purpose in the signing workflow, from capturing legal signatures to
        collecting additional information. Fields are positioned using
        coordinates (x, y) and have defined dimensions (width, height), allowing
        precise placement on document pages.
      </p>
    </div>

    <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
      <h3 className="font-bold text-slate-800 mb-4 text-sm">
        Field Placement Example
      </h3>
      <p className="text-xs text-slate-600 mb-3">
        Fields are positioned using x,y coordinates from the top-left corner of
        the page, with width and height in points.
      </p>
      <MermaidDiagram
        chart={`flowchart TD
    A[Document Page] --> B[Signature Field<br/>x: 100, y: 200<br/>200x50]
    A --> C[Date Field<br/>x: 350, y: 200<br/>150x30]
    A --> D[Initials Field<br/>x: 100, y: 300<br/>100x30]
    A --> E[Text Field<br/>x: 350, y: 300<br/>200x30]
    style A fill:#f8fafc,stroke:#cbd5e1
    style B fill:#dcfce7,stroke:#22c55e
    style C fill:#dbeafe,stroke:#3b82f6
    style D fill:#fef3c7,stroke:#f59e0b
    style E fill:#fce7f3,stroke:#ec4899`}
        className="mb-4"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-green-200 border border-green-600 rounded"></div>
          <span>Signature</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-blue-200 border border-blue-600 rounded"></div>
          <span>Date</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-yellow-200 border border-yellow-600 rounded"></div>
          <span>Initials</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-pink-200 border border-pink-600 rounded"></div>
          <span>Text</span>
        </div>
      </div>
    </div>

    <div className="space-y-12">
      <section className="relative pl-8 border-l-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">SIGNATURE</h2>
        <p className="text-slate-600 mb-4">
          Captures a full handwritten signature or electronic signature.
        </p>
        <p className="text-sm text-slate-600 mb-4">
          The signature field is the core element of digital signing workflows.
          It accepts various input methods including mouse drawing, touch
          signatures on mobile devices, or typed signatures. The field
          automatically scales the signature to fit while maintaining
          proportions, ensuring professional appearance regardless of input
          method.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">
            Key Behavior
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Content scales proportionally to fit field dimensions</li>
            <li>Maintains aspect ratio</li>
            <li>Centered within the bounding box</li>
          </ul>
        </div>
        <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "type": "SIGNATURE", 
  "recipientId": "550e8400-e29b-41d4-a716-446655440000", 
  "page": 1, 
  "x": 100, 
  "y": 200, 
  "width": 200, 
  "height": 50,
  "name": "Signature_1"
}`}
          />
        </div>
      </section>
      <section className="relative pl-8 border-l-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">INITIAL</h2>
        <p className="text-slate-600 mb-4">Captures recipient's initials.</p>
        <p className="text-sm text-slate-600 mb-4">
          Initials fields are smaller signature elements often used for document
          authentication or acknowledgment. They provide a quicker signing
          option while still capturing the signer's identity. Like signature
          fields, they support various input methods and are commonly used in
          multi-page documents where full signatures aren't required on every
          page.
        </p>
        <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "type": "INITIAL", 
  "recipientId": "550e8400-e29b-41d4-a716-446655440000", 
  "page": 1, 
  "x": 100, 
  "y": 200, 
  "width": 100, 
  "height": 30,
  "name": "Initial_1"
}`}
          />
        </div>
      </section>
      <section className="relative pl-8 border-l-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">DATE</h2>
        <p className="text-slate-600 mb-4">
          Automatically populated with the date when signed (YYYY-MM-DD).
        </p>
        <p className="text-sm text-slate-600 mb-4">
          Date fields automatically record the exact timestamp when a signer
          completes their action. This provides chronological evidence of when
          each party signed the document. The date is formatted in ISO 8601
          standard (YYYY-MM-DD) and is automatically populated, preventing
          manual entry errors and ensuring accurate timestamping for legal
          purposes.
        </p>
        <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "type": "DATE", 
  "recipientId": "550e8400-e29b-41d4-a716-446655440000", 
  "page": 1, 
  "x": 100, 
  "y": 200, 
  "width": 150, 
  "height": 20,
  "name": "Date_1"
}`}
          />
        </div>
      </section>
      <section className="relative pl-8 border-l-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">TEXT</h2>
        <p className="text-slate-600 mb-4">
          Free-form text input from the recipient.
        </p>
        <p className="text-sm text-slate-600 mb-4">
          Text fields allow signers to enter custom information such as names,
          addresses, or comments. They can be configured with labels to guide
          users on what information to provide. Unlike signature fields, text
          fields accept typed input and can be set as required or optional
          depending on the document's needs.
        </p>
        <div className="bg-[#1e2329] rounded-lg p-4 text-white text-xs">
          <CodeBlock
            language="json"
            code={`{ 
  "type": "TEXT", 
  "recipientId": "550e8400-e29b-41d4-a716-446655440000", 
  "page": 1, 
  "x": 100, 
  "y": 200, 
  "width": 200, 
  "height": 50, 
  "name": "FullName",
  "defaultValue": "Enter full name"
}`}
          />
        </div>
      </section>
    </div>
  </article>
);

export default FieldTypesContent;
