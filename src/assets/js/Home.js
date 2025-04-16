export default {
    name: 'Home',
    data() {
      return {
        currentSlide: 0,
        touchStartX: 0,
        touchEndX: 0,
        isScrolling: false
      }
    },
    mounted() {
      this.setupHorizontalScroll();
      this.updateActiveSlide();
      this.setupTouchEvents();
    },
    methods: {
      setupTouchEvents() {
        const wrapper = document.querySelector('.app-preview-wrapper');
        
        wrapper.addEventListener('touchstart', (e) => {
          this.touchStartX = e.touches[0].clientX;
        }, { passive: true });
        
        wrapper.addEventListener('touchmove', (e) => {
          if (this.isScrolling) return;
          e.preventDefault();
          this.touchEndX = e.touches[0].clientX;
          this.handleSwipe();
        }, { passive: false });
        
        wrapper.addEventListener('touchend', () => {
          this.touchStartX = 0;
          this.touchEndX = 0;
        }, { passive: true });
      },
      
      handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchEndX - this.touchStartX;
        
        if (Math.abs(swipeDistance) < swipeThreshold) return;
        
        if (swipeDistance > 0 && this.currentSlide > 0) {
          this.scrollToSlide(this.currentSlide - 1);
        } else if (swipeDistance < 0 && this.currentSlide < 4) {
          this.scrollToSlide(this.currentSlide + 1);
        }
      },
      
      scrollToSlide(index) {
        if (this.isScrolling) return;
        this.isScrolling = true;
        
        const wrapper = document.querySelector('.app-preview-wrapper');
        const slideWidth = window.innerWidth;
        wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
        this.currentSlide = index;
        this.updateActiveSlide();
        
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      },
      
      setupHorizontalScroll() {
        const container = document.querySelector('.app-preview-container');
        const wrapper = document.querySelector('.app-preview-wrapper');
        let isMouseInContainer = false;
        let isInPreviewSection = false;
  
        const handleScroll = (e) => {
          if (isInPreviewSection) {
            if (this.currentSlide === 0 && e.deltaY < 0) {
              return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            if (!isMouseInContainer) return;
            
            if (this.isScrolling) return;
            
            if (e.deltaY > 0 && this.currentSlide < wrapper.children.length - 1) {
              this.currentSlide++;
              this.scrollToSlide(this.currentSlide);
            } else if (e.deltaY < 0 && this.currentSlide > 0) {
              this.currentSlide--;
              this.scrollToSlide(this.currentSlide);
            }
          }
        };
  
        const checkScrollPosition = () => {
          const heroHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
          isInPreviewSection = scrollPosition >= heroHeight;
          
          if (isInPreviewSection && this.currentSlide > 0) {
            window.scrollTo(0, heroHeight);
          }
        };
  
        container.addEventListener('mouseenter', () => {
          isMouseInContainer = true;
        });
  
        container.addEventListener('mouseleave', () => {
          isMouseInContainer = false;
        });
  
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('scroll', checkScrollPosition);
      },
      
      updateActiveSlide() {
        const slides = document.querySelectorAll('.app-preview');
        slides.forEach((slide, index) => {
          if (index === this.currentSlide) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
      }
    }
  }