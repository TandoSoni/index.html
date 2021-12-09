<!DOCTYPE html>
<html>
<head>
	<title>Profile for Tando Soni</title>


	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />

	<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Russo+One&display=swap" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="default.css">
	<link id="theme-style" rel="stylesheet" type="text/css" href="">
</head>
<body>

	<section class="s1">
		<div class="main-container">
			<div class="greeting-wrapper">
				<h1>Hi, I'm Tando Soni</h1>
			</div>


			<div class="intro-wrapper">
				<div class="nav-wrapper">

					<!-- Link around dots-wrapper added after tutorial video -->
					<a href="index.html">
						<div class="dots-wrapper">
							<div id="dot-1" class="browser-dot"></div>
							<div id="dot-2" class="browser-dot"></div>
							<div id="dot-3" class="browser-dot"></div>
						</div>
					</a>
					

					<ul id="navigation">
						<li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#post">Projects</a></li>   
						<li><a href="index.html#contact">Contact</a></li>  
					</ul>
				</div>

				<div class="left-column">
					<img id="profile_pic" src="images/Tando.jpg">
					<h5 style="text-align: center;line-height: 0;">Personalize Theme</h5>

					<div id="theme-options-wrapper">
						<div data-mode="light" id="light-mode" class="theme-dot"></div>
						<div data-mode="blue" id="blue-mode" class="theme-dot"></div>
						<div data-mode="green" id="green-mode" class="theme-dot"></div>
						<div data-mode="purple" id="purple-mode" class="theme-dot"></div>
					</div>

					<p id="settings-note">*Theme settings will be saved for<br>your next vist</p>
				</div>

				<div class="right-column">

					<div id="preview-shadow">
						<div id="preview">
							<div id="corner-tl" class="corner"></div>
							<div id="corner-tr" class="corner"></div>
							<h3>What I Do</h3>
							<p>I am a Front End Developer, Looking to upgrade my skills on programming and teach those interested to be Programmers.</p>
							<div id="corner-br" class="corner"></div>
							<div id="corner-bl" class="corner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="s2">
		<div class="main-container">
			<a href=""></a>  
			<div class="about-wrapper">
				
				<div class="about-me">
					<a name="about"></a>
					<h4>More about me</h4>

					<p>I love Designing and Developing new Websites and mobile Applications just to upgrade and sharpen my skills.</p>

					<p>I still take interviews in search of a great team & projects that interest me.</p>


					<hr>

					<h4>TOP EXPERTISE</h4>

					<p>Front End Developer with primary focus on HTML, CSS Javascript, Java and Python busy upgrading my skills on Django + React Native: <a target="_blank" href="resume.pdf">Download Resume</a></p>

					<div id="skills">
						<ul>
							<li>Python</li>
							<li>Java</li>
							<li>JavaScript</li>
							<li>HTML/CSS</li>
							<li>React</li>
						</ul>

						<ul>
							<li>C++</li>
							<li>VB</li>
							<li>SQL</li>
							<li>.NET</li>
							<li>C#</li>
						</ul>

					</div>

				</div>

				  <script>
                      
						var i = 0;
						var images = [];
						var time = 1000;


						images[0] = 'linkedin.jpg';
						images[1] = 'github.jpg';


						function changeImg(){
						document.social_img.src = images[i];

						if(i < images.length - i){
							i++;
						} else {
							i = 0;
						}

						setTimeout("changeImg()", time);
						}

				  </script>

				  
				<div class="social-links">
				<div class="fade">
					<div class="mySlides">
					     <img id="social_img" src="images/linkedin.jpg">
					<img id="social_img" src="images/github.jpg">
					</div>
					<h3>Find me on LinkedIn & GitHub</h3>

					<a target="_blank" href="https://www.linkedin.com/in/tando-soni-036608141">LinkedIn: @Tando Soni</a>
					<br>
					<a target="_blank" href="https://Facebook.com/Thando Soni">GitHub: @Thando soni</a>
				</div>
			</div>

		</div>
	</section>

	<section class="s1">
		<div class="main-container">
			<a href=""></a>
			<h3 style="text-align: center;">Some of my past projects</h3>

			<div class="post-wrapper">
                 <a name="post"></a>
				<div>
					<div class="post">
						<img class="thumbnail" src="images/host.jpg">
						<div class="post-preview">
							<h6 class="post-title">An example of Web Hosting Website</h6>
							<p class="post-intro">Designed built Website for show casing my skills</p>
							<a href="home.html">View Project</a>
						</div>
					</div>
				</div>

				<div>
					<div class="post">
						<img class="thumbnail" src="images/Ecom.jpg">
						<div class="post-preview">
							<h6 class="post-title">Online Store - CyberSonicDesigns</h6>
							<p class="post-intro">Online store with other services privided by the company.</p>
							<a href="https://www.cybersonicdesigns.co.za">View Project</a>
						</div>
					</div>
				</div>

				<div>
					<div class="post">
						<img class="thumbnail" src="images/firstprj.jpg">
						<div class="post-preview">
							<h6 class="post-title">Mobile Application</h6>
							<p class="post-intro">A Virtual Real time mobile application for converting Sign Language into words.</p>
							<a href="post.html">View Project</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

	<section class="s2">
		<div class="main-container">
			<a href=""></a>
			<h3 style="text-align: center;">Get In Touch</h3>

			<form id="contact-form">
				<a name="contact"></a>

				<label>Name</label>
				<input class="input-field" type="text" name="name">

				<label>Subject</label>
				<input class="input-field" type="text" name="subject">

				<label>Email</label>
				<input class="input-field" type="text" name="email">

				<label>Message</label>
				<textarea class="input-field" name="message"></textarea>

				<input id="submit-btn" type="submit" value="Send">
			</form>
		</div>
	</section> 

	<script type="text/javascript" src="script.js"></script>
</body>
</html>
