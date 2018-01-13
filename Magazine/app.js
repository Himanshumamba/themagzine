function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




$(document).ready(function(){
$("a").click(function(){
   $("a.active").removeClass("active");
   $(this).addClass("active");
});

	
})