<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-">
        <md-button v-on:click="Homepage()" class="md-icon-button" @click="menuVisible = !menuVisible">
          <b-img src="https://icon-library.com/images/back-icon-png/back-icon-png-18.jpg" fluid alt="Responsive image"></b-img>
        </md-button> 
        <div class="sp">
        <span class="md-title" id="e">MCET Connect </span></div>
        <md-icon class="bt-primary"></md-icon>
        <img src="https://mcet.in/wp-content/themes/drmahalingam/images/mcet_new%20logo.jpg">
       
        
      </md-app-toolbar>
      <md-app-content :style="{'background-image':'url(https://static.vecteezy.com/system/resources/previews/000/625/844/original/geometric-abstract-light-blue-background-for-website-wallpapers-bussines-templates-vector.jpg)'}">

      <div>
  <md-card :style="{'background-image':'url(https://wallpapercave.com/wp/wp6956762.png)'}">
          <md-card-header>
            <md-card-media>
              <img src="https://rochesterdowntown.com/wp-content/uploads/2022/05/Final-CollegeFEST-IG-2022-1024x1024.png">
            </md-card-media>
            <span class="md-title">Varnam 2k24</span>
          </md-card-header>
          
        <md-card-content>
          <p>VENUE:CC Hall</p>
          <p> DATE:08/05/2024</p>
          <p> Ph no:1234567890</p>
          <md-button class="md-primary">Register</md-button>
        </md-card-content>
    </md-card>


  <md-card :style="{'background-image':'url(https://wallpapercave.com/wp/wp6956762.png)'}">
          <md-card-header>
            <md-card-media>
              <img src="https://rochesterdowntown.com/wp-content/uploads/2022/05/Final-CollegeFEST-IG-2022-1024x1024.png">
            </md-card-media>
            <span class="md-title">Varnam 2k24</span>
          </md-card-header>
          
        <md-card-content>
          <p>VENUE:CC Hall</p>
          <p> DATE:08/05/2024</p>
          <p> Ph no:1234567890</p>
          <md-button class="md-primary">Register</md-button>
        </md-card-content>
    </md-card>
    

    <md-card :style="{'background-image':'url(https://wallpapercave.com/wp/wp6956762.png)'}">
          <md-card-header>
            <md-card-media>
              <img src="https://rochesterdowntown.com/wp-content/uploads/2022/05/Final-CollegeFEST-IG-2022-1024x1024.png">
            </md-card-media>
            <span class="md-title">Varnam 2k24</span>
          </md-card-header>
          
        <md-card-content>
          <p>VENUE:CC Hall</p>
          <p> DATE:08/05/2024</p>
          <p> Ph no:1234567890</p>
          <md-button class="md-primary">Register</md-button>
        </md-card-content>
    </md-card>



      




      <md-card v-for="item in items"
    :key="item.id" :item="item" :style="{'background-image':'url(https://wallpapercave.com/wp/wp6956762.png)'}">
       

        <md-card-area>
          <md-card-header>
            <md-card-media>
              <img src={{item.poster}>

        </md-card-media>
            <span class="md-title">{{item.eve}}</span>
           
           
           
          </md-card-header>
           <md-card-content>
            <p>VENUE:{{item.venue}}</p>
          <p> DATE:{{item.DT}}</p>
          <p> Ph no:{{item.contact}}</p>
          <md-button class="md-primary">Register</md-button>
        </md-card-content>
        </md-card-area>
    </md-card>
  </div>


      </md-app-content>
    </md-app>
  </div>
</template>

<style>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-card-media{
    width:100px;
    height:150px;
  }
</style>

<script>


export default {
  components: {
   
  },
  data() {
    return {
      items: [] // Data fetched from the API will be stored here
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/Event/');
        const data = await response.json();
        this.items = data; // Assuming API returns an array of items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    Homepage(){
        this.$router.push('/')
      },
  }
};
</script>