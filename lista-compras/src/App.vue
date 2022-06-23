<template>
  <v-app>
    <MN
    avbar/>
    <v-app-bar app color="primary" elevation="1">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini"> 
        <v-list dense color="primary" dark>
          <v-list-item class="px-2" @click="mini = ! mini">
            <v-list-item-action>
              <v-icon>mdi-chevron-left</v-icon>
             </v-list-item-action> 
            <h3>Menu</h3>
          </v-list-item>
          </v-list>
           <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
             <v-list-item-avatar>
               <v-icon>{{item.icon}}</v-icon>
             </v-list-item-avatar>
             <v-list-item-content>{{item.title}}</v-list-item-content>
           </v-list-item>
      </v-navigation-drawer>
    <v-main><router-view></router-view></v-main>
  </v-app>
  
</template>

<script>

 export default {
  name:'app',
  

  data(){
    return{
      sidebar: true,
      mini:false,
      items:[
        { title: "Home", icon:"mdi-home", to:"/"},
        { title: "Usuario", icon:"mdi-account-box", to:"/perfil"},
        { title: "Login", icon:"mdi-account-plus", to:"/login"},
        { title: "Sobre", icon:"mdi-dots-horizontal", to:"/sobre"}, 
        { title: "Comunidade", icon:"mdi-account-group", to:"/comunidade"},
        { title: "Comparador", icon:"mdi-currency-brl", to:"/comparador"},
       
        

      ],
    };
  },
 };
</script>

<style>

</style>
