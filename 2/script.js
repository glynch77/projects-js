const input = document.getElementById('input');

function check() {
    const reversed = input.value.split('').reverse().join('');
    if (reversed === input.value) {
        alert('It is a palindrome');
    } else {
        alert('It is not a palindrome');
    }
}