<html>
<head>
	<title>Music Player with security system</title>
</head>
<body>
	<?php
		if (!isset($_COOKIE['token'])) {
			setcookie('token', '1');
		}
	?>
<a class="changer" href="javascript:void(0)" data-id="1" data-nome="Nome via php hip hop">Musica1</a>
<a class="changer" href="javascript:void(0)" data-id="2" data-nome="Nome via php rap">Musica2</a><br /><br />
<input type="text" id="nome" placeholder="Nome da musica" disabled="true"><br /><br />
<input type="button" value="Play()" id="play">
<input type="button" value="Pause()" id="pause">
<script src="https://code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
<script src="assets/js/controller.js" type="text/javascript"></script>
</body>
</html>