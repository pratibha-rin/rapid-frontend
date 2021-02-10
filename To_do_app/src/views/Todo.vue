<template>
  <div id="app">
    <v-container>
      <v-row class="text-center">
        <v-col cols="14">
          <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200" />
          <h1 class="display-2 font-weight-bold mb-3">
            Start creating your Todo List
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-app>
      <v-content>
        <v-container style="max-width: 700px">
          <v-text-field v-model="task" label="Add a new task" solo @keydown.enter="create">
            <v-fade-transition slot="append">
              <v-icon v-if="task" @click="create">
                circle
              </v-icon>
            </v-fade-transition>
          </v-text-field>

          <h2 class="display-0 success--text pl-0">
            Your Tasks: &nbsp;
            <v-fade-transition leave-absolute>
              <span :key="`tasks-${tasks.length}`">
                {{ tasks.length }}
              </span>
            </v-fade-transition>
          </h2>

          <v-divider class="mt-7"></v-divider>

          <v-layout my-4 align-center>
            <strong class="mx-7 info--text text--darken-3">
              Remaining Tasks: {{ remainingTasks }}
            </strong>
            <v-divider horizontal></v-divider>
            <strong class="mx-7 black--text"> Completed Tasks: {{ completedTasks }} </strong>
            <v-divider horizontal></v-divider>
            <strong class="mx-7 black--text"> Hidden Tasks: - </strong>
            <v-spacer></v-spacer>
            <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
          </v-layout>
          <v-divider class="mb-7"></v-divider>

          <v-card v-if="tasks.length > 0">
            <v-slide-y-transition class="py-0" group tag="v-list">
              <template v-for="(task, i) in tasks">
                <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                <v-list-tile :key="`${i}-${task.text}`">
                  <v-list-tile-action>
                    <v-checkbox v-model="task.done" color="info darken-5">
                      <div
                        slot="label"
                        :class="(task.done && 'black--text') || 'text--primary'"
                        class="ml-3"
                        v-text="task.text"
                      ></div>
                    </v-checkbox>
                  </v-list-tile-action>

                  <v-spacer></v-spacer>

                  <v-scroll-x-transition>
                    <v-icon v-if="task.done" color="success" class="mx-5">
                      mdi-check
                    </v-icon>
                  </v-scroll-x-transition>
                </v-list-tile>
              </template>
            </v-slide-y-transition>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          done: false,
          text: 'Task 1'
        }
      ],
      task: null
    };
  },

  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    }
  }
};
</script>
