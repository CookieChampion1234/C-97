const firebaseConfig = {
      apiKey: "AIzaSyC5J0ydyxt1wK1pauvOitqBu2fQW5dJwLM",
      authDomain: "kwitter-18779.firebaseapp.com",
      databaseURL: "https://kwitter-18779-default-rtdb.firebaseio.com",
      projectId: "kwitter-18779",
      storageBucket: "kwitter-18779.appspot.com",
      messagingSenderId: "374177809808",
      appId: "1:374177809808:web:055710bffc0a6aca1f9f15"
};

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            msg:message,
            like:0
      })
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                  }
            });
      });
}
getData();