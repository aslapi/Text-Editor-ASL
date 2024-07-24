const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist', {
    setHeaders: (res, path) => {
        if (path.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        }
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// app.use(express.static('public', {
//     setHeaders: (res, path) => {
//         if (path.endsWith('.png')) {
//             res.setHeader('Content-Type', 'image/png');
//         }
//     }
// }));