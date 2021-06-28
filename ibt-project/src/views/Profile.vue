<template>
  <div class="wrapper">
    <h1 class="profile-title">Profile</h1>
    <div class="history" v-for="car in cars" :key="car._id">
      <p class="car-model">Car model: {{ car.name }}</p>
      <p>Bought by: {{ car.buyerName }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cars: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/get-bought-cars")
      .then((resp) => {
        this.cars = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.profile-title {
  margin: 0 auto;
  display: flex;
}
.history {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
    justify-content: space-between;
}
.car-model{
  margin-bottom: 1rem;
}
.wrapper{
  width: 80%
}
</style>
