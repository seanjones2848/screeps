/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('work');
 * mod.thing == 'a thing'; // true
 */
var roles = require('roles');

module.exports = {
	run: function() {
		for (let name in Game.creeps) {
			var creep = Game.creeps[name];
			if (creep.ticksToLive == 1 && creep.carry.energy > 0) {
				console.log(creep.name + " dropped their load.");
				creep.drop(RESOURCE_ENERGY);
			}
			if (creep.memory.role == 'harvester') {
				roles.harvester(creep);
			}
			else if (creep.memory.role == 'upgrader') {
				roles.upgrader(creep);
			}
			else if (creep.memory.role == 'builder') {
				roles.builder(creep);
			}
			else if (creep.memory.role == 'repairer') {
				roles.repairer(creep);
			}
			//else if (creep.memory.role =='runner') {
			//	runner.run(creep);
			//}
			//else if (creep.memory.role == 'miner') {
			//	miner.run(creep);
			//}
		}
	}
};
