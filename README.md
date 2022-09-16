<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Budgeter App</h3>
  <p align="center">
    A budgeting tool. Create A budget for a set amount of time and income. Then add expenses to said budget
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project


![Budget_detail](https://user-images.githubusercontent.com/90112549/190709964-8e2c1e6d-8b52-4bb3-84a6-833dc5af8062.PNG)


<p align="right">(<a href="#top">back to top</a>)</p>



# Built With
### Frontend
* React 
* JavaScript
* CSS
* J.W.T
* react-router-dom
### Backend
* Django
* Python 
* djangorestframework
* pyjwt

<p align="right">(<a href="#top">back to top</a>)</p>


# What I Learned 
* This was my first project using Django for a backend. The set up seemed simple enough but I ran into issues with my Foreign keys
* Using JWT auth was cool. I need to set it up so budgets are unique to the user that is logged in 
* This was a great way to review my react Skills 



# Strech Goals
* I want to add more functionality like filtering expense catagorys 
* I need to fix the total income being subtracted from the difference amount 
* Add styling for each budget that the user can set 
* Sharing budgets with other people like google docs
* add contact information on the biller 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## What it looks like
### New Expense page 
![New_expense](https://user-images.githubusercontent.com/90112549/190714142-f8e43c0d-5074-4395-ad2c-acfb8c350ddb.PNG)
### Sign up Page 
![Sign_up](https://user-images.githubusercontent.com/90112549/190714176-39b35ac1-35e8-48a1-824b-35b655875cc6.PNG)

<p align="right">(<a href="#top">back to top</a>)</p>

#Planning
### Your project idea 
Budgeter app: A user will be able to sign in and create budgets. They will create a budget for set amount of days, they will then add expenses to said budget. 

### Your tech stack (frontend, backend, database)
Django back-end
React Front-end 
Postgresql database 

### List of backend models and their properties
Budget model: 
 - Date range-1month, 3month, 6 month, 1 year
 - title
 - type: Saving for a trip, monthly budget
 - Expenses: [expense model]
 - Total
 - income
  
Expense Model:
 -Foreign Key (budget)
- title
- amount_planned
- amount_actual
- date
- biller
- Type: Electric, Car, Kids, Food, Rent, Utility etc. 
 
User Model:
 - Name 
 - [budgets]
 - email
 - password 

### React component hierarchy (if applicable)
User budgets >- Budget >- expenses >- expense total  
### User stories
 - AAU I want to log in and see my budgets 
 - AAU I want to  create new budgets 
 - AAU I want to update and destroy my budgets when needed 
 - AAU I want a section of my budget to show me if I have any extra cash 
 - AAU I want to add actual cost of things plus planned cost  of things 
 - AAU I want to compare budgets 

Stretch Goals
 - AAU I want to compare two budgets side by side  
 - AAU I want to change the background of my budget
 - AAU I want to see where I can save money each month 
 - AAU I want to filter my budgets  
### Wireframes
![wireframe_2](https://media.git.generalassemb.ly/user/39408/files/ca97c8d6-88c1-4610-8264-8ae551a7c21d)
![wireframe_1](https://media.git.generalassemb.ly/user/39408/files/06c5ceee-e53d-4a21-8283-47f30b450642)




<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
Email : Broad0601@gmail.com
LinkedIn: https://www.linkedin.com/in/benbroad21/




<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


<p align="right">(<a href="#top">back to top</a>)</p>




