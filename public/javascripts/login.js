$(document).ready(function(){
    $('#login').on('click', function(){
        var socket = io.connect('http://alshaddai.kd.io/');
        socket.emit('login',{
            username: $('.login_username').val(),
            password: $('.login_password').val()
        })
    });
})