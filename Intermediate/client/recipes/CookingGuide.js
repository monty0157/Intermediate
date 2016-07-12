Template.CookingGuide.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.CookingGuide.helpers({
	recipes: ()=> Recipes.find({inGuide: true}),
	list: ()=>	CookingGuide.find({})	
});


Template.CookingGuide.onCreated(function() {
	this.autorun(() => {
		this.subscribe('cooking-guide');
	});
});