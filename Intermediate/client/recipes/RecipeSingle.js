Template.RecipeSingle.onCreated(function() {
	this.autorun(() => {
		var id = FlowRouter.getParam('id')
		this.subscribe('singleRecipes', id);
	});
});

Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id')
		return Recipes.findOne({_id: id})		
	}
});
