// ============================================
// Main JavaScript for Homepage
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHomepage();
});

function initializeHomepage() {
    renderCourseCards();
    animateSeatsCounter();
    setupSmoothScroll();
}

// ============================================
// Render Course Cards
// ============================================
function renderCourseCards() {
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (!coursesGrid) return;
    
    coursesData.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    // Calculate savings
    const savings = course.originalPrice - course.discountedPrice;
    
    // Create card element
    const card = document.createElement('div');
    card.className = 'course-card';
    
    card.innerHTML = `
        <div class="course-image-wrapper">
            <img src="${course.image}" alt="${course.name}" class="course-image">
            <div class="discount-badge">${course.discountPercent}% OFF</div>
        </div>
        <div class="course-content">
            <h3 class="course-name">${course.name}</h3>
            <div class="price-section">
                <div class="price-row">
                    <span class="original-price-card">₹${course.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="current-price-card">₹${course.discountedPrice.toLocaleString('en-IN')}</span>
                </div>
                <div class="savings-badge">Save ₹${savings.toLocaleString('en-IN')}</div>
            </div>
            <a href="pages/course-details.html?course=${course.slug}" class="view-details-btn">
                View Details
            </a>
        </div>
    `;
    
    return card;
}

// ============================================
// Animate Seats Counter (FOMO element)
// ============================================
function animateSeatsCounter() {
    const seatsElement = document.getElementById('seats-left');
    
    if (!seatsElement) return;
    
    let currentSeats = 12;
    
    // Randomly decrease seats to create urgency
    setInterval(() => {
        if (currentSeats > 5 && Math.random() > 0.7) {
            currentSeats--;
            seatsElement.textContent = currentSeats;
            
            // Add flash animation
            seatsElement.style.transform = 'scale(1.2)';
            seatsElement.style.color = '#FF4757';
            
            setTimeout(() => {
                seatsElement.style.transform = 'scale(1)';
                seatsElement.style.color = '';
            }, 300);
        }
    }, 15000); // Check every 15 seconds
}

// ============================================
// Smooth Scroll for Navigation
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Global Navigation (All Pages)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav')?.classList.remove('show');
    });
});


// ============================================
// Utility Functions
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Calculate discount percentage
function calculateDiscount(original, discounted) {
    return Math.round(((original - discounted) / original) * 100);
}
