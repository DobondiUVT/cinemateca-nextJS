export default function getFilterWording() {
    // create a map
    const map = new Map()
    // add a key-value pair to the map
    map.set("popular", "Most popular")
    map.set("top_rated", "Top rated")
    map.set("now_playing", "Now playing")
    map.set("upcoming", "Upcoming")
    // return the map
    return map
}