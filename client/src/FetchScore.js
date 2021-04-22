import axios from 'axios';

const FetchScore = async () => {
    const url = 'https://new.scoresaber.com/api/player/76561198187936410/scores/top';
    const response = await axios.get(url, {
        headers: 
        { "Content-Type": "application/json" 
    }})
    const data = response.data.scores[0].pp;
    return (
        <h2>{data}</h2>
    );
}

export default FetchScore;

