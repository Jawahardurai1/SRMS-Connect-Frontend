<template>
  <div >
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
      <md-app-content>
        

        <div :style="{'background-image':'url(https://static.vecteezy.com/system/resources/previews/000/625/844/original/geometric-abstract-light-blue-background-for-website-wallpapers-bussines-templates-vector.jpg)'}">
      <md-card :style="{'background-image':'url(https://wallpapercave.com/wp/wp6956762.png)'}">

        <md-card-header>
          <div class="md-title">Am I Clean</div>
        </md-card-header>
  
        <md-card-content>
            
          <md-field>
            <label>Name</label>
            <md-input v-model="postData.name"></md-input>
            </md-field>
  
            <md-field>
            <label>RollNo.</label>
            <md-input v-model="postData.roll"></md-input>
          </md-field>
          <md-field>
            <label for="movie">Class</label>
            <md-select v-model="postData.cls" name="cls" id="cls">
              <md-option value="UG-1styear">UG-1styear</md-option>
              <md-option value="UG-2ndyear">UG-2ndyear</md-option>
              <md-option value="UG-3rdyear">UG-3rdyear</md-option>
              <md-option value="UG-4thyear">UG-4thyear</md-option>
              <md-option value="PG-1styear">PG-1styear</md-option>
              <md-option value="PG-2ndyear">PG-2ndyear</md-option>
            </md-select>
          </md-field>
          <md-field>
            <label>Place</label>
            <md-input v-model="postData.plc"></md-input>
            </md-field>
            <md-field>
            <label>Block</label>
            <md-input v-model="postData.dplc"></md-input>
            </md-field>
  
        
  
  
        <!-- <md-field>
            <label for="movie">Place</label>
            <md-select v-model="postData.plc" @input="checkWord" name="plc" id="plc">
              <md-option value="College">College</md-option>
              <md-option value="Hostel">Hostel</md-option>
            </md-select>
        </md-field>
  
  
        <md-field v-if="plc === 'College'">
           <md-select v-model="postData.dplc" placeholder="Where in College">
              <md-option value="A-Block">A-Block</md-option>
              <md-option value="B-Block">B-Block</md-option>
              <md-option value="C-Block">C-Block</md-option>
              <md-option value="DiamondJubliee-Block">DiamondJubliee-Block</md-option>  
              <md-option value="Parking">Parking</md-option>
              <md-option value="Ground">Ground</md-option>
            </md-select> 
        </md-field> -->
  
  <!-- 
        <md-field v-if="plc === 'Hostel'">
            <md-select v-model="postData.dplc" placeholder="Where in Hostel">
              <md-option value="groundfloor">groundfloor</md-option>
              <md-option value="1stFloor">1stFloor</md-option>
              <md-option value="2ndFloor">2ndFloor</md-option>
              <md-option value="3rdFloor">3rdFloor</md-option>  
            </md-select>  
        </md-field>
   -->
  
        <md-field>
          <label>Problem Here</label>
          <md-textarea v-model="postData.prb" value="problem"></md-textarea>
        </md-field>
  
  <!-- 
        <md-field>
         <label>Upload files</label>
         <md-file v-model="postData.img" placeholder="Images if any" />
        </md-field> -->
        <md-button v-on:click="submitData()">Submit</md-button>
        </md-card-content>
      </md-card>      
    </div>


    <h1><b>Better Environment, Better Tomorrow</b></h1>




      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .md-app {
    max-height: 1000px;
    border: 1px solid rgba(#000, .12);
  }
  .md-card {
      width: 500px;
      margin: 4px;
      margin: 4px;
      display: inline-block;
      vertical-align: top;

    }
    
</style>

<script>
  
    export default {
      name: 'FormValidation',
      data: () => ({
       
        postData: {
          name: '',
          roll: '',
          cls:'',
          plc:'',
          dplc:'',
          prb:'',
  
        }
       
      }),
      methods: {
         submitData() {
        const apiUrl = 'http://127.0.0.1:8000/api/login/';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.postData)
        };
  
        fetch(apiUrl, options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Data received:', data);
       
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
           
          });
      },
    Homepage(){
        this.$router.push('/')
      },
      }
    }
  </script>