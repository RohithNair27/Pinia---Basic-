<template>
  <div class="landing-page-container">
    <div class="landing-page">
      <div class="hero-section">
        <h1>Vue learning Landing page</h1>
        <img src="../assets/logo.png"/>
        <p>This project is intended for learning purposes, and I will continue to add new features and concepts as I explore and deepen my understanding of Vue. Feel free to refer if you have doubts</p>
        <router-link to="/Todo" class="navigation-button">Get Started</router-link>
      </div>
      <div class="features-section">
        <h2>Current features</h2>
        <ul>
          <li>Feature 1: Pinia for todo</li>
          <li>Feature 2: Router</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
   
}
</script>

<style scoped>
.landing-page-container{
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:50px;
}
.landing-page {
  width:50vw;
}

.hero-section {
  text-align: center;
  padding: 50px 0;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}

.features-section {
  padding: 20px;
}

.navigation-button {
  background-color: #41B883;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  display:flex;
  height:50px;
  width:200px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
</style>
