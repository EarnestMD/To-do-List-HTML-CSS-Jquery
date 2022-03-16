$(document).ready(function(){

     


    $("#NewTask").click(function () { 
        $('#AjoutTask').toggle();
        $('#Container').toggle();
    });

    $('#valider').click(function(){
        if($('#input').val()!=""){
            let valeur = $('#input').val()
            $('#list').append('<li>' + valeur + '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash-can"></i></li>');
            $(input).val("")
            $('#AjoutTask').toggle();
            $('#Container').toggle();
            $('#input').css("border-color", "hsl(267, 73%, 71%)")
        }
        else{
             $('#input').css("border-color", "red")
        }
    })

    $('#input').change(function(){
        $('#input').css("border-color", "hsl(267, 73%, 71%)")
    })

    $('#retour').click(function(){
        $('#AjoutTask').toggle();
        $('#Container').toggle();
        $('#input').css("border-color", "hsl(267, 73%, 71%)")
        $(input).val("")
    })

    $('#list').on('click','.fa-check', function () {
        $(this).parent('li').toggleClass('checked');

});
    // cli
    $('#list').on('click', '.fa-trash-can', function () {
        $(this).parent('li').fadeOut(200);
    })

});