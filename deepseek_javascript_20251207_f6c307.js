// script.js - بورتفوليو مهندس
document.addEventListener('DOMContentLoaded', function() {
    // نظام الترجمة الكامل للمهندس
    const translations = {
        ar: {
            // التنقل
            logo: "أحمد",
            navHome: "الرئيسية",
            navProfile: "حول",
            navServices: "الخدمات",
            navPortfolio: "مشاريعي",
            navSkills: "المهارات",
            navContact: "اتصل",
            language: "EN",
            
            // الصفحة الرئيسية
            heroBadge: "مهندس برمجيات",
            heroTitle: "أبني المستقبل الرقمي",
            heroDescription: "أصمم وأطور حلولًا تقنية مبتكرة تلبي احتياجات العصر الرقمي. أجمع بين الخبرة التقنية والإبداع لبناء أنظمة ذكية ومتطورة.",
            viewPortfolio: "شاهد مشاريعي",
            contactMe: "لنعمل معًا",
            statProjects: "مشروع",
            statClients: "عميل",
            statYears: "سنوات خبرة",
            whyChooseTitle: "لماذا تختارني؟",
            feature1Title: "تصميم مبتكر",
            feature1Desc: "أصمم حلولًا تقنية مبتكرة تلبي أحدث معايير الجودة والأداء",
            feature2Title: "تطوير متكامل",
            feature2Desc: "أطور أنظمة متكاملة من الفكرة إلى التنفيذ مع ضمان أعلى معايير الأمان",
            feature3Title: "تحسين الأداء",
            feature3Desc: "أحلل وأحسن أداء الأنظمة لضمان كفاءتها واستقرارها على المدى الطويل",
            feature4Title: "دعم مستمر",
            feature4Desc: "أقدم دعمًا فنيًا مستمرًا ومراجعات دورية لضمان استمرارية العمل",
            
            // صفحة حول
            profileTitle: "حول المهندس أحمد",
            profileDescription: "مهندس برمجيات متخصص في تطوير الحلول التقنية المتكاملة والأنظمة الذكية",
            aboutTitle: "شغفي هو بناء حلول تقنية مبتكرة",
            aboutDescription: "مع أكثر من 5 سنوات من الخبرة في هندسة البرمجيات، أساعد الشركات والأفراد على تحويل أفكارهم إلى حلول رقمية متكاملة. أؤمن أن التكنولوجيا يجب أن تكون في خدمة الإنسان لتحسين جودة الحياة.",
            specialtiesTitle: "تخصصاتي",
            connectTitle: "تواصل معي",
            philosophyTitle: "فلسفتي في هندسة البرمجيات",
            philosophy1Title: "الجودة أولاً",
            philosophy1Desc: "ألتزم بأعلى معايير الجودة في كل سطر أكتبه وكل نظام أصممه",
            philosophy2Title: "الأداء الأمثل",
            philosophy2Desc: "أركز على بناء أنظمة سريعة وموثوقة تلبي احتياجات المستخدمين",
            philosophy3Title: "التطوير المستمر",
            philosophy3Desc: "أتطور باستمرار لأواكب أحدث التقنيات وأفضل الممارسات في المجال",
            
            // صفحة الخدمات
            servicesTitle: "خدماتي",
            servicesDescription: "أقدم مجموعة متكاملة من الخدمات الهندسية لتلبية جميع احتياجاتك التقنية",
            service1Title: "تطوير الويب",
            service1Desc: "تصميم وتطوير مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات",
            service1Feature1: "تطوير Frontend",
            service1Feature2: "تطوير Backend",
            service1Feature3: "تطوير متكامل",
            service2Title: "تطوير التطبيقات",
            service2Desc: "بناء تطبيقات الهواتف الذكية لأنظمة iOS و Android بتجربة استخدام ممتازة",
            service2Feature1: "تطبيقات iOS",
            service2Feature2: "تطبيقات Android",
            service2Feature3: "تطبيقات متعددة المنصات",
            service3Title: "أنظمة قواعد البيانات",
            service3Desc: "تصميم وإدارة قواعد البيانات العلائقية وغير العلائقية بمعايير أمنية عالية",
            service3Feature1: "تصميم قواعد البيانات",
            service3Feature2: "تحسين الاستعلامات",
            service3Feature3: "تأمين البيانات",
            service4Title: "استشارات تقنية",
            service4Desc: "تقديم استشارات متخصصة لتحسين البنية التحتية التقنية للشركات",
            service4Feature1: "تحليل النظم",
            service4Feature2: "تخطيط البنية التحتية",
            service4Feature3: "مراجعة الأمان",
            
            // عملية العمل
            processTitle: "كيف أعمل؟",
            step1Title: "التحليل",
            step1Desc: "أحلل متطلبات المشروع وأدرس احتياجات العميل بدقة",
            step2Title: "التصميم",
            step2Desc: "أصمم هندسة النظام وخوارزميات الحل مع وضع قابلية التوسع في الاعتبار",
            step3Title: "التنفيذ",
            step3Desc: "أبدأ في كتابة الكود وبناء النظام مع تحديثات مستمرة",
            step4Title: "الاختبار والتسليم",
            step4Desc: "أختبر النظام بدقة وأسلّمه مع وثائق فنية كاملة",
            
            // صفحة أعمالي
            portfolioTitle: "معرض مشاريعي",
            portfolioDescription: "مجموعة مختارة من المشاريع الهندسية التي نفذتها لشركات ومؤسسات مختلفة",
            project1Title: "منصة تعليمية ذكية",
            project1Desc: "تطوير منصة تعليمية متكاملة بميزات التعلم الذكي والتقارير التحليلية",
            project2Title: "نظام إدارة المستشفيات",
            project2Desc: "بناء نظام متكامل لإدارة عمليات المستشفى وتتبع الحالات المرضية",
            project3Title: "تطبيق توصيل طعام",
            project3Desc: "تطوير تطبيق ذكي لتوصيل الطعام مع نظام تتبع حي للطلبات",
            project4Title: "منصة تجارة إلكترونية",
            project4Desc: "تصميم وتطوير منصة تسوق إلكتروني بميزات متقدمة للدفع والتوصيل",
            project5Title: "نظام إدارة المشاريع",
            project5Desc: "بناء نظام لإدارة المشاريع والتواصل بين فرق العمل",
            project6Title: "تطبيق لياقة بدنية",
            project6Desc: "تطوير تطبيق متكامل لمتابعة اللياقة البدنية والتمارين الرياضية",
            
            // صفحة المهارات
            skillsTitle: "مهاراتي",
            skillsDescription: "مجموعة من المهارات التقنية والإبداعية التي أتمتع بها في مجال هندسة البرمجيات",
            creativeSkills: "المهارات التقنية",
            skillVideo: "تطوير الويب",
            skillWriting: "تطوير التطبيقات",
            skillPhoto: "قواعد البيانات",
            skillDesign: "هندسة البرمجيات",
            technicalSkills: "لغات البرمجة",
            skillPremiere: "JavaScript",
            skillAfter: "Python",
            skillPhotoshop: "Java",
            skillAnalytics: "C++",
            softSkills: "المهارات الشخصية",
            skillCommunication: "التواصل الفعال",
            skillTime: "إدارة الوقت",
            skillProblem: "حل المشكلات",
            skillTeam: "العمل الجماعي",
            toolsTitle: "الأدوات والتقنيات",
            
            // صفحة الاتصال
            contactTitle: "لنعمل معًا",
            contactDescription: "أهلاً بك! دعنا نناقش مشروعك القادم ونحول أفكارك إلى حلول رقمية مبتكرة",
            emailTitle: "البريد الإلكتروني",
            phoneTitle: "الهاتف",
            locationTitle: "الموقع",
            locationText: "الرياض، المملكة العربية السعودية",
            hoursTitle: "ساعات العمل",
            hoursText: "الأحد - الخميس: 9 ص - 6 م",
            formName: "الاسم *",
            formEmail: "البريد الإلكتروني *",
            formSubject: "نوع المشروع *",
            formMessage: "تفاصيل المشروع *",
            formMessagePlaceholder: "أخبرني عن مشروعك وأهدافك...",
            formSubmit: "أرسل الرسالة",
            
            // التذييل
            footerText: "مهندس برمجيات متخصص في تطوير الحلول التقنية المتكاملة والأنظمة الذكية"
        },
        en: {
            // Navigation
            logo: "Ahmed",
            navHome: "Home",
            navProfile: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navSkills: "Skills",
            navContact: "Contact",
            language: "AR",
            
            // Home Page
            heroBadge: "Software Engineer",
            heroTitle: "Building the Digital Future",
            heroDescription: "I design and develop innovative technological solutions that meet the needs of the digital age. I combine technical expertise and creativity to build smart and advanced systems.",
            viewPortfolio: "View My Projects",
            contactMe: "Let's Work Together",
            statProjects: "Projects",
            statClients: "Clients",
            statYears: "Years Experience",
            whyChooseTitle: "Why Choose Me?",
            feature1Title: "Innovative Design",
            feature1Desc: "I design innovative technical solutions that meet the latest quality and performance standards",
            feature2Title: "Integrated Development",
            feature2Desc: "I develop integrated systems from idea to implementation while ensuring the highest security standards",
            feature3Title: "Performance Optimization",
            feature3Desc: "I analyze and improve system performance to ensure efficiency and long-term stability",
            feature4Title: "Continuous Support",
            feature4Desc: "I provide continuous technical support and periodic reviews to ensure business continuity",
            
            // About Page
            profileTitle: "About Engineer Ahmed",
            profileDescription: "Software engineer specializing in developing integrated technical solutions and smart systems",
            aboutTitle: "My Passion is Building Innovative Technical Solutions",
            aboutDescription: "With over 5 years of experience in software engineering, I help companies and individuals transform their ideas into integrated digital solutions. I believe technology should serve humanity to improve quality of life.",
            specialtiesTitle: "My Specialties",
            connectTitle: "Connect With Me",
            philosophyTitle: "My Software Engineering Philosophy",
            philosophy1Title: "Quality First",
            philosophy1Desc: "I commit to the highest quality standards in every line I write and every system I design",
            philosophy2Title: "Optimal Performance",
            philosophy2Desc: "I focus on building fast and reliable systems that meet user needs",
            philosophy3Title: "Continuous Development",
            philosophy3Desc: "I continuously evolve to keep up with the latest technologies and best practices in the field",
            
            // Services Page
            servicesTitle: "My Services",
            servicesDescription: "I offer a comprehensive set of engineering services to meet all your technical needs",
            service1Title: "Web Development",
            service1Desc: "Design and development of integrated websites and web applications using the latest technologies",
            service1Feature1: "Frontend Development",
            service1Feature2: "Backend Development",
            service1Feature3: "Full Stack Development",
            service2Title: "App Development",
            service2Desc: "Building smartphone applications for iOS and Android with excellent user experience",
            service2Feature1: "iOS Applications",
            service2Feature2: "Android Applications",
            service2Feature3: "Cross-Platform Applications",
            service3Title: "Database Systems",
            service3Desc: "Design and management of relational and non-relational databases with high security standards",
            service3Feature1: "Database Design",
            service3Feature2: "Query Optimization",
            service3Feature3: "Data Security",
            service4Title: "Technical Consulting",
            service4Desc: "Providing specialized consultations to improve companies' technical infrastructure",
            service4Feature1: "Systems Analysis",
            service4Feature2: "Infrastructure Planning",
            service4Feature3: "Security Review",
            
            // Work Process
            processTitle: "How I Work?",
            step1Title: "Analysis",
            step1Desc: "I analyze project requirements and study client needs accurately",
            step2Title: "Design",
            step2Desc: "I design system architecture and solution algorithms with scalability in mind",
            step3Title: "Implementation",
            step3Desc: "I start writing code and building the system with continuous updates",
            step4Title: "Testing & Delivery",
            step4Desc: "I thoroughly test the system and deliver it with complete technical documentation",
            
            // Portfolio Page
            portfolioTitle: "My Projects Portfolio",
            portfolioDescription: "A curated selection of engineering projects I've executed for various companies and institutions",
            project1Title: "Smart Learning Platform",
            project1Desc: "Development of an integrated educational platform with smart learning features and analytical reports",
            project2Title: "Hospital Management System",
            project2Desc: "Building an integrated system for managing hospital operations and tracking medical cases",
            project3Title: "Food Delivery App",
            project4Desc: "Development of a smart food delivery app with live order tracking system",
            project4Title: "E-commerce Platform",
            project4Desc: "Design and development of an e-commerce platform with advanced payment and delivery features",
            project5Title: "Project Management System",
            project5Desc: "Building a system for project management and team communication",
            project6Title: "Fitness Application",
            project6Desc: "Development of an integrated application for fitness tracking and exercises",
            
            // Skills Page
            skillsTitle: "My Skills",
            skillsDescription: "A set of technical and creative skills I possess in software engineering",
            creativeSkills: "Technical Skills",
            skillVideo: "Web Development",
            skillWriting: "App Development",
            skillPhoto: "Photography",
            skillDesign: "Visual Design",
            technicalSkills: "Technical Skills",
            skillPremiere: "Adobe Premiere Pro",
            skillAfter: "Adobe After Effects",
            skillPhotoshop: "Adobe Photoshop",
            skillAnalytics: "Data Analysis",
            softSkills: "Soft Skills",
            skillCommunication: "Effective Communication",
            skillTime: "Time Management",
            skillProblem: "Problem Solving",
            skillTeam: "Teamwork",
            toolsTitle: "Tools I Use",
            
            // Contact Page
            contactTitle: "Let's Work Together",
            contactDescription: "Welcome! Let's discuss your upcoming project and transform your ideas into impactful creative content",
            emailTitle: "Email",
            phoneTitle: "Phone",
            locationTitle: "Location",
            locationText: "Riyadh, Saudi Arabia",
            hoursTitle: "Working Hours",
            hoursText: "Sunday - Thursday: 9 AM - 6 PM",
            formName: "Name *",
            formEmail: "Email *",
            formSubject: "Project Type *",
            formMessage: "Project Details *",
            formMessagePlaceholder: "Tell me about your project and goals...",
            formSubmit: "Send Message",
            
            // Footer
            footerText: "Software engineer specializing in developing integrated technical solutions and smart systems"
        }
    };

    // تهيئة تأثير الجزيئات المتحركة
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#2563eb" },
                shape: { type: "circle" },
                opacity: { value: 0.2, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#2563eb",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // تهيئة المتغيرات
    let currentLang = 'ar';
    let currentPage = 'home';
    const backHomeBtn = document.getElementById('backHomeBtn');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    // وظيفة تغيير اللغة
    function changeLanguage(lang) {
        currentLang = lang;
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تغيير الخط حسب اللغة
        document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Inter', sans-serif";
        
        // تحديث جميع النصوص
        updateAllTexts();
        
        // تحديث زر اللغة
        const languageText = languageBtn.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = translations[lang].language;
        }
        
        // تحديث القائمة المنسدلة للغة
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // تحديث زر الرجوع
        const backHomeSpan = backHomeBtn.querySelector('span');
        if (backHomeSpan) {
            backHomeSpan.textContent = translations[lang].navHome;
        }
    }

    // وظيفة تحديث جميع النصوص
    function updateAllTexts() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[currentLang][key]);
                    }
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    element.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[currentLang][key]}`;
                } else {
                    const text = translations[currentLang][key];
                    if (text.includes('<br>')) {
                        element.innerHTML = text;
                    } else {
                        element.textContent = text;
                    }
                }
            }
        });
    }

    // وظيفة تغيير الصفحة
    function changePage(pageId) {
        if (pageId === currentPage) return;
        
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // إزالة النشاط من جميع روابط التنقل
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // إظهار الصفحة المحددة
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // إضافة النشاط للرابط المحدد
            const targetLink = document.querySelector(`.navbar-link[data-page="${pageId}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            // تحديث المتغير الحالي
            currentPage = pageId;
            
            // إظهار أو إخفاء زر الرجوع
            if (pageId === 'home') {
                backHomeBtn.style.display = 'none';
            } else {
                backHomeBtn.style.display = 'flex';
            }
            
            // إغلاق القائمة على الأجهزة المحمولة
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // تفعيل تأثير شريط المهارات إذا كانت الصفحة هي المهارات
            if (pageId === 'skills') {
                setTimeout(animateSkills, 300);
            }
            
            // تفعيل عداد الإحصائيات إذا كانت الصفحة الرئيسية
            if (pageId === 'home') {
                setTimeout(animateStats, 300);
            }
            
            // تفعيل تأثيرات البطاقات
            setTimeout(checkCards, 300);
            
            // التمرير إلى أعلى الصفحة
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // زر الرجوع للرئيسية
    backHomeBtn.addEventListener('click', function() {
        changePage('home');
    });

    // تبديل القائمة على الأجهزة المحمولة
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        this.innerHTML = navbarMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // التنقل عبر روابط القائمة
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });

    // التنقل عبر الأزرار
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });

    // تبديل اللغة
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // اختيار لغة من القائمة
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });

    // تأثير شريط المهارات
    function animateSkills() {
        const skillProgressElements = document.querySelectorAll('.skill-progress');
        const skillsPage = document.getElementById('skills');
        
        if (!skillsPage) return;
        
        const rect = skillsPage.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            skillProgressElements.forEach(skill => {
                const width = skill.getAttribute('data-width');
                skill.style.width = width + '%';
            });
        }
    }

    // تأثير عداد الإحصائيات
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        const statsSection = document.querySelector('.hero-stats');
        
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
        }
    }

    // تصفية أعمال المعرض
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // رسالة نجاح
            const message = currentLang === 'ar' 
                ? 'شكراً لك على رسالتك! سأعود إليك في أقرب وقت ممكن.' 
                : 'Thank you for your message! I will get back to you as soon as possible.';
            
            // إنشاء إشعار
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: linear-gradient(135deg, #2563eb, #06b6d4);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 12px;
                transform: translateX(150%);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle" style="font-size: 20px;"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            
            // عرض الإشعار
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // إخفاء الإشعار بعد 4 ثواني
            setTimeout(() => {
                notification.style.transform = 'translateX(150%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 400);
            }, 4000);
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }

    // إضافة تأثيرات للبطاقات عند التمرير
    const cards = document.querySelectorAll('.feature-card, .service-card, .philosophy-card, .portfolio-item, .skill-category, .contact-card, .tool-item');
    
    function checkCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // إعداد البطاقات الأولية
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // تفعيل تأثيرات البطاقات عند التحميل
    setTimeout(checkCards, 300);
    
    // تفعيل تأثيرات البطاقات عند التمرير
    window.addEventListener('scroll', checkCards);
    
    // تفعيل تأثيرات عند التمرير
    window.addEventListener('scroll', function() {
        animateSkills();
        animateStats();
    });
    
    // تهيئة اللغة الافتراضية
    changeLanguage('ar');
    
    // إخفاء زر الرجوع في الصفحة الرئيسية
    backHomeBtn.style.display = 'none';
    
    // تفعيل تأثيرات عند التحميل
    setTimeout(() => {
        animateStats();
        animateSkills();
    }, 500);
});