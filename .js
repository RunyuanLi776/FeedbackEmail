//write a function to retrieve a blob of json
//make an ajax request! use the 'fetch' function
//https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())//res.json() return a promise
//         .then(json => console.log(json));
// }

// fetchAlbums();

const fetchAlbums = async() => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json() //res.json() return a promise

    console.log(json);
}

fetchAlbums();