//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD4fi89Xoj4_py_lOB52GmtOE9zxHHSHn4",
      authDomain: "kwitterapp-dabd7.firebaseapp.com",
      databaseURL: "https://kwitterapp-dabd7-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-dabd7",
      storageBucket: "kwitterapp-dabd7.appspot.com",
      messagingSenderId: "1006678142041",
      appId: "1:1006678142041:web:0e7c038b84c1a2e383d548"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
};

function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name1:user_name, message:msg, like:0 }); document.getElementById("msg").value = ""; }
function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
     //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1 = message_data['name1'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;

        //End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
   });

}

