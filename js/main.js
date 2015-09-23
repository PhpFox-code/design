/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 22:03:27
 * @version $Id$
 */

 $(document).ready(function(){
 	// $(window).scroll(function(){
 	// 	$('.index_head').css("border-bottom","1px solid #e5e5e5");
 	// 	if($('.index_head').offset().top<=0){
 	// 		$('.index_head').css("border-bottom","none");
 	// 	}
 	// });
 	$("a").on("click",function(){
 		$(this).parents("ul").find("a").removeClass("active");
 		$(this).addClass("active");
 	});
 });