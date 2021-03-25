<template>
  <div class="gerer-list">
    
    <ul>
      <li
        v-for="(todo, index) in listTodo"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-bind:done="todo.done"
      >
      <input type="checkbox" v-on:click="todo.doneSwap()">
      <label v-show = "todo.edit == false" @dblclick="todo.edit = true">{{todo.title}}</label>
      <input v-show = "todo.edit == true" v-model = "todo.title"
      v-on:blur= "todo.edit=false; $emit('update')"
      @keyup.enter = "todo.edit=false; $emit('update')">
       <button v-on:click="listTodo.splice(index, 1)">Supprimer</button></li>
  </ul>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    props : ['listTodo'],
  })
  
  export default class GererListComponent extends Vue {
  
    mounted (){
      console.log('gererList');
    }
    
  }

</script>

<style scoped lang="scss">
  .gerer-list {

  }
</style>
