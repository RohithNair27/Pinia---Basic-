<template>
  <header>
    <section>
      <h1>Pinia's daily logs</h1>
      <img src="../assets/Pinialogo.svg" alt="Pinia_Logo" />
    </section>
    <form>
      <input type="input" placeholder="I want to complete..." v-model="inputText" />
      <button @click.prevent="onClickAdd">Add</button>
    </form>
  </header>
</template>

<script>
export default {
  props: ["addClick"],
  methods: {
    onClickAdd() {
      this.addClick(this.inputText);
      this.inputText = "";
    },
  },
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
  justify-content: space-around;
  align-items: center;
  background: #e7e7e7;
  flex-direction: column;
  height: fit-content;
  min-height: 35vh;
  padding-bottom: 20px;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;

  width: 50%;
  min-width: 300px;
}
input {
  min-width: 400px;
  height: 40px;
  padding-left:10px;
  border-radius: 10px;
  outline:none;
  border:2px solid gray;
  transition: border-color 0.3s ease
}
input:focus{
  outline: none;
border: 2px solid #3ac553;

}
button {
  width: 80px;
  height: 6vh;
  margin-left: 10px;
  background-color: #ffd450;
  color: white;
  border: none;
}
@media screen and (max-width: 400px){
  input{
    min-width:150px
  }
}
</style>
