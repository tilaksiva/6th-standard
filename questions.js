const QUESTION_BANK = {
  math: {
    name: "Mathematics",
    icon: "🔢",
    color: "#4FC3E8",
    tagline: "Numbers, shapes & puzzles",
    chapters: [
      {
        id: "knowing-numbers",
        name: "Knowing Our Numbers",
        blurb: "Big numbers, place value & comparing amounts",
        questions: [
          { q: "What is the place value of 7 in 47,258?", options: ["7", "70", "700", "7,000"], answer: 3, difficulty: "easy", explain: "In 47,258 the digit 7 sits in the thousands place, so its place value is 7,000.", explainSteps: ["Write out the digits with their place names: 4=ten-thousands, 7=thousands, 2=hundreds, 5=tens, 8=ones.","The digit 7 sits in the thousands place.","So its place value = 7 × 1,000 = 7,000."], explainDiagram: "placeValue" },
          { q: "Which is the smallest 4-digit number?", options: ["9999", "1000", "0001", "1111"], answer: 1, difficulty: "easy", explain: "The smallest 4-digit number is 1000 - anything below that only needs 3 digits.", explainSteps: ["A 4-digit number must have exactly 4 digits and can't start with 0.","The smallest possible first digit is 1, followed by all zeros.","That gives 1000 — the smallest 4-digit number."], explainDiagram: null },
          { q: "Round 4,678 to the nearest hundred.", options: ["4,600", "4,700", "4,680", "4,000"], answer: 1, difficulty: "medium", explain: "Look at the tens digit (7). Since 7 ≥ 5, round up: 4,678 → 4,700.", explainSteps: ["To round to the nearest hundred, look at the tens digit.","In 4,678, the tens digit is 7.","Since 7 ≥ 5, round the hundreds digit up: 4,678 → 4,700."], explainDiagram: "numberLine" },
          { q: "Which Roman numeral stands for 40?", options: ["XL", "LX", "XXXX", "IL"], answer: 0, difficulty: "medium", explain: "In Roman numerals, a smaller symbol before a bigger one means subtract: XL = 50 - 10 = 40.", explainSteps: ["In Roman numerals, a smaller numeral placed BEFORE a bigger one means subtract.","X = 10 and L = 50, so XL means 50 − 10.","50 − 10 = 40, so XL = 40."], explainDiagram: null },
          { q: "What is the sum of the largest 3-digit number and the smallest 4-digit number?", options: ["1999", "1000", "999", "1099"], answer: 0, difficulty: "hard", explain: "Largest 3-digit = 999, smallest 4-digit = 1000. 999 + 1000 = 1999.", explainSteps: ["The largest 3-digit number is 999 (all 9s).","The smallest 4-digit number is 1000.","Add them: 999 + 1000 = 1999."], explainDiagram: null },
          { q: "By how much does 1,00,000 exceed 87,459?", options: ["12,541", "13,541", "12,459", "12,641"], answer: 0, difficulty: "hard", explain: "1,00,000 − 87,459 = 12,541.", explainSteps: ["Set up the subtraction: 1,00,000 − 87,459.","Borrow across the zeros carefully, place by place.","Working it through gives 12,541."], explainDiagram: null }
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
        id: "whole-numbers",
        name: "Whole Numbers",
        blurb: "Zero, the number line, and how whole numbers behave",
        questions: [
          { q: "Which is the smallest whole number?", options: ["1", "0", "-1", "There is none"], answer: 1, difficulty: "easy", explain: "Whole numbers start from 0, so 0 is the smallest whole number.", explainSteps: ["Whole numbers are 0, 1, 2, 3... — they start right at 0.","There's no whole number smaller than 0 (negatives aren't whole numbers).","So 0 is the smallest whole number."], explainDiagram: "numberLine" },
          { q: "Is every natural number also a whole number?", options: ["Yes", "No", "Only even ones", "Only odd ones"], answer: 0, difficulty: "easy", explain: "Whole numbers are natural numbers (1,2,3...) together with 0, so every natural number is also a whole number.", explainSteps: ["Natural numbers are 1, 2, 3, 4...","Whole numbers are exactly the natural numbers PLUS 0.","So every natural number is automatically also a whole number — yes."], explainDiagram: null },
          { q: "What do you get when you multiply any whole number by 0?", options: ["The number itself", "1", "0", "It's undefined"], answer: 2, difficulty: "medium", explain: "Any number multiplied by 0 always gives 0 - this is called the zero property of multiplication.", explainSteps: ["Try any example: 5 × 0.","Multiplying by 0 always collapses the result to nothing.","So any whole number × 0 = 0 — this is the zero property of multiplication."], explainDiagram: null },
          { q: "On the number line, where do whole numbers sit relative to each other?", options: ["Randomly scattered", "Equally spaced, increasing to the right", "Only on the left side", "Only above zero with gaps"], answer: 1, difficulty: "medium", explain: "Whole numbers are marked as equally spaced points on the number line, increasing as you move right.", explainSteps: ["Picture a ruler-like line marked 0, 1, 2, 3...","Each number sits exactly the same distance from its neighbours.","And they increase as you move to the right — equally spaced, increasing rightward."], explainDiagram: "numberLine" },
          { q: "Which property does 25 + 18 = 18 + 25 show?", options: ["Associative property", "Commutative property", "Distributive property", "Identity property"], answer: 1, difficulty: "hard", explain: "Commutative property means changing the order of numbers being added doesn't change the sum.", explainSteps: ["Compare both sides: 25+18 and 18+25 — same two numbers, different order.","Changing the ORDER of numbers being added doesn't change the sum (both equal 43).","That rule is called the commutative property."], explainDiagram: null },
          { q: "What is the predecessor of the smallest whole number?", options: ["-1", "0", "1", "It does not exist"], answer: 3, difficulty: "hard", explain: "Since 0 is the smallest whole number, there is no whole number before it - it has no predecessor.", explainSteps: ["Predecessor means 'the number right before'.","The smallest whole number is 0 — nothing whole is smaller than 0.","So 0 has no predecessor; it simply does not exist."], explainDiagram: null }
        ],
        terms: [
          { term: "Whole number", def: "Numbers 0, 1, 2, 3... with no fractions or negatives" },
          { term: "Natural number", def: "Counting numbers starting from 1" },
          { term: "Number line", def: "A line showing numbers in order, used to compare and add them" },
          { term: "Commutative property", def: "Changing the order of numbers doesn't change the result of addition/multiplication" },
          { term: "Associative property", def: "Changing how numbers are grouped doesn't change the result of addition/multiplication" },
          { term: "Identity element", def: "A number that leaves others unchanged when added (0) or multiplied (1)" }
        ]
      },
      {
        id: "playing-with-numbers",
        name: "Playing with Numbers",
        blurb: "Factors, multiples, primes & divisibility tricks",
        questions: [
          { q: "Which of these is a factor of 18?", options: ["4", "5", "6", "8"], answer: 2, difficulty: "easy", explain: "6 divides 18 exactly (18 ÷ 6 = 3), so 6 is a factor of 18.", explainSteps: ["Check each option: does it divide 18 with no remainder?","18 ÷ 6 = 3 exactly, no remainder.","So 6 is a factor of 18."], explainDiagram: null },
          { q: "Which number is prime?", options: ["9", "15", "17", "21"], answer: 2, difficulty: "easy", explain: "17 has only two factors, 1 and itself, so it is a prime number.", explainSteps: ["A prime number has exactly two factors: 1 and itself.","Check 17: only 1 and 17 divide it evenly (9, 15 and 21 all have extra factors).","So 17 is prime."], explainDiagram: null },
          { q: "What is the first common multiple of 4 and 6 (other than 0)?", options: ["10", "12", "24", "8"], answer: 1, difficulty: "medium", explain: "Multiples of 4: 4,8,12... Multiples of 6: 6,12... The first common one is 12, the LCM.", explainSteps: ["List multiples of 4: 4, 8, 12, 16...","List multiples of 6: 6, 12, 18...","The first number in BOTH lists is 12 — that's the LCM."], explainDiagram: "factorTree" },
          { q: "A number is divisible by 5 if its last digit is...", options: ["0 or 5", "Any even digit", "Only 0", "Only 5"], answer: 0, difficulty: "medium", explain: "Any number ending in 0 or 5 is exactly divisible by 5.", explainSteps: ["Test a few numbers: 10, 15, 20, 25 — all divisible by 5.","Notice their last digits: 0, 5, 0, 5.","So any number ending in 0 or 5 is divisible by 5."], explainDiagram: null },
          { q: "What is the HCF (highest common factor) of 12 and 18?", options: ["2", "3", "6", "36"], answer: 2, difficulty: "hard", explain: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. The highest common one is 6.", explainSteps: ["List factors of 12: 1, 2, 3, 4, 6, 12.","List factors of 18: 1, 2, 3, 6, 9, 18.","The largest number appearing in BOTH lists is 6 — that's the HCF."], explainDiagram: "factorTree" },
          { q: "Which of these numbers is divisible by both 3 and 2?", options: ["14", "15", "18", "20"], answer: 2, difficulty: "hard", explain: "18 is even (divisible by 2) and its digit sum 1+8=9 is divisible by 3, so 18 is divisible by both.", explainSteps: ["To check divisible by 2: the number must be even.","To check divisible by 3: its digit sum must divide evenly by 3. For 18: 1+8=9, and 9÷3=3 ✓.","18 is even AND its digit sum divides by 3, so it passes both tests."], explainDiagram: null }
        ],
        terms: [
          { term: "Factor", def: "A number that divides another number exactly, with no remainder" },
          { term: "Multiple", def: "A number obtained by multiplying a given number by a whole number" },
          { term: "Prime number", def: "A number greater than 1 with exactly two factors: 1 and itself" },
          { term: "Composite number", def: "A number with more than two factors" },
          { term: "HCF", def: "Highest Common Factor - the largest number that divides two numbers exactly" },
          { term: "LCM", def: "Lowest Common Multiple - the smallest number that is a multiple of two numbers" }
        ]
      },
      {
        id: "geometrical-ideas",
        name: "Basic Geometrical Ideas",
        blurb: "Points, lines, angles & shapes all around us",
        questions: [
          { q: "What do we call a straight path that extends endlessly in both directions?", options: ["Ray", "Line segment", "Line", "Point"], answer: 2, difficulty: "easy", explain: "A line has no endpoints and goes on forever in both directions.", explainSteps: ["A ray goes on forever in only ONE direction. A line segment has two fixed endpoints — it stops.","A line has no endpoints at all and stretches forever in BOTH directions.","That endless-both-ways shape is the line."], explainDiagram: null },
          { q: "How many endpoints does a line segment have?", options: ["0", "1", "2", "Infinite"], answer: 2, difficulty: "easy", explain: "A line segment is a fixed part of a line with exactly two endpoints.", explainSteps: ["A line segment is a fixed piece cut out of a line.","It has one clear start point and one clear end point.","That's exactly 2 endpoints."], explainDiagram: null },
          { q: "A closed figure made of three line segments is called a...", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: 1, difficulty: "medium", explain: "Three line segments joined end to end form a triangle.", explainSteps: ["Count the sides needed: 3 line segments joined end to end.","Joining them closes the shape into 3 corners.","A closed 3-sided shape is a triangle."], explainDiagram: null },
          { q: "What is the name for two rays sharing a common endpoint?", options: ["Angle", "Curve", "Polygon", "Diameter"], answer: 0, difficulty: "medium", explain: "An angle is formed when two rays meet at a common point called the vertex.", explainSteps: ["Picture two rays starting from the exact same point, like a clock's two hands.","That shared starting point is called the vertex.","Two rays meeting at a vertex form an angle."], explainDiagram: "angleTypes" },
          { q: "How many diagonals does a quadrilateral (4-sided figure) have?", options: ["1", "2", "3", "4"], answer: 1, difficulty: "hard", explain: "A quadrilateral has exactly 2 diagonals connecting opposite corners.", explainSteps: ["A quadrilateral has 4 corners.","A diagonal connects two corners that are NOT already next to each other.","Only 2 such pairs exist, so there are 2 diagonals."], explainDiagram: null },
          { q: "A line segment joining the centre of a circle to a point on the circle is the...", options: ["Diameter", "Chord", "Radius", "Circumference"], answer: 2, difficulty: "hard", explain: "The radius connects the centre to any point on the circle's edge.", explainSteps: ["Picture a circle with a dot marking its exact centre.","Draw a straight line from that centre out to the circle's edge.","That line is called the radius."], explainDiagram: null }
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
        id: "lines-and-angles",
        name: "Measures of Lines and Angles",
        blurb: "Measuring length with a ruler and angles with a protractor",
        questions: [
          { q: "Which instrument is used to measure the size of an angle?", options: ["Ruler", "Protractor", "Compass", "Divider"], answer: 1, difficulty: "easy", explain: "A protractor has a scale marked in degrees, used to measure angles.", explainSteps: ["A ruler measures length; a compass draws circles — neither measures angle size.","Only one tool has a curved scale marked in degrees.","That's the protractor."], explainDiagram: "angleTypes" },
          { q: "An angle of exactly 90° is called a...", options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"], answer: 2, difficulty: "easy", explain: "A right angle measures exactly 90 degrees, like the corner of a square.", explainSteps: ["Picture the exact corner of a square or a book.","That corner shape measures exactly 90°.","An angle of exactly 90° is called a right angle."], explainDiagram: "angleTypes" },
          { q: "An angle less than 90° is called...", options: ["Acute", "Obtuse", "Reflex", "Straight"], answer: 0, difficulty: "medium", explain: "Acute angles measure less than 90 degrees - they look 'sharp' or narrow.", explainSteps: ["Angles smaller than a right angle (90°) look 'sharp' and narrow.","That narrow type of angle is called acute.","So any angle under 90° is acute."], explainDiagram: "angleTypes" },
          { q: "An angle between 90° and 180° is called...", options: ["Acute", "Right", "Obtuse", "Zero"], answer: 2, difficulty: "medium", explain: "Obtuse angles are wider than a right angle but less than a straight line (180°).", explainSteps: ["This angle is wider than a right angle (more than 90°)...","...but hasn't opened all the way to a flat line (less than 180°).","That in-between, wide angle is called obtuse."], explainDiagram: "angleTypes" },
          { q: "A straight angle measures...", options: ["90°", "180°", "270°", "360°"], answer: 1, difficulty: "hard", explain: "A straight angle forms a straight line and measures exactly 180 degrees.", explainSteps: ["Picture a perfectly flat, straight line with a point marked on it.","That flat line represents an angle stretched all the way open.","A straight angle measures exactly 180°."], explainDiagram: "angleTypes" },
          { q: "An angle greater than 180° but less than 360° is called a...", options: ["Acute angle", "Obtuse angle", "Reflex angle", "Right angle"], answer: 2, difficulty: "hard", explain: "Reflex angles are the 'bigger' angles measuring between 180° and 360°.", explainSteps: ["This angle is bigger than a straight line (over 180°)...","...but hasn't gone all the way around back to start (under 360°).","That big, 'bent-back' angle is called reflex."], explainDiagram: "angleTypes" }
        ],
        terms: [
          { term: "Protractor", def: "A tool used to measure angles in degrees" },
          { term: "Acute angle", def: "An angle measuring less than 90°" },
          { term: "Obtuse angle", def: "An angle measuring more than 90° but less than 180°" },
          { term: "Right angle", def: "An angle measuring exactly 90°" },
          { term: "Straight angle", def: "An angle measuring exactly 180°" },
          { term: "Reflex angle", def: "An angle measuring more than 180° but less than 360°" }
        ]
      },
      {
        id: "integers",
        name: "Integers",
        blurb: "Numbers above and below zero",
        questions: [
          { q: "Which of these is NOT an integer?", options: ["-5", "0", "3", "2.5"], answer: 3, difficulty: "easy", explain: "Integers are whole numbers - positive, negative or zero. 2.5 is a fraction, not an integer.", explainSteps: ["Integers are whole numbers only: positive, negative, or zero — never fractions or decimals.","2.5 has a decimal part, meaning it's a fraction of a whole.","That makes 2.5 the one that is NOT an integer."], explainDiagram: "numberLine" },
          { q: "What is the opposite of -8?", options: ["8", "-8", "0", "18"], answer: 0, difficulty: "easy", explain: "Every negative number's opposite is the same number but positive: opposite of -8 is 8.", explainSteps: ["The opposite of a number sits the same distance from 0 but on the other side.","-8 is 8 steps to the LEFT of 0.","Its opposite is 8 steps to the RIGHT of 0, which is +8."], explainDiagram: "numberLine" },
          { q: "The temperature was -3°C in the morning and rose by 5°C by noon. What is the noon temperature?", options: ["2°C", "-8°C", "8°C", "-2°C"], answer: 0, difficulty: "medium", explain: "-3 + 5 = 2, so the temperature at noon is 2°C.", explainSteps: ["Start at -3 on a number line.","Rising by 5°C means moving 5 steps to the right (adding).","-3 + 5 lands on 2, so the noon temperature is 2°C."], explainDiagram: "numberLine" },
          { q: "What is -6 + (-4)?", options: ["-10", "10", "-2", "2"], answer: 0, difficulty: "medium", explain: "Adding two negative numbers: their sizes add up and the answer stays negative, -6 + (-4) = -10.", explainSteps: ["Both numbers here are negative — think of them as two separate 'debts'.","Add their sizes together: 6 + 4 = 10.","Since both started negative, the total stays negative: -10."], explainDiagram: null },
          { q: "What is 7 - (-3)?", options: ["4", "10", "-10", "-4"], answer: 1, difficulty: "hard", explain: "Subtracting a negative is the same as adding: 7 - (-3) = 7 + 3 = 10.", explainSteps: ["Subtracting a negative number flips into ADDING a positive one.","So 7 − (−3) becomes 7 + 3.","7 + 3 = 10."], explainDiagram: null },
          { q: "The sum of two integers is -2. If one integer is 6, what is the other?", options: ["-8", "8", "-4", "4"], answer: 0, difficulty: "hard", explain: "6 + x = -2, so x = -2 - 6 = -8.", explainSteps: ["Set up the equation: 6 + x = -2.","Move the 6 to the other side by subtracting it: x = -2 − 6.","-2 − 6 = -8."], explainDiagram: null }
        ],
        terms: [
          { term: "Integer", def: "Whole numbers that can be positive, negative, or zero" },
          { term: "Positive integer", def: "An integer greater than zero" },
          { term: "Negative integer", def: "An integer less than zero" },
          { term: "Number line", def: "A line showing numbers in order, used to compare integers" },
          { term: "Absolute value", def: "The distance of a number from zero, always positive" },
          { term: "Opposite integers", def: "Two integers the same distance from zero but on different sides, like 5 and -5" }
        ]
      },
      {
        id: "fractions-decimals",
        name: "Fractions and Decimals",
        blurb: "Parts of a whole, and numbers with a decimal point",
        questions: [
          { q: "In the fraction 3/4, what is the 4 called?", options: ["Numerator", "Denominator", "Quotient", "Remainder"], answer: 1, difficulty: "easy", explain: "The bottom number of a fraction, showing how many equal parts the whole is split into, is the denominator.", explainSteps: ["In any fraction, the TOP number is the numerator.","The BOTTOM number, showing total equal parts, is the denominator.","In 3/4, the bottom number 4 is the denominator."], explainDiagram: "fractionBar" },
          { q: "Which fraction is equivalent to 1/2?", options: ["2/3", "2/4", "3/5", "1/3"], answer: 1, difficulty: "easy", explain: "2/4 simplifies to 1/2 since both numerator and denominator can be divided by 2.", explainSteps: ["Multiply both the top and bottom of 1/2 by the same number.","Multiplying by 2: 1×2=2, 2×2=4.","That gives 2/4, equivalent to 1/2."], explainDiagram: "fractionBar" },
          { q: "What is 0.5 written as a fraction?", options: ["1/5", "5/10", "1/2", "Both 5/10 and 1/2"], answer: 3, difficulty: "medium", explain: "0.5 = 5/10, which simplifies to 1/2 - both are correct ways to express it.", explainSteps: ["0.5 means 5 tenths, written as 5/10.","Simplify 5/10 by dividing top and bottom by 5, giving 1/2.","So both 5/10 and 1/2 correctly represent 0.5."], explainDiagram: null },
          { q: "Which is greater: 3/4 or 2/3?", options: ["3/4", "2/3", "They are equal", "Cannot say"], answer: 0, difficulty: "medium", explain: "Converting to a common denominator of 12: 3/4 = 9/12 and 2/3 = 8/12, so 3/4 is greater.", explainSteps: ["Find a common denominator for 3/4 and 2/3 — that's 12.","Convert both: 3/4 = 9/12, and 2/3 = 8/12.","9/12 is bigger than 8/12, so 3/4 is greater."], explainDiagram: "fractionBar" },
          { q: "What is 1.25 + 0.75?", options: ["1.00", "2.00", "1.75", "2.75"], answer: 1, difficulty: "hard", explain: "Adding the decimals: 1.25 + 0.75 = 2.00.", explainSteps: ["Line up the decimal points: 1.25 + 0.75.","Add hundredths, then tenths, then ones, carrying as needed.","1.25 + 0.75 = 2.00."], explainDiagram: null },
          { q: "What is 2/5 expressed as a decimal?", options: ["0.2", "0.4", "0.25", "0.5"], answer: 1, difficulty: "hard", explain: "2 ÷ 5 = 0.4, so 2/5 as a decimal is 0.4.", explainSteps: ["Divide the numerator by the denominator: 2 ÷ 5.","2 ÷ 5 = 0.4.","So 2/5 written as a decimal is 0.4."], explainDiagram: null }
        ],
        terms: [
          { term: "Numerator", def: "The top number of a fraction, showing how many parts are taken" },
          { term: "Denominator", def: "The bottom number of a fraction, showing total equal parts" },
          { term: "Equivalent fractions", def: "Different fractions that represent the same amount" },
          { term: "Decimal point", def: "The dot separating whole numbers from fractional parts" },
          { term: "Like fractions", def: "Fractions that have the same denominator" },
          { term: "Unlike fractions", def: "Fractions that have different denominators" }
        ]
      },
      {
        id: "data-handling",
        name: "Data Handling",
        blurb: "Collecting, organising and reading data",
        questions: [
          { q: "A table that shows data using tally marks is called a...", options: ["Bar graph", "Frequency table", "Pie chart", "Number line"], answer: 1, difficulty: "easy", explain: "A frequency table uses tally marks to record how often each value occurs.", explainSteps: ["Tally marks are short strokes used to count occurrences as data comes in.","A table that records these tally counts is called a frequency table."], explainDiagram: null },
          { q: "In a bar graph, what does the height of a bar usually represent?", options: ["The color", "The frequency/value of that category", "The width", "Nothing important"], answer: 1, difficulty: "easy", explain: "The height (or length) of each bar shows the value or frequency for that category.", explainSteps: ["In a bar graph, taller bars represent bigger numbers.","So the height of each bar directly shows that category's frequency or value."], explainDiagram: null },
          { q: "What is the mode of this data: 2, 3, 3, 5, 3, 7?", options: ["2", "3", "5", "7"], answer: 1, difficulty: "medium", explain: "The mode is the value that appears most often - here, 3 appears three times.", explainSteps: ["Count how many times each number appears: 2 once, 3 THREE times, 5 once, 7 once.","The number that appears MOST often is called the mode.","3 appears the most, so the mode is 3."], explainDiagram: null },
          { q: "What is the range of this data: 4, 9, 2, 15, 7?", options: ["9", "11", "13", "15"], answer: 2, difficulty: "medium", explain: "Range = highest value − lowest value = 15 − 2 = 13.", explainSteps: ["Find the highest value in the list: 15. Find the lowest: 2.","Range = highest − lowest.","15 − 2 = 13."], explainDiagram: null },
          { q: "What is the mean (average) of 4, 6, 8, and 10?", options: ["6", "7", "8", "9"], answer: 1, difficulty: "hard", explain: "Mean = sum ÷ count = (4+6+8+10) ÷ 4 = 28 ÷ 4 = 7.", explainSteps: ["Add all the values together: 4+6+8+10 = 28.","Count how many values there are: 4.","Mean = sum ÷ count = 28 ÷ 4 = 7."], explainDiagram: null },
          { q: "Why do we usually organise raw data into a frequency table before graphing it?", options: ["To make it look longer", "To make patterns and totals easier to see", "It's required by law", "To hide information"], answer: 1, difficulty: "hard", explain: "Organising data into a table reveals patterns, totals, and repeated values much more clearly than a long raw list.", explainSteps: ["Imagine a long messy list of 100 raw numbers — hard to spot anything useful in it.","Grouping and counting them in a table instantly reveals repeats and totals.","That's exactly why organising data into a frequency table first makes patterns easier to see."], explainDiagram: null }
        ],
        terms: [
          { term: "Data", def: "A collection of facts or numbers gathered for a purpose" },
          { term: "Tally marks", def: "Short strokes used to count and record data quickly" },
          { term: "Frequency", def: "The number of times a value appears in the data" },
          { term: "Bar graph", def: "A chart using bars of different heights to compare values" },
          { term: "Mode", def: "The value that appears most frequently in the data" },
          { term: "Range", def: "The difference between the highest and lowest values in the data" }
        ]
      },
      {
        id: "intro-algebra",
        name: "Introduction to Algebra",
        blurb: "Using letters to stand for unknown numbers",
        questions: [
          { q: "In algebra, what is a letter like 'x' used to represent?", options: ["A fixed number like 5", "An unknown or changing number", "A unit of measurement", "A type of shape"], answer: 1, difficulty: "easy", explain: "In algebra, letters (variables) stand in for numbers we don't know yet or that can change.", explainSteps: ["In algebra, letters stand in for numbers we don't know yet or that can change.","That unknown or changeable value is called a variable."], explainDiagram: null },
          { q: "What is the value of x + 5 when x = 3?", options: ["5", "8", "15", "3"], answer: 1, difficulty: "easy", explain: "Substituting x=3: 3 + 5 = 8.", explainSteps: ["Substitute x=3 into the expression x + 5.","That gives 3 + 5.","3 + 5 = 8."], explainDiagram: null },
          { q: "Which expression represents 'a number y increased by 7'?", options: ["y - 7", "7y", "y + 7", "y ÷ 7"], answer: 2, difficulty: "medium", explain: "'Increased by 7' means adding 7 to the number, so it's y + 7.", explainSteps: ["'Increased by' means adding on to something.","Take the number y and add 7 to it.","That's written as y + 7."], explainDiagram: null },
          { q: "What is the coefficient of x in the term 6x?", options: ["6", "x", "1", "0"], answer: 0, difficulty: "medium", explain: "The coefficient is the number multiplying the variable - here it's 6.", explainSteps: ["A coefficient is the number multiplying a variable.","In the term 6x, the number sitting in front of x is 6.","So the coefficient is 6."], explainDiagram: null },
          { q: "If 2x = 14, what is the value of x?", options: ["5", "6", "7", "12"], answer: 2, difficulty: "hard", explain: "Dividing both sides by 2: x = 14 ÷ 2 = 7.", explainSteps: ["Start with 2x = 14.","Divide both sides by 2 to isolate x.","14 ÷ 2 = 7, so x = 7."], explainDiagram: null },
          { q: "Which of these is a variable, not a constant?", options: ["9", "-3", "n", "100"], answer: 2, difficulty: "hard", explain: "'n' can represent different values, making it a variable, while 9, -3 and 100 are fixed constants.", explainSteps: ["A constant is a fixed number that never changes, like 9, -3 or 100.","A variable can represent different values depending on the situation.","'n' is the one that can change — it's the variable."], explainDiagram: null }
        ],
        terms: [
          { term: "Variable", def: "A letter that stands for an unknown or changeable number" },
          { term: "Constant", def: "A fixed number that does not change" },
          { term: "Expression", def: "A combination of numbers, variables and operations, like 3x + 2" },
          { term: "Coefficient", def: "The number multiplying a variable, like the 4 in 4y" },
          { term: "Equation", def: "A mathematical statement that two expressions are equal" },
          { term: "Substitution", def: "Replacing a variable with a specific number" }
        ]
      },
      {
        id: "perimeter-area",
        name: "Perimeter and Area",
        blurb: "Measuring the boundary and the surface of shapes",
        questions: [
          { q: "What is the perimeter of a square with side 5 cm?", options: ["10 cm", "20 cm", "25 cm", "15 cm"], answer: 1, difficulty: "easy", explain: "Perimeter of a square = 4 × side = 4 × 5 = 20 cm.", explainSteps: ["Perimeter of a square = 4 × side length.","4 × 5 = 20.","So the perimeter is 20 cm."], explainDiagram: "perimeterArea" },
          { q: "What does 'area' measure?", options: ["The distance around a shape", "The surface covered by a shape", "The weight of a shape", "The angles in a shape"], answer: 1, difficulty: "easy", explain: "Area measures how much surface (2D space) a shape covers.", explainSteps: ["Perimeter measures the boundary distance AROUND a shape.","Area measures the flat surface INSIDE the shape.","So area = the surface a shape covers."], explainDiagram: null },
          { q: "What is the area of a rectangle with length 8 cm and breadth 5 cm?", options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"], answer: 2, difficulty: "medium", explain: "Area of rectangle = length × breadth = 8 × 5 = 40 cm².", explainSteps: ["Area of a rectangle = length × breadth.","8 × 5 = 40.","So the area is 40 cm²."], explainDiagram: "perimeterArea" },
          { q: "What is the perimeter of a rectangle with length 6 cm and breadth 4 cm?", options: ["10 cm", "20 cm", "24 cm", "12 cm"], answer: 1, difficulty: "medium", explain: "Perimeter of rectangle = 2 × (length + breadth) = 2 × (6+4) = 20 cm.", explainSteps: ["Perimeter of a rectangle = 2 × (length + breadth).","6 + 4 = 10, then 2 × 10 = 20.","So the perimeter is 20 cm."], explainDiagram: "perimeterArea" },
          { q: "A square has an area of 49 cm². What is its side length?", options: ["6 cm", "7 cm", "8 cm", "24.5 cm"], answer: 1, difficulty: "hard", explain: "Since area = side × side, and 7 × 7 = 49, the side length is 7 cm.", explainSteps: ["Area of a square = side × side.","We need a number that, multiplied by itself, gives 49.","7 × 7 = 49, so the side length is 7 cm."], explainDiagram: null },
          { q: "Two rectangles have the same perimeter. Must they have the same area?", options: ["Yes, always", "No, not necessarily", "Only if they are squares", "Only if both sides are even"], answer: 1, difficulty: "hard", explain: "Same perimeter doesn't guarantee same area - a 2×8 rectangle and a 4×6 rectangle both have perimeter 20 but different areas (16 vs 24).", explainSteps: ["Try two rectangles that both have perimeter 20: one is 2×8, the other is 4×6.","Area of 2×8 = 16 cm², but area of 4×6 = 24 cm² — different!","So the same perimeter does NOT guarantee the same area."], explainDiagram: "perimeterArea" }
        ],
        terms: [
          { term: "Perimeter", def: "The total distance around the boundary of a shape" },
          { term: "Area", def: "The amount of surface a flat shape covers" },
          { term: "Length", def: "The longer side of a rectangle" },
          { term: "Breadth", def: "The shorter side of a rectangle (also called width)" },
          { term: "Square unit", def: "The unit used to measure area, like cm² or m²" },
          { term: "Side", def: "One of the straight edges of a shape like a square" }
        ]
      },
      {
        id: "ratio-proportion",
        name: "Ratio and Proportion",
        blurb: "Comparing quantities and scaling them up or down",
        questions: [
          { q: "What is the ratio of 4 to 8 in simplest form?", options: ["4:8", "1:2", "2:1", "1:4"], answer: 1, difficulty: "easy", explain: "4:8 simplifies by dividing both by 4, giving 1:2.", explainSteps: ["Write the ratio 4:8.","Divide both numbers by their common factor, 4.","4÷4 : 8÷4 = 1:2."], explainDiagram: "ratioBar" },
          { q: "If a class has 20 boys and 15 girls, what is the ratio of boys to girls?", options: ["3:4", "4:3", "15:20", "20:15 only"], answer: 1, difficulty: "easy", explain: "20:15 simplifies by dividing both by 5, giving 4:3.", explainSteps: ["Write the ratio 20:15.","Divide both numbers by their common factor, 5.","20÷5 : 15÷5 = 4:3."], explainDiagram: "ratioBar" },
          { q: "Are the ratios 2:3 and 4:6 in proportion?", options: ["Yes", "No", "Only sometimes", "Cannot tell"], answer: 0, difficulty: "medium", explain: "4:6 simplifies to 2:3, so the two ratios are equal and are said to be in proportion.", explainSteps: ["Simplify 4:6 by dividing both numbers by 2.","4÷2 : 6÷2 = 2:3.","Since both ratios simplify to 2:3, they ARE in proportion."], explainDiagram: null },
          { q: "If 3 pens cost ₹45, what is the cost of 5 pens at the same rate?", options: ["₹60", "₹65", "₹75", "₹90"], answer: 2, difficulty: "medium", explain: "Cost per pen = 45 ÷ 3 = ₹15. For 5 pens: 15 × 5 = ₹75.", explainSteps: ["First find the cost of ONE pen: 45 ÷ 3 = 15.","Now multiply by 5 pens: 15 × 5.","15 × 5 = 75, so 5 pens cost ₹75."], explainDiagram: null },
          { q: "A map has a scale of 1:100000. A distance of 3 cm on the map represents how much in reality?", options: ["3 km", "30 km", "300 km", "0.3 km"], answer: 0, difficulty: "hard", explain: "3 cm × 100000 = 300000 cm = 3000 m = 3 km.", explainSteps: ["Multiply the map distance by the scale: 3 cm × 100000 = 300000 cm.","Convert cm to metres: 300000 ÷ 100 = 3000 m.","Convert metres to km: 3000 ÷ 1000 = 3 km."], explainDiagram: null },
          { q: "If a:b = 2:5 and b:c = 5:8, what is a:c?", options: ["2:8", "2:5", "5:8", "10:40 which simplifies to 2:8"], answer: 0, difficulty: "hard", explain: "Since b matches in both ratios (5), we can chain them directly: a:c = 2:8.", explainSteps: ["Notice 'b' is 5 in BOTH ratios — they already line up perfectly.","Since b matches, chain the ratios directly to get a:c.","a:c = 2:8."], explainDiagram: "ratioBar" }
        ],
        terms: [
          { term: "Ratio", def: "A way of comparing two quantities of the same kind" },
          { term: "Proportion", def: "A statement that two ratios are equal" },
          { term: "Simplest form", def: "A ratio reduced so it has no common factor left" },
          { term: "Unitary method", def: "Finding the value of one unit first, then scaling to find others" },
          { term: "Scale", def: "The ratio between a distance on a map/model and the real distance" },
          { term: "Equivalent ratios", def: "Different ratios that represent the same comparison" }
        ]
      },
      {
        id: "symmetry",
        name: "Symmetry",
        blurb: "Mirror images, folding lines & balanced shapes",
        questions: [
          { q: "A shape has symmetry if it can be folded so that both halves...", options: ["Are different colors", "Match each other exactly", "Overlap partially", "Disappear"], answer: 1, difficulty: "easy", explain: "A shape is symmetric if folding along a line makes both halves match perfectly.", explainSteps: ["Fold the shape along an imaginary line.","If both halves land exactly on top of each other, they match perfectly.","That perfect match is exactly what symmetry means."], explainDiagram: "symmetryFold" },
          { q: "How many lines of symmetry does a square have?", options: ["1", "2", "4", "0"], answer: 2, difficulty: "easy", explain: "A square has 4 lines of symmetry: 2 through the diagonals and 2 through the midpoints of opposite sides.", explainSteps: ["Try folding a square down the middle vertically — matches!","Try horizontally — matches! Try both diagonals — matches too!","That's 2 straight folds + 2 diagonal folds = 4 lines of symmetry."], explainDiagram: "symmetryFold" },
          { q: "How many lines of symmetry does a circle have?", options: ["1", "4", "Infinite", "0"], answer: 2, difficulty: "medium", explain: "A circle can be folded along any diameter and still match perfectly, so it has infinite lines of symmetry.", explainSteps: ["Try folding a circle along ANY line that passes through its centre.","Every single fold matches perfectly, no matter the angle chosen.","Since every diameter works as a fold line, a circle has infinite lines of symmetry."], explainDiagram: null },
          { q: "Which letter of the English alphabet has a vertical line of symmetry?", options: ["F", "A", "L", "P"], answer: 1, difficulty: "medium", explain: "The letter A looks the same on both sides when folded down the middle vertically.", explainSteps: ["Imagine folding each letter down the middle vertically.","F, L and P all look different on each side when folded — not symmetric.","A looks identical on both sides — it has a vertical line of symmetry."], explainDiagram: null },
          { q: "How many lines of symmetry does a scalene triangle (all sides different) have?", options: ["0", "1", "2", "3"], answer: 0, difficulty: "hard", explain: "Since all sides and angles are different in a scalene triangle, it has no line of symmetry.", explainSteps: ["A scalene triangle has all three sides of DIFFERENT lengths.","No fold line can make two unequal-shaped halves match.","So a scalene triangle has 0 lines of symmetry."], explainDiagram: "symmetryFold" },
          { q: "What is the term for the reflection of a shape across a mirror line?", options: ["Rotation", "Mirror image", "Translation", "Scaling"], answer: 1, difficulty: "hard", explain: "The reflected copy of a shape across a line of symmetry is called its mirror image.", explainSteps: ["When a shape is flipped across a line of symmetry...","...the flipped copy looks exactly like a reflection in a mirror.","That reflected copy is called the mirror image."], explainDiagram: null }
        ],
        terms: [
          { term: "Symmetry", def: "A balanced match between two halves of a shape" },
          { term: "Line of symmetry", def: "The fold line where both halves of a shape match exactly" },
          { term: "Mirror image", def: "The reflected copy of a shape across a line of symmetry" },
          { term: "Symmetrical shape", def: "A shape that has at least one line of symmetry" },
          { term: "Asymmetrical shape", def: "A shape with no line of symmetry" },
          { term: "Reflection", def: "Flipping a shape over a line to create its mirror image" }
        ]
      },
      {
        id: "practical-geometry",
        name: "Practical Geometry",
        blurb: "Drawing circles, lines and angles with instruments",
        questions: [
          { q: "Which instrument is used to draw a circle?", options: ["Ruler", "Protractor", "Compass", "Set square"], answer: 2, difficulty: "easy", explain: "A compass has a pointed end and a pencil end, used to draw circles and arcs of a fixed radius.", explainSteps: ["A ruler draws straight lines; a protractor measures angles.","Only one tool has a fixed pointed end and a swinging pencil arm for curves.","That's the compass."], explainDiagram: null },
          { q: "What do you need to set on a compass before drawing a circle of radius 4 cm?", options: ["The angle", "The opening between the two arms to 4 cm", "The color of ink", "Nothing, it's automatic"], answer: 1, difficulty: "easy", explain: "You set the compass opening (the distance between the pointer and the pencil tip) to match the required radius.", explainSteps: ["The compass draws a circle at a fixed distance from its pointed tip.","That fixed distance is exactly the radius.","So you open the compass arms exactly 4 cm apart before drawing."], explainDiagram: null },
          { q: "Which tool helps draw a straight line between two points?", options: ["Compass", "Ruler", "Protractor only", "Eraser"], answer: 1, difficulty: "medium", explain: "A ruler (straightedge) is used to draw straight lines between two given points.", explainSteps: ["A compass draws curves, not straight paths.","A straightedge (ruler) is exactly built for connecting two points in a straight line.","So a ruler draws the straight line between two points."], explainDiagram: null },
          { q: "To construct a line segment equal to a given one, what do you typically use?", options: ["Ruler and compass", "Protractor only", "Only a pencil", "A calculator"], answer: 0, difficulty: "medium", explain: "You measure the given segment's length with a ruler, then use a compass to mark that exact length elsewhere.", explainSteps: ["First, measure the given segment's length using a ruler.","Then set a compass to that exact length.","Use the compass to mark the same length elsewhere — that's why both ruler AND compass are needed."], explainDiagram: null },
          { q: "How would you construct the perpendicular bisector of a line segment using a compass?", options: ["Draw arcs from both endpoints with the same radius (more than half the segment) and join their intersection points", "Just guess the middle point", "Use a protractor to measure 45°", "Fold the paper only"], answer: 0, difficulty: "hard", explain: "Drawing equal arcs from both endpoints and joining where they cross gives a line that is exactly perpendicular and passes through the midpoint.", explainSteps: ["From each endpoint, draw an arc using the SAME radius (more than half the segment's length).","The two arcs cross at two points, one above and one below the segment.","Joining those crossing points gives a line that's exactly perpendicular and passes through the midpoint."], explainDiagram: null },
          { q: "Which construction lets you copy an angle exactly using only a compass and ruler?", options: ["Drawing arcs that mark equal distances on both rays of the original and new angle", "Measuring with a ruler alone", "Estimating by eye", "Using a calculator"], answer: 0, difficulty: "hard", explain: "By drawing matching arcs across both rays of an angle and transferring those arc distances, you can recreate the exact same angle elsewhere.", explainSteps: ["Draw an arc across both rays of the original angle, marking two crossing points.","Copy that same arc distance onto the new angle's rays.","Connecting the matching points recreates the exact same angle size."], explainDiagram: null }
        ],
        terms: [
          { term: "Compass", def: "A tool with two arms used to draw circles and arcs" },
          { term: "Ruler", def: "A straightedge tool used to draw and measure straight lines" },
          { term: "Arc", def: "A curved part of a circle" },
          { term: "Perpendicular bisector", def: "A line that cuts another line exactly in half at a right angle" },
          { term: "Construction", def: "Drawing accurate geometric figures using only a compass and ruler" },
          { term: "Radius", def: "The fixed distance from the centre used to draw a circle with a compass" }
        ]
      },
      {
        id: "3d-2d-shapes",
        name: "Understanding 3D and 2D Shapes",
        blurb: "Flat shapes vs solid shapes, faces, edges & corners",
        questions: [
          { q: "Which of these is a 2D shape?", options: ["Cube", "Sphere", "Triangle", "Cylinder"], answer: 2, difficulty: "easy", explain: "A triangle is flat and has only length and breadth, making it a 2D (two-dimensional) shape.", explainSteps: ["2D means only 2 dimensions: length and breadth, with no height or depth.","A triangle is completely flat.","So a triangle is 2D (cube, sphere and cylinder are all solid, 3D shapes)."], explainDiagram: "shapes3D2D" },
          { q: "Which of these is a 3D shape?", options: ["Circle", "Cube", "Square", "Rectangle"], answer: 1, difficulty: "easy", explain: "A cube has length, breadth AND height, making it a 3D (three-dimensional) solid shape.", explainSteps: ["3D means length, breadth AND height — it takes up real space.","A cube has all three dimensions: you can pick it up and it has volume.","So a cube is 3D (circle, square and rectangle are all flat, 2D shapes)."], explainDiagram: "shapes3D2D" },
          { q: "How many faces does a cube have?", options: ["4", "6", "8", "12"], answer: 1, difficulty: "medium", explain: "A cube has 6 flat square faces.", explainSteps: ["Picture a cube like a dice or a box.","Count each flat square side: top, bottom, and 4 around the sides.","That's 6 faces total."], explainDiagram: "shapes3D2D" },
          { q: "How many edges does a cube have?", options: ["6", "8", "12", "24"], answer: 2, difficulty: "medium", explain: "A cube has 12 edges where its faces meet.", explainSteps: ["An edge is the straight line where two faces meet.","A cube has 4 edges on top, 4 on the bottom, and 4 vertical edges connecting them.","4+4+4 = 12 edges."], explainDiagram: "shapes3D2D" },
          { q: "How many vertices (corners) does a cube have?", options: ["6", "8", "12", "10"], answer: 1, difficulty: "hard", explain: "A cube has 8 vertices, one at each corner.", explainSteps: ["A vertex is a corner point where edges meet.","A cube has 4 corners on its top face and 4 on its bottom face.","4+4 = 8 vertices."], explainDiagram: null },
          { q: "A cylinder has how many flat faces?", options: ["0", "1", "2", "3"], answer: 2, difficulty: "hard", explain: "A cylinder has 2 flat circular faces (top and bottom) and one curved surface in between.", explainSteps: ["A cylinder has one curved surface wrapping around its side.","It also has a flat circle on top and a flat circle on the bottom.","That's 2 flat faces, plus the curved surface in between."], explainDiagram: "shapes3D2D" }
        ],
        terms: [
          { term: "2D shape", def: "A flat shape with only length and breadth, like a square" },
          { term: "3D shape", def: "A solid shape with length, breadth and height, like a cube" },
          { term: "Face", def: "A flat or curved surface of a 3D shape" },
          { term: "Edge", def: "The line where two faces of a 3D shape meet" },
          { term: "Vertex", def: "A corner point where edges of a 3D shape meet" },
          { term: "Net", def: "A flat pattern that can be folded to form a 3D shape" }
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
        id: "our-food",
        name: "Our Food",
        blurb: "Where our food comes from and what it's made of",
        questions: [
          { q: "Which of these is a plant product?", options: ["Honey", "Milk", "Rice", "Egg"], answer: 2, difficulty: "easy", explain: "Rice comes from the paddy plant, making it a plant product.", explainSteps: ["Rice grows from the paddy plant — no animal is involved at all.","Milk, honey and egg all come from animals, so they're out.","That makes rice the plant product! 🌾"], explainDiagram: null },
          { q: "Herbivores eat...", options: ["Only plants", "Only animals", "Both plants and animals", "Neither"], answer: 0, difficulty: "easy", explain: "Herbivores such as cows and goats eat only plant material.", explainSteps: ["Herbivore breaks down to 'herbi' (plant) + 'vore' (eater).","Cows, goats, deer, and rabbits all fit this group — plants only, nothing else.","So herbivores eat only plants, never meat."], explainDiagram: null },
          { q: "Animals that eat both plants and other animals are called...", options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"], answer: 2, difficulty: "medium", explain: "Omnivores, like humans and bears, eat a mix of plant and animal food.", explainSteps: ["Look at the animal's menu: does it eat plants, meat, or both?","An animal like a bear or a human eats fruit AND fish/meat — that's a mixed diet.","'Omni' means 'all', so an omnivore eats it all!"], explainDiagram: null },
          { q: "Which part of the plant is turmeric obtained from?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 1, difficulty: "medium", explain: "Turmeric is obtained from the underground stem (rhizome) of the turmeric plant.", explainSteps: ["Turmeric isn't a leaf, flower, or fruit — it grows underground.","It's actually a swollen underground stem called a rhizome, just like ginger.","So the answer is stem, specifically the part that hides beneath the soil."], explainDiagram: null },
          { q: "A tiger, which only eats other animals, is called a...", options: ["Herbivore", "Carnivore", "Omnivore", "Producer"], answer: 1, difficulty: "hard", explain: "Carnivores are animals whose diet is entirely other animals.", explainSteps: ["A tiger never touches plants — its whole diet is other animals.","'Carni' relates to flesh, so a flesh-only eater is a carnivore.","Tigers, lions and wolves are all classic carnivores."], explainDiagram: null },
          { q: "Why do we need a variety of foods in our diet?", options: ["To make food taste better only", "Because no single food gives all the nutrients we need", "Because variety is cheaper", "It has no real reason"], answer: 1, difficulty: "hard", explain: "Different foods provide different nutrients, so eating a variety keeps our body healthy and balanced.", explainSteps: ["No single food has every nutrient your body needs — not even your favourite one!","Rice gives energy, dal gives protein, veggies give vitamins — each does a different job.","Eating a variety fills every nutrient gap, keeping your whole body strong."], explainDiagram: null }
        ],
        terms: [
          { term: "Herbivore", def: "An animal that eats only plants" },
          { term: "Carnivore", def: "An animal that eats only other animals" },
          { term: "Omnivore", def: "An animal that eats both plants and animals" },
          { term: "Ingredient", def: "One of the items that a food is made from" },
          { term: "Tuber", def: "A swollen underground stem that stores food, like a potato" },
          { term: "Nutrient", def: "A substance in food that nourishes the body" }
        ]
      },
      {
        id: "playing-with-magnets",
        name: "Playing with Magnets",
        blurb: "Magnetic materials, poles & how magnets behave",
        questions: [
          { q: "Which of these materials is attracted by a magnet?", options: ["Iron nail", "Plastic ruler", "Paper", "Wooden block"], answer: 0, difficulty: "easy", explain: "Iron is a magnetic material and gets attracted to a magnet, unlike plastic, paper or wood.", explainSteps: ["Ask: is this object made of iron, steel, or nickel?","An iron nail is metal and gets pulled straight to a magnet.","Plastic, paper and wood are non-magnetic, so they stay put — only the iron nail moves!"], explainDiagram: "magnetPoles" },
          { q: "How many poles does every magnet have?", options: ["1", "2", "3", "4"], answer: 1, difficulty: "easy", explain: "Every magnet has two poles: a North pole and a South pole.", explainSteps: ["Picture a bar magnet: it always has two ends.","One end is called North (N), the other South (S) — never just one, never three.","Every magnet, big or small, always has exactly 2 poles."], explainDiagram: null },
          { q: "What happens when two like poles (N-N or S-S) of magnets are brought close?", options: ["They attract", "They repel", "Nothing happens", "They stick permanently"], answer: 1, difficulty: "medium", explain: "Like poles repel (push away) each other, while unlike poles attract.", explainSteps: ["Bring two North poles (or two South poles) close together.","Same poles push against each other — think of it like two kids racing toward each other and bouncing back.","So like poles ALWAYS repel (push away), never attract."], explainDiagram: "magnetPoles" },
          { q: "What happens when the North pole of one magnet is brought near the South pole of another?", options: ["They repel", "They attract", "They cancel out", "They turn non-magnetic"], answer: 1, difficulty: "medium", explain: "Unlike poles (N and S) attract each other.", explainSteps: ["Now try a North pole next to a South pole.","Opposites are drawn together — N pulls S in like magnets 'want' to complete each other.","So unlike poles attract — this is the opposite rule from question 3!"], explainDiagram: null },
          { q: "What is a compass mainly used for?", options: ["Measuring temperature", "Finding direction using Earth's magnetism", "Measuring weight", "Cutting paper"], answer: 1, difficulty: "hard", explain: "A compass needle aligns with Earth's magnetic field, always pointing roughly North-South, helping us find direction.", explainSteps: ["A compass needle is really just a tiny freely-spinning magnet.","Earth itself acts like a giant magnet, so the needle lines up with Earth's magnetic field.","That's why it always settles pointing roughly North-South — perfect for finding direction."], explainDiagram: null },
          { q: "If you cut a bar magnet into two pieces, what happens?", options: ["Only one piece has a pole", "Each piece becomes a complete magnet with two poles", "Both pieces lose their magnetism", "The pieces become non-magnetic wires"], answer: 1, difficulty: "hard", explain: "Cutting a magnet doesn't separate its poles - each new piece becomes its own smaller magnet with a North and South pole.", explainSteps: ["Here's the surprising part: cutting a magnet does NOT separate the poles.","Instead, each new piece instantly grows its own North and South pole.","So one magnet cut in half = two smaller, complete magnets, not two half-magnets!"], explainDiagram: null }
        ],
        terms: [
          { term: "Magnet", def: "An object that attracts iron and certain other materials" },
          { term: "Magnetic material", def: "A material, like iron, that is attracted to a magnet" },
          { term: "North pole", def: "One end of a magnet, which points north when freely suspended" },
          { term: "South pole", def: "The other end of a magnet, which points south when freely suspended" },
          { term: "Attraction", def: "The pulling force between unlike magnetic poles" },
          { term: "Repulsion", def: "The pushing-away force between like magnetic poles" }
        ]
      },
      {
        id: "rain",
        name: "Rain: Where Does It Come From?",
        blurb: "Evaporation, condensation & the water cycle",
        questions: [
          { q: "What is it called when water turns into water vapour due to heat?", options: ["Condensation", "Evaporation", "Precipitation", "Freezing"], answer: 1, difficulty: "easy", explain: "Evaporation is the process where liquid water changes into water vapour (gas) due to heat from the sun.", explainSteps: ["The sun heats up water in rivers, lakes and oceans.","Heated water turns into an invisible gas called water vapour and rises into the air.","This heat-powered change from liquid to gas is called evaporation."], explainDiagram: "waterCycle" },
          { q: "What are clouds mainly made of?", options: ["Smoke", "Tiny water droplets", "Dust only", "Cotton"], answer: 1, difficulty: "easy", explain: "Clouds are formed from tiny droplets of water that condense from water vapour in the air.", explainSteps: ["High up, the air is much cooler than near the ground.","Water vapour cools down there and clumps together into millions of tiny droplets.","Those tiny droplets floating together are exactly what we see as a cloud."], explainDiagram: null },
          { q: "What is it called when water vapour cools and turns back into liquid water?", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], answer: 1, difficulty: "medium", explain: "Condensation is the process where water vapour cools down and changes back into liquid water droplets.", explainSteps: ["This is the reverse of evaporation — going from gas back to liquid.","As water vapour rises and cools, it changes back into tiny liquid droplets.","That cooling-and-turning-to-liquid process is called condensation."], explainDiagram: "waterCycle" },
          { q: "What causes rain to fall from clouds?", options: ["Water droplets in clouds become too heavy and fall", "Clouds get punctured", "Wind pushes water down", "The sun pulls water down"], answer: 0, difficulty: "medium", explain: "When water droplets in a cloud combine and grow heavy enough, gravity pulls them down as rain.", explainSteps: ["Inside a cloud, tiny water droplets keep bumping into each other and joining up.","As they combine, the droplets get bigger and heavier.","Once they're too heavy for air to hold up, gravity pulls them down — that's rain!"], explainDiagram: null },
          { q: "What is the continuous movement of water between the Earth and the atmosphere called?", options: ["Water cycle", "Food chain", "Carbon cycle", "Rock cycle"], answer: 0, difficulty: "hard", explain: "The water cycle describes water evaporating, condensing into clouds, and falling as rain again and again.", explainSteps: ["Trace the journey: water evaporates from the sea → forms clouds → falls as rain → flows back to rivers and seas.","Then the sun heats it again and the whole journey repeats — forever.","This nonstop loop of water moving between Earth and sky is the water cycle."], explainDiagram: "waterCycle" },
          { q: "Why does water in a shallow puddle dry up faster on a hot, windy day?", options: ["Evaporation speeds up with more heat and air movement", "The puddle sinks into the ground faster", "Wind adds more water", "It has nothing to do with weather"], answer: 0, difficulty: "hard", explain: "Both heat and wind increase the rate of evaporation, so puddles dry up faster in hot, windy conditions.", explainSteps: ["Two things speed up evaporation: heat and moving air.","On a hot day, more heat energy pushes water molecules to escape as vapour faster.","Add wind, and it sweeps the vapour away even quicker — so heat + wind = a puddle gone fast!"], explainDiagram: null }
        ],
        terms: [
          { term: "Evaporation", def: "Liquid water changing into water vapour due to heat" },
          { term: "Condensation", def: "Water vapour cooling and changing back into liquid water" },
          { term: "Water cycle", def: "The continuous movement of water between Earth and the atmosphere" },
          { term: "Water vapour", def: "Water in its gaseous form, invisible in air" },
          { term: "Precipitation", def: "Water falling from clouds as rain, snow, or hail" },
          { term: "Cloud", def: "A visible mass of tiny water droplets or ice crystals in the sky" }
        ]
      },
      {
        id: "what-animals-eat",
        name: "What Do Animals Eat?",
        blurb: "Food habits and feeding structures of animals",
        questions: [
          { q: "What do we call animals that eat only grass and leaves?", options: ["Carnivores", "Herbivores", "Omnivores", "Predators"], answer: 1, difficulty: "easy", explain: "Herbivores, like cows and deer, feed only on plant matter such as grass and leaves.", explainSteps: ["Grass and leaves are both parts of plants, nothing else.","Animals like cows, deer and goats eat only this plant material.","So an animal that eats only grass and leaves is a herbivore."], explainDiagram: null },
          { q: "Which body part does a snake use to swallow its food whole?", options: ["Teeth for chewing", "A very flexible jaw", "Hands", "Claws"], answer: 1, difficulty: "easy", explain: "Snakes have a highly flexible jaw that lets them swallow prey much wider than their head, without chewing.", explainSteps: ["A snake has no hands and can't chew its food into pieces.","Instead, its jaw bones are loosely connected and can stretch very wide.","This flexible jaw lets it swallow prey much bigger than its own head, whole!"], explainDiagram: null },
          { q: "What do frogs mainly eat?", options: ["Insects", "Grass", "Fruits only", "Wood"], answer: 0, difficulty: "medium", explain: "Frogs are carnivores that mainly catch and eat insects using their sticky tongue.", explainSteps: ["Watch a frog catch its dinner — it shoots out a long, sticky tongue.","That tongue is perfect for grabbing small, quick-moving insects.","So insects are the main food on a frog's menu."], explainDiagram: null },
          { q: "Why do herbivorous animals like cows have flat, broad teeth?", options: ["To bite and tear meat", "To grind tough plant material like grass", "Teeth have no function", "To dig burrows"], answer: 1, difficulty: "medium", explain: "Flat, broad molar teeth are well suited for grinding fibrous plant material such as grass and leaves.", explainSteps: ["Grass is tough and fibrous — hard to break down.","Flat, broad teeth work like a mill, grinding tough plant fibres into a soft, digestible paste.","That's exactly why herbivores like cows have wide, flat molar teeth."], explainDiagram: null },
          { q: "How is a lion's set of teeth adapted for its diet?", options: ["Sharp canines for tearing meat", "Flat teeth for grinding grass", "No teeth at all", "Teeth only for show"], answer: 0, difficulty: "hard", explain: "Lions have sharp, pointed canine teeth adapted for gripping and tearing the flesh of prey.", explainSteps: ["A lion needs to grip and rip flesh from its prey, not grind plants.","Its canine teeth are sharp and pointed — perfect for tearing meat.","So a lion's teeth are specially shaped (sharp canines) for a meat-only diet."], explainDiagram: null },
          { q: "Woodpeckers have long, sharp beaks mainly to help them...", options: ["Swim underwater", "Peck into tree bark to find insects", "Carry heavy stones", "Build nests only"], answer: 1, difficulty: "hard", explain: "A woodpecker's strong, pointed beak is adapted to drill into tree bark to reach insects hiding inside.", explainSteps: ["A woodpecker's food (insects) is hidden inside tree bark, out of reach.","Its beak is long, hard and pointed, built like a tiny chisel.","It hammers into the bark to dig out insects — the beak is an adaptation for that exact job."], explainDiagram: null }
        ],
        terms: [
          { term: "Herbivore", def: "An animal that eats only plants" },
          { term: "Carnivore", def: "An animal that eats only other animals" },
          { term: "Omnivore", def: "An animal that eats both plants and animals" },
          { term: "Prey", def: "An animal that is hunted and eaten by another animal" },
          { term: "Predator", def: "An animal that hunts other animals for food" },
          { term: "Adaptation", def: "A special feature that helps an animal survive, like sharp teeth or a long beak" }
        ]
      },
      {
        id: "materials-and-things",
        name: "Materials and Things",
        blurb: "Objects, materials & their properties",
        questions: [
          { q: "Which of these is transparent?", options: ["Wood", "Clear glass", "Cardboard", "A brick"], answer: 1, difficulty: "easy", explain: "Clear glass lets light pass through it easily, so we can see through it - that makes it transparent.", explainSteps: ["Ask: can light pass all the way through it, letting you see clearly on the other side?","Wood, cardboard and brick all block your view completely.","Clear glass lets light straight through, so you can see clearly — that's transparent."], explainDiagram: "transparency" },
          { q: "Which material is a good conductor of heat?", options: ["Wood", "Plastic", "Metal", "Rubber"], answer: 2, difficulty: "easy", explain: "Metals like copper and aluminium conduct heat well, which is why cooking pots are made of metal.", explainSteps: ["Think about materials used to make cooking pots — always metal, never plastic.","That's because metals like copper and aluminium let heat pass through them easily.","A material that lets heat flow through easily is called a good conductor of heat."], explainDiagram: null },
          { q: "An object that we cannot see through at all is called...", options: ["Transparent", "Translucent", "Opaque", "Flexible"], answer: 2, difficulty: "medium", explain: "Opaque objects, like a wooden door, do not let any light pass through.", explainSteps: ["Opaque is the opposite of transparent — zero light gets through.","Try to see through a wooden door — you can't, not even a little.","So an object you cannot see through at all is opaque."], explainDiagram: "transparency" },
          { q: "Butter paper, through which shapes look blurry, is an example of...", options: ["Transparent material", "Opaque material", "Translucent material", "Magnetic material"], answer: 2, difficulty: "medium", explain: "Translucent materials let some light through but you can't see a clear image, like frosted glass or butter paper.", explainSteps: ["Hold butter paper up — you can tell something is behind it, but the shape is fuzzy.","That's because SOME light sneaks through, but it scatters instead of passing straight.","Materials that let a little blurry light through are called translucent — in between transparent and opaque."], explainDiagram: "transparency" },
          { q: "Why are cooking utensil handles usually made of plastic, not metal?", options: ["Plastic looks nicer", "Plastic is a poor conductor of heat, so the handle stays cool", "Plastic is heavier", "Metal cannot be shaped into handles"], answer: 1, difficulty: "hard", explain: "Plastic is an insulator - it doesn't conduct heat well, so the handle stays safe to touch even when the pan is hot.", explainSteps: ["Metal handles would get scorching hot from the pan and burn your hand.","Plastic doesn't let heat travel through it easily — it's a poor conductor, called an insulator.","So plastic handles stay cool and safe to touch even while the pan is very hot."], explainDiagram: null },
          { q: "Which pair correctly groups materials by the same property?", options: ["Iron nail and wooden stick - both magnetic", "Glass and plastic sheet - both transparent", "Cotton and stone - both soft", "Water and oil - both solids"], answer: 1, difficulty: "hard", explain: "Both clear glass and a clear plastic sheet let light pass through, so they share the property of being transparent.", explainSteps: ["Check each pair for what they have in common.","Iron and wood: only iron is magnetic — not a match. Cotton and stone: only cotton is soft — not a match.","Glass and clear plastic sheet both let you see straight through them — both transparent, that's the real match!"], explainDiagram: null }
        ],
        terms: [
          { term: "Transparent", def: "Lets light pass through completely, objects behind are clearly visible" },
          { term: "Translucent", def: "Lets some light through, objects behind look blurry" },
          { term: "Opaque", def: "Does not let light pass through at all" },
          { term: "Conductor", def: "A material that allows heat or electricity to pass through easily" },
          { term: "Insulator", def: "A material that does not allow heat or electricity to pass through easily" },
          { term: "Property", def: "A specific quality of a material, like hardness or transparency" }
        ]
      },
      {
        id: "habitat",
        name: "Habitat",
        blurb: "Where living things make their home",
        questions: [
          { q: "What is a habitat?", options: ["A type of food", "The natural home of a living thing", "A kind of tool", "A weather pattern"], answer: 1, difficulty: "easy", explain: "A habitat is the natural place where a plant or animal lives and finds everything it needs to survive.", explainSteps: ["Think of a habitat as an animal's 'home address' in nature.","It's the exact place that gives a living thing food, water, shelter and safety.","So a habitat is simply the natural home of a living thing."], explainDiagram: null },
          { q: "Fish live in which kind of habitat?", options: ["Desert", "Aquatic (water)", "Mountains", "Forest floor"], answer: 1, difficulty: "easy", explain: "Fish live in aquatic habitats such as rivers, lakes and oceans.", explainSteps: ["Fish need to breathe through gills, which only work underwater.","Rivers, lakes and oceans are all watery places — that's an aquatic habitat.","So fish belong in aquatic habitats, not on land."], explainDiagram: null },
          { q: "Camels are well adapted to survive in which habitat?", options: ["Desert", "Polar ice", "Deep ocean", "Rainforest"], answer: 0, difficulty: "medium", explain: "Camels have adaptations like humps for fat storage and broad feet, suited to hot, dry desert habitats.", explainSteps: ["Deserts are hot, dry, and have very little water — a tough place to live.","Camels store fat in their hump (not water directly) and have broad feet for walking on sand.","These special features let camels thrive exactly where most animals can't — the desert."], explainDiagram: "habitatAdapt" },
          { q: "What do we call all the living and non-living things in a habitat together?", options: ["Ecosystem", "Food chain only", "Population", "Species"], answer: 0, difficulty: "medium", explain: "An ecosystem includes all living things (plants, animals) and non-living things (air, water, soil) in a habitat, interacting together.", explainSteps: ["A habitat isn't just plants and animals — it includes air, water and soil too.","When you combine ALL living things AND non-living things together, interacting as a system, that's bigger than just a habitat.","That whole interacting system is called an ecosystem."], explainDiagram: null },
          { q: "Why do polar bears have thick fur and a layer of fat?", options: ["To swim faster only", "To survive extreme cold in their Arctic habitat", "To look bigger to prey", "It has no survival purpose"], answer: 1, difficulty: "hard", explain: "Thick fur and fat insulate polar bears against the freezing temperatures of their Arctic habitat.", explainSteps: ["The Arctic is freezing cold, and polar bears must survive it every day.","Thick fur traps warm air near the skin, and a fat layer underneath blocks cold from getting in.","Together, fur + fat = a built-in winter coat that keeps a polar bear warm in extreme cold."], explainDiagram: "habitatAdapt" },
          { q: "How are cactus plants adapted to their desert habitat?", options: ["Broad thin leaves to lose water fast", "Thick stems to store water and spines instead of leaves to reduce water loss", "Deep green broad leaves", "They need constant standing water"], answer: 1, difficulty: "hard", explain: "Cacti store water in thick stems and have spines instead of broad leaves, minimising water loss in the dry desert habitat.", explainSteps: ["A desert has almost no rain, so plants must save every drop of water.","A cactus stores water in its thick, fleshy stem instead of thin leaves that would lose water fast.","Spines (instead of broad leaves) also cut down water loss — the whole plant is built to survive dry conditions."], explainDiagram: null }
        ],
        terms: [
          { term: "Habitat", def: "The natural home or environment of a living thing" },
          { term: "Adaptation", def: "A feature that helps a living thing survive in its habitat" },
          { term: "Aquatic habitat", def: "A habitat in water, like a river, lake or ocean" },
          { term: "Terrestrial habitat", def: "A habitat on land, like a forest or desert" },
          { term: "Ecosystem", def: "All living and non-living things in a habitat, interacting together" },
          { term: "Population", def: "A group of the same kind of living things in a habitat" }
        ]
      },
      {
        id: "separation-of-substances",
        name: "Separation of Substances",
        blurb: "Methods to separate mixtures of materials",
        questions: [
          { q: "Which method separates tea leaves from brewed tea?", options: ["Filtration", "Evaporation", "Magnetic separation", "Sublimation"], answer: 0, difficulty: "easy", explain: "Filtration uses a strainer or filter to separate solid tea leaves from the liquid tea.", explainSteps: ["Tea leaves are solid; brewed tea is liquid — two different things mixed together.","A strainer (filter) has tiny holes: liquid passes through, solid leaves get trapped.","That trapping-and-passing-through method is called filtration."], explainDiagram: "filtration" },
          { q: "Which method would you use to separate iron filings mixed with sand?", options: ["Filtration", "Winnowing", "Using a magnet", "Sieving only"], answer: 2, difficulty: "easy", explain: "Since iron is magnetic and sand is not, a magnet can pull out the iron filings, leaving sand behind.", explainSteps: ["First ask: is either substance magnetic? Iron is, sand is not.","A magnet held over the mixture pulls only the iron filings toward it.","Sand gets left behind — magnetic separation solved it in seconds!"], explainDiagram: "filtration" },
          { q: "Which method separates husk from grain using wind?", options: ["Winnowing", "Filtration", "Sedimentation", "Decantation"], answer: 0, difficulty: "medium", explain: "Winnowing uses moving air (natural or fan-made) to blow away lighter husk while heavier grains fall down.", explainSteps: ["Husk is light and grain is heavy — that weight difference is the key.","When you throw the mixture up in moving air (wind or a fan), the light husk blows away.","The heavier grains fall straight back down — that's winnowing."], explainDiagram: null },
          { q: "What is it called when solid particles settle at the bottom of a liquid?", options: ["Evaporation", "Sedimentation", "Condensation", "Filtration"], answer: 1, difficulty: "medium", explain: "Sedimentation is the settling of heavier solid particles at the bottom of a liquid mixture.", explainSteps: ["Picture muddy water left standing still for a while.","Heavier solid particles are pulled down by gravity, sinking to the bottom over time.","That settling of heavy particles at the bottom of a liquid is called sedimentation."], explainDiagram: null },
          { q: "How would you get back salt from salt water?", options: ["Filtration", "Winnowing", "Evaporation", "Using a magnet"], answer: 2, difficulty: "hard", explain: "Evaporating the water leaves the dissolved salt behind as a solid, since salt doesn't evaporate at the same rate as water.", explainSteps: ["Salt is completely dissolved in the water — you can't filter out something that's dissolved.","Heating the water turns it into vapour, which escapes into the air — but salt doesn't evaporate like water does.","Once all the water is gone, only solid salt crystals remain behind — that's evaporation at work."], explainDiagram: null },
          { q: "Why can't filtration be used to separate salt dissolved in water?", options: ["Salt particles are too large for a filter to catch", "Salt is dissolved and passes through the filter along with the water", "Filters only work on gases", "Salt water cannot be filtered under any method"], answer: 1, difficulty: "hard", explain: "Since salt is fully dissolved in water, its particles are far too small to be caught by a filter - it would pass straight through with the water.", explainSteps: ["Filtration only works when solid particles are big enough to get trapped by a filter.","Once salt dissolves, its particles become incredibly tiny — far smaller than any filter's holes.","So dissolved salt just flows straight through the filter along with the water — filtration can't catch it."], explainDiagram: "filtration" }
        ],
        terms: [
          { term: "Filtration", def: "Separating solid particles from a liquid using a filter" },
          { term: "Winnowing", def: "Using wind to separate lighter husk from heavier grain" },
          { term: "Sedimentation", def: "Heavier solid particles settling at the bottom of a liquid" },
          { term: "Decantation", def: "Carefully pouring off a liquid, leaving settled solids behind" },
          { term: "Evaporation", def: "Turning a liquid into vapour using heat, leaving dissolved solids behind" },
          { term: "Mixture", def: "Two or more substances combined together without a chemical change" }
        ]
      },
      {
        id: "fibre-to-fabric",
        name: "Fibre to Fabric",
        blurb: "From natural fibres to the clothes we wear",
        questions: [
          { q: "Cotton fibre is obtained from the...", options: ["Cotton plant's seed pod", "Sheep's fur", "Silkworm's cocoon", "A factory chemical"], answer: 0, difficulty: "easy", explain: "Cotton fibre grows around the seeds inside the cotton plant's bolls (seed pods).", explainSteps: ["Cotton fibre doesn't come from an animal at all — it comes from a plant.","Inside the cotton plant's seed pod (called a boll), soft white fibres grow around the seeds.","Those fluffy fibres are harvested to become cotton."], explainDiagram: "fibreToFabric" },
          { q: "Wool is obtained from the...", options: ["Cotton plant", "Fleece of sheep", "Silkworm cocoon", "Jute plant"], answer: 1, difficulty: "easy", explain: "Wool comes from the fleece (hair) of sheep and some other animals like goats.", explainSteps: ["Think of sheep in winter — they grow a thick, warm coat.","That coat is fleece, made of curly hair fibres.","Shearing (cutting) that fleece off the sheep gives us wool."], explainDiagram: null },
          { q: "Silk fibre is obtained from the...", options: ["Cocoon of the silkworm", "Bark of a tree", "Sheep's wool", "Cotton boll"], answer: 0, difficulty: "medium", explain: "Silk fibre is unwound from the cocoon spun by the silkworm caterpillar.", explainSteps: ["Picture a silkworm caterpillar spinning itself a protective covering.","That covering, made of one very long continuous thread, is called a cocoon.","Unwinding that thread carefully gives us silk fibre."], explainDiagram: null },
          { q: "What is the process of removing seeds from cotton fibre called?", options: ["Ginning", "Weaving", "Spinning", "Shearing"], answer: 0, difficulty: "medium", explain: "Ginning is the process of separating cotton fibres from their seeds.", explainSteps: ["Freshly picked cotton still has seeds mixed into the fibres.","Before spinning, those seeds need to be pulled out and separated from the soft fibre.","That seed-removing step is called ginning."], explainDiagram: "fibreToFabric" },
          { q: "What is the process of turning fibres into yarn (thread) called?", options: ["Weaving", "Spinning", "Ginning", "Shearing"], answer: 1, difficulty: "hard", explain: "Spinning twists fibres together to form a continuous strand called yarn.", explainSteps: ["Loose fibres on their own are weak and can't be woven directly.","Twisting many fibres tightly together makes a strong, continuous thread.","That twisting process, turning fibre into yarn, is called spinning."], explainDiagram: "fibreToFabric" },
          { q: "What is the process of arranging two sets of yarn to make fabric called?", options: ["Weaving", "Ginning", "Spinning", "Shearing"], answer: 0, difficulty: "hard", explain: "Weaving interlaces two sets of yarn at right angles on a loom to create fabric.", explainSteps: ["Now imagine crossing yarns over and under each other, again and again, on a loom.","Two sets of yarn interlace at right angles to build up a flat sheet.","That interlacing process, turning yarn into cloth, is called weaving."], explainDiagram: "fibreToFabric" }
        ],
        terms: [
          { term: "Fibre", def: "A thin, thread-like strand, natural or synthetic, used to make yarn" },
          { term: "Ginning", def: "Removing seeds from raw cotton fibre" },
          { term: "Spinning", def: "Twisting fibres together to make yarn" },
          { term: "Weaving", def: "Interlacing two sets of yarn to make fabric" },
          { term: "Shearing", def: "Cutting the fleece (wool) off a sheep" },
          { term: "Cocoon", def: "The silky covering spun by a silkworm, used to make silk" }
        ]
      },
      {
        id: "plants-parts-functions",
        name: "Plants: Parts and Functions",
        blurb: "Roots, stems, leaves, flowers and what each part does",
        questions: [
          { q: "Which part of the plant absorbs water and minerals from the soil?", options: ["Leaf", "Root", "Flower", "Stem"], answer: 1, difficulty: "easy", explain: "Roots absorb water and minerals from the soil and anchor the plant firmly in place.", explainSteps: ["Underground, roots are constantly in contact with wet soil.","Tiny root hairs soak up water and dissolved minerals like a sponge.","So the root's main job is absorbing water and minerals from the soil."], explainDiagram: "plantParts" },
          { q: "Which part of the plant makes food using sunlight?", options: ["Root", "Stem", "Leaf", "Seed"], answer: 2, difficulty: "easy", explain: "Leaves contain chlorophyll and carry out photosynthesis, making food for the plant using sunlight.", explainSteps: ["Leaves are usually broad and flat, facing the sun to catch as much light as possible.","Inside, a green pigment traps sunlight energy and combines it with water and CO2.","That food-making process happening in the leaf is photosynthesis."], explainDiagram: "plantParts" },
          { q: "What is the main function of the stem?", options: ["Absorbing water only", "Supporting the plant and transporting water/nutrients", "Making seeds", "Attracting insects"], answer: 1, difficulty: "medium", explain: "The stem holds the plant upright and transports water and nutrients between roots and leaves.", explainSteps: ["A plant needs to stand tall to reach sunlight — something has to hold it up.","The stem does exactly that, keeping leaves and flowers upright.","It also acts like a highway, carrying water up and food down between roots and leaves."], explainDiagram: "plantParts" },
          { q: "What is the main function of a flower?", options: ["Photosynthesis", "Reproduction, leading to fruits and seeds", "Absorbing water", "Support"], answer: 1, difficulty: "medium", explain: "Flowers are the reproductive part of a plant, eventually producing fruits and seeds.", explainSteps: ["Flowers aren't just pretty — they have a real biological job.","Inside a flower, pollen and eggs combine to start making seeds.","That process, leading to fruits and seeds, is called reproduction."], explainDiagram: null },
          { q: "What is the green pigment in leaves that helps trap sunlight called?", options: ["Chlorophyll", "Cellulose", "Nectar", "Pollen"], answer: 0, difficulty: "hard", explain: "Chlorophyll is the green pigment that absorbs sunlight, powering photosynthesis.", explainSteps: ["The green colour you see in leaves isn't random — it comes from one specific pigment.","This pigment is brilliant at absorbing sunlight energy for photosynthesis.","That green, light-trapping pigment is called chlorophyll."], explainDiagram: null },
          { q: "Why do many plants have a network of veins spread across their leaves?", options: ["Purely decorative", "To transport water and food throughout the leaf", "To attract insects only", "To make the leaf heavier"], answer: 1, difficulty: "hard", explain: "Leaf veins carry water in and food out, distributing materials efficiently across the whole leaf surface.", explainSteps: ["Every leaf needs two things delivered constantly: water in, and food out.","The thin lines running across a leaf (veins) act like tiny delivery pipes.","That network of veins spreads water and food evenly across the whole leaf."], explainDiagram: "plantParts" }
        ],
        terms: [
          { term: "Root", def: "The plant part that absorbs water and anchors it in soil" },
          { term: "Stem", def: "The plant part that supports it and transports water and nutrients" },
          { term: "Leaf", def: "The plant part that makes food through photosynthesis" },
          { term: "Flower", def: "The reproductive part of a plant that leads to fruit and seeds" },
          { term: "Chlorophyll", def: "The green pigment in leaves that traps sunlight" },
          { term: "Photosynthesis", def: "The process by which plants make food using sunlight, water and carbon dioxide" }
        ]
      },
      {
        id: "changes-around-us",
        name: "Changes Around Us",
        blurb: "Reversible and irreversible changes in materials",
        questions: [
          { q: "Melting ice into water is an example of a...", options: ["Irreversible change", "Reversible change", "Chemical change only", "No change at all"], answer: 1, difficulty: "easy", explain: "Ice melting to water can be reversed by freezing it again, making it a reversible change.", explainSteps: ["Ice melts into water when it warms up.","Put that water back in the freezer, and it turns to ice again — nothing is lost.","Since you can undo it, melting ice is a reversible change."], explainDiagram: "reversible" },
          { q: "Burning a piece of paper is an example of a...", options: ["Reversible change", "Irreversible change", "Physical change only", "No change"], answer: 1, difficulty: "easy", explain: "Once paper burns to ash, it cannot be turned back into paper - this makes it an irreversible change.", explainSteps: ["Watch paper burn — it turns into ash and smoke.","Try as hard as you like, you can never turn ash back into paper.","Since it can't be undone, burning paper is an irreversible change."], explainDiagram: "reversible" },
          { q: "Which of these is a reversible change?", options: ["Cooking an egg", "Stretching a rubber band", "Burning wood", "Rusting of iron"], answer: 1, difficulty: "medium", explain: "A rubber band returns to its original shape after stretching, making it reversible - unlike cooking, burning, or rusting.", explainSteps: ["Stretch a rubber band, then let go — what happens?","It springs right back to its original shape and size.","Since it returns to normal, stretching a rubber band is reversible."], explainDiagram: null },
          { q: "Which of these changes cannot be undone easily?", options: ["Folding paper", "Freezing water", "Baking a cake", "Bending a wire slightly"], answer: 2, difficulty: "medium", explain: "Once a cake is baked, the batter cannot be turned back to its original raw form - it's an irreversible change.", explainSteps: ["Once you bake batter into a cake, can you turn it back into raw batter? No way!","The heat permanently transforms the ingredients into something totally new.","That permanent transformation makes baking a cake an irreversible change."], explainDiagram: null },
          { q: "Why is rusting of iron considered an irreversible change?", options: ["Because rust can be simply wiped off to get iron back", "Because a new substance (rust) forms and cannot be changed back to pure iron easily", "Because it happens instantly", "Because it only happens in labs"], answer: 1, difficulty: "hard", explain: "Rusting forms a new substance (iron oxide) through a chemical reaction, and this change cannot be simply reversed.", explainSteps: ["When iron reacts with air and moisture, it doesn't just get 'dirty' — it forms a brand new substance called rust (iron oxide).","You can't simply wipe rust away and get pure iron back underneath.","Because a new substance is chemically formed and can't easily be reversed, rusting is irreversible."], explainDiagram: null },
          { q: "Which pair correctly separates a reversible from an irreversible change?", options: ["Melting wax (reversible) vs burning wax (irreversible)", "Cooking rice (reversible) vs boiling water (irreversible)", "Freezing water (irreversible) vs rusting (reversible)", "Baking bread (reversible) vs folding cloth (irreversible)"], answer: 0, difficulty: "hard", explain: "Melted wax can be cooled and re-solidified (reversible), but once wax burns, it becomes soot/gases and cannot be recovered (irreversible).", explainSteps: ["Melt wax with heat, then let it cool — it turns solid again, same wax as before. Reversible!","Now burn that same wax — it becomes soot and gases that float away forever.","Melting = reversible, but burning = irreversible, even for the exact same material."], explainDiagram: "reversible" }
        ],
        terms: [
          { term: "Reversible change", def: "A change that can be undone, returning the material to its original form" },
          { term: "Irreversible change", def: "A change that cannot be undone once it happens" },
          { term: "Physical change", def: "A change in shape, size or state without forming a new substance" },
          { term: "Chemical change", def: "A change that forms a completely new substance" },
          { term: "Melting", def: "A solid changing into a liquid due to heat" },
          { term: "Rusting", def: "The reddish-brown coating formed when iron reacts with moisture and air" }
        ]
      },
      {
        id: "water-in-our-life",
        name: "Water in Our Life",
        blurb: "The importance and states of water, and using it wisely",
        questions: [
          { q: "What are the three states of water?", options: ["Solid, liquid, gas", "Hot, cold, warm", "Salty, sweet, sour", "Clean, dirty, murky"], answer: 0, difficulty: "easy", explain: "Water exists as solid (ice), liquid (water) and gas (water vapour).", explainSteps: ["Freeze water and it becomes ice — that's the solid state.","Water straight from a tap is the liquid state.","Heat it until it disappears into the air as steam — that's the gas state, called water vapour."], explainDiagram: null },
          { q: "Why is water considered essential for all living things?", options: ["It's used only for washing", "Living cells and body processes need water to function", "It has no real importance", "Only plants need it"], answer: 1, difficulty: "easy", explain: "Water is essential for digestion, temperature control, and countless processes inside living cells.", explainSteps: ["Every living cell in your body needs water to work properly.","Water helps digest food, carries nutrients around, and controls your body temperature.","Without water, none of these life processes could happen — that's why it's essential."], explainDiagram: null },
          { q: "Which of these is a good way to conserve water at home?", options: ["Leaving taps running while brushing teeth", "Fixing leaking taps promptly", "Washing a single item under a full running tap", "Watering plants at noon in full sun"], answer: 1, difficulty: "medium", explain: "Fixing leaks prevents wasted water, which can add up to a huge amount over time.", explainSteps: ["Compare the choices: running taps waste litres of water every minute.","A dripping tap left unfixed can waste hundreds of litres over weeks without anyone noticing.","Fixing that leak immediately stops the ongoing waste — the smart, simple choice."], explainDiagram: null },
          { q: "What is the process called when we make unsafe water fit for drinking?", options: ["Evaporation", "Purification", "Condensation", "Filtration of air"], answer: 1, difficulty: "medium", explain: "Purification methods like boiling, filtering, and chlorination make water safe to drink.", explainSteps: ["Not all water is safe to drink straight away — it may carry dirt or germs.","Boiling, filtering, and adding safe chemicals like chlorine kill germs and remove dirt.","This whole safety process, making water fit to drink, is called purification."], explainDiagram: null },
          { q: "Why is groundwater level dropping in many areas today?", options: ["Too much rain", "Over-extraction of water faster than it's replenished", "The moon's gravity", "Because of clouds"], answer: 1, difficulty: "hard", explain: "When people pump out groundwater faster than rain can refill (recharge) it, water tables drop over time.", explainSteps: ["Groundwater is like a savings account, filled slowly by rain soaking into the ground.","If people pump water out faster than rain can refill it, the underground level drops.","That's exactly why over-extraction causes groundwater levels to fall over time."], explainDiagram: null },
          { q: "Which action best helps recharge groundwater in a neighborhood?", options: ["Concreting over all open ground", "Building rooftop rainwater harvesting systems", "Diverting rain directly into drains only", "Digging bore wells only, no recharge structures"], answer: 1, difficulty: "hard", explain: "Rainwater harvesting captures rain and channels it back into the ground, helping recharge groundwater instead of letting it run off.", explainSteps: ["Normally, rain either soaks into soil or runs off into drains and is lost.","Rooftop rainwater harvesting captures that rain and guides it straight back underground.","By refilling the ground with water on purpose, this action directly recharges groundwater."], explainDiagram: null }
        ],
        terms: [
          { term: "State of matter", def: "The physical form of a substance - solid, liquid or gas" },
          { term: "Purification", def: "The process of making water safe and clean to use" },
          { term: "Groundwater", def: "Water stored underground in soil and rock layers" },
          { term: "Rainwater harvesting", def: "Collecting and storing rainwater for later use or to recharge groundwater" },
          { term: "Conservation", def: "Using a resource carefully to avoid wasting it" },
          { term: "Water table", def: "The underground level below which the ground is saturated with water" }
        ]
      },
      {
        id: "simple-electric-circuits",
        name: "Simple Electric Circuits",
        blurb: "Cells, bulbs, switches and how current flows",
        questions: [
          { q: "What is needed to make a bulb light up in a simple circuit?", options: ["Just a bulb", "A complete closed loop of wire, cell and bulb", "A switch alone with no wires", "Sunlight"], answer: 1, difficulty: "easy", explain: "Electricity flows only when there is a complete closed circuit connecting the cell, wires and bulb.", explainSteps: ["Electric current needs an unbroken path to travel all the way around.","If the loop of wire, cell and bulb has any gap, current simply can't flow.","Only when the circuit forms a complete closed loop does the bulb light up."], explainDiagram: "circuit" },
          { q: "What is the source of electric current in a simple torch circuit?", options: ["The switch", "The wire", "The cell (battery)", "The bulb"], answer: 2, difficulty: "easy", explain: "The cell (battery) provides the electrical energy that drives current through the circuit.", explainSteps: ["Something has to push the electric current around the circuit — energy has to come from somewhere.","The cell (battery) stores chemical energy and converts it into electrical energy.","That's why the cell is the source of current in a simple torch circuit."], explainDiagram: "circuit" },
          { q: "What does a switch do in a circuit?", options: ["Stores electricity", "Opens or closes the circuit to stop or allow current flow", "Creates light directly", "Increases voltage"], answer: 1, difficulty: "medium", explain: "A switch completes or breaks the circuit path, turning the current on or off.", explainSteps: ["A switch is basically a tiny gap you can control with your finger.","Flip it closed, and the gap disappears, letting current flow — the bulb lights up.","Flip it open, and the gap reappears, stopping current — the bulb turns off."], explainDiagram: "circuit" },
          { q: "Which materials are good conductors of electricity?", options: ["Wood and rubber", "Metals like copper", "Plastic and cloth", "Dry paper"], answer: 1, difficulty: "medium", explain: "Metals such as copper allow electricity to pass through them easily, making them good conductors.", explainSteps: ["Ask: does electric current move through this material easily or not at all?","Wood, rubber, plastic and dry paper all block current — they're insulators.","Metals like copper let current flow through with almost no resistance — that makes them good conductors."], explainDiagram: null },
          { q: "In a circuit with a broken wire, what happens to the bulb?", options: ["It glows brighter", "It does not light up since the circuit is open", "It glows the same as before", "It explodes"], answer: 1, difficulty: "hard", explain: "A broken wire creates an open circuit, so current cannot flow and the bulb won't light.", explainSteps: ["A broken wire creates a gap in the circuit's loop, just like an open switch.","With a gap, current has nowhere to flow — the path is no longer complete.","No current reaching the bulb means it simply won't light up — that's an open circuit."], explainDiagram: "circuit" },
          { q: "Why do electricians use rubber gloves while working with wires?", options: ["Rubber is a good conductor and helps the work", "Rubber is an insulator and protects them from electric shock", "It has no real safety purpose", "To keep hands warm only"], answer: 1, difficulty: "hard", explain: "Rubber is an insulator, meaning it does not conduct electricity, protecting the person from electric shocks.", explainSteps: ["Electricians handle live wires that could carry dangerous current.","Rubber is an excellent insulator — it blocks electric current from passing through.","Wearing rubber gloves stops current from reaching the electrician's body, keeping them safe from shock."], explainDiagram: null }
        ],
        terms: [
          { term: "Electric circuit", def: "A complete path through which electric current can flow" },
          { term: "Cell (battery)", def: "A source of electrical energy in a circuit" },
          { term: "Switch", def: "A device that opens or closes a circuit" },
          { term: "Conductor", def: "A material that allows electric current to pass through easily" },
          { term: "Insulator", def: "A material that does not allow electric current to pass through" },
          { term: "Open circuit", def: "A broken circuit through which current cannot flow" }
        ]
      },
      {
        id: "learning-how-to-measure",
        name: "Learning How to Measure",
        blurb: "Standard units, measuring length, mass and time accurately",
        questions: [
          { q: "What is the standard unit used to measure length?", options: ["Kilogram", "Metre", "Litre", "Second"], answer: 1, difficulty: "easy", explain: "The metre (m) is the standard (SI) unit for measuring length.", explainSteps: ["Length answers the question 'how long or how far?'","Scientists worldwide agreed on one universal unit for this: the metre.","So whenever you measure length, the metre (m) is the standard unit."], explainDiagram: null },
          { q: "What is the standard unit used to measure mass?", options: ["Metre", "Kilogram", "Second", "Litre"], answer: 1, difficulty: "easy", explain: "The kilogram (kg) is the standard unit for measuring mass.", explainSteps: ["Mass answers 'how much matter (stuff) is in this object?'","The globally agreed standard unit for that is the kilogram.","So mass is always measured in kilograms (kg) as the standard unit."], explainDiagram: null },
          { q: "Why do we need standard units of measurement?", options: ["So everyone gets the same result no matter who measures", "To make measuring harder", "They aren't really needed", "Only scientists need them"], answer: 0, difficulty: "medium", explain: "Standard units ensure everyone measuring the same thing gets a consistent, comparable result.", explainSteps: ["Imagine two people measuring the same table using their own footsteps — they'd get different numbers because feet aren't all the same size!","A standard unit like the metre is exactly the same length everywhere in the world, for everyone.","That's why we use standard units — so any two people measuring the same thing always agree."], explainDiagram: null },
          { q: "Which of these is an example of a non-standard unit historically used for length?", options: ["Metre", "Handspan", "Kilogram", "Litre"], answer: 1, difficulty: "medium", explain: "A handspan (the distance across a spread hand) was a non-standard unit people used before standard units like the metre were adopted.", explainSteps: ["Before standard units existed, people used body parts to measure things.","A handspan (the width of a spread-out hand) is a classic example — but every person's hand is a different size!","Because it changes from person to person, a handspan is a non-standard unit."], explainDiagram: null },
          { q: "Why is measuring the length of a curved line different from measuring a straight one?", options: ["A ruler alone can't measure a curve accurately; a thread laid along the curve then measured with a ruler works better", "Curved lines have no length", "Curves can only be measured by eye", "It is exactly the same as measuring straight lines"], answer: 0, difficulty: "hard", explain: "A rigid ruler can't follow a curve, so a flexible thread is laid along the curved path first, then straightened and measured with a ruler.", explainSteps: ["A rigid, straight ruler can't bend to follow a curved path — it'll only measure the straight-line shortcut.","Instead, lay a flexible thread carefully along the entire curve, matching its shape exactly.","Then straighten that thread out and measure ITS length with a ruler — now you have the curve's true length."], explainDiagram: "rulerCurve" },
          { q: "If you measure the same object's length using inches and using centimetres, why do you get different numbers for the 'same' length?", options: ["The object physically changes size", "Inches and centimetres are different-sized units, so the count of units differs even though the length is the same", "One of the measurements must be wrong", "Length cannot be measured in more than one way"], answer: 1, difficulty: "hard", explain: "The actual length doesn't change - different units are simply different-sized 'steps', so the same length needs a different number of each unit.", explainSteps: ["The physical length of the object hasn't changed one bit between the two measurements.","Inches and centimetres are simply different-sized 'measuring steps' — a centimetre is much smaller than an inch.","Since the units are different sizes, you naturally need a different NUMBER of each to describe the exact same length."], explainDiagram: null }
        ],
        terms: [
          { term: "Standard unit", def: "A fixed, universally agreed unit of measurement, like the metre" },
          { term: "Metre", def: "The standard unit for measuring length" },
          { term: "Kilogram", def: "The standard unit for measuring mass" },
          { term: "Non-standard unit", def: "An informal measuring unit like a handspan or footstep, which varies person to person" },
          { term: "Measuring tape", def: "A flexible tool used to measure length, including curves" },
          { term: "Length", def: "The measurement of how long something is" }
        ]
      },
      {
        id: "movements-in-animals",
        name: "Movements in Animals",
        blurb: "Joints, bones & how different animals move",
        questions: [
          { q: "What do we call the point where two bones meet and allow movement?", options: ["Muscle", "Joint", "Skeleton", "Tissue"], answer: 1, difficulty: "easy", explain: "A joint is where two bones meet, and it's what allows the body to bend and move.", explainSteps: ["Bend your elbow or knee — feel that bending point?","That's exactly where two bones meet and are able to move against each other.","This meeting-and-moving point between bones is called a joint."], explainDiagram: "jointTypes" },
          { q: "Which joint allows movement in almost every direction?", options: ["Hinge joint (like the elbow)", "Ball and socket joint (like the shoulder)", "Fixed joint (like the skull)", "Pivot joint"], answer: 1, difficulty: "easy", explain: "A ball and socket joint, found in the shoulder and hip, allows movement in many directions.", explainSteps: ["Try moving your arm at the shoulder — forward, backward, in circles, almost anywhere!","That huge range of motion comes from a rounded bone end fitting into a cup-shaped socket.","This design, found in the shoulder and hip, is called a ball and socket joint."], explainDiagram: "jointTypes" },
          { q: "Which of these joints does NOT allow movement?", options: ["Elbow", "Knee", "Skull joints", "Shoulder"], answer: 2, difficulty: "medium", explain: "The joints in the skull are fixed joints - they hold bones firmly together without allowing movement.", explainSteps: ["Try to 'move' the bones of your skull — you can't, and that's on purpose!","The skull needs to stay rigid to protect your brain, so its joints are locked tightly together.","Joints that don't allow any movement, like in the skull, are called fixed joints."], explainDiagram: null },
          { q: "How do earthworms move?", options: ["By flying", "By contracting and expanding their body using muscles", "By using legs", "By rolling"], answer: 1, difficulty: "medium", explain: "Earthworms have muscles that contract and relax in a wave, pushing the body forward.", explainSteps: ["An earthworm has no legs, no bones, and no joints at all.","Instead, muscles along its body squeeze and stretch in a wave-like pattern.","This contract-and-expand muscle motion is exactly how an earthworm pushes itself forward."], explainDiagram: null },
          { q: "Which of these animals has bones on the outside of its body (an exoskeleton)?", options: ["Human", "Snake", "Cockroach", "Fish"], answer: 2, difficulty: "hard", explain: "Cockroaches and other insects have a hard outer covering called an exoskeleton instead of internal bones.", explainSteps: ["Look for an animal with a hard covering on the OUTSIDE of its body, not bones inside.","Humans, snakes and fish all have internal skeletons (bones inside).","Cockroaches (and other insects) instead have a tough outer shell called an exoskeleton."], explainDiagram: null },
          { q: "Birds are able to fly mainly because of their...", options: ["Heavy bones and wings", "Light hollow bones and strong wing muscles", "Long legs", "Feathers alone with no muscles"], answer: 1, difficulty: "hard", explain: "Birds have light, hollow bones and strong chest muscles that power their wings for flight.", explainSteps: ["Flying takes huge amounts of energy — every bit of extra weight makes it harder.","Birds evolved light, hollow bones, which cuts down body weight significantly.","Combine that lightness with powerful chest muscles pulling the wings, and you get true flight."], explainDiagram: null }
        ],
        terms: [
          { term: "Joint", def: "A point where two bones meet and movement can happen" },
          { term: "Skeleton", def: "The internal framework of bones supporting the body" },
          { term: "Ball and socket joint", def: "A joint allowing movement in many directions, e.g. the shoulder" },
          { term: "Hinge joint", def: "A joint that allows movement in one direction only, e.g. the knee" },
          { term: "Exoskeleton", def: "A hard outer body covering found in insects, instead of internal bones" },
          { term: "Streamlined body", def: "A tapering body shape that moves easily through water or air" }
        ]
      },
      {
        id: "light-shadows-images",
        name: "Light, Shadows and Images",
        blurb: "How light travels, shadows form & mirrors reflect",
        questions: [
          { q: "What is needed for a shadow to form?", options: ["An opaque object blocking light", "Only darkness", "A mirror", "Sound"], answer: 0, difficulty: "easy", explain: "A shadow forms when an opaque object blocks light from reaching a surface behind it.", explainSteps: ["A shadow needs something to physically block the path of light.","That blocking object must be opaque — letting zero light pass through it.","Where light can't reach behind the object, a dark patch (shadow) appears."], explainDiagram: "shadowFormation" },
          { q: "Which surface can you see a clear reflection of yourself in?", options: ["A mirror", "A wooden table", "A cardboard sheet", "A wall"], answer: 0, difficulty: "easy", explain: "A mirror has a smooth, shiny surface that reflects light in an organised way, forming a clear image.", explainSteps: ["Reflection needs a smooth, shiny surface to bounce light back in an organised way.","A mirror's surface is polished perfectly smooth for exactly this job.","That organised bounce-back of light creates the clear image you see of yourself."], explainDiagram: "mirrorInversion" },
          { q: "Why can't you form a shadow using a transparent object like clear glass?", options: ["Light passes through it instead of being blocked", "Glass is always too small", "Glass reflects all light", "Glass absorbs all light"], answer: 0, difficulty: "medium", explain: "Since light passes through transparent objects, they don't block light enough to cast a dark shadow.", explainSteps: ["Remember: shadows form only when light is BLOCKED.","Transparent objects like clear glass let light travel straight through instead of stopping it.","Since the light isn't blocked, no proper dark shadow can form behind it."], explainDiagram: "shadowFormation" },
          { q: "What happens to the size of a shadow when the object is moved closer to the light source?", options: ["It disappears", "It becomes larger", "It becomes smaller", "It stays exactly the same"], answer: 1, difficulty: "medium", explain: "Moving an object closer to a light source generally makes its shadow larger, since it blocks a wider spread of light rays.", explainSteps: ["Picture a lamp and an object close to it versus far away.","The closer the object is to the light source, the wider the spread of light rays it blocks.","That wider blocked area means the shadow cast becomes larger."], explainDiagram: "shadowFormation" },
          { q: "What is the image formed in a plane (flat) mirror called, in terms of left-right orientation?", options: ["Exactly the same as the object", "Laterally inverted (left-right reversed)", "Upside down", "Always blurry"], answer: 1, difficulty: "hard", explain: "A plane mirror produces a laterally inverted image - your right hand appears as the left hand in the reflection.", explainSteps: ["Raise your right hand in front of a mirror and look closely.","The reflection appears to raise its LEFT hand instead — left and right are swapped.","This left-right swap in a flat mirror's reflection is called lateral inversion."], explainDiagram: "mirrorInversion" },
          { q: "Why do we see multiple, fainter shadows under multiple light sources (like several lamps)?", options: ["Each light source blocked by the object casts its own shadow in a slightly different direction", "Shadows always multiply randomly", "It's an illusion with no real cause", "Only one shadow can ever form regardless of light sources"], answer: 0, difficulty: "hard", explain: "Each separate light source casts its own shadow of the object in the direction opposite to that light, resulting in multiple shadows.", explainSteps: ["Each separate lamp sends out light from its own different position.","An object blocks each lamp's light individually, in a slightly different direction each time.","That's why several separate lamps create several separate (and fainter) shadows around the object."], explainDiagram: null }
        ],
        terms: [
          { term: "Shadow", def: "A dark area formed when an opaque object blocks light" },
          { term: "Opaque object", def: "An object that does not let light pass through, so it can cast a shadow" },
          { term: "Reflection", def: "Light bouncing off a surface, especially a mirror" },
          { term: "Plane mirror", def: "A flat mirror that forms a laterally inverted image" },
          { term: "Image", def: "The picture formed by light reflecting off a mirror or passing through a lens" },
          { term: "Lateral inversion", def: "The left-right reversal seen in a mirror's reflection" }
        ]
      },
      {
        id: "living-non-living",
        name: "Living and Non-Living",
        blurb: "What makes something alive, and characteristics of living things",
        questions: [
          { q: "Which of these is a characteristic of all living things?", options: ["They can grow", "They are always green", "They never move", "They are always big"], answer: 0, difficulty: "easy", explain: "Growth is a universal characteristic of living things, whether plants, animals or microorganisms.", explainSteps: ["Think of every living thing you know — plants, animals, even tiny microbes.","Every single one of them gets bigger and develops over time.","Growth is one trait shared by ALL living things, no exceptions."], explainDiagram: "livingNonliving" },
          { q: "Which of these is a non-living thing?", options: ["A tree", "A butterfly", "A stone", "A fish"], answer: 2, difficulty: "easy", explain: "A stone does not grow, breathe, or reproduce, making it non-living.", explainSteps: ["Ask: can it grow, breathe, reproduce, or respond on its own? A stone can do none of these.","It just sits there unchanged, with no biological processes happening inside it.","Since it lacks every living characteristic, a stone is non-living."], explainDiagram: "livingNonliving" },
          { q: "Which of these is NOT a characteristic of living things?", options: ["Respiration", "Reproduction", "Never needing food", "Response to stimuli"], answer: 2, difficulty: "medium", explain: "All living things need food/nutrients for energy - 'never needing food' is not a trait of anything alive.", explainSteps: ["Go through the choices: respiration ✓ living things do it, reproduction ✓ living things do it, responding to stimuli ✓ living things do it.","But 'never needing food' — every living thing needs energy from food to survive, without exception.","So 'never needing food' is the ODD one out — it's NOT a characteristic of anything alive."], explainDiagram: null },
          { q: "What does 'response to stimuli' mean for a living thing?", options: ["Reacting to changes like light, touch or sound", "Staying perfectly still always", "Only responding to food", "Growing bigger only"], answer: 0, difficulty: "medium", explain: "Living things react to changes in their surroundings, such as a plant bending toward light or an animal flinching from touch.", explainSteps: ["Living things aren't just still statues — they react to their surroundings.","A plant slowly bends toward a sunny window; an animal jumps back if you touch it suddenly.","Reacting to changes like light, touch or sound is exactly what 'response to stimuli' means."], explainDiagram: null },
          { q: "A car can move and needs fuel like petrol. Why is it still considered non-living?", options: ["It cannot grow, reproduce, or respond biologically on its own", "Cars never move", "Cars are too big to be alive", "There's no real reason"], answer: 0, difficulty: "hard", explain: "Even though a car uses fuel and moves, it can't grow, reproduce, or biologically respond to stimuli - key traits that define living things.", explainSteps: ["A car does move and does 'consume' fuel — sounds a bit alive, right?","But check the key traits: can a car grow bigger on its own? Can it make baby cars? Can it heal if damaged? No to all three.","Since it can't grow, reproduce, or biologically respond, a car stays firmly non-living."], explainDiagram: "livingNonliving" },
          { q: "Why are seeds considered to be alive even though they may look dry and still for a long time?", options: ["They are not actually alive until watered", "They contain a living embryo that can grow when conditions are right", "Seeds are just non-living shells", "Seeds only appear alive due to their color"], answer: 1, difficulty: "hard", explain: "A dormant seed contains a living embryo capable of growth once it gets the right water, warmth and air - it's alive, just inactive.", explainSteps: ["A dry seed looks completely still, almost lifeless from the outside.","But hidden inside is a tiny living embryo, just waiting for the right conditions.","Give it water, warmth and air, and that embryo springs into growth — proof the seed was alive all along, just resting (dormant)."], explainDiagram: null }
        ],
        terms: [
          { term: "Living thing", def: "Something that can grow, reproduce, respire and respond to its surroundings" },
          { term: "Non-living thing", def: "Something that does not grow, reproduce or respire on its own" },
          { term: "Growth", def: "An increase in size or development over time" },
          { term: "Reproduction", def: "The process by which living things produce offspring" },
          { term: "Respiration", def: "The process by which living things release energy from food" },
          { term: "Stimulus", def: "A change in the surroundings that a living thing can respond to" }
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
        id: "reading-making-maps",
        name: "Reading and Making Maps",
        blurb: "Theme I: Diversity on the Earth — symbols, directions & scale on maps",
        questions: [
          { q: "What is a map?", options: ["A photograph of a place", "A visual representation of an area, usually on a flat surface", "A written story about a place", "A list of place names"], answer: 1, difficulty: "easy", explain: "A map represents all or part of an area, usually drawn to scale on a flat surface.", explainSteps: ["Think about what a map actually shows: the shape of an area, drawn small enough to hold in your hands.","It's usually flat, like a page, representing real land.","So a map is a visual representation of an area on a flat surface."], explainDiagram: "mapCompass" },
          { q: "Which direction is at the top of most maps?", options: ["South", "East", "North", "West"], answer: 2, difficulty: "easy", explain: "By convention, most maps are drawn with North at the top.", explainSteps: ["Mapmakers agreed on one standard direction to always place at the top.","That agreed direction is North.","So on almost every map, North points to the top."], explainDiagram: "mapCompass" },
          { q: "What do map symbols (legend/key) help us do?", options: ["Make the map colorful only", "Understand what different marks on the map represent", "Measure the weather", "Count the population"], answer: 1, difficulty: "medium", explain: "A legend/key explains what each symbol on the map stands for, like a river, road, or forest.", explainSteps: ["A map is covered in little symbols — dots, lines, colours.","Without an explanation, you couldn't tell what each symbol meant.","The legend/key unlocks their meaning, telling you what each symbol represents."], explainDiagram: "mapCompass" },
          { q: "What does the scale of a map tell us?", options: ["The map's color scheme", "The relationship between distance on the map and actual distance on ground", "The age of the map", "The mapmaker's name"], answer: 1, difficulty: "medium", explain: "Scale tells us how a distance on the map corresponds to real distance in the world, like 1 cm = 1 km.", explainSteps: ["Imagine 1 cm on a map standing for 1 real kilometre on the ground.","That relationship between map distance and real distance is exactly what scale shows.","So scale tells us how map distance relates to actual ground distance."], explainDiagram: null },
          { q: "Why are maps often more useful than photographs for showing a large area?", options: ["Maps can show large areas at a reduced, readable scale with useful symbols", "Photographs are always more accurate", "Maps have no real advantage", "Photographs show larger areas better"], answer: 0, difficulty: "hard", explain: "Maps let us represent very large areas in a compact, readable form using scale and symbols, which a single photograph often can't capture.", explainSteps: ["A single photograph can only capture a small area in full detail.","A map can shrink an ENTIRE large area down to fit on one page, using scale.","Adding clear symbols too, maps often show large areas better than any single photo could."], explainDiagram: null },
          { q: "A large-scale map (like of a single village) compared to a small-scale map (like of a whole country) usually shows...", options: ["Less detail over a bigger area", "More detail over a smaller area", "Exactly the same detail", "No difference at all"], answer: 1, difficulty: "hard", explain: "Large-scale maps zoom into small areas with lots of detail, while small-scale maps cover large areas with less detail.", explainSteps: ["A village map has to fit a small area, so it can afford to zoom in with LOTS of detail.","A country map has to fit a huge area, so it must zoom out, showing LESS detail per spot.","So large-scale (village) = more detail on less area; small-scale (country) = less detail over more area."], explainDiagram: null }
        ],
        terms: [
          { term: "Map", def: "A visual representation of an area, usually drawn to scale" },
          { term: "Legend/Key", def: "A guide explaining what symbols on a map represent" },
          { term: "Scale", def: "The relationship between map distance and real ground distance" },
          { term: "Cardinal directions", def: "The four main directions: North, South, East, West" },
          { term: "Symbol", def: "A simple mark on a map standing for a real feature like a river or road" },
          { term: "Physical map", def: "A map showing natural features like mountains, rivers and plains" }
        ]
      },
      {
        id: "globe-model-earth",
        name: "Globe – A Model of the Earth",
        blurb: "Theme I: Diversity on the Earth — the globe, latitudes & longitudes",
        questions: [
          { q: "A globe is a model of the...", options: ["Moon", "Sun", "Earth", "Sky"], answer: 2, difficulty: "easy", explain: "A globe is a true-to-scale spherical model representing our Earth.", explainSteps: ["A globe is shaped like a sphere, just like our planet.","It's built to accurately represent every continent and ocean at a small scale.","So a globe is a model of the Earth."], explainDiagram: "globeLatLong" },
          { q: "Which imaginary line on the globe divides the Earth into Northern and Southern hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], answer: 1, difficulty: "easy", explain: "The Equator is the imaginary line at 0° latitude that splits the Earth into two equal halves.", explainSteps: ["Picture the globe cut exactly in half around its middle, like slicing an orange.","That middle line is called the Equator.","It divides Earth into the Northern half and the Southern half (hemispheres)."], explainDiagram: "globeLatLong" },
          { q: "Lines running east-west on a globe, parallel to the Equator, are called...", options: ["Longitudes", "Latitudes", "Meridians", "Axis lines"], answer: 1, difficulty: "medium", explain: "Latitudes are horizontal lines used to measure distance north or south of the Equator.", explainSteps: ["Lines running side to side (east-west), parallel to the Equator, measure how far north or south you are.","These horizontal measuring lines are called latitudes.","So latitudes run parallel to the Equator."], explainDiagram: "globeLatLong" },
          { q: "The imaginary line joining the North and South Poles, around which Earth spins, is its...", options: ["Equator", "Axis", "Orbit", "Meridian"], answer: 1, difficulty: "medium", explain: "The Earth's axis is a tilted imaginary line through the poles, and the Earth rotates around it.", explainSteps: ["Picture a skewer poked straight through the globe from the North Pole to the South Pole.","The Earth spins around that imaginary skewer.","That imaginary spinning line is called the axis."], explainDiagram: null },
          { q: "What causes day and night on Earth?", options: ["Earth's revolution around the Sun", "Earth's rotation on its axis", "The Moon blocking sunlight", "Clouds covering the Sun"], answer: 1, difficulty: "hard", explain: "As Earth spins on its axis, the side facing the Sun has day while the other side has night.", explainSteps: ["As Earth spins on its axis, only one side faces the Sun at any moment.","The side facing the Sun gets daylight; the side facing away gets darkness.","This spinning (rotation) is exactly what causes day and night."], explainDiagram: null },
          { q: "Which line of longitude is taken as 0° and used to set world time zones?", options: ["Equator", "Tropic of Capricorn", "Prime Meridian", "Arctic Circle"], answer: 2, difficulty: "hard", explain: "The Prime Meridian, passing through Greenwich in London, is the reference line (0°) for measuring longitude and time zones.", explainSteps: ["To measure position east-west, the world needed one agreed starting line, just like the Equator does for north-south.","That agreed line passes through Greenwich, London, and is called the Prime Meridian.","It's set at 0° and used to define time zones around the world."], explainDiagram: "globeLatLong" }
        ],
        terms: [
          { term: "Globe", def: "A spherical scale-model of the Earth" },
          { term: "Equator", def: "The imaginary line dividing Earth into Northern and Southern halves" },
          { term: "Latitude", def: "Imaginary horizontal lines measuring distance north/south of the Equator" },
          { term: "Longitude", def: "Imaginary vertical lines measuring distance east/west of the Prime Meridian" },
          { term: "Axis", def: "The imaginary tilted line through the poles that Earth spins around" },
          { term: "Rotation", def: "Earth spinning on its own axis, causing day and night" }
        ]
      },
      {
        id: "landforms-delta-village",
        name: "Land Forms & a Village in the Krishna Delta",
        blurb: "Theme I: Diversity on the Earth — plains, plateaus, hills & life in a delta village",
        questions: [
          { q: "Which of these is a major landform?", options: ["Mountain", "Ocean current", "Rainfall", "Wind"], answer: 0, difficulty: "easy", explain: "Mountains, plains, plateaus and hills are all major landforms shaped by natural processes.", explainSteps: ["Landforms are natural shapes of the Earth's surface — not things like rain or wind.","A mountain is a tall, solid feature of land.","So a mountain is a major landform."], explainDiagram: "landformTypes" },
          { q: "A large, flat stretch of land, often very fertile, is called a...", options: ["Plateau", "Plain", "Mountain", "Valley"], answer: 1, difficulty: "easy", explain: "Plains are flat, low-lying land, often formed by rivers depositing fertile soil - ideal for farming.", explainSteps: ["Picture wide, flat land stretching far in every direction.","Rivers often deposit rich soil there over centuries, making it great for farming.","That flat, often fertile stretch of land is called a plain."], explainDiagram: "landformTypes" },
          { q: "What is a delta?", options: ["A tall mountain range", "Fertile land formed where a river deposits silt near the sea", "A deep ocean trench", "A type of desert"], answer: 1, difficulty: "medium", explain: "A delta forms where a river slows down near the sea and deposits fertile silt, creating rich farmland.", explainSteps: ["Picture a river slowing down right before it meets the sea.","As it slows, it drops (deposits) the silt it was carrying.","That silt builds up into fertile land near the coast — that's a delta."], explainDiagram: "landformTypes" },
          { q: "Why is farming often very productive in river delta villages?", options: ["Deltas have poor, rocky soil", "Deltas have fertile, silt-rich soil and easy water access", "Deltas never get rain", "Deltas are always frozen"], answer: 1, difficulty: "medium", explain: "Rivers deposit nutrient-rich silt in deltas, and water is easily available, making the land very fertile for crops like rice.", explainSteps: ["A delta's soil is packed with silt — nutrient-rich material the river carried and dropped.","Water is also close at hand for irrigation.","Fertile soil + easy water access is exactly why delta farming thrives."], explainDiagram: null },
          { q: "A raised, flat-topped landform standing above the surrounding land is called a...", options: ["Plateau", "Plain", "Delta", "Valley"], answer: 0, difficulty: "hard", explain: "A plateau is an elevated area with a relatively flat top, distinguishing it from plains (low, flat) and mountains (high, peaked).", explainSteps: ["Picture land that's raised UP like a table, with a flat top instead of a pointed peak.","It stands higher than the land around it but isn't jagged like a mountain.","That raised, flat-topped landform is called a plateau."], explainDiagram: "landformTypes" },
          { q: "How does life in a delta village typically differ from life in a hill village?", options: ["Delta villages usually farm water-intensive crops like rice; hill villages often rely more on terrace farming or forest produce", "There is no real difference at all", "Hill villages always have better roads", "Delta villages never face floods"], answer: 0, difficulty: "hard", explain: "The fertile, water-rich delta supports crops like rice, while hilly terrain often requires terraced fields or depends more on forest resources.", explainSteps: ["Delta villages sit on fertile, watery land — perfect for thirsty crops like rice.","Hill villages sit on slopes with less flat farmland, so people often terrace the land or gather forest produce instead.","So the landform directly shapes what kind of life and farming each village has."], explainDiagram: null }
        ],
        terms: [
          { term: "Landform", def: "A natural feature of Earth's surface, like a mountain, plain or plateau" },
          { term: "Plain", def: "A large area of flat, low-lying, often fertile land" },
          { term: "Plateau", def: "A raised area of land with a relatively flat top" },
          { term: "Delta", def: "Fertile land formed where a river deposits silt before meeting the sea" },
          { term: "Silt", def: "Fine, fertile soil particles carried and deposited by rivers" },
          { term: "Fertile soil", def: "Soil rich in nutrients, good for growing crops" }
        ]
      },
      {
        id: "dokur-plateau-village",
        name: "Dokur – A Village on the Plateau",
        blurb: "Theme I: Diversity on the Earth — farming life on a plateau",
        questions: [
          { q: "What kind of landform is a village like Dokur typically located on?", options: ["A plateau", "A river delta", "A coastal beach", "A glacier"], answer: 0, difficulty: "easy", explain: "Dokur is described as a village situated on a plateau, a raised and relatively flat landform.", explainSteps: ["Dokur sits on raised, relatively flat land, not a river delta or coastline.","That raised, flat-topped land is called a plateau."], explainDiagram: "landformTypes" },
          { q: "Why is water availability often a bigger challenge for plateau villages than delta villages?", options: ["Plateaus usually have less easy access to large rivers and rely more on tanks/wells", "Plateaus always get more rainfall than deltas", "Water is never a concern on plateaus", "Plateaus are always next to the sea"], answer: 0, difficulty: "medium", explain: "Being elevated and often far from major rivers, plateau villages often depend on tanks, wells, or borewells for water rather than easy river access.", explainSteps: ["Plateaus are often elevated and further from big rivers than deltas are.","Without an easy river nearby, plateau villages must rely more on stored rainwater — tanks and wells.","That's why water is often more of a challenge on a plateau than in a delta."], explainDiagram: null },
          { q: "What is a common way plateau villages like Dokur store rainwater for farming?", options: ["Tanks (small reservoirs)", "Deep sea harbors", "Glaciers", "Ocean pipelines"], answer: 0, difficulty: "medium", explain: "Villages on plateaus often build tanks to collect and store rainwater for irrigation during drier periods.", explainSteps: ["Since rivers aren't always close by, plateau villages need another way to save rainwater for dry periods.","They build small reservoirs to catch and hold rain when it falls.","These reservoirs are called tanks."], explainDiagram: null },
          { q: "Which crop is commonly associated with drier plateau regions needing less water than rice?", options: ["Millets/groundnut", "Only rice", "Only sugarcane", "Only jute"], answer: 0, difficulty: "hard", explain: "Drought-resistant crops like millets and groundnut are often grown in drier plateau regions where water is scarcer.", explainSteps: ["Rice needs a LOT of standing water to grow — hard to manage on a dry plateau.","Millets and groundnut need much less water and tolerate drier soil.","That's why these hardier crops suit plateau regions better."], explainDiagram: null },
          { q: "How does farming life on a plateau typically compare with farming life in a fertile river delta?", options: ["Plateau farming often depends more on rainfall and irrigation tanks; delta farming benefits from easy river water and silt", "They are always identical", "Plateaus always have more water than deltas", "Deltas never grow crops"], answer: 0, difficulty: "hard", explain: "Delta villages benefit from river water and fertile silt, while plateau villages usually depend more on rainfall, tanks, and drought-resistant crops.", explainSteps: ["On a plateau, farmers mostly depend on rainfall and the tanks that store it.","In a delta, farmers get an easier, steadier supply straight from the river, plus fertile silt for free.","So plateau farming leans on rain + tanks, while delta farming leans on rivers + silt."], explainDiagram: null }
        ],
        terms: [
          { term: "Plateau", def: "A raised, relatively flat landform" },
          { term: "Tank", def: "A small reservoir built to store rainwater for irrigation" },
          { term: "Irrigation", def: "Supplying water to crops through channels, tanks or wells" },
          { term: "Millets", def: "Hardy, drought-resistant grain crops often grown in drier regions" },
          { term: "Borewell", def: "A deep well drilled to access groundwater" },
          { term: "Rainfed farming", def: "Farming that depends mainly on rainfall rather than irrigation" }
        ]
      },
      {
        id: "penugolu-hills-village",
        name: "Penugolu – A Village on the Hills",
        blurb: "Theme I: Diversity on the Earth — farming and life in a hilly region",
        questions: [
          { q: "What kind of landform surrounds a village like Penugolu?", options: ["Flat coastal plains", "Hills", "A desert", "A large delta"], answer: 1, difficulty: "easy", explain: "Penugolu is described as a village situated in a hilly landscape.", explainSteps: ["Penugolu is surrounded by raised, sloped land rather than flat plains or plateaus.","That kind of landscape is called hills."], explainDiagram: "landformTypes" },
          { q: "Why is farming on hill slopes often done using terraces (steps)?", options: ["To make farming harder on purpose", "To prevent soil erosion and hold water/soil on sloped land", "Terraces have no real function", "Only for decoration"], answer: 1, difficulty: "medium", explain: "Terrace farming creates level steps on a slope, helping to hold soil and water in place and prevent erosion.", explainSteps: ["On a slope, plain flat fields would let rainwater and soil simply wash straight downhill.","Cutting step-like flat platforms (terraces) into the slope holds both water and soil in place.","That's exactly why hill farmers build terraces."], explainDiagram: null },
          { q: "What natural resource do hill villages often rely on, in addition to farming?", options: ["Forest produce", "Deep sea fishing only", "Desert minerals only", "Glacier meltwater only"], answer: 0, difficulty: "medium", explain: "Hill villages are often close to forests and rely on forest produce like fruits, wood and herbs alongside farming.", explainSteps: ["Hilly regions are often close to forests, which are full of useful resources.","Fruits, wood, herbs and other forest produce supplement what farming alone can provide.","So hill villages often rely on forest produce alongside farming."], explainDiagram: null },
          { q: "Why might transportation and roads be more difficult to build in hilly villages like Penugolu?", options: ["The uneven, steep terrain makes construction harder", "Hills have no soil at all", "There's no reason, it's equally easy everywhere", "Hilly areas are always flat"], answer: 0, difficulty: "hard", explain: "Steep slopes and uneven terrain make road and infrastructure building more challenging and costly in hilly regions.", explainSteps: ["Building a flat, straight road is easy on flat land but tricky on a steep slope.","Uneven, hilly terrain means more digging, curving, and careful engineering.","That's why roads are harder (and more expensive) to build in hilly regions."], explainDiagram: null },
          { q: "How does life in a hill village like Penugolu typically differ from life in a plateau village like Dokur?", options: ["Hill villages often use terrace farming and forest resources, while plateau villages rely more on tanks and drought-resistant crops", "They are always exactly the same", "Hill villages never farm at all", "Plateau villages are always by the sea"], answer: 0, difficulty: "hard", explain: "Each landform shapes local life differently - hill villages adapt with terracing and forest resources, plateau villages adapt with tanks and hardy crops.", explainSteps: ["Hill villages like Penugolu terrace their slopes and lean on forest resources.","Plateau villages like Dokur instead depend on rainwater tanks and drought-tough crops.","Same broad goal (surviving the land) but very different methods, shaped by very different terrain."], explainDiagram: null }
        ],
        terms: [
          { term: "Hill", def: "A raised landform, smaller and often less steep than a mountain" },
          { term: "Terrace farming", def: "Farming on step-like flat platforms cut into a hill slope" },
          { term: "Soil erosion", def: "The wearing away of topsoil, often by water or wind" },
          { term: "Forest produce", def: "Useful materials gathered from forests, like fruits, wood or herbs" },
          { term: "Slope", def: "The tilt or steepness of the land's surface" },
          { term: "Terrain", def: "The physical features of an area of land" }
        ]
      },
      {
        id: "gathering-to-growing-food",
        name: "From Gathering Food to Growing Food – The Earliest People",
        blurb: "Theme II: Production, Exchange and Livelihoods — how farming began",
        questions: [
          { q: "Early humans first got their food mainly by...", options: ["Farming", "Hunting animals and gathering plants", "Buying from markets", "Fishing only"], answer: 1, difficulty: "easy", explain: "Before farming began, early humans survived by hunting wild animals and gathering fruits, roots and seeds.", explainSteps: ["Before farming existed, there was no way to grow food on purpose.","People had to find food that was already growing or already alive in nature.","So early humans survived by hunting animals and gathering wild plants."], explainDiagram: null },
          { q: "What major change happened when humans learned to grow crops?", options: ["They started living permanently in one place", "They stopped eating meat completely", "They stopped using tools", "Nothing changed"], answer: 0, difficulty: "easy", explain: "Once people could grow food reliably, they no longer needed to keep moving, so settled village life began.", explainSteps: ["Once people could reliably grow their own food nearby...","...they no longer needed to wander in search of wild food.","That's why farming led to people settling permanently in one place."], explainDiagram: "timelineEmpire" },
          { q: "Why did early humans often move from place to place?", options: ["To search for food and water", "For entertainment", "To meet other people", "For trade fairs"], answer: 0, difficulty: "medium", explain: "Since they depended on wild food that ran out, hunter-gatherers moved often in search of fresh sources of food and water.", explainSteps: ["Wild food sources like fruits, roots and game animals eventually run out in one spot.","To keep finding fresh supplies, people had to keep moving to new areas.","That constant searching is why early humans moved from place to place."], explainDiagram: null },
          { q: "Growing the same crop and living near it led to the rise of...", options: ["Cities", "Villages", "Deserts", "Oceans"], answer: 1, difficulty: "medium", explain: "As farming let people settle down, small permanent villages began to form near fertile farmland.", explainSteps: ["Once a crop was planted, people had to stay nearby to tend and harvest it.","Staying in one place near their crops naturally clustered people together.","That clustering of settled farming families is what formed early villages."], explainDiagram: null },
          { q: "What does the term 'Neolithic' mainly refer to?", options: ["The age of iron tools", "The New Stone Age, when polished tools and farming began", "The age of dinosaurs", "The age of writing"], answer: 1, difficulty: "hard", explain: "The Neolithic (New Stone) Age is marked by polished stone tools and the beginning of farming and settled life.", explainSteps: ["'Neo' means new, and 'lithic' relates to stone tools.","This period marks a big shift: polished (smoother) stone tools plus the start of farming.","So 'Neolithic' refers to the New Stone Age, when farming and better tools began."], explainDiagram: null },
          { q: "How did the shift to farming change the division of work in early communities?", options: ["Everyone did the exact same single task forever", "People began to take up different roles like farming, pottery and tool-making", "Work disappeared completely", "Only children worked"], answer: 1, difficulty: "hard", explain: "As settled communities grew, people specialised in different tasks - some farmed, others made pots or tools.", explainSteps: ["When everyone had to hunt/gather just to survive, there wasn't much room for other jobs.","Once farming provided a steady food supply, some people could specialise — some farmed, some made pottery, some crafted tools.","That's how settled farming life led to divided, specialised work."], explainDiagram: null }
        ],
        terms: [
          { term: "Hunter-gatherer", def: "A person who survives by hunting animals and collecting wild plants" },
          { term: "Domestication", def: "Taming wild plants or animals for human use" },
          { term: "Neolithic Age", def: "The New Stone Age, when farming and polished tools began" },
          { term: "Settlement", def: "A place where a community of people live permanently" },
          { term: "Nomadic", def: "Moving from place to place instead of living in one location" },
          { term: "Fertile soil", def: "Soil that is rich in nutrients and good for growing crops" }
        ]
      },
      {
        id: "agriculture-in-our-times",
        name: "Agriculture in Our Times",
        blurb: "Theme II: Production, Exchange and Livelihoods — modern farming methods",
        questions: [
          { q: "Which of these is an example of a modern farming tool?", options: ["Tractor", "Wooden plough only", "Bare hands only", "Stone axe"], answer: 0, difficulty: "easy", explain: "Tractors are modern machines that have replaced many traditional tools, making farming faster and less labor-intensive.", explainSteps: ["Old farming tools like the wooden plough were powered by hand or animals.","A tractor is a modern machine that does the same job, much faster.","So a tractor is an example of a modern farming tool."], explainDiagram: null },
          { q: "What is irrigation?", options: ["Harvesting crops", "Supplying water to fields artificially", "Selling crops", "Ploughing soil"], answer: 1, difficulty: "easy", explain: "Irrigation means supplying water to crops through canals, wells, tanks or pipes, rather than relying only on rain.", explainSteps: ["Crops need regular water, but rain alone isn't always reliable.","Farmers supply water on purpose using canals, wells, or pipes.","That deliberate water supply to fields is called irrigation."], explainDiagram: null },
          { q: "What is a major benefit of using chemical fertilisers in farming?", options: ["They always improve soil health long-term with no downsides", "They can boost crop yield in the short term", "They replace the need for water", "They eliminate the need for sunlight"], answer: 1, difficulty: "medium", explain: "Fertilisers add nutrients that can boost yields, though overuse can also harm soil health over time.", explainSteps: ["Fertilisers add extra nutrients directly to the soil.","More nutrients available to plants can mean bigger, faster-growing crops.","So a major short-term benefit of fertilisers is boosting crop yield."], explainDiagram: null },
          { q: "What does 'multiple cropping' mean?", options: ["Growing more than one crop on the same land in a year", "Growing only one crop forever", "Growing crops only once in a lifetime", "Never rotating crops"], answer: 0, difficulty: "medium", explain: "Multiple cropping means growing two or more crops on the same field within a single year, often boosting overall output.", explainSteps: ["'Multiple' means more than one, and 'cropping' means growing crops.","So this refers to growing more than one crop on the same field.","Specifically, within a single year — multiple cropping."], explainDiagram: null },
          { q: "Why might farmers today choose high-yielding variety (HYV) seeds over traditional seeds?", options: ["HYV seeds usually produce more grain per plant, given enough water and fertiliser", "They need no care at all", "They are always cheaper", "They never need water"], answer: 0, difficulty: "hard", explain: "HYV seeds are bred to produce higher yields, though they often require more water, fertiliser and care to reach their full potential.", explainSteps: ["'High-Yielding Variety' seeds are specially bred for one main reason: more output.","Given enough water and fertiliser, they can produce noticeably more grain per plant than traditional seeds.","That's exactly why farmers often choose HYV seeds."], explainDiagram: null },
          { q: "What is one downside sometimes associated with heavy use of chemical fertilisers and pesticides over many years?", options: ["They can degrade soil health and pollute water sources over time", "They have absolutely no long-term effects", "They always improve soil forever", "They eliminate the need for farming altogether"], answer: 0, difficulty: "hard", explain: "Overuse of chemical fertilisers and pesticides can degrade soil quality and contaminate water sources over the long term.", explainSteps: ["Chemical fertilisers and pesticides can help crops grow in the short term.","But heavy, repeated use over many years can build up and harm the soil's natural health.","They can also wash into water sources and pollute them — a real long-term downside."], explainDiagram: null }
        ],
        terms: [
          { term: "Irrigation", def: "Supplying water to crops through canals, wells or pipes" },
          { term: "Fertiliser", def: "A substance added to soil to provide nutrients for plant growth" },
          { term: "HYV seeds", def: "High-Yielding Variety seeds bred to produce more grain" },
          { term: "Multiple cropping", def: "Growing more than one crop on the same land within a year" },
          { term: "Pesticide", def: "A chemical used to kill pests that damage crops" },
          { term: "Mechanisation", def: "The use of machines like tractors to do farm work" }
        ]
      },
      {
        id: "trade-agricultural-produce",
        name: "Trade in Agricultural Produce",
        blurb: "Theme II: Production, Exchange and Livelihoods — from farm to market",
        questions: [
          { q: "What is a 'mandi'?", options: ["A type of crop", "A wholesale market where farmers sell agricultural produce", "A farming tool", "A type of soil"], answer: 1, difficulty: "easy", explain: "A mandi is a marketplace, often regulated, where farmers bring their produce to sell to traders in bulk.", explainSteps: ["Farmers can't sell directly to every single household — they need one central place.","That central place, where produce is bought and sold in bulk, is a wholesale market.","In India, that market is called a mandi."], explainDiagram: "tradeFlow" },
          { q: "Who usually buys crops directly from farmers to sell further in markets?", options: ["Traders/middlemen", "Only the government", "Only foreign countries", "Nobody buys from farmers"], answer: 0, difficulty: "easy", explain: "Traders (often called middlemen) typically buy produce from farmers and transport or resell it in bigger markets.", explainSteps: ["Farmers usually don't transport their own crops all the way to distant city markets.","Instead, someone in between buys from the farmer and moves the produce onward.","That go-between buyer is a trader (or middleman)."], explainDiagram: "tradeFlow" },
          { q: "Why might a farmer receive a lower price for their crop than what it eventually sells for in a city market?", options: ["Costs of transport, storage and middlemen profit are added along the way", "Prices are always exactly the same everywhere", "Farmers always get the highest price", "Crops never change price"], answer: 0, difficulty: "medium", explain: "Each step in the supply chain - transport, storage, and trader margins - typically adds cost, so prices rise between farm and final market.", explainSteps: ["Follow the produce's journey: farm → transport → storage → trader → city market.","Each step in that chain adds its own cost (fuel, storage, profit margin).","By the time it reaches the city, all those added costs raise the price — even though the farmer got paid less at the start."], explainDiagram: "tradeFlow" },
          { q: "What is the purpose of a Minimum Support Price (MSP) set by the government for some crops?", options: ["To ensure farmers get at least a guaranteed minimum price for their produce", "To force farmers to sell for free", "To fix all prices at zero", "To stop all agricultural trade"], answer: 0, difficulty: "medium", explain: "MSP is a government-announced price meant to protect farmers from having to sell their crops for too little in a bad market.", explainSteps: ["Sometimes market prices drop very low, which could hurt farmers badly.","The government sets a price floor — a guaranteed minimum — for certain crops.","That guaranteed floor price is the Minimum Support Price (MSP)."], explainDiagram: null },
          { q: "How can cold storage facilities benefit farmers selling perishable crops like fruits and vegetables?", options: ["They let farmers store produce longer and sell when prices are better, reducing spoilage losses", "Cold storage has no impact on farming income", "They make produce spoil faster", "They are only used for grains, never fruits"], answer: 0, difficulty: "hard", explain: "Cold storage slows spoilage, giving farmers flexibility to sell perishable produce when market prices are more favourable.", explainSteps: ["Fruits and vegetables spoil quickly if left at room temperature.","Cold storage slows that spoilage down significantly.","This lets farmers hold onto produce and sell later when prices are better, instead of being forced to sell immediately at a low price."], explainDiagram: null },
          { q: "Why is transportation infrastructure (like roads and railways) important for agricultural trade?", options: ["It has no real importance", "Good transport lets produce reach markets quickly before it spoils, and reach farther/better markets", "It only matters for city dwellers", "It slows down trade on purpose"], answer: 1, difficulty: "hard", explain: "Efficient transport reduces spoilage and delays, letting farmers access larger and potentially better-paying markets.", explainSteps: ["Good roads and railways let produce travel fast, before it can spoil.","Faster, wider transport also opens up access to bigger, potentially better-paying markets.","That's why transportation infrastructure matters so much for agricultural trade."], explainDiagram: "tradeFlow" }
        ],
        terms: [
          { term: "Mandi", def: "A wholesale market where farmers sell their agricultural produce" },
          { term: "Middleman/Trader", def: "A person who buys produce from farmers to resell in bigger markets" },
          { term: "Minimum Support Price (MSP)", def: "A guaranteed minimum price set by the government for certain crops" },
          { term: "Cold storage", def: "Refrigerated storage that slows spoilage of perishable produce" },
          { term: "Perishable", def: "Describes food that spoils quickly, like fruits and vegetables" },
          { term: "Supply chain", def: "The full journey of a product from producer to final buyer" }
        ]
      },
      {
        id: "community-decision-tribe",
        name: "Community Decision-Making in a Tribe",
        blurb: "Theme III: Political Systems and Governance — how tribal communities decide together",
        questions: [
          { q: "In many tribal communities, important decisions were traditionally made by...", options: ["A single distant ruler with no local input", "A council of elders or the whole community together", "Foreign traders", "Nobody - decisions were never made"], answer: 1, difficulty: "easy", explain: "Tribal communities often made decisions collectively, through councils of elders or general community discussion.", explainSteps: ["Tribes generally didn't have one all-powerful ruler making every decision alone.","Instead, decisions were often talked through by respected elders or the whole group.","So tribal decisions were typically made by a council of elders or community consensus."], explainDiagram: null },
          { q: "What is a 'tribe' in the context of early communities?", options: ["A modern political party", "A group of people sharing common ancestry, culture, and often land", "A type of currency", "A large city"], answer: 1, difficulty: "easy", explain: "A tribe is a community bound by shared ancestry, customs, language, and often a common territory.", explainSteps: ["A tribe usually shares common ancestors, traditions, and often a shared homeland.","That bond of shared culture and lineage defines the group.","So a tribe is a community united by common ancestry, culture, and often land."], explainDiagram: null },
          { q: "Why might a council of elders be respected in decision-making within a tribe?", options: ["They are usually seen as experienced and knowledgeable about customs", "They are always the richest people", "They are chosen randomly with no reason", "Elders have no role at all"], answer: 0, difficulty: "medium", explain: "Elders were often respected for their experience and deep knowledge of customs and past events, guiding community decisions.", explainSteps: ["Elders had lived through many years and many situations already.","That accumulated experience made their advice on customs and disputes valuable.","That's why councils of elders were often deeply respected in decision-making."], explainDiagram: null },
          { q: "How did tribal communities typically resolve disputes between members?", options: ["Through community or elder-led discussion and customary rules", "By ignoring all disputes forever", "Only through outside armies", "Disputes were never resolved"], answer: 0, difficulty: "medium", explain: "Disputes were often settled through discussion guided by elders and the community's traditional customs and rules.", explainSteps: ["Without formal courts, tribes needed another way to settle disagreements fairly.","Talking it through, guided by respected elders and traditional customs, was the common method.","So disputes were usually resolved through community/elder-led discussion, following custom."], explainDiagram: null },
          { q: "How does tribal community decision-making differ from a modern representative democracy?", options: ["Tribal decisions were often made directly by elders/community consensus rather than through elected representatives", "There is no difference at all", "Tribes always had written constitutions", "Modern democracies never involve voting"], answer: 0, difficulty: "hard", explain: "Tribal systems often relied on direct discussion and consensus among community members or elders, while modern democracies use elected representatives.", explainSteps: ["Modern democracies choose leaders through voting and elected representatives.","Tribal systems instead often relied directly on elders or general community agreement.","So the key difference: direct elder/community decisions vs elected representative decisions."], explainDiagram: "govStructure" },
          { q: "Why is understanding early tribal governance useful for understanding how political systems evolved?", options: ["It shows some of the earliest forms of collective decision-making that later influenced more complex political systems", "Tribal systems have no connection to later governance", "Only modern systems matter", "Tribes never had any form of governance"], answer: 0, difficulty: "hard", explain: "Studying tribal decision-making helps us see the roots of collective governance ideas that later developed into more complex political systems.", explainSteps: ["Every modern system of government had to start somewhere.","Tribal decision-making shows some of the earliest examples of people organising together to decide things collectively.","Studying it helps us trace how those early ideas grew into today's more complex political systems."], explainDiagram: null }
        ],
        terms: [
          { term: "Tribe", def: "A community of people sharing common ancestry, culture and often land" },
          { term: "Council of elders", def: "A group of respected senior community members who help make decisions" },
          { term: "Consensus", def: "General agreement reached by a group after discussion" },
          { term: "Custom", def: "A traditional practice followed by a community" },
          { term: "Governance", def: "The way a community or society is organised and decisions are made" },
          { term: "Community", def: "A group of people living together and sharing common interests" }
        ]
      },
      {
        id: "kingdoms-republics",
        name: "Emergence of Kingdoms and Republics",
        blurb: "Theme III: Political Systems and Governance — early states in ancient India",
        questions: [
          { q: "What is a 'kingdom'?", options: ["A territory ruled by a king or queen", "A type of farm", "A trading market", "A river system"], answer: 0, difficulty: "easy", explain: "A kingdom is a political territory ruled by a monarch, such as a king or queen.", explainSteps: ["Think of the word 'king' hidden inside 'kingdom'.","A kingdom is territory under the rule of one king or queen.","So a kingdom is a territory ruled by a monarch."], explainDiagram: null },
          { q: "What is a 'republic' (in the ancient sense, like the Mahajanapadas' Ganas/Sanghas)?", options: ["A state ruled by a single hereditary king", "A state governed by an assembly of representatives rather than one hereditary ruler", "A type of religious temple", "A trading route"], answer: 1, difficulty: "easy", explain: "Ancient republics (ganas/sanghas) were governed by assemblies of representatives rather than a single hereditary monarch.", explainSteps: ["Unlike a kingdom, a republic isn't ruled by one hereditary king.","Instead, a group (an assembly) of representatives governs together.","That's exactly what ancient ganas/sanghas (republics) were."], explainDiagram: "govStructure" },
          { q: "What were the large ancient Indian states that emerged around the 6th century BCE often called?", options: ["Mahajanapadas", "Panchayats", "Provinces only", "Colonies"], answer: 0, difficulty: "medium", explain: "Mahajanapadas were large ancient Indian territorial states, some ruled as kingdoms and others as republics.", explainSteps: ["Around the 6th century BCE, India saw many large states rise — some kingdoms, some republics.","These large ancient territorial states are given a specific historical name.","That name is Mahajanapadas."], explainDiagram: null },
          { q: "How did early kingdoms typically differ from republics in terms of leadership?", options: ["Kingdoms had a single hereditary ruler; republics were governed by assemblies of representatives", "There was no difference at all", "Republics always had kings too", "Kingdoms never had rulers"], answer: 0, difficulty: "medium", explain: "Kingdoms centred power in one hereditary ruler, while republics distributed decision-making among assemblies of representatives.", explainSteps: ["In a kingdom, power stayed within one royal family, passed down generation to generation.","In a republic, power was instead spread across an assembly of representatives.","So kingdoms = single hereditary ruler; republics = governing assembly."], explainDiagram: "govStructure" },
          { q: "Why might taxation have become more organised as kingdoms grew larger?", options: ["Rulers needed resources to maintain armies, officials and infrastructure", "Larger kingdoms had no need for resources", "Taxes were never collected in kingdoms", "Only republics collected taxes"], answer: 0, difficulty: "hard", explain: "As kingdoms expanded, rulers needed a steady, organised system of taxation to fund armies, officials, and public works.", explainSteps: ["As kingdoms grew bigger, rulers needed more soldiers, officials and buildings.","All of that required steady funding.","Organised taxation became necessary to collect the resources needed to support this larger scale of rule."], explainDiagram: null },
          { q: "What is one key difference between how power was inherited in kingdoms versus how leaders were chosen in early republics?", options: ["Kingdoms passed power through heredity (family line); republics often chose leaders through assemblies", "Both used pure heredity", "Both were fully democratic with universal voting", "Neither had any leadership at all"], answer: 0, difficulty: "hard", explain: "Kingship typically passed down within a royal family, while early republics distributed leadership through councils or assemblies of representatives.", explainSteps: ["In kingdoms, power simply passed down within the royal bloodline — no choosing involved.","In republics, an assembly of representatives instead selected or agreed on leadership.","That's the core difference: inherited power vs assembly-chosen leadership."], explainDiagram: null }
        ],
        terms: [
          { term: "Kingdom", def: "A territory ruled by a king or queen" },
          { term: "Republic", def: "A state governed by an assembly of representatives rather than one ruler" },
          { term: "Mahajanapada", def: "A large ancient Indian territorial state, kingdom or republic" },
          { term: "Hereditary rule", def: "Power passed down within a family line, generation to generation" },
          { term: "Assembly", def: "A group of representatives who meet to discuss and decide matters" },
          { term: "Taxation", def: "Collecting money or produce from people to fund a ruler or government" }
        ]
      },
      {
        id: "first-empires",
        name: "First Empires",
        blurb: "Theme III: Political Systems and Governance — the rise of large empires",
        questions: [
          { q: "What is an 'empire'?", options: ["A single small village", "A large territory made up of many regions under one central power", "A type of farming method", "A religious festival"], answer: 1, difficulty: "easy", explain: "An empire is a large political unit made up of many different regions or peoples, ruled under one central authority.", explainSteps: ["An empire is much bigger than a single kingdom.","It combines MANY regions or peoples under one central ruling power.","So an empire is a large territory made of many regions, under one central power."], explainDiagram: "timelineEmpire" },
          { q: "Which ancient Indian empire is well known for its emperor Ashoka?", options: ["Maurya Empire", "Gupta Empire", "Mughal Empire", "Chola Empire"], answer: 0, difficulty: "easy", explain: "The Maurya Empire, which included the famous emperor Ashoka, was one of ancient India's first large empires.", explainSteps: ["Among ancient Indian empires, one is especially famous for a particular emperor.","That empire is the Maurya Empire.","Its emperor Ashoka is remembered widely in Indian history."], explainDiagram: "timelineEmpire" },
          { q: "How did large empires typically maintain control over such vast territories?", options: ["Through organised administration, armies, and appointed officials", "By ignoring distant regions completely", "Empires never needed any organisation", "Only through religious festivals"], answer: 0, difficulty: "medium", explain: "Empires relied on structured administration - officials, armies, and communication networks - to govern their large territories.", explainSteps: ["Ruling a huge territory single-handedly would be impossible for one person alone.","Empires relied on organised systems: appointed officials, armies, and administrative structure.","That organisation is what let empires maintain control over vast areas."], explainDiagram: null },
          { q: "Why is Emperor Ashoka particularly remembered in Indian history?", options: ["For expanding trade only", "For his shift toward promoting non-violence and welfare after the Kalinga war", "For never ruling any territory", "For building only forts"], answer: 1, difficulty: "medium", explain: "After witnessing the destruction of the Kalinga war, Ashoka famously embraced non-violence and promoted welfare policies across his empire.", explainSteps: ["Ashoka fought the brutal Kalinga war, witnessing massive destruction and loss of life.","Deeply affected, he turned toward promoting non-violence and public welfare instead.","That transformation is exactly why Ashoka is so remembered in history."], explainDiagram: null },
          { q: "What role did roads and communication networks play in maintaining ancient empires?", options: ["They helped move armies, officials, and information efficiently across vast distances", "They had no importance at all", "Empires never built any infrastructure", "Only traders used roads, never officials"], answer: 0, difficulty: "hard", explain: "Good roads and communication let rulers move troops, collect taxes, and manage distant provinces effectively - essential for holding large empires together.", explainSteps: ["A huge empire spans vast distances between its capital and far-off regions.","Good roads let armies, officials and messages travel those distances efficiently.","That's why road and communication networks were vital to holding an empire together."], explainDiagram: null },
          { q: "How did the administration of a large empire likely differ from that of a small kingdom?", options: ["Empires typically needed layered administration with regional governors, unlike smaller, more direct kingdom rule", "There was no meaningful difference", "Small kingdoms always had more officials than empires", "Empires had no administration at all"], answer: 0, difficulty: "hard", explain: "Because empires spanned much larger and more diverse territories, they typically needed multiple layers of officials and regional governors to manage effectively.", explainSteps: ["A small kingdom can often be ruled fairly directly by one central authority.","A huge empire spans far more territory and diversity, so it needs extra layers — like regional governors — to manage effectively.","So empires typically required more layered administration than small kingdoms."], explainDiagram: "govStructure" }
        ],
        terms: [
          { term: "Empire", def: "A large territory made up of many regions, ruled under one central power" },
          { term: "Emperor", def: "The supreme ruler of an empire" },
          { term: "Administration", def: "The system of officials and structures used to govern a territory" },
          { term: "Governor", def: "An official appointed to rule a region on behalf of a larger ruler" },
          { term: "Edict", def: "An official order or proclamation issued by a ruler" },
          { term: "Province", def: "A region or division within a larger kingdom or empire" }
        ]
      },
      {
        id: "democratic-government",
        name: "Democratic Government",
        blurb: "Theme III: Political Systems and Governance — how democracy works today",
        questions: [
          { q: "What does 'democracy' mean?", options: ["Rule by a single king", "Government by the people, typically through elected representatives", "Rule by the military only", "No government at all"], answer: 1, difficulty: "easy", explain: "Democracy means government of, by, and for the people, usually through elected representatives.", explainSteps: ["Break down the word: 'demo' relates to people, 'cracy' relates to rule.","So democracy literally means rule by the people.","In practice, that's usually done through elected representatives."], explainDiagram: "govStructure" },
          { q: "In a democracy, how are representatives usually chosen?", options: ["Through elections where citizens vote", "By birth into a royal family", "By a lottery only", "They are never chosen"], answer: 0, difficulty: "easy", explain: "In a democracy, citizens vote in elections to choose their representatives.", explainSteps: ["In a democracy, leadership isn't inherited or seized by force.","Instead, citizens cast votes to pick who represents them.","That voting process is called an election."], explainDiagram: null },
          { q: "What is universal adult franchise?", options: ["Only rich adults can vote", "All adult citizens have the right to vote regardless of wealth, caste or gender", "Only men can vote", "Only educated people can vote"], answer: 1, difficulty: "medium", explain: "Universal adult franchise means every adult citizen has an equal right to vote, without discrimination.", explainSteps: ["'Universal' means it applies to everyone; 'adult franchise' means the right to vote as an adult.","Put together, that means EVERY adult citizen can vote — no matter their wealth, caste, or gender.","That equal voting right for all adults is universal adult franchise."], explainDiagram: null },
          { q: "Why is a written constitution important for a democratic government?", options: ["It has no real importance", "It lays out the basic laws, rights, and structure of government that everyone must follow", "It only matters for foreign countries", "It replaces the need for elections"], answer: 1, difficulty: "medium", explain: "A constitution sets out the fundamental rules, rights and structure of government, providing a stable framework for democracy to function.", explainSteps: ["A country's basic rules and rights need to be written down clearly for everyone to follow.","A constitution provides exactly that — the fundamental laws and structure of government.","That's why a written constitution is so important for a functioning democracy."], explainDiagram: null },
          { q: "What is one key feature that distinguishes a democracy from a dictatorship?", options: ["Regular, free elections where power can change hands peacefully", "Only one person ever holds power with no elections", "Both are always identical", "Dictatorships always have written constitutions too"], answer: 0, difficulty: "hard", explain: "Democracies hold regular elections that allow power to transfer peacefully based on the people's vote, unlike dictatorships where one person or group holds power indefinitely.", explainSteps: ["In a dictatorship, one person or group typically holds power indefinitely, with no real elections.","In a democracy, regular elections let power change hands peacefully based on the people's vote.","That peaceful, voter-driven transfer of power is a defining feature of democracy."], explainDiagram: null },
          { q: "Why might local self-government (like panchayats) be considered an important part of democracy?", options: ["It brings decision-making closer to the people at the grassroots level", "Local government has no real role in democracy", "Only national government matters in a democracy", "Local government replaces the need for voting"], answer: 0, difficulty: "hard", explain: "Local self-government lets communities participate directly in decisions affecting their own area, strengthening democracy at the grassroots level.", explainSteps: ["National government handles big, country-wide issues, but local issues need local attention.","Panchayats let people directly participate in decisions affecting their own village.","That grassroots-level participation is why local self-government matters in a democracy."], explainDiagram: "govStructure" }
        ],
        terms: [
          { term: "Democracy", def: "Government by the people, usually through elected representatives" },
          { term: "Election", def: "A process where citizens vote to choose their representatives" },
          { term: "Universal adult franchise", def: "The right of all adult citizens to vote, regardless of wealth, caste or gender" },
          { term: "Constitution", def: "The fundamental laws and rules that structure a country's government" },
          { term: "Representative", def: "A person elected to act and make decisions on behalf of others" },
          { term: "Citizen", def: "A recognised member of a country with rights and duties" }
        ]
      },
      {
        id: "village-panchayats",
        name: "Village Panchayats",
        blurb: "Theme III: Political Systems and Governance — local self-government in villages",
        questions: [
          { q: "What is a Gram Panchayat?", options: ["A national parliament", "The local self-government body for a village", "A type of school", "A trading market"], answer: 1, difficulty: "easy", explain: "The Gram Panchayat is the local self-government institution that manages affairs at the village level.", explainSteps: ["'Gram' means village, and 'Panchayat' refers to local self-rule.","Put together, this is the local governing body specifically for a village.","So a Gram Panchayat is the village's local self-government."], explainDiagram: "govStructure" },
          { q: "Who typically heads a Gram Panchayat?", options: ["The Sarpanch", "The Prime Minister", "A foreign official", "The village priest always"], answer: 0, difficulty: "easy", explain: "The Sarpanch is the elected head of a village's Gram Panchayat.", explainSteps: ["Every local body needs an elected leader to head it.","For a Gram Panchayat, that elected head has a specific title.","That title is Sarpanch."], explainDiagram: null },
          { q: "How are members of a Gram Panchayat usually chosen?", options: ["Through elections by village residents", "Appointed by the national government directly", "Inherited from family", "Chosen randomly by lottery"], answer: 0, difficulty: "medium", explain: "Panchayat members, including the Sarpanch, are typically elected by the residents of the village.", explainSteps: ["A Gram Panchayat represents the village's own people and needs.","So its members are chosen directly by the people living there.","That's done through elections by village residents."], explainDiagram: null },
          { q: "Which of these is a typical responsibility of a Gram Panchayat?", options: ["Managing local roads, sanitation and drinking water supply", "Declaring war on other countries", "Printing national currency", "Setting national tax rates"], answer: 0, difficulty: "medium", explain: "Gram Panchayats handle local matters like village roads, sanitation, drinking water and local development schemes.", explainSteps: ["A Panchayat's job is to manage everyday village needs.","That includes practical local matters like roads, sanitation, and drinking water.","So maintaining these local services is a typical Panchayat responsibility."], explainDiagram: null },
          { q: "Why is the Gram Sabha (the general village assembly of all voters) considered important?", options: ["It gives every registered voter in the village a chance to participate directly in local decisions", "It has no real function", "Only the Sarpanch can attend it", "It only meets once a century"], answer: 0, difficulty: "hard", explain: "The Gram Sabha allows every adult resident registered as a voter to take part directly in discussing and approving village-level plans and decisions.", explainSteps: ["The Gram Sabha includes every single registered voter in the village — not just elected officials.","This means ordinary villagers get a direct say in local plans and decisions.","That direct grassroots participation is why the Gram Sabha matters."], explainDiagram: null },
          { q: "How does the three-tier Panchayati Raj system (village, block/mandal, and district levels) help local governance?", options: ["It decentralises decision-making so issues can be addressed at the most appropriate local level", "It centralises all power in one single village office", "It removes the need for any elections", "It only exists in cities, not villages"], answer: 0, difficulty: "hard", explain: "By spreading responsibilities across village, block and district levels, the Panchayati Raj system lets different scales of issues be handled by the most appropriate level of local government.", explainSteps: ["Not every issue belongs at the same level: some are village-sized, some are block-sized, some are district-sized.","The three-tier system (village, block/mandal, district) splits responsibility by scale.","That way, each issue gets handled at the most appropriate, closest level of government."], explainDiagram: "govStructure" }
        ],
        terms: [
          { term: "Gram Panchayat", def: "The local self-government body for a village" },
          { term: "Sarpanch", def: "The elected head of a Gram Panchayat" },
          { term: "Gram Sabha", def: "The general assembly of all registered voters in a village" },
          { term: "Panchayati Raj", def: "The three-tier system of rural local self-government in India" },
          { term: "Local self-government", def: "Government at the community level, managing local affairs" },
          { term: "Ward member", def: "An elected representative for a smaller division (ward) within a village or town" }
        ]
      },
      {
        id: "local-self-government-urban",
        name: "Local Self-Government in Urban Areas",
        blurb: "Theme III: Political Systems and Governance — municipalities and city governance",
        questions: [
          { q: "What is the local self-government body for a small town usually called?", options: ["Municipality", "Gram Panchayat", "Parliament", "District court"], answer: 0, difficulty: "easy", explain: "A Municipality (or Municipal Council) is the local self-government body typically responsible for governing a town.", explainSteps: ["A village has a Gram Panchayat; a bigger settlement needs its own body too.","For a smaller town, that local self-government body has its own name.","That name is Municipality."], explainDiagram: "govStructure" },
          { q: "What is the local self-government body for a large city usually called?", options: ["Municipal Corporation", "Gram Sabha", "Zilla Parishad", "Village council"], answer: 0, difficulty: "easy", explain: "Large cities are typically governed by a Municipal Corporation, headed by a Mayor.", explainSteps: ["Large cities need an even bigger, more complex governing structure than small towns.","That larger urban body has a specific title.","It's called a Municipal Corporation."], explainDiagram: "govStructure" },
          { q: "Who usually heads a Municipal Corporation?", options: ["The Mayor", "The Sarpanch", "The Governor", "The President"], answer: 0, difficulty: "medium", explain: "The Mayor is typically the elected head of a Municipal Corporation in a city.", explainSteps: ["Just as a Sarpanch heads a village Panchayat, a city's Corporation needs its own elected head.","That elected head of a Municipal Corporation has a well-known title.","That title is Mayor."], explainDiagram: null },
          { q: "Which of these is a typical responsibility of urban local bodies like municipalities?", options: ["Waste management, water supply, and maintaining roads in the city/town", "Declaring national holidays", "Printing currency", "Making national laws"], answer: 0, difficulty: "medium", explain: "Urban local bodies handle city-level services such as waste collection, water supply, street lighting, and road maintenance.", explainSteps: ["Cities need day-to-day services just like villages do, but at a bigger scale.","Municipalities handle things like waste collection, water supply, and road upkeep.","So these are typical urban local body responsibilities."], explainDiagram: null },
          { q: "Why might urban local governance be more complex than village-level governance?", options: ["Cities usually have much larger populations, denser infrastructure needs, and more varied services to manage", "Cities have no real governance needs", "Villages always have more people than cities", "There is no real difference in complexity"], answer: 0, difficulty: "hard", explain: "The scale, population density, and variety of services (transport, sanitation, housing) needed in cities make urban governance considerably more complex than village governance.", explainSteps: ["Villages have smaller populations and simpler infrastructure needs.","Cities pack in far more people, denser buildings, and many more services to coordinate (transport, sanitation, housing).","That extra scale and complexity is why urban governance is more complicated."], explainDiagram: null },
          { q: "How do municipal wards function within a city's local government structure?", options: ["Each ward elects its own representative (councillor) who represents that area's interests in the municipal body", "Wards have no elected representation at all", "Only the Mayor represents the whole city with no ward-level input", "Wards are used only for postal addresses"], answer: 0, difficulty: "hard", explain: "Cities are divided into wards, each electing a councillor who voices that specific area's needs within the broader municipal government.", explainSteps: ["A whole city is too big for one person to represent everyone's local concerns.","So cities are divided into smaller areas called wards.","Each ward elects its own councillor to represent that specific area's needs."], explainDiagram: null }
        ],
        terms: [
          { term: "Municipality", def: "The local self-government body for a town" },
          { term: "Municipal Corporation", def: "The local self-government body for a large city, headed by a Mayor" },
          { term: "Mayor", def: "The elected head of a Municipal Corporation" },
          { term: "Ward", def: "A division of a city or town represented by an elected councillor" },
          { term: "Councillor", def: "An elected representative for a ward in a municipality" },
          { term: "Urban local body", def: "A local self-government institution governing a town or city" }
        ]
      },
      {
        id: "diversity-in-society",
        name: "Diversity in Our Society",
        blurb: "Theme IV: Social Organisation and Inequities — differences and shared humanity",
        questions: [
          { q: "What does 'diversity' mean in the context of society?", options: ["Everyone being exactly the same", "The presence of many different cultures, languages, religions and ways of life", "Only one language being spoken", "A single type of food eaten by everyone"], answer: 1, difficulty: "easy", explain: "Diversity refers to the variety of cultures, languages, religions, and traditions found within a society.", explainSteps: ["Look around any large society — not everyone shares the same language, food or customs.","That mix of different cultures, languages and ways of life is exactly what diversity means.","So diversity refers to the presence of many different cultures, languages and religions together."], explainDiagram: null },
          { q: "Which of these is an example of India's cultural diversity?", options: ["Many different languages spoken across states", "Only one religion practiced nationwide", "Identical festivals everywhere", "A single dress style for everyone"], answer: 0, difficulty: "easy", explain: "India has dozens of major languages and hundreds of dialects, reflecting its rich cultural diversity.", explainSteps: ["India has dozens of major languages, spoken across its many states.","That huge linguistic variety is a clear sign of cultural diversity.","So 'many different languages spoken across states' is a strong example of India's diversity."], explainDiagram: null },
          { q: "Why is respecting diversity important in a society?", options: ["It helps people live together peacefully despite differences", "It has no real importance", "It only matters for governments, not people", "Diversity should be eliminated for unity"], answer: 0, difficulty: "medium", explain: "Respecting diversity allows people from different backgrounds to coexist peacefully and learn from each other.", explainSteps: ["When people understand and accept each other's differences, conflict is far less likely.","Respecting diversity helps different groups live together peacefully.","That's exactly why respecting diversity matters in a society."], explainDiagram: null },
          { q: "What is 'unity in diversity', a phrase often used to describe India?", options: ["Despite many differences, people can still come together as one nation", "Everyone in India is identical", "Diversity prevents any kind of unity", "It refers only to sports teams"], answer: 0, difficulty: "medium", explain: "'Unity in diversity' describes how India's many different communities and cultures can still come together as one united nation.", explainSteps: ["'Unity' means coming together as one; 'diversity' means having many differences.","Put together, this phrase describes people staying united as one nation despite their many differences.","That's what 'unity in diversity' means for India."], explainDiagram: null },
          { q: "How can differences in language sometimes create challenges in a diverse country?", options: ["Communication and administration can be harder across different language regions", "Language differences never cause any challenges", "Only one language is ever spoken in any country", "Language has no connection to governance"], answer: 0, difficulty: "hard", explain: "When many languages are spoken across a country, communication, education, and administration must account for this diversity, which can be challenging but also enriching.", explainSteps: ["When many languages are spoken across a country, giving instructions or running schools/offices gets more complex.","Communication and administration have to work harder to reach everyone clearly.","That's why language diversity can create real (though manageable) challenges."], explainDiagram: null },
          { q: "Why might learning about different cultures and communities help reduce social prejudice?", options: ["Understanding others' traditions and lives can build empathy and reduce misunderstanding", "Learning about others has no effect on prejudice", "Prejudice only comes from too much knowledge", "Ignoring other cultures is more effective"], answer: 0, difficulty: "hard", explain: "Learning about different communities builds empathy and understanding, which can help reduce stereotypes and prejudice between groups.", explainSteps: ["Prejudice often grows from not understanding another group's way of life.","Learning about different cultures builds real understanding and empathy.","That understanding is exactly what helps reduce prejudice between groups."], explainDiagram: null }
        ],
        terms: [
          { term: "Diversity", def: "The presence of many different cultures, languages or communities" },
          { term: "Culture", def: "The customs, traditions, art and way of life of a group of people" },
          { term: "Unity in diversity", def: "The idea of different communities coming together as one nation" },
          { term: "Prejudice", def: "An unfair opinion about a group, often formed without real knowledge" },
          { term: "Community", def: "A group of people sharing common characteristics or living together" },
          { term: "Tolerance", def: "Accepting and respecting differences between people" }
        ]
      },
      {
        id: "towards-gender-equality",
        name: "Towards Gender Equality",
        blurb: "Theme IV: Social Organisation and Inequities — equal rights and opportunities",
        questions: [
          { q: "What does 'gender equality' mean?", options: ["Men and women having equal rights and opportunities", "Only men having rights", "Only women having rights", "Ignoring gender altogether"], answer: 0, difficulty: "easy", explain: "Gender equality means all genders have equal rights, opportunities, and treatment in society.", explainSteps: ["'Gender equality' is about fairness between genders.","Specifically, it means equal rights and equal opportunities for everyone, regardless of gender.","So that's exactly the definition: equal rights and opportunities for all genders."], explainDiagram: null },
          { q: "Which of these is an example of working toward gender equality in education?", options: ["Ensuring girls have equal access to schools as boys", "Only allowing boys to attend school", "Closing all schools for girls", "Ignoring the issue entirely"], answer: 0, difficulty: "easy", explain: "Providing equal access to education for girls and boys is a key step toward gender equality.", explainSteps: ["A clear way to support gender equality is through everyday access, like school.","If girls can attend school just as easily as boys, that's real equality in action.","So 'equal access to schools for girls' is a solid example of working toward gender equality."], explainDiagram: null },
          { q: "What is a common historical barrier that has affected women's access to education and work in many societies?", options: ["Social customs and biases that favored educating and employing men over women", "There were never any barriers historically", "Women always had more opportunities than men", "Barriers only existed in fictional stories"], answer: 0, difficulty: "medium", explain: "Many societies historically held customs and biases that limited girls' and women's access to education and paid work compared to men.", explainSteps: ["Historically, many societies held customary beliefs favoring men in education and jobs.","These social customs and biases limited opportunities specifically for women.","That historical bias is a key barrier gender equality efforts try to fix."], explainDiagram: null },
          { q: "How can laws help promote gender equality?", options: ["By guaranteeing equal rights, like equal pay or protection from discrimination", "Laws have no role in gender equality", "Laws should only protect one gender", "Gender equality cannot be supported by laws"], answer: 0, difficulty: "medium", explain: "Laws guaranteeing equal pay, equal access to education, and protection from discrimination help institutionalise gender equality.", explainSteps: ["Laws can require equal treatment where custom alone might not guarantee it.","For example, laws guaranteeing equal pay or banning discrimination create enforceable protections.","That's how laws actively help promote gender equality."], explainDiagram: null },
          { q: "Why is it important for both boys and girls to learn about gender equality from a young age?", options: ["It helps build respectful attitudes and reduces stereotypes early on", "It has no impact on future attitudes", "Only adults need to learn about this topic", "It should be taught only to girls"], answer: 0, difficulty: "hard", explain: "Teaching gender equality early helps children grow up with respectful, unbiased attitudes toward people of all genders.", explainSteps: ["Attitudes formed early in childhood tend to stick with people for life.","Teaching gender equality young helps build respectful, unbiased habits from the start.","That's why starting this education early matters so much."], explainDiagram: null },
          { q: "How might unequal access to opportunities based on gender affect a society's overall development?", options: ["It can limit the potential contributions of a large part of the population", "It always benefits the whole society equally", "Gender has no connection to a society's development", "Only economic factors matter for development"], answer: 0, difficulty: "hard", explain: "When any large group faces unequal access to education or work due to gender, society loses out on their potential skills and contributions, affecting overall development.", explainSteps: ["If a large group faces unequal access to school or jobs, their skills and ideas often go untapped.","That's a real loss for the whole society, not just that group.","So unequal opportunity based on gender can limit society's overall development and potential."], explainDiagram: null }
        ],
        terms: [
          { term: "Gender equality", def: "Equal rights, opportunities and treatment for people of all genders" },
          { term: "Discrimination", def: "Unfair treatment of a person or group based on a characteristic like gender" },
          { term: "Stereotype", def: "An oversimplified, often unfair belief about a group of people" },
          { term: "Equal opportunity", def: "The idea that everyone should have the same chance to succeed" },
          { term: "Empowerment", def: "Giving people the confidence, resources, and rights to improve their own lives" },
          { term: "Bias", def: "An unfair preference or prejudice toward or against something" }
        ]
      },
      {
        id: "religion-society-early-times",
        name: "Religion and Society in Early Times",
        blurb: "Theme V: Religion and Society — beliefs and practices in ancient India",
        questions: [
          { q: "In ancient societies, religion often played a role in...", options: ["Shaping daily life, festivals and social customs", "Having no influence on daily life at all", "Only affecting rulers, never common people", "Being completely separate from culture"], answer: 0, difficulty: "easy", explain: "In early societies, religion was deeply woven into daily life, festivals, customs and even governance.", explainSteps: ["In ancient times, people's daily routines were often deeply tied to their beliefs.","Festivals, customs and even laws often had religious roots.","So religion played a big role in shaping daily life, festivals and social customs."], explainDiagram: null },
          { q: "Which of these is an example of an ancient Indian religious text?", options: ["The Vedas", "A modern newspaper", "A trade ledger", "A city map"], answer: 0, difficulty: "easy", explain: "The Vedas are among the oldest known religious texts, central to early Indian religious and cultural life.", explainSteps: ["Ancient India produced some of the world's oldest surviving religious writings.","Among these, one collection stands out as especially old and influential.","That's the Vedas."], explainDiagram: null },
          { q: "How did religious beliefs sometimes influence social organisation in early societies?", options: ["They could shape ideas about roles, duties and status within the community", "Religion never affected how society was organised", "Only economics affected society, never religion", "Religious beliefs only affected art, not society"], answer: 0, difficulty: "medium", explain: "Religious beliefs often shaped ideas about people's roles, responsibilities, and status, deeply influencing social organisation in early times.", explainSteps: ["Religious beliefs often included ideas about people's duties and place in society.","These ideas could shape how roles and status were organised within a community.","So religion sometimes directly influenced early social organisation."], explainDiagram: null },
          { q: "Why did new religious movements sometimes emerge in ancient India challenging existing practices?", options: ["Some thinkers questioned existing rituals and social norms, leading to new spiritual ideas", "New religions never emerged in ancient India", "All religious ideas remained exactly the same forever", "New movements had no relation to social norms"], answer: 0, difficulty: "hard", explain: "Movements like Buddhism and Jainism emerged partly as responses to existing rituals and social hierarchies, offering alternative spiritual paths.", explainSteps: ["Not everyone always agreed with existing rituals or social norms.","Some thinkers questioned these practices, seeking new spiritual answers.","That questioning is exactly what led to new religious movements emerging."], explainDiagram: null },
          { q: "How might studying ancient religious practices help us understand early Indian society more broadly?", options: ["Religious practices often reflected broader social values, structures and ways of life", "Religious practices tell us nothing about society", "Only trade records can reveal social structures", "Ancient religion had no connection to social life"], answer: 0, difficulty: "hard", explain: "Since religion was so deeply tied to daily life, examining ancient religious practices offers valuable insight into the broader values and social structures of early societies.", explainSteps: ["Since religion touched nearly every part of daily life back then, it reflects a lot about that society.","Studying old religious practices can reveal broader social values and structures.","That's why ancient religious practices are a useful window into early Indian society."], explainDiagram: null }
        ],
        terms: [
          { term: "Religion", def: "A system of beliefs and practices, often involving worship of a higher power" },
          { term: "Ritual", def: "A set of actions performed as part of a religious or cultural custom" },
          { term: "Vedas", def: "Ancient Indian religious texts among the oldest in the world" },
          { term: "Social norm", def: "An accepted standard of behaviour within a community" },
          { term: "Reform movement", def: "An effort to change existing social or religious practices" },
          { term: "Belief system", def: "A set of ideas and values that guide how people understand the world" }
        ]
      },
      {
        id: "devotion-love-god",
        name: "Devotion and Love towards God",
        blurb: "Theme V: Religion and Society — the Bhakti and Sufi traditions",
        questions: [
          { q: "What is the Bhakti movement mainly known for?", options: ["Promoting deep personal devotion to God, often without complex rituals", "Rejecting all forms of spirituality", "Only building large temples", "Focusing solely on trade"], answer: 0, difficulty: "easy", explain: "The Bhakti movement emphasised personal, heartfelt devotion to God, often expressed through simple prayer and song rather than elaborate rituals.", explainSteps: ["The Bhakti movement's core idea wasn't about complicated ceremony.","It focused on simple, heartfelt, personal devotion to God.","So Bhakti is mainly known for promoting deep personal devotion, without complex rituals."], explainDiagram: null },
          { q: "What is the Sufi tradition associated with?", options: ["A mystical, devotional strand within Islam emphasizing love for God", "A style of ancient Indian architecture only", "A form of early currency", "A type of ancient map-making"], answer: 0, difficulty: "easy", explain: "Sufism is a mystical tradition within Islam that emphasises deep personal love and closeness to God.", explainSteps: ["Within Islam, one tradition especially emphasises love and closeness to God through mystical experience.","That mystical, devotional strand is called Sufism.","So the Sufi tradition is associated with mystical, loving devotion within Islam."], explainDiagram: null },
          { q: "Why were poet-saints of the Bhakti movement often popular among common people?", options: ["They composed devotional songs and poems in the local language, making spirituality accessible to everyone", "They only spoke in a language nobody understood", "They rejected all forms of devotion", "They were only followed by kings"], answer: 0, difficulty: "medium", explain: "By using local languages and simple, heartfelt expressions, Bhakti poet-saints made devotional spirituality accessible to ordinary people, not just scholars.", explainSteps: ["Bhakti poet-saints often wrote and sang in everyday, local languages — not complex scholarly ones.","That made their devotional message understandable to ordinary people, not just scholars.","That accessibility is why they became so popular among common people."], explainDiagram: null },
          { q: "How did Bhakti and Sufi traditions sometimes encourage social harmony?", options: ["By emphasizing love for God over rigid rituals or social divisions", "By strictly enforcing social hierarchies", "By discouraging any spiritual expression", "They had no impact on social attitudes"], answer: 0, difficulty: "medium", explain: "Both traditions often stressed personal devotion and love over rigid rituals, which sometimes helped bridge social and religious divides.", explainSteps: ["Both traditions stressed love and devotion to God as the main path, not rigid rules or social rank.","That focus could soften strict social divisions between groups.","So this shared emphasis on love-over-ritual sometimes encouraged social harmony."], explainDiagram: null },
          { q: "Why might the use of local languages by Bhakti and Sufi saints have had a lasting cultural impact?", options: ["It helped preserve and enrich regional languages and literature over time", "Local languages disappeared because of these movements", "It had no lasting effect on language or culture", "Only Sanskrit texts survived from this era"], answer: 0, difficulty: "hard", explain: "By composing devotional works in regional languages, Bhakti and Sufi saints helped enrich and preserve those languages' literary traditions for future generations.", explainSteps: ["Writing devotional songs and poems in local languages meant those languages got used, developed and preserved.","Over generations, this built up a rich body of regional literature.","That's the lasting cultural impact of using local languages in devotion."], explainDiagram: null },
          { q: "How did these devotional traditions sometimes interact with existing social structures of their time?", options: ["Some saints openly questioned rigid social divisions through their message of equal devotion before God", "They always fully supported every existing social division", "They had no connection to social structures at all", "They only existed among ruling elites"], answer: 0, difficulty: "hard", explain: "Many Bhakti and Sufi saints preached that devotion to God mattered more than social status, subtly challenging rigid divisions of their time.", explainSteps: ["Some saints taught that devotion to God mattered more than a person's social rank or birth.","That message quietly challenged the rigid social divisions of the time.","So these traditions sometimes interacted with (and questioned) existing social structures."], explainDiagram: null }
        ],
        terms: [
          { term: "Bhakti movement", def: "A devotional movement emphasising personal love and devotion to God" },
          { term: "Sufi tradition", def: "A mystical, devotional tradition within Islam" },
          { term: "Poet-saint", def: "A devotional poet whose work expressed spiritual love and teachings" },
          { term: "Devotion", def: "Deep love and dedication, especially toward God" },
          { term: "Mysticism", def: "A spiritual approach seeking direct, personal experience of the divine" },
          { term: "Regional language", def: "A language spoken in a particular region, often used in local literature" }
        ]
      },
      {
        id: "language-writing-books",
        name: "Language, Writing and Great Books",
        blurb: "Theme VI: Culture and Communication — the story of scripts and literature",
        questions: [
          { q: "What is a 'script' in the context of language?", options: ["A movie screenplay only", "The set of written symbols used to represent a language", "A type of spoken dialect", "A musical composition"], answer: 1, difficulty: "easy", explain: "A script is the set of written characters or symbols used to write down a language, like the Telugu or Devanagari script.", explainSteps: ["To write a language down, you need a set of agreed symbols to represent its sounds.","That set of written symbols is called a script.","So a script represents a language in written form."], explainDiagram: null },
          { q: "Why was the invention of writing considered a major milestone in human history?", options: ["It allowed knowledge and records to be preserved and shared across time", "Writing had no real impact on society", "It replaced the need for speaking", "It was only used for decoration"], answer: 0, difficulty: "easy", explain: "Writing allowed people to record information, stories, and knowledge that could be preserved and passed to future generations.", explainSteps: ["Before writing, knowledge could only be passed on by memory and speech — easy to lose or change.","Writing let information be recorded permanently and shared across distance and time.","That's why the invention of writing was such a major milestone."], explainDiagram: "timelineEmpire" },
          { q: "Which of these is an example of an ancient Indian epic (great book)?", options: ["The Ramayana", "A modern textbook", "A newspaper", "A trade contract"], answer: 0, difficulty: "medium", explain: "The Ramayana is one of ancient India's great epics, passed down and cherished for centuries.", explainSteps: ["Ancient India produced several long, celebrated epic stories.","One of the most famous of these great books is a well-known epic.","That epic is the Ramayana."], explainDiagram: null },
          { q: "How did the development of paper and printing eventually change the spread of knowledge?", options: ["It made copying and sharing books much faster and more widespread", "It had no effect on the spread of knowledge", "It made knowledge harder to access", "Printing only appeared in the last few decades"], answer: 0, difficulty: "medium", explain: "Paper and printing technology made it far easier and cheaper to produce and share multiple copies of texts, spreading knowledge more widely.", explainSteps: ["Before paper and printing, copying a book by hand took huge time and effort.","Paper and printing technology made producing multiple copies much faster and cheaper.","That's why they dramatically sped up how knowledge could spread."], explainDiagram: null },
          { q: "Why might different regions of India have developed different scripts over time?", options: ["Different languages and cultural histories led to the development of distinct writing systems", "All of India has always used exactly one script", "Scripts have no connection to language or culture", "Only one region in India ever developed writing"], answer: 0, difficulty: "hard", explain: "As different languages and cultures developed across India's regions, each often created or adapted its own script suited to that language's sounds.", explainSteps: ["Different regions of India speak different languages, shaped by their own histories.","Each language often developed its own way of representing its unique sounds in writing.","That's why so many different scripts emerged across India's regions."], explainDiagram: null },
          { q: "How do 'great books' from ancient times, like epics, continue to influence culture today?", options: ["Their stories, values and characters are still referenced in art, festivals and daily conversation", "They have been completely forgotten", "They have no relevance to modern culture", "They are banned from being discussed today"], answer: 0, difficulty: "hard", explain: "Ancient epics and texts continue to shape art, festivals, moral lessons, and everyday cultural references even in modern times.", explainSteps: ["Great epics carry stories, values and characters that stay memorable across generations.","Those elements keep showing up in art, festivals and everyday conversation today.","That's how ancient 'great books' continue to influence culture even now."], explainDiagram: null }
        ],
        terms: [
          { term: "Script", def: "The set of written symbols used to represent a language" },
          { term: "Epic", def: "A long traditional story, often in verse, celebrating heroic deeds" },
          { term: "Manuscript", def: "A handwritten document, often an early form of a book" },
          { term: "Literature", def: "Written works valued for their artistic or intellectual content" },
          { term: "Printing", def: "The technology of producing multiple copies of text using a press" },
          { term: "Oral tradition", def: "Stories and knowledge passed down by speech rather than writing" }
        ]
      },
      {
        id: "sculptures-buildings",
        name: "Sculptures and Buildings",
        blurb: "Theme VI: Culture and Communication — ancient Indian art and architecture",
        questions: [
          { q: "What is a 'sculpture'?", options: ["A carved or shaped artistic figure, often in stone or metal", "A type of ancient coin", "A written poem", "A style of music"], answer: 0, difficulty: "easy", explain: "A sculpture is a three-dimensional work of art, carved or shaped from materials like stone, wood or metal.", explainSteps: ["Think of a statue or carved figure, made from a solid material.","That kind of shaped, three-dimensional artwork is called a sculpture.","So a sculpture is a carved or shaped figure, often in stone or metal."], explainDiagram: null },
          { q: "Which of these is a famous example of ancient Indian architecture?", options: ["The Sanchi Stupa", "The Eiffel Tower", "The Great Wall of China", "The Colosseum"], answer: 0, difficulty: "easy", explain: "The Sanchi Stupa is a celebrated ancient Buddhist monument, showcasing early Indian architectural and sculptural skill.", explainSteps: ["Ancient India has several celebrated architectural monuments.","One especially famous example is a dome-shaped Buddhist monument.","That's the Sanchi Stupa."], explainDiagram: null },
          { q: "What purpose did many ancient temples and stupas serve, beyond religious worship?", options: ["They often served as centres of art, learning, and community gathering", "They had no purpose besides decoration", "They were only used for storage", "They were built purely by accident"], answer: 0, difficulty: "medium", explain: "Beyond worship, many ancient religious structures also functioned as centres of art, education, and community life.", explainSteps: ["Ancient temples and stupas weren't only places for prayer.","They often gathered artists, teachers and community members together too.","So they served as centres of art, learning and community gathering, beyond just worship."], explainDiagram: null },
          { q: "Why do carvings on ancient temples often depict stories from epics or religious texts?", options: ["To visually teach and remind people of moral and religious stories", "Carvings were purely random with no meaning", "To hide secret messages only kings could read", "They were symbols for trade goods"], answer: 0, difficulty: "medium", explain: "Carvings often illustrated well-known stories to visually teach religious and moral lessons to people who may not have been able to read.", explainSteps: ["Many people in ancient times couldn't read written texts.","Carved images from epics or religious stories could still teach lessons visually.","That's exactly why temple carvings often depicted these stories."], explainDiagram: null },
          { q: "How can studying ancient sculptures and buildings help historians understand the past?", options: ["They reveal information about the technology, beliefs, and daily life of the people who made them", "They tell us nothing useful about history", "Only written texts are useful for history, never art", "Sculptures are always purely decorative with no historical value"], answer: 0, difficulty: "hard", explain: "Ancient art and architecture provide valuable clues about the technology, skills, beliefs and daily life of the societies that created them.", explainSteps: ["Every sculpture and building reflects the tools, skills, and beliefs of the people who made it.","Studying these details reveals clues about ancient technology and daily life.","That's how ancient art and architecture help historians understand the past."], explainDiagram: null },
          { q: "Why might building materials and construction techniques have varied across different regions of ancient India?", options: ["Availability of local materials like stone, brick, or wood shaped regional building styles", "All regions always used identical materials and techniques", "Construction techniques never varied throughout history", "Only one material was ever used across all of India"], answer: 0, difficulty: "hard", explain: "Different regions had different locally available materials (stone, brick, wood), which shaped distinct architectural styles and techniques over time.", explainSteps: ["Builders used whatever materials were available nearby: stone in some regions, brick or wood in others.","That local availability shaped each region's typical building style.","So construction techniques varied by what materials were locally accessible."], explainDiagram: null }
        ],
        terms: [
          { term: "Sculpture", def: "A three-dimensional artwork, often carved from stone, wood or metal" },
          { term: "Stupa", def: "A dome-shaped Buddhist monument, often containing relics" },
          { term: "Architecture", def: "The art and science of designing and constructing buildings" },
          { term: "Carving", def: "A design or figure cut into a material like stone or wood" },
          { term: "Monument", def: "A structure built to commemorate a person or event" },
          { term: "Relief", def: "A sculpture where figures are carved to stand out from a flat background" }
        ]
      },
      {
        id: "greenery-in-telangana",
        name: "Greenery in Telangana",
        blurb: "Theme VI: Culture and Communication — forests, environment & conservation efforts",
        questions: [
          { q: "Why are forests and green cover important for a region like Telangana?", options: ["They help maintain rainfall, soil health, and provide habitats for wildlife", "Forests have no real environmental role", "Green cover only affects appearance, not the environment", "Forests increase pollution"], answer: 0, difficulty: "easy", explain: "Forests play a crucial role in maintaining rainfall patterns, soil quality, and providing habitats for wildlife.", explainSteps: ["Trees do more than look nice — they influence local weather and habitats.","They help maintain rainfall patterns, keep soil healthy, and shelter wildlife.","That's why forests and green cover matter so much for a region like Telangana."], explainDiagram: null },
          { q: "What is a well-known tree plantation initiative associated with increasing green cover in Telangana?", options: ["Haritha Haram", "Green Revolution only", "Blue Revolution", "White Revolution"], answer: 0, difficulty: "easy", explain: "Haritha Haram is a large-scale tree plantation programme aimed at increasing Telangana's green cover.", explainSteps: ["Telangana has run a large tree-planting programme to boost green cover.","That well-known programme has a specific name.","It's called Haritha Haram."], explainDiagram: null },
          { q: "Why might urban areas specifically need more tree planting efforts?", options: ["Cities often have less natural green cover due to buildings and roads, affecting air quality and temperature", "Cities never need trees", "Urban trees have no benefits at all", "Only villages need green cover"], answer: 0, difficulty: "medium", explain: "Urban areas often lose green cover to construction, so planting trees helps improve air quality and reduce local temperatures.", explainSteps: ["Cities are full of buildings and roads, which naturally push out green space.","Less greenery in cities can worsen air quality and raise local temperatures.","That's why urban areas especially benefit from extra tree-planting efforts."], explainDiagram: null },
          { q: "How does increasing forest cover help combat the effects of climate change?", options: ["Trees absorb carbon dioxide, helping reduce greenhouse gases in the atmosphere", "Trees have no effect on carbon dioxide levels", "Forests increase greenhouse gases", "Climate change is unrelated to forests"], answer: 0, difficulty: "medium", explain: "Trees absorb carbon dioxide during photosynthesis, helping to reduce the greenhouse gases that contribute to climate change.", explainSteps: ["Trees pull carbon dioxide out of the air during photosynthesis.","Less CO2 in the atmosphere means fewer greenhouse gases trapping heat.","So more trees directly help reduce the greenhouse gases driving climate change."], explainDiagram: null },
          { q: "Why is community participation often considered essential for the long-term success of tree plantation drives?", options: ["Local involvement helps ensure trees are cared for and protected after planting", "Community involvement has no impact on tree survival", "Only government workers can care for trees", "Trees need no care after being planted"], answer: 0, difficulty: "hard", explain: "Trees need ongoing care like watering and protection, so involving local communities greatly improves survival rates long after the initial planting.", explainSteps: ["A newly planted tree needs ongoing care — watering, protection from animals, and time to grow.","If the local community stays involved, those young trees are far more likely to survive.","That's why community participation is considered essential for a plantation drive's long-term success."], explainDiagram: null },
          { q: "How might loss of forest cover in a region affect local farming and water availability over time?", options: ["Reduced forests can disrupt rainfall patterns and increase soil erosion, harming farming and water sources", "Forest loss has no connection to farming or water", "Less forest always improves farming conditions", "Water availability is completely unrelated to forest cover"], answer: 0, difficulty: "hard", explain: "Forests help regulate rainfall and protect soil from erosion; losing them can disrupt local water cycles and reduce farmland fertility over time.", explainSteps: ["Forests help hold soil in place and regulate how water moves through an area.","Without enough tree cover, rainfall patterns can shift and soil can erode more easily.","That disruption directly harms both farming and water availability nearby."], explainDiagram: null }
        ],
        terms: [
          { term: "Green cover", def: "The extent of land covered by trees, forests and vegetation" },
          { term: "Haritha Haram", def: "A large-scale tree plantation programme in Telangana" },
          { term: "Conservation", def: "The careful protection and management of natural resources" },
          { term: "Deforestation", def: "The clearing or loss of forest cover" },
          { term: "Climate change", def: "Long-term shifts in temperature and weather patterns" },
          { term: "Biodiversity", def: "The variety of living things (plants, animals) in an environment" }
        ]
      }
    ]
  },
  english: {
    name: "English",
    icon: "📖",
    color: "#FF6B5B",
    tagline: "Grammar, words & good stories",
    chapters: [
      {
        id: "peace-and-harmony",
        name: "Unit 1: Peace and Harmony",
        blurb: "Peace and Harmony · I Want Peace (poem) · Grand Contest in the Forest",
        questions: [
          { q: "Which word means almost the same as 'peace'?", options: ["Conflict", "Harmony", "Anger", "Noise"], answer: 1, difficulty: "easy", explain: "'Harmony' means living together in agreement and calm, very close in meaning to 'peace'.", explainSteps: ["Think of words close in meaning to 'peace' — calm, agreement, togetherness.","'Harmony' means living together in agreement and calm — very close to 'peace'.","So harmony is the best match."], explainDiagram: null },
          { q: "Which sentence uses an adjective correctly to describe a feeling?", options: ["She feel happy today.", "She is a happy girl.", "She happy is today.", "She happiness today."], answer: 1, difficulty: "easy", explain: "'Happy' is an adjective describing 'girl' - it correctly follows the verb 'is' to describe a noun.", explainSteps: ["An adjective describes a noun — here, the girl's feeling.","'She is a happy girl' places 'happy' correctly right before the noun it describes.","The other options break normal word order, so this one is grammatically correct."], explainDiagram: null },
          { q: "What is the opposite of 'harmony'?", options: ["Discord", "Silence", "Friendship", "Kindness"], answer: 0, difficulty: "medium", explain: "'Discord' means disagreement or conflict, the opposite of harmonious peace.", explainSteps: ["An opposite means the reverse meaning.","Harmony is agreement and calm; the reverse is disagreement and clashing.","'Discord' means exactly that disagreement — the opposite of harmony."], explainDiagram: null },
          { q: "Which of these words describes someone who helps settle arguments peacefully?", options: ["Warrior", "Peacemaker", "Rival", "Stranger"], answer: 1, difficulty: "medium", explain: "A 'peacemaker' is someone who works to bring about peace between people who disagree.", explainSteps: ["Think about someone whose JOB is to calm conflicts down.","Someone who helps settle arguments peacefully is doing exactly that job.","That person is called a peacemaker."], explainDiagram: null },
          { q: "In a story where forest animals hold a 'grand contest', what value do such community stories usually aim to teach?", options: ["That winning is the only thing that matters", "Cooperation, fairness or getting along despite differences", "That contests should always be avoided", "That animals cannot cooperate"], answer: 1, difficulty: "hard", explain: "Stories about community contests among animals typically teach lessons about fairness, cooperation, and living together peacefully.", explainSteps: ["A 'grand contest' among forest animals is a classic community story setup.","Such stories usually aren't really about winning — they're about how the characters treat each other.","The lesson is almost always cooperation, fairness, or getting along despite differences."], explainDiagram: null },
          { q: "Which sentence correctly uses 'because' to explain a reason for peace?", options: ["We celebrated because we made peace.", "We celebrated because peace we made.", "Because we made peace we.", "We because celebrated made peace."], answer: 0, difficulty: "hard", explain: "'Because' introduces a reason clause; the correct order is main clause + because + reason: 'We celebrated because we made peace.'", explainSteps: ["'Because' introduces a REASON, and reasons come after the main statement.","Correct order: [main idea] + because + [reason].","'We celebrated because we made peace' follows that pattern correctly."], explainDiagram: null }
        ],
        terms: [
          { term: "Peace", def: "A state of calm with no conflict or war" },
          { term: "Harmony", def: "Agreement and togetherness between people or things" },
          { term: "Cooperation", def: "Working together toward a shared goal" },
          { term: "Conflict", def: "A disagreement or clash between people or groups" },
          { term: "Peacemaker", def: "A person who helps resolve disputes peacefully" },
          { term: "Unity", def: "The state of being joined together as one" }
        ]
      },
      {
        id: "telangana-pride",
        name: "Unit 2: Telangana, The Pride of the People",
        blurb: "Telangana, The Pride of the People · In the Bazaars of Hyderabad (poem) · Bammera Pothana",
        questions: [
          { q: "Which of these is a proper noun?", options: ["State", "Telangana", "River", "City"], answer: 1, difficulty: "easy", explain: "'Telangana' names a specific state, making it a proper noun, always written with a capital letter.", explainSteps: ["A proper noun names a SPECIFIC person, place or thing, and starts with a capital letter.","'Telangana' names one specific state.","So 'Telangana' is the proper noun (the others are general/common nouns)."], explainDiagram: null },
          { q: "'In the Bazaars of Hyderabad' is a poem describing a busy...", options: ["Marketplace", "Forest", "Ocean", "Desert"], answer: 0, difficulty: "easy", explain: "A 'bazaar' is a marketplace, and the poem paints a vivid picture of the sights and sounds of Hyderabad's bazaars.", explainSteps: ["'Bazaar' is another word for a busy marketplace.","The poem's title places it directly 'in the Bazaars of Hyderabad'.","So the poem describes a busy marketplace."], explainDiagram: null },
          { q: "Bammera Pothana, referenced in this unit, is celebrated as a great...", options: ["Telugu poet, known for the Andhra Mahabhagavatam", "Modern scientist", "Foreign explorer", "Sports player"], answer: 0, difficulty: "medium", explain: "Bammera Pothana was a renowned Telugu poet, best known for his devotional work the Andhra Mahabhagavatam.", explainSteps: ["Bammera Pothana is a name tied to classical Telugu literature.","He's best remembered for translating a major religious text into Telugu.","That famous work is the Andhra Mahabhagavatam, making him a celebrated Telugu poet."], explainDiagram: null },
          { q: "Which sentence correctly uses an adjective to describe pride in one's state?", options: ["We proud of our state are.", "We are proud of our state.", "Proud we are our state of.", "Our state proud we of are."], answer: 1, difficulty: "medium", explain: "'We are proud of our state' places the adjective 'proud' correctly after the verb 'are'.", explainSteps: ["The adjective 'proud' needs to sit naturally after the verb 'are', describing 'we'.","'We are proud of our state' places 'proud' correctly right after 'are'.","The other options scramble the natural word order."], explainDiagram: null },
          { q: "Poems describing bustling markets often use vivid words appealing to which senses?", options: ["Only touch", "Sight, sound and smell together", "Only taste", "No senses at all"], answer: 1, difficulty: "hard", explain: "Descriptive poems about lively places like bazaars often use imagery that appeals to sight, sound, and smell to bring the scene to life.", explainSteps: ["A busy bazaar is full of colours, calling voices, and smells of food and spices.","Good descriptive poetry tries to recreate that full experience for the reader.","So it typically appeals to sight, sound AND smell together."], explainDiagram: null },
          { q: "Which word best captures a feeling of deep respect and admiration for one's homeland?", options: ["Indifference", "Pride", "Boredom", "Anger"], answer: 1, difficulty: "hard", explain: "'Pride' describes a strong feeling of respect and satisfaction, often used to express love for one's homeland or culture.", explainSteps: ["Think of a word describing deep respect and satisfaction toward one's home or heritage.","That specific feeling has one clear name.","'Pride' captures that admiration for one's homeland exactly."], explainDiagram: null }
        ],
        terms: [
          { term: "Bazaar", def: "A marketplace, especially in South Asian and Middle Eastern cities" },
          { term: "Pride", def: "A feeling of deep satisfaction or respect, often for one's achievements or heritage" },
          { term: "Heritage", def: "Traditions, culture and history passed down over generations" },
          { term: "Poet", def: "A person who writes poems" },
          { term: "Devotional", def: "Expressing deep religious feeling or worship" },
          { term: "Imagery", def: "Descriptive language that appeals to the senses" }
        ]
      },
      {
        id: "dollar-and-eleven-cents",
        name: "Unit 3: What Can a Dollar and Eleven Cents Do?",
        blurb: "What Can a Dollar and Eleven Cents Do? · A Nation's Strength (poem) · Wilma Rudolph",
        questions: [
          { q: "A 'dollar' and 'cents' are units of...", options: ["Length", "Money (currency)", "Weight", "Time"], answer: 1, difficulty: "easy", explain: "Dollars and cents are units of currency (money), used in countries like the USA.", explainSteps: ["A dollar and cents are used to buy and pay for things.","That's exactly what currency (money) is for.","So dollars and cents are units of currency."], explainDiagram: null },
          { q: "How many cents make one dollar?", options: ["10", "100", "1000", "50"], answer: 1, difficulty: "easy", explain: "There are 100 cents in one dollar, similar to how there are 100 paise in one rupee.", explainSteps: ["Think of rupees and paise — 100 paise make one rupee.","Dollars and cents work the same way.","100 cents make one dollar."], explainDiagram: null },
          { q: "Wilma Rudolph, referenced in this unit, is remembered as an athlete who overcame childhood illness to become...", options: ["An Olympic gold medal-winning sprinter", "A famous chef", "A painter", "A politician only"], answer: 0, difficulty: "medium", explain: "Wilma Rudolph overcame childhood polio to become a celebrated Olympic sprinter, winning three gold medals at the 1960 Rome Olympics.", explainSteps: ["Wilma Rudolph faced serious childhood illness (polio) early in life.","Despite this, she trained hard and became a track star.","She went on to win Olympic gold medals as a sprinter."], explainDiagram: null },
          { q: "'A Nation's Strength' as a poem title suggests the poem explores what true strength for a country comes from, likely including...", options: ["Only military weapons", "The character and virtues of its people", "Only its size on a map", "Only its wealth"], answer: 1, difficulty: "medium", explain: "Poems titled around a nation's strength often argue that a country's real strength lies in the character, courage and values of its people.", explainSteps: ["A poem titled 'A Nation's Strength' likely isn't just about weapons or wealth.","It probably explores something deeper about what truly makes a country strong.","That's usually the character and values of its people."], explainDiagram: null },
          { q: "Which sentence correctly uses a small amount of money in a meaningful sentence?", options: ["Even a dollar and eleven cents can make a difference when given with kindness.", "A dollar eleven and cents difference kindness make can.", "Kindness has nothing to do with money.", "Money never matters at all."], answer: 0, difficulty: "hard", explain: "This sentence captures the likely theme of the unit: that even a small amount of money, given with genuine kindness, can have real impact.", explainSteps: ["The sentence needs to show that even a tiny amount of money can matter, if given with the right spirit.","'Even a dollar and eleven cents can make a difference when given with kindness' captures that exactly.","It's grammatically correct and matches the likely theme."], explainDiagram: null },
          { q: "What quality does Wilma Rudolph's life story most likely inspire in readers?", options: ["Giving up when facing hardship", "Perseverance and determination despite obstacles", "Avoiding all challenges", "Relying only on luck"], answer: 1, difficulty: "hard", explain: "Wilma Rudolph's journey from illness to Olympic champion is a powerful example of perseverance and determination.", explainSteps: ["Wilma Rudolph overcame illness and went on to Olympic success.","That journey from hardship to triumph highlights one quality above all.","That quality is perseverance and determination despite obstacles."], explainDiagram: null }
        ],
        terms: [
          { term: "Currency", def: "The system of money used in a country" },
          { term: "Perseverance", def: "Continued effort despite difficulties" },
          { term: "Determination", def: "Firmness of purpose in achieving a goal" },
          { term: "Generosity", def: "The quality of being kind and giving" },
          { term: "Athlete", def: "A person trained to compete in sports requiring physical skill" },
          { term: "Obstacle", def: "Something that blocks progress or achievement" }
        ]
      },
      {
        id: "an-adventure",
        name: "Unit 4: An Adventure",
        blurb: "An Adventure · The Naughty Boy (poem) · Tanaji Malusare",
        questions: [
          { q: "Which tense is usually used to narrate a past adventure story?", options: ["Future tense", "Past tense", "Present tense only", "No tense is needed"], answer: 1, difficulty: "easy", explain: "Adventure stories describing events that already happened are usually told in the past tense, e.g., 'They climbed the hill.'", explainSteps: ["An adventure story describes events that ALREADY happened.","Stories describing past events use the past tense.","So past tense is used to narrate a past adventure."], explainDiagram: null },
          { q: "Choose the correct past tense of 'go' for a sentence like: 'They ___ into the forest.'", options: ["goes", "go", "went", "going"], answer: 2, difficulty: "easy", explain: "'Go' is an irregular verb - its simple past tense is 'went'.", explainSteps: ["'Go' is an irregular verb — it doesn't just add '-ed'.","Its special past tense form needs to be memorised.","That form is 'went': 'They went into the forest.'"], explainDiagram: null },
          { q: "Tanaji Malusare, featured in this unit, is remembered in history as a brave...", options: ["Maratha military commander known for the Battle of Sinhagad", "Foreign explorer", "Musician", "Farmer only"], answer: 0, difficulty: "medium", explain: "Tanaji Malusare was a valiant Maratha military leader under Shivaji, famed for his courageous role in the Battle of Sinhagad.", explainSteps: ["Tanaji Malusare is a name from Maratha history under Shivaji.","He's remembered for his bravery in a specific famous battle.","That was the Battle of Sinhagad, where he served as a brave military commander."], explainDiagram: null },
          { q: "Which word best describes a story full of excitement, risk, and unexpected events?", options: ["Adventure", "Routine", "Boredom", "Silence"], answer: 0, difficulty: "medium", explain: "An 'adventure' is an exciting or daring experience, often involving risk and the unexpected.", explainSteps: ["Think of a word for a story full of excitement, risk, and surprises.","That exact word describes this kind of thrilling experience.","It's 'adventure'."], explainDiagram: null },
          { q: "In 'The Naughty Boy', the word 'naughty' most likely describes a child who is...", options: ["Extremely well-behaved and quiet", "Mischievous or playfully disobedient", "Sad and withdrawn", "Very serious and formal"], answer: 1, difficulty: "hard", explain: "'Naughty' typically describes playful mischief or minor disobedience, often in a light-hearted, child-like way.", explainSteps: ["'Naughty' usually describes minor, harmless misbehaviour, often in children.","It's a light-hearted word, not a serious or sad one.","So it most likely describes a child who is mischievous or playfully disobedient."], explainDiagram: null },
          { q: "Which sentence best narrates an adventurous past event using correct past tense?", options: ["We climb the mountain and see amazing view.", "We climbed the mountain and saw an amazing view.", "We will climb the mountain and saw a view.", "We climbing the mountain seeing view."], answer: 1, difficulty: "hard", explain: "'Climbed' and 'saw' are both correctly in the past tense, matching a story about something that already happened.", explainSteps: ["Since this narrates a PAST adventure, both verbs need the correct past tense.","'Climbed' and 'saw' are both correctly in the past tense.","'We climbed the mountain and saw an amazing view' is the grammatically correct choice."], explainDiagram: null }
        ],
        terms: [
          { term: "Adventure", def: "An exciting or daring experience, often involving risk" },
          { term: "Courage", def: "The ability to face danger or difficulty bravely" },
          { term: "Mischievous", def: "Playfully naughty or fond of harmless pranks" },
          { term: "Commander", def: "A person who leads and directs an army or force" },
          { term: "Valiant", def: "Showing courage or determination" },
          { term: "Narrate", def: "To tell a story or give an account of events" }
        ]
      },
      {
        id: "plant-a-tree",
        name: "Unit 5: Plant a Tree",
        blurb: "Plant a Tree · If a Tree Could Talk (poem) · Children, Speak Up!",
        questions: [
          { q: "Which sentence is an example of an imperative (command) sentence?", options: ["Plant a tree today.", "She planted a tree.", "Did they plant a tree?", "The tree is tall."], answer: 0, difficulty: "easy", explain: "Imperative sentences give commands or instructions, often starting with a verb, like 'Plant a tree today.'", explainSteps: ["An imperative sentence gives a command or instruction, often starting with a verb.","'Plant a tree today' starts directly with the verb 'plant', giving an instruction.","That's the imperative sentence here."], explainDiagram: null },
          { q: "Why do we plant trees, according to most environmental lessons?", options: ["Trees have no real benefit", "Trees provide oxygen, shade and habitats for animals", "Trees only look nice", "Trees use up all the water"], answer: 1, difficulty: "easy", explain: "Trees provide oxygen, shade, and homes for wildlife, making them essential to a healthy environment.", explainSteps: ["Think about what trees give back to the environment.","They release oxygen, offer shade, and provide homes for animals.","That's why environmental lessons stress planting trees."], explainDiagram: null },
          { q: "In a poem titled 'If a Tree Could Talk', the tree would most likely speak about...", options: ["Its experiences growing, providing shelter, and facing threats like cutting", "Only mathematics", "Space travel", "Cooking recipes"], answer: 0, difficulty: "medium", explain: "Such personified poems typically have the tree reflecting on its life, its role in nature, and concerns like deforestation.", explainSteps: ["A tree given a voice in a poem would likely reflect on its own life experiences.","That includes growing up, sheltering others, and facing dangers like being cut down.","So the poem likely covers all of these themes."], explainDiagram: null },
          { q: "What does 'Children, Speak Up!' likely encourage children to do?", options: ["Stay silent about issues they care about", "Express their opinions and voice concerns confidently", "Avoid speaking about the environment", "Only listen, never speak"], answer: 1, difficulty: "medium", explain: "A title like 'Children, Speak Up!' suggests encouraging children to voice their thoughts and concerns, likely about protecting nature.", explainSteps: ["The title 'Children, Speak Up!' is a direct call to action.","It's encouraging children to not stay silent.","So it likely encourages expressing opinions and concerns confidently."], explainDiagram: null },
          { q: "Which literary technique gives a tree the ability to 'talk' and have feelings in a poem?", options: ["Personification", "Rhyme only", "Alliteration only", "Repetition only"], answer: 0, difficulty: "hard", explain: "Personification is giving human qualities, like speech or feelings, to a non-human thing such as a tree.", explainSteps: ["Giving a tree the ability to 'talk' means giving it a human quality (speech).","The literary technique for giving human qualities to non-human things has a specific name.","That's personification."], explainDiagram: null },
          { q: "Which sentence best uses an imperative to encourage environmental action?", options: ["Save water and plant more trees.", "Water saving trees more plant and.", "Trees plant water save more and.", "More and trees plant water save."], answer: 0, difficulty: "hard", explain: "'Save water and plant more trees' is a clear, correctly ordered imperative sentence giving direct encouragement to act.", explainSteps: ["An imperative sentence gives a direct instruction, often starting with a verb.","'Save water and plant more trees' starts with action verbs and gives clear instructions.","That's the correctly-ordered imperative sentence."], explainDiagram: null }
        ],
        terms: [
          { term: "Imperative sentence", def: "A sentence that gives a command or instruction" },
          { term: "Personification", def: "Giving human qualities to a non-human thing" },
          { term: "Environment", def: "The natural world, including plants, animals, land and air" },
          { term: "Deforestation", def: "The clearing or loss of forests" },
          { term: "Habitat", def: "The natural home of a plant or animal" },
          { term: "Conservation", def: "The protection and careful use of natural resources" }
        ]
      },
      {
        id: "rip-van-winkle",
        name: "Unit 6: Rip Van Winkle",
        blurb: "Rip Van Winkle · My Shadow (poem) · Gulliver's Travels",
        questions: [
          { q: "'Rip Van Winkle' is a classic story, written by which American author, about a man who falls asleep for many years?", options: ["Washington Irving", "William Shakespeare", "Mark Twain", "Charles Dickens"], answer: 0, difficulty: "easy", explain: "'Rip Van Winkle' is a famous short story by American writer Washington Irving, about a man who sleeps for twenty years.", explainSteps: ["'Rip Van Winkle' is a well-known piece of classic American literature.","It was written by a famous early American author.","That author is Washington Irving."], explainDiagram: null },
          { q: "In the story, roughly how long does Rip Van Winkle sleep?", options: ["One night", "One week", "About twenty years", "A hundred years"], answer: 2, difficulty: "easy", explain: "Rip Van Winkle famously falls asleep in the mountains and wakes up about twenty years later, to find the world greatly changed.", explainSteps: ["In the story, Rip falls asleep in the mountains for an unusually long time.","When he wakes, the world has changed dramatically around him.","That sleep lasted about twenty years."], explainDiagram: null },
          { q: "'Gulliver's Travels', also referenced in this unit, was written by which author?", options: ["Jonathan Swift", "Washington Irving", "Robert Louis Stevenson", "Lewis Carroll"], answer: 0, difficulty: "medium", explain: "'Gulliver's Travels' is a classic novel written by the Irish author Jonathan Swift, following the fantastical voyages of Lemuel Gulliver.", explainSteps: ["'Gulliver's Travels' is another classic work referenced alongside Rip Van Winkle.","It was written by a well-known Irish author.","That author is Jonathan Swift."], explainDiagram: null },
          { q: "In Gulliver's Travels, Gulliver visits Lilliput, a land inhabited by...", options: ["Tiny people much smaller than him", "Giant people much larger than him", "Talking animals only", "Robots"], answer: 0, difficulty: "medium", explain: "Lilliput is one of the fictional lands Gulliver visits, inhabited by people who are only a few inches tall.", explainSteps: ["Lilliput is one of the strange lands Gulliver visits on his travels.","Its inhabitants are famously described as unusually small.","They are tiny people, much smaller than Gulliver himself."], explainDiagram: null },
          { q: "In the poem 'My Shadow', what is one likely reason a child finds their shadow puzzling or interesting?", options: ["It copies their movements exactly, appearing and disappearing with light", "It always talks back to them", "It never appears at all", "It only appears at night"], answer: 0, difficulty: "hard", explain: "Poems about a 'shadow' typically explore how it mimics the child's movements, growing, shrinking or disappearing depending on the light.", explainSteps: ["A poem about 'My Shadow' likely explores something curious a child notices.","A shadow follows every movement exactly, yet appears and vanishes with the light.","That mimicking, appearing-and-disappearing quality is likely what puzzles the child."], explainDiagram: null },
          { q: "What common theme connects 'Rip Van Winkle' and 'Gulliver's Travels' as classic tales?", options: ["Both involve a character encountering an unfamiliar, changed, or fantastical world", "Both are about cooking", "Both are strictly factual history books", "Neither involves any journey or change"], answer: 0, difficulty: "hard", explain: "Both stories center on a character who journeys into or wakes up in a strange, transformed world very different from what they knew before.", explainSteps: ["Rip Van Winkle wakes up in a changed world after sleeping 20 years.","Gulliver travels to entirely unfamiliar, fantastical lands.","Both stories share a character encountering an unfamiliar or changed world — that's their common theme."], explainDiagram: null }
        ],
        terms: [
          { term: "Author", def: "A person who writes a book or literary work" },
          { term: "Classic", def: "A well-known literary work valued over a long time" },
          { term: "Fantastical", def: "Imaginative and strange, beyond ordinary reality" },
          { term: "Voyage", def: "A long journey, especially by sea" },
          { term: "Shadow", def: "A dark shape cast when an object blocks light" },
          { term: "Novel", def: "A long fictional story, usually in prose" }
        ]
      },
      {
        id: "pt-usha-golden-girl",
        name: "Unit 7: P.T. Usha, the Golden Girl",
        blurb: "P.T. Usha, the Golden Girl · Indian Cricket Team (poem) · Ranji's Wonderful Bat",
        questions: [
          { q: "P.T. Usha is celebrated in Indian sports history as a famous...", options: ["Track and field sprinter, nicknamed the 'Payyoli Express'", "Chess player", "Singer", "Painter"], answer: 0, difficulty: "easy", explain: "P.T. Usha is a legendary Indian sprinter, often called the 'Payyoli Express' after her hometown Payyoli in Kerala.", explainSteps: ["P.T. Usha is a name strongly associated with Indian track and field.","She earned a famous nickname tied to her hometown, Payyoli.","She's remembered as a sprinter, nicknamed the 'Payyoli Express'."], explainDiagram: null },
          { q: "Which superlative form correctly completes: 'She was one of the ___ athletes of her time.'", options: ["fast", "faster", "fastest", "more fast"], answer: 2, difficulty: "easy", explain: "'Fastest' is the correct superlative form used to describe someone as the most fast among many.", explainSteps: ["'One of the ___ athletes' compares her to ALL athletes of her time — the highest degree.","The superlative form (used for comparing 3+ things) is needed here.","'Fastest' is the correct superlative form of 'fast'."], explainDiagram: null },
          { q: "'Ranji', referenced in the reader 'Ranji's Wonderful Bat', is a name closely linked to the history of which sport in India?", options: ["Cricket", "Football", "Hockey", "Badminton"], answer: 0, difficulty: "medium", explain: "Ranjitsinhji ('Ranji') was a pioneering Indian cricketer, and India's premier domestic cricket tournament, the Ranji Trophy, is named after him.", explainSteps: ["'Ranji' is a name tied to a major domestic tournament in Indian sport.","That tournament, the Ranji Trophy, belongs to one particular sport.","That sport is cricket."], explainDiagram: null },
          { q: "Which comparative sentence correctly compares two athletes' speed?", options: ["She runs fast than him.", "She runs faster than him.", "She runs more faster than him.", "She run fastest than him."], answer: 1, difficulty: "medium", explain: "'Faster than' is the correct comparative structure when comparing two things directly.", explainSteps: ["Comparing exactly TWO athletes needs the comparative form, not the superlative.","The comparative of 'fast' is 'faster', followed by 'than'.","'She runs faster than him' is the grammatically correct comparison."], explainDiagram: null },
          { q: "What quality do sports biographies like P.T. Usha's story typically aim to inspire in young readers?", options: ["Hard work, discipline and dedication to a goal", "Giving up easily", "Avoiding practice", "Ignoring goals altogether"], answer: 0, difficulty: "hard", explain: "Biographies of athletes like P.T. Usha typically highlight the discipline and dedication required to achieve sporting excellence.", explainSteps: ["Sports biographies typically aren't just about winning medals.","They usually highlight the effort behind the success.","That's hard work, discipline and dedication to a goal."], explainDiagram: null },
          { q: "Why might a poem about the 'Indian Cricket Team' use words evoking teamwork and national pride?", options: ["Cricket in India is often associated with strong feelings of team spirit and national pride", "Cricket has no cultural significance in India", "Poems about sports never use emotional language", "Team spirit is irrelevant to cricket"], answer: 0, difficulty: "hard", explain: "Cricket holds deep cultural significance in India, and poems about the national team often celebrate both teamwork and national pride.", explainSteps: ["Cricket holds a special cultural place in India, tied to national pride.","A poem about the Indian Cricket Team would naturally draw on that shared feeling.","So it likely uses words evoking teamwork and national pride."], explainDiagram: null }
        ],
        terms: [
          { term: "Sprinter", def: "An athlete who specialises in fast, short-distance running" },
          { term: "Superlative", def: "The grammatical form showing the highest degree, like 'fastest'" },
          { term: "Comparative", def: "The grammatical form comparing two things, like 'faster'" },
          { term: "Discipline", def: "Controlled, consistent effort toward a goal" },
          { term: "Team spirit", def: "A feeling of togetherness and cooperation within a group" },
          { term: "Biography", def: "A written account of a person's life" }
        ]
      },
      {
        id: "half-the-price",
        name: "Unit 8: Half the Price",
        blurb: "Half the Price · The Sheik's White Donkey",
        questions: [
          { q: "If an item originally costs ₹200 and is now 'half the price', what is its new price?", options: ["₹50", "₹100", "₹150", "₹400"], answer: 1, difficulty: "easy", explain: "Half of ₹200 is ₹100, so 'half the price' means the item now costs ₹100.", explainSteps: ["'Half the price' means dividing the original price by 2.","₹200 ÷ 2 = ₹100.","So the new price is ₹100."], explainDiagram: null },
          { q: "Which word means 'to bargain or negotiate a lower price'?", options: ["Haggle", "Donate", "Waste", "Ignore"], answer: 0, difficulty: "easy", explain: "'Haggle' means to negotiate over a price, often trying to get a lower one.", explainSteps: ["Think of a word for negotiating down a price at a market.","That back-and-forth negotiating has a specific term.","It's 'haggle'."], explainDiagram: null },
          { q: "A 'sheik', as referenced in 'The Sheik's White Donkey', is typically a term for a...", options: ["Leader or chief, especially in Arab communities", "A type of animal", "A cooking utensil", "A musical instrument"], answer: 0, difficulty: "medium", explain: "'Sheik' (or sheikh) is a title used for a leader or chief, especially in Arab cultures.", explainSteps: ["'Sheik' (or sheikh) is a title used in certain cultures.","It refers to someone in a position of leadership or authority.","Specifically, it's a leader or chief, especially in Arab communities."], explainDiagram: null },
          { q: "Which sentence correctly compares two prices using 'cheaper'?", options: ["This one is cheaper than that one.", "This one is more cheaper than that one.", "This one cheaper is than that one.", "This one is cheap than that one."], answer: 0, difficulty: "medium", explain: "'Cheaper than' is the correct comparative structure for comparing prices.", explainSteps: ["Comparing two prices needs the comparative form: 'cheaper than'.","'This one is cheaper than that one' follows the correct comparative structure.","The other options either misuse 'more' or scramble the word order."], explainDiagram: null },
          { q: "Stories involving clever bargaining or trades, like tales about markets and donkeys, often teach a lesson about...", options: ["Honesty, cleverness or the value of fair dealing", "Never trading anything ever", "Avoiding all animals", "Ignoring money completely"], answer: 0, difficulty: "hard", explain: "Folk tales about markets, trades and bargaining often carry lessons about honesty, wit, or the fair value of things.", explainSteps: ["Stories about clever market bargains or trades usually carry a moral lesson.","That lesson is often about being honest, clever, or fair in dealings.","So the theme is honesty, cleverness, or fair dealing."], explainDiagram: null },
          { q: "Which sentence best uses a fraction correctly to describe a price reduction?", options: ["The price dropped by half after the festival sale.", "The price half dropped by after sale festival.", "By half the price the after sale dropped.", "After sale festival by half dropped price the."], answer: 0, difficulty: "hard", explain: "'The price dropped by half after the festival sale' is grammatically correct and clearly expresses the price reduction.", explainSteps: ["The sentence needs correct grammar AND to clearly describe a price reduction.","'The price dropped by half after the festival sale' is both grammatically correct and clear.","The other options scramble the word order and don't make sense."], explainDiagram: null }
        ],
        terms: [
          { term: "Haggle", def: "To negotiate over the price of something" },
          { term: "Sheik", def: "A leader or chief, especially in Arab communities" },
          { term: "Bargain", def: "An agreement on a price, often a good deal" },
          { term: "Comparative", def: "A grammar form used to compare two things, like 'cheaper'" },
          { term: "Trade", def: "The exchange of goods, services or money" },
          { term: "Fair dealing", def: "Honest and just treatment in business or exchange" }
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
        id: "abhinandana",
        name: "అభినందన (Abhinandana)",
        blurb: "Lesson 1 — a lesson of praise, welcome and good wishes",
        questions: [
          { q: "'అభినందన' అనే పదానికి అర్థం ఏమిటి? (What does the word 'అభినందన' mean?)", options: ["Congratulations/greetings", "Anger", "Sadness", "Silence"], answer: 0, difficulty: "easy", explain: "'అభినందన' means congratulations or a warm greeting/felicitation.", explainSteps: ["Think about when this word is used — usually at happy moments, like winning or achieving something.","అభినందన is the word people say to celebrate someone's success.","So it means congratulations or a warm greeting."], explainDiagram: null },
          { q: "Which of these is a common Telugu greeting word?", options: ["నమస్కారం", "కోపం", "భయం", "దుఃఖం"], answer: 0, difficulty: "easy", explain: "'నమస్కారం' is a common respectful greeting used in Telugu.", explainSteps: ["A greeting word is used when meeting or showing respect to someone.","నమస్కారం is said with folded hands as a respectful hello.","So it's a common, respectful Telugu greeting."], explainDiagram: null },
          { q: "'అభినందనలు' (plural form) is typically used to...", options: ["Praise or congratulate someone on an achievement", "Scold someone", "Say goodbye only", "Ask a question"], answer: 0, difficulty: "medium", explain: "అభినందనలు (congratulations) are offered to praise someone for an achievement or good news.", explainSteps: ["The plural form అభినందనలు is used the same way as the singular, just for bigger or repeated praise.","It's said to celebrate someone's achievement.","So it's used to praise or congratulate someone."], explainDiagram: null },
          { q: "Which of these words expresses a similar warm sentiment to 'అభినందన'?", options: ["ప్రశంస (praise)", "నిరాశ (disappointment)", "కోపం (anger)", "భయం (fear)"], answer: 0, difficulty: "medium", explain: "'ప్రశంస' (praise) carries a similarly warm, appreciative sentiment as 'అభినందన'.", explainSteps: ["Look for a word with a similarly warm, appreciative feeling.","ప్రశంస means praise or appreciation — very close in spirit to అభినందన.","So ప్రశంస is the closest match."], explainDiagram: null },
          { q: "How would you correctly frame a sentence congratulating a friend on winning a prize in Telugu?", options: ["బహుమతి గెలిచినందుకు అభినందనలు!", "బహుమతి కోల్పోయినందుకు అభినందనలు!", "అభినందనలు అంటే ఏమిటి?", "బహుమతి ఎక్కడ ఉంది?"], answer: 0, difficulty: "hard", explain: "'బహుమతి గెలిచినందుకు అభినందనలు!' correctly means 'Congratulations for winning the prize!'", explainSteps: ["Start with the reason: గెలిచినందుకు (for winning) + బహుమతి (prize).","Then add the congratulatory word అభినందనలు at the end.","బహుమతి గెలిచినందుకు అభినందనలు! correctly means 'Congratulations for winning the prize!'"], explainDiagram: null }
        ],
        terms: [
          { term: "అభినందన", def: "Congratulations or a warm greeting" },
          { term: "నమస్కారం", def: "A respectful Telugu greeting" },
          { term: "ప్రశంస", def: "Praise or appreciation" },
          { term: "శుభాకాంక్షలు", def: "Best wishes" },
          { term: "సంతోషం", def: "Happiness" },
          { term: "కృతజ్ఞత", def: "Gratitude or thankfulness" }
        ]
      },
      {
        id: "snehabandham",
        name: "స్నేహబంధం (Snehabandham)",
        blurb: "Lesson 2 — the bond of friendship",
        questions: [
          { q: "'స్నేహబంధం' అనే పదం దేనిని సూచిస్తుంది? (What does 'స్నేహబంధం' refer to?)", options: ["The bond of friendship", "A type of food", "A place name", "A number"], answer: 0, difficulty: "easy", explain: "'స్నేహబంధం' means 'the bond of friendship', combining స్నేహం (friendship) and బంధం (bond).", explainSteps: ["Break the word apart: స్నేహం (friendship) + బంధం (bond).","Together, they describe the connection between friends.","So స్నేహబంధం means the bond of friendship."], explainDiagram: null },
          { q: "'స్నేహితుడు' అనే పదానికి అర్థం ఏమిటి? (What does 'స్నేహితుడు' mean?)", options: ["Friend", "Enemy", "Teacher", "Stranger"], answer: 0, difficulty: "easy", explain: "'స్నేహితుడు' means 'friend' in Telugu.", explainSteps: ["This word describes a specific PERSON, not a feeling.","స్నేహితుడు refers to that person you share friendship with.","So it means 'friend'."], explainDiagram: null },
          { q: "Which quality is most associated with true friendship (స్నేహం)?", options: ["Trust and loyalty", "Deception", "Jealousy", "Indifference"], answer: 0, difficulty: "medium", explain: "Trust and loyalty (నమ్మకం) are core qualities associated with genuine friendship.", explainSteps: ["Think about what makes a friendship feel real and lasting.","Being able to rely on and believe in each other matters most.","That's trust and loyalty (నమ్మకం)."], explainDiagram: null },
          { q: "'నమ్మకం' అనే పదానికి అర్థం ఏమిటి?", options: ["Trust", "Fear", "Hunger", "Anger"], answer: 0, difficulty: "medium", explain: "'నమ్మకం' means trust or faith in someone.", explainSteps: ["This word describes believing someone will be honest and reliable.","That exact feeling is called నమ్మకం.","So నమ్మకం means trust."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'Friendship is a valuable bond' in Telugu?", options: ["స్నేహం ఒక విలువైన బంధం.", "స్నేహం ఒక పనికిరాని వస్తువు.", "స్నేహితుడు అంటే శత్రువు.", "బంధం అంటే ఏమిటో తెలియదు."], answer: 0, difficulty: "hard", explain: "'స్నేహం ఒక విలువైన బంధం' correctly translates to 'Friendship is a valuable bond.'", explainSteps: ["Start with స్నేహం (friendship) as the subject.","Add ఒక విలువైన బంధం (a valuable bond) to describe it.","స్నేహం ఒక విలువైన బంధం correctly means 'Friendship is a valuable bond.'"], explainDiagram: null }
        ],
        terms: [
          { term: "స్నేహం", def: "Friendship" },
          { term: "స్నేహితుడు", def: "Friend (male)" },
          { term: "నమ్మకం", def: "Trust" },
          { term: "బంధం", def: "Bond or relationship" },
          { term: "సహాయం", def: "Help or assistance" },
          { term: "విలువ", def: "Value or worth" }
        ]
      },
      {
        id: "varsham",
        name: "వర్షం (Varsham)",
        blurb: "Lesson 3 — rain, monsoon and nature",
        questions: [
          { q: "'వర్షం' అనే పదానికి అర్థం ఏమిటి? (What does 'వర్షం' mean?)", options: ["Rain", "Sun", "Wind", "Snow"], answer: 0, difficulty: "easy", explain: "'వర్షం' means 'rain' in Telugu.", explainSteps: ["Picture water falling from clouds in the sky.","వర్షం is the Telugu word for exactly that.","So వర్షం means rain."], explainDiagram: null },
          { q: "వర్షాకాలం (rainy season) usually brings which important benefit to farmers?", options: ["Water for crops", "More heat", "Less water", "Snowfall"], answer: 0, difficulty: "easy", explain: "The rainy season (వర్షాకాలం) provides essential water for growing crops.", explainSteps: ["During the rainy season, fields finally get the water they need.","That water lets crops grow.","So వర్షాకాలం mainly benefits farmers by providing water for crops."], explainDiagram: null },
          { q: "'మేఘం' అనే పదానికి అర్థం ఏమిటి?", options: ["Cloud", "Star", "Moon", "Fire"], answer: 0, difficulty: "medium", explain: "'మేఘం' means 'cloud' in Telugu.", explainSteps: ["Look up in the sky — fluffy white or grey shapes float there.","మేఘం is the word for that floating water-vapour shape.","So మేఘం means cloud."], explainDiagram: null },
          { q: "Which word describes the sound of thunder in Telugu?", options: ["ఉరుము", "నవ్వు", "పాట", "నిద్ర"], answer: 0, difficulty: "medium", explain: "'ఉరుము' means 'thunder', the loud sound that often accompanies rain.", explainSteps: ["Rain often comes with a loud rumbling sound from the sky.","That rumbling sound has its own Telugu word.","ఉరుము means thunder."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'It is raining heavily today' in Telugu?", options: ["ఈరోజు గట్టిగా వర్షం పడుతోంది.", "ఈరోజు ఎండ బాగా కాస్తోంది.", "ఈరోజు చలిగా లేదు.", "వర్షం అంటే ఏమిటో తెలియదు."], answer: 0, difficulty: "hard", explain: "'ఈరోజు గట్టిగా వర్షం పడుతోంది' correctly means 'It is raining heavily today.'", explainSteps: ["Start with ఈరోజు (today) to set the time.","Add గట్టిగా (heavily) and వర్షం పడుతోంది (rain is falling).","ఈరోజు గట్టిగా వర్షం పడుతోంది correctly means 'It is raining heavily today.'"], explainDiagram: null }
        ],
        terms: [
          { term: "వర్షం", def: "Rain" },
          { term: "మేఘం", def: "Cloud" },
          { term: "ఉరుము", def: "Thunder" },
          { term: "మెరుపు", def: "Lightning" },
          { term: "వర్షాకాలం", def: "The rainy/monsoon season" },
          { term: "నీరు", def: "Water" }
        ]
      },
      {
        id: "lekha",
        name: "లేఖ (Lekha)",
        blurb: "Lesson 4 — writing a proper letter",
        questions: [
          { q: "'లేఖ' అనే పదానికి అర్థం ఏమిటి? (What does 'లేఖ' mean?)", options: ["Letter", "Book", "Song", "Picture"], answer: 0, difficulty: "easy", explain: "'లేఖ' means 'letter', a written message sent to someone.", explainSteps: ["Think of a written message sent to someone far away.","లేఖ is the Telugu word for that written message.","So లేఖ means letter."], explainDiagram: null },
          { q: "A formal Telugu letter usually begins with which kind of respectful address?", options: ["A respectful greeting to the recipient", "No greeting at all", "Only the date", "A random word"], answer: 0, difficulty: "easy", explain: "Formal letters typically begin with a respectful greeting or address to the person receiving it.", explainSteps: ["A formal letter should show respect to the person receiving it right from the start.","That's why it typically opens with a polite, respectful greeting.","So a formal Telugu letter usually begins with a respectful address."], explainDiagram: null },
          { q: "Which part of a letter usually comes at the very end?", options: ["Signature/closing", "The date only", "The address only", "Nothing at all"], answer: 0, difficulty: "medium", explain: "A letter typically ends with a closing remark and the sender's signature.", explainSteps: ["A letter needs to show who wrote it and wrap up politely.","That closing element comes at the very end.","So the signature/closing comes last."], explainDiagram: null },
          { q: "'చిరునామా' అనే పదానికి అర్థం ఏమిటి?", options: ["Address", "Signature", "Date", "Subject"], answer: 0, difficulty: "medium", explain: "'చిరునామా' means 'address', an important part of any letter.", explainSteps: ["A letter needs to reach the right place, so it needs location details.","చిరునామా gives exactly that location information.","So చిరునామా means address."], explainDiagram: null },
          { q: "Which sentence best describes the purpose of writing a 'లేఖ' (letter)?", options: ["To communicate a message, news or feelings to someone at a distance", "To draw a picture", "To sing a song", "To solve a maths problem"], answer: 0, difficulty: "hard", explain: "A letter (లేఖ) is written to communicate news, feelings, or messages to someone who is not present.", explainSteps: ["A letter lets someone share news or feelings without being face-to-face.","That's its whole purpose — bridging distance through writing.","So a లేఖ communicates a message, news or feelings to someone far away."], explainDiagram: null }
        ],
        terms: [
          { term: "లేఖ", def: "Letter" },
          { term: "చిరునామా", def: "Address" },
          { term: "సంతకం", def: "Signature" },
          { term: "తేదీ", def: "Date" },
          { term: "సందేశం", def: "Message" },
          { term: "గ్రహీత", def: "Recipient (the person receiving the letter)" }
        ]
      },
      {
        id: "shataka-sudha",
        name: "శతకసుధ (Shataka Sudha)",
        blurb: "Lesson 5 — a taste of Telugu shataka (verse-collection) poetry",
        questions: [
          { q: "What is a 'శతకం' (shatakam) in Telugu literature?", options: ["A collection of at least 100 short devotional or moral verses", "A single sentence", "A modern novel", "A type of dance"], answer: 0, difficulty: "easy", explain: "A shatakam is a traditional Telugu poetic form consisting of at least 100 verses, often carrying moral or devotional messages.", explainSteps: ["Think of a big collection of short poetic verses, not just one poem.","A శతకం specifically contains at least 100 such verses.","So a shatakam is a collection of at least 100 moral/devotional verses."], explainDiagram: null },
          { q: "Shataka verses often end with a repeated word or phrase called the...", options: ["మకుటం (makutam)", "శీర్షిక", "సంతకం", "చిరునామా"], answer: 0, difficulty: "medium", explain: "The 'మకుటం' is the repeated closing phrase that appears at the end of each verse in a shatakam.", explainSteps: ["Each verse in a shatakam usually ends the same way, like a signature phrase.","That repeated closing phrase has its own name.","It's called మకుటం (makutam)."], explainDiagram: null },
          { q: "What kind of lessons do shataka poems typically teach readers?", options: ["Moral values and wise life lessons", "Only cooking recipes", "Only mathematics", "Only geography facts"], answer: 0, difficulty: "medium", explain: "Shataka poems are prized for teaching moral values and practical wisdom in a memorable, poetic form.", explainSteps: ["Shataka poems aren't just entertainment — they carry deeper messages.","Those messages usually guide readers on how to live well.","So they teach moral values and wise life lessons."], explainDiagram: null },
          { q: "'సుధ' అనే పదానికి అర్థం ఏమిటి? (What does 'సుధ' mean?)", options: ["Nectar/something sweet and precious", "Poison", "Stone", "Fire"], answer: 0, difficulty: "hard", explain: "'సుధ' means nectar or something sweet and precious, often used to describe something delightful, like fine poetry.", explainSteps: ["Think of something sweet, precious, and delightful.","సుధ carries exactly that meaning — like nectar.","So సుధ means nectar, or something sweet and precious."], explainDiagram: null },
          { q: "Why have shataka poems remained popular in Telugu culture for generations?", options: ["Their memorable verse form and timeless moral lessons make them easy to recall and pass down", "They are very hard to remember", "They contain no meaningful lessons", "They were written only recently"], answer: 0, difficulty: "hard", explain: "The rhythmic verse form and universal moral lessons have helped shataka poems stay popular and be passed down through generations.", explainSteps: ["A memorable rhythm and closing phrase make verses easy to remember.","Timeless moral lessons keep them meaningful across generations.","That combination is why shataka poems have stayed popular for so long."], explainDiagram: null }
        ],
        terms: [
          { term: "శతకం", def: "A traditional Telugu poetic collection of at least 100 verses" },
          { term: "మకుటం", def: "The repeated closing phrase in each verse of a shatakam" },
          { term: "పద్యం", def: "A verse or poem" },
          { term: "నీతి", def: "Moral or ethical principle" },
          { term: "సుధ", def: "Nectar; something sweet and precious" },
          { term: "కవి", def: "Poet" }
        ]
      },
      {
        id: "pothana-balyam",
        name: "పోతన బాల్యం (Pothana Balyam)",
        blurb: "Lesson 6 — the childhood of the great poet Pothana",
        questions: [
          { q: "'బాల్యం' అనే పదానికి అర్థం ఏమిటి? (What does 'బాల్యం' mean?)", options: ["Childhood", "Old age", "Marriage", "Death"], answer: 0, difficulty: "easy", explain: "'బాల్యం' means 'childhood', the early years of a person's life.", explainSteps: ["Think of the earliest years of a person's life, before growing up.","బాల్యం refers to exactly that stage of life.","So బాల్యం means childhood."], explainDiagram: null },
          { q: "Bammera Pothana, whose childhood this lesson describes, is remembered as a great Telugu...", options: ["Poet, famous for the Andhra Mahabhagavatam", "Scientist", "Foreign king", "Painter"], answer: 0, difficulty: "easy", explain: "Bammera Pothana was a celebrated Telugu poet, best known for translating the Bhagavata Purana into Telugu as the Andhra Mahabhagavatam.", explainSteps: ["Bammera Pothana is remembered specifically for his writing.","He famously translated a major religious text into Telugu.","That work, the Andhra Mahabhagavatam, makes him a celebrated Telugu poet."], explainDiagram: null },
          { q: "Stories about the childhood of great poets like Pothana often highlight qualities such as...", options: ["Devotion, humility and love for learning from an early age", "Laziness and carelessness", "Dishonesty", "Cruelty toward others"], answer: 0, difficulty: "medium", explain: "Biographical lessons about poets like Pothana often emphasise devotion, humility, and an early passion for learning and literature.", explainSteps: ["Stories about a great poet's early years usually highlight what made them special even as a child.","That often includes deep devotion, humility, and a love for learning.","So these qualities are commonly emphasised in such stories."], explainDiagram: null },
          { q: "'కవిత్వం' అనే పదానికి అర్థం ఏమిటి?", options: ["Poetry", "Farming", "Cooking", "Trading"], answer: 0, difficulty: "medium", explain: "'కవిత్వం' means 'poetry', the art form Pothana became famous for.", explainSteps: ["Think of the art form Pothana became famous for.","కవిత్వం is the Telugu word for that art of writing verses.","So కవిత్వం means poetry."], explainDiagram: null },
          { q: "Why are stories about a famous poet's childhood often included in school lessons?", options: ["To inspire students with examples of early dedication and character", "To teach only historical dates", "They have no educational purpose", "To discourage reading"], answer: 0, difficulty: "hard", explain: "Such biographical lessons are meant to inspire students by showing how dedication and good character can begin in childhood.", explainSteps: ["Lessons about a great person's childhood aren't just history — they're meant to motivate.","Seeing dedication start early shows students it's possible for them too.","That's why such stories are included in school lessons — to inspire."], explainDiagram: null }
        ],
        terms: [
          { term: "బాల్యం", def: "Childhood" },
          { term: "కవిత్వం", def: "Poetry" },
          { term: "భక్తి", def: "Devotion" },
          { term: "వినయం", def: "Humility" },
          { term: "గ్రంథం", def: "A book or literary text" },
          { term: "కవి", def: "Poet" }
        ]
      },
      {
        id: "uduta-sayam",
        name: "ఉడుత సాయం (Uduta Sayam)",
        blurb: "Lesson 7 — the help of a small squirrel",
        questions: [
          { q: "'ఉడుత' అనే పదానికి అర్థం ఏమిటి? (What does 'ఉడుత' mean?)", options: ["Squirrel", "Elephant", "Tiger", "Snake"], answer: 0, difficulty: "easy", explain: "'ఉడుత' means 'squirrel', a small, quick animal.", explainSteps: ["Picture a small, quick, bushy-tailed animal that climbs trees.","ఉడుత is the Telugu word for that animal.","So ఉడుత means squirrel."], explainDiagram: null },
          { q: "'సాయం' అనే పదానికి అర్థం ఏమిటి? (What does 'సాయం' mean?)", options: ["Help/assistance", "Danger", "Silence", "Distance"], answer: 0, difficulty: "easy", explain: "'సాయం' means 'help' or 'assistance'.", explainSteps: ["Think of someone giving support to another in need.","సాయం describes exactly that kind of support.","So సాయం means help or assistance."], explainDiagram: null },
          { q: "Stories about small animals like squirrels helping in a big task often teach that...", options: ["Even small efforts and creatures can make a meaningful contribution", "Only big and strong beings can help", "Small creatures are useless", "Helping others is unnecessary"], answer: 0, difficulty: "medium", explain: "Such stories often teach that even small contributions matter, and every effort - however small - can be valuable.", explainSteps: ["A tiny squirrel helping with a big job seems surprising at first.","But the story usually shows that even small efforts genuinely matter.","So the lesson is: small efforts and creatures CAN make a real contribution."], explainDiagram: null },
          { q: "'ధైర్యం' అనే పదానికి అర్థం ఏమిటి?", options: ["Courage", "Fear", "Hunger", "Sleep"], answer: 0, difficulty: "medium", explain: "'ధైర్యం' means 'courage' or bravery.", explainSteps: ["Think of the quality needed to face something scary or difficult.","ధైర్యం describes exactly that inner strength.","So ధైర్యం means courage."], explainDiagram: null },
          { q: "Why might a lesson pair a tiny squirrel with a task usually done by much bigger creatures?", options: ["To highlight that willingness to help matters more than size or strength", "To show that small animals are never useful", "Because the story has no real message", "To teach only about animal habitats"], answer: 0, difficulty: "hard", explain: "Pairing a small creature with a big task typically emphasises the moral that willingness and effort matter more than size or strength.", explainSteps: ["Pairing a small creature with a big task creates a striking contrast.","That contrast makes one point stand out clearly: willingness matters more than size.","So that's likely why the lesson uses a tiny squirrel for a big job."], explainDiagram: null }
        ],
        terms: [
          { term: "ఉడుత", def: "Squirrel" },
          { term: "సాయం", def: "Help or assistance" },
          { term: "ధైర్యం", def: "Courage" },
          { term: "శ్రమ", def: "Effort or hard work" },
          { term: "చిన్న", def: "Small" },
          { term: "గొప్ప", def: "Great or noble" }
        ]
      },
      {
        id: "cheruvu",
        name: "చెరువు (Cheruvu)",
        blurb: "Lesson 8 — the village pond/tank and its importance",
        questions: [
          { q: "'చెరువు' అనే పదానికి అర్థం ఏమిటి? (What does 'చెరువు' mean?)", options: ["Pond/tank", "Mountain", "Desert", "Forest"], answer: 0, difficulty: "easy", explain: "'చెరువు' means 'pond' or 'tank', a body of stored water important to village life.", explainSteps: ["Picture a body of water stored for a village to use.","చెరువు is the Telugu word for that stored water body.","So చెరువు means pond or tank."], explainDiagram: null },
          { q: "Why are village tanks (చెరువులు) traditionally important?", options: ["They store water for drinking, farming and daily use", "They have no real use", "They are only for decoration", "They are used to trap animals"], answer: 0, difficulty: "easy", explain: "Village tanks store rainwater and are essential for drinking, irrigation and other daily needs, especially in drier regions.", explainSteps: ["Villages need reliable water for many daily needs.","Tanks store rain water for drinking, farming and everyday use.","That's why village tanks are traditionally so important."], explainDiagram: null },
          { q: "'నీటిపారుదల' అనే పదానికి అర్థం ఏమిటి?", options: ["Irrigation", "Cooking", "Singing", "Sleeping"], answer: 0, difficulty: "medium", explain: "'నీటిపారుదల' means 'irrigation' - supplying water to fields for farming.", explainSteps: ["Fields need a controlled way to receive water, not just rainfall.","నీటిపారుదల describes supplying that water on purpose to fields.","So నీటిపారుదల means irrigation."], explainDiagram: null },
          { q: "What might happen to a village's farming if its main చెరువు (tank) dries up or is neglected?", options: ["Farming could suffer due to lack of water for crops", "Farming would improve automatically", "Nothing would change at all", "The village would need less water"], answer: 0, difficulty: "medium", explain: "Since tanks provide crucial water for irrigation, a dried-up or poorly maintained tank can seriously hurt local farming.", explainSteps: ["Crops depend heavily on the water a tank provides.","If the tank dries up or is neglected, that water source disappears.","So farming would likely suffer from a lack of water for crops."], explainDiagram: null },
          { q: "Why is community effort to maintain a చెరువు (village tank) often emphasized in such lessons?", options: ["Because tanks require regular care like desilting to remain useful for the whole village", "Tanks need no maintenance ever", "Only one person is responsible for a tank", "Village tanks are unimportant to community life"], answer: 0, difficulty: "hard", explain: "Since a tank serves the whole village, lessons often stress that its upkeep (like clearing silt) is a shared community responsibility.", explainSteps: ["A tank slowly fills with silt and needs regular clearing (desilting) to work well.","That upkeep benefits the whole village, not just one person.","So community effort to maintain it is often emphasized in such lessons."], explainDiagram: null }
        ],
        terms: [
          { term: "చెరువు", def: "Pond or village tank used to store water" },
          { term: "నీటిపారుదల", def: "Irrigation" },
          { term: "వ్యవసాయం", def: "Agriculture/farming" },
          { term: "గ్రామం", def: "Village" },
          { term: "నీరు", def: "Water" },
          { term: "సంరక్షణ", def: "Protection or conservation" }
        ]
      },
      {
        id: "cheemala-baaru",
        name: "చీమలబారు (Cheemala Baaru)",
        blurb: "Lesson 9 — a line/column of ants, teaching teamwork",
        questions: [
          { q: "'చీమ' అనే పదానికి అర్థం ఏమిటి? (What does 'చీమ' mean?)", options: ["Ant", "Bird", "Fish", "Frog"], answer: 0, difficulty: "easy", explain: "'చీమ' means 'ant', a small insect known for living and working in groups.", explainSteps: ["Picture a tiny insect that lives and works in large groups.","చీమ is the Telugu word for that insect.","So చీమ means ant."], explainDiagram: null },
          { q: "'బారు' (as in చీమలబారు) suggests ants moving in what formation?", options: ["A long line or row", "A scattered mess", "A circle only", "No formation at all"], answer: 0, difficulty: "easy", explain: "'బారు' suggests a line or row - ants are famous for marching in long, organised lines.", explainSteps: ["Ants are famous for moving together in a very particular pattern.","బారు suggests that organised, single-file pattern.","So బారు suggests a long line or row."], explainDiagram: null },
          { q: "Stories about ants working together typically teach the value of...", options: ["Teamwork and organisation", "Working entirely alone", "Laziness", "Ignoring others"], answer: 0, difficulty: "medium", explain: "Ants are often used as an example of teamwork, since they cooperate efficiently in large, organised groups.", explainSteps: ["Ants achieve big tasks (like carrying food) by working together, not alone.","That cooperative effort is the central lesson of such stories.","So the value taught is teamwork and organisation."], explainDiagram: null },
          { q: "'ఐక్యత' అనే పదానికి అర్థం ఏమిటి?", options: ["Unity", "Anger", "Fear", "Hunger"], answer: 0, difficulty: "medium", explain: "'ఐక్యత' means 'unity' - coming together as one.", explainSteps: ["Think of many individuals coming together as one group.","ఐక్యత describes exactly that coming-together.","So ఐక్యత means unity."], explainDiagram: null },
          { q: "Why are ants often used in moral lessons to represent hard work and cooperation?", options: ["Ants are widely observed working together efficiently despite their small size", "Ants are known for working entirely alone", "Ants never cooperate with each other", "Ants have no observable behavior"], answer: 0, difficulty: "hard", explain: "Ants are commonly used in such lessons because they visibly cooperate and organise efficiently, despite each ant being tiny on its own.", explainSteps: ["Ants are tiny individually, yet their group efforts are clearly visible and effective.","That visible, coordinated teamwork despite small size makes them a natural teaching example.","So that's why ants are often used to represent hard work and cooperation."], explainDiagram: null }
        ],
        terms: [
          { term: "చీమ", def: "Ant" },
          { term: "బారు", def: "A line or row (of things moving together)" },
          { term: "ఐక్యత", def: "Unity" },
          { term: "సహకారం", def: "Cooperation" },
          { term: "శ్రామికుడు", def: "A worker" },
          { term: "కష్టపడు", def: "To work hard" }
        ]
      },
      {
        id: "balanagamma",
        name: "బాలనాగమ్మ (Balanagamma)",
        blurb: "Lesson 10 — a well-known Telugu folk tale",
        questions: [
          { q: "'బాలనాగమ్మ' is best described as a...", options: ["Traditional Telugu folk tale", "A modern science textbook", "A grammar rulebook", "A mathematics lesson"], answer: 0, difficulty: "easy", explain: "'బాలనాగమ్మ' is a well-known traditional Telugu folk tale, passed down through generations.", explainSteps: ["This isn't a science text or grammar rulebook — it's a traditional narrative.","బాలనాగమ్మ is a well-known story passed down in Telugu culture.","So it's best described as a traditional Telugu folk tale."], explainDiagram: null },
          { q: "Folk tales like 'బాలనాగమ్మ' are typically passed down through which method, especially in earlier times?", options: ["Oral storytelling from generation to generation", "Only through printed books", "Only through television", "They were never shared at all"], answer: 0, difficulty: "easy", explain: "Traditional folk tales were mainly passed down orally, told by elders to children across generations.", explainSteps: ["Before printed books were common, stories still needed to be shared.","They were told aloud, by elders to children, generation after generation.","So folk tales were typically passed down through oral storytelling."], explainDiagram: null },
          { q: "'కథ' అనే పదానికి అర్థం ఏమిటి? (What does 'కథ' mean?)", options: ["Story", "Song", "Dance", "Painting"], answer: 0, difficulty: "medium", explain: "'కథ' means 'story' or 'tale'.", explainSteps: ["Think of a word for a narrated tale, told or written.","కథ is the Telugu word for that narrated tale.","So కథ means story."], explainDiagram: null },
          { q: "Folk tales in Telugu culture often include which kind of memorable elements?", options: ["Moral lessons, courage, and sometimes magical or fantastical events", "Only historical dates and facts", "Only mathematical formulas", "No characters or plot at all"], answer: 0, difficulty: "medium", explain: "Telugu folk tales typically combine engaging characters, moral lessons, and often magical or fantastical elements to captivate listeners.", explainSteps: ["Good folk tales aren't just plain narration — they include memorable elements.","These often include lessons, brave characters, and sometimes magical events.","So Telugu folk tales typically include moral lessons, courage, and fantastical elements."], explainDiagram: null },
          { q: "Why do folk tales like 'బాలనాగమ్మ' remain popular and get retold across generations?", options: ["Their engaging stories and lasting moral lessons make them memorable to pass on", "They contain no real lessons", "They are quickly forgotten after being told once", "They were only written in the last few years"], answer: 0, difficulty: "hard", explain: "Memorable characters and timeless moral lessons make folk tales like this one endure and get retold across generations.", explainSteps: ["A story needs strong characters and a clear lesson to be worth retelling.","బాలనాగమ్మ has both, making it memorable across generations.","That's why such folk tales remain popular and keep getting retold."], explainDiagram: null }
        ],
        terms: [
          { term: "కథ", def: "Story or tale" },
          { term: "జానపద కథ", def: "Folk tale" },
          { term: "నీతి", def: "Moral or lesson" },
          { term: "పాత్ర", def: "Character (in a story)" },
          { term: "కథకుడు", def: "Storyteller" },
          { term: "సాహసం", def: "Bravery/adventure" }
        ]
      },
      {
        id: "palletoori-pillagada",
        name: "పల్లెటూరి పిల్లగాడా! (Palletoori Pillagada)",
        blurb: "Lesson 11 — a poem addressed to a village boy",
        questions: [
          { q: "'పల్లెటూరు' అనే పదానికి అర్థం ఏమిటి? (What does 'పల్లెటూరు' mean?)", options: ["Village", "City", "Ocean", "Mountain range"], answer: 0, difficulty: "easy", explain: "'పల్లెటూరు' means 'village', a rural settlement.", explainSteps: ["Picture a small rural settlement, away from the city.","పల్లెటూరు is the Telugu word for that rural settlement.","So పల్లెటూరు means village."], explainDiagram: null },
          { q: "'పిల్లగాడు' అనే పదానికి అర్థం ఏమిటి? (What does 'పిల్లగాడు' mean?)", options: ["Boy/lad", "Old man", "Woman", "Baby animal"], answer: 0, difficulty: "easy", explain: "'పిల్లగాడు' means 'boy' or 'lad', often used affectionately.", explainSteps: ["Picture a young male child being addressed affectionately.","పిల్లగాడు is the word for exactly that.","So పిల్లగాడు means boy or lad."], explainDiagram: null },
          { q: "Poems addressed to a 'village boy' (పల్లెటూరి పిల్లగాడు) often celebrate what aspect of rural life?", options: ["Its simplicity, nature and close community bonds", "Only its poverty with no positive qualities", "Only urban skyscrapers", "Industrial factories"], answer: 0, difficulty: "medium", explain: "Such poems often celebrate the simple joys, natural surroundings, and close-knit community life found in villages.", explainSteps: ["A poem addressing a village boy likely celebrates his surroundings.","Village life is often associated with simple joys, nature, and close community.","So the poem likely celebrates simplicity, nature and community bonds."], explainDiagram: null },
          { q: "'ప్రకృతి' అనే పదానికి అర్థం ఏమిటి?", options: ["Nature", "Machine", "Money", "Building"], answer: 0, difficulty: "medium", explain: "'ప్రకృతి' means 'nature', often a central theme in poems about village life.", explainSteps: ["Think of everything natural — trees, rivers, animals, land.","ప్రకృతి is the Telugu word covering all of that.","So ప్రకృతి means nature."], explainDiagram: null },
          { q: "Why might a poet choose to directly address a 'village boy' as if speaking to him personally?", options: ["To create a warm, personal connection and highlight pride in rural roots", "To confuse the reader", "To avoid any emotional connection", "Because addressing a person has no poetic purpose"], answer: 0, difficulty: "hard", explain: "Directly addressing a village boy creates intimacy and warmth, often used to express pride and affection for rural life and identity.", explainSteps: ["Speaking directly to someone, as if talking face-to-face, feels more personal.","That personal tone helps express warmth and pride toward rural roots.","So that's likely why the poet addresses the village boy directly."], explainDiagram: null }
        ],
        terms: [
          { term: "పల్లెటూరు", def: "Village" },
          { term: "పిల్లగాడు", def: "Boy/lad" },
          { term: "ప్రకృతి", def: "Nature" },
          { term: "అనుబంధం", def: "Bond or attachment" },
          { term: "సౌందర్యం", def: "Beauty" },
          { term: "గ్రామీణ జీవితం", def: "Rural/village life" }
        ]
      },
      {
        id: "kapadukundam",
        name: "కాపాడుకుందాం (Kapadukundam)",
        blurb: "Lesson 12 — 'Let's protect it' — a lesson on protecting our environment/resources",
        questions: [
          { q: "'కాపాడుకుందాం' అనే పదానికి అర్థం ఏమిటి? (What does 'కాపాడుకుందాం' mean?)", options: ["'Let's protect (it)'", "'Let's destroy (it)'", "'Let's forget (it)'", "'Let's sell (it)'"], answer: 0, difficulty: "easy", explain: "'కాపాడుకుందాం' means 'let's protect/save it', an encouraging call to action.", explainSteps: ["Notice the word ending suggests 'let's' — a shared call to action.","కాపాడుకుందాం combines 'protect' with 'let's', urging joint action.","So it means 'Let's protect (it)'."], explainDiagram: null },
          { q: "Which of these is something this kind of lesson would likely encourage protecting?", options: ["The environment (trees, water, wildlife)", "Nothing at all", "Only money", "Only buildings"], answer: 0, difficulty: "easy", explain: "Lessons titled around protection ('కాపాడుకుందాం') typically focus on caring for the environment and natural resources.", explainSteps: ["A lesson titled around protection usually focuses on something valuable and at risk.","Nature — trees, water, wildlife — commonly fits that description.","So the environment is likely what this lesson encourages protecting."], explainDiagram: null },
          { q: "'పరిరక్షణ' అనే పదానికి అర్థం ఏమిటి?", options: ["Protection/conservation", "Destruction", "Ignorance", "Confusion"], answer: 0, difficulty: "medium", explain: "'పరిరక్షణ' means 'protection' or 'conservation'.", explainSteps: ["Think of the act of keeping something safe and preserved.","పరిరక్షణ describes exactly that safeguarding action.","So పరిరక్షణ means protection or conservation."], explainDiagram: null },
          { q: "Why might a lesson use an encouraging phrase like 'Let's protect (it)' rather than a stern command?", options: ["To invite readers to feel personally responsible and motivated to act together", "To make readers feel forced and unwilling", "Encouraging language has no real effect", "It's simply a random word choice"], answer: 0, difficulty: "medium", explain: "Inclusive, encouraging phrasing like 'Let's protect it' invites shared responsibility and motivation, rather than issuing a stern order.", explainSteps: ["A stern command can feel forced, but 'let's' invites shared effort.","That inclusive phrasing makes readers feel personally involved, not just ordered.","So that's why encouraging phrasing like 'let's protect it' is used instead of a command."], explainDiagram: null },
          { q: "Why is it important to teach young students about protecting natural resources from an early age?", options: ["Building environmental awareness early helps shape lifelong responsible habits", "Environmental awareness has no long-term value", "Only adults need to think about this topic", "It should be taught only once, briefly"], answer: 0, difficulty: "hard", explain: "Introducing environmental responsibility early helps children build lasting habits and awareness that carry into adulthood.", explainSteps: ["Habits and attitudes formed early in life tend to last a lifetime.","Teaching environmental responsibility young helps build those lasting habits.","That's why it's taught to young students from an early age."], explainDiagram: null }
        ],
        terms: [
          { term: "కాపాడు", def: "To protect or save" },
          { term: "పరిరక్షణ", def: "Protection/conservation" },
          { term: "పర్యావరణం", def: "Environment" },
          { term: "వనరులు", def: "Resources" },
          { term: "బాధ్యత", def: "Responsibility" },
          { term: "భవిష్యత్తు", def: "Future" }
        ]
      }
    ]
  },
  hindi: {
    name: "Hindi",
    icon: "🖋️",
    color: "#FF9EAA",
    tagline: "वर्णमाला, शब्द और व्याकरण",
    chapters: [
      {
        id: "aam-le-lo-aam",
        name: "आम ले लो आम!",
        blurb: "Lesson 1 — a mango seller's call, and the joy of fruit and seasons",
        questions: [
          { q: "'आम' शब्द का अर्थ क्या है? (What does the word 'आम' mean?)", options: ["Mango", "Apple", "Banana", "Grapes"], answer: 0, difficulty: "easy", explain: "'आम' means 'mango', a popular fruit especially loved in Indian summers.", explainSteps: ["Picture a juicy, popular summer fruit loved across India.","आम is the Hindi word for that fruit.","So आम means mango."], explainDiagram: null },
          { q: "'ले लो' का सामान्य अर्थ क्या है? (What does 'ले लो' generally mean?)", options: ["'Take it' / 'buy it'", "'Throw it away'", "'Hide it'", "'Break it'"], answer: 0, difficulty: "easy", explain: "'ले लो' is a common phrase meaning 'take it' or 'buy it', often called out by street vendors.", explainSteps: ["Think of a vendor calling out to encourage a sale.","ले लो is an invitation to take or buy something.","So it means 'take it' / 'buy it'."], explainDiagram: null },
          { q: "Vendors calling out phrases like 'आम ले लो आम!' in a market are typically...", options: ["Advertising their fruit to attract buyers", "Warning people of danger", "Giving directions", "Reading the news"], answer: 0, difficulty: "medium", explain: "Street vendors often call out catchy phrases to advertise their goods and attract customers in a market.", explainSteps: ["Vendors calling out catchy phrases in a market are trying to get attention.","That attention is meant to draw in buyers.","So they're advertising their fruit to attract customers."], explainDiagram: null },
          { q: "आम किस मौसम में विशेष रूप से मिलते हैं? (In which season are mangoes especially found?)", options: ["गर्मी (Summer)", "सर्दी (Winter)", "बरसात के तुरंत पहले (Only just before monsoon)", "कभी नहीं (Never)"], answer: 0, difficulty: "medium", explain: "Mangoes are most commonly associated with the summer season in India.", explainSteps: ["Think of the hot season when this fruit ripens best in India.","That season is गर्मी (summer).","So mangoes are especially found in summer."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'The mangoes are very sweet' in Hindi?", options: ["ये आम बहुत मीठे हैं।", "ये आम बहुत कड़वे हैं।", "आम का कोई स्वाद नहीं है।", "आम कभी मीठे नहीं होते।"], answer: 0, difficulty: "hard", explain: "'ये आम बहुत मीठे हैं' correctly means 'These mangoes are very sweet.'", explainSteps: ["Start with ये आम (these mangoes) as the subject.","Add बहुत मीठे हैं (are very sweet) to complete the sentence.","ये आम बहुत मीठे हैं correctly means 'These mangoes are very sweet.'"], explainDiagram: null }
        ],
        terms: [
          { term: "आम", def: "Mango" },
          { term: "मीठा", def: "Sweet" },
          { term: "बाज़ार", def: "Market" },
          { term: "विक्रेता", def: "Seller/vendor" },
          { term: "मौसम", def: "Season/weather" },
          { term: "फल", def: "Fruit" }
        ]
      },
      {
        id: "hamara-gaon",
        name: "हमारा गाँव",
        blurb: "Lesson 2 — our village and its everyday life",
        questions: [
          { q: "'गाँव' शब्द का अर्थ क्या है? (What does 'गाँव' mean?)", options: ["Village", "City", "Ocean", "Mountain"], answer: 0, difficulty: "easy", explain: "'गाँव' means 'village', a small rural settlement.", explainSteps: ["Picture a small rural settlement, away from a big city.","गाँव is the Hindi word for that rural place.","So गाँव means village."], explainDiagram: null },
          { q: "'हमारा' शब्द का अर्थ क्या है? (What does 'हमारा' mean?)", options: ["Our", "Your", "His", "Their"], answer: 0, difficulty: "easy", explain: "'हमारा' means 'our', a possessive pronoun.", explainSteps: ["Think of a word showing something belongs to 'us'.","हमारा is exactly that possessive word.","So हमारा means our."], explainDiagram: null },
          { q: "गाँव में लोग आमतौर पर कौन सा मुख्य काम करते हैं? (What is a common occupation for people in a village?)", options: ["खेती (Farming)", "केवल कार्यालय काम (Only office work)", "अंतरिक्ष यात्रा (Space travel)", "फिल्म निर्माण (Filmmaking)"], answer: 0, difficulty: "medium", explain: "Farming (खेती) is a common and traditional occupation in Indian villages.", explainSteps: ["Villages are often surrounded by open land used for growing crops.","खेती (farming) is the traditional main occupation there.","So farming is a common village occupation."], explainDiagram: null },
          { q: "'खेत' शब्द का अर्थ क्या है?", options: ["Field", "River", "Road", "House"], answer: 0, difficulty: "medium", explain: "'खेत' means 'field', where crops are grown.", explainSteps: ["Think of the land where crops are grown.","खेत is the Hindi word for that piece of land.","So खेत means field."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'Our village is very beautiful' in Hindi?", options: ["हमारा गाँव बहुत सुंदर है।", "हमारा गाँव बहुत बुरा है।", "गाँव में कुछ नहीं है।", "गाँव कभी सुंदर नहीं होता।"], answer: 0, difficulty: "hard", explain: "'हमारा गाँव बहुत सुंदर है' correctly means 'Our village is very beautiful.'", explainSteps: ["Start with हमारा गाँव (our village) as the subject.","Add बहुत सुंदर है (is very beautiful).","हमारा गाँव बहुत सुंदर है correctly means 'Our village is very beautiful.'"], explainDiagram: null }
        ],
        terms: [
          { term: "गाँव", def: "Village" },
          { term: "खेत", def: "Field" },
          { term: "किसान", def: "Farmer" },
          { term: "पेड़", def: "Tree" },
          { term: "पड़ोसी", def: "Neighbour" },
          { term: "सुंदर", def: "Beautiful" }
        ]
      },
      {
        id: "railway-station",
        name: "रेलवे स्टेशन",
        blurb: "Lesson 3 — a visit to the railway station",
        questions: [
          { q: "'रेलवे स्टेशन' पर हम आमतौर पर क्या करते हैं? (What do we usually do at a railway station?)", options: ["ट्रेन पकड़ते हैं (Catch a train)", "तैरते हैं (Swim)", "खाना बनाते हैं (Cook food)", "सोते हैं केवल (Only sleep)"], answer: 0, difficulty: "easy", explain: "A railway station is where people catch or get off trains.", explainSteps: ["Think about what people go to a railway station specifically FOR.","They go there to board a train.","So we usually catch a train at a railway station."], explainDiagram: null },
          { q: "'टिकट' शब्द का अर्थ क्या है? (What does 'टिकट' mean?)", options: ["Ticket", "Bag", "Food", "Water"], answer: 0, difficulty: "easy", explain: "'टिकट' means 'ticket', needed to travel by train.", explainSteps: ["To travel by train, you need proof of your booked journey.","टिकट is that proof of payment for the journey.","So टिकट means ticket."], explainDiagram: null },
          { q: "'प्लेटफ़ॉर्म' शब्द किससे संबंधित है? (What is a 'platform' related to?)", options: ["The place where passengers wait to board a train", "A type of food", "A game", "A type of clothing"], answer: 0, difficulty: "medium", explain: "A platform is the raised area at a station where passengers wait to board their train.", explainSteps: ["Passengers need somewhere specific to stand and wait for their train.","That raised waiting area alongside the tracks is the platform.","So a platform is where passengers wait to board a train."], explainDiagram: null },
          { q: "'यात्री' शब्द का अर्थ क्या है?", options: ["Passenger/traveller", "Driver", "Ticket collector", "Station"], answer: 0, difficulty: "medium", explain: "'यात्री' means 'passenger' or 'traveller'.", explainSteps: ["Think of the person actually travelling on the train.","यात्री describes exactly that traveller.","So यात्री means passenger/traveller."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'The train is arriving at the station' in Hindi?", options: ["ट्रेन स्टेशन पर आ रही है।", "ट्रेन कभी नहीं आती।", "स्टेशन पर कोई ट्रेन नहीं है।", "यात्री कहीं नहीं जा रहे।"], answer: 0, difficulty: "hard", explain: "'ट्रेन स्टेशन पर आ रही है' correctly means 'The train is arriving at the station.'", explainSteps: ["Start with ट्रेन (train) as the subject.","Add स्टेशन पर आ रही है (is arriving at the station).","ट्रेन स्टेशन पर आ रही है correctly means 'The train is arriving at the station.'"], explainDiagram: null }
        ],
        terms: [
          { term: "रेलवे स्टेशन", def: "Railway station" },
          { term: "टिकट", def: "Ticket" },
          { term: "प्लेटफ़ॉर्म", def: "Platform" },
          { term: "यात्री", def: "Passenger/traveller" },
          { term: "गाड़ी", def: "Train/vehicle" },
          { term: "समय सारणी", def: "Timetable" }
        ]
      },
      {
        id: "bazaar",
        name: "बाज़ार",
        blurb: "Lesson 4 — a lively market and its sights and sounds",
        questions: [
          { q: "'बाज़ार' शब्द का अर्थ क्या है? (What does 'बाज़ार' mean?)", options: ["Market", "School", "Hospital", "River"], answer: 0, difficulty: "easy", explain: "'बाज़ार' means 'market', a place where goods are bought and sold.", explainSteps: ["Think of a busy place full of shops and stalls.","बाज़ार is the Hindi word for that place.","So बाज़ार means market."], explainDiagram: null },
          { q: "'दुकान' शब्द का अर्थ क्या है? (What does 'दुकान' mean?)", options: ["Shop", "Sky", "Book", "Song"], answer: 0, difficulty: "easy", explain: "'दुकान' means 'shop', a place where goods are sold.", explainSteps: ["Think of a single small business selling goods.","दुकान is the Hindi word for that place.","So दुकान means shop."], explainDiagram: null },
          { q: "बाज़ार में लोग आमतौर पर क्या करते हैं? (What do people usually do at a market?)", options: ["खरीदना और बेचना (Buying and selling)", "सोना (Sleeping)", "पढ़ाई करना केवल (Only studying)", "तैरना (Swimming)"], answer: 0, difficulty: "medium", explain: "A market is a place primarily for buying and selling goods.", explainSteps: ["A market exists so goods can change hands.","People go there specifically to purchase and sell items.","So buying and selling is the main activity at a market."], explainDiagram: null },
          { q: "'मोल भाव' शब्द का अर्थ क्या है? (What does 'मोल भाव' mean?)", options: ["Bargaining over price", "Cooking food", "Reading books", "Singing songs"], answer: 0, difficulty: "medium", explain: "'मोल भाव' means 'bargaining', negotiating over the price of goods, common in Indian markets.", explainSteps: ["Think of negotiating back and forth over a price at a market stall.","मोल भाव describes exactly that negotiation.","So मोल भाव means bargaining."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'The market is very crowded today' in Hindi?", options: ["आज बाज़ार में बहुत भीड़ है।", "आज बाज़ार बंद है और कोई नहीं है।", "बाज़ार में कभी लोग नहीं आते।", "आज बाज़ार खाली है पूरी तरह।"], answer: 0, difficulty: "hard", explain: "'आज बाज़ार में बहुत भीड़ है' correctly means 'The market is very crowded today.'", explainSteps: ["Start with आज बाज़ार में (today, in the market) to set the scene.","Add बहुत भीड़ है (there is a big crowd).","आज बाज़ार में बहुत भीड़ है correctly means 'The market is very crowded today.'"], explainDiagram: null }
        ],
        terms: [
          { term: "बाज़ार", def: "Market" },
          { term: "दुकान", def: "Shop" },
          { term: "मोल भाव", def: "Bargaining" },
          { term: "ग्राहक", def: "Customer" },
          { term: "कीमत", def: "Price" },
          { term: "भीड़", def: "Crowd" }
        ]
      },
      {
        id: "mera-parivar",
        name: "मेरा परिवार",
        blurb: "Lesson 5 — my family and family relationships",
        questions: [
          { q: "'परिवार' शब्द का अर्थ क्या है? (What does 'परिवार' mean?)", options: ["Family", "Friend", "Teacher", "Neighbour"], answer: 0, difficulty: "easy", explain: "'परिवार' means 'family'.", explainSteps: ["Think of the group of people you live with and are related to.","परिवार is the Hindi word for exactly that group.","So परिवार means family."], explainDiagram: null },
          { q: "'माता-पिता' शब्द का अर्थ क्या है? (What does 'माता-पिता' mean?)", options: ["Parents (mother and father)", "Siblings", "Grandparents only", "Cousins"], answer: 0, difficulty: "easy", explain: "'माता-पिता' means 'parents', combining माता (mother) and पिता (father).", explainSteps: ["This word combines two specific family roles.","माता (mother) + पिता (father) = both parents together.","So माता-पिता means parents."], explainDiagram: null },
          { q: "'भाई' और 'बहन' शब्दों का अर्थ क्या है?", options: ["Brother and sister", "Uncle and aunt", "Son and daughter", "Grandfather and grandmother"], answer: 0, difficulty: "medium", explain: "'भाई' means 'brother' and 'बहन' means 'sister'.", explainSteps: ["Think of your siblings — one male, one female.","भाई refers to a male sibling, बहन to a female sibling.","So भाई means brother and बहन means sister."], explainDiagram: null },
          { q: "'संयुक्त परिवार' शब्द का अर्थ क्या है? (What does 'संयुक्त परिवार' mean?)", options: ["Joint family, where several generations live together", "A single-person household", "A family with no children", "A family living in different countries"], answer: 0, difficulty: "medium", explain: "'संयुक्त परिवार' means 'joint family', where grandparents, parents, and children often live together.", explainSteps: ["Think of a big family where grandparents, parents and children all live together under one roof.","That combined household has a specific name.","संयुक्त परिवार means joint family."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'My family is very loving' in Hindi?", options: ["मेरा परिवार बहुत प्यारा है।", "मेरा परिवार बहुत बुरा है।", "मेरे परिवार में कोई प्यार नहीं है।", "परिवार का कोई महत्व नहीं है।"], answer: 0, difficulty: "hard", explain: "'मेरा परिवार बहुत प्यारा है' correctly means 'My family is very loving.'", explainSteps: ["Start with मेरा परिवार (my family) as the subject.","Add बहुत प्यारा है (is very loving).","मेरा परिवार बहुत प्यारा है correctly means 'My family is very loving.'"], explainDiagram: null }
        ],
        terms: [
          { term: "परिवार", def: "Family" },
          { term: "माता-पिता", def: "Parents" },
          { term: "भाई", def: "Brother" },
          { term: "बहन", def: "Sister" },
          { term: "संयुक्त परिवार", def: "Joint family" },
          { term: "प्रेम", def: "Love" }
        ]
      },
      {
        id: "chidiyaghar",
        name: "चिड़ियाघर",
        blurb: "Lesson 6 — a visit to the zoo",
        questions: [
          { q: "'चिड़ियाघर' शब्द का अर्थ क्या है? (What does 'चिड़ियाघर' mean?)", options: ["Zoo", "School", "Hospital", "Library"], answer: 0, difficulty: "easy", explain: "'चिड़ियाघर' means 'zoo', a place where various animals are kept for people to observe.", explainSteps: ["Think of a place where many different animals are kept for people to see.","चिड़ियाघर is the Hindi word for that place.","So चिड़ियाघर means zoo."], explainDiagram: null },
          { q: "'शेर' शब्द का अर्थ क्या है? (What does 'शेर' mean?)", options: ["Lion", "Cat", "Dog", "Rabbit"], answer: 0, difficulty: "easy", explain: "'शेर' means 'lion'.", explainSteps: ["Picture a large, powerful wild cat often called the 'king of the jungle'.","शेर is the Hindi word for that animal.","So शेर means lion."], explainDiagram: null },
          { q: "चिड़ियाघर जाने का एक मुख्य उद्देश्य क्या है? (What is a main purpose of visiting a zoo?)", options: ["विभिन्न जानवरों के बारे में जानना (Learning about different animals)", "खाना बनाना सीखना (Learning to cook)", "गाड़ी चलाना सीखना (Learning to drive)", "तैरना सीखना (Learning to swim)"], answer: 0, difficulty: "medium", explain: "One key purpose of a zoo is to help people learn about and observe different animals safely.", explainSteps: ["A zoo brings together animals people wouldn't normally see up close.","This gives visitors a chance to learn about them safely.","So a main purpose of visiting a zoo is learning about different animals."], explainDiagram: null },
          { q: "'हाथी' शब्द का अर्थ क्या है?", options: ["Elephant", "Tiger", "Monkey", "Bear"], answer: 0, difficulty: "medium", explain: "'हाथी' means 'elephant'.", explainSteps: ["Picture a huge animal with a long trunk and big ears.","हाथी is the Hindi word for that animal.","So हाथी means elephant."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'We saw many animals at the zoo' in Hindi?", options: ["हमने चिड़ियाघर में बहुत सारे जानवर देखे।", "हमने चिड़ियाघर में कोई जानवर नहीं देखा।", "चिड़ियाघर में जानवर कभी नहीं होते।", "हम चिड़ियाघर कभी नहीं गए।"], answer: 0, difficulty: "hard", explain: "'हमने चिड़ियाघर में बहुत सारे जानवर देखे' correctly means 'We saw many animals at the zoo.'", explainSteps: ["Start with हमने चिड़ियाघर में (we, at the zoo) to set the scene.","Add बहुत सारे जानवर देखे (saw many animals).","हमने चिड़ियाघर में बहुत सारे जानवर देखे correctly means 'We saw many animals at the zoo.'"], explainDiagram: null }
        ],
        terms: [
          { term: "चिड़ियाघर", def: "Zoo" },
          { term: "शेर", def: "Lion" },
          { term: "हाथी", def: "Elephant" },
          { term: "बंदर", def: "Monkey" },
          { term: "पक्षी", def: "Bird" },
          { term: "पिंजरा", def: "Cage" }
        ]
      },
      {
        id: "maidan",
        name: "मैदान",
        blurb: "Lesson 7 — the playground/open field and outdoor play",
        questions: [
          { q: "'मैदान' शब्द का अर्थ क्या है? (What does 'मैदान' mean?)", options: ["Playground/open field", "Kitchen", "Bedroom", "Library"], answer: 0, difficulty: "easy", explain: "'मैदान' means 'playground' or an open field, often used for games and sports.", explainSteps: ["Think of a big open space used for games and sports.","मैदान is the Hindi word for that open field.","So मैदान means playground/open field."], explainDiagram: null },
          { q: "'खेलना' शब्द का अर्थ क्या है? (What does 'खेलना' mean?)", options: ["To play", "To eat", "To sleep", "To study"], answer: 0, difficulty: "easy", explain: "'खेलना' means 'to play'.", explainSteps: ["Think of the action children do with games and toys.","खेलना describes exactly that action.","So खेलना means to play."], explainDiagram: null },
          { q: "बच्चों के लिए मैदान में खेलना क्यों महत्वपूर्ण है? (Why is playing on a field important for children?)", options: ["इससे स्वास्थ्य और शारीरिक विकास में मदद मिलती है (It helps health and physical development)", "इसका कोई महत्व नहीं है (It has no importance)", "यह केवल समय बर्बाद करता है (It only wastes time)", "यह केवल वयस्कों के लिए है (It's only for adults)"], answer: 0, difficulty: "medium", explain: "Playing outdoors on a field supports children's physical health and overall development.", explainSteps: ["Physical activity outdoors keeps the body active and growing.","Playing on a field supports that healthy physical development.","So it's important for health and physical growth."], explainDiagram: null },
          { q: "'दौड़ना' शब्द का अर्थ क्या है?", options: ["To run", "To sit", "To sleep", "To write"], answer: 0, difficulty: "medium", explain: "'दौड़ना' means 'to run'.", explainSteps: ["Think of the fast movement children do during a race.","दौड़ना describes exactly that action.","So दौड़ना means to run."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'Children are playing in the field' in Hindi?", options: ["बच्चे मैदान में खेल रहे हैं।", "बच्चे मैदान में सो रहे हैं।", "मैदान में कोई नहीं है कभी।", "बच्चे कभी नहीं खेलते।"], answer: 0, difficulty: "hard", explain: "'बच्चे मैदान में खेल रहे हैं' correctly means 'Children are playing in the field.'", explainSteps: ["Start with बच्चे (children) as the subject.","Add मैदान में खेल रहे हैं (are playing in the field).","बच्चे मैदान में खेल रहे हैं correctly means 'Children are playing in the field.'"], explainDiagram: null }
        ],
        terms: [
          { term: "मैदान", def: "Playground/open field" },
          { term: "खेलना", def: "To play" },
          { term: "दौड़ना", def: "To run" },
          { term: "गेंद", def: "Ball" },
          { term: "टीम", def: "Team" },
          { term: "स्वास्थ्य", def: "Health" }
        ]
      },
      {
        id: "baal-diwas",
        name: "बाल दिवस",
        blurb: "Lesson 8 — Children's Day and its significance",
        questions: [
          { q: "'बाल दिवस' शब्द का अर्थ क्या है? (What does 'बाल दिवस' mean?)", options: ["Children's Day", "Republic Day", "Independence Day", "Teacher's Day"], answer: 0, difficulty: "easy", explain: "'बाल दिवस' means 'Children's Day'.", explainSteps: ["Think of a special day dedicated to children.","बाल दिवस is the Hindi phrase for that celebration.","So बाल दिवस means Children's Day."], explainDiagram: null },
          { q: "भारत में बाल दिवस किसके जन्मदिन पर मनाया जाता है? (In India, Children's Day is celebrated on whose birthday?)", options: ["जवाहरलाल नेहरू (Jawaharlal Nehru)", "महात्मा गांधी (Mahatma Gandhi)", "सुभाष चंद्र बोस (Subhas Chandra Bose)", "सरदार पटेल (Sardar Patel)"], answer: 0, difficulty: "easy", explain: "Children's Day in India is celebrated on 14th November, the birthday of Jawaharlal Nehru, who was fond of children.", explainSteps: ["This day honours India's first Prime Minister, who loved children.","His birthday, 14th November, is chosen for this celebration.","So Children's Day is celebrated on Jawaharlal Nehru's birthday."], explainDiagram: null },
          { q: "बाल दिवस पर स्कूलों में आमतौर पर क्या आयोजित किया जाता है? (What is typically organised in schools on Children's Day?)", options: ["सांस्कृतिक कार्यक्रम और खेल (Cultural programs and games)", "परीक्षाएं (Exams)", "अवकाश की घोषणा बिना किसी उत्सव के (Just a holiday with no celebration)", "कुछ भी विशेष नहीं (Nothing special)"], answer: 0, difficulty: "medium", explain: "Schools typically organise cultural programs, games, and fun activities to celebrate Children's Day.", explainSteps: ["Schools want this day to feel joyful and celebratory for children.","That usually means fun activities, not lessons or exams.","So cultural programs and games are typically organised."], explainDiagram: null },
          { q: "'उत्सव' शब्द का अर्थ क्या है?", options: ["Celebration/festival", "Sadness", "Silence", "Danger"], answer: 0, difficulty: "medium", explain: "'उत्सव' means 'celebration' or 'festival'.", explainSteps: ["Think of a joyful gathering or special occasion.","उत्सव describes exactly that kind of celebration.","So उत्सव means celebration/festival."], explainDiagram: null },
          { q: "Why is Children's Day celebrated with special importance in schools?", options: ["To honor and celebrate children, recognising their role in society's future", "It has no real significance", "It is meant only for teachers", "It is only about exams"], answer: 0, difficulty: "hard", explain: "Children's Day celebrates children specifically, recognising their importance and the joy and hope they bring for the future.", explainSteps: ["Children represent the future of any society.","Celebrating them specifically honours that important role.","That's why Children's Day is celebrated with special importance."], explainDiagram: null }
        ],
        terms: [
          { term: "बाल दिवस", def: "Children's Day" },
          { term: "जन्मदिन", def: "Birthday" },
          { term: "उत्सव", def: "Celebration/festival" },
          { term: "कार्यक्रम", def: "Program/event" },
          { term: "अध्यापक", def: "Teacher" },
          { term: "खुशी", def: "Happiness" }
        ]
      },
      {
        id: "khushiyon-ki-duniya",
        name: "खुशियों की दुनिया",
        blurb: "Lesson 9 — a world of happiness, about positivity and joy",
        questions: [
          { q: "'खुशी' शब्द का अर्थ क्या है? (What does 'खुशी' mean?)", options: ["Happiness", "Sadness", "Anger", "Fear"], answer: 0, difficulty: "easy", explain: "'खुशी' means 'happiness'.", explainSteps: ["Think of the feeling of joy and contentment.","खुशी is the Hindi word for exactly that feeling.","So खुशी means happiness."], explainDiagram: null },
          { q: "'दुनिया' शब्द का अर्थ क्या है? (What does 'दुनिया' mean?)", options: ["World", "House", "Book", "Song"], answer: 0, difficulty: "easy", explain: "'दुनिया' means 'world'.", explainSteps: ["Think of everything around us — every place, every person.","दुनिया is the Hindi word for that whole surrounding.","So दुनिया means world."], explainDiagram: null },
          { q: "Lessons about a 'world of happiness' typically encourage readers to focus on...", options: ["Positive thinking and appreciating small joys in life", "Only negative thoughts", "Ignoring others' feelings", "Avoiding happiness altogether"], answer: 0, difficulty: "medium", explain: "Such lessons typically encourage readers to notice and appreciate small joys and maintain a positive outlook.", explainSteps: ["A lesson about a 'world of happiness' likely wants readers to notice good things.","That usually means appreciating small joys and thinking positively.","So it encourages positive thinking and appreciating small joys."], explainDiagram: null },
          { q: "'मुस्कान' शब्द का अर्थ क्या है?", options: ["Smile", "Cry", "Shout", "Silence"], answer: 0, difficulty: "medium", explain: "'मुस्कान' means 'smile'.", explainSteps: ["Think of the simple facial expression showing happiness.","मुस्कान is the Hindi word for exactly that expression.","So मुस्कान means smile."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'Sharing happiness makes it grow' in Hindi?", options: ["खुशी बाँटने से वह बढ़ती है।", "खुशी बाँटने से वह खत्म हो जाती है।", "खुशी कभी नहीं बाँटी जा सकती।", "खुशी का कोई महत्व नहीं है।"], answer: 0, difficulty: "hard", explain: "'खुशी बाँटने से वह बढ़ती है' correctly means 'Sharing happiness makes it grow', a common uplifting sentiment in such lessons.", explainSteps: ["Start with खुशी बाँटने से (by sharing happiness) to set the cause.","Add वह बढ़ती है (it grows).","खुशी बाँटने से वह बढ़ती है correctly means 'Sharing happiness makes it grow.'"], explainDiagram: null }
        ],
        terms: [
          { term: "खुशी", def: "Happiness" },
          { term: "दुनिया", def: "World" },
          { term: "मुस्कान", def: "Smile" },
          { term: "सकारात्मक", def: "Positive" },
          { term: "आनंद", def: "Joy" },
          { term: "साझा करना", def: "To share" }
        ]
      },
      {
        id: "chukki-aur-jabbar",
        name: "चुक्की और जब्बार",
        blurb: "Lesson 10 — a story about the characters Chukki and Jabbar",
        questions: [
          { q: "'चुक्की और जब्बार' is best described as a...", options: ["A story featuring two characters", "A grammar rulebook", "A mathematics chapter", "A weather report"], answer: 0, difficulty: "easy", explain: "'चुक्की और जब्बार' is a lesson centred around a story with these two named characters.", explainSteps: ["This isn't a grammar rule or science fact — it's a narrative with named characters.","'चुक्की और जब्बार' centers on two specific characters.","So it's best described as a story featuring two characters."], explainDiagram: null },
          { q: "'दोस्ती' शब्द का अर्थ क्या है? (What does 'दोस्ती' mean?)", options: ["Friendship", "Anger", "Fear", "Distance"], answer: 0, difficulty: "easy", explain: "'दोस्ती' means 'friendship'.", explainSteps: ["Think of the warm bond between close companions.","दोस्ती describes exactly that bond.","So दोस्ती means friendship."], explainDiagram: null },
          { q: "Stories featuring two named child characters often aim to teach children about...", options: ["Friendship, sharing or working together", "Only historical facts", "Only mathematics", "Nothing meaningful"], answer: 0, difficulty: "medium", explain: "Such character-driven stories in school lessons often teach values like friendship, sharing, and cooperation.", explainSteps: ["Stories with two child characters usually model good social behaviour.","That often includes friendship, sharing or working together.","So that's the likely lesson such stories aim to teach."], explainDiagram: null },
          { q: "'साथ' शब्द का अर्थ क्या है?", options: ["Together/with", "Alone", "Far", "Fast"], answer: 0, difficulty: "medium", explain: "'साथ' means 'together' or 'with'.", explainSteps: ["Think of doing something alongside someone else, not alone.","साथ describes exactly that togetherness.","So साथ means together/with."], explainDiagram: null },
          { q: "Why might a lesson be built around a story with two relatable child characters, rather than adult characters?", options: ["It helps young readers connect more easily with characters similar to themselves", "Children cannot relate to any characters", "It is purely a random choice with no purpose", "Adult characters are always more relatable to children"], answer: 0, difficulty: "hard", explain: "Using relatable child characters helps young readers connect emotionally and better absorb the lesson's message.", explainSteps: ["Children often relate more easily to characters similar to themselves.","Using relatable child characters helps young readers connect emotionally.","That's likely why the lesson uses two child characters instead of adults."], explainDiagram: null }
        ],
        terms: [
          { term: "दोस्ती", def: "Friendship" },
          { term: "साथ", def: "Together/with" },
          { term: "कहानी", def: "Story" },
          { term: "पात्र", def: "Character (in a story)" },
          { term: "सहयोग", def: "Cooperation" },
          { term: "साझा करना", def: "To share" }
        ]
      },
      {
        id: "udyan",
        name: "उद्यान",
        blurb: "Lesson 11 — the garden and its plants and flowers",
        questions: [
          { q: "'उद्यान' शब्द का अर्थ क्या है? (What does 'उद्यान' mean?)", options: ["Garden", "Kitchen", "Bedroom", "Market"], answer: 0, difficulty: "easy", explain: "'उद्यान' means 'garden', a place with plants and flowers.", explainSteps: ["Think of a space filled with plants and flowers, cared for on purpose.","उद्यान is the Hindi word for that space.","So उद्यान means garden."], explainDiagram: null },
          { q: "'फूल' शब्द का अर्थ क्या है? (What does 'फूल' mean?)", options: ["Flower", "Leaf", "Root", "Seed"], answer: 0, difficulty: "easy", explain: "'फूल' means 'flower'.", explainSteps: ["Think of the colourful, fragrant part of a plant.","फूल is the Hindi word for exactly that part.","So फूल means flower."], explainDiagram: null },
          { q: "उद्यान की देखभाल में कौन सा काम शामिल होता है? (What task is involved in taking care of a garden?)", options: ["पानी देना और खरपतवार हटाना (Watering and removing weeds)", "किताबें पढ़ना केवल (Only reading books)", "खाना बनाना (Cooking food)", "गाड़ी चलाना (Driving)"], answer: 0, difficulty: "medium", explain: "Taking care of a garden typically involves watering plants and removing unwanted weeds.", explainSteps: ["Plants need regular care to stay healthy.","That includes giving them water and clearing away unwanted weeds.","So watering and removing weeds are involved in garden care."], explainDiagram: null },
          { q: "'माली' शब्द का अर्थ क्या है?", options: ["Gardener", "Teacher", "Driver", "Doctor"], answer: 0, difficulty: "medium", explain: "'माली' means 'gardener', the person who takes care of a garden.", explainSteps: ["Think of the person whose job is tending a garden.","माली is the Hindi word for exactly that person.","So माली means gardener."], explainDiagram: null },
          { q: "Which sentence correctly expresses 'The garden is full of colorful flowers' in Hindi?", options: ["उद्यान रंग-बिरंगे फूलों से भरा है।", "उद्यान में कोई फूल नहीं है।", "उद्यान हमेशा सूखा रहता है।", "फूलों का कोई रंग नहीं होता।"], answer: 0, difficulty: "hard", explain: "'उद्यान रंग-बिरंगे फूलों से भरा है' correctly means 'The garden is full of colorful flowers.'", explainSteps: ["Start with उद्यान (garden) as the subject.","Add रंग-बिरंगे फूलों से भरा है (is full of colourful flowers).","उद्यान रंग-बिरंगे फूलों से भरा है correctly means 'The garden is full of colorful flowers.'"], explainDiagram: null }
        ],
        terms: [
          { term: "उद्यान", def: "Garden" },
          { term: "फूल", def: "Flower" },
          { term: "माली", def: "Gardener" },
          { term: "पौधा", def: "Plant" },
          { term: "पानी देना", def: "To water (plants)" },
          { term: "रंग-बिरंगा", def: "Colorful" }
        ]
      },
      {
        id: "bacche-chale-cricket-khelne",
        name: "बच्चे चले क्रिकेट खेलने",
        blurb: "Lesson 12 — children go out to play cricket",
        questions: [
          { q: "'क्रिकेट खेलना' का अर्थ क्या है? (What does 'क्रिकेट खेलना' mean?)", options: ["To play cricket", "To cook food", "To read a book", "To sleep"], answer: 0, difficulty: "easy", explain: "'क्रिकेट खेलना' means 'to play cricket'.", explainSteps: ["Think of the popular bat-and-ball sport played in India.","क्रिकेट खेलना describes the action of playing that sport.","So it means to play cricket."], explainDiagram: null },
          { q: "'बल्ला' और 'गेंद' शब्दों का अर्थ क्या है? (What do 'बल्ला' and 'गेंद' mean?)", options: ["Bat and ball", "Book and pen", "Cup and plate", "Shirt and shoe"], answer: 0, difficulty: "easy", explain: "'बल्ला' means 'bat' and 'गेंद' means 'ball', both essential items for playing cricket.", explainSteps: ["Cricket needs two essential pieces of equipment.","बल्ला is the item used to hit, and गेंद is the item that's hit.","So बल्ला means bat and गेंद means ball."], explainDiagram: null },
          { q: "टीम के खेल में सहयोग क्यों महत्वपूर्ण है? (Why is cooperation important in a team game?)", options: ["इससे टीम बेहतर खेल सकती है और जीत की संभावना बढ़ती है (It helps the team play better and increases chances of winning)", "सहयोग का खेल में कोई महत्व नहीं है (Cooperation has no importance in games)", "अकेले खेलना हमेशा बेहतर होता है (Playing alone is always better)", "टीम के खेल में नियम नहीं होते (Team games have no rules)"], answer: 0, difficulty: "medium", explain: "Cooperation among teammates helps a team play more effectively together, improving their chances of success.", explainSteps: ["A team wins by playing well together, not through one player alone.","Good cooperation helps the whole team perform better.","That's why cooperation increases a team's chances of winning."], explainDiagram: null },
          { q: "'नियम' शब्द का अर्थ क्या है?", options: ["Rule", "Song", "Color", "Season"], answer: 0, difficulty: "medium", explain: "'नियम' means 'rule', important for playing any organised game fairly.", explainSteps: ["Every organised game needs agreed guidelines to be played fairly.","नियम describes exactly those guidelines.","So नियम means rule."], explainDiagram: null },
          { q: "Why might a lesson about children playing cricket together emphasize both fun and teamwork?", options: ["Games like cricket naturally combine enjoyment with lessons in cooperation and fair play", "Playing games has no educational value", "Cricket is only about individual performance", "Teamwork is irrelevant to sports"], answer: 0, difficulty: "hard", explain: "Team sports like cricket naturally teach children about cooperation, fair play, and enjoying activities together.", explainSteps: ["Team sports like cricket naturally combine fun with working together.","Playing together also teaches fair play and cooperation.","That's why such a lesson emphasizes both fun and teamwork."], explainDiagram: null }
        ],
        terms: [
          { term: "क्रिकेट", def: "Cricket" },
          { term: "बल्ला", def: "Bat" },
          { term: "गेंद", def: "Ball" },
          { term: "टीम", def: "Team" },
          { term: "नियम", def: "Rule" },
          { term: "सहयोग", def: "Cooperation" }
        ]
      }
    ]
  }
};
