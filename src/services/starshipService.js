export async function fetchStarships(search) {
    let url = 'https://swapi.dev/api/starships/'
    if (search) {
        url = url+`?search=${search}`
    }
    const response = await fetch (url)
    const data = await response.json();
    return data.results
}