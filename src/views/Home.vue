<template>
  <div class="home">
    <div class="hero">
      <h1>SONO</h1>
      <p class="subtitle">local music player</p>
      <div class="cta-buttons">
        <button class="download">Download Latest</button>
        <button class="download beta">Download Beta</button>
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

<script src="@/assets/js/Home.js"></script>

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
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      animation: bounce 2s infinite;

      svg {
        transform: scale(1.5);
      }
    }
  }
  
  .app-preview-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fff;
    
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
      transition: transform 0.5s ease-out;
    }
    
    .app-preview {
      min-height: 100vh;
      width: 100vw;
      background: #fff;
      flex-shrink: 0;
      opacity: 0;
      transition: opacity 0.5s ease-out;
      
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

@media (max-width: 768px) {
  .home {
    .hero {
      h1 {
        font-size: 4rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .app-preview {
      .section-content {
        flex-direction: column;
        text-align: center;
        padding: 4rem 5%;
        
        .info-section {
          padding-right: 0;
          margin-bottom: 3rem;
          
          h2 {
            font-size: 2.5rem;
          }
          
          p {
            font-size: 1.2rem;
            margin: 0 auto;
          }
        }
        
        .phone-mockup .phone-frame {
          width: 280px;
        }
      }
    }
  }
}
</style>