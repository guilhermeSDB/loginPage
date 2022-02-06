$(document).ready(function(){

    if(localStorage.getItem('user') != '' && localStorage.getItem('user') != null){
        $('form#card_').css('display','flex')
        $('.alreadyRegistered').css('display','block')     
        var user = localStorage.getItem('user');
        let divUser = '.userInfo';
        let userName = `<h2>${user}</h2>`;
        let userNameButton = `<button class="changeUser">Não é ${user}?</button>`;        

        $(divUser).prepend(userName);
        $(divUser).append(userNameButton);
    }else{
        $('form#forms_').css('display','flex')
        $('.firstAccess').css('display','block')  
    }

    $('.changeUser').on('click' , function(){
        $('.card-groups').css('display','none')
        $('form#form_').css('display','flex')
        $('.firstAccess').css('display','block') 
        localStorage.setItem('user','');
    })

    $('.nav_forms h3').on('click', function(e){
        var target = e.target;
        $('h3').css('border-image-width','0')
        $(target).css('border-image-width','1').addClass('border-active')
    })

    $('#loginButton').on('click', function(){
        let userName = $('input#loginName').val();
        localStorage.setItem('user',userName);
        console.log(userName)
    })

})