const request = require('request');
id1 = '76561198187936410'; //garsh
id2 = '76561198333869741'; //cerret


function fetchScore(id) {
    if (typeof id != 'object') {
        return(fetch(id))
    } else if (typeof id === 'object') {
        id.forEach(fetch)
    }
    function fetch (id) {
        var options = {
            url: `https://new.scoresaber.com/api/player/${id}/scores/top`, //pulls top 8 scores for ID1
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11', //does funni connection thingy for the api i think
            },
        };
        request(options, function (body) {
            try {
                let response = JSON.parse(body).scores[0]; //grabs the first and top score from user 1, removing the rest.
                let pp = parseInt(response.pp); //grabs the PP amount from the top song and forces it to be an integer
            } catch (error) {
                console.log('Invalid SSID/UUID');
            }
        });
        return( 
            { response, pp }
        )
    }

}
