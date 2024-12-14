document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('billAmount').focus();
    setTipPercentage(20, document.querySelector('.tip-buttons button:nth-child(2)'));

    document.getElementById('billAmount').addEventListener('input', calculateTip);
    document.getElementById('customTipPercentage').addEventListener('input', calculateTip);
    document.getElementById('numPeople').addEventListener('input', calculateTip);

    const tipButtons = document.querySelectorAll('.tip-buttons button');
    tipButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const percentage = parseInt(event.target.textContent);
            if (!isNaN(percentage)) {
                setTipPercentage(percentage, event.target);
            } else {
                enableCustomTip(event.target);
            }
        });
    });
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    document.querySelectorAll('input').forEach(input => {
        input.style.backgroundColor = body.classList.contains('dark-mode') ? 'var(--dark-input-bg)' : '#fff';
        input.style.color = body.classList.contains('dark-mode') ? 'var(--dark-text)' : '#000';
    });
    const result = document.getElementById('result');
    result.style.backgroundColor = body.classList.contains('dark-mode') ? 'var(--dark-input-bg)' : '#fff';
    result.style.color = body.classList.contains('dark-mode') ? 'var(--dark-text)' : '#000';
}

let selectedTipPercentage = null;

function setTipPercentage(percentage, button) {
    selectedTipPercentage = percentage;
    document.getElementById('customTipPercentage').style.display = 'none';
    document.getElementById('customTipPercentage').value = '';
    document.querySelectorAll('.tip-buttons button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    calculateTip();
}

function enableCustomTip(button) {
    selectedTipPercentage = null;
    document.getElementById('customTipPercentage').style.display = 'block';
    document.querySelectorAll('.tip-buttons button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = selectedTipPercentage;
    const customTipPercentage = parseFloat(document.getElementById('customTipPercentage').value);
    const numPeople = parseInt(document.getElementById('numPeople').value) || 1;
    if (!isNaN(customTipPercentage)) tipPercentage = customTipPercentage;
    if (!isNaN(billAmount) && tipPercentage) {
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;
        const amountPerPerson = totalAmount / numPeople;
        document.getElementById('tipAmount').innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
        document.getElementById('totalAmount').innerText = `Total Amount (Including Tip): $${totalAmount.toFixed(2)}`;
        document.getElementById('amountPerPerson').innerText = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
    }
}
