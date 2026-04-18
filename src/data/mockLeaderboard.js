const FIRST_NAMES = [
  "Rahul", "Priya", "Akash", "Sneha", "Rohan", "Anjali", "Vivek", "Neha", 
  "Arjun", "Pooja", "Karthik", "Divya", "Manoj", "Kavya", "Suresh", "Swati", 
  "Sai", "Nithya", "Tarun", "Meghna", "Vijay", "Harika", "Akhil", "Rithika",
  "Aditya", "Shruti", "Sanjay", "Anusha", "Nikhil", "Bhavya", "Siddharth", 
  "Deepika", "Varun", "Sindhu", "Prashant", "Pallavi", "Praveen", "Rani"
];

const LAST_NAMES = [
  "Reddy", "Sharma", "Patel", "Singh", "Gupta", "Kumar", "Rao", "Desai", 
  "Varma", "Choudhary", "Naidu", "Goud", "Shetty", "Iyer", "Yadav", "Roy"
];

// Seeded random for consistent fake data across reloads
function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export const FAKE_STUDENTS = Array.from({ length: 200 }).map((_, i) => {
  const seed = i + 42;
  const firstName = FIRST_NAMES[Math.floor(seededRandom(seed) * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(seededRandom(seed + 1) * LAST_NAMES.length)];
  
  // Mix of performance curves to look realistic
  const rankCurve = Math.pow(seededRandom(seed + 2), 2); 
  const accuracy = Math.floor(40 + rankCurve * 58); // 40% to 98%
  const papers = Math.floor(1 + seededRandom(seed + 3) * 45); // 1 to 46 papers
  
  // Some have streaks, some don't
  const streakMultiplier = seededRandom(seed + 5) > 0.4 ? 1 : 0;
  const streak = Math.floor(seededRandom(seed + 4) * 18) * streakMultiplier; 
  
  const activeArr = ['Today', 'Today', 'Yesterday', '2 days ago', '3 days ago', 'Last week'];
  const lastActive = activeArr[Math.floor(seededRandom(seed + 6) * activeArr.length)];

  return {
    uid: `fake_${i}`,
    name: `${firstName} ${lastName}`,
    streak: streak,
    accuracy: accuracy,
    papers: papers,
    lastActive: lastActive
  };
});
