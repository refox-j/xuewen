<template>
  <div class="navbar">
    <div>
      <mt-header title="学前端，来学问"></mt-header>
      <mt-navbar v-model="active">
        <mt-tab-item id="a"
          >HTML5
          <img src="../../public/img/html5.png" slot="icon" />
        </mt-tab-item>
        <mt-tab-item id="b"
          >CSS
          <img src="../../public/img/CSS3.png" slot="icon" />
        </mt-tab-item>
        <mt-tab-item id="c"
          >JS
          <img src="../../public/img/js.png" slot="icon" />
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="mid">
        <mt-tab-container v-model="selector" swipeable> 
            <mt-tab-container-item id="item1">
                <p v-for="(n,i) of 50" :key="i">{{n}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="item2">22</mt-tab-container-item>
            <mt-tab-container-item id="item3">33</mt-tab-container-item>
        </mt-tab-container>
    </div>
    <mt-tabbar v-model="selectTab" fixed>
        <mt-tab-item id="index">首頁
           <img v-if="selectTab=='index'" src="../../public/img/index_enable.png" alt="" slot="icon">
           <img v-else src="../../public/img/index_disable.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id='me'>我的<img v-if="selectTab=='me'" src="../../public/img/index_enable.png" slot="icon" alt="">
        <img v-else src="../../public/img/index_disable.png" slot="icon" alt="">
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "a",
      selector:"item1",
      selectTab:'index'
    };
  },
  watch:{
      selectTab(val){
          if(val=='index'){
              this.$router.push("/");
          }else{
              this.$router.push("/button");
          }
      }
      ,
      active(val){
          if(val=='a'){
              this.selector='item1'
          }else if(val=='b'){
              this.selector='item2'
          }else{
              this.selector='item3'
          }
      }
  }
};
</script>
<style >
.navbar > div:first-child {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 666;
}
.navbar .mid{
    margin-top:115px;
    margin-bottom:55px;
}
</style>