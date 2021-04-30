
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
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





user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() { room_name = document.getElementById("room_name").value; 

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() { firebase.database().ref("/").on('value',
 function(snapshot) { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey;
      
      // Room_names will be having the name of the room which is coming from the firebase. 
      console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;  }); }); } getData();


function redirectToRoomName(name)

 { console.log(name); localStorage.setItem("room_name", name); 
 window.location = "kwitter_page.html";}

 