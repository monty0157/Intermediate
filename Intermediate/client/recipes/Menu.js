Template.Menu.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes: ()=> Recipes.find({inMenu: true})		
});
