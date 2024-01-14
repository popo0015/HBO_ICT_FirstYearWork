/**
 * This file contains global functions that are used in this exam. We deliberatly 
 * moved these to a separate file to keep your starter code clean, but it also
 * enables us to autotest your code with other datasets Muhahahaa.
 */

/**
 * Function that fakes the fetching of data from a remote server.
 */
function fetchData() {
  // YOU MAY CHANGE THIS VALUE TO PLAY AROUND WITH THE SIZE OF THE ARRAY
  const amountOfEntries = 50;
  if (amountOfEntries > descriptions.length) {
    console.error('Unable to generate that many entries. Maximum is 64!');
    return;
  }
  return {
    name: "Pirates of the Babibbian",
    type: "Inverted flying bobsled roller coaster",
    entries: buildEntries(amountOfEntries)
  };
};

/**
 * A set of available log entry tag names with corresponding tag color classes.
 * You may use this object array in your app. 
 */
const availableTags = [
  { "name": "mechanical" , "color": "is-light"   },
  { "name": "electronics", "color": "is-white"   },
  { "name": "software"   , "color": "is-link"    },
  { "name": "piracy"     , "color": "is-dark"    },
  { "name": "operator"   , "color": "is-primary" },
  { "name": "wear"       , "color": "is-black"   },
  { "name": "wheather"   , "color": "is-info"    },
  { "name": "minor"      , "color": "is-success" },
  { "name": "moderate"   , "color": "is-warning" },
  { "name": "critical"   , "color": "is-danger"  }
];

/**
 * Helper function that generates an array of random log entries.
 * 
 * @param {*} count amount
 * @returns 
 */
function buildEntries(count) {
  // Deep copy the descriptions array
  const remaining = [...descriptions];
  const result = [];
  for (let n = 0; n < count; n++) {
    const randomIndex = randomIntBetween(0, remaining.length - 1);
    result.push({
      id: generateRandomHexCode(10),
      created_at: generateRandomtimestamp(),
      tags: generateRandomTags(),
      description: remaining.splice(randomIndex, 1)[0]
    });
  }
  return result;
}

/**
 * Helper function that returns a random hexadecimal code of `size`
 * characters.
 * 
 * @param {*} size length of the generated code
 * @returns a random hexadecimal code of `size` characters.
 */
function generateRandomHexCode(size) {
  return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

/**
 * Helper function that returns a random timestamp between `from` and `to`.
 * 
 * @param {*} from the earliest allowed timestamp. If omitted, it will be set
 *            to 2 months before `to`
 * @param {*} to the latest allowed timestamp, If omitted, it will be set to
 *            `new Date()`.
 * @returns a random timestamp between `from` and `to`
 */
function generateRandomtimestamp(from, to) {
  if (!to) {
    to = new Date();
  }
  if (!from) {
    // 👇 Make copy with "Date" constructor
    from = new Date(to);
    from.setMonth(from.getMonth() - 2);
  }
  date = new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
  return date.getFullYear() + "-" + 
    ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
    ("00" + date.getDate()).slice(-2) + " " +
    
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);
}

/**
 * Helper function that returns an array with a pseudo randomized selection of
 * entry tags
 * 
 * @returns an array with a pseudo randomized selection of entry tags
 */
function generateRandomTags() {
  const result = [];
  // Add one of the minor/moderate/critical tags
  result.push(availableTags[randomIntBetween(7, 9)].name);
  // Add one of the mechanical/electronics/software tags
  result.push(availableTags[randomIntBetween(0, 2)].name);
  // Finally add 0 or more of the remaining tags
  availableTags
    .filter((item, index) => index > 2 && index < 7 && Math.random() > .7)
    .forEach((item) => result.push(item.name));
  return result;
}

/**
 * a Helper function that returns a random integer number between and
 * including the lower and upper limits
 *
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}

/**
 * A set of 64 dad-joke-level fake roller coaster log descriptions 
 */
const descriptions = [
  "The rollercoaster went off the rails trying to implement advanced data structures. We brought in Programming Basics Teachers to help it stick to the basics.",
  "A pirate parrot took over the control booth and shouted 'Avast, ye landlubbers!' It's gone now, but we lost some gold doubloons.",
  "The rollercoaster suddenly turned into a slow-motion ride. We suspect it watched too many snail races.",
  "A guinea pig stowaway was found in one of the coaster cars. We returned it to its fellow guinea pigs.",
  "Our coaster is having a mid-life crisis. It's getting new tracks, and we're adding disco lights for extra flair.",
  "The coaster's codebase became spaghetti code, and passengers got tangled in it. Time to refactor!",
  "A sudden power outage left the coaster in an endless loop, much like a student in a Programming Basics class. We're adding backup generators.",
  "An alien spaceship attempted to abduct the rollercoaster, but our technicians thwarted the invasion. The coaster is safe and sound.",
  "The rollercoaster went on strike, demanding better snacks for the passengers.",
  "Captain Rollercoaster decided to mutiny against its own tracks. We had to show it the plank.",
  "The rollercoaster developed a fear of heights and refused to go downhill. We had to give it a pep talk.",
  "A memory overflow caused the coaster to forget its loops, just like when Programming Basics Teachers erase the whiteboard. Time for a reset.",
  "Our rollercoaster wants to try a new hairstyle. It's getting a Mohawk made of steel.",
  "A software bug in the coaster's control system turned it into a wild ride. We had to debug the entire system.",
  "A gust of wind blew away one of the coaster cars. We're offering a reward for its safe return.",
  "The rollercoaster tried to make passengers walk the plank. We're teaching it pirate manners.",
  "Our rollercoaster decided to enroll in a Programming Basics class. It's learning about variables, loops, and conditionals for smoother rides.",
  "Our rollercoaster is learning about algorithms for smoother rides. We're introducing it to sorting and searching techniques.",
  "The rollercoaster's firmware became corrupted, much like a corrupted hard drive. We're re-flashing it to restore functionality.",
  "A guinea pig-themed protest disrupted rollercoaster operations. We provided tiny protest signs and carrots to appease them.",
  "Arr, the rollercoaster's wheels be squeakin' like a ghost ship in a storm. We had to oil 'em up.",
  "The rollercoaster tried to implement its own AI. It thought going upside down was a great idea.",
  "The rollercoaster attempted to breakdance but got tangled in its own tracks. Dance lessons needed.",
  "Aliens made crop circles in the rollercoaster park, causing interference with the coaster's systems. We've repaired the damage and installed alien detection systems.",
  "The coaster attempted to implement object-oriented design but ended up creating a mess of objects. We had to call in Programming Basics Teachers to objectify the problem.",
  "Our rollercoaster wants a new Jolly Roger flag. We're hoisting it high with skull and crossbones.",
  "One of the coaster cars decided to take a detour and ended up in the popcorn stand!",
  "The rollercoaster did an unexpected loop-de-loop. We're pretty sure it's not supposed to do that!",
  "Our coaster wants a pirate parrot sidekick. We're getting it a squawking, feathered matey.",
  "The rollercoaster wants to optimize its algorithms for thrills. We brought in Programming Basics Teachers to help with the optimization.",
  "The rollercoaster encountered an infinite loop and couldn't stop spinning. We had to break the loop!",
  "The rollercoaster developed an attitude and started backseat driving. It's in timeout now.",
  "Our rollercoaster is upgrading its firmware to version 2.0. New features include smoother loops and improved speed.",
  "A concurrency issue led to passengers experiencing a race condition. We're ensuring smoother parallel processing.",
  "A rogue semicolon wreaked havoc in the coaster's code, causing it to go off track. We called in the Programming Basics Teachers to fix it.",
  "An unexpected recursion error caused the coaster to loop endlessly. We're working on improving our base case.",
  "A seagull decided to hitch a ride on the coaster and got stuck in the loop. Feathered passenger down!",
  "A memory leak made the coaster forget its loops and corkscrews. We're refreshing its memory.",
  "A group of rogue buccaneers attempted to commandeer the coaster, but it outsped 'em. We've got a speedy ship!",
  "Time for our coaster's spa day. It's getting a relaxing oil change and a fresh coat of paint.",
  "A guinea pig parade suddenly appeared on the rollercoaster tracks. We had to safely escort the guinea pigs to a cozy resting place.",
  "The rollercoaster got stuck in an infinite loop, just like when Programming Basics Teachers explain recursion. We had to break the cycle!",
  "The rollercoaster wants a new treasure chest for passengers to store their loot. We're adding one with shiny gems.",
  "The coaster's logic gates got tangled, causing passengers to experience 'if-else' confusion. We needed the Programming Basics Teachers to untangle the mess.",
  "The coaster's version control got stuck in a merge conflict. We had to resolve it manually.",
  "The coaster needs a confidence boost. It's getting motivational speeches from a cheerleading squad.",
  "Our coaster wants a software development boot camp for its control system. It's going back to school.",
  "The rollercoaster is getting an AI upgrade. It will now predict your screams and adjust the ride accordingly.",
  "Our coaster is working on its error handling skills, with guidance from Programming Basics Teachers. It's learning to gracefully recover from crashes.",
  "A ghostly pirate crew came aboard for a spectral joyride. We're offering them a ride on a ghost ship next time.",
  "The rollercoaster experienced a segmentation fault, much like a buggy program. We had to troubleshoot and fix the issue.",
  "A buffer overflow caused passengers to experience data leakage. We're tightening security.",
  "The coaster is getting an upgrade to its artificial intelligence. It's learning to predict rider preferences and optimize the experience.",
  "The coaster's state machine went haywire, causing a state of confusion among passengers. We're reprogramming the logic.",
  "The coaster went on a wild ride without any passengers. It's living its best life!",
  "A group of ducks invaded the coaster's path. Duck parade on the tracks!",
  "The coaster's database queries became slow, leading to a data bottleneck. We're optimizing its data retrieval.",
  "The rollercoaster started making strange noises. We think it's trying to communicate with aliens.",
  "Our coaster is embracing the cloud. It's migrating to a virtual rollercoaster environment for scalability.",
  "Our coaster is joining a rock band. It's getting a leather jacket and a guitar.",
  "A race condition caused the coaster to jumble up its passengers. We need to lock those seats!",
  "The rollercoaster tried to bury its own treasure beneath the tracks. We dug it up and returned the doubloons to the passengers.",
  "The rollercoaster started telling dad jokes to passengers. We had to confiscate its pun book.",
  "Guinea pig-inspired artwork was discovered in the coaster's control booth. We'll cherish it as a masterpiece."
];
