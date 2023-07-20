# Angular-DotNet-CRUD

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is a CRUD (Create, Read, Update, Delete) project with the front-end in Angular and the back-end in C# .NET 6. The project allows you to register superheroes and utilizes an API to connect to the SQL Server database.

## Technologies Used

- Angular
- C# .NET 6
- SQL Server

## Prerequisites

To run the project locally, you'll need the following tools and dependencies installed:

- Node.js (https://nodejs.org/)
- Angular CLI (https://angular.io/cli)
- .NET 6 SDK (https://dotnet.microsoft.com/download/dotnet/6.0)
- SQL Server (or a running instance of SQL Server to connect to)

## How to Run the Project Locally

### Front-end (Angular)

1. Open a terminal and navigate to the "AngularClient" directory inside the project.
2. Run the `npm install` command to install the front-end dependencies.
3. Run the `ng serve` command to start the Angular development server.
4. Open your web browser and go to `http://localhost:4200/` to see the application running.

### Back-end (C# .NET)

1. Open the Visual Studio solution inside the "DotNetAPI" directory in the project.
2. In Visual Studio, set "DotNetAPI" as the startup project.
3. Ensure that the SQL Server connection string in the `appsettings.json` file is properly configured.
4. Run the application by pressing F5 or clicking the "Run" button in Visual Studio.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
