"use strict";

const {CompositeDisposable} = require("atom");
let disposables = null;

module.exports = {
	activate(){
		disposables && disposables.dispose();
		disposables = new CompositeDisposable(
			atom.commands.add("atom-workspace", "xterm-quotes:toggle", () => {
				document.body.classList.toggle("xterm-quotes-disabled");
			}),
		);
	},
	
	deactivate(){
		if(disposables){
			disposables.dispose();
			disposables = null;
		}
	},
};
