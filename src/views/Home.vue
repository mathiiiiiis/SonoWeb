<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
        <h1 class="animated-text">SONO</h1>
        <p class="subtitle">local music player</p>
        <div class="cta-buttons">
          <div class="button-container" data-aos="fade-up" data-aos-delay="200">
            <button class="download pulse-animation" @click="downloadLatest">
              Download Latest
            </button>
            <span class="version-text">v1.0.0 • {{ getRelativeTime(latestReleaseDate) }}</span>
          </div>
          <div class="button-container" data-aos="fade-up" data-aos-delay="300">
            <button class="download beta" @click="downloadBeta">
              Download Beta
            </button>
            <span class="version-text">v1.1.0-beta • Coming soon</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToPreview">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 9L12 14L17 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 15L12 20L17 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    
    <div class="app-preview-container" ref="previewSection">
      <div class="app-preview-wrapper">
        <div v-for="(preview, index) in previews" :key="index" class="app-preview" :class="{ active: currentSlide === index }">
          <div class="section-content">
            <div class="phone-mockup" data-aos="fade-right" data-aos-duration="800" data-aos-anchor-placement="center-bottom">
              <div class="phone-frame">
                <div class="phone-notch"></div>
                <div class="screen">
                  <img :src="preview.image" :alt="preview.title" />
                </div>
              </div>
            </div>
            <div class="info-section" data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="center-bottom">
              <h2>{{ preview.title }}</h2>
              <p>{{ preview.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation-dots">
        <div 
          v-for="(_, index) in previews" 
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="scrollToSlide(index)"
        ></div>
      </div>
      <div class="slide-controls">
        <button 
          class="control-button prev" 
          @click="scrollToSlide(Math.max(0, currentSlide - 1))"
          :disabled="currentSlide === 0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button 
          class="control-button next" 
          @click="scrollToSlide(Math.min(previews.length - 1, currentSlide + 1))"
          :disabled="currentSlide === previews.length - 1"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="modal" v-if="showModal" @click.self="closeModal">
      <div class="modal-content" data-aos="fade-up" data-aos-duration="300">
        <div class="modal-header">
          <h3>Beta Access</h3>
          <button class="modal-close-icon" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <p>The beta version is not available yet. Join our Discord to get early access when it's ready!</p>
        </div>
        <div class="modal-actions">
          <a href="https://discord.gg/48fvsUCNwu" target="_blank" class="modal-button primary">Join Discord</a>
          <button class="modal-button secondary" @click="closeModal">Maybe Later</button>
        </div>
      </div>
    </div>

    <div class="modal download-notice" v-if="showDownloadModal" @click.self="closeDownloadModal">
      <div class="modal-content" data-aos="fade-up" data-aos-duration="300">
        <div class="modal-header">
          <h3>Welcome to Sono!</h3>
          <button class="modal-close-icon" @click="closeDownloadModal">×</button>
        </div>
        <div class="modal-body">
          <p>Thanks for downloading! A few things to note:</p>
          <ul>
            <li>🚧 This is an early version - expect some rough edges</li>
            <li>🐛 You might encounter bugs we're still fixing</li>
            <li>💪 We're actively working on improvements</li>
          </ul>
          <p class="discord-invite">Need help or want to report bugs?</p>
        </div>
        <div class="modal-actions">
          <a href="https://discord.gg/48fvsUCNwu" target="_blank" class="modal-button primary">Join Our Discord</a>
          <button class="modal-button secondary" @click="closeDownloadModal">Got it</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeLogic from '../assets/scripts/Home.js';
export default homeLogic;
</script>

<style lang="scss" scoped>
@use '../assets/styles/Home.scss';
</style>