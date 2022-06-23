<template>
 <v-container>
  <h2>Pesquisar lista: <input type="text"></h2>  
    <button v-onclick="create">Criar lista</button>
    <br>
      <navbar/>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Titulo lista</h5>
    <p class="card-text">lista do dia x compras realizadas no mercado y</p>
    <a href="/editar" class="btn btn-primary">Ver lista</a>
    <button class="edita"><v-icon> mdi-dots-vertical </v-icon></button>
     <div btn=v-on click="edita = !edita"></div>
  </div>
</div>
 </v-container>
</template>

<script>

  export default{
    
  }
   
  
  
</script>

<style>
.container{
  width: 70%;
  background: whitesmoke;
  padding: 1px;
  border: 0;
}
.card{
  border: grey;
  margin: 50;
  max-width: 70%;
  width: 510;
  height: 1;
}
.container-fluid{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.menuh{
  list-style-type: none;
  padding: 0;
}
.card-body{
  width: 50%;
  margin-block: 10;
  padding: 15;
  max-width: 30%;
  height: 50;
  left: auto;
}

</style>
