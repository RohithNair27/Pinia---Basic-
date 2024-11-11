<template>
  <div class="taskContainer">
    <span>{{ task.task }}</span>
    <div class="icons">
      <i class="material-icons" @click="onClickDelete(task.id)">delete</i>
      <i class="material-icons" @click="onClickLike(task.id)" :style="styles"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["task", "onClickLike", "onClickDelete"],
  computed: {
    styles() {
      if (this.task.isLiked) {
        return "color: red";
      } else {
        return "color:gray";
      }
    },
  },
};
</script>

<style>
.taskContainer {
  width: 40%;
  align-self: center;
  height: 9vh;
  margin-top: 20px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
i {
  color: grey;
  cursor: pointer;
  margin-left: 10px;
}
</style>
