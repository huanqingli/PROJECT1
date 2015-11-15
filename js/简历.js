 	var str="/*\n*大家好，我叫周亭羽，刚从渥太华大学取得工程硕士学位，  \n*\n*立志于在前端开发方面开发自己    \n*\n*现在就来敲几行代码瞧瞧吧   \n*\n*什么，要活的代码，好吧我尽量。。。  \n*/\n/*\n*先设置下动画   \n*/\nbody {\n transition :all 1s;  \n -webkit-transition : all 1s;  \n}\n/*\n*黑字白底是最无聊的了，先给他动刀\n*/\nhtml {\nbackgroundcolor : #3f5263 ;  \n}\ndialog {\ncolor  : white ;  \n}\n/*\n*把它们放在盒子里   \n*/\ndialog {\noverflow : auto ;   \nbackgroundcolor : #303030;   \nborder : 1px solid #ccc;   \nmax-height : 44.6% ;   \nwidth : 49% ;  \nfont-size : 14px;  \nfont-family : monospace;   \npadding : 10px 10px 20px;   \nbox-shadow : -10px 10px 5px 0 ;   \noutline : 0 ;  \n}\n/*\n*让他们去右边吧，左边还有别的用   \n*/\ndialog {\nposition : relative;   \nfloat :right  \n}\n/*\n*这样看起来太乱了webstorm界面就很友好，我们学上两招\n*/\n.comment  { color  : #787362 ; }     \n.selector { color  : #dd9a10 ; }   \n.key      { color  : #64D5EA ; }   \n.value    { color  : #ad7ada ; }   \n/*\n*好了，现在关注一下左边赶快进入重点，  \n*\n*已经耽误您很长时间了，先表示歉意。。。    \n*\n*先把他放在这不管他   \n*\n*还是变长一下，免得结构失调\n*/\ndialog {   \nmax-height : 95%;  \n}\n"   ;
    var str = str.split('');
    var i=0; 
    var x=str.length;
    function printer(){  
    		document.getElementById("text").innerHTML=document.getElementById("text").innerHTML+str[i];
    		gundong();
    		if(str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="f5263"){
    		document.getElementById("beijing").style.backgroundColor="rgb(63, 82, 99)";
    		}else if(str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="white"){
    		document.getElementById("hezi1").style.color="white"	
    		}else if(str[i-4]+str[i-3]+str[i-2]+str[i-1]=="auto"){
    		document.getElementById("hezi1").style.overflow="auto";
    		}else if(str[i-7]+str[i-6]+str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="#303030"){
    		document.getElementById("hezi1").style.backgroundColor="rgb(48, 48, 48)";
    		}else if(str[i-3]+str[i-2]+str[i-1]=="ccc"){
    		document.getElementById("hezi1").style.border="1.5px solid #ccc";
    		}else if(str[i-3]+str[i-2]+str[i-1]=="4.6"){
    		document.getElementById("hezi1").style.maxHeight="44.6%";
    		}else if(str[i-2]+str[i-1]=="49"){
    		document.getElementById("hezi1").style.width="49%";
    		}else if(str[i-4]+str[i-3]+str[i-2]+str[i-1]=="14px"){
    		document.getElementById("hezi1").style.fontSize="16px";
    		}else if(str[i-4]+str[i-3]+str[i-2]+str[i-1]=="20px"){
    		document.getElementById("hezi1").style.padding="10px 10px 20px";
    		}else if(str[i-4]+str[i-3]+str[i-2]+str[i-1]=="adow"){
    		document.getElementById("hezi1").style.boxShadow="-4px 4px 2px 0 rgba(0,0,0,0.3)";
    		}else if(str[i-4]+str[i-3]+str[i-2]+str[i-1]=="line"){
    		document.getElementById("hezi1").style.outline="0";
    		}else if(str[i-7]+str[i-6]+str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="elative"){
    		document.getElementById("hezi1").style.position="relative";
    		}else if(str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="right"){
    		document.getElementById("hezi1").style.float="right";
    		}else if(str[i-6]+str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="da ; }"){
    		highlight('body |html |.comment |.selector|dialog |.key |.value');
    		highlight2('大家好，我叫周亭羽，刚从渥太华大学取得工程硕士学位，|立志于在前端开发方面开发自己|现在就来敲几行代码瞧瞧吧|什么，要活的代码，好吧我尽量。。。|先设置下动画|黑字白底是最无聊的了，先给他动刀|把它们放在盒子里|让他们去右边吧，左边还有别的用|这样看起来太乱了webstorm界面就很友好，我们学上两招');
    		highlight3(' -webkit-transition | transition |color  |overflow |backgroundcolor |border |max-height |width |font-size |font-family |padding |box-shadow |outline |position |float ');
    		highlight4('all 1s| 1px solid #ccc|relative| 14px| monospace| 10px 10px 20px|-10px 10px 5px 0|#787362 |#dd9a10 |#64D5EA |#ad7ada |right | 44.6% | 49% |0 |#3f5263 | #303030|auto |white ');
    		}else if(str[i-6]+str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]=="免得结构失调"){
    		highlight2('好了，现在关注一下左边赶快进入重点，|已经耽误您很长时间了，先表示歉意。。。|先把他放在这不管他 |还是变长一下，免得结构失调');
    		document.getElementById("hezi1").style.webkitTransform="translateX(98.5%)";
    		document.getElementById("hezi1").style.webkitTransform="rotateY(-10deg)";
    		document.getElementById("hezi1").style.webkitTransformOrigin="right";
    		document.getElementById("hezi1").style.webkitPerspective="1000px";
    		}else if(str[i-2]+str[i-1]=="95"){
    		document.getElementById("hezi1").style.maxHeight="94.5%";
    		highlight('dialog ');
    		highlight3('max-height ');
    		highlight4('95%');
    		}
        i++;  
        t=setTimeout("printer()",6); 
        if(i==x){        	
        	clearTimeout(t);
        	printer2()
        }
    }  
    function gundong(){
    		document.getElementById('hezi1').scrollTop=document.getElementById('hezi1').scrollHeight;
    }
    function highlight(key) {
 		var key = key.split('|');
 		for (var j=0; j<key.length; j++) { 	
 			var keyHigh="<font color='#dd9a10'>"+key[j]+"</font>";			
 			document.body.innerHTML=document.body.innerHTML.replace(new RegExp (key[j],"g"),keyHigh);
 		}
 	}	
 	function highlight2(key) {
	 	var key = key.split('|');
	 	for (var j=0; j<key.length; j++) { 	
 			var keyHigh="<font color='#787362'>"+key[j]+"</font>";			
 			document.body.innerHTML=document.body.innerHTML.replace(new RegExp (key[j],"g"),keyHigh);
 		}
	 }
 	function highlight3(key) {
 		var key = key.split('|');
 		for (var j=0; j<key.length; j++) { 	
 			var keyHigh="<font color='#64D5EA'>"+key[j]+"</font>";			
 			document.body.innerHTML=document.body.innerHTML.replace(new RegExp (key[j],"g"),keyHigh);
 		}
 	}
 	function highlight4(key) {
 		var key = key.split('|');
 		for (var j=0; j<key.length; j++) { 	
 			var keyHigh="<font color='#ad7ada'>"+key[j]+"</font>";			
 			document.body.innerHTML=document.body.innerHTML.replace(new RegExp (key[j],"g"),keyHigh);
 		} 
 	}
 	var z=0;
 	var str2="周亭羽\n教育经历化学工程硕士学位轻化工程学士学位\n渥太华大学四川大学\n学习2年学习3年\n毕业于2015年6月毕业于2014年6月\n应聘职位：web前端开发\n基本技能：html5     \ncss3      \njavascript     \nphotoshop      \njquary    \n荣誉2010-2011四川大学优秀学员       \n2010-2011四川大学单项一等奖学金   \n2010-2011四川大学华南杰出奖学金三    \n2012-2013四川大学单项二等奖学金\n";
 	var str2 = str2.split('');
 	var y=str2.length;
 	function printer2(){
 		document.getElementById("text2").innerHTML=document.getElementById("text2").innerHTML+str2[z];
 		z++;  
        q=setTimeout("printer2()",6);
        if(z==y){  
        	clearTimeout(q);
        	document.getElementById("text3").style.display="block";
        }
 	}