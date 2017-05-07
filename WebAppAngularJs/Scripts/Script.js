/// <reference path="angular.min.js" />


var myapp = angular.module("myModule", []);

//var myController = function ($scope) {
//    $scope.message = "Angular Js Tutorial.";
//};
//myapp.controller("myController", myController);
myapp.controller("myController", function ($scope) {
    var employee = { FirstName: "Kshitij", LastName: "Katiyar", Gender: "Male" };
    
    var tour = { Name: "Ankita Kshitij", Island: "Andman", Image: "Images/BeautyPlus_20160326162131_save.jpg" };
    
    var employees = [
    { FirstName: "Kshitij", LastName: "Katiyar", DateofBirth:new Date("November 23, 1987"), Gender: "Male", Salary: "1000", Likes: "0", Dislikes: "0" },
    { FirstName: "Ankita", LastName: "Sachan", DateofBirth: new Date("June 3, 1992"), Gender: "Female", Salary: "500", Likes: "0", Dislikes: "0" },
    { FirstName: "Swara", LastName: "Sachan", DateofBirth: new Date("Feburary 23, 2016"), Gender: "Female", Salary: "2000", Likes: "0", Dislikes: "0" }];
    


    var countries = [{ Country: "India", Cities: [{ Name: "Vadodara" }, { Name: "Kanpur" }] },
    { Country: "UK", Cities: [{ Name: "London" }, { Name: "Manchester" }] }];

    $scope.employee = employee;
    $scope.message = "Angular Js Tutorial.";
    $scope.tour = tour;
    $scope.employees = employees;
    $scope.incrementLikes = function (emp) { emp.Likes++; };
    $scope.incrementDislikes = function (emp) { emp.Dislikes++; };
    $scope.rowlimit = 3;
    
   
    $scope.countries = countries;
});