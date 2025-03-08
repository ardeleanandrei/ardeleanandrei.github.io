function openPDF(pdfUrl) {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfViewer");
    iframe.src = pdfUrl;
    modal.style.display = "block";
}

function closePDF() {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfViewer");
    iframe.src = "";
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("pdfModal");
    if (event.target == modal) {
        closePDF();
    }
}
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePDF();
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const pdfUrl = 'CV_Ardelean_Andrei Ioan_en.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_Ardelean_Andrei Ioan_en.pdf';
    link.setAttribute('download', 'CV_Ardelean_Andrei Ioan_en.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});