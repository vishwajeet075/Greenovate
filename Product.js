document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".custom-button");
    const slider = document.querySelector(".slider");
    const metrics = {
    industry: {
    metric1: { value: "85-90%", desc: "Capture Efficiency", detail: "Tube CC's capture efficiency directly from the emission streams" },
    metric2: { value: "80-85%", desc: "Conversion Rate", detail: "Converted to liquid Carbon Dioxide" },
    metric3: { value: "30%", desc: "Reduction in capital cost", detail: "No installation cost, and much lower regeneration energy requirements" }
    },
    people: {
    metric1: { value: "95%", desc: "Air Quality Improvement", detail: "Significant reduction in workplace air pollution ensuring healthier breathing environments for workers." },
    metric2: { value: "70%", desc: "Health Risk Reduction", detail: "Decreases exposure to harmful emissions , reducing health risks for employees." },
    metric3: { value: "50%", desc: "Increased Productivity", detail: "Healthier air leads to bettr overall employee well-being and enhanced productivity." }
    },
    planet: {
    metric1: { value: "60%", desc: "Reduction in Greenhouse Gases", detail: "Effective carbon capture significantly lowers overall greenhouse gas emissions." },
    metric2: { value: "80%", desc: "Resource Efficiency", detail: "Optimize the use of natural resources by repurposing captured carbon." },
    metric3: { value: "90%", desc: "Sustainable impact", detail: "Contributes to long-term enivronmental sustainability and combats climate change ef" }
    }
    };
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Move the slider
            slider.style.transform = `translateX(${index * 100}%)`;

            const selected = this.id.split('-')[0];
    
            document.getElementById("metric-1-value").textContent = metrics[selected].metric1.value;
            document.getElementById("metric-1-desc").textContent = metrics[selected].metric1.desc;
            document.getElementById("metric-1-detail").textContent = metrics[selected].metric1.detail;
    
            document.getElementById("metric-2-value").textContent = metrics[selected].metric2.value;
            document.getElementById("metric-2-desc").textContent = metrics[selected].metric2.desc;
            document.getElementById("metric-2-detail").textContent = metrics[selected].metric2.detail;
    
            document.getElementById("metric-3-value").textContent = metrics[selected].metric3.value;
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