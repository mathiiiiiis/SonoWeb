<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">
          <router-link to="/"><img src="@/assets/images/logos/sonoIconB.png" alt="SONO Logo" /></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/">home</router-link>
          <a href="https://github.com/mathiiiiiis/SonoApp" target="_blank">source</a>
          <router-link to="/packs">song packs</router-link>
          <a href="https://discord.gg/48fvsUCNwu" target="_blank">community</a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    padding: 1rem;

    .nav-content {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    .logo {
        position: absolute;
        left: 2rem;
        display: flex;
        align-items: center;
        
        a {
          display: flex;
          align-items: center;
          height: fit-content;
        }
        
        img {
          height: 40px;
          width: auto;
        }
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
        height: 100%;

        a {
        text-decoration: none;
        font-size: 1.3rem;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;

        &:hover {
            color: #000;
        }

        &.router-link-active {
            color: #000;
            font-weight: 600;
        }
        }
    }
    }

    @media (max-width: 768px) {
      padding: 0.5rem;
      
      .nav-content {
        width: 95%;
        padding: 0.5rem 1rem;
        
        .logo {
          position: static;
          margin-right: 1rem;
          
          img {
            height: 30px;
          }
        }
        
        .nav-links {
          gap: 1rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding: 0.5rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
          
          &::-webkit-scrollbar {
            display: none;
          }
          
          a {
            font-size: 0.8rem;
            white-space: nowrap;
          }
        }
      }
    }
}
</style> 
