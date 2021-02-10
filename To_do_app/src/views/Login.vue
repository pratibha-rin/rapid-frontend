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
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="display-0 mb-1">
                    Log in or Register
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Sign in using your email and password:</p>
                <v-form>
                  <v-text-field outline label="Email" type="text" v-model="email"></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                  Login
                </v-btn>
                <v-divider></v-divider>
                <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: true,
      platformName: 'Todo App',
      password: null,
      username: null
    };
  }
};
</script>

<style scoped>
.v-btn,
.v-card {
  border-radius: 100px;
}
</style>
