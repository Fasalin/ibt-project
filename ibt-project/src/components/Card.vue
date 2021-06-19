<template>
  <div class="card">
    <div class="card-border">
      <img
        :src="carPhoto"
        alt="image"
      />

      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-description">
        {{carDescription}}
      </p>
      <p class="card-price">Price: {{carPrice}}$</p>
    </div>
  </div>
</template>

<script>
export default {
    props:["carName","carDescription", "carPrice", "carPhoto"],
    data() {
        return {
            
        }
    }
}
</script>