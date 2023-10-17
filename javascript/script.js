// JavaScript function to show the selected tab

function showTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove active class from all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Show the selected tab content and add active class to the tab
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = "block";
        var activeTab = document.querySelector(".tab.active");
        if (activeTab) {
            activeTab.classList.remove("active");
        }
        var clickedTab = document.querySelector(
            ".tab[onclick=\"showTab('" + tabId + "')\"]"
        );
        if (clickedTab) {
            clickedTab.classList.add("active");
        }
    }
}