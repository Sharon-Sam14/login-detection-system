document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // --- REAL-TIME CLOCK ---
    const timeElement = document.getElementById('current-time');
    function updateTime() {
        if(timeElement) {
            timeElement.textContent = new Date().toLocaleString();
        }
    }
    updateTime();
    setInterval(updateTime, 1000);

    // --- TAB SWITCHING LOGIC ---
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            const targetContent = document.getElementById(tab.dataset.tab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // --- DYNAMIC LIVE FEED GENERATION ---
    const liveFeedContainer = document.getElementById('live-feed-container');
    const loginData = [
        { user: 'mike.chen', location: 'Moscow, Russia', time: '7:48:28 PM', risk: 95, status: 'BLOCKED' },
        { user: 'john.doe', location: 'Beijing, China', time: '7:47:00 PM', risk: 96, status: 'BLOCKED' },
        { user: 'user123', location: 'New York, USA', time: '7:45:37 PM', risk: 31, status: 'ALLOWED' },
        { user: 'admin', location: 'Tokyo, Japan', time: '7:40:11 PM', risk: 11, status: 'ALLOWED' },
        { user: 'user123', location: 'London, UK', time: '7:39:54 PM', risk: 56, status: 'FLAGGED' },
        { user: 'admin', location: 'Moscow, Russia', time: '7:39:37 PM', risk: 93, status: 'BLOCKED' },
        { user: 'john.doe', location: 'Sydney, Australia', time: '7:29:29 PM', risk: 5, status: 'ALLOWED' },
    ];

    function createLogItem(data) {
        let iconName, iconClass, riskClass;
        if (data.status === 'BLOCKED') {
            iconName = 'x-circle'; iconClass = 'icon-blocked'; riskClass = 'risk-high';
        } else if (data.status === 'FLAGGED') {
            iconName = 'alert-triangle'; iconClass = 'icon-flagged'; riskClass = 'risk-medium';
        } else {
            iconName = 'check-circle-2'; iconClass = 'icon-allowed'; riskClass = 'risk-low';
        }
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.innerHTML = `
            <i data-lucide="${iconName}" class="${iconClass}"></i>
            <div class="log-details">
                <p class="log-user">${data.user}</p>
                <p class="log-meta">
                    <i data-lucide="map-pin"></i> ${data.location} 
                    <i data-lucide="clock"></i> ${data.time}
                </p>
            </div>
            <div class="log-status">
                <span class="status-tag ${riskClass}">Risk: ${data.risk}%</span>
                <span class="status-tag status-${data.status.toLowerCase()}">${data.status}</span>
            </div>`;
        return logItem;
    }

    if (liveFeedContainer) {
        liveFeedContainer.innerHTML = '';
        loginData.forEach(item => {
            liveFeedContainer.appendChild(createLogItem(item));
        });
        lucide.createIcons();
    }
});