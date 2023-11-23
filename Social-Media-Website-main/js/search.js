firebase.auth().onAuthStateChanged((user) => {
    // Existing code...

    firebase.firestore().collection("users").onSnapshot((users) => {
        // Existing code...

        // Call the searchUsers function whenever the snapshot changes
        searchUsers();
    });
});

function searchUsers() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var userdetails = document.querySelectorAll("#userdetailasdev");

    userdetails.forEach((userdetail) => {
        var username = userdetail.querySelector(".username").innerHTML.toLowerCase();

        if (username.includes(searchInput)) {
            userdetail.style.display = "block";
        } else {
            userdetail.style.display = "none";
        }
    });
}

// Existing code...

