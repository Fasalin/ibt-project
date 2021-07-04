<template>
  <div class="details-container">
    <div class="details-container-border">
      <div class="information-section">
        <div class="details-car-name">Car model: {{ carName }}</div>
        <img class="details-car-photo" :src="carPhoto" alt="image" />
        <div class="details-car-long-description">{{ carLongDescription }}</div>
        <div class="details-car-price">Price: {{ carPrice }} $</div>
      </div>

      <div v-if="!buyerName" class="checkout-section">
        <form class="checkout-form" action="">
          <input v-model="name" placeholder="Name" type="text" />
          <input v-model="address" placeholder="Address" type="text" />
        </form>
        <button v-if="!buyerName" @click="buyout" class="purchase-button">
          Purchase this car
        </button>
        <p v-else>Car has already been bought by {{ buyerName }}</p>
      </div>
      <button class="delete-btn" @click="deleteCar">Delete</button>

      <div class="create-review-section">
        <form class="form-review" action="">
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
        <button class="send-review-button" @click="sendReview">
          Send review
        </button>
      </div>
      <div class="review-section">
        <h2 class="review-title">Reviews section:</h2>
        <div class="review-section-check" v-if="reviews">
          <div v-for="review in reviews" :key="review.carName" class="review">
            <div class="review-username">From user: {{ review.username }}</div>
            <div class="review-text">Review: {{ review.text }}</div>
            <div class="review-stars">Stars: {{ review.stars }}</div>
          </div>
        </div>
        <div v-else class="review-none">No reviews for this car.</div>
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
      newBuyerName: null
    };
  },
  props: [
    "carId",
    "carName",
    "carLongDescription",
    "carPrice",
    "carPhoto",
    "buyerName",
    "buyerAddress"
  ],

  created() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      axios
        .get(`http://localhost:3000/get-reviews/`, {
          params: { carName: this.carName }
        })
        .then(res => {
          this.reviews = res.data;
          console.log(res);
        })
        .catch(err => {
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
            carName: this.carName
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
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
          carName: this.carName
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.newBuyerName = this.name;
    },
    deleteCar() {
      axios
        .delete(`http://localhost:3000/delete-car/`, {
          params: { carName: this.carName }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      setTimeout(() => {
        this.$router.push("/");
      }, 500);
    }
  }
};
</script>

<style scoped>
.details-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.details-container-border {
  width: 60%;
  height: 55rem;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.details-car-long-description {
  margin-bottom: 1.5rem;
}
.form-review {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.review {
  width: 100%;
  margin-bottom: 0.5rem;
  border: rgba(0, 0, 0, 0.2) 1px solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
}
.form-review input {
  display: block;
  margin-bottom: 1.5rem;
  border: none;
  border-bottom: solid 1px black;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, black 4%);
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  color: darken(black, 20%);
  outline: none;
}
.review-none {
  margin-bottom: 1rem;
}
.details-car-name {
  margin-bottom: 2rem;
  font-weight: bolder;
  font-size: 1.5rem;
}
.details-car-photo,
.details-car-price,
.delete-btn {
  margin-bottom: 2rem;
}
.details-car-photo {
  max-width: 100%;
  max-height: 100%;
}
.delete-btn {
  border: none;
  background: rgb(199, 17, 17);
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}
.delete-btn:hover {
  box-shadow: 0 3px 6px 0 rgba(0.5, 0.5, 0.5, 0.5);
}
.send-review-button {
  border: none;
  background: black;
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}
.send-review-button:hover {
  background: rgb(226, 169, 94);
  color: black;
}
.information-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.purchase-button {
  border: none;
  background: rgb(49, 49, 117);
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}
.purchase-button:hover {
  background: rgb(226, 169, 94);
  color: black;
}
.create-review-section {
  border: rgba(0, 0, 0, 0.2) 1px solid;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout-section {
  border: rgba(0, 0, 0, 0.2) 1px solid;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.checkout-form input {
  display: block;
  margin-bottom: 1.5rem;
  border: none;
  border-bottom: solid 1px black;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, black 4%);
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  color: darken(black, 20%);
  outline: none;
}
.review-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.review-title {
  margin-bottom: 1rem;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 2px solid #555555;
}
</style>
