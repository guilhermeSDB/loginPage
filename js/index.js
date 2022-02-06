$(document).ready(function(){
    localStorage.setItem('user', '')

    if(localStorage.getItem('user').length > 0 && localStorage.getItem('user') != undefined){
        $('form#card_').css('display','flex')
        $('.alreadyRegistered').css('display','block')     
        var user = localStorage.getItem('user');
        let divUser = '.userInfo';
        let userName = `<h2>${user}</h2>`;
        let userNameButton = `<button class="changeUser">Não é ${user}?</button>`;        

        $(divUser).prepend(userName);
        $(divUser).append(userNameButton);
    }else if(localStorage.getItem('user') == ''){
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

    $('button#loginButton').on('click', function(){
        let userName = $('input#loginName').val();
        localStorage.setItem('user',userName);
        console.log(userName)
        window.location.reload(true)
    })




})