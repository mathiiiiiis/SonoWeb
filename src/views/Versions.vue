<template>
  <div class="page">
    <Header />
    <div class="versions-container">
      <header class="versions-header">
        <h1 class="versions-title">App Versions</h1>
        <p class="versions-subtitle">Download history of Sono releases</p>
      </header>

      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading releases...</p>
      </div>

      <div v-else-if="error" class="error-message">
        <p>Failed to load releases. Please try again later.</p>
      </div>

      <div v-else class="releases-list">
        <div v-for="release in releases" :key="release.id" class="release-card">
          <div class="release-header">
            <h2 class="release-version">{{ release.tag_name }}</h2>
            <span class="release-date">{{ formatDate(release.published_at) }}</span>
          </div>

          <p v-if="release.body" class="release-notes">{{ release.body }}</p>

          <div class="release-assets">
            <a
              v-for="asset in release.assets.filter(a => a.name.endsWith('.apk'))"
              :key="asset.id"
              :href="asset.browser_download_url"
              class="download-button"
              target="_blank"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99933 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="currentColor"/>
              </svg>
              Download {{ asset.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="back-link">
        <router-link to="/" class="btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Versions',
  components: {
    Header
  },
  data() {
    return {
      releases: [],
      loading: true,
      error: false
    }
  },
  mounted() {
    this.fetchReleases()
  },
  methods: {
    async fetchReleases() {
      try {
        const response = await fetch('https://api.github.com/repos/mathiiiiiis/SonoAPK/releases')
        if (response.ok) {
          this.releases = await response.json()
        } else {
          this.error = true
        }
      } catch (error) {
        console.error('Failed to fetch releases:', error)
        this.error = true
      } finally {
        this.loading = false
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 80px 24px 60px;
}

.versions-container {
  max-width: 900px;
  margin: 0 auto;
}

.versions-header {
  text-align: center;
  margin-bottom: 60px;
}

.versions-title {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 12px 0;
}

@media (max-width: 768px) {
  .versions-title {
    font-size: 36px;
  }
}

.versions-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin: 0;
}

.loading,
.error-message {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 20px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--text-light);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.releases-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.release-card {
  background: var(--bg-container);
  border: 1px solid var(--border-light-10);
  border-radius: 16px;
  padding: 32px;
  transition: all var(--transition-normal);
}

.release-card:hover {
  border-color: var(--border-light-20);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .release-card {
    padding: 24px;
  }
}

.release-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.release-version {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0;
}

.release-date {
  font-size: 14px;
  color: var(--text-secondary);
}

.release-notes {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 20px 0;
  white-space: pre-wrap;
}

.release-assets {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  color: var(--text-dark);
  text-decoration: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.back-link {
  text-align: center;
  margin-top: 60px;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--bg-surface);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 100px;
  font-size: 14px;
  transition: all var(--transition-fast);
}

.btn-back:hover {
  background: var(--bg-surface-hover);
  color: var(--text-light);
}
</style>