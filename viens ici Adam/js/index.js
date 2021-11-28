var gold = 0; // var calcul 
var gps = 0; // var rig 
var init = 0;
var seuil = 50;
var clicker = 1;



function palier() {
    
}

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
    x = clicker; 
    if (init === seuil) {
        palier += 50;
        clicker *=2;
    }
    gold += clicker;

}

function displayGold() {
    
    setInterval(function () {
        var round = Math.round(gold * 100) / 100
        document.getElementById('gold').innerHTML = round + ' ' + 'Data hashed';
    })
}



function displayMinions() {
    setInterval(function () {
        document.getElementById('White Bloc').innerHTML = 'White Bloc' + ':' + '' + minions[0].owned;
        document.getElementById('Red Bloc').innerHTML = 'Red Bloc' + ':' + '' + minions[1].owned;
        document.getElementById('Dark Bloc').innerHTML = 'Dark Bloc' + ':' + '' + minions[2].owned;

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
        var round = Math.round(gps * 100) / 100
        document.getElementById('gps').innerHTML = round + ' ' + 'Hashrate';
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

        if (minions[id].cost < gold) {
            // minions[id]["id"];
            gps = gps + minions[id].gps;
            minions[id].owned += 1;
            init += 1;
            gold = gold - minions[id].cost;
            minions[id].cost = minions[id].cost * 1.15;
        }
        else if (minions[id]["owned"] = 25 || 50 || 100 || 250 || 1000) {
            minions[id]["gps"] = minions[id]["gps"] * 2;
        }
    }
}



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// var gold = 0; // var calcul 
// var gps = 0; // var rig 
// var stock = 0; 

// var minions = [
//     { id: 1, name: "Slime", cost: 10, gps: 0.1, owned: 0 },
//     { id: 2, name: "Undead", cost: 100, gps: 1, owned: 0 },
//     { id: 3, name: "Imp", cost: 500, gps: 5, owned: 0 }
// ];

// // minions.forEach(element => {
// //     console.log(element);
// // });

// displayGold();
// displayGPS();
// displayMinions();
// getGPS();


// function addCalcul(x) {
//     gold += x;

// }

// function displayGold() {
//     setInterval(function () {
//         document.getElementById('gold').innerHTML = gold + ' ' + '$$';
//     })
// }



// function displayMinions() {
//     setInterval(function () {
//         document.getElementById('Slime').innerHTML = 'Slime' + ':' + '' + minions[0].owned;
//         document.getElementById('Undead').innerHTML = 'Undead' + ':' + '' + minions[1].owned;
//         document.getElementById('Imp').innerHTML = 'Imp' + ':' + '' + minions[2].owned;

//     });
// }
// // Object.keys(minions).forEach(function(key) {
// //     console.log(key, minions[key].owned, minions[key].cost);
// // });

// function getGPS() {
//     // minions.forEach(buyMinion(id));
//     setInterval(function () {
//         Object.keys(minions).forEach(function (key) {
//             var stock = minions[key].owned * minions[key].gps;
//             gps = possession;
//           // console.log(possession)
//         })
//         gold += gps;
//         console.log(gps);
//     }, 1000)


// }

// function displayGPS() {
//     setInterval(function () {
//         document.getElementById('gps').innerHTML = gps + ' ' + '$$';
//     });
// }

// function buyMinion(id) {
//     // getGPS()
//     if (minions[id].cost > gold) {
//         alert('nop !')
//     }
//     else {
//         if (minions[id].cost < gold) {
//             minions[id]["id"];
//             minions[id].owned += 1;
//             gps += minions[id].gps;
//             gold = gold - minions[id].cost;
//             minions[id].cost = minions[id].cost * 1.15;
//         }
//         else if (minions[id].owned === 25) {
//             minions[id].gps = minions[id].gps * 2;
//         }
//     }
// }
