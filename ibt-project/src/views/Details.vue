<template>
  <div class="details-container">
    <div class="information-section">
      <div class="details-car-name">Car model: {{ carName }}</div>
      <div class="details-car-description">
        Description: {{ carDescription }}
      </div>
      <div>{{ bought }}</div>
      <div class="details-car-price">Price: {{ carPrice }} $</div>
      <img class="details-car-photo" :src="carPhoto" alt="photo" />
    </div>

    <div class="checkout-section">
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
      <button v-if="bought !== 'true'" @click="buyout" class="send-btn">
        Buy
      </button>
      <button v-else>Car has already been bought.</button>
    </div>
    <div class="review-section">
      <div class="review">
        {{reviews}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      reveiws: null
    }
  },
  props: {
    carName: String,
    carDescription: String,
    carPrice: String,
    carPhoto: String,
    bought: String,
  },
  methods: {
    buyout() {
      axios
        .patch(`http://localhost:3000/buy/`, { carName: this.carName })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/get-reviews/`, { carName: this.carName })
      .then((res) => {
        this.reviews=res.data
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.details-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.details-car-photo {
  width: 40%;
  height: 40%;
}
.information-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.send-btn {
  background-color: chocolate;
  align-items: center;
  display: flex;
}
</style>