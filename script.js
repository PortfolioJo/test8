// ===========================================
// Main Application - Complete English Translation
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initThemeSwitcher();
    initLanguageSwitcher();
    initCurrentYear();
    initScrollAnimations();
    initProjectFilter();
    initProjectModal();
    initContactForm();
    initScrollProgress();
    initSmoothScrolling();
    initPageAnimations();
    
    // Set initial language to English
    setTimeout(() => {
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        if (currentLang === 'ar') {
            setLanguage('en');
            updateLangText('en');
        }
    }, 100);
});

// ===========================================
// Complete English Translations
// ===========================================

const translations = {
    en: {
        // Navigation
        'nav.designer': 'Digital Designer',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'lang.ar': 'AR',
        'lang.en': 'EN',
        
        // Hero Section
        'hero.subtitle': 'Digital Art',
        'hero.title': 'Creative Digital Designer',
        'hero.name': 'Aseel',
        'hero.description': 'Crafting modern visual identities that blend minimalism with emotional storytelling and digital innovation.',
        'hero.viewWork': 'View Work',
        'hero.startProject': 'Start Project',
        'hero.explore': 'Explore',
        
        // About Section
        'about.title': 'Design Philosophy',
        'about.subtitle': 'Where creativity meets purpose',
        'about.badge': 'Visual Artist',
        'about.projects': 'Projects',
        'about.years': 'Years',
        'about.clients': 'Clients',
        'about.heading': 'Design with Purpose',
        'about.description1': 'I believe in creating designs that not only look beautiful but also solve problems and tell compelling stories. Every element in my work carries meaning and purpose.',
        'about.description2': 'With over 5 years of digital design experience, I\'ve developed a unique approach that combines artistic intuition with professional methodology.',
        'about.designer': 'Digital Designer',
        
        // Work Section
        'work.title': 'Featured Work',
        'work.subtitle': 'Selected projects showcasing design excellence',
        'work.filters.all': 'All',
        'work.filters.branding': 'Branding',
        'work.filters.web': 'Web Design',
        'work.filters.art': 'Digital Art',
        'work.view': 'View Project',
        'work.project1.category': 'Brand Identity',
        'work.project1.title': 'Luxury Fashion Brand',
        'work.project1.description': 'Complete visual identity for a high-end fashion brand blending heritage with modernity',
        'work.project2.category': 'Web Design',
        'work.project2.title': 'Interactive Art Platform',
        'work.project2.description': 'Modern user interface for an art platform with seamless browsing experience',
        'work.project3.category': 'Digital Art',
        'work.project3.title': 'Abstract Art Series',
        'work.project3.description': 'Collection of digital artworks inspired by contemporary Arabic culture',
        'work.tags.logo': 'Logo Design',
        'work.tags.identity': 'Brand Identity',
        'work.tags.print': 'Print Materials',
        'work.tags.ui': 'UI/UX Design',
        'work.tags.interactive': 'Interactive',
        'work.tags.responsive': 'Responsive',
        'work.tags.digital': 'Digital Art',
        'work.tags.illustration': 'Illustration',
        'work.tags.abstract': 'Abstract',
        
        // Services Section
        'services.title': 'Services',
        'services.subtitle': 'Comprehensive design solutions for your needs',
        'services.service1.title': 'Brand Identity',
        'services.service1.description': 'Complete visual identity systems that express brand values and create memorable impressions',
        'services.service1.feature1': 'Logo & Brand Mark Design',
        'services.service1.feature2': 'Color & Typography System',
        'services.service1.feature3': 'Brand Guidelines',
        'services.service1.feature4': 'Marketing Materials',
        'services.service2.title': 'Web & App Design',
        'services.service2.description': 'Modern user interfaces that provide exceptional experiences across all devices',
        'services.service2.feature1': 'UI/UX Design',
        'services.service2.feature2': 'User Experience',
        'services.service2.feature3': 'Responsive Design',
        'services.service2.feature4': 'Mobile App Design',
        'services.service3.title': 'Digital Art',
        'services.service3.description': 'Creating unique digital artworks for advertising, content, and social media',
        'services.service3.feature1': 'Digital Illustration',
        'services.service3.feature2': 'Graphic Design',
        'services.service3.feature3': 'Social Media Content',
        'services.service3.feature4': 'Advertising Design',
        
        // Contact Section
        'contact.title': 'Let\'s Create Together',
        'contact.subtitle': 'Let\'s discuss your idea and turn it into reality',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.remote': 'Available for remote work worldwide',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.select': 'Select Service',
        'contact.form.branding': 'Brand Identity',
        'contact.form.web': 'Web & App Design',
        'contact.form.art': 'Digital Art',
        'contact.form.other': 'Other Service',
        'contact.form.message': 'Project Details',
        'contact.form.submit': 'Send Message',
        
        // Footer
        'footer.tagline': 'Creative Digital Designer',
        'footer.home': 'Home',
        'footer.about': 'About',
        'footer.work': 'Work',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved',
        
        // Modal
        'modal.about': 'About Project',
        'modal.technologies': 'Technologies Used',
        'modal.results': 'Results',
        'modal.start': 'Start Similar Project'
    },
    ar: {
        // Navigation
        'nav.designer': 'مصممة رقمية',
        'nav.home': 'الرئيسية',
        'nav.about': 'عنّي',
        'nav.work': 'أعمالي',
        'nav.services': 'خدماتي',
        'nav.contact': 'اتصل بي',
        'lang.ar': 'عربي',
        'lang.en': 'EN',
        
        // Hero Section
        'hero.subtitle': 'فن رقمي',
        'hero.title': 'مصممة رقمية إبداعية',
        'hero.name': 'أسيل',
        'hero.description': 'أصمم هويات بصرية معاصرة تجمع بين البساطة وسرد القصص العاطفية والابتكار الرقمي.',
        'hero.viewWork': 'عرض الأعمال',
        'hero.startProject': 'ابدأ مشروع',
        'hero.explore': 'استكشف',
        
        // About Section
        'about.title': 'فلسفة التصميم',
        'about.subtitle': 'حيث يلتقي الإبداع بالغرض',
        'about.badge': 'فنانة بصرية',
        'about.projects': 'مشاريع',
        'about.years': 'سنوات',
        'about.clients': 'عملاء',
        'about.heading': 'تصميم بقصد',
        'about.description1': 'أؤمن بإنشاء تصاميم لا تبدو جميلة فقط بل تحل المشكلات وتروي قصصاً مؤثرة. كل عنصر في عملي يحمل معنى وغرضاً.',
        'about.description2': 'مع خبرة تزيد عن 5 سنوات في التصميم الرقمي، طورت أسلوباً فريداً يجمع بين الحدس الفني والمنهجية الاحترافية.',
        'about.designer': 'مصممة رقمية',
        
        // Work Section
        'work.title': 'أعمال مميزة',
        'work.subtitle': 'مشاريع مختارة تعرض التميز في التصميم',
        'work.filters.all': 'الكل',
        'work.filters.branding': 'هوية بصرية',
        'work.filters.web': 'تصميم ويب',
        'work.filters.art': 'فن رقمي',
        'work.view': 'عرض المشروع',
        'work.project1.category': 'هوية بصرية',
        'work.project1.title': 'علامة أزياء فاخرة',
        'work.project1.description': 'هوية بصرية كاملة لعلامة أزياء فاخرة تجمع بين التراث والحداثة',
        'work.project2.category': 'تصميم ويب',
        'work.project2.title': 'منصة فنية تفاعلية',
        'work.project2.description': 'واجهة مستخدم حديثة لمنصة فنية مع تجربة تصفح سلسة',
        'work.project3.category': 'فن رقمي',
        'work.project3.title': 'سلسلة فن تجريدي',
        'work.project3.description': 'مجموعة من الأعمال الفنية الرقمية المستوحاة من الثقافة العربية المعاصرة',
        'work.tags.logo': 'تصميم شعار',
        'work.tags.identity': 'هوية العلامة',
        'work.tags.print': 'مواد مطبوعة',
        'work.tags.ui': 'تصميم واجهة',
        'work.tags.interactive': 'تفاعلية',
        'work.tags.responsive': 'تصميم متجاوب',
        'work.tags.digital': 'فن رقمي',
        'work.tags.illustration': 'رسم',
        'work.tags.abstract': 'تجريدي',
        
        // Services Section
        'services.title': 'خدمات',
        'services.subtitle': 'حلول تصميمية شاملة تناسب احتياجاتك',
        'services.service1.title': 'الهوية البصرية',
        'services.service1.description': 'أنظمة هوية بصرية كاملة تعبر عن قيم العلامة التجارية وتخلق انطباعات لا تنسى',
        'services.service1.feature1': 'تصميم الشعار والعلامة',
        'services.service1.feature2': 'نظام الألوان والخطوط',
        'services.service1.feature3': 'دليل العلامة التجارية',
        'services.service1.feature4': 'مواد تسويقية',
        'services.service2.title': 'تصميم الويب والتطبيقات',
        'services.service2.description': 'واجهات مستخدم حديثة توفر تجارب استثنائية على جميع الأجهزة',
        'services.service2.feature1': 'تصميم واجهة المستخدم',
        'services.service2.feature2': 'تجربة المستخدم',
        'services.service2.feature3': 'تصميم متجاوب',
        'services.service2.feature4': 'تصميم تطبيقات الجوال',
        'services.service3.title': 'الفن الرقمي',
        'services.service3.description': 'إنشاء أعمال فنية رقمية فريدة للإعلانات والمحتوى ووسائل التواصل الاجتماعي',
        'services.service3.feature1': 'الرسم الرقمي',
        'services.service3.feature2': 'التصميم الجرافيكي',
        'services.service3.feature3': 'محتوى وسائل التواصل',
        'services.service3.feature4': 'تصميم الإعلانات',
        
        // Contact Section
        'contact.title': 'لنبدع معاً',
        'contact.subtitle': 'لنتناقش حول فكرتك ونحولها إلى واقع',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.location': 'الموقع',
        'contact.remote': 'متاح للعمل عن بُعد عالمياً',
        'contact.form.name': 'الاسم الكامل',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.select': 'اختر الخدمة',
        'contact.form.branding': 'الهوية البصرية',
        'contact.form.web': 'تصميم الويب والتطبيقات',
        'contact.form.art': 'الفن الرقمي',
        'contact.form.other': 'خدمة أخرى',
        'contact.form.message': 'تفاصيل المشروع',
        'contact.form.submit': 'إرسال الرسالة',
        
        // Footer
        'footer.tagline': 'مصممة رقمية إبداعية',
        'footer.home': 'الرئيسية',
        'footer.about': 'عنّي',
        'footer.work': 'أعمالي',
        'footer.services': 'خدماتي',
        'footer.contact': 'اتصل بي',
        'footer.rights': 'جميع الحقوق محفوظة',
        
        // Modal
        'modal.about': 'عن المشروع',
        'modal.technologies': 'التقنيات المستخدمة',
        'modal.results': 'النتائج',
        'modal.start': 'ابدأ مشروعاً مماثلاً'
    }
};

// ===========================================
// Navigation
// ===========================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset hamburger animation
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        nav.classList.toggle('scrolled', scrolled);
        
        // Update active nav link based on scroll position
        updateActiveNavLink(sections, navLinks);
    });

    function updateActiveNavLink(sections, links) {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            const section = link.getAttribute('data-section');
            if (section === current || (current === '' && section === 'hero')) {
                link.classList.add('active');
            }
        });
    }
}

// ===========================================
// Theme Switcher
// ===========================================

function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Get saved theme or use default
    const savedTheme = localStorage.getItem('aseel-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('aseel-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation
        this.style.transform = 'rotate(180deg) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
}

// ===========================================
// Language Switcher
// ===========================================

function initLanguageSwitcher() {
    const langToggle = document.getElementById('languageToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    // Get saved language or use default
    const savedLang = localStorage.getItem('aseel-lang') || 'en';
    setLanguage(savedLang);
    updateLangText(savedLang);
    
    // Toggle language
    langToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        this.style.transform = 'rotate(180deg) scale(1.1)';
        setTimeout(() => {
            setLanguage(newLang);
            updateLangText(newLang);
            localStorage.setItem('aseel-lang', newLang);
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    });
    
    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        updateTexts(lang);
        
        // Add page transition
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.3s ease';
        }, 100);
    }
    
    function updateLangText(lang) {
        langText.textContent = lang === 'ar' ? 'AR' : 'EN';
    }
}

function updateTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// ===========================================
// Current Year
// ===========================================

function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===========================================
// Scroll Animations
// ===========================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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
// Project Filter
// ===========================================

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===========================================
// Project Modal
// ===========================================

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const viewProjectBtns = document.querySelectorAll('.view-project');
    
    // Project data
    const projects = {
        1: {
            category: 'Brand Identity',
            title: 'Luxury Fashion Brand',
            description: 'Complete visual identity for a high-end fashion brand blending heritage with modernity. The project involved creating a comprehensive brand system that works across digital and physical touchpoints.',
            tags: ['Logo Design', 'Brand Identity', 'Print Materials', 'Brand Guidelines', 'Color System', 'Typography'],
            results: [
                'Increased brand awareness by 40%',
                'Improved customer experience across all touchpoints',
                'Enhanced visual identity with modern appeal'
            ]
        },
        2: {
            category: 'Web Design',
            title: 'Interactive Art Platform',
            description: 'Modern user interface for an art platform with seamless browsing experience. The design focuses on user-friendly navigation and exceptional visual presentation for art lovers.',
            tags: ['UI/UX Design', 'Interactive Elements', 'Responsive Design', 'User Experience', 'Mobile First'],
            results: [
                'Increased browsing time by 60%',
                'Improved conversion rates by 35%',
                'Enhanced user experience with intuitive navigation'
            ]
        },
        3: {
            category: 'Digital Art',
            title: 'Abstract Art Series',
            description: 'Collection of digital artworks inspired by contemporary Arabic culture. Each piece carries a unique artistic message blending heritage with modernity.',
            tags: ['Digital Art', 'Illustration', 'Abstract Art', 'Arabic Culture', 'Modern Design'],
            results: [
                'Successful art exhibition with 500+ attendees',
                'All artworks sold within first week',
                'Wide media coverage in design publications'
            ]
        }
    };
    
    // Open modal on project click
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openProjectModal(projectId) {
        const project = projects[projectId];
        if (!project) return;
        
        // Update modal content
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Update tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // Update results
        const resultsContainer = document.getElementById('modalResults');
        resultsContainer.innerHTML = '';
        project.results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            resultsContainer.appendChild(li);
        });
        
        // Update image based on project
        const modalImage = document.getElementById('modalImage');
        modalImage.style.background = getProjectGradient(projectId);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function getProjectGradient(id) {
        const gradients = [
            'linear-gradient(135deg, #FF6EC7, #FFB347)',
            'linear-gradient(135deg, #A0FFE6, #A7D8FF)',
            'linear-gradient(135deg, #B57FFF, #FF6EC7)'
        ];
        return gradients[id - 1] || gradients[0];
    }
}

// ===========================================
// Contact Form
// ===========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            const originalIcon = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification('Your message has been sent successfully! I will contact you soon.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalIcon;
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.disabled = false;
                
                // Reset form labels
                resetFormLabels();
            }, 1500);
        });
    }
    
    // Form input animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Initialize based on current value
            if (input.value) {
                label.style.top = '-1.5rem';
                label.style.fontSize = '0.85rem';
                label.style.color = 'var(--primary-color)';
                label.style.fontWeight = '700';
            }
            
            input.addEventListener('focus', function() {
                label.style.top = '-1.5rem';
                label.style.fontSize = '0.85rem';
                label.style.color = 'var(--primary-color)';
                label.style.fontWeight = '700';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-tertiary)';
                    label.style.fontWeight = '500';
                }
            });
            
            // Handle select change
            if (input.tagName === 'SELECT') {
                input.addEventListener('change', function() {
                    if (this.value) {
                        label.style.top = '-1.5rem';
                        label.style.fontSize = '0.85rem';
                        label.style.color = 'var(--primary-color)';
                        label.style.fontWeight = '700';
                    } else {
                        label.style.top = '1rem';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--text-tertiary)';
                        label.style.fontWeight = '500';
                    }
                });
            }
        }
    });
    
    function resetFormLabels() {
        const labels = document.querySelectorAll('.form-group label');
        labels.forEach(label => {
            label.style.top = '1rem';
            label.style.fontSize = '1rem';
            label.style.color = 'var(--text-tertiary)';
            label.style.fontWeight = '500';
        });
    }
}

// ===========================================
// Scroll Progress
// ===========================================

function initScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-1);
        z-index: 9998;
        transition: width 0.1s ease;
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===========================================
// Smooth Scrolling
// ===========================================

function initSmoothScrolling() {
    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.minimal-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================================
// Page Animations
// ===========================================

function initPageAnimations() {
    // Add animation to elements on load
    const animatedElements = [
        '.hero-badge',
        '.hero-title .title-line',
        '.hero-description',
        '.hero-actions',
        '.snapshot-card',
        '.about-quote',
        '.section-header',
        '.project-card',
        '.process-step',
        '.service-card',
        '.testimonial-bubble',
        '.big-cta'
    ];
    
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.add('scroll-animate');
        });
    });
    
    // Initialize scroll animations
    initScrollAnimations();
}

// ===========================================
// CV Download Function
// ===========================================

function downloadCV() {
    // Create a simple PDF download simulation
    showNotification('Downloading CV...', 'info');
    
    // Simulate download delay
    setTimeout(() => {
        // Create a dummy PDF file (in real scenario, this would be your actual PDF)
        const dummyPDF = `
        %PDF-1.4
        1 0 obj
        << /Type /Catalog /Pages 2 0 R >>
        endobj
        2 0 obj
        << /Type /Pages /Kids [3 0 R] /Count 1 >>
        endobj
        3 0 obj
        << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>
        endobj
        4 0 obj
        << /Length 44 >>
        stream
        BT /F1 12 Tf 72 720 Td (Aseel - Creative Digital Designer) Tj ET
        endstream
        endobj
        xref
        0 5
        0000000000 65535 f 
        0000000010 00000 n 
        0000000053 00000 n 
        0000000101 00000 n 
        0000000176 00000 n 
        trailer
        << /Size 5 /Root 1 0 R >>
        startxref
        281
        %%EOF
        `;
        
        // Create blob and download link
        const blob = new Blob([dummyPDF], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.href = url;
        link.download = 'Aseel_CV_Portfolio.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        // Show success notification
        showNotification('CV downloaded successfully!', 'success');
    }, 1000);
}

// ===========================================
// Notification System
// ===========================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: 'var(--bg-card)',
        border: '2px solid var(--border-color)',
        borderRadius: 'var(--element-radius)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: '9999',
        animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '350px',
        fontWeight: '600'
    });
    
    if (type === 'success') {
        notification.style.borderLeft = '4px solid var(--primary-color)';
        notification.querySelector('i').style.color = 'var(--primary-color)';
    } else if (type === 'error') {
        notification.style.borderLeft = '4px solid #ff4d4d';
        notification.querySelector('i').style.color = '#ff4d4d';
    } else {
        notification.style.borderLeft = '4px solid var(--accent-color)';
        notification.querySelector('i').style.color = 'var(--accent-color)';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Add animation styles if not already added
    addNotificationAnimations();
    
    // Close on click
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    });
}

function addNotificationAnimations() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
            }
            
            .notification {
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            
            .notification:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-xl);
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    top: 80px;
                    max-width: calc(100% - 20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================================
// Add floating particles effect
// ===========================================

function addParticlesEffect() {
    if (!document.getElementById('particles')) {
        const particles = document.createElement('div');
        particles.id = 'particles';
        particles.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(particles);
        
        // Create particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 60 + 10;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            const color = i % 3 === 0 ? 'var(--primary-color)' : i % 3 === 1 ? 'var(--secondary-color)' : 'var(--accent-color)';
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.1 + 0.05};
                filter: blur(20px);
                left: ${posX}%;
                top: ${posY}%;
                animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
            `;
            
            particles.appendChild(particle);
        }
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(20px, 50px) rotate(90deg);
                }
                50% {
                    transform: translate(-30px, 100px) rotate(180deg);
                }
                75% {
                    transform: translate(40px, 50px) rotate(270deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize particles effect
setTimeout(addParticlesEffect, 1000);