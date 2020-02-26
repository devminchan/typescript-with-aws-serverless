<template>
  <div>
    <input type="button" value="보내기" @click="send"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EventBus } from '@/EventBus';

@Component
export default class Sender extends Vue {
  private send() {
    EventBus.$emit('MESSAGE', 'send message');
  }
}
</script>

<style>

</style>