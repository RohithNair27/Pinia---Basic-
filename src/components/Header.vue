<template>
  <header>
    <section>
      <img src="../assets/Pinialogo.svg" alt="Pinia_Logo" />
      <h1>Pinia - Todo</h1>
    </section>
    <form>
      <input type="input" placeholder="enter your task" v-model="inputText" />
      <button @click.prevent="addClick(inputText)">Add</button>
    </form>
  </header>
</template>

<script>
export default {
  props: ["addClick"],
  data: function dataFunction() {
    return {
      inputText: "",
    };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 20px;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;

  width: 50%;
}
input {
  width: 20vw;
  height: 5vh;
}
button {
  width: 5vw;
  height: 5vh;
  margin-left: 10px;
  background-color: #ffd450;
  color: white;
  border: none;
}
</style>
