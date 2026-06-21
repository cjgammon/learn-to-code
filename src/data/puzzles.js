// Code Quest puzzle content.
//
// Topics are ordered; puzzles inside a topic are ordered too. The lesson map
// unlocks puzzles one at a time so each win leads naturally to the next.
//
// Each puzzle:
//   id        unique string (also used as the localStorage key for progress)
//   topic     topic name (must match a topic title below)
//   title     short, fun puzzle name
//   teach     the robot's lesson — explains the concept in kid-friendly words
//   task      what to actually do
//   starter   pre-filled editor code (scaffolding so wins are reachable)
//   hints     3 escalating hints; the last one is basically the answer
//   checks    array of { label, expr }. `expr` is a JS boolean string that is
//             evaluated in the SAME scope as the kid's code, so it can read the
//             variables they declared (e.g. "typeof hero === 'string'").
//   expectedOutput (optional) array of strings that console.log must produce,
//             in order. Used for "print this" puzzles.
//   success   the robot's celebration message

export const TOPICS = [
  {
    title: 'Variables',
    emoji: '📦',
    blurb: 'Boxes that hold your stuff.',
  },
  {
    title: 'Math',
    emoji: '➕',
    blurb: 'Make the computer do the numbers.',
  },
  {
    title: 'Strings',
    emoji: '💬',
    blurb: 'Play with words and letters.',
  },
]

export const PUZZLES = [
  // ----------------------------- VARIABLES -----------------------------
  {
    id: 'vars-1',
    topic: 'Variables',
    title: 'Make It Talk',
    teach:
      "Beep boop! First trick: how to make the computer SHOW you things. We use " +
      "`console.log(...)`. Whatever you put inside the parentheses appears in the " +
      "output box below. That's how we'll see our answers!",
    task: 'Use console.log to print the word Hello! on the screen.',
    starter: '// Put your words inside the parentheses.\n// Words go in quotes!\nconsole.log();',
    hints: [
      'Words go inside quotes, inside the parentheses: console.log("...")',
      'It looks like: console.log("Hello!")',
      'Type exactly: console.log("Hello!");',
    ],
    checks: [],
    expectedOutput: ['Hello!'],
    success: 'It talked! 🗣️ Now you can see anything the computer is doing.',
  },
  {
    id: 'vars-2',
    topic: 'Variables',
    title: 'Name Your Hero',
    teach:
      "A variable is like a labeled box. You put something inside, and the label " +
      "lets you find it later. We make a box with the word `let`. Then we can " +
      "console.log the box to peek inside it!",
    task:
      'Put your name (or any name!) inside the `hero` box, then print it so we can see it.',
    starter:
      '// 1. Put a name in the box (names go in quotes)\nlet hero = ;\n\n// 2. This shows what is inside the box:\nconsole.log(hero);',
    hints: [
      'A name is a word, and words go inside quotes like "Sam".',
      'It looks like: let hero = "Sam";',
      'Type a name between the quotes, for example: let hero = "Sam";',
    ],
    checks: [
      { label: 'hero is a word (a string)', expr: "typeof hero === 'string'" },
      { label: "hero isn't empty", expr: 'hero.length > 0' },
      { label: 'you printed your hero', expr: '__logs.includes(hero)' },
    ],
    success: 'Awesome — your hero has a name, and there it is on screen! 🎉',
  },
  {
    id: 'vars-3',
    topic: 'Variables',
    title: 'How Many Stars?',
    teach:
      'Boxes can also hold numbers! Numbers do NOT need quotes — you just write ' +
      'the number all by itself. This time YOU write the console.log to show it.',
    task: 'Put the number 5 in the `stars` box, then print it with console.log.',
    starter:
      '// 1. Numbers do not need quotes\nlet stars = ;\n\n// 2. Now print stars (use console.log):\n',
    hints: [
      'Just write the number, no quotes needed: let stars = 5;',
      'To show it, add a new line: console.log(stars);',
      'Type:\nlet stars = 5;\nconsole.log(stars);',
    ],
    checks: [
      { label: 'stars is a number', expr: "typeof stars === 'number'" },
      { label: 'stars equals 5', expr: 'stars === 5' },
    ],
    expectedOutput: ['5'],
    success: 'Five shiny stars, printed for all to see! ⭐⭐⭐⭐⭐',
  },
  {
    id: 'vars-4',
    topic: 'Variables',
    title: 'Level Up!',
    teach:
      'Here is the cool part: a box can change! Once you have made a variable ' +
      'with `let`, you can give it a new value any time — just use its name and `=`.',
    task:
      'The hero starts at level 1. Change `level` so it becomes 2 (level up!), ' +
      'then print it. Do NOT write `let` again — just use the name.',
    starter:
      'let level = 1;\n\n// 1. Make level become 2 (no "let" this time):\n\n\n// 2. Print the new level:\nconsole.log(level);',
    hints: [
      'Use the name and an equals sign, like: level = 2;',
      'You do not need the word "let" to change a box you already made.',
      'On the first blank line type exactly: level = 2;',
    ],
    checks: [{ label: 'level is now 2', expr: 'level === 2' }],
    expectedOutput: ['2'],
    success: 'Ding! You reached level 2! 🆙',
  },

  // ------------------------------- MATH --------------------------------
  {
    id: 'math-1',
    topic: 'Math',
    title: 'Add It Up',
    teach:
      'The computer is a super-fast calculator. Use `+` to add numbers together. ' +
      'You can even add two variables, then print the answer!',
    task:
      'You have `apples` and `oranges`. Make `total` add them together, then ' +
      'print total.',
    starter:
      'let apples = 3;\nlet oranges = 4;\n\n// 1. Add them into a new box:\nlet total = ;\n\n// 2. Show the total:\nconsole.log(total);',
    hints: [
      'You can add the two boxes: apples + oranges',
      'It looks like: let total = apples + oranges;',
      'Type exactly: let total = apples + oranges;',
    ],
    checks: [
      { label: 'total is a number', expr: "typeof total === 'number'" },
      { label: 'total equals 7', expr: 'total === 7' },
    ],
    expectedOutput: ['7'],
    success: '3 + 4 = 7. Nice adding! 🍎🍊',
  },
  {
    id: 'math-2',
    topic: 'Math',
    title: 'Build a Floor',
    teach:
      'To multiply, use the `*` star (it means "times"). The area of a rectangle ' +
      'is width times height.',
    task: 'Make `area` equal to `width` times `height`, then print it.',
    starter:
      'let width = 5;\nlet height = 3;\n\n// 1. area = width times height (use *):\nlet area = ;\n\n// 2. Show the area:\nconsole.log(area);',
    hints: [
      'Multiply with the star: width * height',
      'It looks like: let area = width * height;',
      'Type exactly: let area = width * height;',
    ],
    checks: [
      { label: 'area is a number', expr: "typeof area === 'number'" },
      { label: 'area equals 15', expr: 'area === 15' },
    ],
    expectedOutput: ['15'],
    success: '5 × 3 = 15 tiles. You built the floor! 🧱',
  },
  {
    id: 'math-3',
    topic: 'Math',
    title: 'Share the Candy',
    teach:
      'Sharing means dividing! Use the `/` slash to divide. If you split candy ' +
      'evenly between friends, everyone gets the same amount.',
    task:
      'There are 12 candies and 4 friends. Make `each` the candies divided by ' +
      'the friends, then print it.',
    starter:
      'let candy = 12;\nlet friends = 4;\n\n// 1. How many does each friend get? (use /)\nlet each = ;\n\n// 2. Show the answer:\nconsole.log(each);',
    hints: [
      'Divide with the slash: candy / friends',
      'It looks like: let each = candy / friends;',
      'Type exactly: let each = candy / friends;',
    ],
    checks: [
      { label: 'each is a number', expr: "typeof each === 'number'" },
      { label: 'each equals 3', expr: 'each === 3' },
    ],
    expectedOutput: ['3'],
    success: 'Everyone gets 3 candies. Fair and sweet! 🍬',
  },

  // ------------------------------ STRINGS ------------------------------
  {
    id: 'str-1',
    topic: 'Strings',
    title: 'Full Name',
    teach:
      'You can glue words together with `+`. Gluing words is called joining. ' +
      "Don't forget a space in the middle, or the words will smoosh together!",
    task:
      'Join `first` and `last` into `fullName`, with a space " " in between, ' +
      'then print it.',
    starter:
      'let first = "Ada";\nlet last = "Byte";\n\n// 1. Glue them with a space in the middle:\nlet fullName = ;\n\n// 2. Show the full name:\nconsole.log(fullName);',
    hints: [
      'Glue three things: first, a space, then last.',
      'The space is just quotes with a space inside: " "',
      'Type exactly: let fullName = first + " " + last;',
    ],
    checks: [
      { label: 'fullName is "Ada Byte"', expr: "fullName === 'Ada Byte'" },
    ],
    expectedOutput: ['Ada Byte'],
    success: 'Pleased to meet you, Ada Byte! 🤝',
  },
  {
    id: 'str-2',
    topic: 'Strings',
    title: 'Super Greeting',
    teach:
      'There is a fancier way to build words using backticks ` and ${ }. Inside ' +
      'backticks you can drop a variable right into the sentence with ${name}. ' +
      'Magic!',
    task:
      'Make `greeting` say "Hello, " followed by the `name` (use backticks and ' +
      '${name}), then print it.',
    starter:
      'let name = "Max";\n\n// 1. Use backticks ` ` and ${name}:\nlet greeting = ;\n\n// 2. Show the greeting:\nconsole.log(greeting);',
    hints: [
      'Backticks look like this: `Hello, ${name}`',
      'Make sure it reads exactly "Hello, Max" with a comma and a space.',
      'Type exactly: let greeting = `Hello, ${name}`;',
    ],
    checks: [
      { label: 'greeting is "Hello, Max"', expr: "greeting === 'Hello, Max'" },
    ],
    expectedOutput: ['Hello, Max'],
    success: 'Hello, Max! That template trick is powerful. ✨',
  },
  {
    id: 'str-3',
    topic: 'Strings',
    title: 'SHOUT IT',
    teach:
      'Words have built-in powers called methods. Add `.toUpperCase()` to the end ' +
      'of a word to turn it into ALL CAPITAL LETTERS — like shouting!',
    task: 'Make `loud` be the word `quiet` in all capital letters, then print it.',
    starter:
      'let quiet = "hello";\n\n// 1. Turn it LOUD with .toUpperCase()\nlet loud = ;\n\n// 2. Shout it out:\nconsole.log(loud);',
    hints: [
      'Add the power to the end of the variable: quiet.toUpperCase()',
      "Don't forget the empty parentheses () at the end.",
      'Type exactly: let loud = quiet.toUpperCase();',
    ],
    checks: [
      { label: 'loud is "HELLO"', expr: "loud === 'HELLO'" },
    ],
    expectedOutput: ['HELLO'],
    success: 'HELLO! 📣 You found a word power!',
  },
  {
    id: 'str-4',
    topic: 'Strings',
    title: 'Count the Letters',
    teach:
      'Every word knows how long it is. Add `.length` to a word to find out how ' +
      'many letters it has. (No parentheses needed for .length!)',
    task: 'Make `howLong` the number of letters in `word`, then print it.',
    starter:
      'let word = "dragon";\n\n// 1. How many letters? Use .length\nlet howLong = ;\n\n// 2. Show the count:\nconsole.log(howLong);',
    hints: [
      'Add .length to the word: word.length',
      'There are no parentheses after length.',
      'Type exactly: let howLong = word.length;',
    ],
    checks: [
      { label: 'howLong is a number', expr: "typeof howLong === 'number'" },
      { label: '"dragon" has 6 letters', expr: 'howLong === 6' },
    ],
    expectedOutput: ['6'],
    success: '"dragon" has 6 letters. You counted like a computer! 🐉',
  },
]

// Helper: puzzles in order, grouped nowhere — the map groups them by topic.
export function getPuzzleById(id) {
  return PUZZLES.find((p) => p.id === id)
}

export function getPuzzleIndex(id) {
  return PUZZLES.findIndex((p) => p.id === id)
}
