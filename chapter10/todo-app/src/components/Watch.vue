<template>
  <div>
    {{ user.name }} / {{ user.age }} / {{ user.title }} <br/>
    <input type="button" @click="addAge" value="나이 먹기"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

interface IUser {
  name: string;
  age: number;
  title: string;
}

@Component
export default class WatchComponent extends Vue {
  private user: IUser;

  constructor() {
    super();

    this.user = {
      name: 'kim',
      age: 17,
      title: 'boy',
    };
  }

  @Watch('user.age')
  private onChangeUser(value: number, oldValue: number) {
    if (value >= 18 && value < 70) {
      this.user.title = 'man';
    } else if (value > 70) {
      this.user.title = 'senior';
    }
  }

  private addAge() {
    this.user.age++;
  }
}
</script>

<style>

</style>