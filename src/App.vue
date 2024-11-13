<template>
  <Header :addClick="onClickAdd" />
  <div class="list-body">
    <section class="list-option-buttons">
      <select
        name="Liked"
        v-model="taskLiked"
        @change="addElementToStoreOnLoad()"
      >
        <option value="All tasks">All Tasks</option>
        <option value="Liked tasks">Liked Tasks</option>
      </select>
      <span>{{ taskCountText }}</span>
    </section>
    <TaskComponent
      :task="eachtask"
      v-for="eachtask in taskFromStore"
      :key="eachtask.id"
      :onClickLike="onClickLiked"
      :onClickDelete="onClickDelete"
      :onClickComplete='onCompleteTask'
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TaskComponent from "./components/TaskComponent.vue";
import { useTaskStore } from "./store/TaskStore";

export default {
  data: function funcData() {
    return {
      taskFromStore: [],
      taskLiked: "All tasks",
      allTaskCount: 0,
      favorateTaskCount: 0,
      inputText: "",
      taskText: {
        All_Tasks: "All Task",
        Liked_Task: "Linked Tasks",
      },
    };
  },
  computed: {
    taskCountText() {
      if (this.taskLiked === "All tasks") {
        return `All Tasks ${this.allTaskCount}`;
      } else {
        return `Liked Tasks ${this.favorateTaskCount}`;
      }
    },
  },
  methods: {
    addElementToStoreOnLoad() {
      const taskStore = useTaskStore();
      this.favorateTaskCount = taskStore.LikedTaskCount;
      this.allTaskCount = taskStore.totalTaskCount;
      if (this.taskLiked === "All tasks") {
        this.taskFromStore = { ...taskStore.allTasks };
      } else {
        this.taskFromStore = { ...taskStore.getIsLikedTask };
      }
    },
    onClickAdd(newTask) {
      const taskStore = useTaskStore();
      taskStore.addTask(newTask);
      this.addElementToStoreOnLoad();
      this.inputText = "";
    },
    onClickLiked(id) {
      const taskStore = useTaskStore();
      taskStore.changeIsLiked(id);
      this.addElementToStoreOnLoad();
    },
    onClickDelete(id) {
      const taskStore = useTaskStore();
      taskStore.deleteTask(id);
      this.addElementToStoreOnLoad();
    },
    onCompleteTask(id){
      const taskStore = useTaskStore();
      taskStore.completeTask(id);
      this.addElementToStoreOnLoad();
    }
  },
  beforeMount() {
    this.addElementToStoreOnLoad();
  },
  components: {
    Header,
    TaskComponent,
  },
};
</script>

<style>
.list-body {
  padding-top: 20px;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white
}
.list-component {
  display: flex;
  flex-direction: column;
}
.list-option-buttons {
  width: 40%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
