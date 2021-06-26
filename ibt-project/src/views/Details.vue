<template>
  <div class="details-container">
    <div class="information-section">
      <div class="details-car-name">Car model: {{ carName }}</div>
      <img class="details-car-photo" :src="carPhoto" alt="image" />
      <div class="details-car-long-description">{{ carLongDescription }}</div>
      <div class="details-car-price">Price: {{ carPrice }} $</div>
    </div>

    <div class="checkout-section">
      <form action="">
        <input placeholder="Name" type="text" />
        <input placeholder="Address" type="text" />
      </form>
      <button v-if="bought !== 'true'" @click="buyout" class="send-btn">
        Buy
      </button>
      <button class="send-btn" v-else>Car has already been bought.</button>
    </div>
    <div class="create-review-section">
      <form action="">
        <input v-model="username" placeholder="Your Name" type="text" />
        <input v-model="text" placeholder="Review" type="text" />
        <input
          v-model="stars"
          placeholder="Stars"
          type="number"
          min="1"
          max="5"
        />
      </form>
      <button @click="sendReview">Send review</button>
    </div>
    <div class="review-section">
      <div v-for="review in reviews" :key="review.carName" class="review">
        <div>
          {{ review.text }}
        </div>
        <div>
          {{ review.username }}
        </div>
        <div>
          {{ review.stars }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reviews: null,
      username: null,
      text: null,
      stars: null,
    };
  },
  props: {
    carName: String,
    carLongDescription: String,
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
  created() {
    //console.log(this.carName)
    this.getReviews();
  },
  methods: {
    getReviews() {
      axios
        .get(`http://localhost:3000/get-reviews/`, {
          params: { carName: this.carName },
        })
        .then((res) => {
          this.reviews = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReview() {
      axios
        .post(`http://localhost:3000/create-review/`, {
          username: this.username,
          text: this.text,
          stars: this.stars,
          carName: this.carName
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