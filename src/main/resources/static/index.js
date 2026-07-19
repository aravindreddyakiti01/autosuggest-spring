var users = [
    {
        name: "John Doe",
        gender: "Male",
        img: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        img: "jane.png"
    }
];

var id = 0;

function ToggleUser() {
    id = (id + 1) % users.length;

    document.getElementById("user_image").src = users[id].img;
    document.getElementById("user_name").innerHTML = users[id].name;
    document.getElementById("user_gender").innerHTML = users[id].gender;
}

function RandomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var userdata = data.results[0];

            document.getElementById("user_image").src = userdata.picture.large;
            document.getElementById("user_name").innerHTML =
                userdata.name.first + " " + userdata.name.last;
            document.getElementById("user_gender").innerHTML =
                userdata.gender;
        })
        .catch(function(err) {
            console.log(err);
        });
}