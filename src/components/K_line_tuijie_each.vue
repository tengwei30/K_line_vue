<template>
<div class="container">
    <div class="top_tap">
       <template  v-for="(item,index)  in titles">
             <div class="li" :class="{ active: index==this_index}" @click="tap_click(index)" >{{item}}</div>
        </template>
    </div>
    <div v-html="itme" class="contenttt">
      {{itme}}
    </div>
</div>
</template>
<script>
import json from '../../static/tujie.json'	
console.log(json);
export default {
  name: 'tujie_li',
  data () {
    return {
    all_data:json,
    titles:['指标简介','应用原则','实战图例','相关应用'],
    this_index:0,
    itme:'',
    c:'',
    id:''
    }
  },
  methods:{
    tap_click(e){
        this.this_index=e;
        if(e==0){
          this.itme= json[this.c][this.id].intro
        }
        if(e==1){
          this.itme= json[this.c][this.id].legend
        }
        if(e==2){
          this.itme= json[this.c][this.id].apply
        }
        if(e==3){
          this.itme= json[this.c][this.id].point
        }  
    }
  },
  created: function () {
     this.c=this.$route.params.c //get params from id 
     this.id=this.$route.params.id //get params from id 
     this.itme= json[this.c][this.id].intro 
  },
  activated(){
     this.c=this.$route.params.c //get params from id 
     this.id=this.$route.params.id //get params from id 
     this.itme= json[this.c][this.id].intro 
  },
}
</script>
<style scoped lang="less">
@rem:46.87;
.container{background: #efefef;}
.top_tap{width:100%;height:2rem;font-size:0.8rem;box-sizing:border-box;}
.li{text-align:center;box-sizing:border-box; width:25%;line-height:2rem; 
  height:100%;float:left;display:block;background:#fff;display:block;}
.active{border-bottom:2px solid #ef573e;}
.fl{float: left}
.fr{float: right}
.contenttt{background:#efefef;width:15rem;margin-left:0.5rem;}
</style>
