<template>
  <div id="app">
    <vue-json-pretty
      :path="'res'"
      :data="{ key: 'value' }"
      @click="handleClick"
    >
    </vue-json-pretty>
  </div>
</template>

<script>
  import VueJsonPretty from "vue-json-pretty";
  import "vue-json-pretty/lib/styles.css";

  export default {
    components: {
      VueJsonPretty
    }
  };
</script>
