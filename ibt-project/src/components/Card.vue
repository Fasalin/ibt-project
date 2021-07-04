<template>
  <div class="card">
    <div class="card-border">
      <img :src="carPhoto" alt="image" />

      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-description">
        {{ carLongDescription.slice(0, 150) }}
      </p>
      <p class="card-price">Price: {{ carPrice }} $</p>
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
            buyerAddress,
            buyerName
          }
        }"
        >More details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "carId",
    "carName",
    "carLongDescription",
    "carPrice",
    "carPhoto",
    "buyerName",
    "buyerAddress"
  ],
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
}
.card-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  background-color: whitesmoke;
  height: 100%;
  border: 1px black solid;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
}
.card img {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 1rem;
}
.card-description {
  text-align: justify;
  margin-bottom: 1rem;
}
.card-border {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
}
.card-title {
  font-size: larger;
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
  margin: 1rem 1rem;
}
.btn:hover {
  background-color: rgb(111, 176, 219);
}
</style>
