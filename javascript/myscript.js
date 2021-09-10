/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */

    const biciclette = [
        {
           nome : "bmx",
           peso : 5
       },
       {
           nome : "mountain bike",
           peso : 15
       },
       {
           nome : "Juve",
           puntiCampionato : 0,
           falliSubiti : 0
       },
       {
           nome : "triciclo",
           peso : 27
       }
   ];
   
   let pesantezza;
   
   let biciMenoPesante = 100;
   
   for (let x = 0; x < biciclette.length; x++){
       let leggera = biciclette[x].peso;
       
       if (leggera < biciMenoPesante){
           pesantezza = biciclette[x];
           biciMenoPesante = leggera;
       }
   }
   
   function nuovaBici(newName, sameWeigth){
       return {
           nome : newName,
           peso : sameWeigth
       }
   }
   
   console.log(pesantezza);
   
   
   
   
   
   
   
   
   
   
   
   /**
       Creare un array di oggetti di squadre di calcio.
       Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
       Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
       Generare numeri random al posto degli 0 nelle proprietà:
       Punti fatti e falli subiti
    */
   
   
   const footballTeam = [
       {
           nome : "Totenam",
           puntiCampionato : 0,
           falliSubiti : 0
       },
       {
           nome : "Manchester",
           puntiCampionato : 0,
           falliSubiti : 0
       },
       {
           nome : "Juve",
           puntiCampionato : 0,
           falliSubiti : 0
       },
       {
           nome : "Barcellona",
           puntiCampionato : 0,
           falliSubiti : 0
       }
   ];
   
   for (let i = 0; i < footballTeam.length; i++){
       footballTeam[i].puntiCampionato += getRandomInt(50);
   
       footballTeam[i].falliSubiti += getRandomInt(30);
   }
   
   console.log(footballTeam);
   
   const {puntiCampionato, falliSubiti} = footballTeam
   
   
   function getRandomInt(max) {
       return Math.floor(Math.random() * max);
     };
   