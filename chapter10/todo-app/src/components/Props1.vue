<template>
  <div>
    {{ name }} <br/>
    <b>{{ userName }}</b>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    name: String,
  }
})
export default class PropsSample extends Vue {
  get userName() {
    return this.$props.name;
  }
}
</script>

<style>

</style>