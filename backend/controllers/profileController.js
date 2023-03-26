const axios = require ('axios');
const getProfile = async function(req,res) {
    try {
        const url = 'http://localhost:8000/profile';
        const profile = await axios.get(url);
        console.log('profile', profile.data);
        res.status(200).json({
            msg:'get profile succeed',
            data: {
                profile: profile.data,
            }
        });
    } catch (error) {
        res.status(500).send('server error')
    }
};

module.exports = { getProfile };