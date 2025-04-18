// 1. Check if student passed
function studentScore(score) {
    // Check if score is 180 or above
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

// 2. Check voting eligibility based on age
function acceptAge(age) {
    // If age is 18 or above, eligible to vote
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

// 3. Grading function that returns performance status based on score
function scoreName(name, score) {
  // check score 90 and above
    if (score >= 90) {
        return "Excellent"; 
    } else if (score >= 75) {
        return "Good";      // 75 - 89
    } else if (score >= 50) {
        return "Average";   // 50 - 74
    } else {
        return "Fail";      // Below 50
    }
}

// 4. Grant access only if both conditions are true
function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
}

// 5. Loop through array of scores and log Pass/Fail
const studentScores = [23, 56, 79, 90, 70, 84, 79];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 50) {
        console.log("Pass"); // Above 50
    } else {
        console.log("Fail"); // 50 or below
    }
}

// 6. Arrow function to check if a student passed both Math and English
const studentPass = (mathScore, englishScore) => 
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";
};

// 7. Check if user provided either email or phone number during signup
function signUp(email, phoneNo) {
    return email || phoneNo ? true : false;
}

// 8. Validate credentials: neither field should be empty
function validateCredentials(username, password) {

    return username === "" || password === "" 
        ? "Invalid input" 
        : "Credentials accepted";
}

// 9. Ternary to determine if user is full-time or part-time
function employmentType(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
}

// 10. Arrow function to return the larger of two numbers
const findLarger = (num1, num2) => (
    num1 > num2 ? num1 : num2
);
