<template>
  <div>
    {{ name }}
    <br />
    <b>{{ userName }}</b>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PropsSample extends Vue {
  @Prop({ type: String, default: "기본값" })
  private readonly name!: string; // 초기화 하지 않아도 됨

  get userName() {
    return this.$props.name;
  }
}
</script>

<style>
</style>