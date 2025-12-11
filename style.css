// ===========================================
// Main Application - Modern Interactive Portfolio
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCustomCursor();
    initNavigation();
    initMenuToggle();
    initThemeSwitcher();
    initCardTilt();
    initScrollAnimations();
    initContactForm();
    initCurrentYear();
    initScrollProgress();
    initHoverEffects();
    initSmoothScrolling();
});

// ===========================================
// Custom Cursor
// ===========================================

function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        });
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .card, .grid-item, .menu-link');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorDot.style.width = '16px';
                cursorDot.style.height = '16px';
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.borderColor = 'var(--primary-color)';
                cursorOutline.style.opacity = '0.8';
            });
            
            element.addEventListener('mouseleave', () => {
                cursorDot.style.width = '8px';
                cursorDot.style.height = '8px';
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.borderColor = 'var(--primary-color)';
                cursorOutline.style.opacity = '0.5';
            });
        });
        
        // Click effect
        document.addEventListener('click', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 100);
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }
}

// ===========================================
// Navigation
// ===========================================

function initNavigation() {
    const nav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.transform = 'translateX(-50%) translateY(-20px)';
            nav.style.opacity = '0.9';
        } else {
            nav.style.transform = 'translateX(-50%) translateY(0)';
            nav.style.opacity = '1';
        }
    });
}

// ===========================================
// Menu Toggle
// ===========================================

function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    menuClose.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ===========================================
// Theme Switcher
// ===========================================

function initThemeSwitcher() {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeText = themeSwitch.querySelector('.theme-text');
    
    // Get saved theme or use default
    const savedTheme = localStorage.getItem('aseel-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeText(savedTheme);
    
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('aseel-theme', newTheme);
        updateThemeText(newTheme);
        
        // Add animation
        themeSwitch.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeSwitch.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateThemeText(theme) {
        themeText.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
}

// ===========================================
// Card Tilt Effect
// ===========================================

function initCardTilt() {
    const cards = document.querySelectorAll('.card[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                card.style.transition = '';
            }, 500);
        });
    });
}

// ===========================================
// Scroll Animations
// ===========================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .grid-item, .showcase-item, .about-content > *');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===========================================
// Contact Form
// ===========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            const originalIcon = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalIcon;
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Form input animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.style.top = '-0.5rem';
                label.style.fontSize = '0.875rem';
                label.style.color = 'var(--primary-color)';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-tertiary)';
                }
            });
        }
    });
}

// ===========================================
// Current Year
// ===========================================

function initCurrentYear() {
    const yearElement = document.querySelector('.footer-copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
}

// ===========================================
// Scroll Progress
// ===========================================

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: var(--gradient-primary);
        z-index: 9997;
        transition: width 0.1s ease;
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===========================================
// Hover Effects
// ===========================================

function initHoverEffects() {
    // Grid item hover effect
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const image = item.querySelector('.item-image');
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.5s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            const image = item.querySelector('.item-image');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Link hover effect
    const links = document.querySelectorAll('a:not(.menu-link)');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.letterSpacing = '1px';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.letterSpacing = 'normal';
        });
    });
}

// ===========================================
// Smooth Scrolling
// ===========================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.floating-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================================
// Notification System
// ===========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--element-radius)',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '350px'
    });
    
    if (type === 'success') {
        notification.style.borderLeft = '3px solid var(--accent-color)';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Add animation styles
    addNotificationAnimations();
}

function addNotificationAnimations() {
    if (!document.getElementById('notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .notification i {
                color: var(--accent-color);
            }
            
            .notification span {
                font-family: var(--font-mono);
                font-size: 0.875rem;
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 1rem;
                    left: 1rem;
                    bottom: 1rem;
                    max-width: calc(100% - 2rem);
                }
            }
        `;
        document.head.appendChild(style);
    }
}