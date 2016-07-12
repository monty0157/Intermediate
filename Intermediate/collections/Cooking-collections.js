
CookingGuide = new Mongo.Collection('cooking-guide');

var Schem = {};

CookingGuide.allow({ 
	insert: (userId, doc) => !!userId,
	update: (userId, doc) => !!userId
});

Schem.CookingGuide = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
	},
	text: {
		type: String,
		label: `How to make it!`,
		autoform: {
			rows: 5
		}
	}
});

CookingGuide.attachSchema(Schem.CookingGuide)