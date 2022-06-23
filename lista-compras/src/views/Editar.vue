<template>
  <v-view>
   
   
    <center>
      <button>
      <label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
   </button>
   <br>
     <button id="novacategoria">
        Adicionar categoria
        <v-icon>mdi-plus</v-icon>
      </button> 
      <br>
        <button id="novoitem">
        Adicionar Item<v-icon>mdi-plus</v-icon></button>
       
        
    </center>
    
    <v-form>
             <h3>Quantidade</h3>
        <input type="num" name="Quantidade" id="quantidade">
        <h3>Produto</h3>
        <input type="text" name="Produto" id="produto">
        <h3>Peso</h3>
        <input type="text" name="Peso" id="peso"> 
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option value="1">Quilograma</option>
  <option value="2">Gramas</option>
  <option value="3">Litros</option>
  <option value="4">Mililitros</option>
  <option value="5">bandeja</option>
  <option value="6">duzia</option>
</select>
        <h3>Preço</h3>
        <input type="text" name="Preco" id="preco">
        <h3>Total:</h3>
        <label for="valor"></label>
       
    </v-form>
    
  </v-view>
</template>

<script>

export default {
quantidade:"",
produto:"",
peso:"",
preco:"",
valor:"total",
}
</script>

<style>

</style>