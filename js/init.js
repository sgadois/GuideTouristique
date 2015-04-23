/*
	Halcyonic by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'css/style.css' },
			'desktop':	{ range: '737-', href: 'css/style-desktop.css', containers: 1200, grid: { gutters: 25 } },
			'1000px':	{ range: '737-1200', href: 'css/style-1000px.css', containers: 1000, grid: { gutters: 20 }, viewport: { width: 1080 } },
			'mobile':	{ range: '-736', href: 'css/style-mobile.css', containers: '100%!', grid: { collapse: true, gutters: 20 }, viewport: { scalable: false } }
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navPanel: {
					hidden: true,
					breakpoints: 'mobile',
					position: 'top-left',
					side: 'left',
					animation: 'pushX',
					width: '80%',
					height: '100%',
					clickToHide: true,
					html: '<div data-action="navList" data-args="nav"></div>',
					orientation: 'vertical'
				},
				titleBar: {
					breakpoints: 'mobile',
					position: 'top-left',
					side: 'top',
					height: 44,
					width: '100%',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'
				}
			}
		}
	});

})(jQuery);



jQuery( document ).ready(function() {

/*
	1. Add your link as a new var
	2. Add it to html() fonction at the good place !
*/

var nav1 = "<a href=\"index.html\">Accueil</a>";
var nav2 = "<a href=\"detente.html\">Espace détente</a>";
var nav3 = "<a href=\"culture.html\">Culture</a>";
var nav4 = "<a href=\"famille.html\">Famille</a>";

jQuery("#nav").html(nav1 + nav2 + nav3 + nav4);
});