<template>
  <div class="outer-wrapper">
    <h1>Create a car offer</h1>
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
      buyerName: ""
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
          buyerName: this.buyerName
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
}
.button-create {
  border: none;
  background: black;
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  margin-left: 25px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}
.button-create:hover {
  background: rgb(226, 169, 94);
  color: black;
}
.outer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
input {
  margin: 40px 25px;
  width: 400px;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px black;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, black 4%);
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  color: darken(black, 20%);
  outline: none;
}

h1 {
  margin-bottom: 2rem;
}

.straight-line {
  border-left: 2px solid black;
  height: 100%;
}
</style>
