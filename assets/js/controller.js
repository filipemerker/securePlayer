var music 	 = new Audio(),
    getToken = function () {
    var nameEQ = "token=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

$('a.changer').on('click', function(){
	var id = $(this).data('id'),
		tk = getToken();
	music.src = 'http://localhost/musicPlayer/music.php?id='+id+'&token='+tk;
	$('#nome').val($(this).data('nome'));
});
$('#play').on('click', function(){
	music.play();
});
$('#pause').on('click', function(){
	music.pause();
});