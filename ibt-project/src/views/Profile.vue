<template>
  <div class="wrapper">
    <h1 class="profile-title">Profile</h1>
    <div class="history-wrapper">
      <div class="history" v-for="car in cars" :key="car._id">
        <p class="car-model">Car model: {{ car.carName }}</p>
        <p>Bought by: {{ car.buyerName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cars: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/get-bought-cars")
      .then(resp => {
        this.cars = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.profile-title {
  margin: 0 auto;
  margin-bottom: 3rem;
}
.history {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.car-model {
  margin-bottom: 1rem;
}
.wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.history-wrapper {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
