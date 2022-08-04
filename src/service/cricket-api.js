const API_KEY="IHN9zEO1KDSVEFY87n9uj18oHId2";

export const getMatches = () => {
const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;


return fetch(url)
.then(res=>res.json())
.catch(error => console.log(error));
};

export const getMatchDetail=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    
    return fetch(url)
    .then(res=>res.json())
    .catch(error => console.log(error));
}