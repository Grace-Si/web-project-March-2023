const axios = require ('axios');
const getRequest = async function(req,res) {
    try {
        const url ='http://localhost:8000/request';
        const request = await axios.get(url);
        console.log('request', request.data);
        res.status(200).json ({
            msg : 'get request succeed',
            data : {
                request: request.data,
            }
        })
    } catch (error) {
        res.send(500).send('server error')
    }
};
module.exports = { getRequest };