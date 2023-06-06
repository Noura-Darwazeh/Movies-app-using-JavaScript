const prompt=require("prompt-sync")({sigint:true});
 const fs = require('fs');
 const { printList } = require('./printlist.js');
 const { addNewMovie } = require('./addMovie.js');
 const { displayMovieCatalog}=require('./displayMovies.js');
 const { UpdateMovieDetails}=require('./updateMovie.js');
 const { deleteMovie}=require('./deleteMovie.js');
const { fetchMovies}=require('./fetchMovies.js');
const { searchMovie }=require('./searchMovie.js');
//while(true){
    printList();
    function chooseFromList()
    {
    const choiceNumber = prompt("Enter your choice plz:")
            switch(choiceNumber){
                case "1":
                     displayMovieCatalog();
                     return;
                    // break;
                case "2":
                     addNewMovie();
                     return; 
                case "3":
                    UpdateMovieDetails();
                    return; 
                case "4":
                        deleteMovie();
                        return; 
                case "5":
                    fetchMovies();
                    return;
                case "6":
                    searchMovie();
                    return;
            }
        } 
        chooseFromList(); 
//}  
    module.exports={
        chooseFromList:chooseFromList,
        printList:printList
    }