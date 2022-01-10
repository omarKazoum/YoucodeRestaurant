$(function(){
    //admin users manage
    $(".user-delete").on("click",function(){
        console.log("user deleted");
        $(this).parent().parent().parent().fadeOut();
        Swal.fire(
            'Réussite!',
            'Utilisateur bien supprimé',
            'success'
        );
    });

    $(".user-absent").on("click",function(){
        console.log("user absent");
        Swal.fire(
            "Utilisateur est désormais absent!<br><small ='red'>il n\'aura pas lde droit de choisir le plat d\'ajord\'hui</small>",
            '',
            'success'
        );
    });

    $(".user-remind-pass").on("click",function(){
        Swal.fire(
            "Un email a été envoyé à cette utilisateur contenant ses information d'au" +
            "thentification",
            '',
            'success'
        );
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
    $(".btn-reset-pass").css('cursor','pointer');
    $(".btn-reset-pass").on("click",function(){
        Swal.fire(
            '',
            'Votre mot de pass vous a été envoyé par email',
            'success'
        );
    })
    // admin prefs and allergies
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
    //reastau staff menu
    $('.plat-item .btn-circle--delete').on("click",function (e){
        console.log("delete");
        e.preventDefault();
        $(this).parent().fadeOut();
        Swal.fire(
            'Réussite!',
            'Plat bien supprimé',
            'success'
        );
    })
    $('.plat-item .btn-circle--edit').prop('href',"restau_staff-modifier-un-plat.html");
});