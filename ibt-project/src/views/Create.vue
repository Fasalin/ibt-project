<template>
  <div class="wrapper">
    <form class="form-wrapper">
      <input v-model="carModel" placeholder="Car model" type="text" />
      <input v-model="carPrice" placeholder="Car price" type="text" />
      <input
        v-model="carLongDescription"
        placeholder="Car specifications (Long description)"
        type="text"
      />
      <input v-model="carImage" placeholder="Car image url" type="text" />
    </form>
    <button class="button-create" @click="sendData">Create</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carModel: null,
      carDescription: null,
      carLongDescription: null,
      carPrice: null,
      carImage: null,
      buyerAddress: "",
      buyerName: "",
    };
  },
  methods: {
    sendData() {
      axios
        .post(`http://localhost:3000/create`, {
          carName: this.carModel,
          longDesc: this.carLongDescription,
          price: this.carPrice,
          img: this.carImage,
          buyerAddress: this.buyerAddress,
          buyerName: this.buyerName,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 2rem;
}
.button-create {
  width: 35%;
}
</style>

