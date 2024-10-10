module.exports = (req, res) => {
    const { name, email, product, amount } = req.body;

    // Simulate payment gateway processing
    setTimeout(() => {
        if (amount > 0) {
            res.json({ success: true, message: `Payment of $${amount} for ${product} was successful.` });
        } else {
            res.json({ success: false, message: "Payment failed. Invalid amount." });
        }
    }, 2000);
};