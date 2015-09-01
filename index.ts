module Talon {
	export interface Object {
		id(): number;
		location(): Object;
		contents(): Object[];		
	}	
}

var obj = <Talon.Object>{
	id: () => 123,
	location: () => undefined,
	contents: () => []
};

console.log(obj.contents());