<template>
  <div class="home">
    <div class="hero">
      <h1>SONO</h1>
      <p class="subtitle">local music player</p>
      <div class="cta-buttons">
        <div class="button-container">
          <button class="download" @click="downloadLatest">Download Latest</button>
          <span class="version-text">{{ getRelativeTime() }}</span>
        </div>
        <div class="button-container">
          <button class="download beta" @click="downloadBeta">Download Beta</button>
          <span class="version-text">never</span>
        </div>
      </div>
      <div class="info-box">
        <p>⚠️ Currently, only Android APK downloads are available</p>
      </div>
      <div class="scroll-indicator">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 9L12 14L17 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 15L12 20L17 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    
    <div class="app-preview-container">
      <div class="app-preview-wrapper">
        <div class="app-preview">
          <div class="section-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <div class="screen">
                  <img src="@/assets/images/screenshots/NowPlayingScreen.webp" alt="Sono Library" />
                </div>
              </div>
            </div>
            <div class="info-section">
              <h2>What is Sono?</h2>
              <p>A music player that allows you to view and play all your local music.</p>
            </div>
          </div>
        </div>

        <div class="app-preview">
          <div class="section-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <div class="screen">
                  <img src="@/assets/images/screenshots/LibraryScreen.webp" alt="Sono Library" />
                </div>
              </div>
            </div>
            <div class="info-section">
              <h2>Organized Library</h2>
              <p>Keep all your music organized and easily accessible in one place.</p>
            </div>
          </div>
        </div>

        <div class="app-preview">
          <div class="section-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <div class="screen">
                  <img src="@/assets/images/screenshots/SearchScreen.webp" alt="Sono Search" />
                </div>
              </div>
            </div>
            <div class="info-section">
              <h2>Powerful Search</h2>
              <p>Find any track, artist, or album instantly.</p>
            </div>
          </div>
        </div>

        <div class="app-preview">
          <div class="section-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <div class="screen">
                  <img src="@/assets/images/screenshots/HomeScreen.webp" alt="Sono Home Screen" />
                </div>
              </div>
            </div>
            <div class="info-section">
              <h2>Your Music Dashboard</h2>
              <p>Access all your favorite tracks, playlists and listening history in one place.</p>
            </div>
          </div>
        </div>

        <div class="app-preview">
          <div class="section-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <div class="screen">
                  <img src="@/assets/images/screenshots/ArtistScreen.webp" alt="Sono Artist View" />
                </div>
              </div>
            </div>
            <div class="info-section">
              <h2>Artist View</h2>
              <p>View all the abums and songs from one artist.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation-dots">
        <div 
          v-for="(_, index) in 5" 
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="scrollToSlide(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentSlide: 0,
      releaseDate: new Date('2025-04-14'),
      touchStartX: 0,
      touchEndX: 0,
      isAnimating: false
    }
  },
  mounted() {
    this.scrollToSlide(0);
    this.setupEventListeners();
  },
  beforeDestroy() {
    this.removeEventListeners();
  },
  methods: {
    getRelativeTime() {
      const now = new Date();
      const diffTime = Math.abs(now - this.releaseDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      return `${Math.floor(diffDays / 365)} years ago`;
    },
    downloadLatest() {
      window.location.href = 'https://cdn.discordapp.com/attachments/1361431527753388273/1362145104659222778/app-release.apk?ex=680153fc&is=6800027c&hm=6d64b4d9d1534a61c071a80848b0fd828c642dce765495e062b24f3c3d358b82&';
    },
    downloadBeta() {
      window.location.href = '';
    },
    setupEventListeners() {
      const container = document.querySelector('.app-preview-container');
      if (container) {
        container.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        container.addEventListener('touchmove', this.handleTouchMove, { passive: true });
        container.addEventListener('touchend', this.handleTouchEnd);
        container.addEventListener('wheel', this.handleWheel, { passive: false });
      }
    },
    removeEventListeners() {
      const container = document.querySelector('.app-preview-container');
      if (container) {
        container.removeEventListener('touchstart', this.handleTouchStart);
        container.removeEventListener('touchmove', this.handleTouchMove);
        container.removeEventListener('touchend', this.handleTouchEnd);
        container.removeEventListener('wheel', this.handleWheel);
      }
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
        if (diff > 0 && this.currentSlide < 4) {
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
      
      // Allow scrolling up on first slide
      if (e.deltaY < 0 && this.currentSlide === 0) {
        return;
      }
      
      // Allow scrolling down on last slide
      if (e.deltaY > 0 && this.currentSlide === 4) {
        return;
      }
      
      // Prevent default only when changing slides
      e.preventDefault();
      
      if (e.deltaY > 0 && this.currentSlide < 4) {
        this.scrollToSlide(this.currentSlide + 1);
      } else if (e.deltaY < 0 && this.currentSlide > 0) {
        this.scrollToSlide(this.currentSlide - 1);
      }
    },
    scrollToSlide(index) {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.currentSlide = index;
      const wrapper = document.querySelector('.app-preview-wrapper');
      const previews = document.querySelectorAll('.app-preview');
      
      if (wrapper) {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        previews.forEach((preview, i) => {
          preview.style.opacity = i === index ? '1' : '0';
        });
        
        setTimeout(() => {
          this.isAnimating = false;
        }, 600);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #fff, #f5f5f5);
    position: relative;
    width: 100%;
    
    h1 {
      font-size: 6rem;
      margin-bottom: -2rem;
      letter-spacing: 2px;
      color: #000;
    }

    .subtitle {
      font-size: 1.5rem;
      color: #cecdcd;
      margin-bottom: 5rem;
      letter-spacing: 5.9px;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      
      .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .version-text {
          font-size: 0.8rem;
          color: #666;
        }
      }

      .download {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: 500;
        border: none;
        border-radius: 30px;
        background: #000;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        &.beta {
          background: #000;
        }
      }
    }

    .info-box {
      margin-top: 1.5rem;
      padding: 0.8rem 1.2rem;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      
      p {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      animation: bounce 2s infinite;

      svg {
        transform: scale(1.5);
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 4rem;
      }

      .subtitle {
        font-size: 1.2rem;
        letter-spacing: 2.6px;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
        
        .button-container {
          width: 100%;
          max-width: 300px;
        }

        .download {
          width: 100%;
          max-width: 300px;
        }
      }

      .info-box {
        margin: 1rem;
        width: calc(100% - 2rem);
        max-width: 300px;
      }
    }
  }
  
  .app-preview-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fff;
    padding-top: 2rem;
    
    .navigation-dots {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
      z-index: 10;
      
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(0, 0, 0, 0.4);
        }
        
        &.active {
          background: #000;
          transform: scale(1.2);
        }
      }
    }
    
    .app-preview-wrapper {
      display: flex;
      height: 100%;
      width: fit-content;
      transition: transform 0.6s ease-out;
    }
    
    .app-preview {
      min-height: 100vh;
      width: 100vw;
      background: #fff;
      flex-shrink: 0;
      transition: opacity 0.6s ease-out;
      
      &.active {
        opacity: 1;
      }
      
      .section-content {
        height: 100vh;
        display: flex;
        align-items: center;
        padding: 0 10%;
        
        .info-section {
          flex: 1;
          padding-right: 4rem;
          
          h2 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
            color: #000;
          }
          
          p {
            font-size: 1.4rem;
            line-height: 1.6;
            color: #414141;
            max-width: 500px;
          }
        }
        
        .phone-mockup {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          
          .phone-frame {
            position: relative;
            width: 350px;
            height: 700px;
            background: #3a3a3a;
            border-radius: 40px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
            padding: 10px;

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 150px;
              height: 25px;
              background: #3a3a3a;
              border-bottom-left-radius: 15px;
              border-bottom-right-radius: 15px;
              z-index: 2;
            }

            .screen {
              width: 100%;
              height: 100%;
              border-radius: 30px;
              overflow: hidden;
              position: relative;
              
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding-top: 4rem;
      height: auto;
      min-height: 100vh;
      
      .app-preview-wrapper {
        touch-action: pan-x pan-y;
      }
      
      .app-preview {
        min-height: auto;
        height: auto;
        
        .section-content {
          min-height: 100vh;
          height: auto;
          flex-direction: column;
          padding: 2rem;
          text-align: center;
          justify-content: center;
          gap: 2rem;
          
          .info-section {
            padding-right: 0;
            margin-top: 0;
            order: 2;
            
            h2 {
              font-size: 2rem;
              margin-bottom: 1rem;
            }
            
            p {
              font-size: 1rem;
              max-width: 100%;
              padding: 0 1rem;
            }
          }
          
          .phone-mockup {
            width: 100%;
            max-width: 250px;
            margin: 0 auto;
            order: 1;
            
            .phone-frame {
              width: 250px;
              height: 500px;
              padding: 8px;
              border-radius: 30px;
              
              &::before {
                width: 100px;
                height: 20px;
              }
              
              .screen {
                border-radius: 22px;
              }
            }
          }
        }
      }
      
      .navigation-dots {
        bottom: 1rem;
        gap: 0.8rem;
        
        .dot {
          width: 6px;
          height: 6px;
        }
      }
    }
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>