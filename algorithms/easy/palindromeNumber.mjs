/*
    *** Palindrome Number ***
    Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const palindromeNumber = (num) => {
    num = num.toString();
    let length = num.length, halflength = Math.floor(num.length/2), count=0, isPalindrome = true;
    while(count < halflength) {
        if(num[count] !== num[length - 1 - count]) {
            isPalindrome = false;
            break;
        }
        count++;
    }
    return isPalindrome;
}

console.log(`Output: `, palindromeNumber(-121));

/*
    Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/