exports.Menu = function () {
	var toggle = document.getElementById('togglemenu');
	var menu = document.getElementById('main-menu');

	if (toggle) {
		toggle.addEventListener('click', function () {
			if (menu) {
				menu.classList.toggle('active');
			} else {
				console.log("You're missing the #menu ID");
			}
		});
	} else {
		console.log("You're missing the #togglemenu ID");
	}
};

exports.Accordion = function () {
	var toggles = document.querySelectorAll('.accordion .toggle');

	if (toggles) {
		toggles.forEach((toggle) => {
			toggle.addEventListener('click', () => {
				var accordion = toggle.closest('.accordion');
				if (accordion) {
					accordion.classList.toggle('active');
				}
			});
		});
	}
};
