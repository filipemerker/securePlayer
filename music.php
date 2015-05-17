<?php
if(isset($_GET['id']) && isset($_COOKIE['token']) && isset($_GET['token'])){
	$id    = $_GET['id'];
	$tk    = $_GET['token'];
	$tkgt  = $_COOKIE['token'];
	$newtk = intval($_COOKIE['token']) + 1;
	if($tk == $tkgt){
		$track = "assets/music/".$id.".mp3";
	}else{
		$track = null;
	}
	setcookie('token', $newtk);
}else{
	$track = null;
}


if(file_exists($track)) {
    header('Content-type: audio/mpeg');
    header('Content-length: ' . filesize($track));
    header('Content-Disposition: filename="sometrack.mp3"');
    header('X-Pad: avoid browser bug');
    header('Cache-Control: no-cache');
    print file_get_contents($track);
} else {
    echo "no file";
}
?>