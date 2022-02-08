# OSG Frontend Assessment | Course List

Thank you for applying to OSG and taking the time out to complete this assessment!

## The Goal
This assessment isn't to waste your time or an attempt to stump you with something you would be actually tasked with. The purpose here is for us to see a base level example of how you work.

## The Assessment
With this assessment we are asking you fully complete the given tasks by delivering on the acceptance criteria to the best of your ability. In general, we are looking for your attention to detail, code clarity, and code efficiency.

## Getting Started
The first thing you'll need to create a github account if you don't have one then click the "Use this template" button and go through the process of creating a new repository. We would prefer for you to keep the repo public but we understand if you have reservations about that. If you go with the private option, please remember to add us to the repo after you've completed this assessment.

> This assessment is based in nodejs, so you will need to have that installed along with npm.

Once you have your repo created, you will need to install some dependencies.

`npm install`

> One the dependencies is [parcelJS](https://parceljs.org/) (you don't need an understanding of parcel for this assessment) you may need to install this package globally.

After the dependencies have completed installing, start the application to make sure its working.

`npm run start`

The expected result is for a local server to have been spun up at `http://localhost:5000`. You should see a page with a "Thank you for applying!" message. Making a change to any of the source files should cause automatic refresh.

Now you're ready to begin!

## The Story
As a user I need to be able to see the list of courses that are on offer and have the ability to find a course. Additionally, I also need to be able to see my course history.

### Task | Foundation
Using a framework of your choice (React, Vue, Angular, etc), create a single page application containing a top bar navigation and two pages. The navigation bar needs to match this [design](). You will need to construct the user avatar from retrieving data from this endpoint `/api/user`.

### Task | Course List
The default page should display a list of courses. Courses need to match this [design](). You can retrieve a list of courses from this endpoint `/api/courses`.

### Task | User Courses
A second page should display a list of courses that the user has added to their account. Courses need be displayed following the same [design]() as from the Course List task. You can retrieve a list of user courses from this endpoint `/api/user/courses`.

### Task | Controls
Below the navigation bar there needs to be a group of controls that allow a user to adjust the courses on display. The controls need to follow this [design]() and the functionality is described below. These controls need to work in conjunction. 

#### Title
A text field that displays courses when the input is contained within the title.

#### Price
A checkbox group containing the options below. When an option is selected, only courses that match the option will be displayed.
* Free
* Paid

#### Length
A dropdown menu containing the options below. When an option is selected, only courses that match the option will be displayed.
* All [Default]
* Quick (30 minutes or less)
* Short (1 hour or less)
* Medium (1 to 3 hours)
* Long (3 hours or more)

#### Sort By
A dropdown menu containing a list of sortable fields and button indicating the sort order. When the order button is clicked, the button icon will change to match the change in state. If a course is sorted on an optional field and that option does not exist, that course needs to be excluded from being displayed.

**Fields**
* Title
* Created [Default]
* Updated
* Price

**Order**
* Ascending (a to z / oldest to latest / low to high) 
* Descending (z to a / latest to oldest / high to low) [Default]


#### Completed
A checkbox only made available to the User Courses page. When checked, only courses that have been completed will be displayed. Additionally, the completed field needs to be added to the Sort By control as an option only when on the User Course page.