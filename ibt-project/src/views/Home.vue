<template>
  <div class="main-container">
    <h1 class="main-title">Garage Mania</h1>
    <div class="card-wrapper">
      <Card
        v-for="car in cars"
        :key="car.id"
        :car-photo="car.img"
        :car-name="car.name"
        :car-description="car.shortDesc"
        :car-price="car.price"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      cars: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/items")
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

.card-a {
  width: 100%;
  height: 100%;
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
.main-title {
  margin: 0 auto;
  display: flex;
  margin-bottom: 1.5rem;
}
</style>
