<template>
  <div class='headerClass'>
    <div class='pageTitle'><h1>{{this.$route.name}}</h1></div>
    <Logo />
    <SocialTabs />
    <Buttons />
    <HeaderShowcase class='Show'/>
  </div>
</template>

<script>
  import Logo from './Logo'
  import SocialTabs from './SocialTabs'
  import HeaderShowcase from './HeaderShowcase'
  import Buttons from './Buttons'
  export default {
    name: 'Header',
    components: {
      Logo,
      SocialTabs,
      HeaderShowcase,
      Buttons,
    },
    created() {
    console.log(this.$route.path); // path is /post
 },
}
</script>

<style scoped>
  .pageTitle{
    color: #FFFFFF;
    position: absolute;
    text-align: center;
    top: 10px;
    left: 42%;
    width: 18%;
  }
  .headerClass{
    background-image: url('../assets/MovieBackBlackBar.png');
    background-size: 100% 120%;
    background-repeat: no-repeat;
    height: 250px;    
  }
  div h1{
    border-top: 5px solid #FFFFFF;
    border-bottom: 5px solid #FFFFFF;
  }
  .Show{
    display: inline-block;
  }

@media screen and (max-device-width: 599px) {
  .pageTitle{
    text-align: left;
    font-size: 18px;
    left: 5%;
    width: 60%;  
  }
  .headerClass{
      background-image: none;
      background-color: #000000;
      height: 100px;
  }
  .Show{
      display: none;
  }

}
@media screen and (min-device-width: 600px) {
  .pageTitle{
    font-size: 25px;
  }

}
</style>
