$(".user-delete").on("click",function(){
    console.log("user deleted");
});

$(".user-absent").on("click",function(){
    console.log("user absent");
});

$(".user-remind").on("click",function(){
    console.log("email envoyé");
});
var moreUsersShown=false;
$(".other-users").hide();

$(".more-users-btn").on("click",function(){
    if(moreUsersShown)
    $(".other-users").hide();
    else
        $("other-users").show();
    moreUsersShown=!moreUsersShown;
})