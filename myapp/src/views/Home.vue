<template>
  <div class="home">
    <p v-if="visible">Maintenant vous me voyez {{message}}</p>
    <button v-on:click="foo()">
      ok
    </button>
    <p v-background> 
      Il est 11h51
    </p>
    <p v-background = 'red'> 
      Il n'est plus 11h51
    </p>
    <Todos2/>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Background} from '../directives/background.directive'
import Todos2 from '@/components/Todos2.vue';

@Component({
  components: {
    Todos2,
  },
  directives: {
    Background,
  }
})

export default class Home extends Vue {
    
    message= 'test';
    visible = true;
    foo(){
      this.visible = !this.visible;
    }
    
}
</script>