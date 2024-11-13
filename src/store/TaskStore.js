import { defineStore } from "pinia";
// define store returns a function
export const useTaskStore = defineStore("Task-store", {
  state: function states() {
    return {
      allTasks: [],
    };
  },
  getters: {
    getIsLikedTask: function () {
      return this.allTasks.filter((task) => task.isLiked === true);
    },
    LikedTaskCount: function () {
      return this.getIsLikedTask.length;
    },
    totalTaskCount: function () {
      return this.allTasks.length;
    },
  },
  actions: {
    addTask: function (newTask) {
      let newId = Math.floor(Math.random() * 10000);
      let formatNewTask = { id: newId, task: newTask, isLiked: false,isCompleted:false };
      this.allTasks.push(formatNewTask);
    },
    completeTask:function(id){
      this.allTasks.forEach((value)=>{
        if(value.id===id){
          value.isCompleted=!value.isCompleted;
        }
      })
    },
    changeIsLiked: function (id) {
      this.allTasks.forEach((value) => {
        if (value.id === id) {
          value.isLiked = !value.isLiked;
        }
        console.log(this.allTasks);
      });
    },
    deleteTask: function (id) {
      let updatedArray = this.allTasks.filter((eachTask) => {
        return eachTask.id !== id;
      });
      this.allTasks = updatedArray;
    },
  },
});
