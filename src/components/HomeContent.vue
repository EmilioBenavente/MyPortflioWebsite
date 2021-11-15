<template>
  <div class='HomeClass'>
    <div class='Info'>
    <div class='ImageRight'><img src='../assets/Profile.png' alt='Profile Picture' /></div>
      <div class='TextLeft'>
	<h2>Developer: Emilio Benavente</h2>
        <p>Starting with a passion for game design through an evolution of board games, I have had a growing understanding of in-depth design and implementation. My background ranges anywhere from Game Development to Augemnted Reality. Click the link below to find out more..</p>
	<router-link to='./About'><div class='Links'><p class='BtnStyle'>About</p></div></router-link>
      </div>
    </div>

    
    <div class='Info'>
      <div class='ImageLeft'><img src='../assets/Saiph.png' alt='Profile Picture' /></div>
      <div class='TextRight'>
	<h2>Projects: An Evolution of Self-Development</h2>
        <p>Throughout my short experience in the industry, I have tinkered with many projects related to software. Each project involves a different set of tools and technologies required to get the task done. Get a list of all my projects with the link below as well as an included description of the main tasks involved with each project..</p>
	<router-link to='./Projects'><div class='Links'><p class='BtnStyle'>Projects</p></div></router-link>
      </div>
    </div>

    
    <div class='Info'>
      <div class='ImageRight'><img src='../assets/Engine.png' alt='Profile Picture' /></div>
      <div class='TextLeft'>
	<h2>Game Engine: The Spider_Byte_Engine</h2>
        <p>Of all the projects that I have been a part of, the project that represents me the most is the Spider Byte Engine. Originally starting with an exploration into designing games outside of a UI system such as Unreal or Unity, I had discovered the most important aspect of my Career, click the link below to learn more..</p>
	<router-link to='./Engine'><div class='Links'><p class='BtnStyle'>Game Engine</p></div></router-link>
      </div>
    </div>

    <div class='Info'>
      <div class='ImageLeft'><img src='../assets/widow-gold.png' alt='Profile Picture' /></div>
      <div class='TextRight'>
	<h2>Blog Page: An added bonus to the Webpage</h2>
        <p>While making this website has honestly been a mild headache to do, one of the main advantages to the website is having an all in one place to share either some advice or opinions. The link on the below is the destination of such a place. Here I will create blogs of a number of topics in hopes sharing useful information, click the link to learn more..</p>
	<router-link to='./Blogs'><div class='Links'><p class='BtnStyle'>Blogs</p></div></router-link>	
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name: 'MainContent',
}
</script>

<style scoped>
  .HomeClass{
    background-image: linear-gradient(to bottom, #333333, #BBBBBB);
    position: relative;
    height: auto;
    width: 100%;
  }
  
  .Info{
    display: flex;
    color: #FFFFFF;
    font-size: 24px;
    padding: 100px;
    border: 10px groove #303030;
  }  

  img{
    width: 100%;
    height: 250px;
    border-radius: 15%;
  }
  
  .ImageRight{
    position: relative;
    display: inline-block;  
    top: -20px;
    width: 40%;
    left: 65%;
  }
  
  .TextLeft{
    position: relative;
    display: inline-block;
    width: 80%;
    top: -20px;
    left: -37%;
    background-color: #202020;
    border-radius: 4%;
    padding: 4px;
  }
  
  .ImageLeft{
    position: relative;
    display: inline-block;
    top: -10px;
    left: -40px;
    width: 40%;
    border-radius: 15%;
  }
  
  .TextRight{
    position: relative;
    display: inline-block;  
    width: 80%;
    top: -20px;
    background-color: #333333;
    border-radius: 4%;
    padding: 4px;
  }
  .Links{
    position: relative;
    display: inline-block;
    padding: 10px;
    width: 160px;
    border-radius:15%;
    border: 5px solid #000000;
    background-color: #222222;
  }

  .Links:hover{
     background-color: #000000;      
  }
  
  .BtnStyle{
    text-align: center;
    color: #00BB00;
  }
  
@media screen and (max-device-width: 599px) {
  .Info{
    padding: 5px;
    font-size: 14px;      
  }
    
  .ImageLeft, .ImageRight{
     display: none;
  }
  .TextLeft, .TextRight{
      padding: 0;
      left: 30px;
      right: 0;
      width: 90%;
      margin-top: 30px;
  }
}
@media screen and (min-device-width: 600px) and (max-device-width: 1025px){
  .Info{
    padding: 40px;
    font-size: 18px;      
  }
    
  .ImageLeft, .ImageRight{
    width: 100%;
    top: -10px;
    left: 35%;
    border-radius: 15%;
  }

  img{
    width: 150%;
    height: 160px;
    border-radius: 15%;
  }
  
  .TextLeft, .TextRight{
      padding: 0;
      left: -50px;
      right: 0;
      width: 400%;
      margin-top: 180px;
  }
}
</style>
