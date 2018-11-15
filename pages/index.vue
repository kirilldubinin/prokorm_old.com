<template>
  <section class="container">
    <div class="title">
				
				<b>PRO</b> КОРМ
			</div>
			<div class="grey">
				<div class="super-title">
					Feedy
				</div>
				<div class="sub-title">
					мюсли, престартеры и стартеры для телят
				</div>
			</div>
			<div class="content">                                     
				<div class="muesli">Muesli</div>
				<div class="red">Red</div>
				<div class="green">Green</div>
				<div class="start">Start</div>
				<div class="standart">Standard</div>
			</div>
			<br/>
			<div class="footer">
				8 800 550 28 27
			</div>
  </section>
</template>

<script>
/*import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}*/
</script>

<style>

.container {
  background-image: url('../static/cow.jpg');
  margin: auto;
  min-height: 100%;
  width: 360px;
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  /* border: 1px solid #fff; */
  background-repeat: no-repeat;
  background-size: 758px;
  background-position: -354px -42px;
  font-family: 'Comfortaa', cursive;
  margin-top: 32px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding: 1px 0;
}

.title {
    text-align: center;
    font-size: 22px;
    margin: 16px 0 0 0;
    color: #444;
}
	  
.title b {
  margin-right: -6px;
}

.title div {
  font-family: 'Baloo Bhaijaan', cursive;
  line-height: 10px;
  font-size: 17px;
  margin-bottom: 10px;
}

.super-title {
  font-size: 110px;
  text-align: center;
  color: #444;
  font-family: 'Baloo Bhaijaan', cursive;
  top: 28px;
  left: 34px;
  line-height: 0.9em;
  margin-bottom: 14px;
}
  
.sub-title {
  font-size: 18px;
  text-align: center;
  top: 190px;
  color: #000;
  background-color: #f0f0f0;
  border-radius: 2px;
  left: 0px;
  line-height: 1.4em;
}

.grey {
  background-color: #f0f0f0;
  padding: 10px 10px;
  opacity: 0.9;
  border-radius: 5px;
  margin: 20px 16px 0 16px;
}

.footer {
 text-align: center;
  /* position: absolute; */
  /* bottom: 10px; */
  /* left: 110px; */
  font-size: 20px;
  color: #fff;
  text-shadow: 1px 1px 1px #333, 1px 1px 1px #333;
  margin-bottom: 16px;
}

.content {
}

.content > div {
  width: 180px;
  font-size: 32px;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  opacity: 0.7;
  color: #fff;
  /* margin-left: 84px; */
  margin-top: 40px;
  margin: 30px auto;
  cursor: pointer;
}

.content > div:hover {
  opacity: 1;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.muesli {
  background-color: #f98c06;
}
.red {
  background-color: #f13434;
}
.green {
  background-color: #2f6728;
  
}
.standard {
  background-color: #222;
  opacity: 0.7;
}
.start {
  background-color: #2f79d2;
}
.standart {
    background-color: #222;
}

</style>
