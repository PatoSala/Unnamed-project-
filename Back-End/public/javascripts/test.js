window.addEventListener("load", function() {
    let data;
    fetch("loaclhost:3000/api/getchats")
    .then((res) => {console.log('nice!')})
    .then((res) => data = res);

    let chats = document.querySelector(".list-chats");

    chats.innerHTML = data;
});