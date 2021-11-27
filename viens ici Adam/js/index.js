var gold = 0; // var calcul 
var gps = 0; // var rig 
var minions = [
    { id: 1, name: "Slime", cost: 10, gps: 0.1, owned: 0 },
    { id: 2, name: "Undead", cost: 100, gps: 1, owned: 0 },
    { id: 3, name: "Imp", cost: 500, gps: 5, owned: 0 }
];



displayGold();
displayGPS();
displayMinions();
getGPS();

function addCalcul(x) {
    gold += x;

}

function displayGold() {
    setInterval(function () {
        document.getElementById('gold').innerHTML = gold + ' ' + '$$';
    })
}



function displayMinions() {
    setInterval(function () {
        document.getElementById('Slime').innerHTML = 'Slime'+':'+''+minions[0].owned;
        document.getElementById('Undead').innerHTML = 'Undead'+':'+''+ minions[1].owned;
        document.getElementById('Imp').innerHTML = 'Imp'+':'+''+minions[2].owned;

    });
}


function getGPS() {
    // minions.forEach(buyMinion(id));

    setInterval(function () {
        gold += gps;
        console.log(gps);
    }, 1000)
}

function displayGPS() {
    setInterval(function () {
        document.getElementById('gps').innerHTML = gps + ' ' + '$$';
    });
}

// Object.entries(minions).forEach(([key, value]) => {
//     console.log(key , value); // key ,value
//   });

function buyMinion(id) {
    if (minions[id].cost > gold) {
        alert('nop !')
    }
    else {
        if (minions[id]["owned"] === 25 || minions[id]["owned"] === 50 || minions[id]["owned"] === 100 || minions[id]["owned"] === 250 || minions[id]["owned"] === 1000) {
            minions[id]["gps"] = minions[id]["gps"] * 2;
        }
        else {
            // minions[id]["id"];
            gps = gps + minions[id].gps;
            minions[id].owned += 1;
            gold = gold - minions[id].cost;
            minions[id].cost = minions[id].cost * 1.15;
        }
    }
}
