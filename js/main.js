$(function(){
    //TODO::finish allerts
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
            $(".other-users").show();
            moreUsersShown=!moreUsersShown;
    })
    $(".btn-reset-pass").on("click",function(){
        console.log("btn reset pass");
    })
    // admin prefsa nd allergies
    $(".btn-action-del-pref").on("click",function(){
        console.log("delete pref");
        Swal.fire(
            'Réussite!',
            'Préference bien supprimé',
            'success'
        );
        $(this).parent().parent().fadeOut();
    })
    $('.btn-action-edit-pref').on("click",function(){
        console.log("edit pref");
        window.location.href="admin-modifier preference.html";
    })

    $(".btn-action-edit-allerg").on("click",function(){
        console.log("edit allerg");
        window.location.href="admin-modifier-allergie.html";
    })

    $(".btn-action-del-allerg").on("click",function(){
        console.log("del allegie");
        Swal.fire(
            'Réussite!',
            'Allérgie bien supprimé',
            'success'
        );
        $(this).parent().parent().fadeOut();
    });
});