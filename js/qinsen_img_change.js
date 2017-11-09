var i=3.5;  //定义初始显示透明度
var t=1;    //初始图片
var arr=Array(4);  //定义一个存放图片的数组
arr[0]="./img/bnr1.jpg"; //第一个图片
arr[1]="./img/bnr2.jpg";  // 第二个
arr[2]="./img/bnr3.jpg";  // 第三个
arr[3]="./img/bnr4.jpg";  // 第四个

function txt(){
       i=i-0.2;    
        if(t>4||t==4){
     	t=0;
     }
       
		document.getElementById("col").style.background="url("+arr[t]+")";	
		
		document.getElementById("col").style.opacity=i;
		
         var x= setTimeout("txt()",200);
    
     if(i<0.5){
      		t++;
           	i=3.5;
      	clearTimeout(x);
      }
}	


	
var nav1= document.getElementById("direction-nav1");
var nav2=document.getElementById("direction-nav2");
nav1.onclick=function(){
		t--;
		if(t==0||t<0){
			t=4;
		}
	
}
nav2.onclick=function(){
	t++;
	if(t>4){
		t=0;
	}
}

	
setInterval("txt()",3000);