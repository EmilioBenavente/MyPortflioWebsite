import { createRouter, createWebHistory} from 'vue-router'

import AboutContent from '../components/AboutContent';
import Projects from '../components/Projects';
import HomeContent from '../components/HomeContent';
import Engine from '../components/Engine';
import Blogs from '../components/Blogs';

const homeSpaceTag = require('../assets/HomeSpace.mp4');
const aboutSpaceTag = require('../assets/AboutSpace.mp4');
const projectsSpaceTag = require('../assets/ProjectsSpace.mp4');
const engineSpaceTag = require('../assets/EngineSpace.mp4');
const blogsSpaceTag = require('../assets/BlogsSpace.mp4');

const homeTag = require('../assets/HomeVideo.mp4');
const aboutTag = require('../assets/AboutVideo.mp4');
const projectsTag = require('../assets/ProjectsVideo.mp4');
const engineTag = require('../assets/EngineVideo.mp4');
const blogsTag = require('../assets/BlogsVideo.mp4');



const routes = [
    {
        path: '/',
	redirect: '/Home'
    },
    {
	path: '/About',
	name: 'About',
	component: AboutContent,
	beforeEnter: (to, from, next) => {
	    console.log('Before -> ' + window.SpaceTag);
            window.SpaceTag = aboutSpaceTag;
	    var vid = document.getElementById('SpaceVideo');
	    vid.src = window.SpaceTag;
            window.MainTag = aboutTag;
	    var vid2 = document.getElementById('ShowVideo');
	    vid2.src = window.MainTag;
	    console.log('After -> ' + window.SpaceTag);
	    next();
      }
    },
    {
	path: '/Projects',
	name: 'Projects',
	component: Projects,
	beforeEnter: (to, from, next) => {
	    console.log('Before -> ' + window.SpaceTag);	    
            window.SpaceTag = projectsSpaceTag;
   	    var vid = document.getElementById('SpaceVideo');
	    vid.src = window.SpaceTag;
            window.MainTag = projectsTag;
	    var vid2 = document.getElementById('ShowVideo');
	    vid2.src = window.MainTag;
	    console.log('After -> ' + window.SpaceTag);
	    next();
	}
    },
    {
	path: '/Home',
	name: 'Home',
	component: HomeContent,
	beforeEnter: (to, from, next) => {
	    console.log('Before -> ' + window.SpaceTag);
          window.SpaceTag = homeSpaceTag;
	    var vid = document.getElementById('SpaceVideo');
	    vid.src = window.SpaceTag;
	    window.MainTag = homeTag;
	    var vid2 = document.getElementById('ShowVideo');
	    vid2.src = window.MainTag;
	    console.log('After -> ' + window.SpaceTag);
	    next();
	}	
    },
    {
	path: '/Engine',
	name: 'Engine',
	component: Engine,
	beforeEnter: (to, from, next) => {
	    console.log('Before -> ' + window.SpaceTag);	    
            window.SpaceTag = engineSpaceTag;
	    var vid = document.getElementById('SpaceVideo');
	    vid.src = window.SpaceTag;
	    window.MainTag = engineTag;
	    var vid2 = document.getElementById('ShowVideo');
	    vid2.src = window.MainTag;

	    console.log('After -> ' + window.SpaceTag);
	    next();
	}	
    },
    {
	path: '/Blogs',
	name: 'Blogs',
	component: Blogs,
	beforeEnter: (to, from, next) => {
	    console.log('Before -> ' + window.SpaceTag);
            window.SpaceTag = blogsSpaceTag;
	    var vid = document.getElementById('SpaceVideo');
	    vid.src = window.SpaceTag;
	    window.MainTag = blogsTag;
	    var vid2 = document.getElementById('ShowVideo');
	    vid2.src = window.MainTag;
	    console.log('After -> ' + window.SpaceTag);
	    next();
	}	
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
