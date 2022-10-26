<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { Todo } from '../types/todo'

const newTodoText = ref('')
const addTodo = () => {
  if (!newTodoText.value) return
  emit('add-todo', { id: Date.now(), text: newTodoText.value, done: false })
  newTodoText.value = ''
}

defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  (e: 'add-todo', value: Todo): void
  (e: 'toggle-todo', id: number): void
}>()
</script>

<template>
  <div class="demo">
    <h1>Todo Demo</h1>
    <input
      v-model="newTodoText"
      type="text"
      placeholder="Add a todo, then press enter"
      @keyup.enter="addTodo"
    >
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <input
          type="checkbox"
          :checked="todo.done"
          @change="$emit('toggle-todo')"
        >
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>
