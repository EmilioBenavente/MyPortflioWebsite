<template>
    <video class='AppVideo' autoplay muted loop id='SpaceVideo'></video>
  <Header />
  <Center >
    <router-view></router-view>
  </Center>
  <FooterBar />
</template>

<script>
  import Header from './components/Header.vue'
  import Center from './components/Center.vue'
  import FooterBar from './components/FooterBar.vue'

  export default {
      name: 'App',
    components: {
      Header,
      Center,
      FooterBar,
  }
}
</script>

<style>
  @font-face { font-family: Code; src: url('./assets/Source_Code_Pro/SourceCodePro-Light.ttf'); } 
  *{
    font-family: Code;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  .AppVideo{
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;    
    z-index: -1;
  }
  
  .isScroll{
    overflow: scroll;
  }

  .debug{
    border: 2px solid #4040AA;
  }
  
</style>
