// Language Translation System
const translations = {
    tr: {
        // Navigation
        'home': 'Ana Sayfa',
        'features': 'Özellikler',
        'customers': 'Müşteriler',
        'pricing': 'Fiyatlandırma',
        'contact': 'İletişim',
        
        // Hero Section
        'hero-title': 'Restoranınızı Dijital Dünyada Parlat',
        'hero-subtitle': 'QR kodlu elektronik menü ile yemek deneyiminde devrim yaratın. Kağıt menülere veda edin, kolay ve modern dijital deneyime merhaba deyin.',
        'get-started': 'Hemen Başla',
        'learn-more': 'Daha Fazla Bilgi',
        
        // Features Section
        'main-features': 'Ana Özellikler',
        'qr-access': 'QR Kod ile Erişim',
        'qr-description': 'QR tarama ile dijital kataloğa kolay erişim',
        'multilingual': 'Çoklu Dil',
        'multilingual-description': 'Çoklu dil desteği',
        'order-system': 'Sipariş Sistemi',
        'order-description': 'Uygulama veya WhatsApp üzerinden entegre siparişler',
        
        // Feature Details
        'instant-menu': 'Anında menü erişimi',
        'no-app-required': 'Uygulama yükleme gerektirmez',
        'works-all-phones': 'Tüm akıllı telefonlarda çalışır',
        'multi-language-support': 'Çoklu dil desteği',
        'easy-language-switch': 'Kolay dil değişimi',
        'auto-detection': 'Otomatik algılama',
        'custom-translations': 'Özel çeviriler',
        'multichannel-orders': 'Çok kanallı siparişler',
        'shopping-cart': 'Alışveriş sepeti özelliği',
        
        // Customers Section
        'our-customers': 'Müşterilerimiz',
        'visit-site': 'Siteyi Ziyaret Et',
        
        // Pricing Section
        'pricing-plans': 'Fiyatlandırma Planları',
        'basic-plan': 'Temel Paket',
        'main-plan': 'Ana Paket',
        'basic-description': 'Sadece ürün görüntüleme paketi',
        'main-description': 'Siparişleri destekleyen paket',
        'per-year': '/yıl',
        'choose-plan': 'Paketi Seç',
        'products-count': '50 Ürün sayısı',
        'categories-count': '5 Kategori sayısı', 
        'supported-languages': '1 Desteklenen dil sayısı',
        'supported-branches': '1 Desteklenen şube sayısı',
        'whatsapp-orders': 'WhatsApp siparişleri',
        'catalog-orders': 'Katalog siparişleri',
        'table-orders': 'Masa siparişleri',
        'prep-time': 'Sipariş hazırlama süresi',
        'coupons': 'Kuponlar',
        'catalog-customization': 'Katalog renk özelleştirme',
        'dark-light-mode': 'Koyu/Açık mod geçişi',
        'social-sharing': 'Sosyal medya bağlantıları paylaşma',
        'services': 'Hizmetler (Sunucu + Domain)',
        
        // Main Plan specific features
        'main-products-count': '150 Ürün sayısı',
        'main-categories-count': '16 Kategori sayısı',
        'main-supported-languages': '4 Desteklenen dil sayısı',
        'main-supported-branches': '2 Desteklenen şube sayısı',
        
        // Contact Section
        'contact-us': 'İletişim',
        'get-in-touch': 'Bizimle İletişim',
        'whatsapp-contact': 'WhatsApp ile İletişim',
        'restaurant-name': 'Restoran Adı',
        'email': 'E-posta',
        'phone': 'Telefon Numarası',
        'message': 'Mesaj',
        'send-message': 'Mesaj Gönder',
        
        // Footer
        'footer-description': 'Dijital restoran mükemmelliğine açılan kapınız',
        'quick-links': 'Hızlı Bağlantılar',
        'rights-reserved': 'Tüm hakları saklıdır.'
    },
    
    en: {
        // Navigation
        'home': 'Home',
        'features': 'Features',
        'customers': 'Customers',
        'pricing': 'Pricing',
        'contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Make Your Restaurant Shine Digitally',
        'hero-subtitle': 'Transform dining experience with QR code electronic menu. Say goodbye to paper menus and hello to an easy and modern digital experience.',
        'get-started': 'Get Started',
        'learn-more': 'Learn More',
        
        // Features Section
        'main-features': 'Main Features',
        'qr-access': 'Access with QR Code',
        'qr-description': 'Easy access to digital catalog via QR scanning',
        'multilingual': 'Multilingual',
        'multilingual-description': 'Multilingual support',
        'order-system': 'Order System',
        'order-description': 'Integrated orders via app or WhatsApp',
        
        // Feature Details
        'instant-menu': 'Instant menu access',
        'no-app-required': 'No app installation required',
        'works-all-phones': 'Works on all smartphones',
        'multi-language-support': 'Support multiple languages',
        'easy-language-switch': 'Easy language switching',
        'auto-detection': 'Automatic detection',
        'custom-translations': 'Custom translations',
        'multichannel-orders': 'Multichannel orders',
        'shopping-cart': 'Shopping cart functionality',
        
        // Customers Section
        'our-customers': 'Our Customers',
        'visit-site': 'Visit Site',
        
        // Pricing Section
        'pricing-plans': 'Pricing Plans',
        'basic-plan': 'Basic Plan',
        'main-plan': 'Main Plan',
        'basic-description': 'Package for showcasing products only',
        'main-description': 'Plan supporting orders',
        'per-year': '/year',
        'choose-plan': 'Choose Plan',
        'products-count': '50 Number of products',
        'categories-count': '5 Number of categories',
        'supported-languages': '1 Supported language number',
        'supported-branches': '1 Supported branch number',
        'whatsapp-orders': 'Orders via WhatsApp',
        'catalog-orders': 'Orders via catalog',
        'table-orders': 'Table orders',
        'prep-time': 'Order preparation time',
        'coupons': 'Coupons',
        'catalog-customization': 'Catalog color customization',
        'dark-light-mode': 'Dark/Light mode switching',
        'social-sharing': 'Share social links',
        'services': 'Services (Server + Domain)',
        
        // Main Plan specific features
        'main-products-count': '150 Number of products',
        'main-categories-count': '16 Number of categories',
        'main-supported-languages': '4 Supported language number',
        'main-supported-branches': '2 Supported branch number',
        
        // Contact Section
        'contact-us': 'Contact Us',
        'get-in-touch': 'Get In Touch',
        'whatsapp-contact': 'Contact via WhatsApp',
        'restaurant-name': 'Restaurant Name',
        'email': 'Email',
        'phone': 'Phone Number',
        'message': 'Message',
        'send-message': 'Send Message',
        
        // Footer
        'footer-description': 'Your gateway to digital restaurant excellence',
        'quick-links': 'Quick Links',
        'rights-reserved': 'All rights reserved.'
    },
    
    ar: {
        // Navigation
        'home': 'الرئيسية',
        'features': 'الميزات',
        'customers': 'عملاؤنا',
        'pricing': 'التسعير',
        'contact': 'اتصل بنا',
        
        // Hero Section
        'hero-title': 'اجعل مطعمك يتألق رقميًا',
        'hero-subtitle': 'أحدث تغييرًا في تجربة الطعام مع القائمة الإلكترونية عبر رمز الاستجابة السريعة. وداعًا للقوائم الورقية، ومرحبًا بتجربة رقمية سهلة وعصرية.',
        'get-started': 'ابدأ الآن',
        'learn-more': 'معرفة المزيد',
        
        // Features Section
        'main-features': 'الميزات الرئيسية',
        'qr-access': 'الوصول بكود QR',
        'qr-description': 'وصول سهل للكتالوج الرقمي عبر مسح QR',
        'mobile-apps': 'التطبيقات المحمولة',
        'mobile-description': 'تطبيقات مخصصة لـ Android و iOS',
        'multilingual': 'متعدد اللغات',
        'multilingual-description': 'دعم لغات متعددة',
        'branch-management': 'إدارة الفروع',
        'branch-description': 'إدارة فروع متعددة بكفاءة',
        'order-system': 'نظام الطلبات',
        'order-description': 'طلبات متكاملة عبر التطبيق أو واتس اب',
        'notifications': 'الإشعارات',
        'notifications-description': 'إبقاء العملاء على اطلاع',
        
        // Feature Details
        'instant-menu': 'وصول فوري للقائمة',
        'no-app-required': 'لا حاجة لتثبيت تطبيق',
        'works-all-phones': 'يعمل على جميع الهواتف الذكية',
        'superior-experience': 'تجربة تطبيق مميزة',
        'instant-notifications': 'إشعارات فورية',
        'all-stores': 'تطبيق على جميع المتاجر',
        'fast-loading': 'أوقات تحميل سريعة',
        'multi-language-support': 'دعم متعدد اللغات',
        'easy-language-switch': 'تبديل اللغة بسهولة',
        'auto-detection': 'اكتشاف تلقائي',
        'custom-translations': 'ترجمات مخصصة',
        'central-management': 'إدارة مركزية',
        'branch-specific-menus': 'قوائم خاصة بالفروع',
        'independent-pricing': 'تسعير مستقل',
        'easy-branch-switch': 'تبديل الفروع بسهولة',
        'multichannel-orders': 'طلبات متعددة القنوات',
        'shopping-cart': 'وظيفة سلة التسوق',
        'order-tracking': 'تتبع الطلبات',
        'multiple-payments': 'خيارات دفع متعددة',
        'special-offers': 'تنبيهات العروض الخاصة',
        'new-menu-items': 'العناصر الجديدة في القائمة',
        'order-status-updates': 'تحديثات حالة الطلب',
        'custom-notifications': 'إشعارات مخصصة',
        
        // Customers Section
        'our-customers': 'عملاؤنا',
        'visit-site': 'زيارة الموقع',
        
        // Pricing Section
        'pricing-plans': 'خطط التسعير',
        'basic-plan': 'الباقة الأساسية',
        'main-plan': 'الباقة الرئيسية',
        'basic-description': 'باقة لعرض المنتجات فقط',
        'main-description': 'باقة تدعم الطلبات',
        'per-year': '/سنويًا',
        'choose-plan': 'اختر الباقة',
        'products-count': '50 عدد المنتجات',
        'categories-count': '5 عدد الفئات',
        'supported-languages': '1 عدد اللغات المدعومة',
        'supported-branches': '1 عدد الفروع المدعومة',
        'whatsapp-orders': 'طلبات عبر WhatsApp',
        'catalog-orders': 'طلبات عبر الكتالوج',
        'table-orders': 'طلبات المائدة',
        'prep-time': 'وقت تحضير الطلب',
        'coupons': 'القسائم',
        'catalog-customization': 'تخصيص لون الكتالوج',
        'dark-light-mode': 'التبديل بين الوضع الداكن/الفاتح',
        'social-sharing': 'مشاركة روابط التواصل الاجتماعي',
        'android-ios-apps': 'تطبيقات Android + iOS',
        'services': 'الخدمات (الخادم + النطاق)',
        
        // Main Plan specific features
        'main-products-count': '150 عدد المنتجات',
        'main-categories-count': '16 عدد الفئات',
        'main-supported-languages': '4 عدد اللغات المدعومة',
        'main-supported-branches': '2 عدد الفروع المدعومة',
        
        // Contact Section
        'contact-us': 'اتصل بنا',
        'get-in-touch': 'تواصل معنا',
        'whatsapp-contact': 'تواصل عبر واتساب',
        'restaurant-name': 'اسم المطعم',
        'email': 'البريد الإلكتروني',
        'phone': 'رقم الهاتف',
        'message': 'الرسالة',
        'send-message': 'إرسال الرسالة',
        
        // Footer
        'footer-description': 'بوابتك إلى التميز في المطاعم الرقمية',
        'quick-links': 'روابط سريعة',
        'rights-reserved': 'جميع الحقوق محفوظة.'
    }
};

// Current language
let currentLang = 'tr';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initializeLanguage();
    
    // Set up language selector
    setupLanguageSelector();
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Set up mobile menu
    setupMobileMenu();
    
    // Set up contact form
    setupContactForm();
    
    // Set up particle animation
    createParticles();
    
    // Set up scroll animations
    setupScrollAnimations();
});

// Initialize language based on URL or default
function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    
    if (langFromUrl && translations[langFromUrl]) {
        currentLang = langFromUrl;
    } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            currentLang = browserLang;
        }
    }
    
    // Apply language
    translatePage();
    
    // Update language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLang;
    }
    
    // Update HTML direction for Arabic
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// Setup language selector
function setupLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // تأكد من أن القائمة المنسدلة تعمل بشكل صحيح
        languageSelect.style.pointerEvents = 'auto';
        languageSelect.style.position = 'relative';
        languageSelect.style.zIndex = '10000';
        
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
        
        // إضافة معالج للنقر لضمان فتح القائمة
        languageSelect.addEventListener('click', function(e) {
            e.stopPropagation();
            this.focus();
        });
        
        // إضافة معالج لمنع إغلاق القائمة عند النقر عليها
        languageSelect.addEventListener('mousedown', function(e) {
            e.stopPropagation();
        });
    }
}

// Change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        translatePage();
        
        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
        
        // Update HTML direction for Arabic
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }
}

// Translate page elements
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside or on close button
        document.addEventListener('click', function(e) {
            const languageSelect = document.getElementById('language-select');
            // لا تغلق القائمة إذا كان النقر على قائمة اللغات
            if (languageSelect && (languageSelect.contains(e.target) || e.target === languageSelect)) {
                return;
            }
            
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on the close button (×)
        navMenu.addEventListener('click', function(e) {
            if (e.target === navMenu) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Handle resize event
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const restaurantName = formData.get('restaurant-name') || this.querySelector('input[type="text"]').value;
            const email = formData.get('email') || this.querySelector('input[type="email"]').value;
            const phone = formData.get('phone') || this.querySelector('input[type="tel"]').value;
            const message = formData.get('message') || this.querySelector('textarea').value;
            
            // Create WhatsApp message
            const whatsappMessage = `${translations[currentLang]['restaurant-name']}: ${restaurantName}\n${translations[currentLang]['email']}: ${email}\n${translations[currentLang]['phone']}: ${phone}\n${translations[currentLang]['message']}: ${message}`;
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/905385818771?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            this.reset();
        });
    }
}

// Create floating 3D menu cards with food images
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.appendChild(container);
    }
    
    const particles = document.querySelector('.particles');
    
    // Food items with colors and emoji representations
    const foodItems = [
        { name: 'Pizza', emoji: '🍕', bg: 'linear-gradient(145deg, #fff7f7, #ffe6e6)', accent: '#ff6b6b' },
        { name: 'Burger', emoji: '🍔', bg: 'linear-gradient(145deg, #fffaf0, #fff0e6)', accent: '#ffa502' },
        { name: 'Sushi', emoji: '🍣', bg: 'linear-gradient(145deg, #f0f8ff, #e6f3ff)', accent: '#4facfe' },
        { name: 'Pasta', emoji: '🍝', bg: 'linear-gradient(145deg, #fffaf0, #fff0e6)', accent: '#ffa502' },
        { name: 'Taco', emoji: '🌮', bg: 'linear-gradient(145deg, #f8fff8, #e6ffe6)', accent: '#51cf66' },
        { name: 'Salad', emoji: '🥗', bg: 'linear-gradient(145deg, #f8fff8, #e6ffe6)', accent: '#51cf66' },
        { name: 'Steak', emoji: '🥩', bg: 'linear-gradient(145deg, #fff7f7, #ffe6e6)', accent: '#ff6b6b' },
        { name: 'Chicken', emoji: '🍗', bg: 'linear-gradient(145deg, #fffaf0, #fff0e6)', accent: '#ffa502' },
        { name: 'Seafood', emoji: '🦐', bg: 'linear-gradient(145deg, #f0f8ff, #e6f3ff)', accent: '#4facfe' },
        { name: 'Soup', emoji: '🍲', bg: 'linear-gradient(145deg, #fffaf0, #fff0e6)', accent: '#ffa502' },
        { name: 'Dessert', emoji: '🍰', bg: 'linear-gradient(145deg, #fff8f0, #ffeee6)', accent: '#ff8cc8' },
        { name: 'Ice Cream', emoji: '🍨', bg: 'linear-gradient(145deg, #f0ffff, #e6ffff)', accent: '#22d3ee' },
        { name: 'Coffee', emoji: '☕', bg: 'linear-gradient(145deg, #fefefe, #f5f5f5)', accent: '#6c757d' },
        { name: 'Sandwich', emoji: '🥪', bg: 'linear-gradient(145deg, #fffaf0, #fff0e6)', accent: '#ffa502' },
        { name: 'Ramen', emoji: '🍜', bg: 'linear-gradient(145deg, #fff7f7, #ffe6e6)', accent: '#ff6b6b' },
        { name: 'Dumplings', emoji: '🥟', bg: 'linear-gradient(145deg, #f8fff8, #e6ffe6)', accent: '#51cf66' }
    ];
    
    // Create menu cards
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random food item
        const foodItem = foodItems[Math.floor(Math.random() * foodItems.length)];
        particle.style.background = foodItem.bg;
        
        // Add menu card elements
        const cardContent = document.createElement('div');
        cardContent.style.width = '100%';
        cardContent.style.height = '100%';
        cardContent.style.position = 'relative';
        cardContent.style.display = 'flex';
        cardContent.style.flexDirection = 'column';
        cardContent.style.alignItems = 'center';
        cardContent.style.justifyContent = 'center';
        cardContent.style.padding = '8px';
        
        // Add food emoji/image
        const foodEmoji = document.createElement('div');
        foodEmoji.style.fontSize = '24px';
        foodEmoji.style.marginBottom = '4px';
        foodEmoji.style.textAlign = 'center';
        foodEmoji.style.lineHeight = '1';
        foodEmoji.textContent = foodItem.emoji;
        
        // Add food name
        const foodName = document.createElement('div');
        foodName.style.fontSize = '8px';
        foodName.style.fontWeight = 'bold';
        foodName.style.color = foodItem.accent;
        foodName.style.textAlign = 'center';
        foodName.style.lineHeight = '1';
        foodName.style.marginTop = '2px';
        foodName.textContent = foodItem.name;
        
        // Add price indicator
        const priceIndicator = document.createElement('div');
        priceIndicator.style.fontSize = '6px';
        priceIndicator.style.color = '#666';
        priceIndicator.style.textAlign = 'center';
        priceIndicator.style.marginTop = '2px';
        priceIndicator.style.opacity = '0.7';
        const prices = ['$12', '$15', '$18', '$22', '$25', '$8', '$10', '$14', '$16', '$20'];
        priceIndicator.textContent = prices[Math.floor(Math.random() * prices.length)];
        
        cardContent.appendChild(foodEmoji);
        cardContent.appendChild(foodName);
        cardContent.appendChild(priceIndicator);
        particle.appendChild(cardContent);
        
        // Position and animation
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 10) + 's';
        
        particles.appendChild(particle);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.15)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// Loading screen
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Add loading screen HTML
document.addEventListener('DOMContentLoaded', function() {
    const loadingHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', loadingHTML);
});

// Smooth scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal animation
revealOnScroll();

// Demo Restaurant Page Transition System
function startDemoTransition(planType) {
    // Start page fade out
    document.body.classList.add('fade-out');
    
    setTimeout(() => {
showDemoRestaurant(planType);
    }, planType === 'basic' ? 1000 : 2000);
}

function showDemoRestaurant(planType) {
    const demoTexts = {
        tr: {
            restaurantName: planType === 'main' ? 'Premium Restoran' : 'Demo Restoran',
            tagline: planType === 'main' ? 'Gelişmiş dijital lezzet deneyimi!' : 'Dijital lezzet deneyimi!',
            mainDishes: 'Ana Yemekler',
            desserts: 'Tatlılar',
            drinks: 'İçecekler',
            footerText: planType === 'main' ? 'Premium dijital menünüz hazırlanıyor...' : 'Dijital menünüz hazırlanıyor...',
            addToCart: 'Sepete Ekle',
            viewDetails: 'Detaylar',
            popular: 'Popüler',
            spicy: 'Acılı',
            vegetarian: 'Vejetaryen',
            new: 'Yeni',
            premium: 'Premium',
            bestseller: 'En Çok Satan'
        },
        en: {
            restaurantName: planType === 'main' ? 'Premium Restaurant' : 'Demo Restaurant',
            tagline: planType === 'main' ? 'Advanced digital taste experience!' : 'Digital taste experience!',
            mainDishes: 'Main Dishes',
            desserts: 'Desserts',
            drinks: 'Beverages',
            footerText: planType === 'main' ? 'Your premium digital menu is being prepared...' : 'Your digital menu is being prepared...',
            addToCart: 'Add to Cart',
            viewDetails: 'View Details',
            popular: 'Popular',
            spicy: 'Spicy',
            vegetarian: 'Vegetarian',
            new: 'New',
            premium: 'Premium',
            bestseller: 'Bestseller'
        },
        ar: {
            restaurantName: planType === 'main' ? 'المطعم المتميز' : 'مطعم التجربة',
            tagline: planType === 'main' ? 'تجربة نكهة رقمية متقدمة!' : 'استمتع بالنكهة الرقمية!',
            mainDishes: 'الأطباق الرئيسية',
            desserts: 'التحليات',
            drinks: 'المشروبات',
            footerText: planType === 'main' ? 'يتم الآن إعداد قائمتك الرقمية المتميزة...' : 'يتم الآن إعداد قائمتك الرقمية...',
            addToCart: 'إضافة للسلة',
            viewDetails: 'التفاصيل',
            popular: 'الأكثر طلباً',
            spicy: 'حار',
            vegetarian: 'نباتي',
            new: 'جديد',
            premium: 'مميز',
            bestseller: 'الأكثر مبيعاً'
        }
    };
    
    const lang = currentLang;
    const texts = demoTexts[lang];
    
    const demoOverlay = document.createElement('div');
    demoOverlay.className = 'demo-overlay';
    demoOverlay.innerHTML = `
        <div class="demo-restaurant" data-plan="${planType}">
            <div class="demo-header">
                <div class="demo-logo">🍽️</div>
                <div class="demo-restaurant-name">
                    <div class="demo-skeleton header-title"></div>
                </div>
                <div class="demo-tagline">
                    <div class="demo-skeleton header-subtitle"></div>
                </div>
                <div class="demo-nav">
                    <div class="demo-nav-item active" data-category="main">${texts.mainDishes}</div>
                    <div class="demo-nav-item" data-category="desserts">${texts.desserts}</div>
                    <div class="demo-nav-item" data-category="drinks">${texts.drinks}</div>
                </div>
            </div>
            
            <div class="demo-menu-section">
                <div class="demo-category active" data-category="main">
                    <div class="demo-menu-grid">
                        <div class="demo-menu-item featured ${planType === 'main' ? 'premium' : ''}">
                            <div class="demo-item-badge">${planType === 'main' ? texts.premium : texts.popular}</div>
                            ${planType === 'main' ? '<div class="demo-premium-indicator">✨</div>' : ''}
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                ${planType === 'main' ? '<div class="demo-skeleton item-ingredients"></div>' : ''}
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                    ${planType === 'main' ? '<div class="demo-skeleton item-nutrition"></div>' : ''}
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                    ${planType === 'main' ? '<div class="demo-skeleton action-btn"></div>' : ''}
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item">
                            <div class="demo-item-badge new">${texts.new}</div>
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item">
                            <div class="demo-item-badge spicy">${texts.spicy}</div>
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item">
                            <div class="demo-item-badge vegetarian">${texts.vegetarian}</div>
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        ${planType === 'main' ? `
                        <div class="demo-menu-item premium">
                            <div class="demo-item-badge">${texts.bestseller}</div>
                            <div class="demo-premium-indicator">⭐</div>
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                <div class="demo-skeleton item-ingredients"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                    <div class="demo-skeleton item-nutrition"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item premium">
                            <div class="demo-item-badge">${texts.premium}</div>
                            <div class="demo-premium-indicator">💎</div>
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-skeleton item-desc short"></div>
                                <div class="demo-skeleton item-ingredients"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                    <div class="demo-skeleton item-nutrition"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
                
                <div class="demo-category" data-category="desserts">
                    <div class="demo-menu-grid">
                        <div class="demo-menu-item">
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item">
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="demo-category" data-category="drinks">
                    <div class="demo-menu-grid">
                        <div class="demo-menu-item">
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-menu-item">
                            <div class="demo-skeleton item-image"></div>
                            <div class="demo-item-content">
                                <div class="demo-skeleton item-name"></div>
                                <div class="demo-skeleton item-desc"></div>
                                <div class="demo-item-footer">
                                    <div class="demo-skeleton item-price"></div>
                                    <div class="demo-skeleton item-rating"></div>
                                </div>
                                <div class="demo-item-actions">
                                    <div class="demo-skeleton action-btn"></div>
                                    <div class="demo-skeleton action-btn"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="demo-footer">
                <div class="demo-footer-text">${texts.footerText}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(demoOverlay);

    // Show overlay
    setTimeout(() => {
        demoOverlay.classList.add('active');
        const demoRestaurant = demoOverlay.querySelector('.demo-restaurant');
        demoRestaurant.classList.add('show');
        
        // Setup navigation
        setupDemoNavigation();
        
setTimeout(() => {
        showFinalLoading(planType);
    }, planType === 'basic' ? 8000 : 12000);
    }, 100);
}

function showFinalLoading(planType) {
    const loadingTexts = {
        tr: {
            loadingText: 'WhatsApp\'a yönlendiriliyor...',
            loadingSubtext: 'Lütfen bekleyin'
        },
        en: {
            loadingText: 'Redirecting to WhatsApp...',
            loadingSubtext: 'Please wait'
        },
        ar: {
            loadingText: 'يتم الآن التحويل إلى الواتساب...',
            loadingSubtext: 'نرجو الانتظار قليلاً'
        }
    };
    
    const texts = loadingTexts[currentLang];
    
    // Add blur effect to demo restaurant
    const demoRestaurant = document.querySelector('.demo-restaurant');
    if (demoRestaurant) {
        demoRestaurant.classList.add('blur-out');
    }
    
    const finalLoading = document.createElement('div');
    finalLoading.className = 'demo-final-loading';
    finalLoading.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">${texts.loadingText}</div>
        <div class="loading-subtext">${texts.loadingSubtext}</div>
        <div class="loading-progress">
            <div class="progress-bar"></div>
        </div>
    `;
    
    document.body.appendChild(finalLoading);
    
    setTimeout(() => {
        finalLoading.classList.add('active');
        
        // Start progress bar animation
        const progressBar = finalLoading.querySelector('.progress-bar');
        progressBar.style.animation = 'progressFill 3s ease-in-out forwards';
        
        // Redirect to WhatsApp
        setTimeout(() => {
            const planTexts = {
                basic: {
                    tr: 'Temel Paket (100$) hakkında bilgi almak istiyorum',
                    en: 'I want to learn about Basic Package (100$)',
                    ar: 'أريد معرفة المزيد عن الباقة الأساسية (100$)'
                },
                main: {
                    tr: 'Ana Paket (200$) hakkında bilgi almak istiyorum',
                    en: 'I want to learn about Main Package (200$)',
                    ar: 'أريد معرفة المزيد عن الباقة الرئيسية (200$)'
                }
            };
            
            const message = planTexts[planType][currentLang];
            const whatsappUrl = `https://wa.me/905385818771?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Clear page
            setTimeout(() => {
                document.body.classList.remove('fade-out');
                document.querySelector('.demo-overlay').remove();
                document.querySelector('.demo-final-loading').remove();
            }, 1000);
        }, 3000);
    }, 500);
}

// Setup demo navigation
function setupDemoNavigation() {
    const navItems = document.querySelectorAll('.demo-nav-item');
    const categories = document.querySelectorAll('.demo-category');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetCategory = item.dataset.category;
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update active category
            categories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.dataset.category === targetCategory) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Update event listeners to work with new demo system
function setupDemoButtons() {
    const pricingButtons = document.querySelectorAll('.pricing-card .btn-primary');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.pricing-card');
            const planType = card.querySelector('h3').textContent.includes('Temel') ? 'basic' : 'main';
            
            startDemoTransition(planType);
        });
    });
}

// Mobile-specific enhancements
function setupMobileOptimizations() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Touch event optimizations
        setupTouchOptimizations();
        
        // Viewport height fix for mobile browsers
        setupViewportFix();
        
        // Optimize images for mobile
        setupImageOptimization();
    }
}

// Touch event optimizations
function setupTouchOptimizations() {
    // Improve touch target sizes
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach(target => {
        if (target.offsetHeight < 44) {
            target.style.minHeight = '44px';
        }
        if (target.offsetWidth < 44) {
            target.style.minWidth = '44px';
        }
    });
    
    // Enhanced touch feedback with ripple effect
    function createRipple(e, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add touch feedback
    document.addEventListener('touchstart', function(e) {
        const btn = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            btn.style.transition = 'transform 0.1s ease';
            
            // Add ripple effect
            if (e.touches && e.touches.length > 0) {
                createRipple(e.touches[0], btn);
            }
        }
        
        // Add feedback for navigation links
        const navLink = e.target.closest('.nav-menu a');
        if (navLink) {
            navLink.style.transform = 'scale(0.97)';
            navLink.style.transition = 'transform 0.1s ease';
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const btn = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        if (btn) {
            setTimeout(() => {
                btn.style.transform = '';
                btn.style.transition = '';
            }, 100);
        }
        
        // Remove feedback for navigation links
        const navLink = e.target.closest('.nav-menu a');
        if (navLink) {
            setTimeout(() => {
                navLink.style.transform = '';
                navLink.style.transition = '';
            }, 100);
        }
    }, { passive: true });
    
    // Add touch feedback for cards
    document.addEventListener('touchstart', function(e) {
        const card = e.target.closest('.feature-card, .customer-card, .pricing-card');
        if (card) {
            card.style.transform = 'scale(0.98)';
            card.style.transition = 'transform 0.1s ease';
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const card = e.target.closest('.feature-card, .customer-card, .pricing-card');
        if (card) {
            setTimeout(() => {
                card.style.transform = '';
                card.style.transition = '';
            }, 100);
        }
    }, { passive: true });
}

// Viewport height fix for mobile browsers
function setupViewportFix() {
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
        setTimeout(setViewportHeight, 100);
    });
}

// Image optimization for mobile
function setupImageOptimization() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.loading) {
            img.loading = 'lazy';
        }
    });
}

// Orientation change handler
function setupOrientationHandler() {
    let orientationChangeTimeout;
    
    window.addEventListener('orientationchange', function() {
        clearTimeout(orientationChangeTimeout);
        orientationChangeTimeout = setTimeout(() => {
            // Force a repaint to fix layout issues
            document.body.style.display = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.display = '';
            
            // Re-calculate dimensions
            setupViewportFix();
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 100);
    });
}

// Performance optimizations for mobile
function setupMobilePerformanceOptimizations() {
    // Throttle scroll events
    let scrollTimeout;
    let lastScrollTime = 0;
    let ticking = false;
    
    function throttledScroll() {
        const now = Date.now();
        if (now - lastScrollTime > 16) { // ~60fps
            lastScrollTime = now;
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
            }
        }
    }
    
    function handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.backgroundColor = '';
                navbar.style.backdropFilter = '';
                navbar.style.boxShadow = '';
            }
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setupViewportFix();
            // Recalculate touch targets
            setupTouchOptimizations();
        }, 100);
    });
    
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[data-critical]');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
    
    // Optimize font loading
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
    }
}

// Initialize demo buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    setupDemoButtons();
    setupMobileOptimizations();
    setupOrientationHandler();
    setupMobilePerformanceOptimizations();
});

