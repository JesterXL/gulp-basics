class Person
{
	constructor(firstName)
	{
		this.firstName = firstName;
	}
	
	sayName()
	{
		console.log("sup:", this.firstName);
	}
}