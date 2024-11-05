# University Management System

This is a backend project for managing students, faculty, and admins at University Management. It includes authentication, profile management, academic processes, and user management functionalities. The application is built with MongoDB for data storage and provides a set of API endpoints to manage users and academic information.

## Table of Contents

- [Features](#features)
  - [Authentication](#authentication)
  - [Profile Management](#profile-management)
  - [Academic Process](#academic-process)
  - [User Management](#user-management)
- [Data Modeling](#data-modeling)
  - [User](#user)
  - [Student](#student)
  - [Faculty](#faculty)
  - [Admin](#admin)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Students](#students)
  - [Faculty](#faculty)
  - [Admin](#admin)
  - [Authentication](#authentication)
- [Installation](#installation)
- [Usage](#usage)

## Features

### Authentication

- **Student**: Secure login and logout, update password.
- **Faculty**: Secure login and logout, update password.
- **Admin**: Secure login and logout, update password.

### Profile Management

- **Student**: Update profile (limited fields), change password.
- **Faculty**: Update profile (limited fields), change password.
- **Admin**: Update profile (limited fields), change password.

### Academic Process

- **Student**:
  - Enroll in courses.
  - View class schedule.
  - View grades.
  - Access notice board and events.
- **Faculty**:
  - Manage student grades.
  - Access student information.
- **Admin**:
  - Manage semesters, courses, offered courses, sections, rooms, buildings.

### User Management

- **Admin**:
  - Manage user accounts.
  - Block/unblock users.
  - Change user passwords.

## Data Modeling

### User

- `_id`: Auto-generated by MongoDB
- `Id`: Custom generated user ID
- `Password`: User password
- `needPasswordChange`: Boolean, whether the user needs to change their password
- `Role`: Role of the user (student, faculty, admin)
- `isDeleted`: Boolean, soft delete indicator
- `createdAt`: Timestamp of account creation
- `updatedAt`: Timestamp of the last account update

### Student

- `_id`: Auto-generated by MongoDB
- `Id`: Custom generated student ID
- `user`: Reference to the `User` collection
- `Name`: Student name
- `Email`: Student email
- `Gender`: Student gender
- `dateOfbirth`: Student date of birth
- `ContactNo`: Student contact number
- `Emergency Contact No`: Emergency contact number
- `Present Address`: Current address
- `Permanent Address`: Permanent address
- `Guardian Information`: Details about the student's guardian
- `Local Guardian Information`: Details about the student's local guardian (if any)
- `Academic Department`: Department where the student is enrolled
- `Profile Image`: URL to the student's profile picture
- `Status`: Current status (active, inactive, etc.)
- `isDeleted`: Boolean, soft delete indicator
- `createdAt`: Timestamp of student profile creation
- `updatedAt`: Timestamp of the last student profile update

### Faculty

- `_id`: Auto-generated by MongoDB
- `Id`: Custom generated faculty ID
- `user`: Reference to the `User` collection
- `Name`: Faculty name
- `Email`: Faculty email
- `Designation`: Faculty designation (e.g., Professor)
- `Gender`: Faculty gender
- `ContactNo`: Faculty contact number
- `Emergency Contact No`: Faculty emergency contact number
- `Present Address`: Faculty current address
- `Permanent Address`: Faculty permanent address
- `Profile image`: URL to the faculty's profile picture
- `Academic Faculty`: Faculty of affiliation
- `Academic Department`: Department of affiliation
- `Status`: Current status (active, inactive, etc.)
- `isDeleted`: Boolean, soft delete indicator
- `createdAt`: Timestamp of faculty profile creation
- `updatedAt`: Timestamp of the last faculty profile update

### Admin

- `_id`: Auto-generated by MongoDB
- `Id`: Custom generated admin ID
- `user`: Reference to the `User` collection
- `Name`: Admin name
- `Email`: Admin email
- `Designation`: Admin designation
- `Gender`: Admin gender
- `ContactNo`: Admin contact number
- `Emergency Contact No`: Admin emergency contact number
- `Present Address`: Admin current address
- `Permanent Address`: Admin permanent address
- `Profile image`: URL to the admin's profile picture
- `Management Department`: Department where the admin manages
- `Status`: Current status (active, inactive, etc.)
- `isDeleted`: Boolean, soft delete indicator
- `createdAt`: Timestamp of admin profile creation
- `updatedAt`: Timestamp of the last admin profile update

## API Endpoints

### Users

- **Create a Student**: `POST /users/create-student`
- **Create a Faculty**: `POST /users/create-faculty`
- **Create an Admin**: `POST /users/create-admin`

### Students

- **Get All Students**: `GET /students`
- **Get Student by ID**: `GET /student/:id`
- **Update Student by ID**: `PATCH /student/:id/update`
- **Delete Student by ID**: `DELETE /student/:id/delete`
- **Get My Profile**: `GET /student/my-profile`

### Faculty

- **Get All Faculties**: `GET /faculties`
- **Get Faculty by ID**: `GET /faculty/:id`
- **Update Faculty by ID**: `PATCH /faculty/:id/update`
- **Delete Faculty by ID**: `DELETE /faculty/:id/delete`
- **Get My Profile**: `GET /faculty/my-profile`

### Admin

- **Get All Admins**: `GET /admins`
- **Get Admin by ID**: `GET /admin/:id`
- **Update Admin by ID**: `PATCH /admin/:id/update`
- **Delete Admin by ID**: `DELETE /admin/:id/delete`
- **Get My Profile**: `GET /admin/my-profile`

### Authentication

- **Login**: `POST /auth/login`
- **Refresh Token**: `POST /auth/refresh-token`
- **Change Password**: `PATCH /auth/change-password`
- **Forgot Password**: `POST /auth/forget-password`
- **Reset Password**: `POST /auth/reset-password`

## ER-Diagram `In-progress 😑`

## Admin Generated ID For Student System

> `Year` + `SemesterCode` + `4 Digits Code` → _**2024020001**_
>
> > - Semester Code List
> > - 01 → Autumn
> > - 02 → Summer
> > - 03 → Fall

[ER-Diagram](https://lucid.app/lucidchart/7627270e-2309-4ac6-9d49-6f50b194f8e6/edit?invitationId=inv_599915a0-d5f5-433a-839c-5d83f852728b)