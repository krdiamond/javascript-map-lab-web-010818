const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];


const sortedRobots = robots.map(robot => {
  const isDecepticon = knownDecepticons.includes(robot.name);
  return Object.assign({}, robot, {
    alliance: isDecepticon ? 'decepticon' : 'autobot'
  });
});


//1.) Set a variable to call the full function (type sortedRobots in console)
//2.) This function will use .map on robots to iterate over each one and update something
//3.) Set a variable to each object (robot)
//3.) Create a variable that asks if something is true or false
//4.) Use Object.assign to update the object without updating the original variable
//        Create a new object ({})
//        For each robot, update alliance to either deception(true) or autobot(false)
//        True is first, False is second

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

//A stripe is black when the stripe's index is even
//A stripe is white if a stripe's index is odd

const coloredZebraStripes = zebraStripes.map((stripe, index) => {
  const isEven = index % 2 == 0;
  return Object.assign({}, stripe, {
    color: isEven ? 'black' : 'white'
  })
});
