<template>
	<div class="m-denglu">
		<header>
			<div class="cys-seting-div">
				<router-link to="/seting"><img class="cys-seting" src="../../assets/cys-seting.png"/></router-link>
			</div>
			<div class="cys-tou-div">
				<router-link to="/touxiang"><img class="cys-tou" src="../../assets/cys-tou.png"/></router-link>
			</div>
			<div class="cys-name">{{storeName}}</div>
			<div class="cys-background">
				<div class="cys-left">
					<b class="cys-left-top">0</b>
					<b class="cys-left-bottom">积分</b>
				</div>
				<div class="cys-right">
					<b class="cys-right-top">0</b>
					<b class="cys-right-bottom">优惠券</b>
				</div>
			</div>
		</header>
		<nav class="cys-nav">
			<div>
				<img class="cys-img" src="../../assets/cys-fk.png">
				<span>待付款</span>
			</div>
			<div>
				<img class="cys-img" src="../../assets/cys-wl.png">
				<span>待收货</span>
			</div>
			<div>
				<img class="cys-img" src="../../assets/cys-fk.png">
				<span>待评价</span>
			</div>
			<div>
				<img class="cys-img" src="../../assets/cys-kf.png">
				<span>退货/售后</span>
			</div>
		</nav>
		<section>
			<div class="item">
				<img src="../../assets/cys-all.png"/>
				<div>
					<p class="cys-p-left">全部订单</p>
					<p class="cys-p-center">查看全部订单</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/addr.png"/>
				<div>
					<p class="cys-p-left">我的地址</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/cys-xin.png"/>
				<div>
					<p class="cys-p-left">我的收藏</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/cys-xin.png"/>
				<div>
					<p class="cys-p-left">我的团</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/cys-tan.png"/>
				<div>
					<p class="cys-p-left">关于我厨</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/cys-wen.png"/>
				<div>
					<p class="cys-p-left">帮助中心</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
			<div class="item">
				<img src="../../assets/cys-all.png">
				<div>
					<p class="cys-p-left">意见反馈</p>
					<p class="cys-p-right">〉</p>
				</div>
			</div>
		</section >
	</div>
</template>
<script>

</script>