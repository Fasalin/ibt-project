<template>
  <div class="card">
    <div class="card-border">
      <img :src="carPhoto" alt="image" />

      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-description">
        {{ carLongDescription.slice(0, 150) }}
      </p>
      <p class="card-price">Price: {{ carPrice }}$</p>
      <router-link
        class="btn"
        :to="{
          name: 'Details',
          params: {
            id: carId,
            carPhoto,
            carName,
            carLongDescription,
            carPrice,
            bought,
          },
        }"
        >More details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carId: String,
    carName: String,
    carLongDescription: String,
    carPrice: String,
    carPhoto: String,
    bought: Boolean,
  },
  data() {
    return {};
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
.btn {
  background-color: #fcdb86;
  padding: 0.5rem;
  margin-top: 1rem;
}
.btn:hover {
  background-color: rgb(111, 176, 219);
}
</style>
