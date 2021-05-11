
export default {
    seachBook: function (query){
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`, {
            method: 'GET',
        })
    }
}