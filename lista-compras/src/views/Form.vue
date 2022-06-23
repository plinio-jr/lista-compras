<template>
<v-container>
  <h1>Deseja criar uma conta</h1>
  <br>
  <p>preencha os campus para criar sua conta</p>
  <form>
    <v-text-field label="Email"></v-text-field>
    <v-text-field label="Nome"></v-text-field>
    <v-text-field label="Senha"></v-text-field>
    <v-text-field label="Confirmar senha"></v-text-field>
  </form>
  <view-form>
    <v-btn color="primary" @click="create">Criar</v-btn>
</view-form>
   
</v-container>

  
</template>

<script>
export default {

}
</script>

<style>

</style>