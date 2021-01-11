<template>
    <div>
         <p>
            <router-link to="/access1">access1</router-link>
        </p>
         <p>
            <router-link to="/access2">access2</router-link>
        </p>
        <p>
            姓名：<input placeholder="请输入姓名" v-model="uname">
        </p>
         <p>
            性别：<input placeholder="请输入性别" v-model="sex">
        </p>
        <button @click="handle">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            sex:""
        }
    },
    methods:{
        handle(){
            let obj={
                name:this.uname,
                sex:this.sex=='女'
            }
            this.$store.commit("addfriendMutation",obj);
        }
    }
}
</script>