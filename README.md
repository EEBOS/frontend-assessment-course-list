# OSG Frontend Assessment | Course List
Thank you for applying to OSG and taking the time out to complete this assessment!

## The Goal
This assessment isn't to waste your time or an attempt to stump you with something you wouldn't actually be tasked with. The purpose of this assessment is for us to see a base level example of how you work.

## The Assessment
With this assessment we are asking you fully complete the given tasks to the best of your ability. In general, we are looking for your attention to detail, code clarity, and code efficiency.

## Getting Started
The first thing you'll need to do is create a GitHub account if you don't have one. To get started with this assessment click the "Use this template" button and go through the process of creating a new repository. We would prefer for you to keep the repository public but we understand if you have reservations about that. If you go with the private option, please remember to add us to the repository after you've completed this assessment.

> This assessment is based in NodeJS and makes use of ES modules, you will need to use node version >14.0.0.

Once you have your repository created, you will need to install some dependencies.

> One the dependencies is [parcelJS](https://parceljs.org/) (you don't need an understanding of parcel for this assessment) you may need to install this package globally. `npm install parcel -D -g`

`npm install`

After the dependencies have completed installing, start the application to make sure its working.

`npm run start`

The expected result is for a local server to have been spun up at `http://localhost:5000`. You should see a page with the foundational components of this [design](/styleguide/01_CourseList.png). Making a change to any of the source files will cause a hot reload.

Now you're ready to begin!

## The Story
As a user I need to be able to see the list of courses that are on offer and have the ability to find a course. Additionally, I also need to be able to see courses added to my account.

#### Style Guide
You'll find that much of core styling has already been implemented, but it is not complete. Full details of the guide can be found [here](/styleguide/README.md), and a visual representation of the guide is [here](/styleguide/06_StyleGuide.png).

### Task | Foundation
This assessment comes with a number of components built in React. Feel free to remove these components and React if you wish to work with a different framework.

### Task | Header
The header will exist across both pages and contain the navigation and user avatar. It needs to match this [design](/styleguide/03_Navbar.png). To construct the user avatar, you will need to retrieve the user data from this endpoint `/api/users`. At the smallest breakpoint, the navigation should be displayed on a separate row below the application information and user avatar. 

### Task | Course List
The default page should display a list of courses cards matching this [design](/styleguide/05_Cards.png). At the largest breakpoint should display **3** cards on a row, the medium breakpoint should have **2** cards, and the smallest breakpoint should have **1** card. You can retrieve a list of courses from this endpoint `/api/courses`. When completed the page should look like this [design](/styleguide/01_CourseList.png).

### Task | User Courses
The second page should display a list of courses that the user has added to their account. Courses are cards matching this [design](/styleguide/05_Cards.png). The page needs to match this [design](/styleguide/02_History.png). You can retrieve a list of user courses from this endpoint `/api/users/courses`.

### Task | Controls
Between the navigation and course content, there is a group of form controls that allow the user to filter the courses. These controls need to follow this [design](/styleguide/04_Controls.png) and the functionality described below. Additionally, the controls need to work in conjunction.

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
Order       | Description               | Default
------------|---------------------------|----------
 Ascending  | a to z / oldest to latest | false
 Descending | z to a / latest to oldest | true