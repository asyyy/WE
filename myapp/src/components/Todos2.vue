<template>     
  <div id="todo-list-example">
  <form v-on:submit.prevent="addTodo">
    <label for="new-todo">Ajouter une tâche </label>
    <input
      v-model="newTodo"
      id="new-todo"
      placeholder="Ex : faire un truc"
      pattern = ".{1,}"
      required title = "Au moins 1 caractère"
    >
    <button>Add</button>
  </form>
  <GererListComponent v-bind:listTodo= todos2 />
    <!-- <footer v-if="todos2.length>0">  -->
      <footer v-if="isListMoreThanZero()">
      <span> Total de tâche : {{todos2.length}} </span> 
      
    </footer>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import ClassTodo from './classTodo';
  import GererListComponent from './gererList.vue'


  @Component({
  components: {
    GererListComponent,
    
  },
})
  export default class Todos2 extends Vue {
    
    nextTodoId  = 1
    newTodo = ''
    // todos = [
    //     {
    //         id:0,
    //         title:'truc a faire',
          
    //     }
    //     ]

    todos2: ClassTodo[] = [new ClassTodo(0,"truc à faire")]
    
    addTodo() {
        console.log('ola');
        // this.todos.push({id:this.nextTodoId++,title : this.newTodo});
        this.todos2.push(new ClassTodo(this.nextTodoId++,this.newTodo));
        this.newTodo = '';
    }
    isListMoreThanZero(){
      return this.todos2.length > 0
    }
    
}

</script>

<style scoped lang="scss">
  .todos {

  }
</style>
