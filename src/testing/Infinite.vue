<template>
    <div infinite-scroll-distance="20" v-infinite-scroll="loadmore"
    infinite-scroll-disabled="busy"
    >
        <p v-for="(v,k) of n" :key="k"> {{v}}</p>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
            n:40,
            busy:false
        }
    },
    methods:{
        loadmore(){
            this.$indicator.open("加载中...");
            this.busy=true;
            setTimeout(()=>{
                   this.n += 40;
                   this.busy=false;
                   this.$indicator.close();
            },5000)
         
        }
    }
}
</script>