// starting and ending the less vicious cycle
async function doSummerChores (name) {
    try {
        const mowYardResult = await mowYard(name);
        console.log(mowYardResult);

        const weedEatResult = await weedEat(name);
        console.log(weedEatResult);

        const trimHedgesResult = await trimHedges(name);
        console.log(trimHedgesResult);

        const collectWoodResult = await collectWood(name);
        console.log(collectWoodResult);

        const waterGardenResult = await waterGarden(name);
        console.log(waterGardenResult);

        console.log(`${name} finished all their chores!`);
    }
    catch(error) {
        console.log(error);
    }

}

// sleepRisk function for chance of falling of sleep
function sleepRisk(min, max) {
    return Math.random() * (max - min) + min;
}

// #region -{ Chores Functions }-
    // mowing the yard
    function mowYard(name) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(`${name} mowed the yard.`);
            }, 2000);
        });
    }

    // using the weed eater
    function weedEat (name) {
        let sleepChance = sleepRisk(0, 100);
        return new Promise((resolve, reject) => {
            if (sleepChance > 5 ) {
            setTimeout(() => {
                resolve(`${name} finished using the weed eater.`);
            }, 1500);
            }
            else {
                reject(`${name} fell asleep after mowing the lawn.`)
            }
        })
    }

    // trimming the hedges
    function trimHedges (name) {
        let sleepChance = sleepRisk(0, 80);
        return new Promise((resolve, reject) => {
        if (sleepChance > 10 ) {
            setTimeout(() => {
            resolve(`${name} finished trimming the hedges.`);
            }, 1000);
        }
        else {
            reject(`${name} fell asleep after weed eating the yard.`)
            }
        })
    }

    // collecting wood
    function collectWood (name) {
        let sleepChance = sleepRisk(0, 60);
        return new Promise((resolve, reject) => {
        if (sleepChance > 20 ) {
            setTimeout(() => {
                resolve(`${name} finished collecting wood.`);
            }, 2500);
        }
        else {
            reject(`${name} fell asleep after trimming the hedges.`)
            }  
        })
    }

    // watering the garden
    function waterGarden (name) {
        let sleepChance = sleepRisk(0, 50);
        return new Promise((resolve, reject) => {
        if (sleepChance > 30 ) {
            setTimeout(() => {
                resolve(`${name} finished watering the garden.`);
            }, 500);
        }
        else {
            reject(`${name} fell asleep after collecting wood.`)
            }
        })
    }
// #endregion


doSummerChores("Morg");
doSummerChores("Joe");