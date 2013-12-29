$(document).ready(function(){
    $('#register').on('click', function(){
        
        var user = $('.registration_username').val();

        var pass = $('.registration_password').val();
        var pass2 = $('.registration_password_repeat').val();
        
        var mail = $('.registration_mail').val();
        var mail2 = $('.registration_mail_repeat').val();

        var usercheck = user !== '';
        var passcheck = pass !== '';
        var passcheck2 = pass === pass2;
        var mailcheck = mail !== '';
        var mailcheck2 = mail === mail2;

        if(!usercheck) {
            $('.registration_username').parent().toggleClass('has-error');}
        if(!passcheck) {$('.registration_password').parent().toggleClass('has-error');}
        if(!passcheck2) {$('.registration_password').parent().toggleClass('has-error');$('.registration_password_repeat').parent().toggleClass('has-error');}
        if(!mailcheck) {$('.registration_mail').parent().toggleClass('has-error');}
        if(!mailcheck2) {$('.registration_mail').parent().toggleClass('has-error');$('.registration_mail_repeat').parent().toggleClass('has-error');}


        var socket = io.connect('http://alshaddai.kd.io/');
        socket.emit('registration',{
        });
    });
});