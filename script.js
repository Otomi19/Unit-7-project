
$("button").click(function() {
   let fav = $(".meal").val();
	console.log(fav);
    alert(fav);
		$(".vote-result").text(fav);  
    $(".meal").val("");
     //$('img').attr("src","https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg");// Note sure
    let snackk = $(".snack").val();
    console.log(snackk);
    alert(snackk);
    $(".votte-result").text(snackk);
    alert("Thanks for voting");
    $(".snack").val("");
});