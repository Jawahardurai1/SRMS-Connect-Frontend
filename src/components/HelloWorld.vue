<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <b-img src="https://cdn2.iconfinder.com/data/icons/arrows-236/19/Vector-9-512.png" fluid alt="Responsive image"></b-img>
          <md-icon>menu</md-icon>


        </md-button> <div class="sp">
        <span class="md-title" id="e">MCET Connect </span></div>
        <md-icon class="bt-primary"></md-icon>
        <img src="https://mcet.in/wp-content/themes/drmahalingam/images/mcet_new%20logo.jpg">
       
        
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">

        <div class="sidebar">
          <div class="sidebar-content position-absolute top-30">
                <md-button v-on:click="Eventpage()" class="text-white" >Event Notifier</md-button>
                <md-button class="text-white "href="https://app.powerbi.com/Redirect?action=OpenApp&appId=b0968548-771a-4ea4-8418-a7d70feb3539&ctid=a5c21aa7-9c6e-4350-8488-74d09106e062">Student Dashboard</md-button>
                <md-button v-on:click="Feedbackpage()" class="text-white" >Am I Clean</md-button>
                <md-button class="text-white "href="http://127.0.0.1:8001/">Bus Tracker</md-button>
          </div>
        </div>  
      </md-app-drawer>
      <md-app-content>

<div>
<b-carousel
id="carousel-1"
v-model="slide"
:interval="4000"
controls
indicators
background="#ababab"
img-width="1024"
img-height="380"
style="text-shadow: 1px 1px 2px #333;"
@sliding-start="onSlideStart"
@sliding-end="onSlideEnd"
> 
<!--Text slides with image -->
<b-carousel-slide
  
  img-src="https://drmcet.ac.in/wp-content/uploads/2024/05/ACT-2.png"
></b-carousel-slide>https://drmcet.ac.in/wp-content/uploads/2024/05/ACT-2.png

<!-- Slides with custom text -->
<b-carousel-slide img-src="https://drmcet.ac.in/wp-content/uploads/2024/04/Grand-Opening-of-SimaxTech-Pvt-Ltd.png">
 
</b-carousel-slide>

<!-- Slides with image only -->
<b-carousel-slide img-src="https://drmcet.ac.in/wp-content/uploads/2024/04/VLSI-ISRO.png"></b-carousel-slide>

</b-carousel>
</div>

<br>

<b-jumbotron>
<h3><center><b>Welcome to MCET</b></center></h3>
<div height='100px' width='100px'>
<b-card img-src="https://www.srms.ac.in/cet/wp-content/uploads/2023/07/SRMS-CET-MBA-Admissions-1.jpeg" img-alt="Card image" img-right>
      <b-card-text  style="font-family: 'Georgia' ">
        <p>Shri Ram Murti Smarak College of Engineering and Technology (SRMSCET) Unnao, also known as SRMS CET Unnao or SRMS CET Lucknow is a private-unaided engineering college of SRMS Institutions in the Lucknow region of Uttar Pradesh situated at 35 km on Lucknow -Kanpur Highway, Village Ashakhera-Kushari, Unnao, Uttar Pradesh, India.[1][2] Founded in the memory of the late Shri Ram Murti Ji, it is managed and run by SRMS Trust and offers undergraduate courses as B.Tech. in engineering.</p>
        <p>This private engineering college of Uttar Pradesh (UP) was established in the year 2011 by SRMS Trust Lucknow to provide education and research in the field of engineering education in Lucknow, Unnao and Kanpur region. In the foundation year, the college got approval from AICTE for running B.Tech. courses.[5] The first class of B. Tech started in 2011.</p>
        <p>SRMS CET Unnao and its all courses are approved by the All India Council for Technical Education, New Delhi and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.[6] Dr A P J Abdul Kalam Technical University was formerly known as Uttar Pradesh Technical University (UPTU), Lucknow. The college has institution code 745 with AKTU.[7]</p>
        <p>The course of this college and its academics are managed by following departments.</p>
        <p>Department of Mechanical Engineering</p>
        <p>Department of Electronics and Communication Engineering</p>
        <p>Department of Computer Science and Engineering</p>
        <p>Department of Basic Engineering Sciences and Humanities</p>
      </b-card-text>
      </b-card>
</div>
</b-jumbotron>
  


<div>
<center>
<b-card>
<h4>

<b-card-group deck>


<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>DEPARTMENT OF MECHANICAL ENGINEERING</h2>
The Department of Mechanical Engineering existing since the inception of the college in 1998 combines faculty with expertise in various fields and good laboratory facilities. The department boasts of well-qualified and committed faculty ably supported by the technical supporting staff. The students have access to state of the art laboratories and workshops, which enable them to face the challenging needs of the industries and research institutions. The department offers value added courses apart from the regular subjects which enable the students acquire marketable skills. Mechanical Engineering Department offers M.E.(CAD/CAM) course. Also department is recognized by Anna University, Chennai as research Centre to pursue Ph.D. The Programme is accredited by the National Board of Accreditation (NBA).
</b-card-text>
</b-card>


<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>
<h2>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h2>    
Electronic engineering is a sub-discipline of electrical engineering that emerged in the early 20th century and is distinguished by the additional use of active components such as semiconductor devices to amplify and control electric current flow. Previously electrical engineering only used passive devices such as mechanical switches, resistors, inductors, and capacitors.</b-card-text>
</b-card>


<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>DEPARTMENT OF COMPUTER SCIENCES AND ENGINEERING</h2>
Computer science and engineering (CSE) is an academic program at many universities which comprises approaches of computer science and computer engineering. There is no clear division in computing between science and engineering, just like in the field of materials science and engineering. However, some classes are historically more related to computer science (e.g. data structures and algorithms), and other to computer engineering (e.g. computer architecture). CSE is also a term often used in Europe to translate the name of technical or engineering informatics academic programs. It is offered in both undergraduate as well postgraduate with specializations</b-card-text>
</b-card>


<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>DEPARTMENT OF BASIC ENGINEERING SCIENCES AND HUMANITIES</h2>
Humanities are academic disciplines that study aspects of human society and culture, including certain fundamental questions asked by humans. During the Renaissance, the term 'humanities' referred to the study of classical literature and language, as opposed to the study of religion or 'divinity.' The study of the humanities was a key part of the secular curriculum in universities at the time. Today, the humanities are more frequently defined as any fields of study outside of natural sciences, social sciences, formal sciences (like mathematics), and applied sciences (or professional training).[1] They use methods that are primarily critical, speculative, or interpretative and have a significant historical element[2]—as distinguished from the mainly empirical approaches of science.</b-card-text>
</b-card>



</b-card-group>
</h4>
</b-card>
</center>
</div>

</md-app-content>
</md-app>



</div>

</template>

<style>

 
  .md-app {
    min-height: 1000px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 250px;
    max-width: calc(100vw - 125px);
  }
  .md-button {
  
    color: aqua;
  }
  .sidebar {
  width: 100%;
  height: 100%; /* Adjust height as needed */
  background-image: url('https://images.freecreatives.com/wp-content/uploads/2016/02/Red-Background-in-Grunge-Style.jpg'); /* Set background image */
  background-size: cover; /* Adjust to cover the sidebar */
  background-repeat: no-repeat;
  font-family: "Audiowide", sans-serif;

}
  .sidebar-content {
    padding: 20px;
  }
</style>

<script>
  export default {
    name: 'PersistentMini',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      Eventpage(){
        this.$router.push('/Event')
      },
      Feedbackpage(){
        this.$router.push('/Feedback')
      },
      bustrackpage(){
        this.$router.push('/bustrack')
      }
    }
  }
</script>