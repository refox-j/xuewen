<template>
    <div class="article">
        <!-- 顶部导航开始 -->
        <header>
            <mt-header title="学前端，上学问">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <!-- 导航导航结束 -->
        <!-- 正文区域开始 -->
        <div class="question">
            <!-- 标题开始 -->
            <div class="question-header">
                <div class="question-header-title">
                   {{article.subject}}
                </div>
                <div class="question-header-datetime">
                    {{article.created_at}}
                </div>
            </div>
            <!-- 标题结束 -->
            <!-- 作者信息开始 -->
            <div class="author-info">
                <img :src="article.avatar" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">{{article.nickname}}</div>
                    <div class="author-info-badge">
                        共<mt-badge type="primary" size="small">{{article.article_number}}</mt-badge>篇
                    </div>
                </div>
                
            </div>
            <!-- 作者信息结束 -->
            <!-- 内容开始 -->
            <div class="question-content">
                <div class="rich-content" v-html="article.content">
                   <!-- {{article.content}} -->
                </div>
            </div>
            <!-- 内容结束 -->
            <!-- 评论区域开始 -->
            <div class="comment-container" 
                infinite-scroll-distance="1"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="busy"
                infinite-scroll-immediate-check=true
            >
                <!-- 单一评论区域开始 -->
                <div v-show="!isShow" class="comment-item" v-for="(n,i) of comments" :key="i">
                    <div class="user_avatar">
                        <img :src="n.avatar" alt="">
                        <span>{{n.username}}</span>
                    </div>
                    <div class="comment-content">{{n.content}}</div>
                </div>
                <!-- 单一评论区域结束 -->
            </div>
            <!-- 评论区域结束 -->
            <!-- 加载全部评论区开始 -->
            <div v-show="isShow" class="comment-item" v-for="(n,i) of comments" :key="i">
                <div class="user_avatar">
                    <img :src="n.avatar" alt="">
                    <span>{{n.username}}</span>
                </div>
                <div class="comment-content">{{n.content}}</div>
            </div>
            <!-- 加载全部评论区结束 -->
            <div class="comment-all" v-show="!isShow"><a href="javascript:;" @click="vis">显示全部</a></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            article:{},
            comments:[],
            isShow:false,
            busy:true,
            page:1,
            pagecount:0
        }
    },
    mounted(){
        
        let id=this.$route.params.id;
        this.axios.get('/user/review',{
            params:{
                id:id
            }
        }).then(res=>{
           this.article=res.data.results;
        //    console.log(this.article)
           this.article.avatar=require(`../../public/img/avatar/${this.article.avatar}`);
           this.article.created_at = moment.unix(this.article.created_at).format(`YYYY年MM月D日 H:mm`);
        });

        this.queryCom();
    },
    methods:{
        vis(){
            this.isShow=true;
            this.busy=false;
        },
        loadMore(){
            if(this.page<=this.pagecount){
                this.busy=true;
                this.page++;
                this.queryCom(false);
            }
            
        },
        queryCom(isbusy=true){
            let id=this.$route.params.id;
            this.axios.get('/user/comments',{
            params:{
                id:id,
                page:this.page
            }
        }).then(result=>{
                result.data.results.forEach(element => {
                    element.avatar=require(`../../public/img/avatar/${element.avatar}`);
                    this.comments.push(element);
                    console.log(`axios里的busy属性=${this.busy}`)
                   
            });
            
             this.busy=isbusy;
             this.pagecount=result.data.pagecount;
            console.log(result.data.results);
            console.log(`请求后的的busy属性=${this.busy}`)
            // console.log(this.comments);
        });
        }
    }
}
</script>
<style>
.article{
    background: #f6f6f6;
    height: 100vh;
}
.question-header{
    margin-bottom: 5px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.question-header-title {
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.5;
}
.question-header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.author-info{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    
}
.author-info-avatar{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    margin-left:15px;
}
.author-info-nickname{
    font-size: 15px;
    margin-bottom:6px;
}
.author-info-badge{
    font-size: 14px;
}
.question-content {
    padding: 10px;
    background-color:#fff;
}

.rich-content p{
    padding: 5px 0;
    line-height: 1.7;
}
.rich-content img{
    max-width:100%;
}
.comment-container{
	margin-top:20px;
}
.comment-item{
	display:flex;
	align-items:top;
    margin-bottom: 10px;
}
.user_avatar{
	width:40px;
	margin:0 10px;
}
.user_avatar img{
    display:block;
	width:40px;
	height:40px;
    margin-bottom:5px;
	border-radius:100%;
}
.user_avatar span{
    font-size:12px;
    display: block;
    text-align: center;
}
.comment-content{
	font-size:14px;
    line-height: 1.5em;
}
.comment-all{
    text-align: center;
}
.comment-all a{
    display:inline-block;
    text-decoration:none ;
    background-color:violet;
    opacity: .5;
    width:5rem;
    height: 2rem;
    margin-bottom: 10px;
    line-height: 2rem;
    border-radius:3px;
}
</style>
