<template>
  <div class='ProjectClass'>

    <div v-for='c of contents.slice().reverse()' :key='c.id'>

      <div class='Button' @click='onClick(c.id)'>
	<div class='Title'>
	  <h2 class='HeaderText'>{{c.title}}</h2>

	  <span class='Arrow' v-if='c.expanded'>&#x2191;</span>
	  <span class='Arrow' v-else>&#x2193;</span>	  
      </div>
	</div>
      <div class='Info' v-if='c.expanded'>
           <div class='Image'><img :src='c.imgPath' /></div>
           <div class='Text' v-html="c.body"></div>
      </div>
    </div>
    
   </div>
</template>

<script>
const contents =
      [{
	  id: 0,
	  title: '[School Project] Dot Defender Terminal Software',
          body: '<p>Dot Defender was my first <i>final</i> of a school project. It was the third weekend of the first programming class presented at Full Sail University. The assignment was simply to make a terminal-based game. The creative side of me wanted to put a twist on an already existing game. Everybody knows the game Pac-Man, however, have you ever wondered what the game would be like if you played as the antagonist? That\'s right! I\'m talking about playing as one of those ghost chasing our favorite character. This is exactly the point of Dot Defender. It turned out to be a very interesting project and something I might come back to one day. If you want take a look at how my end product turned out, here is a demo video -> <a href="https://youtu.be/xrjzCTI6wqs" target="_blank">Demo Video</a></p>',
	  imgPath: require('../assets/DotDef.png'),
	  expanded: false,		     
      },
      {
	  id: 1,
	  title: '[School Project] Blackjack Terminal Software',
	  body: '<p>Blackjack, although not a very extensive programming task, was one of my first terminal programs I developed. It follows most of the rules of a typical Blackjack game with the exception of the dealer being dealt a card before the player...this is what happens when you assume the rules to a game you haven\'t played. Anyway, the player has a set amount of in-game money and is allowed to bet so long as they don\'t go bankrupt. The game also inlcudes a sorting mode in case you believe our casino is rigged ;). A link to my demo video is presented here -> <a href="https://youtu.be/_SwO4DRI3GA" target="_blank">Demo Video</a></p>',
          imgPath: require('../assets/Blackjack.png'),
	  expanded: false,
      },
      {
	  id: 2,
	  title: '[School Project] Steel Light Terminal Software',
	  body: '<p>Steel Light is another school project that represets a game inside a terminal. This game theoretically puts the user inside the atmospheric volume of space. Here, the user controls an object that represents a space ship and attempts to avoid what are meant to be falling astroids. The game is endless and entirely based on survival. The player that survives for the longest period of time will see their username in a list of high scores. This project actually has an upcoming sequal where the protagonist is named after the high score holder from a list of testers that tested this version of the game. Also, as a note for that record holder, no I haven\'t forgotten, this game WILL be released...I\'ve just been busy...you understand. Now many people can hold me accountable. If anybody is interested in the terminal version, here is a demo of this project -> <a href="https://youtu.be/f4BkYDgvzbQ" target="_blank">Demo Video</a></p>',		   
	  imgPath: require('../assets/SteeleLight.png'),
	  expanded: false,
      },
      {
	  id: 3,
	  title: '[School Project] Bit Math Terminal Software',
	  body: '<p>The Bit Math Software is more along the lines of what a typical computer science class would teach. At least I hope! I mean all computer scientist should at the minimum know how to control data at the bit level. That aside, Bit Math or Bit Manipulation is a type of math where you only maniplulate the digits of a number to change it\'s value. This project demonstrates this type of manipulation visually. The user changes the digits of a binary number manually and the represented value will change on screen. The user can also call functions that are specific to this kind of math such as bit shifting which moves the value of each digit to an adjacent digit. For a video demonstration of this project, you can use this link -> <a href="https://youtu.be/idVvsMUkeUE" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/BitMath.png'),
	  expanded: false,
      },
      {
	  id: 4,
	  title: '[School Project] Database Terminal Software',
	  body: '<p>The Database Terminal project was my first school project that simulated file manipulation. Here, the user is able to add records to an imaginary list of Students/Employees. This list can be displayed at any time to the user. Everything that the user can do here is all handled by the terminal! There isn\'t much left to this app, it\'s a simple database interface. For a more visually appealing explanation, please click this link -> <a href="https://youtu.be/N-Q24bIjGLE" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/TermDatabase.png'),
	  expanded: false,
      },
      {
	  id: 5,
	  title: '[School Project] Customizable Game of Life App',
	  body: '<p>The Game of Life was an important milestone for my programming career. It was my first experience with building a full scale application. It also marked the end of my first semester at Full Sail University. The Game of Life is a well renowned software origianally made by John Conway designed to be unpredictable. The Game of Life was then used by many individuals whom notice a more vivid appeal of the software. Something that was meant to be unpredictable actually created many predictable pattern based on it\'s environment. This unique twist of the software is what gave the Game of Life fame in the computer science community. My particular version has a multitude of options a player can mess with. The software is able to keep track of a particular generation and allows the user to save and load specified outcomes from the game. The user can also fill the board with random variables created from a seed number. If you would like to see a visual demonstration of this project, then click here -> <a href="https://youtu.be/O7hcIczAHpA" target="_blank">Demo Video</a></p>',
          imgPath: require('../assets/GameOfLife.png'),
	  expanded: false,
      },
      {
	  id: 6,
	  title: '[School Project] Huffman Compression Algorithm',
	  body: '<p>This is by far one of the most difficult and interesting projects I had during school. However, it\'s definitely not something I can do from memory. This project eluted to me the many forms of zipping and unzipping files/folders. While the Huffman Algorithm isn\'t the most used method for zipping files it still an important tool into learning file decryption and optimization. Since this algorthm is basically a file compression app, I have no real applicable video or image for this one..sorry ¯\\_(ツ)_/¯</p>',		   
          imgPath: require('../assets/Zipped.png'),
	  expanded: false,
      },
      { 
	  id: 7,
	  title: '[School Project] Cat Fighter Engineering',
	  body: 'The Cat Fighter Application is a game where the user plays as a cat fighting off monsters. The cat has both a kick ability and a power beam abilty that can blast stronger and further depending on how long the user holds the button. The art and level design of this game was pre-made by another developer. However, none of the mechanics such as movement, abilities, damage and player animations were working. These were my assignments for the project. Everything listed above was done through programming in the unity engine. For a full picture as to how the game works I reccomend give this demo video a look. -> <a href="https://youtu.be/0oiHSk7PkEQ" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/CatFighter.png'),
	  expanded: false,
      },
      {
	  id: 8,
	  title: '[School Project] Saiph Debugging',
	  body: '<p>Along with the Cat Fighter Project, I was responsible for debugging a project in the same class called Saiph. Saiph was a C++ space adventure game with Win32 as the graphical API. However, the game was coded with intentional bugs. Our project folder shipped with the source code for the broken version of the game as well as the working .exe file. We as students, had no more hints than that on this assignment. The assignment being to fix the source code until the game looked like the working exe file. A lot of bugs had to deal with crashes inside the game\'s shop system. However, I do want to talk about one particular bug that had to deal with the boss area. Here, one file was decoded with many classes and an algorithm using these classes. The algorithm was as cryptic as a compressed file from the huffman algorithm. This was by far the most interesting bug of the program since the varibles were just letters and the functions were mostly lambdas making it very difficult to debug. I highly reccomend looking at demo video for this one, it\'s a really interesting game. -> <a href="https://youtu.be/S97k1u1lgOM" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/Saiph.png'),
	  expanded: false,
      },
      {
	  id: 9,
	  title: '[School Midterm] Vex/MP3 Android App',
	  body: '<p>This project is my midterm at Full Sail, thus marking my halfway point at the school. VEX, is an android voice-assistant app. Through VEX, you can text or call other people with the command of your voice. You can have VEX save notes or ideas for you and it will read them back when you need. VEX also comes with a built-in MP3 player that can play music while the screen is closed. It can also open up popular applications if they are installed on your device, such as youtube. VEX originally supported google music, but this app has since been deprecated. VEX was made in three weeks and used google\'s voice API to listen to commands, but other than that VEX was completely coded from scratch. For a look at how VEX works, check out this somewhat cringe worthy demo video -> <a href="https://youtu.be/JG20ssBB1zY" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/VEX.png'),
	  expanded: false,
      },
      {
	  id: 10,
	  title: '[School Project] Creating Ciruits With Xilinx',
	  body: '<p>For an entire month of school I got the golden opportunity to mess with the Xilinx software. For those that don\'t know what this is, it\'s a program for creating the paths on a circuit board. It allows you to design units within a circuit board such as an adder circuit. Also if you have heard of Xilinx, you know this software isn\'t cheap and again i\'m super greatful I got to learn in this environment. However, I don\'t have much to show on the topic. The image contains the most complicated circuit I made in this time period.</p>',
          imgPath: require('../assets/ALU.png'),
	  expanded: false,
      },
      {
	  id: 11,
	  title: '[School Project] Arduino Screen',
	  body: '<p>My school followed up the class of Xilinx with the subject of Arduino. Arduino is a company that offers pre-built chips/motherboards ususally without software and are ready to be programmed by the user. With these, there are many possiblities for a programmer. Learning how the circuits are designed really adds a bonus into the amount of freedom a programmer has. In my final project for this class I used a light sensor and a knob to control a display on an LCD screen. Here is a look at my final project -> <a href="https://youtu.be/XyvQFyd48iM" target="_blank">Demo Video</a></p>',
          imgPath: require('../assets/COAClass.png'),
	  expanded: false,
      },
      {
	  id: 12,
	  title: '[School Project] Threaded Race Condition',
	  body: '<p>This is the part of my college degree where things get real. I only say that since the next group of projects deal with C++ threads. For those that don\'t know what threads are, they\'re essentially multiple instances of a program at once. This means the developer that works with threads has a series of possible collision bugs within the code that they must worry about. The collision comes from multiple instances trying to interact with the same section of code within the same interval of time. Such interactions can cause a program to run with undefined and ultimately random behavior. However, threading has the benefit of splitting the working code into seperate parts of the CPU to run in parallel instead of a normal program which runs in series. This allows your program to run much faster. So if you want to work with the benefits of threads, you must find ways to handle these threaded collisions. One of the ways to deal with collision is with a method known as the race condition. We can think of the race condition as many threads racing to a specific section of code, which will soon lead to a thread collision. What we can do as programmers is give the first place thread the ability the lock that section of code from the program. This will prevent any other thread from using that code until the first place thread is unlocks the code. Then we repeat this pattern for all the other threads. This is one condition of many that we can do using the race condition method. Now, a clever reader might notice that this method might actually slow the program down more than it would speed it up. Thus, the idea of the race condition is to use this method as little as possible if you want to have the efficiency that threads offer. Or maybe your a gambler and decide to use threads without any race conditions. It\'s possible but you might create some hard to find bugs from all the collisions and must decide deeply on every section of code to ensure a small number of collisions. Since i\'m sure nobody wants to see a video of some numbers racing to a section of code, I will not place a video for this section.</p>',		   
          imgPath: require('../assets/RaceCondition.png'),
	  expanded: false,
      },
      {
	  id: 13,
	  title: '[School Project] Threaded Drinking Game',
	  body: '<p>On the topic of threading, one of the most interesting college assignments I had was named the Drinking Game. In this program we assumed an imaginary table holding an unknown number of drinks on top of it. Now for the sake of legality, we will assume the drinks are water bottles. Along with this table, surrounding it was an unknown amount of people and each person represented a thread in the program. Now let us assume that each person must chug at least one water bottle before the program can end. However, let us also assume that a person will not grab a drink if another person is in the way of the table. If a person cannot grab a water bottle during their turn they must move to the back of the line of people getting drinks. Now, the dificult part is...the drinks are finite...they will run out. So now the threads must communicate with each other in a way that ensures every thread gets a drink before the drinks are gone. It is an interesting problem and definitely presented in a way that makes you eager to work on an assignment. Now the output for this assignment isn\'t too exciting due to the project mostly looking for memory and thread leaks so again...no video, but i\'d reccomend you set this one up and try it out for yourself.</p>',
          imgPath: require('../assets/DrinkingGame.png'),
	  expanded: false,
      },
      {
	  id: 14,
	  title: '[School Project] Threaded Gas Station Manager',
	  body: '<p>My last school project that focused on threads was a gas station simulator. In this project, we assume an imaginary gas station with a finite number of pumps. There also seems to be some finite number of vehicles that happen to use these pumps everyday. Of course, one vehicle cannot use a pump if another vehicle is already using one. This is were the threads come to play. At the end of the program we are given diagnostics such as how many times a pump was used and how many times each car attempted to use a pump.</p> Again there isn\'t much to this program but it has more than the previous projects so here is a video if your interested. -> <a href="https://youtu.be/Gi9ZqE_M9eM" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/GasStation.png'),
	  expanded: false,
      },
      {
	  id: 15,
	  title: '[School Project] SQL Schema Design',
	  body: '<p>I don\'t know of a single school that dosen\'t cover SQL. However, for those that don\'t know, SQL is highly relevant in the web side of the industry. It\'s how...some programmers manage data. Assuming you didn\'t take data structures AND algorithms I guess. Anyway, there isn\'t anything too interesting in this section. Really SQL is a programming language WHERE you learn how to USE the word SELECT very very well. This USE of SELECT allows you to maniplulate data FROM database to database.</p>',		   
          imgPath: require('../assets/SQL.png'),
	  expanded: false,
      },
      {
	  id: 16,
	  title: '[School Project] Unit Testing Speedrun',
	  body: '<p>Now off the bat, I must admit...i\'m not a fan of Unit Testing. However, this is an achievement I think I should be proud of. If I haven\'t mentioned it up to this point, then I should mention that each of my classes basically evaluated to three week per class with an extra week for make-up work. In this section the focus of the class was on unit testing. We were given 10 seperate codebases which all required different versions of Unit Testing to work with. Upon receiving these assignments, I had finished this class with a record time of 8 hours. Now that being said, I must adimit that I did not recieve a 100. I did do some misspelling that brought my grade down to a 98. That being said, I thought I should mention this somewhere on the website so I figured the school project section was the best place to so.</p>',		   
          imgPath: require('../assets/UnitTesting.png'),
	  expanded: false,
      },
      {
	  id: 17,
	  title: '[School Project] Etchmark AR',
	  body: '<p>Etchmark may be my proudest achievement at Full Sail University. I studied hard for this project and it made me realize exactly what paths I wanted to advance in with my career. It lead me to the expansion of Graphics Programming, Programming for Augmented Reality and Programming for Embedded Systems. Beforehand, I thought that I was taking the right path, since I assumed Software Development/Software Engineering actually dealt with embedded systems. For those that are wondering, the software industry considers these merits of Web Development instead...so not a wrong path...just a divergent one. Anyway, Etchmark is a mixed reality 2D platform game I coded with blueprints in Unreal Engine. I consider it to be a mixed reality since the game involves two player from two different perspectives. One perspective inside the game and one in Augmented Reality. I actually contacted a few people about augmented reality algorithms when creating this game. There isn\'t too many AR API\'s out there so I have to give credit with the person who pointed me in the right direction in the topic. Professor Schmalstieg whom is also the author to the book "<i>Augmented Reality : Principles And Practices</i>." In this game, you are helping character through a 2D platformer to reach a rotating cube. Meanwhile, you are also interacting with different objects surrounding your camera. You must also dodge certain obstacles that move towards the character and your camera. I highly recommend giving this demo video a look! I will definitely come back to this project very soon. -> <a href="https://www.youtube.com/watch?v=GaO_6Y4AJNU">Demo Video</a></p>',		   
          imgPath: require('../assets/Etchmark.jpg'),
	  expanded: false,
      },
      {
	  id: 18,
	  title: '[School Project] Superstar Saga Ethical Net Crawling',
	  body: 'Here is another interesting session. In this area of the degree program, we were learning about data science. Unfortunately, this project probably represents my weak side of programming knowledge. As mentioned before, each class in my school was divided into three weeks with an additional week for make-up work. At this point in the degree program, I had no knowledge about http requests or python, not to mention data science. All this was broken down into that three week gap and is the only time where I felt that the class needed to be spread out a little longer. Nevertheless, I used what I learned in the final project of the class. The project consisted of an ethical net crawling into a website to discover some data of a chosen topic. I found a stat sheet for the game <i>Mario and Luigi: Superstar Saga</i>. I was interested to find out what each level up would do for the individual characters and how much influence did each stat possess? My full paper can be found on the image to the side.</p>',		   
          imgPath: require('../assets/SuperStar.png'),
	  expanded: false,
      },
      {
	  id: 19,
	  title: '[School Project] Two TCP/UDP Chat Applications',
	  body: '<p>These are the hardest projects that I completed at Full Sail University and involve using both the TCP and UPD protocols for transferring data. The first project was a simple chat application that looked a bit like AOL. That might not be a reference many people my age will know...but...ummm, it did look like AOL. The second project was a more extreme version of the chat apllication with a mix of pokemon references. For those that don\'t know about transferring data, most of your data is sent to multiple computers with things programmers call packets or payloads. These payloads encapsulate your data and puts additional information in front of your data. This information is for the series of computers that point your data in the right place. Essentially, the additional information added in front of your data is basically a bunch of addresses to tell the other computers where exactly your data is suppose to go to. TCP and UDP are different protocols since TCP sends more information then UDP. TCP is designed to have safety nets for when your data goes off track from the addresses it was given. UDP is essentially a payload that relies on a timer instead of any data feedback and will not automatically send the data again, this must be done manually. Since I implemented both versions for each application, I have developed 4 fully working messaging applications. Since the pokemon application is more appealing, I wiil leave demo video for that application -> <a href="https://youtu.be/l4nCmrH8bts" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/Pokechat.png'),
	  expanded: false,
      },
      {
	  id: 20,
	  title: '[School Project] Online Pong Application',
	  body: '<p>This is my last project related to networking. Unlike the chat application, this was a game. I had to impliment a cross network version of the game pong. The coding portion for the gameplay mechanics was already implemented by someone else, I only needed to create the network side. Same as the previous two projects, I designed this project with both TCP and UDP. The gameplay is a little slow due to the static looking animation and speed of the overall physics, but the network side I can guarantee is zooming! Here\'s a demo video to check it out on. -> <a href="https://youtu.be/l4nCmrH8bts" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/Pong.png'),
	  expanded: false,
      },
      {
	  id: 21,
	  title: '[School Project] Machine Learning on the Titanic',
	  body: '<p>The second to last month of my software degree program took a deep dive into different machine learning algorithms. This was another slightly hard to grasp concept for me. First off, this class used many python libraries. Secondly, the class was pretty math heavy and since all the classes discussing math previously were again about 3 weeks long, you couldn\'t expect me to be an expert! However, I feel as though I understood the concepts pretty well despite the mentioned struggles. In this class we learned the algorithms of regression, classification, Clustering and Keras. As my final project, I found an online list of people who were on the titanic. I used all of the learning algorithms up to this point to see if there was any correlations of the survival rate with the list I found. According to my results, it appeared that the lower class civilian was helped more than those of the upper class during this tragedy. To find out why, you can read my research paper on the side.</p>',		   
          imgPath: require('../assets/Titanic.png'),
	  expanded: false,
      },
      {
	  id: 22,
	  title: '[School Capstone] Nullify',
	  body: '<p>Nullify is my capstone project. It was also my first project that involved a team. Nullify is grid based puzzle game in which you have a set of movable pawns each with a random number. As you move the pawn the number decreases by one. Also, as you move across the board, the tiles underneath start to lock up and no longer become a traversable path. This game ships with ten pre-made levels, a level editor for the user and a random level generator. While implementing these features I also created the assets and made the level music in the game. I also designed the undo and redo functionality. I however, did not design the menu or the leaderboard functionality. I also did not create the movement functionality. Here is a demo at how the game looks in action! ->  <a href="https://www.youtube.com/watch?v=PeVDQE-uN04" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/Nullify.png'),
	  expanded: false,
      },
      {
	  id: 23,
	  title: '7Match7 2020',
	  body: '<p>7 Match 7 is a very early game I tried working on just after my first semester of school had ended. It is a match 3 puzzle game with an added casino element. In this game instead of matching three colored jewels together, the player is attempting to match as best of a poker hand as possible. The higher the poker hand, the higher the score! All the games assets were made with blender and the gameplay was designed with Unity. The game was orginally on the google play store, but after many google play updates i\'m sure I need to add a few tweaks before you can see it again. That being said, a video for this game can be seen here ->  <a href="https://www.youtube.com/watch?v=4SiQSETs1pM" target="_blank">Demo Video</a></p>',		   
          imgPath: require('../assets/7Match7.png'),
	  expanded: false,
      },
      {
	  id: 24,
	  title: 'Spider_Byte_Engine',
	  body: '<p>This is currently my most passionate project. I care about it so much that I\'ve set up a page on this website dedicated to this project. It\'s a game engine. I started this project when I started looking deeper into my career. I became passionate for low level programming, yet I see such little information on it. Thus, I have started to progressively search for low level based projects that will help me understand proformance that focus on more than simple Big-O noatation. To learn about my journey on this engine, I highly reccomend checking out my Game Engine Page!</p>',		   
          imgPath: require('../assets/Engine.png'),
	  expanded: false,
      },
      {
	  id: 25,
	  title: 'Graduated Full Sail Jan 2019',
	  body: 'I am now a Bachelor graduate of Full Sail Univeristy. I am currently looking for jobs in the programming field, but that leap is not as easy as I once thought before. I gradated as a valedictorian in my clas and earned a course director award for my Steele Light project shown below. I applied for jobs in a months time with the only feedback being that a website would be helpful. Thus, within 3 weeks I have learned much about web development and made this page with the Vue API as a way to prove my efforts to potential employers. ',		   
          imgPath: require('../assets/Profile2.jpeg'),
	  expanded: false,
      },
      ];

      
  export default {
      name: 'MainContent',
      data() { return { contents, }; },
        methods: {
	    onClick(id) {
		this.contents = this.contents.map((obj, i)=> {
		    if(i === id)
			obj.expanded = !obj.expanded;
		    else
			obj.expanded = false;
		    return obj;
		});
	    }
	}
};
</script>

<style scoped>
  .ProjectClass{
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
