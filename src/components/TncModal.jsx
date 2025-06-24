"use client";
import { useEffect, useRef, useState } from "react";
import Tnc, { handleDownload } from "@/components/tnc";
import html2pdf from "html2pdf.js"

export default function TncModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className="text-sm font-medium underline text-gray-600 dark:text-gray-400 hover:text-gray-900 cursor-pointer"
      >
        Terms and Conditions
      </span>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-gray-900 w-[90vw] max-w-3xl max-h-[90vh] p-4 md:p-6 rounded-lg shadow-lg overflow-y-auto"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              &times;
            </button>

            {/* Render Tnc directly inside the modalRef */}
            <div id="tnc-content">
              <Tnc />
            </div>

            <div className="flex flex-col gap-2 md:flex-row justify-between items-center mt-6">
              <button
                onClick={() => setOpen(false)}
                className="text-sm w-full md:w-auto px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const tncEl = modalRef.current?.querySelector(
                    "#tnc-content .prose"
                  );
                  if (tncEl) handleDownload(tncEl);
                }}
                className="text-sm w-full md:w-auto px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 dark:bg-white dark:text-gray-900"
              >
                Download Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
