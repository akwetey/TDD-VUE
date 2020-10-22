<template>
  <div id="app">
    <Navbar :total="music.length" />
    <div class="music-list" v-if="music.length">
      <ul>
        <template v-for="(mus, i) in music">
          <MusicDetails :music="mus" :key="i" @delete-List="deleteList" />
        </template>
      </ul>
    </div>
    <div class="empty" v-else>No Music</div>
    <form @submit.stop.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Music Title"
        name="title"
        v-model="title"
        required
      />
      <input
        type="text"
        placeholder="Artiste"
        name="artiste"
        v-model="artiste"
        required
      />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MusicDetails from "./components/MusicDetails";
export default {
  components: {
    Navbar,
    MusicDetails,
  },
  data() {
    return {
      music: [],
      artiste: "",
      title: "",
    };
  },

  methods: {
    handleSubmit() {
      try {
        const formData = {
          title: this.title,
          artiste: this.artiste,
          id: this.rand(),
        };
        this.music.push(formData);
        if (this.music.length)
          localStorage.setItem("music", JSON.stringify(this.music));
        this.title = "";
        this.artiste = "";
      } catch (error) {
        console.log(error);
      }
    },
    rand() {
      return Math.floor(Math.random() * 1000);
    },

    deleteList(id) {
      this.music = this.music.filter((el) => el.id !== id);
      localStorage.setItem("music", JSON.stringify(this.music));
    },
  },

  created() {
    const ls = localStorage.getItem("music");
    if (ls) this.music = JSON.parse(ls);
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
}
#app {
  background: #e20d0d;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #eee;
}

.navbar {
  padding: 10px 20px;
  text-align: center;
  background: #3eb308;
}

.navbar h1 {
  margin: 10px 0;
}

.music-list {
  margin: 20px;
}
.music-list ul {
  padding: 0;
  list-style-type: none;
}
.music-list li {
  background: #f0d817;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 5px;
}
.music-list li:hover {
  opacity: 0.7;
  text-decoration: line-through;
}
.title {
  color: #000;
  font-weight: bold;
  font-size: 1.3em;
}
.artiste {
  color: #000;
  font-size: 0.9em;
}
.empty {
  margin: 20px;
  text-align: center;
}

form {
  padding: 20px;
}

input[type="text"] {
  width: 100%;
  border: 0;
  color: #000;
  padding: 10px;
  box-sizing: border-box;
  margin: 6px 0;
  background: #f0d817;
}
button[type="submit"] {
  border: 0;
  padding: 6px 20px;
  box-sizing: border-box;
  margin: 10px auto;
  background: #f0d817;
  display: block;
  cursor: pointer;
}
</style>
