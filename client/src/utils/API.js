export default {
    getBookmarks: function(array){
        for (let i = 0; i < array.length; i++){
            return fetch(`https://www.googleapis.com/books/v1/volumes?q=${array[i].title}`,{
                method: 'GET'
            }).then(data => data.json()).then((res)=>{
                return res
            });
        }
    }
}