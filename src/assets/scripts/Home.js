import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Home',
  data() {
    return {
      currentSlide: 0,
      latestReleaseDate: new Date('2025-04-17'),
      betaReleaseDate: new Date('2025-06-01'),
      betaReleaseUrl: 'https://github.com/mathiiiiiis/SonoAPK/releases/download/1.0.4-beta%2B2ffb385/1.0.4-beta+2ffb385.apk',
      touchStartX: 0,
      touchEndX: 0,
      isAnimating: false,
      showModal: false,
      showDownloadModal: false,
      showUnavailableLatestModal: false,
      previews: [
        {
          title: "What is Sono?",
          description: "A music player that allows you to view and play all your local music with advanced controls and visualizations.",
          image: new URL('@/assets/images/screenshots/NowPlayingScreen.webp', import.meta.url).href
        },
        {
          title: "Organized Library",
          description: "Keep all your music organized and easily accessible in one place with intelligent sorting and filtering options.",
          image: new URL('@/assets/images/screenshots/LibraryScreen.webp', import.meta.url).href
        },
        {
          title: "Powerful Search",
          description: "Find any track, artist, or album instantly with our lightning-fast search engine.",
          image: new URL('@/assets/images/screenshots/SearchScreen.webp', import.meta.url).href
        },
        {
          title: "Your Music Dashboard",
          description: "Access all your favorite tracks, playlists and listening history in one place with personalized recommendations.",
          image: new URL('@/assets/images/screenshots/HomeScreen.webp', import.meta.url).href
        },
        {
          title: "Artist View",
          description: "View all the albums and songs from one artist with beautiful visual layouts and artist information.",
          image: new URL('@/assets/images/screenshots/ArtistScreen.webp', import.meta.url).href
        }
      ]
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
    
    this.scrollToSlide(0);
    this.setupEventListeners();

    const text = document.querySelector('.animated-text');
    if (text) {
      this.setupTextAnimation(text);
    }
  },
  beforeDestroy() {
    this.removeEventListeners();
  },
  methods: {
    setupTextAnimation(element) {
      const text = element.textContent;
      const splitText = text.split('');
      
      element.textContent = '';
      
      splitText.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.animation = `float 3s ease-in-out infinite ${index * 0.1}s`;
        element.appendChild(span);
      });
    },
    getRelativeTime(date) {
      if (!date) return 'Coming soon';
      
      const now = new Date();
      const diffTime = date - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'Today';
      if (diffDays > 0) return `In ${diffDays} days`;
      
      const pastDays = Math.abs(diffDays);
      if (pastDays < 7) return `${pastDays} days ago`;
      if (pastDays < 30) return `${Math.floor(pastDays / 7)} weeks ago`;
      if (pastDays < 365) return `${Math.floor(pastDays / 30)} months ago`;
      return `${Math.floor(pastDays / 365)} years ago`;
    },
    handleLatestDownloadClick() {
      this.showUnavailableLatestModal = true;
    },
    closeUnavailableLatestModal() {
      this.showUnavailableLatestModal = false;
    },
    downloadBeta() {
      window.location.href = this.betaReleaseUrl;
      setTimeout(() => {
        this.showDownloadModal = true;
      }, 500);
    },
    downloadBetaAndCloseModal() {
      this.downloadBeta();
      this.closeUnavailableLatestModal();
    },
    closeModal() {
      this.showModal = false;
    },
    closeDownloadModal() {
      this.showDownloadModal = false;
    },
    setupEventListeners() {
      const container = document.querySelector('.app-preview-container');
      if (container) {
        container.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        container.addEventListener('touchmove', this.handleTouchMove, { passive: true });
        container.addEventListener('touchend', this.handleTouchEnd);
        container.addEventListener('wheel', this.handleWheel, { passive: false });
      }
      
      window.addEventListener('resize', this.handleResize);
    },
    removeEventListeners() {
      const container = document.querySelector('.app-preview-container');
      if (container) {
        container.removeEventListener('touchstart', this.handleTouchStart);
        container.removeEventListener('touchmove', this.handleTouchMove);
        container.removeEventListener('touchend', this.handleTouchEnd);
        container.removeEventListener('wheel', this.handleWheel);
      }
      
      window.removeEventListener('resize', this.handleResize);
    },
    handleResize() {
      AOS.refresh();
      this.scrollToSlide(this.currentSlide, false);
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.isAnimating) return;
      const swipeThreshold = 50;
      const diff = this.touchStartX - this.touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && this.currentSlide < this.previews.length - 1) {
          this.scrollToSlide(this.currentSlide + 1);
        } else if (diff < 0 && this.currentSlide > 0) {
          this.scrollToSlide(this.currentSlide - 1);
        }
      }
    },
    handleWheel(e) {
      if (this.isAnimating) return;
      
      const sensitivity = 50;
      if (Math.abs(e.deltaY) < sensitivity) return;
      
      if (e.deltaY < 0 && this.currentSlide === 0) {
        return;
      }

      if (e.deltaY > 0 && this.currentSlide === this.previews.length - 1) {
        return;
      }

      e.preventDefault();
      
      if (e.deltaY > 0 && this.currentSlide < this.previews.length - 1) {
        this.scrollToSlide(this.currentSlide + 1);
      } else if (e.deltaY < 0 && this.currentSlide > 0) {
        this.scrollToSlide(this.currentSlide - 1);
      }
    },
    scrollToPreview() {
      const previewSection = this.$refs.previewSection;
      if (previewSection) {
        previewSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToSlide(index, animate = true) {
      if (this.isAnimating && animate) return;
      if (animate) this.isAnimating = true;
      
      this.currentSlide = index;
      const wrapper = document.querySelector('.app-preview-wrapper');
      const previews = document.querySelectorAll('.app-preview');
      
      if (wrapper) {
        wrapper.style.transition = animate ? 'transform 0.6s ease-out' : 'none';
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        
        previews.forEach((preview, i) => {
          preview.classList.toggle('active', i === index);
          preview.style.opacity = i === index ? '1' : '0';
        });
        
        if (animate) {
          setTimeout(() => {
            AOS.refresh();
            this.isAnimating = false;
          }, 600);
        }
      }
    }
  }
}
