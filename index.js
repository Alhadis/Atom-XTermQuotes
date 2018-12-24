"use strict";

const {CompositeDisposable} = require("atom");
const disableClass = "xterm-quotes-disabled";
let disposables = null;

module.exports = {
	activate(){
		disposables && disposables.dispose();
		disposables = new CompositeDisposable(
			atom.commands.add("atom-workspace", "xterm-quotes:toggle", () => {
				document.body.classList.toggle(disableClass);
			}),
		);
	},
	
	deactivate(){
		document.body.classList.remove(disableClass);
		if(disposables){
			disposables.dispose();
			disposables = null;
		}
	},
};
