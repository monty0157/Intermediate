Recipes = new Mongo.Collection('recipes');

var Schemas = {};

Recipes.allow({ 
	insert: (userId, doc) => !!userId,
	update: (userId, doc) => !!userId
});

Ingredient = new SimpleSchema({
	name: {
		type: String,
	},
	amount: {
		type: String,
	}
});

Schemas.Recipe = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
	},
	desc: {
		type: String,
		label: "Description",
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	inGuide: {
		type: Boolean,
		defaultValue: false,
		optional:true,
		autoform: {
			type: "hidden"
		}
	},
	ingredients: {
		type: [Ingredient]
	},
	author: {
		type: String,
		label: "Author",
		autoValue() {			//I videoenbn brugte de autoValue: function() {... osv....
			return this.userId;
		},
		autoform: {
			type: "hidden",
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: () => new Date,			//Samme som ovenstående - her har jeg brugt arrowfunction for sjov
		autoform: {
			type: "hidden",
		}
	}
});




Meteor.methods({
	toggleMenuItem(id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe(id) {
		Recipes.remove(id);
	},
	toggleGuideItem(id, currentState) {
		Recipes.update(id, {
			$set: {
				inGuide: !currentState
			}
		});
	}
});

Recipes.attachSchema(Schemas.Recipe)