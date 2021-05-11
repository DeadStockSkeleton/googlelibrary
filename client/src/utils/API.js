
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchBook: function (query){
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`, {
            method: 'GET',
        })
    },

    bookmark: function(data){
        return fetch('/',{
            method: 'POST',
            body: data,
      headers: { 'Content-Type': 'application/json' },
        }).then((data)=>{
            console.log(data)
        })
    }
};