<template>
<div class="container">
     <template v-for="(items, indexs) in  all_data" >
         <div class="gary_name">{{all_data[indexs].Cate}}</div>
         <template v-for="(item, index) in  items.Data" >
         		<router-link :to="{name:'search_li',params: {c:indexs,id:item.name}}"> 
            	<div class="cont_name" >{{index}}</div>
            </router-link>	
         </template>  
      </template>  
   </block >
</div>
</template>
<script>
import json from '../../static/search.json'	
console.log(json);
export default {
  name: 'search',
  data () {
    return {
    all_data:json,
    }
  },
  methods:{
  },
  activated(){
    let scroll_top= localStorage.getItem("scroll_top")?localStorage.getItem("scroll_top"):0;
    document.body.scrollTop=scroll_top
    },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(document.body.scrollTop)
    localStorage.setItem("scroll_top", document.body.scrollTop);
    next(true)
  }
}
</script>
<style scoped lang="less">
@rem:46.87;
.container{
  height: 100%;
  margin: 0;padding: 0;
  width: 750rem/@rem;overflow: hidden;
}
.gary_name{
  height: 40rem/@rem;background: #efefef;width: 100%;color: #999999;
  padding-left:50rem/@rem;font-size:28rem/@rem;line-height: 40rem/@rem; 
}
.cont_name{
  height: 96rem/@rem;border-bottom: solid 1px #efefef;width: 100%;background: #fff;
  padding-left:50rem/@rem;color: #000;font-size: 32rem/@rem;line-height: 96rem/@rem;
}
.bottom{
  height: 40rem/@rem;text-align: center;font-size: 24rem/@rem;color: #999;
  display: inline-block;width: 750rem/@rem;margin-bottom: 30rem/@rem;
  line-height: 40rem/@rem;
}
</style>
