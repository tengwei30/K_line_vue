<template>
 <div class="container">
  <div  class="title_detail">
    <div class="title_detail_1">{{one_data.title}}</div>
    <img class="title_detail_2" :src="'http://wx.szzy888.com/kline/bimg/'+one_data.id+'.jpg'"/>
  </div>
  <div  class="words">
    <div class="word_title_1">形态简介：</div>
    <div class="word_cont_2">
    {{one_data.intro}}
    </div>
  </div>
 
  <div  class="words">
    <div class="word_title_1">操作策略：</div>
    <div class="word_cont_2">
   {{one_data.point}}
    </div>
  </div>
   <div  class="words">
    <div class="word_title_1">形态要点：</div>
    <div class="word_cont_2">
   {{one_data.policy}}
    </div>
  </div>
   <div style="height: 3rem;"></div>
   <div  class="double_btn">
      <router-link :to="{name:'Li',params: {id:all_data[pre_id].id}}" replace>
         <div   class="fl button">{{all_data[pre_id].title}} </div>
      </router-link>
      <router-link :to="{name:'Li',params: {id:all_data[next_id].id}}" replace>
         <div  class="fr button">{{all_data[next_id].title}}</div>
      </router-link>
      <div class="cb"></div>
  </div>
</div>
</template>
<script>
import json from '../../static/config.json'	
console.log(json);
export default {
  name: 'K_line_index',
  data () {
    return {
    all_data: json,
    one_data:{},
    pre_id:0,
    next_id:0,
    }
  },
  watch:{'$route':function (to, from) {
    let Li_id=this.$route.params.id //get params from id 
    let new_all_lists=[]
    let ii=0;
    let list
    let this_id=0  
    for(let ke in json){
        list=json[ke]
        for(let key in list){
           new_all_lists[ii]=list[key]
           if(Li_id==list[key].id){
              this_id=ii
           }
           ii++
        }
    }
    this.all_data=new_all_lists;
    this.one_data=new_all_lists[this_id];
    this.this_id=this_id;         //this_id
    if (new_all_lists) {      //get next id or pre id
        var pre_id=parseInt(this_id)-1
        pre_id==-1?pre_id=59:pre_id
        var next_id=parseInt(this_id)+1
        next_id==60?next_id=0:next_id  
        this.pre_id=pre_id,
        this.next_id=next_id
   
   }
  }},
   created: function () {
    let Li_id=this.$route.params.id //get params from id 
    let new_all_lists=[]
    let ii=0;
    let list
    let this_id=0  
    for(let ke in json){
        list=json[ke]
        for(let key in list){
           new_all_lists[ii]=list[key]
           if(Li_id==list[key].id){
              this_id=ii
           }
           ii++
        }
    }
    this.all_data=new_all_lists;
    this.one_data=new_all_lists[this_id];
    this.this_id=this_id;         //this_id
    if (new_all_lists) {      //get next id or pre id
        var pre_id=parseInt(this_id)-1
        pre_id==-1?pre_id=59:pre_id
        var next_id=parseInt(this_id)+1
        next_id==60?next_id=0:next_id  
        this.pre_id=pre_id,
        this.next_id=next_id
   
   }
  },
  activated(){
    let Li_id=this.$route.params.id //get params from id 
    let new_all_lists=[]
    let ii=0;
    for(let ke in json){
        let list=json[ke]
        for(let key in list){
          new_all_lists[ii]=list[key]
          ii++
        }
    }
    this.all_data=new_all_lists;
    var this_id=0           //zhe new datas key
    for (let k in new_all_lists){
      if(Li_id==new_all_lists[k].id){
        this_id=k
      }
    }
    this.one_data=new_all_lists[this_id];
    if (new_all_lists) {      //get next id or pre id
        var pre_id=parseInt(this_id)-1
        pre_id==-1?pre_id=59:pre_id
        var next_id=parseInt(this_id)+1
        next_id==60?next_id=0:next_id  
        this.pre_id=pre_id,
        this.next_id=next_id
   
   }
  },
  methods:{
  	tap_enevt(e){
  	  this.tapdata[e]=!this.tapdata[e];
      console.log(e)
  	}
  }
}
</script>
<style scoped lang="less">
@rem:46.87;
.container{background: #fff;padding-left: 25rem/@rem}
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
  padding: 4px 0;
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
}
.double_btn{
  width:14rem;
  padding: 20rem/@rem 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
}
.double_btn button{
 display: inline-block;
 width:250rem/@rem;
 font-size:28rem/@rem;
 text-align: center;
}
.button{height:80rem/@rem;border-radius: 8px;font-size:30rem/@rem;line-height: 80rem/@rem;border: 1px solid #ff6633;width: 5rem;text-align: center;margin-left: 0.5rem;background: #fff;color: #ff6633;}
</style>
