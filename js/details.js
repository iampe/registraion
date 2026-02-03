// ============================================
// JavaScript for Course Details Page
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDetailsPage();
});

function initializeDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseSlug = urlParams.get('course');
    
    if (!courseSlug) {
        // Redirect to homepage if no course specified
        window.location.href = '../index.html';
        return;
    }
    
    const course = coursesData.find(c => c.slug === courseSlug);
    
    if (!course) {
        // Redirect if course not found
        window.location.href = '../index.html';
        return;
    }
    
    renderCourseDetails(course);
    renderFacultyDetails(course.faculty);
    renderDemoSection(course.demo);
    setupStickyPriceCard();
    animateSeatsCounter();
}

// ============================================
// Navigation
// ============================================




// ============================================
// Render Course Details
// ============================================
function renderCourseDetails(course) {
    // Update page title
    document.title = `${course.name} - Live Class | EduGlue`;
    
    // Update breadcrumb
    document.getElementById('courseBreadcrumb').textContent = course.name;
    
    // Update course title
    document.getElementById('courseTitle').textContent = course.name;
    
    // Update banner image
    const bannerImg = document.getElementById('courseBannerImg');
    bannerImg.src = course.bannerImage;
    bannerImg.alt = course.name;
    
    // Update discount percentage in strip
    const discountPercentElements = document.querySelectorAll('#discountPercent');
    discountPercentElements.forEach(el => {
        el.textContent = course.discountPercent;
    });
    
    // Render syllabus
    renderSyllabus(course.syllabus);
    
    // Render benefits
    renderBenefits(course.benefits);
    
    // Update pricing
    updatePricing(course);

    // ============================================
        // Update Payment QR Code
    // ============================================
    const qrImg = document.getElementById('paymentQr');

    if (course.qrCode) {
        qrImg.src = course.qrCode;
    } else {
        qrImg.src = "../images/default-qr.png"; // fallback safety
    }
    
    // Update registration link
    document.getElementById('registerBtn').href = course.registrationLink;
}

// ============================================
// Render Syllabus
// ============================================
function renderSyllabus(syllabus) {
    const syllabusContent = document.getElementById('syllabusContent');
    syllabusContent.innerHTML = '';
    
    for (const [topic, items] of Object.entries(syllabus)) {
        const topicSection = document.createElement('div');
        topicSection.innerHTML = `
            <h3>${topic}</h3>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        syllabusContent.appendChild(topicSection);
    }
}

// ============================================
// Render Faculty Details
// ============================================

function renderFacultyDetails(faculty) {
    const facultySection = document.getElementById('facultySection');

    if (!faculty) {
        facultySection.style.display = 'none';
        return;
    }

    document.getElementById('facultyName').textContent = faculty.name;
    document.getElementById('facultyExperience').textContent = faculty.experience;
    document.getElementById('facultyQualification').textContent = faculty.qualification;
    document.getElementById('facultyExpertise').textContent =
        faculty.expertise.join(', ');
}


// ============================================
// Render Faculty Demo Section
// ============================================
function renderDemoSection(demo) {
    const demoSection = document.getElementById('demoSection');

    if (!demo) {
        demoSection.style.display = 'none';
        return;
    }

    document.getElementById('demoDescription').textContent = demo.description;
    document.getElementById('demoPlaylistLink').href = demo.playlistUrl;
}



// ============================================
// Render Benefits
// ============================================
function renderBenefits(benefits) {
    const benefitsList = document.getElementById('benefitsList');
    benefitsList.innerHTML = '';
    
    const icons = ['✅', '📚', '🎯', '💡', '🏆', '📊', '🔥', '⭐'];
    
    benefits.forEach((benefit, index) => {
        const benefitItem = document.createElement('div');
        benefitItem.className = 'benefit-item';
        benefitItem.innerHTML = `
            <div class="benefit-icon">${icons[index % icons.length]}</div>
            <div class="benefit-text">${benefit}</div>
        `;
        benefitsList.appendChild(benefitItem);
    });
}

// ============================================
// Update Pricing Section
// ============================================
function updatePricing(course) {
    const savings = course.originalPrice - course.discountedPrice;
    
    // Update original price
    document.getElementById('originalPrice').textContent = `₹${course.originalPrice.toLocaleString('en-IN')}`;
    
    // Update current price
    document.getElementById('currentPrice').textContent = `₹${course.discountedPrice.toLocaleString('en-IN')}`;
    
    // Update savings text
    document.getElementById('savingsText').textContent = `You save ₹${savings.toLocaleString('en-IN')}`;
    
    // Update discount badge
    const discountBadgeLarge = document.getElementById('discountBadgeLarge');
    discountBadgeLarge.querySelector('.discount-percent').textContent = `${course.discountPercent}%`;
}

// ============================================
// Sticky Price Card
// ============================================
function setupStickyPriceCard() {
    const priceCard = document.querySelector('.price-card.sticky');
    
    if (!priceCard) return;
    
    // Add scroll event to enhance sticky effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            priceCard.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.24)';
        } else {
            // Scrolling up
            priceCard.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// Animate Seats Counter
// ============================================
function animateSeatsCounter() {
    const seatsElement = document.getElementById('seatsRemaining');
    
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
