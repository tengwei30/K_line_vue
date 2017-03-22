<template>
  <div class="container">
     <template v-for="(items, indexs) in  all_data" >
      <div class="tap_btn" @click='tap_enevt(indexs)'>  
           <img v-if="!tapdata[indexs]"  src="../assets/right.png" class="tapr_img"/>
           <img v-if="tapdata[indexs]"  src="../assets/bottom.png" class="tapbot_img"/> 
    	     <div class="tap_text">{{indexs}}</div>
	    </div> 
      	    <div v-show="tapdata[indexs]" class="li_content">
        	      <template v-for="(item, index) in  items" >
                  <router-link :to="{name:'tujie_li',params: {c:indexs, id:item.id}}">
          	        <div class="li">
          	           <img class="x_img" :src="item.simg"/>
          	           <div class="text">{{item.title}}</div>
          	         </div>
                   </router-link>
                </template>
            </div> 
           <div class="cb"></div>
     </template>
  </div>
</template>
<script>
import json from '../../static/tujie.json'	
console.log(json);
export default {
  name: 'tujie',
  data () {
    return {
	    all_data:json,
	    seen:false,
	    tapdata:{
			      超买超卖指标图解:false,
			      趋势类指标图解:true
	    }
    }
  },
  methods:{
  	tap_enevt(e){
  	  this.tapdata[e]=!this.tapdata[e];
      console.log(e)
  	}
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
.container{ background: #efefef;}
.K_title{width: 750rpx;margin-top: 20rpx;font-size: 70rpx;color: #fff;font-weight:bold;text-align: center;}
.top_log{height: 240rpx;width: 750rpx;background: linear-gradient(to bottom, #f09649 0%,#ef573e 100%);}
.tap_btn{height:1.92rem;width: 16rem;background: #fff;border-bottom:1px  solid #efefef;}
 .li_content{margin-top: 20rem/@rem;background: #efefef;} 
.tapbot_img{width: 0.64rem;height:0.426rem;float: left;margin-left: 0.64rem;  margin-top: 0.74rem;margin-right:0.426rem;}
.tapr_img{width: 0.426rem;height: 0.64rem;float: left;margin-left: 0.64rem;  margin-top: 0.74rem;margin-right: 0.426rem;}
.tap_text{height: 1.92rem;width: 550rpx;line-height: 1.92rem;font-size:0.72rem ;display: block;float: left;}
.li{width: 7.68rem;height: 5.20rem;box-sizing: border-box;display: block;float: left;}
.x_img{width: 330rem/@rem;height: 160rem/@rem;border-radius: 10rem/@rem;margin-left: 30rem/@rem;}
.text{font-size: 34rem/@rem; display: block;width: 330rem/@rem;margin-left:30rem/@rem;line-height: 34rem/@rem;text-align: center;}
.bottom{height: 40rpx;text-align: center;font-size: 24rpx;color: #999;display: inline-block;width: 750rpx;margin-bottom: 30rpx;line-height: 40rpx;}
.text{color: #000}
</style>
