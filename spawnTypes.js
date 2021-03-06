require ('creepTypes')();

module.exports = {

    basic: function() {
        var minimum = { "harvesters" : 4,
                        "upgraders" : 1,
                        "builders" : 1,
                        "repairers" : 1}
        var total = []
        for (let role in minimum) {
            total[role] = _.sum(Game.creeps, (c) => c.memory.role == role.substring(0, role.length - 1));
        }
//for logging purposes
        if (Game.time % 60 == 1) {
            for (let role in total) {
                console.log('There are ' + total[role] + ' ' + role + '.')
            }
        }
//available energy of Spawn1 *needs to be updated to all spawns*
        var maxEnergy = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var availEnergy = Game.spawns.Spawn1.room.energyAvailable;
        var name = undefined;
//code to spawn custom sized creeps based on available energy accessable by spawn prioritized by need and minimums
//harvester spawn
        if (total["harvesters"] < minimum["harvesters"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'harvester');
            if (name == ERR_NOT_ENOUGH_ENERGY && total["harvesters"] == 0) {
                name = Game.spawns.Spawn1.createBigWorker(availEnergy, 'harvester');
            }
            if (!(name < 0)) {
                console.log("New harvester created.");
            }
        }
//upgrader spawn
        else if (total["upgraders"] < minimum["upgraders"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'upgrader');
            if (!(name < 0)) {
                console.log("New upgrader created.");
            }
        }
//repairer spawn
        else if (total["repairers"] < minimum["repairers"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'repairer');
            if (!(name < 0)) {
                console.log("New repairer created.");
            }
        }
//builder spawn
        else if (total["builders"] < minimum["builders"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'builder');
            if (!(name < 0)) {
                console.log("New builder created.");
            }
        }
//overflow spawn currently:builder
        else {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'builder');
            if (!(name < 0)) {
                console.log("New builder created.");
            }
        }
        if (!(name < 0)) {
            console.log("Hi! My name is " + name + ".");
        }
    },
		experimental: function() {
		var minimum = { "harvesters" : 3,
                        "upgraders" : 1,
                        "builders" : 1,
                        "repairers" : 1,
                        "ldharvesters" : 0,
		                "extractors" : 1 }
    var home = 'W7N3';
        var total = []
        for (let role in minimum) {
            total[role] = _.sum(Game.creeps, (c) => c.memory.role == role.substring(0, role.length - 1));
        }
//for logging purposes
        if (Game.time % 60 == 1) {
            for (let role in total) {
                console.log('There are ' + total[role] + ' ' + role + '.')
            }
        }
//available energy of Spawn1 *needs to be updated to all spawns*
        var maxEnergy = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var moreEnergy = (maxEnergy * 3) / 4;
        var halfEnergy = maxEnergy / 2;
		var availEnergy = Game.spawns.Spawn1.room.energyAvailable;
        var name = undefined;
//code to spawn custom sized creeps based on available energy accessable by spawn prioritized by need and minimums
//harvester spawn
        if (total["harvesters"] < minimum["harvesters"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'harvester');
            if (name == ERR_NOT_ENOUGH_ENERGY && total["harvesters"] == 0) {
                name = Game.spawns.Spawn1.createBigWorker(availEnergy, 'harvester');
            }
            if (!(name < 0)) {
                console.log("New harvester created.");
            }
        }
//claimer
        else if (Game.spawns.Spawn1.memory.claimRoom != undefined) {
            name = Game.spawns.Spawn1.createClaimer(Game.spawns.Spawn1.memory.claimRoom)
            if (!(name < 0)) {
                delete Game.spawns.Spawn1.memory.claimRoom;
            }
        }
        
//upgrader spawn
        else if (total["upgraders"] < minimum["upgraders"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'upgrader');
            if (!(name < 0)) {
                console.log("New upgrader created.");
            }
        }
//ldharvester spawn
        else if (total["ldharvesters"] < minimum["ldharvesters"]) {
            name = Game.spawns.Spawn1.createLdHarvester(maxEnergy, 8, home, 'W7N4', 0);
            if (!(name < 0)) {
                console.log("New ldharvester created.");
            }
        }
//repairer spawn
        else if (total["repairers"] < minimum["repairers"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'repairer');
			if (!(name < 0)) {
                console.log("New repairer created.");
            }
        }
//builder spawn
        else if (total["builders"] < minimum["builders"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'builder');
            if (!(name < 0)) {
                console.log("New builder created.");
            }
        }
//extractor spawn
        else if (total["extractors"] < minimum["extractors"]) {
            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'extractor');
            if (!(name < 0)) {
                console.log("New extractor created.");
            }
        }       
//overflow spawn currently:repairer tunred off due to ticks to live increase
//        else {
//            name = Game.spawns.Spawn1.createBigWorker(maxEnergy, 'repairer');
//           if (!(name < 0)) {
//                console.log("New repairer created.");
//            }
//        }
//        if (!(name < 0)) {
//            console.log("Hi! My name is " + name + ".");
//        }
    }
}
