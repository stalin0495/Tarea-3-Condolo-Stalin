window.addEventListener('DOMContentLoaded', function(e){
    var input = document.getElementById('input');
    input.addEventListener('change', function(event){
        document.getElementById('input-log').innerHTML= event.target.value;
        alert(event.target.value); 
    }) 
});

function getValueInput(){
    let input = document.getElementById('input').value
    alert(input);
}

window.addEventListener('DOMContentLoaded', function(e){
    var content_container = document.getElementById("content container")[2];
    for (let i=0;i<20;i++){
        document.body.innerHTML = document.body.innerHTML + '<div class="content-container">' +
        content_container.innerHTML + '</div>';
    }
});

window.addEventListener('DOMContentLoaded', function(e){
    let container = document.getElementsByClassName("content-border")[0].innerHTML;
    for (let i=0;i<3;i++){
        document.getElementsByClassName("content-container")[0].innerHTML = 
        document.getElementsByClassName("content-container")[0].innerHTML + ""
    }
    let buttons = document.getElementsByClassName("buttom");
    for(let i =0;i<buttons.length; i++){
        buttons[i].addEventListener("click",function(event){
            let input = buttons[i].previousElementSibling;
            input = document.querySelector("#"+input.getAttribute("id")).value;
            alert(input);
        })
    }
});


