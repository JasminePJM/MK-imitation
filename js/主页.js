$(function(){
	$("#plus").click(function(){
		$(".toptip1").slideUp();
		$(".toptip2").slideDown();
	})
	$("#close").click(function(){
		$(".toptip1").slideDown();
		$(".toptip2").slideUp();
	})
	$("#video2").hide();
	$("#play").click(function(){
		$("#video1").hide();
		$("#video2").show();
	//  $("#video2").play();
		$(".video-btn").hide();
		document.getElementById('video2').play();
	})

//		function bighide(){
//			$(".daohang").css("margin-top","60px");
//			$(".Bignavbar").css("height","114px");
//		}
//	
//	
//		function smallhide(){
//			$(".daohang").css("margin-top","25px");
//			$(".Bignavbar").css("height","140px");
//		}
	
	$(window).scroll(function(){
		var a=$(this).scrollTop();
		if(a>38){
//			$("#BigBrand").css("transform","scale(0.01)");
//			$("#smallBrand").css("transform","scale(1)");
//			$(".daohang").css("margin-top","60px");
//			$(".Bignavbar").css("height","100px");
//          setTimeout("bighide()",500);
            $(".change-Bignavbar").css("display","block");
            $(".Bignavbar").css("display","none");
		}
		else{
//			$("#smallBrand").css("transform","scale(0.01)");
//			$("#BigBrand").css("transform","scale(1)");
//			$(".daohang").css("margin-top","25px");
//			$(".Bignavbar").css("height","140px");
//          setTimeout("smallhide()",500);
            $(".change-Bignavbar").css("display","none");
            $(".Bignavbar").css("display","block");
		}
	})
	
	
//	$(".women").hover(function(){
//		$(".nav-box").toggle();
//	})
//	导航栏
	$("#daohang1>ul>li").not(".li9").hover(function(){
		$(".nav-box").eq($(this).index()).slideDown();
	},function(){
		$(".nav-box").eq($(this).index()).hide();
	})
	$("#daohang1 ul .li9").hover(function(){
		$(".nav-box2").slideDown();
	},function(){
		$(".nav-box2").hide();
	})
	$("#daohang2 ul .li9").hover(function(){
		$(".nav-box2").slideDown();
	},function(){
		$(".nav-box2").hide();
	})

	$("#daohang2>ul>li").not(".li9").hover(function(){
		$(".nav-box").eq($(this).index()+8).slideDown();
	},function(){
		$(".nav-box").eq($(this).index()+8).hide();
	})
//	$("#daohang1 ul .li9").bind("hover",function(event){
//		var e=window.event || event;
//		if(e.stopPropagation){
//			e.stopPropagation();
//		}else{
//			e.cancelBubble=true;
//		}
//	});
	
	
	
	
	
	
	
//	$(".nav-box").eq(0).css("right","200px");
//	$(".nav-box").eq(1).css("right","328px");
//	$(".nav-box").eq(2).css("right","429px");
//	$(".nav-box").eq(3).css("right","489px");
//	$(".nav-box").eq(4).css("right","549px");
//	$(".nav-box").eq(5).css("right","670px");
//	$(".nav-box").eq(6).css("right","730px");
//	$(".nav-box").eq(7).css("right","790px");
//	
//	$(".nav-box").eq(8).css("right","200px");
//	$(".nav-box").eq(9).css("right","328px");
//	$(".nav-box").eq(10).css("right","429px");
//	$(".nav-box").eq(11).css("right","489px");
//	$(".nav-box").eq(12).css("right","549px");
//	$(".nav-box").eq(13).css("right","670px");
//	$(".nav-box").eq(14).css("right","730px");
//	$(".nav-box").eq(15).css("right","790px");
	
	$("#nav-btn1").click(function(){
        $(".nav-vertical").css({"animation":"nav-vertical1 .3s linear 0s","left":"0%"});
        document.documentElement.style.overflow='hidden';
        $("#nav-btn1").toggle();
        $("#nav-close1 span").toggle();
        $(".nav-mask").fadeIn();
	})
	$("#nav-btn2").click(function(){
        $(".nav-vertical").css({"animation":"nav-vertical1 .3s linear 0s","left":"0%"});
		document.documentElement.style.overflow='hidden';
		$(".nav-vertical").css("top","50px");
		$("#nav-close2 span").toggle();
		$("#nav-btn2").toggle();
		$(".nav-mask").css("top","50px");
		$(".nav-mask").fadeIn();
		
	})
	$("#nav-close1").click(function(){
		 $("#nav-btn1").toggle();
		 document.documentElement.style.overflow='scroll';
		 $(".nav-vertical").css({"animation":"nav-vertical2 .3s linear 0s","left":"-70%"});
		 $("#nav-close1 span").toggle();
		 $(".nav-mask").fadeOut();
		 
	})
	$("#nav-close2").click(function(){
		 $("#nav-btn2").toggle();
		 document.documentElement.style.overflow='scroll';
		 $(".nav-vertical").css({"animation":"nav-vertical2 .3s linear 0s","left":"-70%"});
		 $("#nav-close2 span").toggle();
		 $(".nav-mask").css("top","50px");
		 $(".nav-mask").fadeOut();
		 
	})
	$(".help").hover(function(){
		$(".help-div").slideToggle();
	})
	$(".sign-hover").hover(function(){
		$(".load-div").slideDown();
		$(".sign").attr("style","border-bottom: 1px solid black;")
	},function(){
		$(".load-div").slideUp();
		$(".sign").removeAttr("style");
	})
	$(".shoppingBag1").hover(function(){
		$(".shoppingBag").slideToggle();
	})
	
	
    $("#two").click(function(){
    	$(".cloth-list").css({"width":"44%","height":"831px"});
    	$(".cloth-img img").css("height","auto");
    	$(".cloth-img-btn").css("top","-10%");
    	$(".cloth-introduce").css("margin-top","350px");
    	$(".cloth-img-like").css("top","-182%");
    	$("#two").css("color","#000000");
    	$("#four").css("color","gray");
    })
    $("#four").click(function(){
    	$(".cloth-list").css({"width":"24%","height":"490px"});
    	$(".cloth-img img").css("height","355px");
    	$(".cloth-img-btn").css("top","-16%");
    	$(".cloth-introduce").css("margin-top","20px");
    	$(".cloth-img-like").css("top","-92%");
    	$("#four").css("color","#000000");
    	$("#two").css("color","gray");
    })
    
    
    
//  新品上市-衣服
//  $(".item-nav li").hover(function(){
//  	$(".item-nav li img").eq($(this).index()).toggle();
//  })
    $(".clothitem-img img").click(function(){
    	$(".clothitem-right img").removeAttr("style").eq($(this).index()).attr("style","display: block;");
    	$(".clothitem-img img").removeAttr("style").eq($(this).index()).attr("style","opacity: 1;")
    	
    })

//	新品上市-响应式菜单
//  $(".menu-title a").click(function(){
//  	$(".icon-x").toggle()
//  	$(".icon-y").toggle();
//  })
    $(".menu-select").click(function(){
        $(".menu-select-contentBox").css({"animation":"menu-select1 .3s linear 0s","left":"0%"});
        document.documentElement.style.overflow='hidden';
	})
     $("#select-closeBtn").click(function(){
        $(".menu-select-contentBox").css({"animation":"menu-select2 .3s linear 0s","left":"-100%"});
        document.documentElement.style.overflow='scroll';
	})
     
     
//   新品上市侧边栏
    $(".plus").addClass("bg1");
    $(".plus").click(function(){
    	 $(this).toggleClass('bg1').toggleClass('bg2');
    })
    
    $(".icon-x").addClass("bgx");
    $(".icon-x").click(function(){
    	 $(this).toggleClass('bgx').toggleClass('bgy');
    })
    
//  导航栏搜索框
    $(".search-box").click(function(){
    	$(".search-box").animate({
    			width:'340px'
    		},200);
    		
    })
    $(".search-box").bind("click",function(event){
    	var e=window.event || event;
    	if(e.stopPropagation){
    		e.stopPropagation();
    	}else{
    		e.cancelBubble=true;
    	}
    });
    $(document).bind("click",function(event){
    	var e=window.event || event;
    	if(e.which == 1){
    		$(".search-box").animate({
    			width:'150px'
    		},200);
    		
    	}
    })
    
    
//  DESTION渐进
   
    $(window).scroll(function(){
		var a=$(this).scrollTop();
		console.log(a);
//      if(a>250){
//      	$("#banner1").fadeIn(500,function(){
//      		$(".banner-img").animate({
//	    			bottom:'0'
//	    		},500);
//      	});
//      }
//      if(a>900){
//      	$("#banner2").fadeIn(500,function(){
//      		$(".banner-img").animate({
//	    			bottom:'0'
//	    		},500);
//      	});
//      }
//      if(a>1540){
//      	$("#banner3").fadeIn(500,function(){
//      		$(".banner-img").animate({
//	    			bottom:'0'
//	    		},500);
//      	});
//      }
        
        
        if(a>250){
        	$("#banner1").animate({
    			bottom:'0',
    			opacity: '1'
    			
    		},2000);
        }
        if(a>900){
        	$("#banner2").animate({
    			bottom:'0',
    			opacity: '1'
    		},2000);
        }
        if(a>1520){
        	$("#banner3").animate({
    			bottom:'0',
    			opacity: '1'
    		},2000);
        }
        
	})






	
	
});

