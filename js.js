window.onload=function()
{
	var oUl=document.getElementById("sm");
	var aLi=oUl.getElementsByTagName("li");
	var aMask=document.getElementsByClassName("mask_b");
	for(var i=0; i<aLi.length;i++){
		aLi[i].style.width="124px";
		aLi[0].style.width="400px";
	}
	for(var i=0; i<aLi.length; i++)
	{
		aLi[i].init=i;
		aLi[i].onmouseover=function ()
		{
			for(var j=0; j<aLi.length; j++)
			{
				aLi[j].style.width='124px';
			}
			this.style.width='400px';
			aMask[this.init].style.display='none';
		}
		aLi[i].onmouseout=function ()
		{
			for(var j=0; j<aLi.length; j++)
			{
				aLi[j].style.width='170px';
			}
			aMask[this.init].style.display='block';
		}
	}
}