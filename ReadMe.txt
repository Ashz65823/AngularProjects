npm install -g @angular/cli@8.0.3 //-->installing angular cli(command line interface)

ng version //--> display versions of angular

ng new HelloWorld //creates new angular project named HelloWorld

once project ready
cd HelloWorld
ng serve//run the app and deploy on browser


Exploring Angular  project Folder structure

1. app - This contains angular components

- what is components?
>This is an independent block of code which can be reused in angular project
>Every component has one html custom tag associated with it
>Every componets have 4 files 
	i) app.component.html
	ii) app.component.css
	iii)app.component.ts(javaScript)

ng serve //this is to run angular project
--http://localhost:4200
////////----------------------- UNINSTALL
npm uninstall -g @angular/cli@8.0.3
npm cache clean --force
delete npm from appData present under user
----------------------------------------
again install
---------------------------
npm install -g @angular/cli
ng new Login
 Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
cd Login
ng serve
http://localhost:4200 open here
------These are conformation------------
Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/
Compiled successfully
-------------------------------------------
serve command required to be run in an angular project,but project cannot be found 
this exception happens when we are not in Folder
---------------------------------------------------------------------------------------------
{{title}}//String interpolation-This helps us to fetch value of a property from componet class---{{}} syntax
Selector of the component is used in html to instantiate component class 
Selector of the component is the logical name written on top of the class using @Component decorator(annotation in java)

ng generate component NameOfComponent//creates new component
can be written as 
ng g c NameOfComponent
------------------------------------------------------------------------
1. Pass data from message component to message update component
   Data from parent to child
2. Pass data from message update component to message component
   Data from child to parent
--------------------------------------3/11/2022-----------------------------------------------------
service
ng generate service serviceName(messagService)
			or
ng g s serviceName(messageService)
When one or more components need same data we have a service which will have the data in commom and this will inject the data 
into component..
This service will take to server fetch data, process and that data is sent to component..This is called Rest End Point

-----Application
Menu
Login
Message

Footer
These are also components
-----------------------------------------------------14/3/2022-------------------------------------
Routes:- It is to manage navigation in angular app
 -to use this we need to follow couple of step
1) Declare an array which tells angular which URL is mapped with which component
2) Import RouterModule
3) In app.component.html write following tag
  <router-outlet></router-outlet>

Templete Driven form
Validation
Angular automativally adds css classes to form fields at runtime
  ng-untoched- if form element is not yet touched(Vistited by mouse or key board)
  ng-prostine-if value of this is npt yet editted
  ng-valid -if value of element is valid according to validation rules  we have specified

ng g s service/User--> creates Sevice folder with user.service.ts file
