


const scriptsInEvents = {

	async EventSheet2_Event2_Act1(runtime, localVars)
	{
		let HP = 15;
		
		if (HP > 0) {
		    console.log("HP 15");
		}else{
		    console.log("let goooo");
		}
		if (HP < 20) {
		    console.log("HP 15");
		}else{
		    console.log("let goooo");
		}
		
	},

	async Macos_Event5(runtime, localVars)
	{
		// Game.app.js
		
		let i = 15;
		
		if (i < 20){
		   console.log("i = 15");
		}
		
	},

	async Playerscript_Event1_Act1(runtime, localVars)
	{
		console.log('bring up the phone'); 
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

