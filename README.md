# Voting Application

This is a fullstack application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.

## Frontend

## Technologies Used

- React.js
- React Router Dom
- Alerts - sweetalert

## Backend

## Features

- User sign up and login with Aadhar Card Number and password
- User can view the list of candidates
- User can vote for a candidate (only once)
- Admin sign up and login with Aadhar Card Number and password
- Admin can manage candidates (add)
- Admin have display total vote count
- Admin is created only once

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication

# API Endpoints

## Authentication

### Sign Up

- `POST /signup`: Sign up a user

### Login

- `POST /login`: Login a user

### Sign Up

- `POST /admin/signup`: Sign up a admin

### Login

- `POST /admin/login`: Login a admin

## Candidates

### Get Candidates

- `GET /candidates`: Get the list of candidates with votes

### Add Candidate

- `POST /candidates`: Add a new candidate (Admin only)

## Voting

### Vote for Candidate

- `POST /candidates/vote/:id`: Vote for a candidate (User only)
