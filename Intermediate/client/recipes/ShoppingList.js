Template.ShoppingList.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> Recipes.find({inMenu: true})		
});
