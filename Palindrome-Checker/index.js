const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkPalindrome = (input) => {
    const originalInput = input;
    if (input === '') {
        alert('Please input a value');
        return;
    }

    resultDiv.replaceChildren();
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = `"${originalInput}" ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome`;

    const p = document.createElement('p');
    p.className = 'user-input';
    p.innerHTML = resultMessage;
    resultDiv.appendChild(p);
    resultDiv.classList.remove('hidden'); 
}

checkPalindromeBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});