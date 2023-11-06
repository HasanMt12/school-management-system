# School Management App

Welcome to the School Management App, a comprehensive application designed for managing a school's daily operations. This app includes features for administrators, students, teachers, and normal users.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

## Features

### Admin
- Add and manage students and teachers.
- Create and update student and teacher credentials.
- Manage student results and fee records.
- Add notices for students.
- Schedule exams and create exam questions for online exams.

### Students
- Login to the student portal.
- View their results.
- Access their class routines.
- Read notices from the school.
- Participate in online exams.

### Teachers
- Login to the teacher portal.
- Schedule exams.
- Create exam questions for online exams.
- Add notices for students.

### Normal Users
- View the school's home page.
- Explore an about school section.
- Browse the school's gallery.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
```bash
   https://github.com/HasanMt12/school-management-system.git

```
2.Navigate to the project directory:
```bash
    cd school-management-system
```  
3.Install dependencies:
```bash
    npm install
```
4.Start the development server:
```bash
   npm run dev

```

## usage
* Admin Panel: Admins can log in to manage students, teachers, and other     admin-related tasks.
* Student Portal: Students can log in to access their results, class routines, notices, and participate in online exams.
* Teacher Portal: Teachers can log in to schedule exams, create exam questions, and add notices for students.
* Home Page: Normal users can visit the school's home page to learn more about the school and explore the gallery.

## Project Structure
The project structure is organized as follows:
```sh
school-management-system/
  ├── public/
  ├── src/
  │   ├── actions/
  │   │   ├── authActions.js
  │   ├── dashboard/
  │   │   ├── dashboardHome.js
  │   ├── pages/
  │   │   ├── HomePage.js
  │   │   │   ├── Home.jsx
  │   ├── reducer/
  │   │   ├── authReducer.js
  │   │   ├── index.js
  │   ├── routes/
  │   │   ├── Router.jsx
  │   ├── Shared/
  │   │   ├── Navbar.jsx
  │   │   ├── SideBar.jsx
  │   ├── App.jsx
  │   ├── Main.jsx
  ├── package.json
  ├── README.md
  ├── index.html
  └── ...
```

## Technologies Used

- React
- Redux for state management
- Redux Thunk for asynchronous actions
- TailwindCSS (Preline)
- React Router for navigation

## Contributing
- We welcome contributions from the community. If you'd like to contribute, please follow our contribution guidelines.

## License
-This project is licensed under the MIT License.