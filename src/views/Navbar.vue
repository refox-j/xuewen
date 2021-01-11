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
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="a">11</mt-tab-container-item>
            <mt-tab-container-item id="b">22</mt-tab-container-item>
            <mt-tab-container-item id="c">33</mt-tab-container-item>
        </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "a",
    };
  },
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
}
</style>