 <template>
  <div class='BlogClass'>

    <div v-for='c of contents' :key='c.id'>

      <div class='Button' @click='c.expanded = !c.expanded'>
	<div class='Title'>
	  <h2 class='HeaderText'>{{c.title}}</h2>

	  <span class='Arrow' v-if='c.expanded'>&#x2191;</span>
	  <span class='Arrow' v-else>&#x2193;</span>	  
      </div>
	</div>
      <div class='Info' v-if='c.expanded'>
      <div class='Image'><img :src='c.imgPath' /></div>
        <p class='Text'>{{c.body}}</p>
      </div>
    </div>
      
  </div>
</template>

<script>
const contents =
      [{
	  id: 0,
	  title: 'Topic #??',
          body: 'We are working on this page, we will update this soon...',
	  imgPath: require('../assets/Profile2.jpeg'),
          expanded: false,
       }
      ];

      
  export default {
      name: 'Blogs',
      data() { return { contents,}; },
};
</script>

<style scoped>
  .BlogClass{
    background-image: linear-gradient(to bottom, #000000, #999999);
    position: relative;
    height: auto;
    width: 100%;
    padding: 50px 10px;
  }
  
  .Info{
    display: flex;  
    color: #FFFFFF;
    font-size: 24px;
    padding: 100px 100px 10px 100px;
    border: 10px groove #303030;
    min-height: 300px;
    height: auto;
  }  

  .Image{
    position: relative;
    display: inline-block;
    left: 85%;
  }

  img{
    position:relative;
    top: -50px;
    width: 80%;
    height: 250px;
    border-radius: 8%;  
  }

  .HeaderText{
    text-shadow: 4px 4px #000033;    
    color: #00DD00;
    margin-left: 20px;
  }
  
  .Text{
    position: relative;
    display: inline-block;  
    max-width: 75%;
    top: -60px;
    left: -200px;
    background-color: #202020;
    border-radius: 4%;
    padding: 4px;
  }

  .Button{
    color: #000000;
    font-size: 20px;
    border: 3px dashed #303030;
  }

  .Title{
      display: flex;
      justify-content: space-between;
  }
  
  .Title:hover{
      cursor: pointer;
      background-color: #505050;
  }

  h1{
    padding: 2px 20px;
  }

  .Arrow{
    padding: 10px 20px;
  }

  .Text >>> a, .Text >>> a:visited{
    border-radius:15%;
    border: 5px solid #000000;
    background-color: #222222;
    color: #00BB00;
  }

@media screen and (max-device-width: 599px) {
  .Info{
    padding: 0;
    font-size: 14px;      
  }
    
  .Image{
     display: none;
  }
  
  .Text{
      margin: 0;      
      left: 50px;
      width: 140%;
      margin-top: 90px;
  }
}
@media screen and (min-device-width: 600px) and (max-device-width: 1025px){
  .Info{
    padding: 20px;
    padding-top: 40px;
    font-size: 18px;      
  }
    
  .Image{
    width: 150%;
    left: 30%;
    border-radius: 15%;
  }

  img{
    top: 20px;
    height: 180px;
    border-radius: 15%;
  }
  
  .Text{
      left: -100px;;
      right: 0;
      width: 400%;
      margin-top: 280px;
  }
}
</style>
