// starting the vicious cycle
function doSummerChores (name) {
    mowYard(() => {
        weedEat(() => {
            trimHedges(() => {
                collectWood(() => {
                    waterGarden(() => {
                        finishedSummerChores(name)
                        }, name)
                    }, name)
                }, name)
            }, name)
        }, name);
}

// sleepRisk function for chance of falling of sleep
function sleepRisk(min, max) {
    return Math.random() * (max - min) + min;
}

// finishing the vicious cycle
function finishedSummerChores (name) {
    console.log(`${name} finished all their chores!`);
}

// #region -{ Chores Functions }-
    // mowing the yard
    function mowYard(callback, name) {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            callback();
        }, 2000)
    }

    // using the weed eater
    function weedEat (callback, name) {
        setTimeout(() => {
            let sleepChance = sleepRisk(0, 100);
            if (sleepChance > 5 ) {
                console.log(`${name} finished using the weed eater.`);
                callback();
                }
            else {
                console.log(`${name} fell asleep after mowing the lawn.`)
                }
        }, 1500)
    }

    // trimming the hedges
    function trimHedges (callback, name) {
        setTimeout(() => {
            let sleepChance = sleepRisk(0, 80);
            if (sleepChance > 10 ) {
                console.log(`${name} finished trimming the hedges.`);
                callback();
                }
            else {
                console.log(`${name} fell asleep after weed eating the yard.`)
                } 
        }, 1000)
    } 

    // collecting wood
    function collectWood (callback, name) {
        setTimeout(() => {
            let sleepChance = sleepRisk(0, 60);
            if (sleepChance > 20 ) {
                console.log(`${name} finished collecting wood.`);
                callback();
                }
            else {
                console.log(`${name} fell asleep after trimming the hedges.`)
                }
        }, 2500);
    }

    // watering the garden
    function waterGarden (callback, name) {
        setTimeout(() => {
            let sleepChance = sleepRisk(0, 50);
            if (sleepChance > 30 ) {
                console.log(`${name} finished watering the garden.`);
                callback();
                }
            else {
                console.log(`${name} fell asleep after collecting wood.`)
                }
        }, 500);
    }
// #endregion


doSummerChores("Morg");