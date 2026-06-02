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
        let sleepChance = sleepRisk(0, 100);
        if (sleepChance > 5 ) {
            setTimeout(() => {
            console.log(`${name} finished using the weed eater.`);
            callback();
            }, 1500);
        }
        else {
            console.log(`${name} fell asleep after mowing the lawn.`)
        }
    }

    // trimming the hedges
    function trimHedges (callback, name) {
        let sleepChance = sleepRisk(0, 80);
        if (sleepChance > 10 ) {
            setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback();
            }, 1000);
        }
        else {
            console.log(`${name} fell asleep after weed eating the yard.`)
        }
    }

    // collecting wood
    function collectWood (callback, name) {
        let sleepChance = sleepRisk(0, 60);
        if (sleepChance > 20 ) {
            setTimeout(() => {
            console.log(`${name} finished collecting wood.`);
            callback();
            }, 2500);
        }
        else {
            console.log(`${name} fell asleep after trimming the hedges.`)
        }
    }

    // watering the garden
    function waterGarden (callback, name) {
        let sleepChance = sleepRisk(0, 50);
        if (sleepChance > 30 ) {
            setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback();
            }, 500);
        }
        else {
            console.log(`${name} fell asleep after collecting wood.`)
        }
    }
// #endregion


doSummerChores("Morg");
doSummerChores("Joe");