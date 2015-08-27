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
<a class="changer" href="javascript:void(0)" data-id="1" data-nome="hip hop track">Musica1 - hiphop</a><br />
<a class="changer" href="javascript:void(0)" data-id="2" data-nome="rap track">Musica2 - rap</a><br />
<a class="changer" href="javascript:void(0)" data-id="3" data-nome="free falling - tom petty">Musica3 - tom petty</a>
<br /><br />
<input type="text" id="nome" placeholder="Nome da musica" disabled="true"><br /><br />
<input type="button" value="Play()" id="play">
<input type="button" value="Pause()" id="pause">
<script src="https://code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
<script src="assets/js/controller.js" type="text/javascript"></script>
</body>
</html>
