const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

app.use('/', router);

require('./routes/get')(router)

require('./routes/post')(router)

require('./routes/put')(router)

require('./routes/delete')(router)


app.listen(3000, () => {
    console.log('server started on port 3000')
})