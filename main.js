
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });


            // Initialize Swiper for Testimonials
    const swiper = new Swiper('.testimonial-slider', {
        // How many slides to show
        slidesPerView: 1,
        // Space between slides
        spaceBetween: 30,
        // Autoplay settings
        autoplay: {
            delay: 5000, // 5 seconds between slides
            disableOnInteraction: false,
        },
        // Loop slides
        loop: true,
        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px (tablets)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    });


      // JavaScript for FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isVisible = !answer.classList.contains('hidden');
            
            // Close all other answers first
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-answer').classList.add('hidden');
                otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
            });
            
            // Toggle the clicked one
            if (!isVisible) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });


       // JavaScript for Live Chat Widget
    const chatOpenBtn = document.getElementById('chat-open-btn');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatWidget = document.getElementById('chat-widget');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat widget visibility
    chatOpenBtn.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        chatOpenBtn.classList.toggle('hidden');
    });

    chatCloseBtn.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        chatOpenBtn.classList.toggle('hidden');
    });

    // Function to add a message to the chat
    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type} p-3 rounded-lg max-w-xs`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    // Function to handle sending a message
    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        addMessage(userMessage, 'user-message');
        chatInput.value = '';

        // Simulate a bot response after a short delay
        setTimeout(() => {
            const botResponse = "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call us at +1 (555) 123-4567.";
            addMessage(botResponse, 'bot-message');
        }, 1500);
    }

    // Event listeners for sending message
    chatSendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });



         const roomSliderOptions = {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };

        const roomSlider1 = new Swiper('.room-slider-1', roomSliderOptions);
        const roomSlider2 = new Swiper('.room-slider-2', roomSliderOptions);
        const roomSlider3 = new Swiper('.room-slider-3', roomSliderOptions);


              // JavaScript for Synced Galleries
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        var galleryMain = new Swiper('.gallery-main', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });




          // JavaScript for Multi-Step Booking Form
        const steps = document.querySelectorAll('.booking-step');
        const progressSteps = document.querySelectorAll('.progress-step');
        const progressLines = document.querySelectorAll('.progress-line');
        
        const nextBtn1 = document.getElementById('btn-next-1');
        const nextBtn2 = document.getElementById('btn-next-2');
        const backBtn1 = document.getElementById('btn-back-1');
        const backBtn2 = document.getElementById('btn-back-2');
        
        let currentStep = 1;

        const updateSteps = () => {
            steps.forEach((step, index) => {
                if (index + 1 === currentStep) {
                    step.classList.remove('hidden');
                } else {
                    step.classList.add('hidden');
                }
            });

            progressSteps.forEach((step, index) => {
                const circle = step.querySelector('.progress-circle');
                step.classList.remove('active', 'completed');
                if (index + 1 < currentStep) {
                    step.classList.add('completed');
                    circle.innerHTML = '&#10003;'; // Checkmark
                } else if (index + 1 === currentStep) {
                    step.classList.add('active');
                     circle.innerHTML = index + 1;
                } else {
                     circle.innerHTML = index + 1;
                }
            });
            
            progressLines.forEach((line, index) => {
                if (index + 1 < currentStep) {
                    line.classList.add('active');
                } else {
                    line.classList.remove('active');
                }
            });
        };

        nextBtn1.addEventListener('click', () => { currentStep = 2; updateSteps(); });
        nextBtn2.addEventListener('click', () => { currentStep = 3; updateSteps(); });
        backBtn1.addEventListener('click', () => { currentStep = 1; updateSteps(); });
        backBtn2.addEventListener('click', () => { currentStep = 2; updateSteps(); });