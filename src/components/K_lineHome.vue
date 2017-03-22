<template>
	<div>
		<div @click="hello(1)">	
			  <router-link to="/k_line_index">
			    <div class="home_img">
			      <img :src="'http://wx.szzy888.com/kline/images/menu_kline.png'"/>
			    </div>
			  </router-link>
		  </div>
		  <div @click="hello(2)">	
			  <router-link to="/search">
			    <div class="home_img">
			      <img :src="'http://wx.szzy888.com/dic/images/menu_dic.png'"/>
			    </div>
		  </div>
		  <div @click="hello(3)"> 
			  </router-link>
			  <router-link to="/tujie">
			    <div class="home_img">
			      <img :src="'http://wx.szzy888.com/tech/images/menu_tech.png'"/>
			    </div>
			  </router-link>
		  </div>
	</div>
</template>
<script>
export default {
  name: 'K_lineHome',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
	  	hello(m){
	  		try{
	  			szzy.fun(m);
		    }catch (err){};
		    try{
		       	window.webkit.messageHandlers.jsCallOC.postMessage(m); 
		    }catch (err){}
	  	}
  	}
}
</script>
<style scoped>
.home_img{height: 5rem;width:15.2rem;margin:0.4rem}
.home_img img{width: 100%;height: 100%} 
</style>
 