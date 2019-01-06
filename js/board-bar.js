/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// want to know when you are being closed?
window.addEventListener('unload', function(e) {
  // Our board bar is being closed, clean up if we need to
});

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
  console.log('loaded');

  function checkBoardLoad(element) {
		console.log('checking if ' + element + ' is loaded');
		var el = document.querySelector(element);
		if (el) {
			console.log(element + ' is loaded');
			// addButton(el);
			// runScript(el);	
		} else {
			console.log(element + ' not loaded');
			setTimeout(function() {
				checkBoardLoad(element);	
			}, 500);
		}
	}
	
	checkBoardLoad('.board-header-btns.mod-right');	
});
