document.addEventListener('DOMContentLoaded', function() {

    // Render all Lucide icons
    lucide.createIcons();

    // --- Tabbed Interface Logic for info.html ---
    const tabsContainer = document.querySelector(".tabs");
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    // Only run tab logic if the tabs container exists on the page
    if (tabsContainer) {
        tabsContainer.addEventListener("click", function (e) {
            const clicked = e.target.closest(".tab-link");
            
            if (!clicked) return;

            // Remove active classes from all tabs and content
            tabLinks.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Activate the clicked tab
            clicked.classList.add("active");

            // Activate the corresponding content
            const tabId = clicked.dataset.tab;
            document.getElementById(tabId).classList.add("active");
        });
    }

});