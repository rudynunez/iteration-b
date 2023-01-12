
const playersData = require('./playersData.js');

module.exports = [
    {
    nodeId: 1,
    location: [
        50, 60, 70
             ],
    title: 'New Beginning',
    description: 'You find yourself in a massive cave with a high vaulted ceiling. You see myriad pictograms whose figures seem to dance in the flickering light of your torch. Huge stalagmites and stalactites can be seen, dripping with treacle. Bats fly in and out and the floor of the cave is thick with their guano.',
    zones: 'a',
    players: []
    },
    {
        nodeId: 12,
        location: [
            01, 34, 55
                 ],
        title: 'The Stargate',
        description: 'With your impulse engines disabled you are being pulled inexorably toward the stargate',
        zones: 'a',
        players: []
    },
    {
        nodeId: 6,
        location: [
            2, 3, 4
                 ],
        title: 'After the Fall',
        description: 'You barely manage to open one eye just a fraction but there is nothing to see but more darkness.',
        zones: 'b',
        players: []
        }

];

// Extract player data and add it to the players array of the first room
const player = playersData.find(player => player.player_name === 'Daft Bennie');
// const itemTitle = player.player_inventory[0].item_title;
// module.exports[0].players.push(itemTitle);

const playerName = player.player_name;
module.exports[0].players.push(playerName);