<template>
  <v-container fill-height fluid text-center>
      <v-container>
          <v-row>
              <v-col class="primary--text text-center mx-auto pb-4" cols="3" sm="6" offset="8">
                  <h1 class="h1">Login</h1>
              </v-col>
          </v-row>
          <v-row class="elevation-6 mx-auto">
              <v-col cols="auto">
              </v-col>
              <v-col>
                  <v-form>
                      <v-text-field label="Email" v-model="user.email"></v-text-field>
                        <v-text-field label="Senha" v-model="user.password" :type="show ? 'text' : 'password' " :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show">

                        </v-text-field>
                        <v-btn color="primary" @click="login">Login</v-btn>
                        <v-btn class="ml-5" color="warning" @click="reset">Cancelar</v-btn>
                        <v-btn class="ml-5" href="/form" color="warning" @click="create" router>Criar conta</v-btn>
                        <button href="/redefinir" color="secondary" @click="alter" router>|Esqueceu a senha?</button>
                  </v-form>
              </v-col>
          </v-row>
      </v-container>
      <v-snackbar color="red" v-model="errorLogin" danger multiline timeout="1000">Usuario ou senha esta invalido</v-snackbar>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            user:{},
            show: false,
            errorLogin: false,
        };
    },
    methods: {
        reset() {
            this.user = {};
        },
        login(){
            if(this.user.email === "plinio" && this.user.password ==="plinio"){
                this.$router.push({ name: "Home" });
            } else{
                this.errorLogin= true;
            }
        }
    },
};
</script>

<style>

</style>