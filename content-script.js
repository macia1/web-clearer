// import database from 'data.json'

console.log("clear is running!")
function rme(cn){
    let bid = document.getElementById(cn);
	if(bid != undefined){
		bid.remove()
		console.log("rm by id " + cn)
		return;
	}
	let chArr = document.body.getElementsByClassName(cn);
	for(i=0;i<chArr.length;i++){
	     //删除元素 元素.parentNode.removeChild(元素);
	    if (chArr[i] != null) 
	    	console.log("rm by class " + cn)
          	chArr[i].parentNode.removeChild(chArr[i]); 
	}
}
let domain = document.domain;
let database = {
					"douyu.com":['RedEnvelopAd-adBox','IconCardAdBoundsBox','js-barrage-extend-container','LazyLoad-entity','js-room-activity','Title-col is-left xh-highlight','Title-col is-right h34','js-widget','layout-Player-rank','DiamondsFansRankList-item ','layout-Bottom-main','js-bottom-right-anchorLike',
								'ScreenBannerAd','js-room-top-banner','PlayerToolbar','DropPane-ad','XinghaiAd','ChatRank-tabTitle','CloseVideoPlayerAd','CloseVideoCom'],
					"zhihu.com":['Card TopstoryItem TopstoryItem--advertCard TopstoryItem-isRecommend','Pc-card Card','container']
				}
function ac(){
	for (let dm in database) {
		if(domain.indexOf(dm) != -1){
			database[dm].forEach(function(ad) {
		    	rme(ad)
			});
		}
	};
}

var intervalId = setInterval(function() {
    ac()
    console.log("clearer ...");
}, 1000);