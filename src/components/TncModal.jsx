"use client";
import { useEffect, useRef, useState } from "react";
import Tnc from "@/components/tnc";
import html2pdf from "html2pdf.js";
import { Button } from "@material-tailwind/react";

export default function TncModal() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsVisible(true);
    setTimeout(() => setOpen(true), 10); // Allow fade-in
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setIsVisible(false), 300); // Match with transition duration
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <span
        onClick={openModal}
        className="text-sm font-medium underline text-gray-600 dark:text-gray-400 hover:text-gray-900 cursor-pointer"
      >
        Terms and Conditions
      </span>

      {isVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={modalRef}
            className={`custom-scrollbar relative bg-white dark:bg-gray-900 w-[90vw] max-w-3xl max-h-[90vh] p-4 md:p-6 rounded-lg shadow-lg overflow-y-auto transform transition-all duration-200 ease-out ${
              open ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              &times;
            </button>

            <div id="tnc-content">
              <Tnc />
            </div>

            <div className="flex flex-col gap-2 md:flex-row justify-between items-center mt-6">
              <button
                onClick={closeModal}
                className="text-sm w-full md:w-auto px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Close
              </button>
              <Button
                onClick={() => {
                  const tncEl = modalRef.current?.querySelector("#tnc-content .prose");
                  if (!tncEl) return;

                  const clonedNode = tncEl.cloneNode(true);
                  const wrapper = document.createElement("div");
                  wrapper.style.color = "#000";
                  wrapper.style.backgroundColor = "#fff";
                  wrapper.style.padding = "1rem";
                  wrapper.style.width = "8.5in";
                  wrapper.style.fontSize = "14px";
                  wrapper.appendChild(clonedNode);
                  document.body.appendChild(wrapper);

                  html2pdf()
                    .from(wrapper)
                    .set({
                      margin: 0.5,
                      filename: "Terms-and-Conditions.pdf",
                      image: { type: "jpeg", quality: 0.98 },
                      html2canvas: { scale: 2 },
                      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                    })
                    .save()
                    .then(() => {
                      document.body.removeChild(wrapper);
                    });
                }}
                className="dark:bg-white dark:text-gray-900 bg-gray-900 text-white md:w-auto w-full"
              >
                Download Terms
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
