const prompt=require("prompt-sync")({sigint:true});
const fs = require('fs');
function searchMovie(){
    console.log(
        `*** Search Using :***
        1- Title
        2- director
        3- genre
         `
    );
    const searchMode = prompt("Choose the search method you want plz : ");
    if (searchMode == 1)
    {
        const readFile = ()=>{
            fs.readFile("movis.json","UTF-8",(err,data)=>
            {
                if(err)
                {
                    console.log("error");
                    console.log(err);
                }
                else{
                    console.log(data);
                    const jsonData  = JSON.parse(data);
                    const titleSearch= prompt("Enter title of movie to search about ");
                    const searchMovie = jsonData.filter(function(item){
            if( item.title === titleSearch)
            {
                console.log(item.title);
                console.log(item.description);
                console.log(item.director);
                console.log(item.genre);
                console.log(item.releaseYear);
            }
        })
                }
            })
            console.log(searchMovie);
        }
        readFile();
    }
    else if (searchMode==2)
    {
        const readFile = ()=>{
            fs.readFile("movis.json","UTF-8",(err,data)=>
            {
                if(err)
                {
                    console.log("error");
                    console.log(err);
                }
                else{
                    console.log(data);
                    const jsonData  = JSON.parse(data);
                    const directorSearch= prompt("Enter director of movie to search about ");
                    const searchMovie = jsonData.filter(function(item){
            if( item.director === directorSearch)
            {
                console.log(item.title);
                console.log(item.description);
                console.log(item.director);
                console.log(item.genre);
                console.log(item.releaseYear);
            }
        })
                }
            })
            console.log(searchMovie);
        }
        readFile();
    }
    else if(searchMode==3)
    {
        const readFile = ()=>{
            fs.readFile("movis.json","UTF-8",(err,data)=>
            {
                if(err)
                {
                    console.log("error");
                    console.log(err);
                }
                else{
                    console.log(data);
                    const jsonData  = JSON.parse(data);
                    const genreSearch= prompt("Enter genre of movie to search about ");
                    const searchMovie = jsonData.filter(function(item){
            if( item.genre === genreSearch)
            {
                console.log(item.title);
                console.log(item.description);
                console.log(item.director);
                console.log(item.genre);
                console.log(item.releaseYear);
            }
        })
                }
            })
            console.log(searchMovie);
        }
        readFile();
    }
    else console.log("Your choice is not available")
    
}
module.exports={
    searchMovie:searchMovie
}