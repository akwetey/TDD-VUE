<template>
  <div class="navbar">
    <h1>Reggae Music List</h1>
    <p>You have {{ total }} currently</p>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    total: Number,
  },
};
</script>

<style></style>
