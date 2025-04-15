export default {
    name: 'Home',
    data() {
      return {
        currentSlide: 0
      }
    },
    mounted() {
      this.setupHorizontalScroll();
      this.updateActiveSlide();
    },
    methods: {
      setupHorizontalScroll() {
        const container = document.querySelector('.app-preview-container');
        const wrapper = document.querySelector('.app-preview-wrapper');
        let isScrolling = false;
        let isMouseInContainer = false;
        let isInPreviewSection = false;
  
        const scrollToSlide = (index) => {
          if (isScrolling) return;
          isScrolling = true;
          
          const slideWidth = window.innerWidth;
          wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
          this.currentSlide = index;
          this.updateActiveSlide();
          
          setTimeout(() => {
            isScrolling = false;
          }, 500);
        };
  
        const handleScroll = (e) => {
          if (isInPreviewSection) {
            if (this.currentSlide === 0 && e.deltaY < 0) {
              return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            if (!isMouseInContainer) return;
            
            if (isScrolling) return;
            
            if (e.deltaY > 0 && this.currentSlide < wrapper.children.length - 1) {
              this.currentSlide++;
              scrollToSlide(this.currentSlide);
            } else if (e.deltaY < 0 && this.currentSlide > 0) {
              this.currentSlide--;
              scrollToSlide(this.currentSlide);
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
        window.addEventListener('touchmove', (e) => {
          if (isInPreviewSection && this.currentSlide > 0) {
            e.preventDefault();
          }
        }, { passive: false });
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