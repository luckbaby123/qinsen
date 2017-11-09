
window.onload=function(){
/*选项卡效果*/
var case_header=document.getElementsByClassName('case_header');
var case_header_as=case_header[0].getElementsByTagName('a');
(function(key){
for (var i=0;i<case_header_as.length;i++) {
	if(i==key){
		case_header_as[i].classList.add('selected');
	}
	case_header_as[i].onclick=function(){
		var selected=document.getElementsByClassName('selected')[0];
		var past_cont=selected.dataset['cont'];
		document.getElementById(past_cont).style.display="none";
		selected.classList.remove('selected');
		this.classList.add('selected');
		var cont=this.dataset['cont'];
		document.getElementById(cont).style.display="block";	
	}
}
})(0);




}