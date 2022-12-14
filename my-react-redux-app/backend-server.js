const app = require('express')();
const cors = require('cors');
app.use(cors({
    origin: "*" 
}));
app.get('/sum/:a/:b', (req, res) => {
    let output = {
        num1: req.params.a,
        num2: req.params.b,
        sum: parseInt(req.params.a) + parseInt(req.params.b)
    }
    res.end(JSON.stringify(output));
});
app.listen(9000, () => console.log('Backend running on 9000'));