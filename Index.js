$("#dropdownButton").on("click", function(){
    console.log("hello1");
    if($(".dropdownItem").css("display")=="block"){
        console.log("hello2");
        $(".dropdownItem").css("display", "none");
        $("#dropdownMenu").css("display", "none");
    }
    else {
        console.log("hello3");
        $(".dropdownItem").css("display", "block");
        $("#dropdownMenu").css("display", "block");
    }
})