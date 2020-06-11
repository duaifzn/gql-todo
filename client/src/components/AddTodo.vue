<template>
  <div class="add-todo">
    <input
      type="text"
      id="todo"
      placeholder="Enter new todo"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">+</button>

    <div class="todo-list">
      <div v-for="todo in todos" :key="todo.id" class="mt-2">
        <b-row>
          <b-col cols="10">{{todo.name}}</b-col>
          <b-col cols="2">
            <b-icon icon="x" class="btnDelete" @click="deleteTodo(todo.id)"></b-icon>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "addTodo",
  data() {
    return {
      newTodo: ""
    };
  },
  apollo: {
    todos: {
      query() {
        return gql`
          query {
            user {
              todos {
                id
                name
              }
            }
          }
        `;
      },
      update: data => data.user.todos
    }
  },
  methods: {
    async addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($name: String!) {
              addTodo(name: $name) {
                id
                name
              }
            }
          `,
          // Parameters
          variables: {
            name: this.newTodo
          }
        })
        .then(data => {
          console.log(data);
          if ((data.data.addTodo.name = this.newTodo)) {
            this.$apollo.queries.todos.refetch();
            this.newTodo = "";
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    async deleteTodo(id) {
      // Call to the graphql mutation
      await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($id: String!) {
              deleteTodo(id: $id) {
                todos {
                  id
                  name
                }
              }
            }
          `,
          // Parameters
          variables: {
            id: id
          }
        })
        .then(() => {
          this.$apollo.queries.todos.refetch();
        });
    }
  }
};
</script>

<style>
#todo {
  border-radius: 20px;
}
button {
  border-radius: 20px;
}
.btnDelete {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: red;
  font-size: 15px;
  cursor: pointer;
}
</style>