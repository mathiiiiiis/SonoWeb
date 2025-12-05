<template>
  <div class="page">
    <Header />
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Join the Team</h1>
        <p class="page-subtitle">Help us build the future of local music players</p>
      </header>

      <div class="content">
        <div class="intro-box">
          <p class="intro-text">
            We're a small team looking for talented individuals to help us make Sono even better.
            These are hobby positions with <strong>little to no payment</strong> (because we're poor af),
            but you'll get to work on a cool open-source project (it will be fun, and that's what matters).
          </p>
        </div>

        <h2 class="section-title">Open Positions</h2>

        <div class="jobs-list">
          <div class="job-card">
            <h3 class="job-title">Python API Developer</h3>
            <p class="job-description">
              Help us build and maintain the backend API for SonoWeb. Experience with FastAPI, Flask, PostgreSQL preferred.
            </p>
            <div class="job-tags">
              <span class="tag">Python</span>
              <span class="tag">API Development</span>
              <span class="tag">Backend</span>
            </div>
          </div>

          <div class="job-card">
            <h3 class="job-title">Icon Designer</h3>
            <p class="job-description">
              Redesign and create beautiful, consistent icons for the Sono app. Experience with Figma, Illustrator, or similar tools.
            </p>
            <div class="job-tags">
              <span class="tag">Design</span>
              <span class="tag">UI/UX</span>
              <span class="tag">Icons</span>
            </div>
          </div>

          <div class="job-card">
            <h3 class="job-title">Video Editor</h3>
            <p class="job-description">
              Create promotional videos, trailers, and feature showcases for Sono. Help us tell our story visually.
            </p>
            <div class="job-tags">
              <span class="tag">Video Editing</span>
              <span class="tag">Motion Graphics</span>
              <span class="tag">Marketing</span>
            </div>
          </div>
        </div>

        <div class="application-section">
          <h2 class="section-title">Apply Now</h2>
          <p class="form-intro">Fill out the form below to apply. We'll get back to you as soon as possible!</p>

          <form @submit.prevent="handleSubmit" class="application-form">
            <div class="form-group">
              <label for="name" class="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="form-input"
                placeholder="John Doe"
              />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="form-input"
                placeholder="john@example.com"
              />
            </div>

            <div class="form-group">
              <label for="position" class="form-label">Position *</label>
              <select
                id="position"
                v-model="formData.position"
                required
                class="form-input"
              >
                <option value="">Select a position</option>
                <option value="Python API Developer">Python API Developer</option>
                <option value="Icon Designer">Icon Designer</option>
                <option value="Video Editor">Video Editor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="why" class="form-label">Why do you want to join the team? *</label>
              <textarea
                id="why"
                v-model="formData.why"
                required
                rows="4"
                class="form-input"
                placeholder="Tell us about your motivation..."
              ></textarea>
            </div>

            <div class="form-group">
              <label for="experience" class="form-label">Portfolio / Experience</label>
              <textarea
                id="experience"
                v-model="formData.experience"
                rows="4"
                class="form-input"
                placeholder="Share links to your work, GitHub profile, portfolio, etc."
              ></textarea>
            </div>

            <div class="form-group">
              <label for="availability" class="form-label">Weekly Availability (hours)</label>
              <input
                type="text"
                id="availability"
                v-model="formData.availability"
                class="form-input"
                placeholder="e.g., 5-10 hours"
              />
            </div>

            <button
              type="submit"
              class="btn-submit"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
            </button>

            <div v-if="submitSuccess" class="success-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Application submitted! Check your email for confirmation (don't forget to check spam).
            </div>

            <div v-if="submitError" class="error-message">
              {{ submitError }}
            </div>
          </form>
        </div>

        <div class="back-link">
          <router-link to="/" class="btn-back">Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Careers',
  components: {
    Header
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        position: '',
        why: '',
        experience: '',
        availability: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: null
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.submitSuccess = false
      this.submitError = null

      try {
        const response = await fetch('/api/careers/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        })

        const text = await response.text()

        let data = null
        try {
          data = JSON.parse(text)
        } catch {
          console.warn('Invalid JSON response:', text)
        }

        if (!response.ok) {
          throw new Error(data?.detail || text || 'Failed to submit application')
        }

        this.submitSuccess = true

        this.formData = {
          name: '',
          email: '',
          position: '',
          why: '',
          experience: '',
          availability: ''
        }

        setTimeout(() => {
          document.querySelector('.success-message')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }, 100)
      } catch (error) {
        if (error.message.includes('rate limit')) {
          this.submitError = 'Too many applications. Please try again later.'
        } else {
          this.submitError = error.message || 'Something went wrong. Please try again later.'
        }
        console.error('Submission error:', error)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 80px 24px 40px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;
}

.page-title {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 12px 0;
}

.page-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 0;
}

.content {
  padding: 48px;
}

@media (max-width: 768px) {
  .content {
    padding: 32px 24px;
  }

  .page-title {
    font-size: 36px;
  }
}

.intro-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light-10);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 48px;
}

.intro-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}

.intro-text strong {
  color: var(--text-light);
}

.section-title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 24px 0;
}

.jobs-list {
  display: grid;
  gap: 20px;
  margin-bottom: 48px;
}

.job-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light-10);
  border-radius: 20px;
  padding: 24px;
  transition: all var(--transition-normal);
}

.job-card:hover {
  border-color: var(--border-light-20);
  transform: translateX(4px);
}

.job-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 12px 0;
}

.job-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 16px 0;
}

.job-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: var(--bg-surface);
  color: var(--text-tertiary);
  border-radius: 100px;
  font-size: 12px;
  border: 1px solid var(--border-light-10);
}

.application-section {
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--border-light-10);
}

.form-intro {
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0 0 32px 0;
}

.application-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-light);
}

.form-input {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light-10);
  border-radius: 12px;
  font-size: 14px;
  color: var(--text-light);
  font-family: var(--font-primary);
  transition: all var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--border-light-30);
  background: rgba(255, 255, 255, 0.04);
}

.form-input::placeholder {
  color: var(--text-placeholder);
}

select.form-input {
  cursor: pointer;
}

textarea.form-input {
  resize: vertical;
  min-height: 100px;
}

.btn-submit {
  padding: 14px 32px;
  background: white;
  color: var(--text-dark);
  border: none;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: var(--font-primary);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--success-bg);
  border: 1px solid var(--success-border);
  border-radius: 12px;
  color: var(--success-text);
  font-size: 14px;
  line-height: 1.5;
}

.success-message svg {
  flex-shrink: 0;
  color: var(--success-border);
}

.error-message {
  padding: 16px;
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  border-radius: 12px;
  color: var(--error-text);
  font-size: 14px;
}

.back-link {
  text-align: center;
  margin-top: 48px;
}

.btn-back {
  display: inline-block;
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