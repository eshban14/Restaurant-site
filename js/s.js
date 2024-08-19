

// header



  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // Change 50 to the scroll position you prefer
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });


 
  // hide preloader when the page is fully loaded
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});











document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".btn-category");
    const filterItems = document.querySelectorAll(".filter-item");
    const categorySection = document.querySelector("#categoryFilter");

    // Function to show items with animation
    function showItems() {
        filterItems.forEach(item => {
            item.classList.add("show");
        });
    }

    // Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showItems();
                observer.unobserve(categorySection); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.1 });

    observer.observe(categorySection);

    // Filter buttons click event
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = this.getAttribute("data-filter");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            filterItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});




// category

// Optional: You can add more animations or event listeners if needed
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        item.style.transform = 'translateY(-15px)';
    });
    item.addEventListener('mouseout', function () {
        item.style.transform = 'translateY(0)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animation has run
            }
        });
    }, {
        threshold: 0.1 // Adjust the threshold to determine when animation starts
    });

    menuItems.forEach(item => {
        observer.observe(item);
    });
});




// sevices

document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll(".service-box");

    // Function to add animation class
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }

    // Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.2 });

    // Observe each service box
    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
});



// about us 


document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            const readMoreBtn = this.querySelector('.read-more-btn');
            readMoreBtn.style.opacity = '1';
            readMoreBtn.style.width = '80%';
            readMoreBtn.style.visibility = 'visible';
        });

        card.addEventListener('mouseout', function() {
            const readMoreBtn = this.querySelector('.read-more-btn');
            readMoreBtn.style.opacity = '0';
            readMoreBtn.style.width = '0';
            readMoreBtn.style.visibility = 'hidden';
        });
    });
});



// dishes



document.addEventListener("DOMContentLoaded", function() {
    const dishItems = document.querySelectorAll('.dish-item');

    function animateOnScroll() {
        dishItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call on load
});


// chefs


document.addEventListener("DOMContentLoaded", function() {
    const chefs = document.querySelectorAll(".chef-profile");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function scrollHandler() {
        chefs.forEach(chef => {
            if (isElementInViewport(chef)) {
                chef.classList.add("chef-visible");
            }
        });
    }

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // Check on load
});


// offer

document.addEventListener("DOMContentLoaded", function() {
    const promoSection = document.querySelector('.promo-section');
    const discountBadge = document.querySelector('.discount-badge');
    const mainImage = document.querySelector('.promotion-image-main');
    const topLeftImage = document.querySelector('.top-left');
    const bottomLeftImage = document.querySelector('.bottom-left');
    const textContent = document.querySelector('.promo-col-text');

    window.addEventListener('scroll', function() {
        const sectionTop = promoSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // Adjust the threshold as needed
            promoSection.classList.add('scrolled');
            discountBadge.classList.add('animate__animated', 'animate__slideInDown', 'animate__zoomIn');
            mainImage.classList.add('animate__animated', 'animate__slideInUp');
            topLeftImage.classList.add('animate__animated', 'animate__slideInDown');
            bottomLeftImage.classList.add('animate__animated', 'animate__slideInRight');
            textContent.classList.add('animate__animated', 'animate__slideInLeft');
        }
    });
});
