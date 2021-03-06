<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="description" content="Portfolio">
	<meta name="keywords" content="Portfolio, backend web developer">
	<meta name="author" content="Erwin Korsten">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Portfolio of Erwin Korsten</title>
	<link href="css/home.css" rel="stylesheet" type="text/css" media="all" />
	<link href="css/header.css" rel="stylesheet" type="text/css" media="all" />
	<link href="css/sidemenu.css" rel="stylesheet" type="text/css" media="all" />
	<link href="css/fadeout.css" rel="stylesheet" type="text/css" media="all" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,400i,700,700i"
	 rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
	 integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
	 crossorigin="anonymous">
</head>

<body>
	<svg class='load-page'></svg>
	<header id='header'>
		<div></div>
		<div class='navigation'>
			<div class='socialmedia'>
				<a href='https://www.speedrun.com/user/Aureus_Lunae' class='fas fa-flag-checkered' target='_blank'></a>
				<a href='https://github.com/Aureus-Lunae' class='fab fa-github' target='_blank'></a>
				<a href='https://twitter.com/Aureus_Lunae' class='fab fa-twitter' target='_blank'></a>
			</div>
			<!-- Menu -->
			<div id='menuburger'>
				<input type='checkbox' />
				<span></span>
				<span></span>
				<span></span>
				<ul id='menu'>
					<li><a onclick="navlinks('home')" href='#home'>Home</a></li>
					<li><a onclick="moveToPage('projects.html', 'projects')">Projects</a></li>
					<li><a onclick="moveToPage('aboutme.html', 'about')">About</a></li>
					<li><a onclick="navlinks('contact')" href='#contact'>Contact</a></li>
				</ul>
			</div>
		</div>
	</header>

	<section id='home'>
		<a name='home'></a>

		<div class='twinkling'></div>

		<div class='container'>
			<div class='content'>
				<div class='titles'>Erwin<br /> Korsten
				</div>
				<span class='gold-dark'></span>
				<span class='gold-dark'></span>
				<div class='subtitle'>
					Junior<br />
					Web Developer
				</div>
			</div>
		</div>

		<div class='extra'>
		</div>
	</section>

	<section id='projects'>
		<a name='projects'></a>

		<div class='twinkling'></div>

		<div class='container'>
			<div class='content'>
				<div class='titles'>Projects
				</div>
				<span class='gold-dark'></span>
				<span class='gold-light'></span>
				<div class='subtitle'>
					Bots and websites
				</div>
			</div>
		</div>

		<div class='extra'>
		</div>
	</section>

	<section id='about'>
		<a name='about'></a>

		<div class='twinkling'></div>

		<div class='container'>
			<div class='content'>
				<div class='titles'>About me</div>
				<span class='gold-light'></span>
				<span class='gold-light'></span>
				<div class='subtitle'>
					<div id='aboutme'></div>
				</div>
			</div>
		</div>

		<div class='extra'>
		</div>
	</section>

	<section id='contact'>
		<a name='contact'></a>

		<div class='twinkling'></div>

		<div class='container'>
			<div class='content'>
				<div class='titles'>Get in touch
				</div>
				<span class='gold-light'></span>
				<span class='gold-dark'></span>
				<div class='subtitle'>
					mw.korsten@gmail.com
				</div>
			</div>
		</div>

		<div class='extra'>
		</div>
	</section>

	<div id='leftmenu'>
		<ul>
			<li><a onclick="navlinks('home')" href='#home' class='leftnav home'></a></li>
			<li><a onclick="navlinks('projects')" href='#projects' class='leftnav projects'></a></li>
			<li><a onclick="navlinks('about')"  href='#about' class='leftnav about'></a></li>
			<li><a onclick="navlinks('contact')"  href='#contact' class='leftnav contact'></a></li>
		</ul>
	</div>

	<div id='moon-container'>
		<div class='container'></div>
		<div class='extra'>
			<div class='moon-freya-perspective'>
				<figure class='moon-freya'></figure>
			</div>
		</div>
	</div>


	<script src='js/pagechanger.js'></script>
	<script src='js/pageanimations.js'></script>
	<script src='js/scroll.js'></script>
	<script src='js/moon.js'></script>

</body>

</html>