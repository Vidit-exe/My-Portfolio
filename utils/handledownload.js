import jsPDF from "jspdf";

export const handleDownload = (element) => {
  if (!element) return alert("Terms content not found.");

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  doc.html(element, {
    x: 40, // margin from left
    y: 40,
    width: 515, // A4 width = 595pt, minus some padding
    html2canvas: {
      scale: 1.2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 800, // this helps layout adjust properly
    },
    callback: function (doc) {
      doc.save("Terms-and-Conditions.pdf");
    },
  });
};
