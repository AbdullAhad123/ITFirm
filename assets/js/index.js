$(".featuredProjectBanner").on("mouseover mouseenter",function(){let e=$(this).find("img"),t=e.height();e.css("transform","translateY(-"+(t-450)+"px)")}),$(".featuredProjectBanner").on("mouseleave",function(){let e=$(this).find("img");e.css("transform","translateY(0)")});