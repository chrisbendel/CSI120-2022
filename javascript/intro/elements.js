function checkAge() {
    const age = document.getElementById('age').value;

    if (isNaN(age)) {
        alert('straight to jail');
    }

    if (age >= 18) {
        alert("Drink up");
    } else {
        alert('straigh to jail');
    }
}



document.onload = () => {

}

window.onload = () => {
    const myMessage = document.getElementById("message");
    console.log(myMessage.innerHTML);
    myMessage.outerHTML = `
        <div>
            <h2>Welcome to my ugly page</h2>
            <h4>Enjoy your stay</h4>
        </div>
    `;


    document.getElementById('math').innerText = `4 + 2 is 6`;
}




