document.getElementById('rechargeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const mlbbUserId = document.getElementById('mlbbUserId').value;
    const zoneId = document.getElementById('zoneId').value;
    const diamondAmount = document.getElementById('diamondAmount').value;

    try {
        const response = await fetch('http://localhost:3000/recharge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mlbbUserId, zoneId, diamondAmount })
        });

        const result = await response.json();
        document.getElementById('message').innerText = result.success ? 'Recharge successful!' : result.error;
    } catch (error) {
        document.getElementById('message').innerText = 'An error occurred. Please try again.';
    }
});