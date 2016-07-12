Accounts.onLogin(function(){
	if (Meteor.userId()) {
		FlowRouter.go('recipe-book');			//Videoen gjorde det på en anden måde, men dette fungerer(skal stå på clientside)
	}
});

Accounts.onLogout(function(){
	if(!Meteor.userId()) {
		FlowRouter.go('home')
	}
});

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
			FlowRouter.go('home')
		}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		if (Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		BlazeLayout.render('homeLayout')
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'}); 	//I videoen skrev de layout, {main: 'Recipe-book'}
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'}); 	//I videoen skrev de layout, {main: 'Recipe-book'}
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'})
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'})
	}
});


FlowRouter.route('/cooking-guide', {
	name: 'cooking-guide',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'CookingGuide'})
	}
});
