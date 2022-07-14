const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit: '250mb', extended: true}));



app.post('/screenshot', (req, res) => {
    const base64Data = req.body.image;
    require('fs')
        .writeFile(`screenshot-${Date.now()}.png`, base64Data, 'base64', (err) => {
            if (err !== null) {
                return err;
            }
            console.log('File saved!');
        });
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Receiver service is listening on ', 3000);
})