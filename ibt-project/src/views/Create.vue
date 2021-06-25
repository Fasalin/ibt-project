<template>
  <div class="wrapper">
    <form class="form-wrapper">
      <input v-model="carModel" placeholder="Car model" type="text" />
      <input
        v-model="carDescription"
        placeholder="Car description"
        type="text"
      />
      <input v-model="carPrice" placeholder="Car price" type="text" />
      <input v-model="carImage" placeholder="Car image url" type="text" />
    </form>
    <button @click="sendData">Create</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carModel: null,
      carDescription: null,
      carPrice: null,
      carImage: null,
    };
  },
  methods: {
    sendData() {
      axios
        .post(`http://localhost:3000/create`, {
          carModel: this.carModel,
          carDescription: this.carDescription,
          carPrice: this.carPrice,
          carImage: this.carImage,
          bought: false
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
}
</style>

