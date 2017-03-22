<template>
<div class="container">
    <div  class="title_detail">
        <div class="title_detail_1">{{itme.name}}</div>
        <div  class="words">
            <div class="word_title_1">简介：</div>
            <div class="word_cont_2">
            {{itme.content}}
            </div>
        </div>
    </div>
</div>
</template>
<script>
import json from '../../static/search.json'	
console.log(json);
export default {
  name: 'li_search',
  data () {
    return {
    itme:{},
    }
  },
  methods:{
  },
  activated(){
     let Li_c=this.$route.params.c //get params from id 
     let Li_id=this.$route.params.id //get params from id 
     this.itme= json[Li_c].Data[Li_id]
     console.log(json[Li_c].Data[Li_id])
    },
  created: function () {
     let Li_c=this.$route.params.c //get params from id 
     let Li_id=this.$route.params.id //get params from id 
     this.itme= json[Li_c].Data[Li_id]
     console.log(json[Li_c].Data[Li_id])
    
  }
}
</script>
<style scoped lang="less">
@rem:46.87;
.container{background: #fff;padding-left: 25rem/@rem;height: 100%}
.fl{float: left}
.fr{float: right}

.title_detail{
  display: block;
}
.title_detail_1{
  display: block;
  padding: 20rem/@rem 0;
  color: #000;
  font-size:37rem/@rem;
}
.title_detail_2{
  display: block;
  width:700rem/@rem;
  height: 330rem/@rem;
}

.words{
  padding: 10px 0;
  width:700rem/@rem;
}
.word_title_1{
  color: #f43530;
  font-size:32rem/@rem;
}
.word_cont_2{
  color: #333;
  font-size:28rem/@rem;
  line-height: 1rem;
  margin-top: 20rem/@rem;
  text-indent: 1.1rem;
}

.double_btn{
  width:660rem/@rem;
  padding: 20rem/@rem 0;
}
.double_btn button{
 display: inline-block;
 width:250rem/@rem;
 font-size:28rem/@rem;
 text-align: center;
}
</style>
