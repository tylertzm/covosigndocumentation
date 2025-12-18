import React from "react";
import MermaidDiagram from "../components/MermaidDiagram";

const StatusPage = () => (
  <article className="flex-1 min-w-0 animate-in fade-in duration-300 pb-20">
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
        Core Concepts
      </div>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Signature Statuses
      </h1>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800">
          When you send a document for signing, it goes through different
          stages, like 'draft', 'in progress', 'completed'. Each person signing
          also has their own status. Knowing these statuses helps you track
          where things are in the process, like checking if someone has signed
          yet or if it's done.
        </p>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        The signature request lifecycle involves two parallel state machines:
        one for the <strong>Request</strong> itself, and one for each individual{" "}
        <strong>Recipient</strong>.
      </p>
    </div>

    <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
      <h3 className="font-bold text-slate-800 mb-4 text-sm">
        Request Status Flow
      </h3>
      <p className="text-xs text-slate-600 mb-3">
        Request moves from draft to in-progress when sent, and completes when
        all recipients have signed.
      </p>
      <MermaidDiagram
        chart={`flowchart LR
    A[DRAFT] --> B[IN_PROGRESS]
    B --> C[COMPLETED]
    A --> D[CANCELLED/EXPIRED]
    B --> D
    style A fill:#e2e8f0
    style B fill:#dbeafe
    style C fill:#dcfce7
    style D fill:#fee2e2`}
        className="mb-4"
      />
    </div>

    <section id="status-definitions" className="mb-16 scroll-mt-32">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Status Definitions</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            Draft
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            When a signature request is in <strong>Draft</strong> status, it means the document has been created but hasn't been sent out for signatures yet. This is the initial phase where senders can still make changes to the document, add or remove recipients, and configure signing options. For senders, this status allows full editing capabilities— they can modify the document content, adjust field placements, and update recipient information. Recipients don't see draft requests yet, as they haven't been notified. This status ensures that everything is properly set up before the request becomes active.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            In Progress
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            The <strong>In Progress</strong> status indicates that the signature request has been sent to recipients and is actively being worked on. At least one recipient has received the notification, and the signing process is underway. For senders, this means they can monitor progress, view who has signed, and see which recipients are still pending. They can also cancel the request if needed or create a duplicate for future use. Recipients in this status have different experiences based on their role—if they're the active signer, they can view and sign the document; others can only view it. This status represents the core workflow phase where collaboration happens.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Done
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>Done</strong> status signifies that the signature request has been fully completed, with all required signatures collected and the document finalized. This is the successful end state of the workflow. For senders, it means they can view the completed document, download it, access the audit trail to see the full signing history, and create duplicates for similar future requests. Recipients can also view and download the signed document, and access the audit trail to verify the signing process. This status provides closure and access to the final signed document for all parties involved.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
            Canceled
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            When a signature request is <strong>Canceled</strong>, it means the sender has manually stopped the process before completion. This could happen for various reasons, such as changes in requirements or errors in the original setup. For senders, canceled requests can still be viewed and duplicated if they want to restart the process with modifications. Recipients can only view the canceled request but cannot take any signing actions. This status preserves the request history while preventing further progress, allowing senders to learn from and potentially restart similar workflows.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            Expired
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>Expired</strong> status occurs when a signature request reaches its deadline without being completed. This happens automatically when the expiration date set by the sender is reached, and not all required signatures have been collected. For senders, expired requests can be viewed and duplicated to create new requests with extended deadlines or different configurations. Recipients can only view expired requests, as the signing window has closed. This status helps enforce time-sensitive workflows and provides a clear indication that the original request timeline was not met, prompting senders to take follow-up actions if needed.
          </p>
        </div>
      </div>
    </section>

    <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
      Standard Lifecycle
    </h2>
    <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pb-12">
      {[
        {
          phase: "Creation",
          action: "User creates request",
          endpoint: "POST /signature-requests",
          statusChange: [
            {
              label: "Request Status",
              from: null,
              to: "DRAFT",
              color: "slate",
            },
            {
              label: "Recipient Status",
              from: null,
              to: "PENDING",
              color: "slate",
            },
          ],
          description:
            "The request is initialized. Documents are uploaded. Recipients are created but not yet notified.",
        },
        {
          phase: "Processing",
          action: "User sends request",
          endpoint: "POST /send",
          statusChange: [
            {
              label: "Request Status",
              from: "DRAFT",
              to: "IN_PROGRESS",
              color: "blue",
            },
          ],
          description: "Emails sent. Status changes from Draft to In Progress.",
        },
        {
          phase: "Completion",
          action: "All recipients signed",
          endpoint: "System Event",
          statusChange: [
            {
              label: "Request Status",
              from: "IN_PROGRESS",
              to: "COMPLETED",
              color: "emerald",
            },
          ],
          description: "All parties have signed. Audit trail finalized.",
        },
      ].map((step, idx) => (
        <div key={idx} className="relative pl-8">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300"></div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1 block">
                {step.phase} Phase
              </span>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                {step.action}
              </h3>
              <code className="text-xs font-mono text-green-600 mt-1 block bg-blue-50 w-fit px-2 py-0.5 rounded">
                {step.endpoint}
              </code>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <div className="space-y-3">
                {step.statusChange.map((change, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-3 text-sm">
                    <span className="font-semibold text-slate-700 w-32 shrink-0">
                      {change.label}
                    </span>
                    <div className="flex items-center gap-2">
                      {change.from && (
                        <>
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-200 text-slate-600">
                            {change.from}
                          </span>
                        </>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${change.color === "slate" ? "bg-slate-200 text-slate-700" : ""} ${change.color === "blue" ? "bg-green-100 text-green-700" : ""} ${change.color === "emerald" ? "bg-green-100 text-green-700" : ""}`}
                      >
                        {change.to}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-600 leading-6 text-sm">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    <hr className="my-12 border-slate-100" />

    <section id="req-management">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Request Management Rules
      </h2>
      <p className="text-slate-600 mb-8">
        Allowed actions based on the current status of the request.
      </p>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              Sender Actions (Out-Box)
            </h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Allowed Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold">Draft</td>
                  <td className="px-4 py-3 text-slate-600">
                    Edit, Duplicate, Delete
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    In Progress
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    View, Cancel, Duplicate
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Done
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    View, Duplicate, Download, Audit Trail
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Canceled
                  </td>
                  <td className="px-4 py-3 text-slate-600">View, Duplicate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Expired
                  </td>
                  <td className="px-4 py-3 text-slate-600">View, Duplicate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              Recipient Actions (In-Box)
            </h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Allowed Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    In Progress
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    View & Sign (Active), View (Others)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Done
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    View, Download, Audit Trail
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Canceled
                  </td>
                  <td className="px-4 py-3 text-slate-600">View Only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Expired
                  </td>
                  <td className="px-4 py-3 text-slate-600">View Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-slate-900 mb-4">Action Details</h3>
      <div className="space-y-4">
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            Duplicate Request
          </h4>
          <p className="text-sm text-slate-600">
            Generates a copy of the document with the same recipients and
            pre-defined fields. Renames to "Duplicate of [Title]" and redirects
            to Draft status. Completed fields are NOT copied.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            Send Reminder
          </h4>
          <p className="text-sm text-slate-600">
            Manually triggers a reminder email. If a signing order exists, only
            the <strong>Current Active Signer</strong> receives it. Otherwise,
            all unsigned recipients receive it.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            Audit Trail
          </h4>
          <p className="text-sm text-slate-600">
            Only available for "Done" documents. Generates a PDF containing
            request details and a chronological history of all actions (viewed,
            signed, etc.) by every party.
          </p>
        </div>
      </div>
    </section>
  </article>
);

export default StatusPage;
