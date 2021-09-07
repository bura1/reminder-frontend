<template>
  <table>
    <tbody>
    <tr>
      <th>ID</th>
      <th>Reminder</th>
    </tr>
    <template v-for="reminder in reminders">
      <tr v-bind:key="reminder.id">
        <td>{{ reminder.id }}</td>
        <td>{{ reminder.text }}</td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            reminders: {}
        }
    },
    async created () {
        const response = await axios.get('https://localhost:8001/reminders')
        this.reminders = response.data
    }
}
</script>

<style scoped>

</style>