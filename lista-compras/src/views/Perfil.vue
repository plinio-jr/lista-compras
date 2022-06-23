<template> 
  <v-container class="pa-10" fluid>
    <h1 class="h1"> Meu Usuario</h1>
    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"></v-text-field>
         <v-text-field label="Sobrenome" v-model="sobrenome"></v-text-field>
          <v-text-field label="Idade" v-model="idade"></v-text-field>
          <v-text-field label="Estado" v-model="estado"></v-text-field>
          <v-text-field label="Cidade" v-model="cidade"></v-text-field>

          <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
<br>


         <v-btn color="secondary">Salvar</v-btn>
         <v-btn class="ml-5" color="warning">Editar</v-btn>
         <v-btn class="ml-5" color="danger">Cancelar</v-btn>
      </v-container>
    </v-form>
  </v-container> 
</template>

<script>
export default {
  data(){
    return{
      nome:"",
      sobrenome:"",
      idade:"",
      estado:"",
      cidade:"",
      
}
  }
}
</script>

<style>

</style>
