<template>
  <div id="todo-list-example">
  <form v-on:submit.prevent="addTodo">
    <label for="new-todo">Ajouter une tâche</label>
    <input
      v-model="newTodo"
      id="new-todo"
      placeholder="Ex. nourrir le chat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
    >{{todo.title}} <button v-on:click="todos.splice(index, 1)">Supprimer</button></li>
  </ul>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class Todos2 extends Vue {
    
    nextTodoId  = 1
    newTodo = ''
    todos = [
        {
            id:0,
            title:'truc a faire',
        }
        ]
    
    
    addTodo() {
        console.log('ola');
        this.todos.push({id:this.nextTodoId++,title : this.newTodo});
        this.newTodo = '';
    }
    
    
    
}

</script>

<style scoped lang="scss">
  .todos {

  }
</style>
