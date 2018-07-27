var config = {
    apiKey: "AIzaSyBPmaxYBJK9GjriW4b14N_cOEuCTJ7va74",
    authDomain: "wallpaperapp-491e2.firebaseapp.com",
    databaseURL: "https://wallpaperapp-491e2.firebaseio.com",
    projectId: "wallpaperapp-491e2",
    storageBucket: "wallpaperapp-491e2.appspot.com",
    messagingSenderId: "690442892897"
};

firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    });
});

$("#btn-logout").click(function(){
    firebase.auth().signOut();
})

function switchView(view) {
    $.get({
        url: view,
        cache: false
    }).then(function (data){
        $("#container").html(data);
    });
}