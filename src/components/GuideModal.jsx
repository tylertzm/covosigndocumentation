import React, { useState } from "react";
import { Terminal, X } from "lucide-react";
import CodeBlock from "./CodeBlock";

const GuideModal = ({ onClose, guideSteps, title }) => {
  const [activeStep, setActiveStep] = useState(0);
  const activeStepData = guideSteps.find((step) => step.id === activeStep);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-6xl h-[85vh] flex rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-700 bg-[#1e2329]">
        <div className="w-80 flex flex-col border-r border-slate-700/50 bg-[#252a30]">
          <div className="p-5 border-b border-slate-700/50 bg-[#252a30]">
            <h2 className="text-white font-semibold text-lg">{title}</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {guideSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-3 rounded-lg cursor-pointer transition-all border ${
                  activeStep === step.id
                    ? "bg-blue-600/10 border-blue-500/50 text-white"
                    : "bg-[#2d333b] border-transparent text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      activeStep === step.id
                        ? "bg-green-500 text-white"
                        : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {step.id}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-xs text-slate-500">
                      {step.shortDesc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-700/50 text-center">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white text-sm"
            >
              Exit Guide
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-[#1e2329] relative">
          <div className="flex items-center justify-between px-6 h-14 border-b border-slate-700/50">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>{activeStepData.fileType}</span>
            </div>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-6 scrollbar-thin">
            <CodeBlock
              code={activeStepData.code}
              language={activeStepData.fileType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
