//YOUR FIREBASE LINKS
var firebaseConfig = {
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

user_name = localStorage.getItem("userkey");
room_name = localStorage.getItem("roomkey");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
name=message_data['name'];
message=message_data ['message'];
like=message_data ['like'];
name_with_tag='<h4>' +name+ '<img class="user_tick" src="tick_png"> </h4>';
message_with_tag='<h4 class="message_h4">' +message+ "</h4>";
like_button='<button class="btn btn-warning" id="'+firebase_message_id+'" value="'+like+'" onclick="updateLike(this.id)">';
span_with_tag='<span class="glyphicon glyphicon-thumbs-up">Like:'+like+'</span></button>';

row=name_with_tag + message_with_tag+like_butoon+span_with_tag;
document.getElementById("output").innerHTML += row;



                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id){
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;

      firebase.database().ref(room_nmae).child(message_id.update({
            like : updated_likes 
            
      }))
}

function logout() {
      localstorage.removeItem("user_key");
      localstorage.removeItem("room_key");
      window.location = "index.html"
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });


}