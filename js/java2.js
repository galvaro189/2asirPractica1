$(function () {
    $("#f1color").on("click",function(e){
        location="divas/aretha.html"
    });

    $("#f2color").on("click",function(e){
        location="divas/dionne.html"
    });

    $("#f3color").on("click",function(e){
        location="divas/diana.html"
    });

    $("#f4color").on("click",function(e){
        location="divas/etta.html"
    });

    $("#f1color").on("mouseover",function () {
        $("h1").text("Aretha Franklin") //$(this).data("texto")
    })
    $("#f2color").on("mouseover",function () {
        $("h1").text("Dionne Warwick")
    })
    $("#f3color").on("mouseover",function () {
        $("h1").text("Diana Ross")
    })
    $("#f4color").on("mouseover",function () {
        $("h1").text("Etta James")
    })
});