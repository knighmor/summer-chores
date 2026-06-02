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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sleepChance = sleepRisk(0, 100);
                if (sleepChance > 5 ) {
                    resolve(`${name} finished using the weed eater.`);
                    }
                else {
                    reject(`${name} fell asleep after mowing the lawn.`)
                    }
            }, 1500)
        })
    }

    // trimming the hedges
    function trimHedges (name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sleepChance = sleepRisk(0, 80);
                if (sleepChance > 10 ) {
                    resolve(`${name} finished trimming the hedges.`);
                    }
                else {
                    reject(`${name} fell asleep after weed eating the yard.`)
                    } 
            }, 1000)
        })
    }

    // collecting wood
    function collectWood (name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sleepChance = sleepRisk(0, 60);
                if (sleepChance > 20 ) {
                    resolve(`${name} finished collecting wood.`);
                    }
                else {
                    reject(`${name} fell asleep after trimming the hedges.`)
                    }
            }, 2500);  
        })
    }

    // watering the garden
    function waterGarden (name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sleepChance = sleepRisk(0, 50);
                if (sleepChance > 30 ) {
                    resolve(`${name} finished watering the garden.`);
                    }
                else {
                    reject(`${name} fell asleep after collecting wood.`)
                    }
            }, 500);
        })
    }
// #endregion


doSummerChores("Morg");