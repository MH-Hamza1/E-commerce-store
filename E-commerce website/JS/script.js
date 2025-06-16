// Cart functionality
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let count = 0; // Initial cart count

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        count++;
        cartCount.textContent = count;

        // Animation effect
        this.innerHTML = '<i class="fas fa-check"></i>';
        this.style.backgroundColor = '#4CAF50';

        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-plus"></i>';
            this.style.backgroundColor = 'var(--accent-purple)';
        }, 1000);

        // Add item to cart logic would go here
    });
});

// Product overlay buttons
const favButtons = document.querySelectorAll('.fav-btn');
favButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.style.color = '#ff0266';
        // setTimeout(() => {
        //     this.style.color = '';
        // }, 300);

        const icon = this.querySelector('i').className;

        if (icon.includes('heart')) {
            this.querySelector('i').classList.toggle('fas');
            this.querySelector('i').classList.toggle('far');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input');

    if (emailInput.value && emailInput.value.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Category card hover effect
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

const header = document.querySelector('[data-header]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');

navToggleBtn.addEventListener('click', function () {
    header.classList.toggle('nav-active');
    this.classList.toggle('active');
    // this.style.transition = 'all 0.5s ease-in-out';
});

// Close navbar when clicking outside on mobile
document.addEventListener('click', (event) => {
  if (window.innerWidth < 800 &&
    !event.target.closest('[data-nav-toggle-btn]') &&
    !event.target.closest('[data-navbar]')) {
    header.classList.remove('nav-active');
    navToggleBtn.classList.remove('active');
  }
});