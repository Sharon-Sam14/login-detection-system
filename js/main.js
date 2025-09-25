document.addEventListener('DOMContentLoaded', function() {

    // Render all Lucide icons on the page
    lucide.createIcons();

    // --- Tabbed Interface Logic ---
    // This code will find any tab component on any page and make it work
    const tabContainers = document.querySelectorAll(".tabs");

    tabContainers.forEach(container => {
        container.addEventListener("click", function (e) {
            const clicked = e.target.closest(".tab-link");
            
            if (!clicked) return;

            // Find the main parent container for the tabs and content
            const mainParent = clicked.closest('.main-content, .info-page');
            if (!mainParent) return;

            const tabLinks = container.querySelectorAll(".tab-link");
            const tabContents = mainParent.querySelectorAll(".tab-content");

            // Deactivate all tabs and content within this specific component
            tabLinks.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Activate the tab that was clicked
            clicked.classList.add("active");

            // Find and activate the corresponding content
            const tabId = clicked.dataset.tab;
            mainParent.querySelector("#" + tabId).classList.add("active");
        });
    });
});