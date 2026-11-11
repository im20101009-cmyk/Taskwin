let coins = Number(localStorage.getItem("taskwinCoins")) || 0;

document.getElementById("coins").innerText = coins;
document.getElementById("rewardCoins").innerText = coins;

function startGame(name) {
    let question = "";
    let correctAnswer = "";

    if (name === "Brain Games") {
        question = "5 ta sham yonib turibdi.\n2 tasi o'chirildi.\nXonada nechta sham qoldi?";
        correctAnswer = "5";
    }
    else if (name === "Math Challenge") {
        question = "25 + 17 = ?";
        correctAnswer = "42";
    }
    else if (name === "Logic Test") {
        question = "1, 2, 4, 8, ?\nKeyingi sonni toping:";
        correctAnswer = "16";
    }
    else if (name === "App Tasks") {
        alert("Yangi topshiriqlar tez orada qo'shiladi!");
        return;
    }

    let answer = prompt(name + "\n\n" + question);

    if (answer === null) {
        return;
    }

    if (answer.trim() === correctAnswer) {
        coins += 10;
        alert("To'g'ri! +10 coin 🎉");
    } else {
        coins = Math.max(0, coins - 5);
        alert("Noto'g'ri! -5 coin");
    }

    localStorage.setItem("taskwinCoins", coins);

    document.getElementById("coins").innerText = coins;
    document.getElementById("rewardCoins").innerText = coins;
}

function showRewards() {
    alert("MY REWARDS\n\nYour Coins: " + coins);
}
function saveProfile() {
    let name = document.getElementById("userName").value;
    let username = document.getElementById("userUsername").value;

    if (name.trim() === "" || username.trim() === "") {
        alert("Iltimos, ikkala joyni ham to'ldiring!");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userUsername", username);

    document.getElementById("showName").innerText = name;
    document.getElementById("showUsername").innerText = username;

    alert("Profile saved successfully!");
}

document.getElementById("showName").innerText =
    localStorage.getItem("userName") || "Not set";

document.getElementById("showUsername").innerText =
    localStorage.getItem("userUsername") || "Not set";

document.getElementById("profileCoins").innerText = coins;