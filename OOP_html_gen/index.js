const team_update = require("./lib/team_update");
const inquirer = require( 'inquirer' );
const fs = require('fs');
const generateHTML = require( './lib/generateHTML' );
const questions = require( './lib/questions' );

// console.log('questions :>> ', questions);

async function init () {
  let team = {
    manager:{},
    members:[],
  };

  team = await team_update.add_team_mgr(team);

  const add = await inquirer.prompt( questions.add );
  // console.log( 'add :>> ', add );
  team = await team_update.add_team_mem( add, team );
  

}

init();

