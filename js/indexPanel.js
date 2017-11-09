window.onload=function(){
	var rightNav=document.getElementsByClassName('rightNav');
	var lis=rightNav[0].getElementsByTagName('a');
	for (var i=0;i<lis.length;i++) {
		lis[i].onclick=function(){
			var active=document.getElementsByClassName('active')[0];
			
			var pastCont=active.dataset['cont'];
			
			document.getElementById(pastCont).style.display="none";
			active.classList.remove('active');
			this.classList.add('active');
			var currentCont=this.dataset['cont'];
			
			document.getElementById(currentCont).style.display="block";
		}
	}
}
