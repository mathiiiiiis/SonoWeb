<template>
  <div class="about">
    <div class="hero">
      <h1>About SONO</h1>
      <p class="subtitle">Redefining Your Music Experience</p>
    </div>

    <section class="mission">
      <div class="container">
        <h2>Our Mission</h2>
        <p>At SONO, we believe that music is more than just sound—it's an experience that should be enjoyed in its purest form. Our mission is to create the most intuitive and high-quality music listening experience, putting the focus back on what matters most: the music itself.</p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose SONO?</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>Superior Sound Quality</h3>
            <p>Experience music in high-fidelity audio with our advanced sound processing technology.</p>
          </div>
          <div class="feature">
            <h3>Intuitive Design</h3>
            <p>Navigate your music library with ease through our thoughtfully designed interface.</p>
          </div>
          <div class="feature">
            <h3>Smart Organization</h3>
            <p>Let our AI-powered system organize your music library perfectly.</p>
          </div>
          <div class="feature">
            <h3>Cross-Platform</h3>
            <p>Take your music everywhere with seamless cross-device synchronization.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2>Behind SONO</h2>
        <p class="team-intro">SONO is developed by a team of passionate music lovers and tech enthusiasts who understand what makes a great music player.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  .hero {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #fff, #f5f5f5);
    padding: 2rem;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      color: #666;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 5rem 0;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    &.mission {
      background: #fff;
      
      p {
        font-size: 1.2rem;
        line-height: 1.8;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        color: #444;
      }
    }

    &.features {
      background: #f8f8f8;

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;

        .feature {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(-5px);
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
          }

          p {
            color: #666;
            line-height: 1.6;
          }
        }
      }
    }

    &.team {
      background: #fff;

      .team-intro {
        text-align: center;
        font-size: 1.2rem;
        color: #666;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.8;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    .hero {
      height: 40vh;
      
      h1 {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.2rem;
      }
    }

    section {
      padding: 3rem 0;

      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style> 