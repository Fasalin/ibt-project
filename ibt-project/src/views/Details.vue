<template>
  <div>
    <div>{{ carName }}</div>
    <div>{{ carDescription }}</div>
    <div>{{ carPrice }}</div>
    <div>{{ carPhoto }}</div>
  </div>
</template>

<script>
export default {
  props: ["carName", "carDescription", "carPrice", "carPhoto"],
};
</script>