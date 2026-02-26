function calculateDays() {

    let dob = document.getElementById("dob").value;

    if (!dob) {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let difference = today - birthDate;

    let daysLived = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerHTML =
        `🎉 You have lived <span style="color:#8b7bff">${daysLived}</span> days!`;
}

/* Proper Back Button */
function goHome() {
    window.location.href = "indexs.html"; 
    // change to index.html if your file name is index.html
}