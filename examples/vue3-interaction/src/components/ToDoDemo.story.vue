<script lang="ts" setup>
import { reactive } from 'vue'
import { Todo } from '../types/todo'
import ToDoDemo from './ToDoDemo.vue'

const todos = reactive<Todo[]>([
  { id: 1, text: 'Learn Vue 3', done: false },
  { id: 2, text: 'Learn Vite', done: false },
  { id: 3, text: 'Learn Histoire', done: false },
])

const addTodo = (todo: Todo) => todos.push(todo)

const toggleTodo = (id: Todo['id']) => {
  const todo = todos.find((todo) => todo.id === id)
  if (!todo) return
  todo.done = !todo.done
}
</script>

<template>
  <Story title="Story setup">
    <Variant>
      <ToDoDemo
        :todos="todos"
        @add-todo="addTodo"
        @toggle-todo="toggleTodo"
      />
    </Variant>
  </Story>
</template>
