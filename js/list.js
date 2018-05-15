window.onload=function(){
	var oBox=document.body.children;
	var oNav=oBox[1].getElementsByTagName("a");
	var oCon=oBox[3].children;

	var oList=oCon[0].getElementsByTagName("li");
	var oBottom=oCon[1].getElementsByTagName("a");
	
	change(oNav,"#fff");
	change(oList,"#000");
	change(oBottom,"#fff");

	function change(obj,rgb){
		for(var i=0;i<obj.length;i++){
			obj[i].onmouseover=function(){
				for(var j=0;j<obj.length;j++){
					obj[j].style.color= rgb;
				}
				this.style.color="red";
			};
		}
	}
};