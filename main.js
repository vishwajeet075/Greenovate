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
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('industryCarousel');
    const scrollWrapper = carousel.querySelector('.image-scroll-wrapper');
    const dots = carousel.querySelectorAll('.dot');
    const slides = carousel.querySelectorAll('.image-item');

    function updateActiveDot() {
        const scrollPosition = scrollWrapper.scrollLeft;
        const maxScroll = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;
        const scrollPercentage = scrollPosition / maxScroll;

        // Calculate which dot should be active
        const activeDotIndex = Math.min(Math.floor(scrollPercentage * dots.length), dots.length - 1);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }

    // Update dots on scroll
    scrollWrapper.addEventListener('scroll', updateActiveDot);

    // Initialize dots on page load
    updateActiveDot();

    // Make dots clickable
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const scrollAmount = (scrollWrapper.scrollWidth - scrollWrapper.clientWidth) * (index / (dots.length - 1));
            scrollWrapper.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
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
  
    const formData = {
      name: this.name.value,
      contact: this.contact.value,
      email: this.email.value,
      industry: this.industry.value,
      position: this.position.value,
      comment: this.comment.value
    };
  
    fetch('https://server.greenovate.in/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('popupOverlay').style.display = 'none';
        this.reset(); 
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  });


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData1 = {
      name: this.name.value,
      email: this.email.value,
     message: this.message.value
    };
  
    fetch('https://server.greenovate.in/submit-form-1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData1),
    })
    .then(response => response.json())
    .then(data => {
        this.reset(); 
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  });

  document.getElementById('learn-btn').addEventListener('click', function() {
    document.getElementById('target').scrollIntoView({ behavior: 'smooth' });
});
