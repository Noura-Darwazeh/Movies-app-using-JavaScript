const prompt=require("prompt-sync")({sigint:true});
const fs = require('fs');
// const { searchMovie }=require('./main.js');
function addNewMovie()
{
    var newId = prompt("Enter id for new movie  ");
    var newTitle = prompt("Enter a title for new movie  ");
    var newDescription = prompt("Enter a description for new movie  ");
    var newDirector = prompt("Enter a director for new movie  ");
    var newGenre = prompt("Enter a genre for new movie  ");
    var newReleaseYear = prompt("Enter a Release Year for new movie  ");
    const newMovie={
        "id":newId,
        "title":newTitle,
        "description":newDescription,
        "director":newDirector,
        "genre":newGenre,
        "releaseYear":newReleaseYear
    };
    const AddMovi = ()=>{
        fs.readFile("movis.json","utf-8",(err,data)=>
        {
            if(err)
            {
            console.log("error");
            }
            else{
                const movies = JSON.parse(data);
                movies.push(newMovie);
                const newData = JSON.stringify(movies, null, 2);
                fs.writeFile("movis.json", newData, "utf-8", (err) => {
                    if (err) {
                        console.log("Error writing movis.json");
                    } else {
                        console.log("New movie added successfully");
                    }
            });
            }
        })
    }
    AddMovi();
}
module.exports={
    addNewMovie:addNewMovie
};