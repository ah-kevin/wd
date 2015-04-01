$(function(){
	bodyWidth=$("body").width();
	taocan_proWidth=bodyWidth/3.5;
	init();	

	$(".taocan_pro").on("click",function(){
		var cla=$(this).attr("class"),
			num=$('.taocan_list .taocan_pro').index(this);
			left=(num)*bodyWidth;		
		$(".taocan_pro").css("left","-"+left/3+"px");
        $(this).addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
	});

	$(".taocan_pro").on("swipeLeft",function(){
		var imgs=$(".taocan_pro"),
			divs=$(".taocan_pro"),
			div=divs.eq(0),
			left=parseInt(div.css("left"));
			if(left>-(divs.length*taocan_proWidth)){
				imgs.css("left",(left-taocan_proWidth-10)+"px");
			}
		$(this).addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
	});
	$(".taocan_pro").on("swipeRight",function(){
		var imgs=$(".taocan_pro"),
			divs=$(".taocan_pro"),
			div=divs.eq(0),
			left=parseInt(div.css("left"));
		if(left<10){
			imgs.css("left",(left+taocan_proWidth+10)+"px");		
		}
		$(this).addClass('chosce').siblings('.taocan_pro').removeClass('chosce');
	});





});


function init(){
	$(".taocan_pro").css("width",taocan_proWidth+"px")
}