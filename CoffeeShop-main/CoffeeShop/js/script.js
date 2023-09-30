$(document).ready(function(){
	$('.header__slider').slick({
        arrows:false,
		dots:false,
		slidesToShow:1,
    	slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed: 2000,
	});
});


$(document).ready(function(){
	$('.main__slider').slick({	
		slidesToShow: 3,
    	slidesToScroll: 3,
    	autoplay: true,
    	arrows:false,
    	dots:true,
    	autoplaySpeed: 3000,

		variableWidth: false,
		variableHeight: false,
		mobileFirst: false,
		infinite: true,
		centerMode:false,
		
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: false
				}
		  	}
		]	
	});
});


function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.main__icon-wrapper');
  for (let elm of elements) {
	observer.observe(elm);
  }

  //var memberNumber = Number(prompt("Введите первое число для сравнения"))

  //var secondNumber = Number(prompt("Введите второе число для сравнения"))

  //function sravnitel (add){
	//if(memberNumber > secondNumber){
	//	alert("Число " + memberNumber + " больше")
	//}

	//else{
	//	alert("Число " + memberNumber + " меньше")
	//}
  //}
//sravnitel()

/*var language = prompt("Type your language");

switch (language){
	case "English":
	console.log("Hello");
	break;

	case "Spanish":
	console.log("Hola");
	break;
}*/

function getTheDate (){
	var rightNow = newDate();
	document.write(rightNow.toDateString());
}

getTheDate();