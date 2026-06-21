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
    title: 'Name Your Hero',
    teach:
      "Beep boop! A variable is like a labeled box. You put something inside, " +
      "and the label lets you find it later. We make a box with the word `let`.",
    task: 'Make a variable called `hero` and put your name (or any name!) inside it.',
    starter: '// Put a name inside the box.\nlet hero = ;',
    hints: [
      'A name is a word, and words go inside quotes like "Sam".',
      'It looks like: let hero = "something";',
      'Try exactly this: let hero = "Sam";',
    ],
    checks: [
      { label: 'hero is a word (a string)', expr: "typeof hero === 'string'" },
      { label: "hero isn't empty", expr: 'hero.length > 0' },
    ],
    success: 'Awesome — your hero has a name! 🎉',
  },
  {
    id: 'vars-2',
    topic: 'Variables',
    title: 'How Many Stars?',
    teach:
      'Boxes can also hold numbers! Numbers do NOT need quotes — you just write ' +
      'the number all by itself.',
    task: 'Make a variable called `stars` and put the number 5 inside it.',
    starter: '// Numbers do not need quotes.\nlet stars = ;',
    hints: [
      'Just write the number, no quotes needed.',
      'It looks like: let stars = 5;',
      'Type exactly: let stars = 5;',
    ],
    checks: [
      { label: 'stars is a number', expr: "typeof stars === 'number'" },
      { label: 'stars equals 5', expr: 'stars === 5' },
    ],
    success: 'Five shiny stars! ⭐⭐⭐⭐⭐',
  },
  {
    id: 'vars-3',
    topic: 'Variables',
    title: 'Level Up!',
    teach:
      'Here is the cool part: a box can change! Once you have made a variable ' +
      'with `let`, you can give it a new value any time — just use its name and `=`.',
    task:
      'The hero starts at level 1. Change `level` so it becomes 2 (level up!). ' +
      'Do NOT write `let` again — just use the name.',
    starter: 'let level = 1;\n\n// Now make level become 2 (no "let" this time):\n',
    hints: [
      'Use the name and an equals sign, like: level = 2;',
      'You do not need the word "let" to change a box you already made.',
      'On a new line type exactly: level = 2;',
    ],
    checks: [{ label: 'level is now 2', expr: 'level === 2' }],
    success: 'Ding! You reached level 2! 🆙',
  },

  // ------------------------------- MATH --------------------------------
  {
    id: 'math-1',
    topic: 'Math',
    title: 'Add It Up',
    teach:
      'The computer is a super-fast calculator. Use `+` to add numbers together. ' +
      'You can even add two variables!',
    task:
      'You have `apples` and `oranges`. Make a variable `total` that adds them ' +
      'together.',
    starter:
      'let apples = 3;\nlet oranges = 4;\n\n// Add them into a new box called total:\nlet total = ;',
    hints: [
      'You can add the two boxes: apples + oranges',
      'It looks like: let total = apples + oranges;',
      'Type exactly: let total = apples + oranges;',
    ],
    checks: [
      { label: 'total is a number', expr: "typeof total === 'number'" },
      { label: 'total equals 7', expr: 'total === 7' },
    ],
    success: '3 + 4 = 7. Nice adding! 🍎🍊',
  },
  {
    id: 'math-2',
    topic: 'Math',
    title: 'Build a Floor',
    teach:
      'To multiply, use the `*` star (it means "times"). The area of a rectangle ' +
      'is width times height.',
    task: 'Make a variable `area` equal to `width` times `height`.',
    starter:
      'let width = 5;\nlet height = 3;\n\n// area = width times height (use *):\nlet area = ;',
    hints: [
      'Multiply with the star: width * height',
      'It looks like: let area = width * height;',
      'Type exactly: let area = width * height;',
    ],
    checks: [
      { label: 'area is a number', expr: "typeof area === 'number'" },
      { label: 'area equals 15', expr: 'area === 15' },
    ],
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
      'There are 12 candies and 4 friends. Make `each` equal to the candies ' +
      'divided by the friends.',
    starter:
      'let candy = 12;\nlet friends = 4;\n\n// How many does each friend get? (use /)\nlet each = ;',
    hints: [
      'Divide with the slash: candy / friends',
      'It looks like: let each = candy / friends;',
      'Type exactly: let each = candy / friends;',
    ],
    checks: [
      { label: 'each is a number', expr: "typeof each === 'number'" },
      { label: 'each equals 3', expr: 'each === 3' },
    ],
    success: 'Everyone gets 3 candies. Fair and sweet! 🍬',
  },
  {
    id: 'math-4',
    topic: 'Math',
    title: 'Show the Answer',
    teach:
      'To make the computer SHOW something, use `console.log(...)`. Whatever you ' +
      'put in the parentheses appears in the output box.',
    task: 'Use console.log to print the answer to 6 + 7.',
    starter: '// Print the answer to 6 + 7\nconsole.log();',
    hints: [
      'Put the math inside the parentheses: console.log(6 + 7)',
      'It looks like: console.log(6 + 7);',
      'Type exactly: console.log(6 + 7);',
    ],
    checks: [],
    expectedOutput: ['13'],
    success: 'There it is — 13 on the screen! 🖨️',
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
      'Join `first` and `last` into `fullName`, with a space " " in between.',
    starter:
      'let first = "Ada";\nlet last = "Byte";\n\n// Glue them with a space in the middle:\nlet fullName = ;',
    hints: [
      'Glue three things: first, a space, then last.',
      'The space is just quotes with a space inside: " "',
      'Type exactly: let fullName = first + " " + last;',
    ],
    checks: [
      { label: 'fullName is "Ada Byte"', expr: "fullName === 'Ada Byte'" },
    ],
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
      'Make `greeting` say "Hello, " followed by the `name`. Use backticks and ${name}.',
    starter:
      'let name = "Max";\n\n// Use backticks ` ` and ${name}:\nlet greeting = ;',
    hints: [
      'Backticks look like this: `Hello, ${name}`',
      'Make sure it reads exactly "Hello, Max" with a comma and a space.',
      'Type exactly: let greeting = `Hello, ${name}`;',
    ],
    checks: [
      { label: 'greeting is "Hello, Max"', expr: "greeting === 'Hello, Max'" },
    ],
    success: 'Hello, Max! That template trick is powerful. ✨',
  },
  {
    id: 'str-3',
    topic: 'Strings',
    title: 'SHOUT IT',
    teach:
      'Words have built-in powers called methods. Add `.toUpperCase()` to the end ' +
      'of a word to turn it into ALL CAPITAL LETTERS — like shouting!',
    task: 'Make `loud` be the word `quiet` turned into all capital letters.',
    starter:
      'let quiet = "hello";\n\n// Turn it LOUD with .toUpperCase()\nlet loud = ;',
    hints: [
      'Add the power to the end of the variable: quiet.toUpperCase()',
      "Don't forget the empty parentheses () at the end.",
      'Type exactly: let loud = quiet.toUpperCase();',
    ],
    checks: [
      { label: 'loud is "HELLO"', expr: "loud === 'HELLO'" },
    ],
    success: 'HELLO! 📣 You found a word power!',
  },
  {
    id: 'str-4',
    topic: 'Strings',
    title: 'Count the Letters',
    teach:
      'Every word knows how long it is. Add `.length` to a word to find out how ' +
      'many letters it has. (No parentheses needed for .length!)',
    task: 'Make `howLong` equal to the number of letters in `word`.',
    starter:
      'let word = "dragon";\n\n// How many letters? Use .length\nlet howLong = ;',
    hints: [
      'Add .length to the word: word.length',
      'There are no parentheses after length.',
      'Type exactly: let howLong = word.length;',
    ],
    checks: [
      { label: 'howLong is a number', expr: "typeof howLong === 'number'" },
      { label: '"dragon" has 6 letters', expr: 'howLong === 6' },
    ],
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
