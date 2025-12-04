<template>
  <div class="page">
    <Header />
    <div class="about-container">
      <div class="about-content">
        <h1 class="title">About Sono</h1>

        <p class="description">
          A local music player built on the belief that your music library should be yours.
          No subscriptions, no algorithms, no cloud dependency. Just pure, local music playback.
        </p>

        <section class="values-section">
          <h2 class="section-title">What We Stand For</h2>
          <div class="values-list">
            <div class="value-item">
              <div class="value-content">
                <h3 class="value-title">Privacy First</h3>
                <p class="value-text">Your music stays on your device. No tracking, no data collection.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-content">
                <h3 class="value-title">Fully Free</h3>
                <p class="value-text">No ads, no premium tiers, no hidden costs. Open source and free forever.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-content">
                <h3 class="value-title">Community Driven</h3>
                <p class="value-text">Built by music lovers, for music lovers. Your feedback shapes the future.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="team-section">
          <h2 class="section-title">The Team</h2>
          <div class="team-grid">
            <div class="team-member">
              <img
                v-if="developers[0].avatar"
                :src="developers[0].avatar"
                :alt="developers[0].name"
                class="member-avatar"
              >
              <div v-else class="member-avatar-placeholder">{{ developers[0].name.charAt(0) }}</div>
              <h3 class="member-name">{{ developers[0].name }}</h3>
              <p class="member-role">{{ developers[0].role }}</p>
            </div>
            <div class="team-member">
              <img
                v-if="developers[1].avatar"
                :src="developers[1].avatar"
                :alt="developers[1].name"
                class="member-avatar"
              >
              <div v-else class="member-avatar-placeholder">{{ developers[1].name.charAt(0) }}</div>
              <h3 class="member-name">{{ developers[1].name }}</h3>
              <p class="member-role">{{ developers[1].role }}</p>
            </div>
          </div>
        </section>

        <div class="links">
          <button @click="showGithubModal = true" class="link-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
            </svg>
            GitHub
          </button>
          <a href="https://discord.gg/48fvsUCNwu" target="_blank" class="link-btn">
            <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="71" height="55" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Discord
          </a>
          <router-link to="/careers" class="link-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="currentColor"/>
            </svg>
            Careers
          </router-link>
          <router-link to="/versions" class="link-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor"/>
            </svg>
            Versions
          </router-link>
        </div>

        <p class="note">
          Sono is soon completely Open Source, with the App being the last part to be published.
          Free forever • No ads • Privacy focused
        </p>
      </div>

      <div class="back-link">
        <router-link to="/" class="btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </router-link>
      </div>
    </div>

    <div v-if="showGithubModal" class="modal-overlay" @click="showGithubModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">Choose a Repository</h3>
        <p class="modal-subtitle">Select which Sono project you'd like to view on GitHub</p>

        <div class="repo-links">
          <a href="https://github.com/mathiiiiiis/SonoWeb" target="_blank" class="repo-link">
            <div class="repo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </div>
            <div class="repo-info">
              <div class="repo-name">SonoWeb</div>
              <div class="repo-desc">Official Website for Sono</div>
            </div>
          </a>

          <a href="https://github.com/mathiiiiiis/SonoAccounts" target="_blank" class="repo-link">
            <div class="repo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </div>
            <div class="repo-info">
              <div class="repo-name">SonoAccounts</div>
              <div class="repo-desc">Web Application for Sono</div>
            </div>
          </a>

          <div class="repo-link disabled">
            <div class="repo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </div>
            <div class="repo-info">
              <div class="repo-name">SonoFlutterApp</div>
              <div class="repo-desc">Mobile app (Private repository)</div>
            </div>
          </div>
        </div>

        <button @click="showGithubModal = false" class="modal-close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'About',
  components: {
    Header
  },
  data() {
    return {
      showGithubModal: false,
      developers: [
        {
          name: 'Mathis',
          role: 'Creator & Lead Developer',
          github: 'mathiiiiiis',
          avatar: null
        },
        {
          name: 'Maxim',
          role: 'Lead Developer',
          github: 'n0201',
          avatar: null
        }
      ]
    }
  },
  mounted() {
    this.fetchDeveloperProfiles()
  },
  methods: {
    async fetchDeveloperProfiles() {
      for (const dev of this.developers) {
        if (dev.github) {
          try {
            const response = await fetch(`https://api.github.com/users/${dev.github}`)
            if (response.ok) {
              const data = await response.json()
              dev.avatar = data.avatar_url
            }
          } catch (error) {
            console.error(`Failed to fetch profile for ${dev.github}:`, error)
          }
        }
      }
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

.about-container {
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  text-align: center;
}

.title {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 24px 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 36px;
  }
}

.description {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0 0 56px 0;
}

.values-section {
  margin: 0 0 56px 0;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 24px 0;
  text-align: center;
}

.values-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--bg-container);
  border: 1px solid var(--border-light-10);
  border-radius: 12px;
  transition: all var(--transition-fast);
}

.value-item:hover {
  border-color: var(--border-light-20);
  transform: translateX(4px);
}

.value-content {
  flex: 1;
}

.value-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 4px 0;
}

.value-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}

.team-section {
  margin: 0 0 48px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: var(--bg-container);
  border: 1px solid var(--border-light-10);
  border-radius: 12px;
  transition: all var(--transition-fast);
}

.team-member:hover {
  border-color: var(--border-light-20);
  transform: translateY(-2px);
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
}

.member-avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 12px;
}

.member-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 4px 0;
}

.member-role {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
  text-align: center;
}

.links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 0 0 36px 0;
}

@media (max-width: 480px) {
  .links {
    grid-template-columns: 1fr;
  }
}

.link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--bg-container);
  color: var(--text-light);
  text-decoration: none;
  border: 1px solid var(--border-light-10);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  transition: all var(--transition-fast);
  cursor: pointer;
  font-family: var(--font-primary);
}

.link-btn:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-light-20);
  transform: translateY(-2px);
}

.note {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-tertiary);
  margin: 0;
  padding-top: 24px;
  border-top: 1px solid var(--border-light-10);
}

.back-link {
  text-align: center;
  margin-top: 48px;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

.modal-content {
  background: var(--bg-container);
  border: 1px solid var(--border-light-10);
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: var(--shadow-xl);
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 8px 0;
  text-align: center;
}

.modal-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
  text-align: center;
}

.repo-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.repo-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--bg-surface);
  border: 1px solid var(--border-light-10);
  border-radius: 12px;
  text-decoration: none;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.repo-link:not(.disabled):hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-light-20);
  transform: translateX(4px);
}

.repo-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.repo-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  flex-shrink: 0;
  color: var(--text-light);
}

.repo-info {
  flex: 1;
}

.repo-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 4px;
}

.repo-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.modal-close {
  width: 100%;
  padding: 12px 24px;
  background: var(--bg-surface);
  color: var(--text-light);
  border: 1px solid var(--border-light-10);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: var(--font-primary);
}

.modal-close:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-light-20);
}

@media (max-width: 768px) {
  .modal-content {
    padding: 24px;
  }

  .modal-title {
    font-size: 20px;
  }

  .repo-link {
    padding: 12px;
  }

  .repo-icon {
    width: 36px;
    height: 36px;
  }

  .repo-name {
    font-size: 15px;
  }

  .repo-desc {
    font-size: 12px;
  }
}
</style>