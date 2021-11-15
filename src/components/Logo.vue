<template>
  <div class='logoClass'>
    <router-link to='./Home'><img src='../assets/CompLogo.png' alt='Company Logo' /></router-link>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
}
</script>

<style scoped>
@media screen and (max-device-width: 599px){
    .logoClass{
	display: none;
    }
}
@media screen and (min-device-width: 600px) {
  .logoClass{
    z-index: 10;
    margin: 0px;
    width: 15%;
    height: 80px;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  router-link{
    display:inline-block;
    width:100%;
    height:100%;
  }

  img{
    border-radius: 20%;
    width: 100%;
    height: 100%;
  }

  img:hover{
    cursor: pointer;
    filter: grayscale(10%);
    padding-bottom: 8px;
  }
}
@media screen and (min-device-width: 1025px) {
  .logoClass{
    z-index: 10;
    margin: 0px;
    width: 12%;
    height: 90px;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  router-link{
    display:inline-block;
    width:100%;
    height:100%;
  }

  img{
    border-radius: 20%;
    width: 100%;
    height: 100%;
  }

  img:hover{
    cursor: pointer;
    filter: grayscale(30%);
    padding-bottom: 8px;
  }
}
</style>
