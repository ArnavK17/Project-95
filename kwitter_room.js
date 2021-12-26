
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDncDWiaR7V_Ciyx0b-o8vuHQE5130Lmzc",
      authDomain: "ckwitter-3c17c.firebaseapp.com",
      databaseURL: "https://ckwitter-3c17c-default-rtdb.firebaseio.com",
      projectId: "ckwitter-3c17c",
      storageBucket: "ckwitter-3c17c.appspot.com",
      messagingSenderId: "987239333996",
      appId: "1:987239333996:web:a24f4c316d41a77a521849"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById('user_name').innerHTML="welcome "+user_name+"!";
    function addRoom(){
          roomname= document.getElementById("room_name").value
          firebase.database().ref("/").child(roomname).update({
                purpose:"adding room name"
          })
          localStorage.setItem("room_name",roomname);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
      function redirectToRoomName(name){
console.log("name");
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
      }
getData();
