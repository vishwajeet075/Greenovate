document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".custom-button");
    const metrics = {
        industry: {
            metric1: { value: "85-90%", desc: "Capture Efficiency", detail: "Tube CC's capture efficiency directly from the emission streams", arrow: "Images/arrow.png" },
            metric2: { value: "80-85%", desc: "Conversion Rate", detail: "Converted to liquid Carbon Dioxide", arrow: "Images/arrow.png" },
            metric3: { value: "30%", desc: "Reduction in capital cost", detail: "No installation cost, and much lower regeneration energy requirements", arrow: "Images/arrow_down.png" }
        },
        people: {
            metric1: { value: "95%", desc: "Air Quality Improvement", detail: "Significant reduction in workplace air pollution ensuring healthier breathing environments for workers.", arrow: "Images/arrow.png" },
            metric2: { value: "70%", desc: "Health Risk Reduction", detail: "Decreases exposure to harmful emissions, reducing health risks for employees.", arrow: "Images/arrow_down.png" },
            metric3: { value: "50%", desc: "Increased Productivity", detail: "Healthier air leads to better overall employee well-being and enhanced productivity.", arrow: "Images/arrow.png" }
        },
        planet: {
            metric1: { value: "60%", desc: "Reduction in Greenhouse Gases", detail: "Effective carbon capture significantly lowers overall greenhouse gas emissions.", arrow: "Images/arrow_down.png" },
            metric2: { value: "80%", desc: "Resource Efficiency", detail: "Optimize the use of natural resources by repurposing captured carbon.", arrow: "Images/arrow.png" },
            metric3: { value: "90%", desc: "Sustainable impact", detail: "Contributes to long-term environmental sustainability and combats climate change.", arrow: "Images/arrow.png" }
        }
    };

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const selected = this.id.split('-')[0];

            document.getElementById("metric-1-value").innerHTML = metrics[selected].metric1.value + `<img id="metric-1-arrow" src="${metrics[selected].metric1.arrow}" alt="" style="width: 61px; height: 61px; margin-left: 15px;">`;
            document.getElementById("metric-1-desc").textContent = metrics[selected].metric1.desc;
            document.getElementById("metric-1-detail").textContent = metrics[selected].metric1.detail;

            document.getElementById("metric-2-value").innerHTML = metrics[selected].metric2.value + `<img id="metric-2-arrow" src="${metrics[selected].metric2.arrow}" alt="" style="width: 61px; height: 61px; margin-left: 15px;">`;
            document.getElementById("metric-2-desc").textContent = metrics[selected].metric2.desc;
            document.getElementById("metric-2-detail").textContent = metrics[selected].metric2.detail;

            document.getElementById("metric-3-value").innerHTML = metrics[selected].metric3.value + `<img id="metric-3-arrow" src="${metrics[selected].metric3.arrow}" alt="" style="width: 61px; height: 61px; margin-left: 15px;">`;
            document.getElementById("metric-3-desc").textContent = metrics[selected].metric3.desc;
            document.getElementById("metric-3-detail").textContent = metrics[selected].metric3.detail;
        });
    });
});




function toggleMenu() {
    var navbarDropdown = document.getElementById("navbar-dropdown");
    var menuIcon = document.querySelector(".menu-icon");
    var mainContent = document.querySelector("main");

    if (navbarDropdown.style.display === "block") {
        navbarDropdown.style.display = "none";
        menuIcon.innerHTML = "&#9776;";
        mainContent.style.marginTop = "0"; // Reset margin
    } else {
        navbarDropdown.style.display = "block";
        menuIcon.innerHTML = "&#10006;";
        mainContent.style.marginTop = `${navbarDropdown.clientHeight}px`; // Adjust margin based on dropdown height
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const underline = document.querySelector('.underline');
    const navItems = document.querySelectorAll('.navbar-menu ul li a:not(.contact-button)');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const itemRect = item.getBoundingClientRect();
            const navbarRect = navbarMenu.getBoundingClientRect();
            underline.style.width = `${itemRect.width}px`;
            underline.style.left = `${itemRect.left - navbarRect.left}px`;
        });

        item.addEventListener('mouseleave', function() {
            underline.style.width = '0';
        });

        item.addEventListener('click', function() {
            const itemRect = item.getBoundingClientRect();
            const navbarRect = navbarMenu.getBoundingClientRect();
            underline.style.width = `${itemRect.width}px`;
            underline.style.left = `${itemRect.left - navbarRect.left}px`;
        });
    });
});
