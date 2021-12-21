<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ name }}</div>
    <input type="text" v-model="newData">
    <div>
      <button @click="changeName(newData)">Change Name</button>
    </div>
    <div>
      Total names: {{ nameCount }}
    </div>
    {{ nameList }}
    <div>
      <button @click="addNewName">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      newData: '',
      newNameList: []
    }
  },
  computed: {
    ...mapState(['name', 'nameList']),
    ...mapGetters(['nameCount']),
  },
  methods: {
    ...mapActions(['changeName', 'addName']),
    addNewName() {
      this.newNameList.push(this.newData);
      this.addName(this.newNameList);
    },
    removeName(index) {
      this.newNameList.splice(index, 1);
      this.addName(this.newNameList);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
