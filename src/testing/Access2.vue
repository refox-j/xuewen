<template>
    <div>
        <h1>访问vuex数据 第二个页面</h1>
        <p>姓名：{{this.$store.state.username}}</p>
        <p>姓名：{{this.$store.state.age}}</p>
        <p>姓名：{{this.$store.state.sex?'女':'男'}}</p>
        <h1>我的朋友们</h1>
        <p v-for="(n,i) of this.$store.state.friends" :key="i">
            姓名:{{n.name}}
            性别:{{n.sex}}
        </p>
        <p>
            <router-link to="/access1">access2</router-link>
        </p>
    </div>
    
</template>