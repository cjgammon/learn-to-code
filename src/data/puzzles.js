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
  {
    title: 'True or False',
    emoji: '🔍',
    blurb: 'Yes-or-no values.',
  },
  {
    title: 'Decisions',
    emoji: '🔀',
    blurb: 'Let the code choose.',
  },
  {
    title: 'Loops',
    emoji: '🔁',
    blurb: 'Do it again and again.',
  },
  {
    title: 'Functions',
    emoji: '⚙️',
    blurb: 'Build your own commands.',
  },
  {
    title: 'Lists',
    emoji: '📋',
    blurb: 'Keep many things together.',
  },
  {
    title: 'Objects',
    emoji: '🗂️',
    blurb: 'Things with labels and details.',
  },
  {
    title: 'Blueprints',
    emoji: '🏗️',
    blurb: 'Make as many as you need.',
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
      "and the label lets you find it later. We make a box with the word `let`. " +
      'When you put WORDS in a box, wrap them in "quotation marks" — that tells ' +
      "the computer it's text, not a secret command. I've already added a " +
      "`console.log` line for you — that's the part that shows what's in the box " +
      "down in the output. Just fill in the box!",
    task: 'Put your name (or any name!) inside the `hero` box — remember the quotes!',
    starter:
      '// Put a name inside the box.\nlet hero = ;\n\n// This line shows it in the output below:\nconsole.log(hero);',
    hints: [
      'A name is a word, and words go inside quotes like "Sam".',
      'It looks like: let hero = "something";',
      'Try exactly this: let hero = "Sam";',
    ],
    checks: [
      { label: 'hero is a word (a string)', expr: "typeof hero === 'string'" },
      { label: "hero isn't empty", expr: 'hero.length > 0' },
    ],
    success: 'Awesome — your hero has a name, and there it is on screen! 🎉',
  },
  {
    id: 'vars-2',
    topic: 'Variables',
    title: 'How Many Stars?',
    teach:
      'Boxes can also hold numbers! Numbers do NOT need quotes — you just write ' +
      'the number all by itself. The console.log line will show it for you.',
    task: 'Put the number 5 inside the `stars` box.',
    starter:
      '// Numbers do not need quotes.\nlet stars = ;\n\nconsole.log(stars);',
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
    starter:
      'let level = 1;\n\n// Now make level become 2 (no "let" this time):\n\n\nconsole.log(level);',
    hints: [
      'Use the name and an equals sign, like: level = 2;',
      'You do not need the word "let" to change a box you already made.',
      'On a blank line above the console.log, type exactly: level = 2;',
    ],
    checks: [{ label: 'level is now 2', expr: 'level === 2' }],
    success: 'Ding! You reached level 2! 🆙',
  },
  {
    id: 'vars-challenge',
    topic: 'Variables',
    title: 'Challenge: Hero Card',
    teach:
      "Time for a challenge — you've got this! No blanks this time. You write the " +
      'code yourself, using everything you learned: a word box, a number box, and ' +
      'changing a box. I believe in you! 🤖',
    task:
      'Make a `hero` box with any name (a word, in quotes). Make a `level` box that ' +
      'starts at 1. Then level the hero up by changing `level` to 5.',
    starter:
      '// 1. Make a hero box with a name (in quotes).\n// 2. Make a level box that starts at 1.\n// 3. Then change level to 5.\n\n\n// This shows your hero card:\nconsole.log(hero, "is level", level);',
    hints: [
      'Make two boxes first: let hero = "..."; and let level = 1;',
      'To level up, use the name with no "let": level = 5;',
      'Try:\nlet hero = "Sam";\nlet level = 1;\nlevel = 5;',
    ],
    checks: [
      { label: 'hero is a word (a string)', expr: "typeof hero === 'string'" },
      { label: "hero isn't empty", expr: 'hero.length > 0' },
      { label: 'level reached 5', expr: 'level === 5' },
    ],
    success: 'You built a whole hero card from scratch — level 5! 🌟',
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
      'let apples = 3;\nlet oranges = 4;\n\n// Add them into a new box called total:\nlet total = ;\n\nconsole.log(total);',
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
      'let width = 5;\nlet height = 3;\n\n// area = width times height (use *):\nlet area = ;\n\nconsole.log(area);',
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
      'let candy = 12;\nlet friends = 4;\n\n// How many does each friend get? (use /)\nlet each = ;\n\nconsole.log(each);',
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
    id: 'math-challenge',
    topic: 'Math',
    title: 'Challenge: Pizza Party',
    teach:
      "Challenge time! Mix your math powers together. You'll need times (`*`) AND " +
      'divide (`/`) to solve this one. Work out the order yourself — you can do it!',
    task:
      'There are 3 pizzas, each cut into 8 slices, shared by 4 friends. Make ' +
      '`slicesEach` equal to how many slices each friend gets.',
    starter:
      'let pizzas = 3;\nlet slicesPerPizza = 8;\nlet friends = 4;\n\n// How many slices does each friend get?\nlet slicesEach = ;\n\nconsole.log(slicesEach);',
    hints: [
      'First find ALL the slices, then share them: total slices / friends.',
      'All slices is pizzas * slicesPerPizza.',
      'Try: let slicesEach = pizzas * slicesPerPizza / friends;',
    ],
    checks: [
      { label: 'slicesEach is a number', expr: "typeof slicesEach === 'number'" },
      { label: 'slicesEach equals 6', expr: 'slicesEach === 6' },
    ],
    expectedOutput: ['6'],
    success: '24 slices, 4 friends, 6 each. Pizza math champion! 🍕',
  },

  // ------------------------------ STRINGS ------------------------------
  {
    id: 'str-1',
    topic: 'Strings',
    title: 'Full Name',
    teach:
      'You can glue words together with `+`. Gluing words is called joining. ' +
      'To get a gap between them, glue in a space — a space is just quotes with ' +
      'a blank inside: " ". Without it, the words smoosh together!',
    task:
      'Join `first` and `last` into `fullName`, with a space " " in between.',
    starter:
      'let first = "Ada";\nlet last = "Byte";\n\n// Glue them with a space in the middle:\nlet fullName = ;\n\nconsole.log(fullName);',
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
      'let name = "Max";\n\n// Use backticks ` ` and ${name}:\nlet greeting = ;\n\nconsole.log(greeting);',
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
      'let quiet = "hello";\n\n// Turn it LOUD with .toUpperCase()\nlet loud = ;\n\nconsole.log(loud);',
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
      'let word = "dragon";\n\n// How many letters? Use .length\nlet howLong = ;\n\nconsole.log(howLong);',
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
  {
    id: 'str-5',
    topic: 'Strings',
    title: 'Show and Tell',
    teach:
      "You've seen `console.log` helping out in every puzzle — here's its secret: " +
      'it shows ANYTHING you give it in the output box. You can even show several ' +
      'things at once by separating them with commas, and it adds a space between.',
    task: 'Use console.log to show the sentence:  Bit is 10',
    starter:
      'let name = "Bit";\nlet age = 10;\n\n// Show a sentence! Separate things with commas.\nconsole.log();',
    hints: [
      'console.log can show several things: console.log(a, b, c)',
      'Put the word "is" in quotes between the two variables.',
      'Type exactly: console.log(name, "is", age);',
    ],
    checks: [],
    expectedOutput: ['Bit is 10'],
    success: 'Bit is 10 — now you can show anything you like! 📢',
  },
  {
    id: 'str-challenge',
    topic: 'Strings',
    title: 'Challenge: Make a Poster',
    teach:
      "Challenge time! Put your word powers together: backticks with ${ } to build " +
      'a sentence, AND `.toUpperCase()` to make it SHOUT. Two tricks in one line!',
    task:
      'Build `poster` so it reads exactly:  WELCOME, MAX!  — all in capitals. Use ' +
      'the `name` box and make the whole thing uppercase.',
    starter:
      'let name = "Max";\n\n// Make poster read: WELCOME, MAX!\nlet poster = ;\n\nconsole.log(poster);',
    hints: [
      'First build the sentence with backticks: `Welcome, ${name}!`',
      'Then add .toUpperCase() to the end to make it all capitals.',
      'Try: let poster = `Welcome, ${name}!`.toUpperCase();',
    ],
    checks: [
      { label: 'poster is "WELCOME, MAX!"', expr: 'poster === "WELCOME, MAX!"' },
    ],
    expectedOutput: ['WELCOME, MAX!'],
    success: 'WELCOME, MAX! Your poster is ready to hang. 📜',
  },

  // -------------------------- TRUE OR FALSE ----------------------------
  {
    id: 'bool-1',
    topic: 'True or False',
    title: 'True or False',
    teach:
      'Some answers are just yes or no. In code we write those as `true` or ' +
      '`false` — these special words are called booleans. They never need quotes!',
    task: 'Make a boolean called `isFun` and set it to true.',
    starter: '// Booleans are true or false (no quotes!)\nlet isFun = ;\n\nconsole.log(isFun);',
    hints: [
      'Just write the word true, with no quotes.',
      'It looks like: let isFun = true;',
      'Type exactly: let isFun = true;',
    ],
    checks: [
      { label: 'isFun is a true/false value', expr: "typeof isFun === 'boolean'" },
      { label: 'isFun is true', expr: 'isFun === true' },
    ],
    success: 'Coding IS fun — true! 😄',
  },
  {
    id: 'bool-2',
    topic: 'True or False',
    title: 'Bigger or Smaller',
    teach:
      'You can ASK the computer a question and it answers true or false. Use `>` ' +
      'for "bigger than" and `<` for "smaller than". So 10 > 3 is... true!',
    task: 'Make `isBigger` ask whether 10 is bigger than 3.',
    starter: '// Is 10 bigger than 3? Use >\nlet isBigger = ;\n\nconsole.log(isBigger);',
    hints: [
      'Compare with the > sign: 10 > 3',
      'It looks like: let isBigger = 10 > 3;',
      'Type exactly: let isBigger = 10 > 3;',
    ],
    checks: [
      { label: 'isBigger is a true/false value', expr: "typeof isBigger === 'boolean'" },
      { label: 'isBigger is true', expr: 'isBigger === true' },
    ],
    success: 'Yep, 10 is bigger than 3 — true! 📏',
  },
  {
    id: 'bool-3',
    topic: 'True or False',
    title: 'Are They Equal?',
    teach:
      'To check if two things are EXACTLY the same, use three equals signs ' +
      '`===`. It answers true if they match and false if they do not. Three ' +
      'equals, not one!',
    task: 'Check if `password` is exactly "abc". Store the answer in `match`.',
    starter:
      'let password = "abc";\n\n// Is password exactly "abc"? Use ===\nlet match = ;\n\nconsole.log(match);',
    hints: [
      'Compare with three equals: password === "abc"',
      'It looks like: let match = password === "abc";',
      'Type exactly: let match = password === "abc";',
    ],
    checks: [{ label: 'match is true', expr: 'match === true' }],
    success: "Passwords match — you're in! 🔓",
  },
  {
    id: 'bool-4',
    topic: 'True or False',
    title: 'Flip It',
    teach:
      'The `!` mark means "not" — it flips a boolean to its opposite. `!true` ' +
      'becomes false, and `!false` becomes true. Perfect for opposites!',
    task: 'It is daytime (`isDay` is true). Make `isNight` the OPPOSITE of isDay using `!`.',
    starter:
      'let isDay = true;\n\n// isNight is the opposite of isDay. Use !\nlet isNight = ;\n\nconsole.log(isNight);',
    hints: [
      'Put a ! in front to flip it: !isDay',
      'It looks like: let isNight = !isDay;',
      'Type exactly: let isNight = !isDay;',
    ],
    checks: [{ label: 'isNight is false', expr: 'isNight === false' }],
    success: 'Day flipped to night! 🌙',
  },
  {
    id: 'bool-challenge',
    topic: 'True or False',
    title: 'Challenge: Secret Code',
    teach:
      "Challenge time! You're a code-cracker now. Use `===` to check if two things " +
      'match, and `>` to check if one is bigger. Two questions, two booleans!',
    task:
      'The secret number is 7 and the guess is 9. Make `correct` ask if the guess ' +
      'equals the secret. Make `tooHigh` ask if the guess is bigger than the secret.',
    starter:
      'let secret = 7;\nlet guess = 9;\n\n// Did they guess right? (use ===)\nlet correct = ;\n\n// Was the guess too high? (use >)\nlet tooHigh = ;\n\nconsole.log(correct, tooHigh);',
    hints: [
      'correct compares with three equals: guess === secret',
      'tooHigh compares with bigger-than: guess > secret',
      'Try:\nlet correct = guess === secret;\nlet tooHigh = guess > secret;',
    ],
    checks: [
      { label: 'correct is false (9 is not 7)', expr: 'correct === false' },
      { label: 'tooHigh is true (9 is bigger than 7)', expr: 'tooHigh === true' },
    ],
    success: 'Wrong guess, and too high — you cracked the logic! 🔐',
  },

  // ---------------------------- DECISIONS ------------------------------
  {
    id: 'if-1',
    topic: 'Decisions',
    title: 'Secret Door',
    teach:
      'Now we make the code DECIDE. An `if` checks something you put in its ( ) ' +
      'and runs the code inside its { } only when that something is true. Like: ' +
      'if you have the key, the door opens.',
    task: 'Fill in the if so that when `hasKey` is true, `message` becomes "Welcome!".',
    starter:
      'let hasKey = true;\nlet message = "Locked";\n\n// Run this only if hasKey is true:\nif () {\n  message = "Welcome!";\n}\n\nconsole.log(message);',
    hints: [
      'The thing to check goes in the parentheses: if (hasKey)',
      'Just put hasKey between the ( ).',
      'Type: if (hasKey) {',
    ],
    checks: [{ label: 'message is "Welcome!"', expr: 'message === "Welcome!"' }],
    success: 'The door swings open — Welcome! 🚪',
  },
  {
    id: 'if-2',
    topic: 'Decisions',
    title: 'Pass or Fail',
    teach:
      'Sometimes you want one thing OR another. `if` ... `else` does exactly ' +
      'that: if the test is true, do the first part; otherwise (`else`) do the ' +
      'second part.',
    task: 'If `score` is 50 or more, set `result` to "pass". Otherwise set it to "fail".',
    starter:
      'let score = 72;\nlet result = "";\n\nif (score >= 50) {\n  result = ;\n} else {\n  result = ;\n}\n\nconsole.log(result);',
    hints: [
      'Put "pass" in the if part and "fail" in the else part (with quotes).',
      'First blank: result = "pass";  second blank: result = "fail";',
      'Fill them in: result = "pass"; and result = "fail";',
    ],
    checks: [{ label: 'result is "pass" for score 72', expr: 'result === "pass"' }],
    success: 'Score 72 — you pass! 🎓',
  },
  {
    id: 'if-3',
    topic: 'Decisions',
    title: 'Pick a Size',
    teach:
      'You can chain decisions with `else if` to pick from several choices. The ' +
      'computer checks each one in order and uses the first that is true.',
    task: 'Set `size`: if `n` is over 10 → "big", else if over 5 → "medium", else → "small".',
    starter:
      'let n = 8;\nlet size = "";\n\nif (n > 10) {\n  size = "big";\n} else if (n > 5) {\n  size = ;\n} else {\n  size = "small";\n}\n\nconsole.log(size);',
    hints: [
      'n is 8 — more than 5 but not more than 10, so it is the middle one.',
      'Fill the blank with "medium" (in quotes).',
      'Type exactly: size = "medium";',
    ],
    checks: [{ label: 'size is "medium" for n = 8', expr: 'size === "medium"' }],
    success: "n is 8 — that's medium! 🥤",
  },
  {
    id: 'if-challenge',
    topic: 'Decisions',
    title: 'Challenge: Medal Ceremony',
    teach:
      "Challenge time! Write the whole decision yourself this time — no blanks. " +
      'Use `if`, `else if`, and `else` to hand out the right medal. You decide the ' +
      'rules in code!',
    task:
      'A runner finished in 15 seconds. Set `medal`: under 10 → "gold", under 20 → ' +
      '"silver", otherwise → "bronze".',
    starter:
      'let time = 15;\nlet medal = "";\n\n// Write the if / else if / else to pick the medal:\n\n\nconsole.log(medal);',
    hints: [
      'Start with: if (time < 10) { medal = "gold"; }',
      'Then add: else if (time < 20) { medal = "silver"; }',
      'Try:\nif (time < 10) {\n  medal = "gold";\n} else if (time < 20) {\n  medal = "silver";\n} else {\n  medal = "bronze";\n}',
    ],
    checks: [{ label: 'medal is "silver" for time 15', expr: 'medal === "silver"' }],
    expectedOutput: ['silver'],
    success: '15 seconds earns silver — you wrote the whole rulebook! 🥈',
  },

  // ------------------------------ LOOPS --------------------------------
  {
    id: 'loop-1',
    topic: 'Loops',
    title: 'Count to Five',
    teach:
      'A `for` loop repeats code. This one starts i at 1, keeps going while i is ' +
      '5 or less, and adds 1 each time. Whatever is inside { } happens every round!',
    task: 'Print the numbers 1, 2, 3, 4, 5 — each on its own line.',
    starter: 'for (let i = 1; i <= 5; i = i + 1) {\n  console.log();\n}',
    hints: [
      'Print the counter i each time around: console.log(i)',
      'Put i inside the parentheses.',
      'Type exactly: console.log(i);',
    ],
    checks: [],
    expectedOutput: ['1', '2', '3', '4', '5'],
    success: 'Counted to five, all by loop! 🔢',
  },
  {
    id: 'loop-2',
    topic: 'Loops',
    title: 'Add Them Up',
    teach:
      'Loops are great for adding lots of numbers. We keep a `total` and add the ' +
      'counter to it every time around the loop.',
    task: 'Use the loop to add up 1 through 10 into `total`.',
    starter:
      'let total = 0;\n\nfor (let i = 1; i <= 10; i = i + 1) {\n  // add i to total each time\n  total = ;\n}\n\nconsole.log(total);',
    hints: [
      'Add i to whatever total already is: total + i',
      'It looks like: total = total + i;',
      'Type exactly: total = total + i;',
    ],
    checks: [
      { label: 'total is a number', expr: "typeof total === 'number'" },
      { label: 'total equals 55', expr: 'total === 55' },
    ],
    expectedOutput: ['55'],
    success: '1 + 2 + ... + 10 = 55. The loop did the work! ➕',
  },
  {
    id: 'loop-3',
    topic: 'Loops',
    title: 'Count by Twos',
    teach:
      'You can make a loop skip! Instead of adding 1 each time, add 2 to count by ' +
      'twos: 2, 4, 6, and so on.',
    task: 'Make this loop count by twos (2, 4, 6, 8, 10) by adding 2 each time.',
    starter: 'for (let i = 2; i <= 10; i = ) {\n  console.log(i);\n}',
    hints: [
      'Each time, i should go up by 2: i + 2',
      'Fill the blank: i = i + 2',
      'Type exactly: i = i + 2',
    ],
    checks: [],
    expectedOutput: ['2', '4', '6', '8', '10'],
    success: 'Two, four, six, eight... counting by twos! 👟',
  },
  {
    id: 'loop-challenge',
    topic: 'Loops',
    title: 'Challenge: Countdown',
    teach:
      "Challenge time! Every loop so far counted UP. Can you make one count DOWN? " +
      "Build the whole loop yourself, then blast off at the end. Ready? 🚀",
    task:
      'Print a countdown 5, 4, 3, 2, 1 — each on its own line — and then print ' +
      '"Blast off!" on the last line.',
    starter:
      "// Count down from 5 to 1, then blast off!\n\n\nconsole.log(\"Blast off!\");",
    hints: [
      'Start the counter high and go down: let i = 5; keep going while i >= 1.',
      'To count down, subtract each time: i = i - 1. Print i inside the loop.',
      'Try:\nfor (let i = 5; i >= 1; i = i - 1) {\n  console.log(i);\n}\nconsole.log("Blast off!");',
    ],
    checks: [],
    expectedOutput: ['5', '4', '3', '2', '1', 'Blast off!'],
    success: '5… 4… 3… 2… 1… Blast off! You flew the loop backwards! 🚀',
  },

  // ---------------------------- FUNCTIONS ------------------------------
  {
    id: 'fn-1',
    topic: 'Functions',
    title: 'Doubling Machine',
    teach:
      'A function is a little machine you build once and use again and again. You ' +
      'give it something (an input), and it gives back a result with `return`.',
    task: 'Finish the `double` machine so it returns its input times 2.',
    starter:
      'function double(n) {\n  return ;\n}\n\n// Try the machine:\nconsole.log(double(5));',
    hints: [
      'Return the input times 2: n * 2',
      'It looks like: return n * 2;',
      'Type exactly: return n * 2;',
    ],
    checks: [
      { label: 'double(5) is 10', expr: 'double(5) === 10' },
      { label: 'double(7) is 14', expr: 'double(7) === 14' },
    ],
    expectedOutput: ['10'],
    success: 'Your doubling machine works! double(5) = 10. ⚙️',
  },
  {
    id: 'fn-2',
    topic: 'Functions',
    title: 'Greeting Machine',
    teach:
      'Machines can work with words too. This one takes a name and returns a ' +
      'greeting. Remember backticks and ${ } let you drop the name into a sentence.',
    task: 'Finish `greet` so it returns "Hi, " followed by the name.',
    starter:
      'function greet(name) {\n  return ;\n}\n\nconsole.log(greet("Max"));',
    hints: [
      'Use backticks and ${name}: `Hi, ${name}`',
      'Make it read "Hi, Max" — a comma and space after Hi.',
      'Type exactly: return `Hi, ${name}`;',
    ],
    checks: [
      { label: 'greet("Max") is "Hi, Max"', expr: 'greet("Max") === "Hi, Max"' },
      { label: 'greet("Sam") is "Hi, Sam"', expr: 'greet("Sam") === "Hi, Sam"' },
    ],
    expectedOutput: ['Hi, Max'],
    success: 'Hi, Max! Your greeting machine is ready. 👋',
  },
  {
    id: 'fn-3',
    topic: 'Functions',
    title: 'Add Machine',
    teach:
      'Machines can take more than one input! This one takes two numbers and ' +
      'returns them added together.',
    task: 'Finish `add` so it returns the two inputs added together.',
    starter:
      'function add(a, b) {\n  return ;\n}\n\nconsole.log(add(2, 3));',
    hints: [
      'Add the two inputs: a + b',
      'It looks like: return a + b;',
      'Type exactly: return a + b;',
    ],
    checks: [
      { label: 'add(2, 3) is 5', expr: 'add(2, 3) === 5' },
      { label: 'add(10, 4) is 14', expr: 'add(10, 4) === 14' },
    ],
    expectedOutput: ['5'],
    success: 'add(2, 3) = 5. You built a calculator! 🧮',
  },
  {
    id: 'fn-challenge',
    topic: 'Functions',
    title: 'Challenge: Ticket Machine',
    teach:
      "Final challenge — the big one! Build a machine that makes a DECISION inside " +
      'it. Use a function, a `return`, and a comparison (`>=`) all together. This is ' +
      'everything you know in one puzzle. Go for it! 🏆',
    task:
      'Build `canRide(height)` so it returns true when height is 120 or more, and ' +
      'false when it is less. Then it shows whether someone 130 tall can ride.',
    starter:
      'function canRide(height) {\n  // Return true if height is 120 or more, otherwise false.\n\n}\n\nconsole.log(canRide(130));',
    hints: [
      'Ask the question with >=: height >= 120 is already true or false.',
      'You can return that question straight back: return height >= 120;',
      'Try:\nfunction canRide(height) {\n  return height >= 120;\n}',
    ],
    checks: [
      { label: 'canRide(130) is true', expr: 'canRide(130) === true' },
      { label: 'canRide(100) is false', expr: 'canRide(100) === false' },
      { label: 'canRide(120) is true', expr: 'canRide(120) === true' },
    ],
    expectedOutput: ['true'],
    success: 'Tall enough to ride — your machine makes its own decisions! 🎢',
  },

  // ------------------------------- LISTS --------------------------------
  {
    id: 'arr-1',
    topic: 'Lists',
    title: 'Make a List',
    teach:
      'Sometimes one box is not enough — you need a whole LIST of things! ' +
      'In JavaScript, a list is called an array. You write it with square ' +
      'brackets `[ ]` and separate each item with a comma.',
    task: 'Fill in the `colors` list with three colors of your choice.',
    starter:
      '// A list goes inside [ ] with commas between items.\nlet colors = ;\n\nconsole.log(colors);',
    hints: [
      'Wrap each color in quotes and separate them with commas.',
      'It looks like: ["red", "blue", "green"]',
      'Type exactly: let colors = ["red", "blue", "green"];',
    ],
    checks: [
      { label: 'colors is a list (array)', expr: 'Array.isArray(colors)' },
      { label: 'colors has 3 items', expr: 'colors.length === 3' },
    ],
    success: 'Three colors in one box — lists are powerful! 🎨',
  },
  {
    id: 'arr-2',
    topic: 'Lists',
    title: 'Grab One Item',
    teach:
      'Every item in a list has a slot number. The first slot is 0, the ' +
      'second is 1, and so on. Write `list[0]` to grab the first item, ' +
      '`list[1]` for the second. Counting from zero is a programmer thing!',
    task: 'Get the FIRST fruit from `fruits` into `first`.',
    starter:
      'let fruits = ["apple", "banana", "cherry"];\n\n// Grab the first item (slot 0):\nlet first = ;\n\nconsole.log(first);',
    hints: [
      'Use the list name and square brackets with the slot number.',
      'The first slot is 0: fruits[0]',
      'Type exactly: let first = fruits[0];',
    ],
    checks: [
      { label: 'first is "apple"', expr: 'first === "apple"' },
    ],
    expectedOutput: ['apple'],
    success: 'apple — slot zero, the very first! 🍎',
  },
  {
    id: 'arr-3',
    topic: 'Lists',
    title: 'Add to a List',
    teach:
      '`.push()` adds a new item to the END of a list. Think of it like ' +
      'adding something to the bottom of a shopping list.',
    task: 'Use `.push()` to add one more snack to the `snacks` list.',
    starter:
      'let snacks = ["chips", "popcorn"];\n\n// Add a new snack to the end:\n\n\nconsole.log(snacks.length);',
    hints: [
      'Call .push() on the list with the new item inside the parentheses.',
      'It looks like: snacks.push("something");',
      'Try exactly: snacks.push("pretzels");',
    ],
    checks: [
      { label: 'snacks now has 3 items', expr: 'snacks.length === 3' },
      { label: 'snacks is still a list', expr: 'Array.isArray(snacks)' },
    ],
    expectedOutput: ['3'],
    success: 'List now has 3 snacks. Push is handy! 🍿',
  },
  {
    id: 'arr-4',
    topic: 'Lists',
    title: 'Count the Items',
    teach:
      'Just like words have `.length` to count letters, lists have `.length` ' +
      'to count items. Same trick, different thing!',
    task: 'Make `count` equal to how many planets are in the list.',
    starter:
      'let planets = ["Mercury", "Venus", "Earth", "Mars"];\n\n// How many planets? Use .length\nlet count = ;\n\nconsole.log(count);',
    hints: [
      'Add .length to the list name: planets.length',
      'It looks like: let count = planets.length;',
      'Type exactly: let count = planets.length;',
    ],
    checks: [
      { label: 'count is a number', expr: "typeof count === 'number'" },
      { label: 'count equals 4', expr: 'count === 4' },
    ],
    expectedOutput: ['4'],
    success: '4 planets in the list — you counted like a computer! 🪐',
  },
  {
    id: 'arr-challenge',
    topic: 'Lists',
    title: 'Challenge: Guest List',
    teach:
      "Challenge time — you've got this! Grab a specific guest by slot number " +
      'AND count the whole list. Two list skills in one puzzle.',
    task:
      'Get the SECOND guest (slot 1) into `second`. Count all guests into `total`. ' +
      'Both are already logged for you.',
    starter:
      'let guests = ["Alice", "Bob", "Charlie", "Dana"];\n\n// Second guest (slot 1):\nlet second = ;\n\n// How many guests total?\nlet total = ;\n\nconsole.log(second);\nconsole.log(total);',
    hints: [
      'The second item is at slot 1: guests[1]',
      'Count with .length: guests.length',
      'Try:\nlet second = guests[1];\nlet total = guests.length;',
    ],
    checks: [
      { label: 'second is "Bob"', expr: 'second === "Bob"' },
      { label: 'total is 4', expr: 'total === 4' },
    ],
    expectedOutput: ['Bob', '4'],
    success: 'Bob is guest #2, 4 guests total — list master! 🎉',
  },

  // ------------------------------ OBJECTS ------------------------------
  {
    id: 'obj-1',
    topic: 'Objects',
    title: 'Build a Profile',
    teach:
      'An object is like a mini-profile for one thing. It holds several ' +
      'labeled details inside curly braces `{ }`. Each label (called a key) ' +
      'is followed by `:` and then the value. Commas go between each detail.',
    task: 'Fill in the `pet` object: give it the name "Spark" and age 3.',
    starter:
      '// An object holds labeled details.\nlet pet = { name: , age: };\n\nconsole.log(pet.name, pet.age);',
    hints: [
      'name gets a word (in quotes), age gets a number.',
      'It looks like: { name: "Spark", age: 3 }',
      'Type exactly: let pet = { name: "Spark", age: 3 };',
    ],
    checks: [
      { label: 'pet.name is "Spark"', expr: 'pet.name === "Spark"' },
      { label: 'pet.age is 3', expr: 'pet.age === 3' },
    ],
    expectedOutput: ['Spark 3'],
    success: 'Profile built — Spark is 3 years old! 🐾',
  },
  {
    id: 'obj-2',
    topic: 'Objects',
    title: 'Read a Detail',
    teach:
      'To read one detail from an object, use a dot: `thing.label`. ' +
      'It is like asking the object "what is your name?" and it answers.',
    task: "Read the hero's name into `heroName` using dot notation.",
    starter:
      'let hero = { name: "Zara", level: 7, weapon: "bow" };\n\n// Read the name with a dot:\nlet heroName = ;\n\nconsole.log(heroName);',
    hints: [
      'Use the object name, a dot, then the key: hero.name',
      'It looks like: let heroName = hero.name;',
      'Type exactly: let heroName = hero.name;',
    ],
    checks: [
      { label: 'heroName is "Zara"', expr: 'heroName === "Zara"' },
    ],
    expectedOutput: ['Zara'],
    success: "Zara — the hero's name is yours to read! ⚔️",
  },
  {
    id: 'obj-3',
    topic: 'Objects',
    title: 'Change a Detail',
    teach:
      'To update a detail, use the dot and a new `=`. It is just like ' +
      'changing a variable, but you point to the specific label inside the object.',
    task: "It's Spark's birthday! Change `pet.age` from 3 to 4.",
    starter:
      'let pet = { name: "Spark", age: 3 };\n\n// Update the age (the pet had a birthday!):\n\n\nconsole.log(pet.age);',
    hints: [
      'Use the dot to point to age, then assign a new value.',
      'It looks like: pet.age = 4;',
      'Type exactly: pet.age = 4;',
    ],
    checks: [
      { label: 'pet.age is now 4', expr: 'pet.age === 4' },
    ],
    expectedOutput: ['4'],
    success: 'Happy birthday Spark — now 4 years old! 🎂',
  },
  {
    id: 'obj-4',
    topic: 'Objects',
    title: 'Add a New Detail',
    teach:
      'You can add a brand-new label to an object at any time — just assign ' +
      'to a label that does not exist yet. The object grows!',
    task: 'Add a `brand` detail set to "Turbo" to the `car` object.',
    starter:
      'let car = { color: "red", doors: 4 };\n\n// Add a brand-new detail:\n\n\nconsole.log(car.brand);',
    hints: [
      'Use the dot and a new label name: car.brand = "something"',
      'The value should be "Turbo" (in quotes).',
      'Type exactly: car.brand = "Turbo";',
    ],
    checks: [
      { label: 'car.brand is "Turbo"', expr: 'car.brand === "Turbo"' },
    ],
    expectedOutput: ['Turbo'],
    success: 'Turbo added — the car got an upgrade! 🚗',
  },
  {
    id: 'obj-challenge',
    topic: 'Objects',
    title: 'Challenge: Hero Stats',
    teach:
      "Challenge time! Build the whole object yourself from a brief. " +
      "No blanks — you decide how to write it. You've got this! 🤖",
    task:
      'Create a `hero` object with: a `name` (any string), `hp` set to 100, ' +
      'and `level` set to 1. The log is already there for you.',
    starter:
      '// Build a hero object with name, hp, and level.\n\n\nconsole.log(hero.name, "HP:", hero.hp);',
    hints: [
      'Start with: let hero = { ... };',
      'Put all three details inside: name, hp, and level.',
      'Try:\nlet hero = { name: "Zara", hp: 100, level: 1 };',
    ],
    checks: [
      { label: 'hero.name is a string', expr: "typeof hero.name === 'string'" },
      { label: 'hero.name is not empty', expr: 'hero.name.length > 0' },
      { label: 'hero.hp is 100', expr: 'hero.hp === 100' },
      { label: 'hero.level is 1', expr: 'hero.level === 1' },
    ],
    success: 'Hero stats locked in — ready for adventure! 🗡️',
  },

  // --------------------------- BLUEPRINTS ------------------------------
  {
    id: 'class-1',
    topic: 'Blueprints',
    title: 'Your First Blueprint',
    teach:
      'A class is a BLUEPRINT for stamping out objects. When you build a ' +
      'new one, the `constructor` runs and sets it up. Inside, `this` means ' +
      '"the object being made right now." Save details with `this.label = value`.',
    task: 'Fill in the constructor so it saves the `name` input into `this.name`.',
    starter:
      'class Animal {\n  constructor(name) {\n    this.name = ;\n  }\n}\n\nlet dog = new Animal("Rex");\nconsole.log(dog.name);',
    hints: [
      'Save the input into this.name using the = sign.',
      'It looks like: this.name = name;',
      'Type exactly: this.name = name;',
    ],
    checks: [
      { label: 'new Animal("Rex").name is "Rex"', expr: 'new Animal("Rex").name === "Rex"' },
      { label: 'new Animal("Pixel").name is "Pixel"', expr: 'new Animal("Pixel").name === "Pixel"' },
    ],
    expectedOutput: ['Rex'],
    success: 'Blueprint works — every Animal remembers its name! 🐾',
  },
  {
    id: 'class-2',
    topic: 'Blueprints',
    title: 'Stamp Out Two',
    teach:
      'The magic of blueprints is making as many as you like — each one ' +
      'gets its own details. Use `new ClassName(value)` each time.',
    task: 'Use the Animal blueprint to make a `cat` named "Whiskers" and a `bird` named "Tweety".',
    starter:
      'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nlet cat = new Animal();\nlet bird = new Animal();\n\nconsole.log(cat.name);\nconsole.log(bird.name);',
    hints: [
      'Pass the name in the parentheses: new Animal("name")',
      'First: new Animal("Whiskers"), second: new Animal("Tweety")',
      'Fill in:\nlet cat = new Animal("Whiskers");\nlet bird = new Animal("Tweety");',
    ],
    checks: [
      { label: 'cat.name is "Whiskers"', expr: 'cat.name === "Whiskers"' },
      { label: 'bird.name is "Tweety"', expr: 'bird.name === "Tweety"' },
    ],
    expectedOutput: ['Whiskers', 'Tweety'],
    success: 'Two animals, one blueprint — stamp away! 🐱🐦',
  },
  {
    id: 'class-3',
    topic: 'Blueprints',
    title: 'Teach It a Trick',
    teach:
      'Classes can have METHODS — functions that belong to every object ' +
      'you stamp out. Inside a method, `this` still means "the one being used ' +
      'right now," so `this.name` gives you THAT animal\'s name.',
    task: 'Fill in `speak()` so it returns the animal\'s name + " says woof!".',
    starter:
      'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return ;\n  }\n}\n\nlet dog = new Animal("Rex");\nconsole.log(dog.speak());',
    hints: [
      'Use a template literal with this.name inside it.',
      'It reads: `${this.name} says woof!`',
      'Type exactly: return `${this.name} says woof!`;',
    ],
    checks: [
      { label: 'Rex says woof!', expr: 'new Animal("Rex").speak() === "Rex says woof!"' },
      { label: 'Bit says woof!', expr: 'new Animal("Bit").speak() === "Bit says woof!"' },
    ],
    expectedOutput: ['Rex says woof!'],
    success: 'Rex says woof! Methods make objects do things! 🐕',
  },
  {
    id: 'class-challenge',
    topic: 'Blueprints',
    title: 'Challenge: Robot Builder',
    teach:
      "Final challenge — the big one! Write a whole class yourself: " +
      "constructor AND a method. Everything you've learned about blueprints " +
      "in one puzzle. You can do this! 🤖",
    task:
      'Write a `Robot` class. The constructor takes a `name` and saves it. ' +
      '`greet()` returns "Hi, I am " + the robot\'s name.',
    starter:
      '// Write the Robot class here.\n// constructor(name) saves the name.\n// greet() returns "Hi, I am " + the name.\n\n\nlet r = new Robot("Bit");\nconsole.log(r.greet());',
    hints: [
      'Start with: class Robot { constructor(name) { this.name = name; } }',
      'Add a greet() method inside the class that returns a template literal.',
      'Try:\nclass Robot {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hi, I am ${this.name}`;\n  }\n}',
    ],
    checks: [
      { label: 'new Robot("Bit").greet() returns "Hi, I am Bit"', expr: 'new Robot("Bit").greet() === "Hi, I am Bit"' },
      { label: 'new Robot("R2").greet() returns "Hi, I am R2"', expr: 'new Robot("R2").greet() === "Hi, I am R2"' },
      { label: 'Robot saves the name', expr: 'new Robot("X").name === "X"' },
    ],
    expectedOutput: ['Hi, I am Bit'],
    success: 'Hi, I am Bit — you built a real blueprint! 🏆',
  },
]

// Helper: puzzles in order, grouped nowhere — the map groups them by topic.
export function getPuzzleById(id) {
  return PUZZLES.find((p) => p.id === id)
}

export function getPuzzleIndex(id) {
  return PUZZLES.findIndex((p) => p.id === id)
}
