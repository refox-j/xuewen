<template>
    <div>
        <h1>访问vuex数据 第一个页面</h1>
        <p>姓名：{{this.$store.state.username}}</p>
        <p>姓名：{{this.$store.state.age}}</p>
        <p>姓名：{{this.$store.state.sex?'女':'男'}}</p>
        <h1>我的朋友们</h1>
        <p v-for="(n,i) of this.$store.state.friends" :key="i">
            姓名:{{n.name}}
            性别:{{n.sex}}
        </p>
        <button @click="add">change</button>
        <button @click="desc">desc</button>
        <p>
            <router-link to="/access2">access2</router-link>
        </p>
        <p>
             <router-link to="/addfriend">addfriend</router-link>
        </p>
        <br><br><br>
        <button @click="getSev">点击获取数据</button>
    </div>
</template>

<script>
export default {
    methods:{
        add(){
            this.$store.commit('changeage');
        },
        desc(){
            this.$store.commit('decage');
        },
        getSev(){
            this.$store.dispatch('getServerData')
        }
    }
}
</script>