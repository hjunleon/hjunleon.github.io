	function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
	document.getElementById("openSide").style.opacity="0";
 // document.getElementById("main").style.marginLeft = "15%";
//document.getElementById("titlePage").style.paddingLeft="50vw";
//document.getElementById("titlePORTFOLIO").style.paddingTop = "16.734vw";
//document.getElementById("titlePORTFOLIO").style.fontSize = "6vw";
//document.getElementById("titleSkills").style.fontSize = "1vw";
//document.getElementById("titleName").style.fontSize = "2vw";
// change font size 15%, possibly padding top percentage
		
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
	document.getElementById("openSide").style.opacity="1";
//  document.getElementById("main").style.marginLeft = "0";
//  document.getElementById("titlePage").style.paddingLeft="60vw";
//  document.getElementById("titlePORTFOLIO").style.paddingTop = "19.6875vw";
//document.getElementById("titlePORTFOLIO").style.fontSize = "9vw";
//document.getElementById("titleSkills").style.fontSize = "1.5vw";
//document.getElementById("titleName").style.fontSize = "2.6vw";
}				

window.onscroll = function() {scrollFunction()};
	//  alert(window.outerHeight);
	//  alert(window.outerWidth);
	//  alert(document.getElementById("aboutPage").scrollTop);
	//alert(document.body.scrollTop);
function scrollFunction() {
  if (document.body.scrollTop >1.2*window.outerHeight || document.documentElement.scrollTop> 1.2*window.outerHeight) {
    document.getElementById("backToTop").style.display = "block";
	for (var x = 0; x < document.getElementById("openSide").querySelectorAll("div").length;x++){
		document.getElementById("openSide").querySelectorAll("div")[x].style.backgroundColor = "black";
	}
	console.log(window.innerHeight);
  } else {
    document.getElementById("backToTop").style.display = "none";
	for (var x = 0; x < document.getElementById("openSide").querySelectorAll("div").length;x++){
		document.getElementById("openSide").querySelectorAll("div")[x].style.backgroundColor = "white";
	}
	}
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  scrollToY(0, 1500, 'easeInOutQuint');
  //document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

    
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}


	
	
	//lazy load
var timer;
function blurImage(){
	 var wT = window.pageYOffset, wB = wT + window.innerHeight, cRect, pT, pB, p = 0;
	var lazyLoadImages=document.getElementsByClassName("preview");
	var lazyLoadContainers = document.getElementsByClassName("blurImage");
	pItem = ""||lazyLoadImages;

	
//	console.log("x "+x);
	console.log("pItemLen "+pItem.length);
  while (p < pItem.length) {
//
	console.log("p "+p);
    cRect = pItem[p].getBoundingClientRect();
	console.log("cRect top: " + cRect.top);
	console.log("cRect bottom: " + cRect.bottom);
    pT = wT + cRect.top;
    pB = pT + cRect.height;
	console.log("pT: " + pT);
	console.log("pB: " + pB);
	console.log("wT: " + wT);
	console.log("wB: " + wB);
	console.log(pItem[p]);
//
    if (/*wT < pB && */wB > pT + 100) {
      loadFullImage(lazyLoadContainers[p]);
	p++;
   //   pItem[p].classList.remove('replace');
    }
    else p++;
  }
}
function loadFullImage(item){
//	 if (!item || !item.href) return;

  // load image
  var img = new Image();
 // if (item.dataset) {
  //  img.srcset = item.dataset.srcset || '';
   // img.sizes = item.dataset.sizes || '';
 // }
  img.src = item.getAttribute("data-src");
  img.className = "reveal";
  console.log(img);
  if (img.complete) {
	addImg();
	console.log("frstFired");
	}
  else {
  img.onload = addImg;
  console.log("secondFired");
  }
   function addImg() {
    // disable click
    item.addEventListener('click', function(e) { e.preventDefault(); }, false);
	console.log(img);
	var pImg = item.querySelector('img.preview');
	item.removeChild(pImg);
	//item.appendChild(img);//.onload = function(){
	//	var pImg = item.querySelector('img.preview');
	//	console.log("pimg" + pImg);
	//	item.removeChild(pImg);
	//}
	//var pImg = item.querySelector('img.preview');
	//console.log("pimg" + pImg);
	//item.removeChild(pImg);
	//	console.log(item);
//	console.log(img);
    // add full image
    item.appendChild(img).addEventListener('animationend', function(e) {
     //  remove preview image
   //   var pImg = item.querySelector('img.preview');
		console.log(pImg);
		if (pImg) {
			e.target.alt = pImg.alt || '';
      //  item.removeChild(pImg);
			e.target.classList.remove('reveal');
		}
		item.className="";
	});
  }
}


	
	
	
	
	
	
document.body.onload = function(){
	let promise1 = new Promise(function(res,rej){
		scrollToY(0, 1500, 'easeInOutQuint');
		 setTimeout(()=>{res("Success!");},2000);
	})
	//scrollToY(0, 1500, 'easeInOutQuint')
	//console.log("lazyLoadImages "+lazyLoadImages);
	//for (var x=0;x<lazyLoadImages.length;x++){ 
	blurImage();
	//	lazyLoadImages[x].setAttribute("src",lazyLoadImages[x].getAttribute("data-src"));
//	}
	function scroller(e) {
  timer = timer || setTimeout(function() {
   timer = null;
//	for (var x=0;x<lazyLoadImages.length;x++){
		requestAnimationFrame(blurImage);
//	}
  }, 300);
}
	window.addEventListener('scroll', scroller, false);
	window.addEventListener('resize', scroller, false);
promise1.then(function(successMessage){

//console.log(successMessage);
var sideLinks = document.querySelectorAll('#mySidenav div');
var pages = document.querySelectorAll('.page');
	console.log(pages);
//alert(pages[0].scrollHeight);
	function totalScrollHeight(x){
		var totalHeight=document.getElementById("titlePage").scrollHeight;
		for (var i = 0; i< x; i++){
			totalHeight +=pages[i].scrollHeight;
			//alert(totalHeight);
		}
		return totalHeight;
	}
var totalScroll;
var initialScroll = new Array();
	/*initialScroll[0] = document.getElementById("titlePage").scrollHeight;
	initialScroll[1] = totalScrollHeight(1);
	initialScroll[2] = totalScrollHeight(3);
	initialScroll[3] = totalScrollHeight(7);
	initialScroll[4] = totalScrollHeight(9);
	initialScroll[5] = totalScrollHeight(10);
	initialScroll[6] = totalScrollHeight(12);
	initialScroll[7] = totalScrollHeight(13);*/
initialScroll[0] = document.getElementById("titlePage").getBoundingClientRect().top;
initialScroll[1] = pages[1].getBoundingClientRect().top;
initialScroll[2] = pages[3].getBoundingClientRect().top;
initialScroll[3] = pages[7].getBoundingClientRect().top;
initialScroll[4] = pages[9].getBoundingClientRect().top;
initialScroll[5] = pages[10].getBoundingClientRect().top;
initialScroll[6] = pages[12].getBoundingClientRect().top;
initialScroll[7] = pages[13].getBoundingClientRect().top;
initialScroll[8] = pages[14].getBoundingClientRect().top;
//alert("div: "+pages[13].querySelector('div').getBoundingClientRect().top+"      initial: "+totalScrollHeight(13));
sideLinks[0].onclick = function () {
   //document.getElementById("aboutPage").scrollIntoView({ behavior: 'smooth' });  
	scrollToY(document.getElementById("titlePage").scrollHeight,1500,'easeInOutQuint');
//	pages[0].scrollIntoView({ behavior: 'smooth' });
   }
sideLinks[1].onclick = function () {
	totalScroll = totalScrollHeight(1);
	scrollToY(initialScroll[1],1500,'easeInOutQuint');
  // pages[1].scrollIntoView({ behavior: 'smooth' });  
}
sideLinks[2].onclick = function () {
 //  document.getElementById("socialMarket").scrollIntoView({ behavior: 'smooth' });  
	totalScroll = totalScrollHeight(3);
	scrollToY(initialScroll[2],1500,'easeInOutQuint');
}
sideLinks[3].onclick = function () {
//   document.getElementById("graphic").scrollIntoView({ behavior: 'smooth' });  
	totalScroll = totalScrollHeight(7);
	scrollToY(initialScroll[3],1500,'easeInOutQuint');
}
sideLinks[4].onclick = function () {
 //  document.getElementById("infoPackage").scrollIntoView({ behavior: 'smooth' });  
//	scrollToY(7850,1500,'easeInOutQuint');
		totalScroll = totalScrollHeight(9);
	scrollToY(initialScroll[4],1500,'easeInOutQuint');

 }
sideLinks[5].onclick = function () {
//   document.getElementById("publication").scrollIntoView({ behavior: 'smooth' });  
	totalScroll = totalScrollHeight(10);
	scrollToY(initialScroll[5],1500,'easeInOutQuint');
  }
sideLinks[6].onclick = function () {
//   document.getElementById("wayFind").scrollIntoView({ behavior: 'smooth' });  
//	scrollToY(10350,1500,'easeInOutQuint');
	totalScroll = totalScrollHeight(12);
	scrollToY(initialScroll[6],1500,'easeInOutQuint');
  }
sideLinks[7].onclick = function () {
 // document.getElementById("web-design").scrollIntoView({ behavior: 'smooth' });  
//	scrollToY(11170,1500,'easeInOutQuint');
	totalScroll = totalScrollHeight(13);
	scrollToY(initialScroll[7],1500,'easeInOutQuint');
}
sideLinks[8].onclick = function () {
//  document.getElementById("web-design").scrollIntoView({ behavior: 'smooth' });  
//	scrollToY(11170,1500,'easeInOutQuint');
	//totalScroll = totalScrollHeight(14);
	scrollToY(initialScroll[8],1500,'easeInOutQuint');
}
	
});
	
}
