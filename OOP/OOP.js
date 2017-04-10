//The person function is the parent for all other objects
//Methods and attributes are encapsulated in this object
function Person(firstname,surname,idNumber){
	this.firstname = firstname;
	this.surname = surname;
	this.idNumber = idNumber;
}

Person.prototype = {
	constructor:Person,
	showName:function(){
		return this.firstname + this.surname;
	},
	showidNumber:function(){
		return this.idNumber;
	}
}

//This a student function(class) which inherits from the person function
function Student(yearOfAdmission,department,courses){
	this.yearOfAdmission = yearOfAdmission;
	this.department = department;
	this.courses = [];
}

//We inherit atributes and methods from the Person prototype here
inheritPrototype(Student,Person);

Student.prototype = {
	constructor: Student,
	showDepartment:function(){
		return this.department = department;
	},
	addCourses:function(courseToAdd){
		return this.courses.push(courseToAdd);
	}
	
	showidNumber:function(){
		return "This " + this.idNumber + "belongs to" + this.showName;
	}
}



