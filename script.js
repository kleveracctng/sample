var database = [
	{
		username: "reno",
		password: "secret"
	}
];

var newsFeed = [
	{
		username: "Bob",
		timeline: "So tired of learning"
	},
	{
		username: "Sally",
		timeline: "Cool"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);