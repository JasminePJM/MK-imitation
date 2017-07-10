$(function(){
//	$(window).scroll(function(){
//		var d=$(this).scrollTop();
//		
//		if(d > 615){
////			css({"position":"fixed","left":"52%","top":"-80%"});
////attr("style","position: fixed;bottom:170px");
//			$(".fixed1").attr("style","position:fixed;bottom:60px;");
//		}
//		if(d > 3700){
//			console.log(d);
////			.removeAttr("style");
////			$(".fixed1").css({"position":"absolute","bottom":"auto"});
//          $(".fixed1").removeAttr("style");
//          $(".Big-itemBox-right").attr("style","position: absolute;top:3180px;left: 52%;");
//
//		}
//		
//		
//	})
    $(".item-nav li").hover(function(){
    	$(".item-nav li img").eq($(this).index()).toggle();
    })

	
	$(document).ready(function(){
	var p=0,t=0;

	$(window).scroll(function(e){
			p = $(this).scrollTop();
			console.log(p);
			if(t<=p){//下滚
				if(p>0){
					$(".Big-itemBox-right").removeAttr("style");
				}
				if(p > 615){
				   $(".fixed1").attr("style","position:fixed;bottom:60px;");
				    $(".Big-itemBox-right").removeAttr("style");
		        }
				if(p > 3700){
					
		            $(".fixed1").removeAttr("style");
		            $(".Big-itemBox-right").attr("style","position: absolute;top:3180px;left: 52%;");
		        }
				if(p > 3900){
					$(".Big-itemBox-left").css("display","none");
				}
			}
			
			else{//上滚
				if(p < 3700){
					
		            $(".fixed1").removeAttr("style");
//		            $(".Big-itemBox-right").attr("style","position: absolute;top:3180px;left: 52%;");
		        }
				if(p < 3000){
					
					$(".Big-itemBox-right").attr("style","position: fixed;top:120px;left: 52%;");
				}
				if(p < 231){
					
					$(".Big-itemBox-right").attr("style","position: fixed;top:231px;left: 52%;");
				}
				if(p < 3900){
					$(".Big-itemBox-left").css("display","block");
				}
			}
			setTimeout(function(){t = p;},0);		
	});
});
	
	
	
	
	
	
	
	


});