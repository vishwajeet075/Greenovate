function toggleMenu() {
    var navbarDropdown = document.getElementById("navbar-dropdown");
    var menuIcon = document.querySelector(".menu-icon");
    
    menuIcon.classList.toggle("open");
    
    if (navbarDropdown.style.display === "block") {
        navbarDropdown.style.display = "none";
    } else {
        navbarDropdown.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const underline = document.querySelector('.underline');
    const navItems = document.querySelectorAll('.navbar-menu ul li a:not(.contact-button)');
    const dropdownMenu = document.querySelector('.navbar-dropdown');
    const dropdownUnderline = document.querySelector('.underline-dropdown');
    const dropdownNavItems = document.querySelectorAll('.navbar-dropdown nav ul li a');

    const currentPage = window.location.pathname.split('/').pop();

    function setUnderline(item, underlineElement) {
        const itemRect = item.getBoundingClientRect();
        const parentRect = item.closest('nav').getBoundingClientRect();
        underlineElement.style.width = `${itemRect.width}px`;
        underlineElement.style.left = `${itemRect.left - parentRect.left}px`;
    }

    const currentNavItem = Array.from(navItems).find(item => {
        const itemPath = item.getAttribute('href').split('/').pop();
        return itemPath === currentPage || (currentPage === '' && itemPath === '#about');
    });

    const currentDropdownNavItem = Array.from(dropdownNavItems).find(item => {
        const itemPath = item.getAttribute('href').split('/').pop();
        return itemPath === currentPage || (currentPage === '' && itemPath === '#about');
    });

    if (currentNavItem) {
        setUnderline(currentNavItem, underline);
    } else if (currentDropdownNavItem) {
        setUnderline(currentDropdownNavItem, dropdownUnderline);
    }
    
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            setUnderline(item, underline);
        });

        item.addEventListener('mouseleave', function() {
            if (currentNavItem) {
                setUnderline(currentNavItem, underline);
            } else {
                underline.style.width = '0';
            }
        });

        item.addEventListener('click', function() {
            setUnderline(item, underline);
            // Do not prevent default behavior to ensure the page navigates
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('open');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');
  
    openPopupBtn.addEventListener('click', () => {
      popupOverlay.classList.add('active');
    });
  
    closePopupBtn.addEventListener('click', () => {
      popupOverlay.classList.remove('active');
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.classList.remove('active');
      }
    });
  });
  
  
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('name', this.name.value);
    formData.append('email', this.email.value);
    formData.append('role', this.role.value);
    formData.append('qualification', this.qualification.value);
    formData.append('location', this.location.value);
    formData.append('coverLetter', this.coverLetter.value);
    
    // Append the file
    const cvFile = this.cv.files[0];
    if (cvFile) {
        formData.append('cv', cvFile, cvFile.name);
    }

    fetch('https://api.greenovate.in/submit-form-job-application', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('popupOverlay').style.display = 'none';
        this.reset(); 
        alert('Application submitted successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

