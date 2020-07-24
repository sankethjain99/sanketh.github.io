// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLrgznTPnfac7_PYzo5otljDSuz7qUli0",
  authDomain: "myprofile-9eadb.firebaseapp.com",
  databaseURL: "https://myprofile-9eadb.firebaseio.com",
  projectId: "myprofile-9eadb",
  storageBucket: "myprofile-9eadb.appspot.com",
  messagingSenderId: "712574481816",
  appId: "1:712574481816:web:642509f6d12fcb1d71a7ed",
  measurementId: "G-LT0HSRPT6Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



var messagesref = firebase.database().ref('messages');


document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name= getInputVal('name');
    var email= getInputVal('email');
    var comment= getInputVal('comment');
   

   saveMessage(name,email,comment);

  document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
    },5000);

    document.getElementById('contact-form').reset();
    
}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,comment){
    var newMessageRef = messagesref.push();
    newMessageRef.set({
       name: name,
       email: email,
       comment:comment
   });
}