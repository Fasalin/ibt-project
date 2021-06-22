<template>
  <div class="details-container">
    <div class="details-car-name">{{ carName }}</div>
    <div class="details-car-description">{{ carDescription }}</div>
    <div class="details-car-price">{{ carPrice }}</div>
    <img class="details-car-photo" :src="carPhoto" alt="photo">
  </div>
</template>

<script>
export default {
  props: ["carName", "carDescription", "carPrice", "carPhoto"],
};
</script>

<style scoped>
.details-container {
  width: 80%;
}

.details-car-photo{
    width: 10%;
    height: 10%;
}

</style>