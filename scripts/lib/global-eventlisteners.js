

// BIND EVENT HANDLER TO MULTIPLE IDENTICAL CLASSES >>>>>>>

function createClickEvent(targetClass, parentId, executedFunction) {
  // get parent of classes and bind eventListener to it
  document.querySelector(parentId).addEventListener("click", function(event) {
    // define clicked element as "target"
    event = event || window.event
    var target = event.target || event.srcElement
      // count upwards from "target", until previously defined parent element is reached
    while (target != document.querySelector(parentId)) {
      // test if element meets defined requirements (class name == ?)
      if (target.classList.contains(targetClass)) {
        // IF RETURNS TRUE... finally execute code on found element
        executedFunction(target)
      }
      // IF RETURNS FALSE... rerun while loop
      target = target.parentNode
    }
  });
}




// TOGGLE DATA-STATE >>>>>>>

function toggleState(elem, dataset, one, two) {
  elem.setAttribute('data-'+dataset, elem.getAttribute('data-'+dataset) === one ? two : one);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

// lightbox on
