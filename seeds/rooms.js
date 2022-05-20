// module.exports = [{
//     node_id: 1,
//     location: [
//         {x: 50},
//         {y: 50},
//         {z: -40}
//     ],
//     title: 'Story Start',
//     description: [{
//         primary: {
//             paragraph: 'You find yourself in a massive cave with a high vaulted ceiling. You see myriad pictograms whose figures seem to dance in the flickering light of your torch. Huge stalagmites and stalactites can be seen, dripping with treacle. Bats fly in and out and the floor of the cave is thick with their guano.'
//         },
//         brief: {
//             selected: false,
//             paragraph: 'Pictogram Cave'
//         },
//         secret: {
//             revealed: false,
//             paragraph: 'You search the room. As you are digging in a particularly deep pile of bat feces, you strike something. You clear away the detritus to reveal a round, rotted wooden trapdoor with an iron ring as a handle.'
//         },

//     }],
//     zones: [{
//         a: '',
//         b: '',
//         c: ''
//     }],
//     players: [{
//         player_id: '227dcj18a64318avdf8e0733'
//     }]
// }]

module.exports = [
    {
    nodeId: 1,
    location: [
        50, 60, 70
             ],
    title: 'New Beginning',
    description: 'You find yourself in a massive cave with a high vaulted ceiling. You see myriad pictograms whose figures seem to dance in the flickering light of your torch. Huge stalagmites and stalactites can be seen, dripping with treacle. Bats fly in and out and the floor of the cave is thick with their guano.',
    zones: 'a',
    players: [
        {
        player_id: '336gcj18a64318avdf8e3759',
        player_name: 'Doeff Moedgruund'
        },
        {
        player_id: '227dcj18a64318avdf8e0733',
        player_name: 'Goush Deudis'
        }

    ]
    },
    {
        nodeId: 12,
        location: [
            01, 34, 55
                 ],
        title: 'The Stargate',
        description: 'With your impulse engines disabled you are being pulled inexorably toward the stargate',
        zones: 'a',
        players: [
            {
            player_id: '336gcj18a64318avdf8e3759',
            player_name: 'Doeff Moedgruund'
            },
            {
            player_id: '445dcj18a64318avdf8e8734',
            player_name: 'Cormorant Shake'
            }
    
        ]
    },
    {
        nodeId: 6,
        location: [
            2, 3, 4
                 ],
        title: 'After the Fall',
        description: 'You barely manage to open one eye just a fraction but there is nothing to see but more darkness.',
        zones: 'b',
        players: [
            {
            player_name: 'Doeff Moedgruund',
            player_id: '336gcj18a64318avdf8e3759',
            status: 'incapacitated'
            },
            {
            player_name: 'Mork Hammondspoon',
            player_id: '876dcj18a64318avdf8e9876',
            status: 'dead'
            }
    
        ]
        }

]