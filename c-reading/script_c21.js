document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".ira-summary-table");
    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(function (row) {
        // Start collapsed by default
        row.classList.add("ira-row-collapsed");

        // Insert toggle arrow in Q column if not present
        const qCell = row.querySelector(".ira-col-q");
        if (qCell) {
            const toggleIcon = document.createElement("span");
            toggleIcon.className = "ira-toggle-icon";
            toggleIcon.innerHTML = "▼";
            qCell.appendChild(toggleIcon);
        }

        // Add clickable header bar behavior
        row.addEventListener("click", function (e) {
            // Ignore text selection
            if (window.getSelection && window.getSelection().toString().length > 0) return;
            
            if (row.classList.contains("ira-row-collapsed")) {
                row.classList.remove("ira-row-collapsed");
                row.classList.add("ira-row-expanded");
            } else {
                row.classList.remove("ira-row-expanded");
                row.classList.add("ira-row-collapsed");
            }
        });
    });
});
