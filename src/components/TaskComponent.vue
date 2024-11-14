<template>
  <div class="taskContainer">
    <div class="taskStartContainer">
      <div class="completeCircle" @click="onClickComplete(task.id)" :style="styleCompleteTask"></div>
      <span v-bind:style="styleCompletedTask">{{ task.task }}</span>
    </div>
    <div class="icons">
      <i class="material-icons" @click="onClickDelete(task.id)">delete</i>
      <i class="material-icons" @click="onClickLike(task.id)" :style="stylesLiked"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["task", "onClickLike", "onClickDelete","onClickComplete"],
  computed: {
    stylesLiked() {
      if (this.task.isLiked) {
        return "color: red";
      } else {
        return "color:gray";
      }
    },
    styleCompletedTask(){
      if (this.task.isCompleted) {
        return "text-decoration:line-through;color:gray;";
      } else {
        return "";
      }
    },
    styleCompleteTask(){
      if (this.task.isCompleted) {
        return "background-color: #8ae99c;border:2px white solid";
      } else {
        return "background-color: white";
      }
    }
  },
};
</script>

<style>
.taskContainer {
  width: 40%;
  min-width: 300px;
  align-self: center;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #e7e7e7;
  border-radius: 10px;
  transition: background-color 0.3s ease;

}
.taskContainer:hover{
  background-color: #e7e7e7;
  border: 2px solid #e7e7e7;
}
i {
  color: grey;
  cursor: pointer;
  margin-left: 10px;
}
.taskStartContainer{
  display: flex;
  align-items: center;
  justify-content: center;
}
.completeCircle{
  border:2px gray solid;
  height: 15px;
  width:15px;
  border-radius:100px;
  margin-right: 10px;
  transition: border-color 0.3s ease;
}
.completeCircle:hover{
  border: 2px solid #8ae99c;
  transition: background-color 0.3s ease;

}
.taskStartContainer span{
  width:300px;
  white-space: nowrap;         /* Prevents text from wrapping */
  overflow: hidden;            /* Hides the overflowing text */
  text-overflow: ellipsis;     /* Adds "..." at the end of the text */
}
@media screen and (max-width:1200px){
  .taskStartContainer span{
  width:200px;
  white-space: nowrap;         /* Prevents text from wrapping */
  overflow: hidden;            /* Hides the overflowing text */
  text-overflow: ellipsis;     /* Adds "..." at the end of the text */
}
}

@media screen and (max-width:300px){
  .taskStartContainer span{
  width:120px;
  white-space: nowrap;         /* Prevents text from wrapping */
  overflow: hidden;            /* Hides the overflowing text */
  text-overflow: ellipsis;     /* Adds "..." at the end of the text */
}
}

</style>
