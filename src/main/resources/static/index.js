var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "img":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "img":"jane.png"
    }
]
var id=0;
function ToggleUser()
{
    id=(id+1)%2
    var userImage=document.getElementById("user_image");

    var userName=document.getElementById("user_name");
    var userGender=document.getElementById("user_gender");
    userImage.src=users[id].img;
    userName.innerHTML=users[id].name;
    userGender.innerHTML=users[id].gender;



}
