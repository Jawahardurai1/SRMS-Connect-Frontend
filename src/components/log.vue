<template ><div class="pg-secondary">
    <form novalidate class="md-layout ">
      <md-card class="md-layout-item md-size-50 md-small-size-100 bg-grey">
        <md-card-content> 
          <md-text style="font-size:xx-large ;padding:10px" ><center>Outpass</center></md-text>
        <md-field>
          <label>Username</label>
          <md-input v-model="postData.username"></md-input>
        </md-field>
    
        <md-field>
          <md-input v-model="postData.pass" type="password"></md-input>
        </md-field>
        <md-button v-on:click="submitData()" class="md-raised md-primary" >Submit</md-button>
           </md-card-content>
      </md-card></form>
    </div>
    </template>
    <style>
   
    .form{
      height: 100%;
    }
    .md-card{
        margin-top: 8%;
        margin-left: 25%;
        
    }
    </style>
    <script>
    export default {
      name: 'FormValidation',
      data: () => ({
       
        postData: {
          username: '',
          password: '',
        
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
      }
    }
  </script>