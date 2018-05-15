window.onload=function(){
	var oBox=document.body.children;
	var oNav=oBox[1].getElementsByTagName("a");
	var oCon=oBox[3].children;
	var oBottom=oCon[2].getElementsByTagName("a");
	
	change(oNav);
	change(oBottom);

	function change(obj){
		for(var i=0;i<obj.length;i++){
			obj[i].onmouseover=function(){
				for(var j=0;j<obj.length;j++){
					obj[j].style.color="#fff";
				}
				this.style.color="red";
			};
		}
	}
};