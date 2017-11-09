 var menu= document.getElementById('nav-menu');
var stoptime=setTimeout(function(){
 	  $("#nav-menu").hide();
 },1500);
 
clearTimeout('stoptime');
$("#nav").mouseover(function(){
     // $("#nav-menu").show();
      menu.style.display="block";
         
 });

 $("#nav").mouseleave(function(){
     // $("#nav-menu").show();
      menu.style.display="none";
         
 });

function index1(){
			window.location.href="index.html";
		}
		function gotoqinsen(){
			window.location.href="gotoQinSen.html";
		}
		function news(){
			window.location.href="gotoQinSen.html";
		}
		function work(){
			window.location.href="gotoQinSen.html";
		}
		function show(){
			window.location.href="gotoQinSen.html";
		}
		function plan(){
			window.location.href="gotoQinSen.html";
		}
		function person(){
			window.location.href="gotoQinSen.html";
		}
		function about(){
			window.location.href="gotoQinSen.html";
		}