<template>
    <div class="register">
        <!-- 页头开始部分 -->
            <mt-header title="学前端，到学问" >
                <router-link slot="left" to="/">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <router-link slot="right" to="/">登录</router-link>
            </mt-header>
        <!-- 页头结束部分 -->
        <!-- 注册主体开始部分 -->
            <mt-field label="用户名" :attr="{maxlength:12}" type="text" placeholder="请输入用户名" :state="!uname?'':testUname.test(uname)?'success':'error'" v-model="uname" ref="uname"></mt-field>
            <br>
            <mt-field label="密码" type="password" :attr="{maxlength:12,autocomplete:'off'}" placeholder="请输入密码"
           :state="!password?'':testPass.test(password)?'success':'error'" v-model="password"  ref="password"></mt-field>
           <br>
           <mt-field label="确认密码" type="password" :attr="{maxlength:12,autocomplete:'off'}" placeholder="请再次输入密码"
           :state="!conpassword?'':conpassword==password?'success':'error'" v-model="conpassword" ref="conpassword"></mt-field>
           <br>
           
        <!-- 注册主体结束部分 -->
        <!-- 按钮 -->
        <mt-button type="primary" size="large" @click="handle">注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {n:"",
            uname:"",
            testUname:/^[0-9a-zA-Z]{6,12}$/,
            password:"",
            testPass:/^[0-9a-zA-Z]{8,16}$/,
            conpassword:""
        }
    },
    methods:{
        tuname(){
                // console.log(this);
                 this.$indicator.open({
                    text:'加载中',
                    spinnerType:'fading-circle'
                });
                setTimeout(()=>{this.$indicator.close();
                    this.axios.post('/user/register',`uname=${this.uname}&upwd=${this.password}`
                    ).then(result=>{
                        
                        if(result.data.code==200){
                            this.$toast({message:"注册成功",duration:2000})
                            setTimeout(()=>{
                            this.$toast({message:"为您跳转",duration:2000});
                                setTimeout(()=>{
                                     this.$router.push("/login")
                                },2000)
                               
                            },3000)
                        }else{
                            this.$messagebox("提示信息","用户已经存在");
                        }
                    })
                 },2000);
                // door();
        },
        handle(){
            let r= this.$refs;
            // console.log(`uname : ${this.uname=='success'}`);
            // console.log(`pass : ${this.password=='success'}`);
            // console.log(`conpass : ${this.conpassword=='success'}`);
            if(r.uname.state=='success'&&r.password.state=='success'&&r.conpassword.state=='success'){
                 

               this.tuname()
                // console.log(123);
               
            //      var ajax=new XMLHttpRequest();
         
            // ajax.onreadystatechange=function(){
            //     if(ajax.status==200 && ajax.readyState==4){
            //         var d1= document.getElementById("d1");
            //         if(ajax.responseText=="111")
            //         d1.innerHTML="进来了哦"
            //     }
            // }
            // ajax.open("get",`http://127.0.0.1:8080/user/register/wj&123`,true);
            // ajax.send();
              
            }else{
                this.$toast("输入信息有误");
                return false;
            }
            // let testUname=/^[0-9A-Za-z]{6,12}$/;
            // if(testUname.test(this.uname)){
            //     this.n="success";
            // }else{
            //     this.n="error";
            //     // this.$toast("用户名错误");
            //     this.$toast({
            //         message:"用户名错误",
            //         position:"middle",
            //         duration:2000
            //     });
            //     return false;
            // }

            // let testPass=/^[0-9a-zA-Z]{8,16}$/;
            // if(testPass.test(this.password)){
                
            // }else{
            //     this.$toast({
            //         message:"密码错误",
            //         duration:2000,
            //         position:"middle"
            //     });
            //     return false;
            // }

            // if(this.password==this.conpassword){

            // }else{
            //        this.$toast({
            //         message:"密码错误",
            //         duration:2000,
            //         position:"middle"
            //     });
            //     return false;
            // }

        }
    }
}
</script>

<style >
  
</style>