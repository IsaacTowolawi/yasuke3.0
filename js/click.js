$(function(){
    $(".toggle").on ("click", function(){

        if($(".item").hasClass("actives")){
            $(".item").removeClass("actives")
        }
        else{
            $(".item").addClass("actives")
        }

    });
});