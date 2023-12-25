//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyC33cgXJ6jmNW4II0V0FbHdJxBFdN4Fxlg",
      authDomain: "kwitter-2-bfcd8.firebaseapp.com",
      databaseURL: "https://kwitter-2-bfcd8-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-bfcd8",
      storageBucket: "kwitter-2-bfcd8.appspot.com",
      messagingSenderId: "287227721945",
      appId: "1:287227721945:web:4b4ea9cd5797a75593e6c8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userkey");
document.getElementById("user_name").innerHTML = "Welcome " + username;

function addRoom() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "new room created"
      });
      localStorage.setItem("roomkey", roomname);
      window.location = "kwitter_msg.html"

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  main_foldername = childKey;
                  console.log(main_foldername)
                  divtag = '<div class="room_name" onclick="redirect(this.id)" id="' + main_foldername + '">' + main_foldername + '</div><hr>';
                  document.getElementById("output").innerHTML += divtag;

                  
                  //Start code

                  //End code
            });
      });

}
getData();
function redirect(room_id) {
      localStorage.setItem("roomkey",room_id);
      window.location="kwitter_msg.html"
}