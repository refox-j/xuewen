<template>
    <div class="index">
        <!-- 頂部导航開始 -->
        <div class="top">
        <mt-header title="学问网">
            <div class="rr" slot="right" v-if="!isLogined">            
                <router-link to="/register">注册</router-link>
                <router-link to="/login">登录</router-link>
            </div>
            <div class="rr" slot="right" v-else>            
                <span>你好,{{info.nickname  || info.username}}</span>
                &nbsp;
                <mt-button type='primary' @click='logout'>注销</mt-button>
            </div>

        </mt-header>
        <!-- 頂部导航結束 -->
        <!-- 頂部选项卡開始 -->
        <mt-navbar v-model="active">
          <div>{{articles.length}}</div>
            <mt-tab-item v-for="(p,i) of category" :key="i" :id="p.id.toString()">{{p.category_name}}</mt-tab-item>
           
        </mt-navbar>
        </div>
        <!-- 頂部选项卡結束 --> 
        <!-- 面板区域開始 -->
        <mt-tab-container class="main" infinite-scroll-distance="20" 
        infinite-scroll-disabled="busy"
        infinite-scroll-immediate-check="true"
        v-infinite-scroll="loadMore"
        > 
        <mt-tab-container-item>
             <!-- 单一文章信息开始 -->
        <div class="articleItem" v-for="(n,i) of articles" :key="i">
          <!-- 文章标题开始 -->
          <router-link :to="`/article/${n.id}`">
          <div class="articleItem-header">
            {{n.subject}}
          </div>
          <!-- 文章标题结束 -->
          <!-- 文章图文信息开始 -->
          <div class="articleItem-wrapper">
            <!-- 文章图像开始  -->
            <div class="articleImg" v-show="n.image!=null">
              <!-- <img
                :src="require(`../../public/img/articles/${n.image!==null?n.image:'a46f887c-8e21-11ea-8509-482ae31b2081.jpg'}`)"
              /> -->
              <img v-lazy="n.image"/>
            </div>
            <!-- 文章图像结束 -->
            <!-- 文章简介开始 -->
            <div class="articleDes">
              {{n.description}}
            </div>
            <!-- 文章简介结束 -->
          </div>
          <!-- 文章图文信息结束 -->
          </router-link>
        </div>
        <!-- 单一文章信息结束 -->
        </mt-tab-container-item>
        <!-- <mt-tab-container-item id="2">22</mt-tab-container-item>
        <mt-tab-container-item id="3">33</mt-tab-container-item>
        <mt-tab-container-item id="4">44</mt-tab-container-item>
        <mt-tab-container-item id="5">55</mt-tab-container-item>  -->
        </mt-tab-container>
        <!-- 面板区域結束 -->
        <!-- 底部选项卡開始 -->
        <mt-tabbar v-model="selector" fixed>
            <mt-tab-item id="index">首页
                <img v-if="selector=='index'" src="../../public/img/index_enable.png" slot="icon">
                <img v-else src="../../public/img/index_disable.png" slot="icon">
            </mt-tab-item>
            <mt-tab-item id="me">我的
                <img v-if="selector=='me'" src="../../public/img/me_enable.png" slot="icon">
                <img v-else src="../../public/img/me_disable.png" slot="icon">
            </mt-tab-item>
        </mt-tabbar>
        <!-- 底部选项卡結束 -->
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    computed:{
      ...mapState(['info','isLogined']),
      ...mapState({
        age1 : 'age',
        sex2:"sex"
      })
    },
    data(){
        return {
            active:"1",
            selector:"index",
            category:[],
            articles:[],
            page:1,
            busy:false,
            pagecount:0
        }
    },
    methods:{
      ...mapMutations(['logoutMutation'])
      
      ,
      logout(){
        localStorage.clear();
        // this.$store.commit('logoutMutation');
        this.logoutMutation();
        // 如果有参数
        // this.logoutMutation(参数);
        
      }
      ,queryArt(){
        this.busy=true;
        
        // this.articles=[];
        // console.log(this.page);
        this.axios.get('/user/articles',{
          params:{
            c_id:this.active,
            page:this.page
          }
        }).then(result=>{
          result.data.results.forEach(article => {
            if(article.image!==null){
              article.image=require(`../../public/img/articles/${article.image}`);
            }
            
            this.articles.push(article);
            
          });
            this.busy=false;
            this.pagecount=result.data.pagecount;
            // console.log(this.pagecount)
          // this.articles=result.data;
          // console.log(this.articles);
        })
      },
      loadMore(){
        this.page++;
        if(this.page<=this.pagecount){
          this.queryArt();
        }
      }
    },
    mounted(){
      this.axios.get('/user/category').then(result=>{
        // console.log(result.data);
        this.category=result.data.results;
        // console.log(result.data[0].id)
        this.active=result.data.results[0].id.toString();
        this.queryArt();
        });
    },
    watch:{
      active(){
        this.articles=[];
        this.page=1;
        // console.log("jinlaile")
        this.queryArt();
      }
    }
}
</script>
<style>
    .main{
        margin-top:90px;
        margin-bottom:55px;
    }
    .index .rr a{
        color:white;
        margin-right: .5rem;
    }
    .index .top{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index: 666;
    }
    .articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>