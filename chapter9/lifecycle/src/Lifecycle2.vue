<template>
  <div>
    <h1>{{ title }} {{ num }}</h1>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data: () => {
    return {
      title: ""
    };
  },
  methods: {
    addNum() {
      this.num++;
    }
  },
  computed: {
    titleAndNum() {
      return this.title + this.num;
    }
  },
  beforeCreate: function() {
    console.log("2 ==========================");
    console.log("2 " + this.titleAndNum + " beforeCreate");
  },
  created: function() {
    console.log("2 " + this.titleAndNum + " created");
    this.title = "Vue 라이프사이클";
  },
  beforeMount: function() {
    console.log("2 " + this.titleAndNum + " beforeMount");
  },
  mounted: function() {
    console.log("2 " + this.titleAndNum + " mounted");
  },
  beforeUpdate: function() {
    console.log("2 " + this.titleAndNum + " beforeUpdate");
  },
  updated: function() {
    console.log("2 " + this.titleAndNum + " updated");
  },
  beforeDestroy: function() {
    console.log("2 " + this.titleAndNum + " beforeDestory");
  },
  destroyed: function() {
    console.log("2 " + this.titleAndNum + " destroyed");
    console.log("2 ==========================");
  }
};
</script>