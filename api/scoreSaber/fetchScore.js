// const request = require('request');
// id1 = '76561198187936410'; //garsh
// id2 = '76561198333869741'; //cerret
const axios = require('axios')

const url = "https://example.com"

const fetchScore = async (id) => {
    const url = 'https://new.scoresaber.com/api/player/76561198187936410/scores/top';
    try {
        const response = await axios.get(url, {
            headers: 
            { "Content-Type": "application/json" 
        }})
        const data = response.data.scores[0].pp;
        // const data = response;
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

exports.fetchScore = () => fetchScore();