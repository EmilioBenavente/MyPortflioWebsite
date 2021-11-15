<template>
  <span class='FooterButton' @click="toTop">
    <h2>User@Web:~/{{this.$route.name}}$ cd ^^ Back To Top ^^</h2>
  </span>
</template>

<script>
  export default {
    name: 'FooterButton',
     methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
}
</script>

<style scoped>
.FooterButton{    
    font-size: 13px;
    letter-spacing: 4px;
    background-color: #000000;
    display: inline-block;
    position: relative;
    width: 52%;
    height: 75%;
    padding: 5px 20px;
    padding-top: 12px;
    border-radius: 12%;
    overflow: hidden;
}

span:hover{
    background-color: #303030;
}

@media screen and (max-device-width: 825px) {
    .FooterButton{
	width: 50%;	
	font-size: 8px;
	width: 75%;
	padding-top: 20px;
	    letter-spacing: 0px;
    }
}
@media screen and (min-device-width: 825px) and (max-device-width: 1025px){
    .FooterButton{
	font-size: 9px;
	padding-top: 15px;
    }
}
  
</style>
