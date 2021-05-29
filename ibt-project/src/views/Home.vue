<template>
  <div class="main-container">
    <h1 class="main-title">Garage Mania</h1>
    <div>{{ cars }}</div>
    <div class="card-wrapper">
      <div class="card">
        <div class="card-border">
          <img
            src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q3/612023/2015-mercedes-amg-c63-c63-s-photos-and-info-news-car-and-driver-photo-635281-s-original.jpg?fill=2:1&resize=480:*"
            alt="image"
          />

          <h5 class="card-title">Car Name</h5>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime similique cum porro temporibus aspernatur!
          </p>
          <p class="card-price">Price: 50$</p>
        </div>
      </div>
      <div class="card">
        <div class="card-border">
          <img
            src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q3/612023/2015-mercedes-amg-c63-c63-s-photos-and-info-news-car-and-driver-photo-635281-s-original.jpg?fill=2:1&resize=480:*"
            alt="image"
          />

          <h5 class="card-title">Car Name</h5>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime similique cum porro temporibus aspernatur!
          </p>
          <p class="card-price">Price: 50$</p>
        </div>
      </div>
      <div class="card">
        <div class="card-border">
          <img
            src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q3/612023/2015-mercedes-amg-c63-c63-s-photos-and-info-news-car-and-driver-photo-635281-s-original.jpg?fill=2:1&resize=480:*"
            alt="image"
          />

          <h5 class="card-title">Car Name</h5>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime similique cum porro temporibus aspernatur!
          </p>
          <p class="card-price">Price: 50$</p>
        </div>
      </div>
      <div class="card">
        <div class="card-border">
          <img
            src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q3/612023/2015-mercedes-amg-c63-c63-s-photos-and-info-news-car-and-driver-photo-635281-s-original.jpg?fill=2:1&resize=480:*"
            alt="image"
          />

          <h5 class="card-title">Car Name</h5>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime similique cum porro temporibus aspernatur!
          </p>
          <p class="card-price">Price: 50000$</p>
        </div>
      </div>
      <div class="card">
        <div class="card-border">
          <img
            src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q3/612023/2015-mercedes-amg-c63-c63-s-photos-and-info-news-car-and-driver-photo-635281-s-original.jpg?fill=2:1&resize=480:*"
            alt="image"
          />

          <h5 class="card-title">Car Name</h5>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime similique cum porro temporibus aspernatur!
          </p>
          <p class="card-price">Price: 50$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data () {
    return {
      cars: null
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/items').then(resp => {
      this.cars = resp
    })
  }
};
</script>

<style scoped>
.main-container {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
}
.card-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  width: 26%;
  margin-bottom: 3rem;
  background-color: whitesmoke;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card-description {
  text-align: justify;
  margin-bottom: 1rem;
}
.card-border {
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.card-title {
  font-size: larger;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.card-price {
  font-size: large;
}
.main-title{
    margin: 0 auto;
    display: flex;
    margin-bottom: 1.5rem;
}

</style>
