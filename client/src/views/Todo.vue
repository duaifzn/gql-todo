<template>
  <div class="Todo">
    <h1>Todo List</h1>
    <div class="context mx-auto">
      <AddTodo></AddTodo>
      <!-- <TodoList></TodoList> -->
    </div>
  </div>
</template>

 <script>
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "Todo",
  components: {
    AddTodo
  }
};
</script>  
<style>
.context {
  width: 250px;
}
</style>