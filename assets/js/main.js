$(window).ready(function(){
	
// Navbar

$("nav li.extra").mouseover(function(){
	$("nav ul.extra").slideDown("fast");
	
	// First sub-menu
	$("nav li.homepages").mouseover(function(){
		$("nav ul.homepages").fadeIn("fast");
	})
		$("nav li.homepages").mouseleave(function(){
			$("nav ul.homepages").fadeOut("fast");
		})
	// Second sub-menu
	$("nav li.blog").mouseover(function(){
		$("nav ul.blog").fadeIn("fast");
	})
		$("nav li.blog").mouseleave(function(){
			$("nav ul.blog").fadeOut("fast");
		})
	// Third sub-menu
	$("nav li.ecommerce").mouseover(function(){
		$("nav ul.ecommerce").fadeIn("fast");
	})
		$("nav li.ecommerce").mouseleave(function(){
			$("nav ul.ecommerce").fadeOut("fast");
		})
})

$("nav li.extra").mouseleave(function(){
	$("nav ul.extra").hide();
	$("nav ul.homepages").hide();
	$("nav ul.blog").hide();
	$("nav ul.ecommerce").hide();
})


// Header resize animation
setInterval(function(){
	var h=$(window).height();
	$("#header > .container").css("padding-top",(h/2)-200+"px");
},200);

// Header fade in animation
$("#header .fadeIn").css("animation-play-state","running");


// Hide content of second and third tab of 'process' section
$("#item12").hide();
$("#item13").hide();

// Hide images of second and third tab of 'features' section
$("#featureImg2").hide();
$("#featureImg3").hide();

// Process tab animations
$("#tab1").on("click",function(){
	$("#process .container ul li").removeClass("active");
	$("#tab1").addClass("active");
	$("#item11").show();
	$("#item12").hide();
	$("#item13").hide();
	$("#item11 .animateRight, #item11 .animateLeft").css("animation-play-state","running");
})

$("#tab2").on("click",function(){
	$("#process .container ul li").removeClass("active");
	$("#tab2").addClass("active");
	$("#item11").hide();
	$("#item12").show();
	$("#item13").hide();
	$("#item12 .animateRight, #item12 .animateLeft").css("animation-play-state","running");
})

$("#tab3").on("click",function(){
	$("#process .container ul li").removeClass("active");
	$("#tab3").addClass("active");
	$("#item11").hide();
	$("#item12").hide();
	$("#item13").show();
	$("#item13 .scaleIn").css("animation-play-state","running");
	setTimeout(function(){
		$("#item13 .animateDown").css("animation-play-state","running");
	},250)
})

// Hide second and third quotes of 'clientQuotes' section
$("#quote1").hide();
$("#quote3").hide();

// Variables for "clientQuote" section
var previous;
var current=2;

// 'clientQuote Animations
$("#client1").on("click",function(){
	$("#client .col-md-4").removeClass("active");
	previous=current;
	current=1;
	$("#client1").addClass("active");
	$("#quote1").show();
	$("#quote2").hide();
	$("#quote3").hide();
	$("#clientQuote .container .quote").removeClass("animateLeft").removeClass("animateRight");
	if(current>previous){
		$("#quote1").addClass("animateLeft");
		$("#clientQuote .animateLeft").css("animation-play-state","running");
	}
	else if(current<previous){
		$("#quote1").addClass("animateRight");
		$("#clientQuote .animateRight").css("animation-play-state","running");
	}
})

$("#client2").on("click",function(){
	$("#client .col-md-4").removeClass("active");
	previous=current;
	current=2;
	$("#client2").addClass("active");
	$("#quote1").hide();
	$("#quote2").show();
	$("#quote3").hide();
	$("#clientQuote .container .quote").removeClass("animateLeft").removeClass("animateRight");
	if(current>previous){
		$("#quote2").addClass("animateLeft");
		$("#clientQuote .animateLeft").css("animation-play-state","running");
	}
	else if(current<previous){
		$("#quote2").addClass("animateRight");
		$("#clientQuote .animateRight").css("animation-play-state","running");
	}
})

$("#client3").on("click",function(){
	$("#client .col-md-4").removeClass("active");
	previous=current;
	current=3;
	$("#client3").addClass("active");
	$("#quote1").hide();
	$("#quote2").hide();
	$("#quote3").show();
	$("#clientQuote .container .quote").removeClass("animateLeft").removeClass("animateRight");
	if(current>previous){
		$("#quote3").addClass("animateLeft");
		$("#clientQuote .animateLeft").css("animation-play-state","running");
	}
	else if(current<previous){
		$("#quote3").addClass("animateRight");
		$("#clientQuote .animateRight").css("animation-play-state","running");
	}
})

// Toggle menu right(for xs screens)
var counter=1;
var wHeight = $(window).height();
$("#fixed-right-menu").hide();
$("#fixed-right-menu").height(wHeight+20+"px");
$("#navicon i").on("click",function(){
	if(counter%2==1){
		$("#fixed-right-menu").show();
		$("#fixed-right-menu").css("top",$(window).scrollTop()+"px");
		$("body").animate({left:"-300px"}, 300);
	
	
	
		counter++;
	}else{
		$("#fixed-right-menu").hide();
		$("#fixed-right-menu").css("top",$(window).scrollTop()+95+"px");
		$("body").animate({left:"0px"}, 300);
	
	
		
		counter++;
	}
})

// Function to remove all active class
function removeActiveClass(){
	$("nav .navbar-menu-left ul li a").removeClass("active");
}

// Scroll animations
$(window).scroll(function(){
	var wHeight=$(this).height();
	var wScroll=$(this).scrollTop();
	
	// Hide toggle menu
	$("#fixed-right-menu").hide();
	$("body").css("left","0px");
	if(counter%2==0){counter++};
	if(wScroll>77){
		$("#fixed-right-menu").css("padding-top","77px");
	}else{
		$("#fixed-right-menu").css("padding-top","0px");
	}
	
	// Logos animation
	var i;
	if( wScroll > ( $("#logos").offset().top - wHeight/1.4) ){
		i=1;
		var logoAnimations=setInterval(function(){
			$("#logos")
				.find(".container ul li:nth-child("+i+") img")
				.animate({"bottom": "0"},200)
			i++;
			if(i==6){clearInterval(logoAnimations)}
		},200)
	
	//Add active class to 'about'
	removeActiveClass();
	$("#liAbout").addClass("active");
	
	//Make the navbar fixed
		$("nav").addClass("navbar-fixed-top");
	}else{
		$("nav").removeClass("navbar-fixed-top");
	}
	

	// Process item animations
	if( wScroll > ( $("#process .container #item11").offset().top - wHeight/1.8) ){
		$("#item11 .animateRight, #item11 .animateLeft").css("animation-play-state","running");
	}
	if( wScroll > ( $("#process .container #item2").offset().top - wHeight/1.4) ){
		$("#item2 .animateRight, #item2 .animateLeft").css("animation-play-state","running");
	}
	if( wScroll > ( $("#process .container #item3").offset().top - wHeight/1.4) ){
		$("#item3 .animateRight, #item3 .animateLeft").css("animation-play-state","running");
	}
	
	// Features section image animations
	if( wScroll > ( $("#features .container .col-md-12").offset().top - wHeight/1.8) ){
			$("#features .container #featureImg img").css("animation-play-state","running");
		
		//Add active class to 'features'
			removeActiveClass();
			$("#liFeatures").addClass("active");
		}
	
	
	// Features section tab animations
	$("#featureTab1").on("click",function(){
		$("#features .container .col-md-12 div").removeClass("active");
		$("#featureTab1").addClass("active");
		$("#featureImg1").show();
		$("#featureImg2").hide();
		$("#featureImg3").hide();
	})
	
	$("#featureTab2").on("click",function(){
		$("#features .container .col-md-12 div").removeClass("active");
		$("#featureTab2").addClass("active");
		$("#featureImg1").hide();
		$("#featureImg2").show();
		$("#featureImg3").hide();
	})
	
	$("#featureTab3").on("click",function(){
		$("#features .container .col-md-12 div").removeClass("active");
		$("#featureTab3").addClass("active");
		$("#featureImg1").hide();
		$("#featureImg2").hide();
		$("#featureImg3").show();
		$("#featureImg .animateLeft").css("animation-play-state","running");
	})
	
	// 'Features List' section animations
	if( wScroll > ( $("#featuresList .container .row:first-child").offset().top - wHeight/1.8) ){
			$("#featuresList .container .animateLeft").css("animation-play-state","running");
		}
	
	if( wScroll > ( $("#featuresList .container .row:last-child").offset().top - wHeight/1.8) ){
			$("#featuresList .container .animateRight").css("animation-play-state","running");
		}
	
	//'Subscription' section animations
	if( wScroll > ( $("#subscription .container").offset().top - wHeight/1.8) ){
			$("#subscription .container .animateLeft").css("animation-play-state","running");
			$("#subscription .container .animateRight").css("animation-play-state","running");
		}
	
	// 'Packages' section animations
	if( wScroll > ( $("#packages").offset().top - wHeight/1.8) ){
			$("#packages .animateUp").css("animation-play-state","running");
		
		//Add active class to 'Prices'
			removeActiveClass();
			$("#liPrices").addClass("active");
		}
	
	// 'Awards' section animations
	if( wScroll > ( $("#awards").offset().top - wHeight/1.8) ){
			$("#awards .animateDown").css("animation-play-state","running");
		}
	
	// 'ClientQuote' section animations
	if( wScroll > ( $("#clientQuote").offset().top - wHeight/1.8) ){
			$("#clientQuote .animateDown").css("animation-play-state","running");
		
		//Add active class to 'Feedback'
			removeActiveClass();
			$("#liFeedback").addClass("active");
		};
	
	// 'Client' section animations
	if( wScroll > ( $("#client").offset().top - wHeight/1.8) ){
			$("#client .animateDown").css("animation-play-state","running");
		}
	
	// 'Team' section animations
	
	if( wScroll > ( $("#team .container .col-md-3").offset().top - wHeight/1.4) ){
		$("#team .container #teamMember1 .animateDown").css("animation-play-state","running");
		setTimeout(function(){
			$("#team .container #teamMember2 .animateUp").css("animation-play-state","running");	
		},200);
		setTimeout(function(){
			$("#team .container #teamMember3 .animateDown").css("animation-play-state","running");	
		},400);
		setTimeout(function(){
			$("#team .container #teamMember4 .animateUp").css("animation-play-state","running");	
		},600);
		
		//Add active class to 'Team'
			removeActiveClass();
			$("#liTeam").addClass("active");
	}
	
	if( wScroll > ( $("#launch").offset().top - wHeight/1.4) ){
	//Add active class to 'Contacts'
		removeActiveClass();
		$("#liContacts").addClass("active");
	}
	
	// Button to go to the top
	if( wScroll > $("#logos").offset().top ){
		$("#toTop").show();
	}else{
		$("#toTop").hide();
	}
	$("#toTop").on("click",function(){
		$(window).scrollTop(0);
	})
	
});//end of scroll method
	
	
	
})//end of ready function