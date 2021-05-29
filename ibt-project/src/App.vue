<template>
  <div id="container">
    <nav class="navigation">
      <div class="nav-wrapper">
        <router-link class="nav-home-button" to="/">Home</router-link>
        <div class="nav-right-side-buttons">
          <router-link to="/">Cart</router-link>
          <router-link class="nav-profile-button" to="/">Profile</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.navigation{
    width: 100%;
    font-size: large;
    height: 50px; 
    background-color: antiquewhite;   
}
.nav-wrapper{
    margin: 0 auto;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-right-side-buttons{
    display: flex;
}
.nav-right-side-buttons div,
.nav-home-button{
    cursor: pointer;
}
.nav-profile-button{
    margin-left: 10%;
}
a{
  text-decoration: none;
  color: black;
}
#container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
}
</style>
