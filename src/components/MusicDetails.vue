<template>
  <div>
    <li @click="deleteMusic">
      <div class="title">{{ music.title }}</div>
      <div class="artiste">{{ music.artiste }}</div>
    </li>
  </div>
</template>

<script>
export default {
  name: "MusicDetails",
  props: {
    music: Object,
  },
  methods: {
    deleteMusic() {
      this.$emit("delete-List", this.music.id);
    },
  },
};
</script>
