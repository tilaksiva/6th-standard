/* ============================================================
   QUESTIONS.JS
   The full content bank for Expedition Class 6.
   Each subject has chapters; each chapter has:
     - quiz questions (tagged easy / medium / hard, used by
       Adventure Quiz, Time Challenge and Boss Battle)
     - "terms" (short concept <-> meaning pairs) used by
       Memory Match and Match-the-Following

   NOTE ON CONTENT SCOPE (left here as a code comment for
   whoever maintains this later): topics follow the general
   Telangana State Class 6 syllabus structure (Numbers &
   Geometry in Maths, Food/Materials/Motion in Science,
   Early Humans & Earth/Globe in Social Studies, core English
   grammar). Telugu chapter titles are kept generic
   (vocabulary/grammar) since exact textbook lesson names
   vary by print year - swap in the exact lesson names/poems
   from the child's actual textbook if you want a tighter match.
   Adding a new chapter only means pushing a new object into the
   relevant subject's `chapters` array below - nothing else in
   the app needs to change.
============================================================ */

const QUESTION_BANK = {

  math: {
    name: "Mathematics",
    icon: "🔢",
    color: "#4FC3E8",
    tagline: "Numbers, shapes & puzzles",
    chapters: [
      {
        id: "numbers",
        name: "Knowing Our Numbers",
        blurb: "Big numbers, place value & comparing amounts",
        questions: [
          { q: "What is the place value of 7 in 47,258?", options: ["7", "70", "700", "7,000"], answer: 3, difficulty: "easy", explain: "In 47,258 the digit 7 sits in the thousands place, so its place value is 7,000." },
          { q: "Which is the smallest 4-digit number?", options: ["9999", "1000", "0001", "1111"], answer: 1, difficulty: "easy", explain: "The smallest 4-digit number is 1000 - anything below that only needs 3 digits." },
          { q: "Arrange in ascending order: 4056, 4650, 4065", options: ["4056, 4065, 4650", "4650, 4065, 4056", "4065, 4056, 4650", "4056, 4650, 4065"], answer: 0, difficulty: "easy", explain: "Comparing digit by digit: 4056 < 4065 < 4650." },
          { q: "What is the successor of 99,999?", options: ["99,998", "100,000", "100,001", "9,999"], answer: 1, difficulty: "easy", explain: "The successor is 1 more than the number: 99,999 + 1 = 1,00,000." },
          { q: "Round 4,678 to the nearest hundred.", options: ["4,600", "4,700", "4,680", "4,000"], answer: 1, difficulty: "medium", explain: "Look at the tens digit (7). Since 7 ≥ 5, round up: 4,678 → 4,700." },
          { q: "How is 5,06,308 written in words (Indian system)?", options: ["Fifty lakh six thousand three hundred eight", "Five lakh six thousand three hundred eight", "Five lakh sixty thousand three hundred eight", "Fifty thousand six hundred eight"], answer: 1, difficulty: "medium", explain: "5,06,308 splits as 5 lakh + 06 thousand + 308 → Five lakh six thousand three hundred eight." },
          { q: "Which Roman numeral stands for 40?", options: ["XL", "LX", "XXXX", "IL"], answer: 0, difficulty: "medium", explain: "In Roman numerals, a smaller symbol before a bigger one means subtract: XL = 50 - 10 = 40." },
          { q: "What is the sum of the largest 3-digit number and the smallest 4-digit number?", options: ["1999", "1000", "999", "1099"], answer: 0, difficulty: "hard", explain: "Largest 3-digit = 999, smallest 4-digit = 1000. 999 + 1000 = 1999." },
          { q: "By how much does 1,00,000 exceed 87,459?", options: ["12,541", "13,541", "12,459", "12,641"], answer: 0, difficulty: "hard", explain: "1,00,000 − 87,459 = 12,541." },
          { q: "A shop sold 3,45,670 kg rice in Jan and 2,89,845 kg in Feb. How much more was sold in Jan?", options: ["55,825 kg", "56,825 kg", "54,825 kg", "55,725 kg"], answer: 0, difficulty: "hard", explain: "3,45,670 − 2,89,845 = 55,825 kg more in January." }
        ],
        terms: [
          { term: "Place value", def: "The value of a digit based on its position in a number" },
          { term: "Face value", def: "The digit itself, no matter where it sits in the number" },
          { term: "Successor", def: "The number that comes right after a given number" },
          { term: "Predecessor", def: "The number that comes right before a given number" },
          { term: "Ascending order", def: "Arranging numbers from smallest to largest" },
          { term: "Descending order", def: "Arranging numbers from largest to smallest" }
        ]
      },
      {
        id: "geometry",
        name: "Basic Geometrical Ideas",
        blurb: "Points, lines, angles & shapes all around us",
        questions: [
          { q: "What do we call a straight path that extends endlessly in both directions?", options: ["Ray", "Line segment", "Line", "Point"], answer: 2, difficulty: "easy", explain: "A line has no endpoints and goes on forever in both directions." },
          { q: "How many endpoints does a line segment have?", options: ["0", "1", "2", "Infinite"], answer: 2, difficulty: "easy", explain: "A line segment is a fixed part of a line with exactly two endpoints." },
          { q: "A closed figure made of three line segments is called a...", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: 1, difficulty: "easy", explain: "Three line segments joined end to end form a triangle." },
          { q: "What is the name for two rays sharing a common endpoint?", options: ["Angle", "Curve", "Polygon", "Diameter"], answer: 0, difficulty: "easy", explain: "An angle is formed when two rays meet at a common point called the vertex." },
          { q: "Which of these is a simple closed curve?", options: ["A straight line", "A circle", "A ray", "Two crossing lines"], answer: 1, difficulty: "medium", explain: "A circle starts and ends at the same point without crossing itself - a simple closed curve." },
          { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1, difficulty: "medium", explain: "'Hexa' means six, so a hexagon always has 6 sides." },
          { q: "What do we call the point where two sides of a polygon meet?", options: ["Edge", "Vertex", "Diagonal", "Radius"], answer: 1, difficulty: "medium", explain: "The corner point where two sides meet is called a vertex (plural: vertices)." },
          { q: "A line segment joining the centre of a circle to a point on the circle is the...", options: ["Diameter", "Chord", "Radius", "Circumference"], answer: 2, difficulty: "hard", explain: "The radius connects the centre to any point on the circle's edge." },
          { q: "How many diagonals does a quadrilateral (4-sided figure) have?", options: ["1", "2", "3", "4"], answer: 1, difficulty: "hard", explain: "A quadrilateral has exactly 2 diagonals connecting opposite corners." },
          { q: "If the diameter of a circle is 14 cm, what is its radius?", options: ["28 cm", "7 cm", "14 cm", "3.5 cm"], answer: 1, difficulty: "hard", explain: "Radius is always half of the diameter: 14 ÷ 2 = 7 cm." }
        ],
        terms: [
          { term: "Point", def: "An exact location with no length, breadth or thickness" },
          { term: "Ray", def: "A part of a line with one endpoint that goes on forever in one direction" },
          { term: "Vertex", def: "The corner where two sides or rays meet" },
          { term: "Radius", def: "Distance from the centre of a circle to its edge" },
          { term: "Diameter", def: "A line passing through the centre joining two points on a circle" },
          { term: "Polygon", def: "A closed figure made of straight line segments" }
        ]
      },
      {
        id: "integers",
        name: "Integers",
        blurb: "Numbers above and below zero",
        questions: [
          { q: "Which of these is NOT an integer?", options: ["-5", "0", "3", "2.5"], answer: 3, difficulty: "easy", explain: "Integers are whole numbers - positive, negative or zero. 2.5 is a fraction, not an integer." },
          { q: "What is the opposite of -8?", options: ["8", "-8", "0", "18"], answer: 0, difficulty: "easy", explain: "Every negative number's opposite is the same number but positive: opposite of -8 is 8." },
          { q: "Which integer is greater: -2 or -7?", options: ["-2", "-7", "They are equal", "Cannot compare"], answer: 0, difficulty: "easy", explain: "On the number line, -2 is to the right of -7, so -2 is greater." },
          { q: "The temperature was -3°C in the morning and rose by 5°C by noon. What is the noon temperature?", options: ["2°C", "-8°C", "8°C", "-2°C"], answer: 0, difficulty: "medium", explain: "-3 + 5 = 2, so the temperature at noon is 2°C." },
          { q: "What is -6 + (-4)?", options: ["-10", "10", "-2", "2"], answer: 0, difficulty: "medium", explain: "Adding two negative numbers: their sizes add up and the answer stays negative, -6 + (-4) = -10." },
          { q: "A submarine is at -120 m. It rises 45 m. Where is it now?", options: ["-75 m", "-165 m", "75 m", "165 m"], answer: 0, difficulty: "medium", explain: "-120 + 45 = -75, so the submarine is now at -75 m (75 m below sea level)." },
          { q: "Which set correctly shows integers from smallest to largest: -3, 0, -8, 5", options: ["-8, -3, 0, 5", "5, 0, -3, -8", "-3, -8, 0, 5", "0, -3, -8, 5"], answer: 0, difficulty: "hard", explain: "On the number line, -8 comes first (furthest left), then -3, then 0, then 5." },
          { q: "What is 7 - (-3)?", options: ["4", "10", "-10", "-4"], answer: 1, difficulty: "hard", explain: "Subtracting a negative is the same as adding: 7 - (-3) = 7 + 3 = 10." },
          { q: "Which statement is true?", options: ["Every integer is a whole number", "Every whole number is an integer", "Integers cannot be negative", "0 is not an integer"], answer: 1, difficulty: "hard", explain: "Whole numbers (0,1,2,3...) are a part of the bigger integer family, which also includes negatives." },
          { q: "The sum of two integers is -2. If one integer is 6, what is the other?", options: ["-8", "8", "-4", "4"], answer: 0, difficulty: "hard", explain: "6 + x = -2, so x = -2 - 6 = -8." }
        ],
        terms: [
          { term: "Integer", def: "Whole numbers that can be positive, negative, or zero" },
          { term: "Positive integer", def: "An integer greater than zero" },
          { term: "Negative integer", def: "An integer less than zero" },
          { term: "Number line", def: "A line showing numbers in order, used to compare integers" },
          { term: "Absolute value", def: "The distance of a number from zero, always positive" },
          { term: "Opposite integers", def: "Two integers the same distance from zero but on different sides, like 5 and -5" }
        ]
      }
    ]
  },

  science: {
    name: "Science",
    icon: "🔬",
    color: "#7ED957",
    tagline: "Explore food, matter & living things",
    chapters: [
      {
        id: "food",
        name: "Food: Where Does It Come From?",
        blurb: "Sources of food and what we eat",
        questions: [
          { q: "Which of these is a plant product?", options: ["Honey", "Milk", "Rice", "Egg"], answer: 2, difficulty: "easy", explain: "Rice comes from the paddy plant, making it a plant product." },
          { q: "Herbivores eat...", options: ["Only plants", "Only animals", "Both plants and animals", "Neither"], answer: 0, difficulty: "easy", explain: "Herbivores such as cows and goats eat only plant material." },
          { q: "Which animal gives us honey?", options: ["Silkworm", "Bee", "Cow", "Hen"], answer: 1, difficulty: "easy", explain: "Bees collect nectar from flowers and turn it into honey in their hive." },
          { q: "Animals that eat both plants and other animals are called...", options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"], answer: 2, difficulty: "medium", explain: "Omnivores, like humans and bears, eat a mix of plant and animal food." },
          { q: "Which part of the plant is turmeric obtained from?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 1, difficulty: "medium", explain: "Turmeric is obtained from the underground stem (rhizome) of the turmeric plant." },
          { q: "Which of these is NOT an ingredient obtained from an animal?", options: ["Ghee", "Wool", "Wheat", "Cheese"], answer: 2, difficulty: "medium", explain: "Wheat is a plant product harvested from the wheat crop." },
          { q: "A tiger, which only eats other animals, is called a...", options: ["Herbivore", "Carnivore", "Omnivore", "Producer"], answer: 1, difficulty: "hard", explain: "Carnivores are animals whose diet is entirely other animals." },
          { q: "Which of these correctly matches a food item with its plant part?", options: ["Potato - root", "Potato - stem", "Carrot - stem", "Ginger - leaf"], answer: 1, difficulty: "hard", explain: "A potato is actually a swollen underground stem called a tuber, not a root." },
          { q: "Why do we need a variety of foods in our diet?", options: ["To make food taste better only", "Because no single food gives all the nutrients we need", "Because variety is cheaper", "It has no real reason"], answer: 1, difficulty: "hard", explain: "Different foods provide different nutrients, so eating a variety keeps our body healthy and balanced." }
        ],
        terms: [
          { term: "Herbivore", def: "An animal that eats only plants" },
          { term: "Carnivore", def: "An animal that eats only other animals" },
          { term: "Omnivore", def: "An animal that eats both plants and animals" },
          { term: "Nectar", def: "The sweet liquid in flowers that bees collect to make honey" },
          { term: "Ingredient", def: "One of the items that a food is made from" },
          { term: "Tuber", def: "A swollen underground stem that stores food, like a potato" }
        ]
      },
      {
        id: "materials",
        name: "Sorting Materials Into Groups",
        blurb: "Objects, materials & their properties",
        questions: [
          { q: "Which of these is transparent?", options: ["Wood", "Clear glass", "Cardboard", "A brick"], answer: 1, difficulty: "easy", explain: "Clear glass lets light pass through it easily, so we can see through it - that makes it transparent." },
          { q: "Which material is a good conductor of heat?", options: ["Wood", "Plastic", "Metal", "Rubber"], answer: 2, difficulty: "easy", explain: "Metals like copper and aluminium conduct heat well, which is why cooking pots are made of metal." },
          { q: "An object that we cannot see through at all is called...", options: ["Transparent", "Translucent", "Opaque", "Flexible"], answer: 2, difficulty: "easy", explain: "Opaque objects, like a wooden door, do not let any light pass through." },
          { q: "Which of these materials would float on water?", options: ["A stone", "A coin", "A dry wooden block", "A steel spoon"], answer: 2, difficulty: "medium", explain: "Dry wood is less dense than water, so it floats, while stone, coins and steel sink." },
          { q: "Butter paper, through which shapes look blurry, is an example of...", options: ["Transparent material", "Opaque material", "Translucent material", "Magnetic material"], answer: 2, difficulty: "medium", explain: "Translucent materials let some light through but you can't see a clear image, like frosted glass or butter paper." },
          { q: "Which property lets a rubber band be stretched and return to shape?", options: ["Hardness", "Elasticity", "Transparency", "Solubility"], answer: 1, difficulty: "medium", explain: "Elasticity is the ability of a material to stretch and spring back to its original shape." },
          { q: "Which of the following will dissolve completely in water?", options: ["Sand", "Salt", "Chalk powder", "Oil"], answer: 1, difficulty: "hard", explain: "Salt is soluble in water - it mixes completely and you can't see separate particles anymore." },
          { q: "Why are cooking utensil handles usually made of plastic, not metal?", options: ["Plastic looks nicer", "Plastic is a poor conductor of heat, so the handle stays cool", "Plastic is heavier", "Metal cannot be shaped into handles"], answer: 1, difficulty: "hard", explain: "Plastic is an insulator - it doesn't conduct heat well, so the handle stays safe to touch even when the pan is hot." },
          { q: "Which pair correctly groups materials by the same property?", options: ["Iron nail and wooden stick - both magnetic", "Glass and plastic sheet - both transparent", "Cotton and stone - both soft", "Water and oil - both solids"], answer: 1, difficulty: "hard", explain: "Both clear glass and a clear plastic sheet let light pass through, so they share the property of being transparent." }
        ],
        terms: [
          { term: "Transparent", def: "Lets light pass through completely, objects behind are clearly visible" },
          { term: "Translucent", def: "Lets some light through, objects behind look blurry" },
          { term: "Opaque", def: "Does not let light pass through at all" },
          { term: "Soluble", def: "Able to dissolve completely in a liquid like water" },
          { term: "Elasticity", def: "The ability to stretch and return to original shape" },
          { term: "Conductor", def: "A material that allows heat or electricity to pass through easily" }
        ]
      },
      {
        id: "body-movements",
        name: "Body Movements",
        blurb: "Bones, joints & how animals move",
        questions: [
          { q: "What do we call the point where two bones meet and allow movement?", options: ["Muscle", "Joint", "Skeleton", "Tissue"], answer: 1, difficulty: "easy", explain: "A joint is where two bones meet, and it's what allows the body to bend and move." },
          { q: "Which joint allows movement in almost every direction?", options: ["Hinge joint (like the elbow)", "Ball and socket joint (like the shoulder)", "Fixed joint (like the skull)", "Pivot joint"], answer: 1, difficulty: "easy", explain: "A ball and socket joint, found in the shoulder and hip, allows movement in many directions." },
          { q: "The framework of bones in our body is called the...", options: ["Skeleton", "Skin", "Muscle system", "Nervous system"], answer: 0, difficulty: "easy", explain: "The skeleton is the internal framework of bones that gives our body its shape and support." },
          { q: "Which of these joints does NOT allow movement?", options: ["Elbow", "Knee", "Skull joints", "Shoulder"], answer: 2, difficulty: "medium", explain: "The joints in the skull are fixed joints - they hold bones firmly together without allowing movement." },
          { q: "A snail moves with the help of its...", options: ["Wings", "Muscular foot", "Fins", "Legs"], answer: 1, difficulty: "medium", explain: "A snail glides along using a single strong muscular foot." },
          { q: "How do earthworms move?", options: ["By flying", "By contracting and expanding their body using muscles", "By using legs", "By rolling"], answer: 1, difficulty: "medium", explain: "Earthworms have muscles that contract and relax in a wave, pushing the body forward." },
          { q: "Which of these animals has bones on the outside of its body (an exoskeleton)?", options: ["Human", "Snake", "Cockroach", "Fish"], answer: 2, difficulty: "hard", explain: "Cockroaches and other insects have a hard outer covering called an exoskeleton instead of internal bones." },
          { q: "Why can a fish move easily through water?", options: ["It has legs", "Its streamlined body and fins help it swim", "It uses wings", "It has no muscles"], answer: 1, difficulty: "hard", explain: "A fish's streamlined (tapering) body reduces water resistance, and fins help push and steer it." },
          { q: "Birds are able to fly mainly because of their...", options: ["Heavy bones and wings", "Light hollow bones and strong wing muscles", "Long legs", "Feathers alone with no muscles"], answer: 1, difficulty: "hard", explain: "Birds have light, hollow bones and strong chest muscles that power their wings for flight." }
        ],
        terms: [
          { term: "Joint", def: "A point where two bones meet and movement can happen" },
          { term: "Skeleton", def: "The internal framework of bones supporting the body" },
          { term: "Ball and socket joint", def: "A joint allowing movement in many directions, e.g. the shoulder" },
          { term: "Hinge joint", def: "A joint that allows movement in one direction only, e.g. the knee" },
          { term: "Exoskeleton", def: "A hard outer body covering found in insects, instead of internal bones" },
          { term: "Streamlined body", def: "A tapering body shape that moves easily through water or air" }
        ]
      }
    ]
  },

  social: {
    name: "Social Studies",
    icon: "🌍",
    color: "#FFC93C",
    tagline: "Our past, our planet, our people",
    chapters: [
      {
        id: "early-humans",
        name: "From Hunting-Gathering to Growing Food",
        blurb: "How early humans lived and farmed",
        questions: [
          { q: "Early humans first got their food mainly by...", options: ["Farming", "Hunting animals and gathering plants", "Buying from markets", "Fishing only"], answer: 1, difficulty: "easy", explain: "Before farming began, early humans survived by hunting wild animals and gathering fruits, roots and seeds." },
          { q: "What major change happened when humans learned to grow crops?", options: ["They started living permanently in one place", "They stopped eating meat completely", "They stopped using tools", "Nothing changed"], answer: 0, difficulty: "easy", explain: "Once people could grow food reliably, they no longer needed to keep moving, so settled village life began." },
          { q: "Early tools used by humans were mostly made of...", options: ["Plastic", "Stone", "Steel", "Glass"], answer: 1, difficulty: "easy", explain: "The earliest human tools were chipped and shaped from stone, which is why this period is called the Stone Age." },
          { q: "Why did early humans often move from place to place?", options: ["To search for food and water", "For entertainment", "To meet other people", "For trade fairs"], answer: 0, difficulty: "medium", explain: "Since they depended on wild food that ran out, hunter-gatherers moved often in search of fresh sources of food and water." },
          { q: "Which of these was among the first animals domesticated by humans?", options: ["Dog", "Elephant", "Tiger", "Peacock"], answer: 0, difficulty: "medium", explain: "The dog is believed to be one of the earliest animals tamed by humans, useful for hunting and guarding." },
          { q: "Growing the same crop and living near it led to the rise of...", options: ["Cities", "Villages", "Deserts", "Oceans"], answer: 1, difficulty: "medium", explain: "As farming let people settle down, small permanent villages began to form near fertile farmland." },
          { q: "Why are river banks important in the story of early settlements?", options: ["Rivers provided water for crops, animals and daily use", "Rivers were used only for boating races", "Rivers were avoided by early humans", "Rivers had no importance"], answer: 0, difficulty: "hard", explain: "Fertile soil and a steady water supply near rivers made them ideal places for early farming settlements." },
          { q: "What does the term 'Neolithic' mainly refer to?", options: ["The age of iron tools", "The New Stone Age, when polished tools and farming began", "The age of dinosaurs", "The age of writing"], answer: 1, difficulty: "hard", explain: "The Neolithic (New Stone) Age is marked by polished stone tools and the beginning of farming and settled life." },
          { q: "How did the shift to farming change the division of work in early communities?", options: ["Everyone did the exact same single task forever", "People began to take up different roles like farming, pottery and tool-making", "Work disappeared completely", "Only children worked"], answer: 1, difficulty: "hard", explain: "As settled communities grew, people specialised in different tasks - some farmed, others made pots or tools." }
        ],
        terms: [
          { term: "Hunter-gatherer", def: "A person who survives by hunting animals and collecting wild plants" },
          { term: "Domestication", def: "Taming wild plants or animals for human use" },
          { term: "Neolithic Age", def: "The New Stone Age, when farming and polished tools began" },
          { term: "Settlement", def: "A place where a community of people live permanently" },
          { term: "Fertile soil", def: "Soil that is rich in nutrients and good for growing crops" },
          { term: "Nomadic", def: "Moving from place to place instead of living in one location" }
        ]
      },
      {
        id: "earliest-cities",
        name: "In the Earliest Cities",
        blurb: "The Indus Valley and the first cities",
        questions: [
          { q: "The Indus Valley Civilization is also known as the...", options: ["Harappan Civilization", "Roman Civilization", "Egyptian Civilization", "Greek Civilization"], answer: 0, difficulty: "easy", explain: "It's called the Harappan Civilization after Harappa, one of the first sites discovered." },
          { q: "Which river was the Indus Valley Civilization named after?", options: ["Ganga", "Indus", "Godavari", "Krishna"], answer: 1, difficulty: "easy", explain: "The civilization flourished along the banks of the Indus river." },
          { q: "Which of these is a well-known Indus Valley site?", options: ["Mohenjodaro", "Delhi", "Chennai", "Agra"], answer: 0, difficulty: "easy", explain: "Mohenjodaro, in present-day Pakistan, is one of the largest and best-known Indus Valley cities." },
          { q: "Indus Valley cities were known for their well-planned...", options: ["Drainage systems and streets", "Airports", "Railways", "Movie theatres"], answer: 0, difficulty: "medium", explain: "Harappan cities had carefully planned streets and covered drains, showing advanced city planning." },
          { q: "What material were most Indus Valley houses built from?", options: ["Baked bricks", "Steel", "Glass", "Bamboo only"], answer: 0, difficulty: "medium", explain: "Uniform baked bricks were used to build sturdy houses and city walls." },
          { q: "The Great Bath, a famous structure of the Indus Valley, was found at...", options: ["Mohenjodaro", "Delhi", "Hyderabad", "Warangal"], answer: 0, difficulty: "medium", explain: "The Great Bath, likely used for ritual bathing, was discovered at Mohenjodaro." },
          { q: "What does the discovery of standard weights and seals tell us about the Indus Valley people?", options: ["They had no economy", "They were involved in organised trade and measurement", "They never travelled", "They had no writing at all"], answer: 1, difficulty: "hard", explain: "Uniform weights and seals suggest organised trade, both within the region and possibly with other lands." },
          { q: "Why do historians still struggle to fully understand Indus Valley society?", options: ["Because their script has not been deciphered yet", "Because no cities have been found", "Because they left no artifacts", "Because it is a modern civilization"], answer: 0, difficulty: "hard", explain: "The Indus script found on seals has not been deciphered, so many details of their life remain a mystery." }
        ],
        terms: [
          { term: "Civilization", def: "An advanced, organised society with cities, trade and culture" },
          { term: "Harappan", def: "Another name for the Indus Valley Civilization" },
          { term: "Granary", def: "A large storeroom used to keep harvested grain" },
          { term: "Seal", def: "A carved stone used for stamping, often found at Indus Valley sites" },
          { term: "Citadel", def: "A raised, fortified part of an ancient city" },
          { term: "Drainage system", def: "A network of drains built to carry away waste water" }
        ]
      },
      {
        id: "globe-earth",
        name: "The Earth in the Solar System & Globe",
        blurb: "Planets, the globe, and latitudes",
        questions: [
          { q: "Which planet is known as the 'Blue Planet'?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: 1, difficulty: "easy", explain: "Earth looks blue from space because nearly 70% of its surface is covered with water." },
          { q: "A globe is a model of the...", options: ["Moon", "Sun", "Earth", "Sky"], answer: 2, difficulty: "easy", explain: "A globe is a true-to-scale spherical model representing our Earth." },
          { q: "How many major planets are there in our solar system?", options: ["7", "8", "9", "10"], answer: 1, difficulty: "easy", explain: "There are 8 planets in our solar system, from Mercury to Neptune." },
          { q: "Which imaginary line on the globe divides the Earth into Northern and Southern hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], answer: 1, difficulty: "medium", explain: "The Equator is the imaginary line at 0° latitude that splits the Earth into two equal halves." },
          { q: "Lines running east-west on a globe, parallel to the Equator, are called...", options: ["Longitudes", "Latitudes", "Meridians", "Axis lines"], answer: 1, difficulty: "medium", explain: "Latitudes are horizontal lines used to measure distance north or south of the Equator." },
          { q: "The imaginary line joining the North and South Poles, around which Earth spins, is its...", options: ["Equator", "Axis", "Orbit", "Meridian"], answer: 1, difficulty: "medium", explain: "The Earth's axis is a tilted imaginary line through the poles, and the Earth rotates around it." },
          { q: "How long does the Earth take to complete one full rotation on its axis?", options: ["24 hours", "365 days", "30 days", "12 hours"], answer: 0, difficulty: "hard", explain: "One full rotation, which gives us day and night, takes about 24 hours." },
          { q: "What causes day and night on Earth?", options: ["Earth's revolution around the Sun", "Earth's rotation on its axis", "The Moon blocking sunlight", "Clouds covering the Sun"], answer: 1, difficulty: "hard", explain: "As Earth spins on its axis, the side facing the Sun has day while the other side has night." },
          { q: "Which line of longitude is taken as 0° and used to set world time zones?", options: ["Equator", "Tropic of Capricorn", "Prime Meridian", "Arctic Circle"], answer: 2, difficulty: "hard", explain: "The Prime Meridian, passing through Greenwich in London, is the reference line (0°) for measuring longitude and time zones." }
        ],
        terms: [
          { term: "Globe", def: "A spherical scale-model of the Earth" },
          { term: "Equator", def: "The imaginary line dividing Earth into Northern and Southern halves" },
          { term: "Latitude", def: "Imaginary horizontal lines measuring distance north/south of the Equator" },
          { term: "Longitude", def: "Imaginary vertical lines measuring distance east/west of the Prime Meridian" },
          { term: "Axis", def: "The imaginary tilted line through the poles that Earth spins around" },
          { term: "Rotation", def: "Earth spinning on its own axis, causing day and night" }
        ]
      }
    ]
  },

  english: {
    name: "English",
    icon: "📖",
    color: "#FF6B5B",
    tagline: "Grammar, words & good sentences",
    chapters: [
      {
        id: "nouns-pronouns",
        name: "Nouns & Pronouns",
        blurb: "Naming words and words that replace them",
        questions: [
          { q: "Which word is a noun in this sentence: 'The dog barked loudly.'", options: ["The", "Dog", "Barked", "Loudly"], answer: 1, difficulty: "easy", explain: "'Dog' names a thing/animal, which makes it a noun." },
          { q: "Which of these is a proper noun?", options: ["City", "River", "Hyderabad", "Book"], answer: 2, difficulty: "easy", explain: "Proper nouns name a specific person, place or thing and always start with a capital letter, like 'Hyderabad'." },
          { q: "Which word can replace 'Ravi' in the sentence 'Ravi is playing'?", options: ["He", "It", "They", "She"], answer: 0, difficulty: "easy", explain: "'He' is a pronoun used to replace a male name like Ravi." },
          { q: "Which sentence correctly uses a pronoun?", options: ["Meena said Meena is happy", "Meena said she is happy", "Meena said he is happy", "Meena said them is happy"], answer: 1, difficulty: "medium", explain: "'She' correctly replaces the repeated noun 'Meena' the second time it's used." },
          { q: "Which of the following is a collective noun?", options: ["Team", "Player", "Ball", "Ground"], answer: 0, difficulty: "medium", explain: "A collective noun names a group of things as one unit, like a 'team' of players." },
          { q: "Identify the abstract noun: 'Her honesty impressed everyone.'", options: ["Her", "Honesty", "Impressed", "Everyone"], answer: 1, difficulty: "medium", explain: "'Honesty' names a quality we can't touch or see, making it an abstract noun." },
          { q: "Which sentence uses a possessive pronoun correctly?", options: ["This book is my.", "This book is mine.", "This book is I.", "This book is me."], answer: 1, difficulty: "hard", explain: "'Mine' is the possessive pronoun that shows ownership - 'This book is mine.'" },
          { q: "In 'The children lost their bags', which word is the pronoun?", options: ["Children", "Lost", "Their", "Bags"], answer: 2, difficulty: "hard", explain: "'Their' is a possessive pronoun replacing 'the children's'." }
        ],
        terms: [
          { term: "Noun", def: "A word that names a person, place, animal or thing" },
          { term: "Proper noun", def: "The specific name of a person or place, always capitalised" },
          { term: "Pronoun", def: "A word used in place of a noun, like he, she, it, they" },
          { term: "Collective noun", def: "A word for a group of people or things, like team or herd" },
          { term: "Abstract noun", def: "A noun for a quality or idea that can't be touched, like honesty" },
          { term: "Possessive pronoun", def: "A pronoun that shows ownership, like mine, his, hers" }
        ]
      },
      {
        id: "tenses",
        name: "Verb Tenses",
        blurb: "Talking about past, present & future",
        questions: [
          { q: "Which sentence is in the present tense?", options: ["She walked to school.", "She walks to school.", "She will walk to school.", "She had walked to school."], answer: 1, difficulty: "easy", explain: "'Walks' shows an action happening now or as a regular habit - present tense." },
          { q: "Choose the past tense of 'go'.", options: ["Goed", "Gone", "Went", "Going"], answer: 2, difficulty: "easy", explain: "'Go' is an irregular verb - its past tense form is 'went', not 'goed'." },
          { q: "Which word shows future tense?", options: ["Played", "Playing", "Will play", "Plays"], answer: 2, difficulty: "easy", explain: "'Will' before a verb shows an action that is going to happen in the future." },
          { q: "Fill in the blank: Yesterday, I ___ my homework.", options: ["finish", "finished", "will finish", "finishing"], answer: 1, difficulty: "medium", explain: "'Yesterday' signals the past, so we use the past tense form 'finished'." },
          { q: "Which sentence correctly uses the present continuous tense?", options: ["He eat lunch now.", "He is eating lunch now.", "He ate lunch now.", "He will eating lunch now."], answer: 1, difficulty: "medium", explain: "Present continuous uses 'is/am/are' + verb+ing to show an action happening right now." },
          { q: "Choose the correct past tense of 'write'.", options: ["Writed", "Wrote", "Written", "Writing"], answer: 1, difficulty: "medium", explain: "'Write' is irregular; its simple past tense is 'wrote'." },
          { q: "Which sentence is correctly written in future tense?", options: ["Tomorrow, we visit the zoo.", "Tomorrow, we visited the zoo.", "Tomorrow, we will visit the zoo.", "Tomorrow, we are visit the zoo."], answer: 2, difficulty: "hard", explain: "'Will visit' correctly shows a planned action for tomorrow, in the future tense." },
          { q: "Identify the tense: 'By evening, she had finished all her chores.'", options: ["Simple past", "Past perfect", "Present perfect", "Future perfect"], answer: 1, difficulty: "hard", explain: "'Had finished' shows an action completed before another point in the past - past perfect tense." }
        ],
        terms: [
          { term: "Present tense", def: "Describes an action happening now or as a habit" },
          { term: "Past tense", def: "Describes an action that already happened" },
          { term: "Future tense", def: "Describes an action that will happen later" },
          { term: "Irregular verb", def: "A verb whose past form doesn't just add -ed, like go → went" },
          { term: "Present continuous", def: "Shows an action happening right now, using is/am/are + verb-ing" },
          { term: "Past perfect", def: "Shows an action completed before another past action, using had + verb" }
        ]
      }
    ]
  },

  telugu: {
    name: "Telugu",
    icon: "✍️",
    color: "#B98BE0",
    tagline: "పదాలు, వ్యాకరణం, భాష",
    chapters: [
      {
        id: "varnamala",
        name: "అక్షరమాల - Alphabet & Sounds",
        blurb: "Vowels, consonants & basic reading",
        questions: [
          { q: "How many vowels (అచ్చులు) are there in the basic Telugu alphabet?", options: ["10", "12", "16", "21"], answer: 2, difficulty: "easy", explain: "Telugu has 16 vowels (అచ్చులు) in its traditional alphabet." },
          { q: "Which of these is a vowel (అచ్చు) in Telugu?", options: ["క", "అ", "త", "ప"], answer: 1, difficulty: "easy", explain: "'అ' is the very first vowel of the Telugu alphabet." },
          { q: "Consonants in Telugu are called...", options: ["అచ్చులు", "హల్లులు", "గుణింతాలు", "సంధులు"], answer: 1, difficulty: "easy", explain: "హల్లులు (hallulu) is the Telugu term for consonants." },
          { q: "What is 'గుణింతం' used for in Telugu?", options: ["Joining a consonant with a vowel sound", "Only counting numbers", "Writing English words", "Punctuation marks"], answer: 0, difficulty: "medium", explain: "గుణింతాలు show how a consonant combines with different vowel sounds, like క, కా, కి, కీ." },
          { q: "Which of these words begins with a Telugu vowel sound?", options: ["రాముడు", "అమ్మ", "నాన్న", "బడి"], answer: 1, difficulty: "medium", explain: "'అమ్మ' (mother) begins with the vowel 'అ'." },
          { q: "How many basic consonants (హల్లులు) does Telugu traditionally have?", options: ["16", "21", "36", "50"], answer: 2, difficulty: "hard", explain: "Telugu traditionally lists 36 consonants (హల్లులు)." }
        ],
        terms: [
          { term: "అచ్చులు", def: "Vowels - independent sounds like అ, ఆ, ఇ, ఈ" },
          { term: "హల్లులు", def: "Consonants - sounds that usually combine with vowels" },
          { term: "గుణింతం", def: "A consonant joined with a vowel sound, like క + ఆ = కా" },
          { term: "వర్ణమాల", def: "The complete Telugu alphabet" },
          { term: "సంయుక్తాక్షరం", def: "A compound/conjunct letter formed by joining two consonants" },
          { term: "పదం", def: "A word formed using letters" }
        ]
      },
      {
        id: "vyakaranam",
        name: "వ్యాకరణం - Basic Grammar",
        blurb: "Simple grammar rules and word forms",
        questions: [
          { q: "'పుస్తకం' అనే పదం దేనిని సూచిస్తుంది? (What does the word 'పుస్తకం' mean?)", options: ["Pen", "Book", "Chair", "Water"], answer: 1, difficulty: "easy", explain: "'పుస్తకం' means 'book' in Telugu." },
          { q: "Choose the plural form of 'పిల్లవాడు' (boy):", options: ["పిల్లలు", "పిల్లవాడులు", "పిల్లవాడు", "పిల్ల"], answer: 0, difficulty: "medium", explain: "'పిల్లలు' is the correct plural form meaning 'children/boys'." },
          { q: "Which of these is a Telugu greeting?", options: ["నమస్కారం", "వీడ్కోలు మాత్రమే", "ప్రశ్న", "జవాబు"], answer: 0, difficulty: "easy", explain: "'నమస్కారం' is a common respectful greeting in Telugu." },
          { q: "'తల్లి' అనే పదానికి వ్యతిరేక పదం (opposite/pair word) ఏది?", options: ["తండ్రి", "అన్న", "అక్క", "తమ్ముడు"], answer: 0, difficulty: "medium", explain: "'తండ్రి' (father) is the natural pair word for 'తల్లి' (mother)." },
          { q: "Which sentence correctly uses a Telugu question word?", options: ["ఇది ఏమిటి?", "ఇది పుస్తకం.", "నేను వెళ్తాను.", "అతను వచ్చాడు."], answer: 0, difficulty: "hard", explain: "'ఏమిటి?' (what?) is a question word - 'ఇది ఏమిటి?' means 'What is this?'" }
        ],
        terms: [
          { term: "నమస్కారం", def: "A respectful Telugu greeting" },
          { term: "బహువచనం", def: "Plural form of a word" },
          { term: "ఏకవచనం", def: "Singular form of a word" },
          { term: "ప్రశ్న", def: "Question" },
          { term: "జవాబు", def: "Answer" },
          { term: "వ్యతిరేక పదం", def: "Opposite word" }
        ]
      }
    ]
  }
};
