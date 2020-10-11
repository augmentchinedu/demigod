<template>
  <div id="app">
    <vue-json-pretty :path="'res'" :data="feed"> </vue-json-pretty>
  </div>
</template>

<script>
  import axios from "axios";
  import VueJsonPretty from "vue-json-pretty";
  import "vue-json-pretty/lib/styles.css";

  export default {
    components: {
      VueJsonPretty
    },
    data() {
      return {
        feed: {}
      };
    },
    created() {
      axios
        .get(
          `${window.location.protocol}//${window.location.hostname}:3000/api${window.location.pathname}/`
        )
        .then(res => {
          this.feed = res.data;
        });
    }
  };
</script>
