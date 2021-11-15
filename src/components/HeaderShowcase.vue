<template>
  <div class='Showcase'>
    <video id='ShowVideo' class='ShowcaseVideo' autoplay muted loop>
    </video>
  </div>
</template>

<script>
  export default {
    name: 'HeaderShowcase',
}
</script>

<style scoped>
video {
  object-fit: fill;
}
  .Showcase{
    width: 100%;
    height: 100%;
    background-image: url('../assets/MovieBack.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .ShowcaseVideo{
    border-radius: 10%;
    opacity: 90%;
    position: relative;
    top: 130px;
    left: 22%; 
    height: 40%;
    width: 56%;
    object-fit: cover;    
    z-index: -1;
  }

</style>
