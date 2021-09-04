# Front-End Test Instructions
Hi and thank you for taking the time to do this test. The test has been written to check your skills with React, Redux-Form and CSS.
Also your ability to create easy to read code, scalable component and good architecture.


## Resources
[Redux-Form](https://redux-form.com/8.3.0)
[Open API](https://gorest.co.in/)
[Material UI Icons](https://material-ui.com/components/material-icons/)


## User Story
We would like you to create an app where a user is able to perform some CRUD operations. The App should contain 3 major UI views:
1. Add User Form
2. View All Users Table
3. Edit User Form

Within these views the User should be able to:
- Create a New User
- View a list of users into a table
- Update user details
- Delete users
- Navigate between Add and View pages

## Tasks
Please create 2 forms and 1 Table where the user can Add, Edit, Delete and View users provided by the API response. We would like you to use Redux-Form (see link above). For Styling, you can use CSS or SCSS if you prefer. We are not fussy about that.


### `Navigation`
Please create a simple Navigation (wherever you want), where the user can switch between the `Add User` and `View Users` pages. Please note that the Landing page of the app should be the `Add User` page.


### `Add User Form`
The Form should have the following fields:
- Name
- Email
- Gender
- Status

A `Cancel` button should allow the form to be cleared.
A `Submit` button should allow the User to add a new user to the database
A field validation should be in place with displayed error message under EACH field.

Please NOTE: The `Submit` button should be disabled until the form is valid. We leave the choice of validation to YOU (eg: if you wish OR not to allow number in the Name field, etc...)


### `Edit User Form`
The Edit User form is exctly the same as the Add Form, but when the user is on this page, the fields should be already filled with the information necessary to be changed.

A `Update` button should allow the User to Update the user details in question
A field validation should be in place with displayed error message under EACH field.

Please NOTE: The `Update` button should be disabled if no changes have been made in the fields, which means there are NO changes. Always have the validation working on the fields please. We leave the choice of validation to YOU (eg: if you wish OR not to allow number in the Name field, etc...)


### `View All Users Table`
Please create a table with the following columns:
- Edit
- Name
- Email
- Gender
- Status
- Delete

Please Note: For each Row in the table, the `Edit` will show a pencil icon (please use the material ui icons link provided in the resources above). On click, the user should be redirected to the `Edit Form` for that specific user.

Please Note: For each Row in the table, the `Delete` will show a bin icon (please use the material ui icons link provided in the resources above). On click, the listen row should be deleted.

### Final Thoughts
If you are free to use anything else you wish suitable to complete this test. Please note that the most important thing is how to organise your code. Style is the last thing you should worry about.

If you have any questions before starting the test, please contact Adam.
