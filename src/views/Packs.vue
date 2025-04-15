<template>
  <div class="coming-soon">
    <div class="content">
      <img src="@/assets/images/logos/sonoIconB.png" alt="SONO Logo" class="logo" />
      <h1>Coming Soon</h1>
      <button class="back-button" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Packs',
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.coming-soon {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    animation: fadeIn 1s ease-out;
  }
  
  .logo {
    width: 200px;
    height: auto;
    animation: float 3s ease-in-out infinite;
  }
  
  h1 {
    font-size: 3rem;
    color: #000;
    animation: fadeIn 1s ease-out 0.5s both;
  }

  .back-button {
    padding: 12px 24px;
    background: #000;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover {
      background: #444;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style> 