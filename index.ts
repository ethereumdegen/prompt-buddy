#!/usr/bin/env node

import chalk from 'chalk'
  
import { sendSubmoduleRequest } from './lib/protocol';



function init (){

    const args = process.argv.slice(2);

   /* const options = yargs
      .usage('Usage: $0 [options]')
      .option('query', {
        alias: 'q',
        describe: 'The query input prompt',
        demandOption: true,
        type: 'string'
      })
      .argv;*/

      //@ts-ignore
      let inputQuery = ""

        if(args.length > 0){
            args.forEach((arg:string) => {
                inputQuery += arg + " "
            })
        }
    
      console.log(`prompt: ${inputQuery}`);
      
      handleQuery(inputQuery)

}


async function handleQuery(query:string){

    let response = await sendSubmoduleRequest({

        moduleName: "base",
        method: "query",
        params: [query]

    })

    let result = response?.data?.result 

    console.log(`> ${result}`)

}


init()