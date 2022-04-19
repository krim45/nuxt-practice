<template>
  <v-card>
    <v-card-title>hihihi</v-card-title>
    <v-card-text>
      <v-textarea v-model="text" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test"> test </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    async test() {
      const res = await axios.get('/api')
      // console.log(res)
      this.text = res.data
    },
  },
}
</script>
<style>
</style>