var OBJ = {};
var desenvolvimento = false;
OBJ.global = {
	init : function(){
		_O = this;
		_O.estrutura();
	},
	estrutura: function(){
		$('.header').height($(window).innerHeight()+20);
		/*Set the loader scrollless and put page to top*/
		if (desenvolvimento==false) {
			$stop = true;
			$top = setInterval(function(){
				$(document).scrollTop(0);
			},14);
			$(document).on('mousewheel DOMMouseScroll onmousewheel',function(){
			    if($stop){
			        return false;
			    }
			});
		};


		/*does the inital animation magic*/

    	TweenMax.fromTo($('.header .logo'), 1, {alpha: 0, y: -55, rotationY:180},{alpha: 1, y: 0, rotationY:360, transformOrigin: '50%', delay: .6, ease: Circ.easeOut, onComplete: function(){
    		TweenMax.to($('.loadar'), .4, {alpha: 1});
			$('.toload').Mloader({
			    onReady: function() {
			    	$('.back').children().remove();
	    			TweenMax.to($('.loadar'), .4, {alpha: 0, onComplete: function(){
	    				_O.showBanner();
	    				_O.parallax();
	    				$('.grid').masonry({
	    				  itemSelector: '.imgHolder'
	    				});
	    			}});
			    },
			    transformTo: 'background'
			});
    	}});

	},
	showBanner: function(){
		TweenMax.fromTo($('.courtain'), .8, {'display': 'block', x: -$(window).innerWidth()}, {x: '0', ease: Quart.easeOut, onComplete: function(){
			$('.back').show();
			TweenMax.to($('.courtain'), 1, {x: $(window).innerWidth()+500, ease: Quart.easeIn, onComplete: function(){
				$stop = false;
				TweenMax.to($('.header .mouse'), .4, {alpha: 1, delay: .2, onComplete: function(){
					$('.header .mouse').addClass("mice");
				}});
				clearInterval($top);
			}});
		}});
	},
	parallax: function(){
		var st = $(window).scrollTop();
		var mk = $(window).height() ;
		if(st < mk){
			$('.header .back').css({ 
				'transform' : "matrix(1, 0, 0, 1, 0, "+(st/7)+")"
			}); 
		}
	},
	shorty: function(){
		var fl = $(window).scrollTop();
		var st = $('section.jobs').offset().top;
		var mk = $(window).height();
		var time = 0;
		var anima = function($t, time){
			TweenMax.fromTo($t.find('.ohamy'), .9, {alpha: 0, y: 55, rotationY:0},{alpha: 1, y: 0, rotationY:360, transformOrigin: '50%', delay:time, ease: Back.easeOut, onComplete: function(){
				$t.addClass('pega');
			}});
		};
		if(fl + mk > st + (mk) &&! $('html').hasClass('shorty')){
			$('html').addClass('shorty');
			$('.jobs .imgHolder').each(function(){
				anima($(this), time);
				time = time + 0.15;
			});
		}
	}
}

$(window).on('scroll', function() {
	OBJ.global.parallax($(this));
	OBJ.global.shorty($(this));
});
$(document).on('ready', function(){
	OBJ.global.init();
});