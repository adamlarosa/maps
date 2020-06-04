const fetchUrl = 'https://api.covid19api.com/dayone/country/us'

let mainData = {}

const getData = () => {
    fetch(fetchUrl)
        .then(resp => resp.json())
        .then(json => {
            mainData = json
        })
}

getData();