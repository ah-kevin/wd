$(function(){
	bodyWidth=$("body").width();
	taocan_proWidth=bodyWidth/3.5;//3.5代表一个屏幕显示3.5个
	taocanDetailWidth=bodyWidth-20;//一个屏幕显示一个，减20因为padding
	init();	

	$(".taocan_pro").on("click",function(){
		var cla=$(this).attr("class"),
			width=$(".taocan_pro").width()+10,
			num=$('.taocan_list .taocan_pro').index(this);
			left=(num)*(bodyWidth-2);
		$(".taocan_pro").css("left","-"+width*num+"px");
		$(".taocan_info").css("left","-"+(bodyWidth+2)*num+"px");	
        $(this).addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
	});



	$(".taocan_info").on("swipeLeft",function(){
		var divs=$(".taocan_pro"),
			div=divs.eq(0),
			left=parseInt(div.css("left")),
			taocanDivs=$(".taocan_info"),
			taocanDiv=taocanDivs.eq(0),
			num=$(".taocan_info").index(this)+2,
			taocanLeft=parseInt(taocanDiv.css("left"));
			if(left>-(divs.length*taocan_proWidth)){
				divs.css("left",(left-taocan_proWidth-12)+"px");
				taocanDivs.css("left",(taocanLeft-taocanDetailWidth-22)+"px");
				$(".img"+num+"").addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
			}

	});
	$(".taocan_info").on("swipeRight",function(){
		var divs=$(".taocan_pro"),
			div=divs.eq(0),
			left=parseInt(div.css("left")),
			taocanDivs=$(".taocan_info"),
			taocanDiv=taocanDivs.eq(0),
			num=$(".taocan_info").index(this),
			taocanLeft=parseInt(taocanDiv.css("left"));
		if(left<0){
			divs.css("left",(left+taocan_proWidth+12)+"px");
			taocanDivs.css("left",(taocanLeft+taocanDetailWidth+22)+"px");	
			$(".img"+num+"").addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
		}
	});





});


function init(){
	$(".taocan_pro").css("width",taocan_proWidth+"px");
	$(".taocan_info").css("width",taocanDetailWidth+"px");
}