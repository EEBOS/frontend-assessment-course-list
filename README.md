# OSG Frontend Assessment | Course List
Thank you for applying to OSG and taking the time out to complete this assessment!

## The Goal
This assessment isn't to waste your time or an attempt to stump you with something you wouldn't actually be tasked with. The purpose of this assessment is for us to see a base level example of how you work.

## The Assessment
With this assessment we are asking you fully complete the given tasks to the best of your ability. In general, we are looking for your attention to detail, code clarity, and code efficiency.

## Getting Started
The first thing you'll need to do is create a GitHub account if you don't have one. To get started with this assessment click the "Use this template" button and go through the process of creating a new repository. We would prefer for you to keep the repository public but we understand if you have reservations about that. If you go with the private option, please remember to add us to the repository after you've completed this assessment.

> This assessment is based in NodeJS, so you will need to have that installed along with NPM.

Once you have your repository created, you will need to install some dependencies.

> One the dependencies is [parcelJS](https://parceljs.org/) (you don't need an understanding of parcel for this assessment) you may need to install this package globally. `npm install parcel -D -g`

`npm install`

After the dependencies have completed installing, start the application to make sure its working.

`npm run start`

The expected result is for a local server to have been spun up at `http://localhost:5000`. You should see a page with a "Thank you for applying!" message. Making a change to any of the source files will cause a hot reload.

Now you're ready to begin!

## The Story
As a user I need to be able to see the list of courses that are on offer and have the ability to find a course. Additionally, I also need to be able to see courses added to my account.

### Task | Foundation
Using a framework of your choice (React, Vue, Angular, etc), create a single page application containing a top bar navigation and two pages. The navigation bar needs to match this [design](). You will need to construct the user avatar from retrieving data from this endpoint `/api/user`.

### Task | Course List
The default page should display a list of courses. Courses need to match this [design](). You can retrieve a list of courses from this endpoint `/api/courses`.

### Task | User Courses
The second page should display a list of courses that the user has added to their account. Courses need be displayed following the same [design]() as from the Course List task. You can retrieve a list of user courses from this endpoint `/api/user/courses`.

### Task | Controls
Below the navigation bar there needs to be a group of controls that allow a user to adjust the courses on display. The controls need to follow this [design]() and the functionality is described below. These controls need to work in conjunction. 

#### Title
A text field that displays courses when the search input is contained within the title. This search should not be case sensitive.

#### Price
A checkbox group containing the options below. When an option is selected, only courses that match the option will be displayed. Selecting both would be equivalent to having none selected.
* Free
* Paid

#### Sort By
A dropdown menu containing the options below which are fields that can be sorted on and radio button group indicating sort order.

**Options**
Label     | Property    | Default
----------|-------------|----------
 Title    | title       | false
 Created  | created_at  | true

**Orders**
Order       | Description                       | Default
------------|-----------------------------------|----------
 Ascending  | a to z / oldest to latest | false
 Descending | z to a / latest to oldest | true