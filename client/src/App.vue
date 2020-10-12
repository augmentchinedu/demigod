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
      console.log(process.env.NODE_ENV);
      axios
        .get(`${process.env.VUE_APP_HOST}/api${window.location.pathname}`)
        .then(res => {
          this.feed = res.data;
        });
    }
  };
</script>
