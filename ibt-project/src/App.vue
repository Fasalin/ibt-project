<template>
  <div id="container">
    <nav class="navigation">
      <div class="nav-wrapper">
        
        <router-link class="nav-home-button" to="/">Home</router-link>
        <div class="nav-right-side-buttons">
          <router-link
            :to="{
              name: 'Register'
            }"
            >Register
          </router-link>
           <router-link
            :to="{
              name: 'Login'
            }"
            >Login
          </router-link>
          <router-link
            :to="{
              name: 'Create'
            }"
            >Create
          </router-link>
          <router-link
            :to="{
              name: 'Profile'
            }"
          >
            Profile
          </router-link>
          <div id="username">{{}}</div>
          <!-- <router-link class="nav-profile-button" to="/">Profile</router-link> -->
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  const getJwt = async () => {
  const { data } = await axios.get(`/jwt`);
  setJwt(data.token);
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
html,
body,
#app {
  height: 100%;
}
.navigation {
  width: 100%;
  font-size: large;
  height: 50px;
  background-color: antiquewhite;
  position: fixed;
  top: 0;
}
.nav-wrapper {
  margin: 0 auto;
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-right-side-buttons {
  display: flex;
}
.nav-right-side-buttons a {
  padding-right: 2rem;
}
.nav-right-side-buttons div,
.nav-home-button {
  cursor: pointer;
}
.nav-profile-button {
  margin-left: 10%;
}
a {
  text-decoration: none;
  color: black;
}
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
