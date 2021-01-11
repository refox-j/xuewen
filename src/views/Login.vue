<template>
    <div>
        <mt-header title="学前端，来学问">
            <router-link slot="left" to="/">
                <mt-button icon="back" type="primary"></mt-button>
            </router-link>
             <router-link slot="right" to="/register">
                注册
            </router-link>
        </mt-header>
        <mt-field type="text" placeholder="请输入用户名" :state="!uname?'':testUname.test(uname)?'success':'error'" label="用户名" v-model="uname" ref="uname"></mt-field>
        <mt-field type="password" placeholder="请输入密码" :state="!password?'':testPass.test(password)?'success':'error'" label="密码" v-model="password" ref="password"></mt-field>
        <mt-button size='large' type="primary" @click="handle">登录</mt-button>
    </div>
</template>
<script>
export default {
     data(){
        return {n:"",
            uname:"",
            testUname:/^[0-9a-zA-Z]{6,12}$/,
            password:"",
            testPass:/^[0-9a-zA-Z]{8,16}$/
        }
    },
    methods:{
         handle(){
            let r= this.$refs;
            let obj={
                username:this.uname,
                password:this.password
            };
            let str = this.qs.stringify(obj)
            // console.log(str);
            if(r.uname.state=='success'&&r.password.state=='success'){
                this.axios.post("/user/login",str).then(result=>{
                    // console.log(result.data.code);
                    if(result.data.code==201){
                        this.$messagebox.confirm('登录失败，是否注册新用户','提示信息').then(action=>{
                            this.$router.push('/register');
                        }).catch(error=>{

                        })
                    }else{
                        this.$store.commit('loginMutation',result.data.results);

                        localStorage.setItem('isLogined',1);
                        localStorage.setItem('info',JSON.stringify(result.data.results));
                        this.$router.push('/');
                    }
                });
            }else{
                this.$toast("输入信息有误");
            }
        }
    }
}
</script>