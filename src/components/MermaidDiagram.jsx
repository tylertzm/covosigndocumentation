import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidDiagram = ({ chart, className = "" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const renderDiagram = async () => {
      if (!elementRef.current || !chart) return;

      // Unique ID for this specific render to avoid collisions
      const uniqueId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "loose",
          themeVariables: {
            primaryColor: "#3b82f6",
            primaryTextColor: "#1e293b",
            primaryBorderColor: "#cbd5e1",
            lineColor: "#64748b",
            secondaryColor: "#f1f5f9",
            tertiaryColor: "#ffffff",
            background: "#ffffff",
            mainBkg: "#ffffff",
            secondBkg: "#f8fafc",
            border1: "#e2e8f0",
            border2: "#cbd5e1",
            fontFamily: "inherit",
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: false, // Keep false to avoid CSS conflicts
            curve: "basis",
          },
        });

        // Use the new render API
        const { svg } = await mermaid.render(uniqueId, chart);

        if (isMounted && elementRef.current) {
          elementRef.current.innerHTML = svg;
          // Ensure SVG takes full width but respects aspect ratio
          const svgElement = elementRef.current.querySelector('svg');
          if (svgElement) {
            // Get the natural width from the viewBox if possible to prevent over-zooming
            const viewBox = svgElement.getAttribute('viewBox');
            if (viewBox) {
              const [, , width] = viewBox.split(' ').map(Number);
              if (width) {
                // Limit max width to the natural width of the chart, 
                // but ensure it doesn't overflow the container (100%)
                svgElement.style.maxWidth = `${width}px`;
              }
            } else {
              // Fallback if no viewBox
              svgElement.style.maxWidth = '100%';
            }

            svgElement.style.height = 'auto';
            svgElement.style.width = '100%';
            svgElement.removeAttribute('height');
          }
        }
      } catch (error) {
        console.error("Mermaid render error:", error);
        if (isMounted && elementRef.current) {
          elementRef.current.innerHTML = `
            <div class="text-red-600 text-sm p-4 border border-red-200 bg-red-50 rounded-lg">
              <p class="font-bold mb-1">Diagram Error</p>
              <pre class="whitespace-pre-wrap font-mono text-xs">${error.message}</pre>
            </div>`;
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      ref={elementRef}
      className={`mermaid-diagram flex justify-center items-center overflow-x-auto py-4 ${className}`}
    />
  );
};

export default MermaidDiagram;
