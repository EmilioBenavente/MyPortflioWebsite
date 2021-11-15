<template>
  <div class='socialClass'>
    <nav class='icons'>
      <a href='https://www.linkedin.com/in/emilio-benavente' target='_blank'><img src='../assets/LinkedIn.png' alt='Linked In Page' /></a>
      <a href='https://twitter.com/EmilioCBen' target='_blank'><img src='../assets/Twitter.png' alt='Twitter Page' /></a>
      <a href='https://www.youtube.com/channel/UCEjLOXwzmmlYuhC6FnVHhzQ' target='_blank'><img src='../assets/Youtube.png' alt='Youtube Page' /></a>
      <a href='https://www.twitch.tv/emilio_benavente' target='_blank'><img src='../assets/Twitch.png' alt='Twitch Page' /></a>
      <a href='https://discord.gg/y79YRfNcxb' target='_blank'><img src='../assets/Discord.png' alt='Discord Page' /></a>
    </nav>

    <span class='HamButton'>
      <Slide right width='100' >
        <a href='https://www.linkedin.com/in/emilio-benavente' target='_blank'><img src='../assets/LinkedIn.png' alt='Linked In Page' /></a>
        <a href='https://twitter.com/EmilioCBen' target='_blank'><img src='../assets/Twitter.png' alt='Twitter Page' /></a>
        <a href='https://www.youtube.com/channel/UCEjLOXwzmmlYuhC6FnVHhzQ' target='_blank'><img src='../assets/Youtube.png' alt='Youtube Page' /></a>
        <a href='https://www.twitch.tv/emilio_benavente' target='_blank'><img src='../assets/Twitch.png' alt='Twitch Page' /></a>
        <a href='https://discord.gg/y79YRfNcxb' target='_blank'><img src='../assets/Discord.png' alt='Discord Page' /></a>
      </Slide>
    </span>
  </div>
</template>

<script>
  import { Slide } from 'vue3-burger-menu'
  export default {
    name: 'SocialTabs',
  components: {
    Slide
  }
}
</script>

<style scoped>
  nav{
      float: right;
  }
  
  img:hover{
      cursor: pointer;
      filter: grayscale(30%);
      padding-bottom: 8px;
  }
  .socialClass{
    position: absolute;
    z-index: 10;
    right: 20px;
    color: #FFFFFF;
    height: 50px;
  }

  nav img{
      border-radius: 10%;
  }
 .HamButton{
      position: absolute;
      width: 36px;
      height: 30px;
      right: 40px;
      top: -15px;
    }

@media screen and (max-device-width: 599px){
  .icons{
      display: none;
  }
  nav img{
      margin: 5px;
      width: 30px;
      height: 30px;
  }
}
@media screen and (min-device-width: 600px) {
  .HamButton{
      display: none;
  }
  .icons{
    position: relative;	
    top: 30px;
  }
  nav img{
      margin: 5px;
      width: 30px;
      height: 30px;
  }
}
@media screen and (min-device-width: 1025px) {
  .HamButton{
      display: none;
  }
  .icons{
    position: relative;	
    top: 20px;
  }
  nav img{
      margin: 8px;
      width: 40px;
      height: 40px;
  }
}
</style>
