<template>
    <div>
      <input type="text"> <button @click="see">click</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
        
            aa:{
                money:1000,
                setMoney(money){
                    this.money=money;
                    this.setAll();
                },
                setAll(){
                    this.sz.forEach(elem=>{
                        // console.log(`进到这里了${elem.money}`);
                        elem.getMoney(this);
                    })
                }
                ,
                sz:[ {
                money:0,
                getMoney(n){
                    // console.log(n);
                    this.money=n.money;
                    
                    // console.log(this.money);
                }
                },
                {
                money:0,
                getMoney(n){
                    this.money=n.money;
                }
                },
                {
                money:0,
                getMoney(n){
                    this.money=n.money;
                }
                }
                ]
            }
          
        }
    },
    methods:{
         see(){
               var val= document.querySelector("input").value;
            //    console.log(this.aa)
                this.aa.setMoney(val);
            }
    }
}
</script>