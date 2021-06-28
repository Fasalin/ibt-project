<template>
  <div class="details-container">
    <div class="information-section">
      <div class="details-car-name">Car model: {{ carName }}</div>
      <img class="details-car-photo" :src="carPhoto" alt="image" />
      <div class="details-car-long-description">{{ carLongDescription }}</div>
      <div class="details-car-price">Price: {{ carPrice }} $</div>
    </div>

    <div v-if="!buyerName" class="checkout-section">
      <form action="">
        <input v-model="name" placeholder="Name" type="text" />
        <input v-model="address" placeholder="Address" type="text" />
      </form>
      <button v-if="!buyerName" @click="buyout" class="send-btn">
        Purchase this car
      </button>
      <p v-else>Car has already been bought by {{ buyerName }}</p>
    </div>
    <div class="create-review-section">
      <form action="">
        <input
          id="username-input"
          v-model="username"
          placeholder="Your Name"
          type="text"
        />
        <input
          id="review-input"
          v-model="text"
          placeholder="Review"
          type="text"
        />
        <input
          id="stars-input"
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
      <div
        v-for="review in reviews.slice().reverse()"
        :key="review.carName"
        class="review"
      >
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
      name: "",
      address: "",
      newBuyerName: null,
    };
  },
  props: [
    "carName",
    "carLongDescription",
    "carPrice",
    "carPhoto",
    "buyerName",
    "buyerAddress",
  ],

  created() {
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
      if (this.username && this.text && this.stars) {
        axios
          .post(`http://localhost:3000/create-review/`, {
            username: this.username,
            text: this.text,
            stars: this.stars,
            carName: this.carName,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.username = null;
        this.text = null;
        this.stars = null;
        setTimeout(() => {
          this.getReviews();
        }, 400);
      } else {
        alert("Please fill all fields!");
      }
    },
    buyout() {
      alert(`Congratulations, ${this.name}! Thank you for the purchase. `);
      axios
        .patch(`http://localhost:3000/buy/`, {
          buyerName: this.name,
          buyerAddress: this.address,
          carName: this.carName,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.newBuyerName = this.name;
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