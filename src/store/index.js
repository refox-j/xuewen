import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined:localStorage.getItem('isLogined') || 0,
    info:JSON.parse(localStorage.getItem('info')) || {},
    username:'wj',
    age:23,
    sex:true,
    friends:[
      {
        name:'tom',
        sex:false
      },{
        name:'rose',
        sex:true
      }
    ]
  },
  mutations: {
    logoutMutation(state){
      state.isLogined = 0; 
      state.info = {};
      // console.log(state.info)
    },
    loginMutation(state,payload){
      state.isLogined = 1; 
      state.info = payload;
      // console.log(state.info)
    }
    ,
    changeage(state){
      state.age++;
    },
    decage(state){
      state.age--;
    },
    addfriendMutation(state,payload){
      state.friends.push(payload);
    }
  },
  actions: {
    getServerData(context){
      
      axios.get('/user/users').then(result=>{
        // console.log(result.data);
        context.commit('addfriendMutation',result.data);
      });
    }
  },
  modules: {
  }
})
