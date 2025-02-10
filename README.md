## Portfolio Backend

A Node-Express application to manage the portfolio. The application has features such as CRUD operation for Project and Blog management.

## Features

### Project Management:

- Add new project with details such as title, slug, brief, description, images
- Update, read and delete projects

### Blog Management:

- Add new blog with details such as title, brief, cover, slug, publishedDate, readTime
- Update, read and delete blogs

### Message Read:

- Reads and send messages

## Getting Started

Follow the instructions below to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (Local or Atlas)
- A package manager (npm or yarn)

## Installation

Clone the repository:

```bash
git clone https://github.com/RittikaDev/portfolio-backend
cd portfolio-backend
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

- Create a .env file in the project root and configure secret keys

```bash
PORT=5000
DATABASE_URL=mongodb+srv://rittikadev:rittikaadmin1234@cluster0.729wj.mongodb.net/assignment-two?retryWrites=true&w=majority&appName=Cluster0
```

Run the application:

```bash
npm run start:dev
```

Build the application:

```bash
npm run build
```

API Documentation

- Once the server is running, you can access the API documentation (if Swagger or Postman is configured) or use the endpoints directly via Postman.

### API Endpoints

#### Project Management

- Create a Project:
  - POST /api/projects
  - Request Body: {
    "title": "title",
    "slug": "slug",
    "brief": "brief",
    "description": [
    "",
    "",
    ""
    ],
    "cover": "",
    "images": [
    ""
    ],
    "type": "Official",
    "frontend": {
    "technologies": [
    "Angular",
    "Typescript",
    "Angular Material",
    "Bootstrap"
    ],
    "deploymentLink": "",
    "github": ""
    },
    "backend": {
    "technologies": [
    ".Net Core",
    "SQL",
    "Entity Framework"
    ],
    "deploymentLink": "",
    "github": ""
    }
    }
- Get All Projects:
  - GET /api/projects/featured
- Get Single Project
  - GET /api/projects/:projectId
- Update a Project:
  - PUT /api/projects/:projectId
  - Request Body: {
    "title": "title",
    "slug": "slug",
    "brief": "brief",
    "description": [
    ],
    "cover": "",
    "images": [
    "",
    ],
    "type": "Personal",
    "frontend": {
    "technologies": [
    "",
    ],
    "deploymentLink": "",
    "github": ""
    },
    "backend": {
    "technologies": [
    "NodeJs",
    "ExpressJs",
    "MongoDB", "ShurjoPay"
    ],
    "deploymentLink": "",
    "github": ""
    }
    }
- Delete a Project
  - DELETE /api/projects/:carId

#### Blog Management

- Create an Blog:
  - POST /api/blog
- Get All Blog:
  - GET /api/blog
- Get Single Blog
  - GET /api/blog/:blogId
- Update a Blog:
  - PUT /api/blog/:blogId
- Delete a Blog
  - DELETE /api/blog/:blogId

#### Contact Management

- Create an Blog:
  - POST /api/contact
- Get All Blog:
  - GET /api/contact

## Project Structure

```go
car-store-B4A2V3/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── projects/
│   │   │   │   ├── projects.controller.ts
│   │   │   │   ├── projects.model.ts
│   │   │   │   ├── projects.route.ts
│   │   │   │   ├── projects.service.ts
│   │   │   │   ├── projects.interface.ts
│   │   │   │   └── projects.validation.ts
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── blog.controllers.ts
│   │   │   │   ├── blog.model.ts
│   │   │   │   ├── blog.route.ts
│   │   │   │   ├── blog.service.ts
│   │   │   │   ├── blog.interface.ts
│   │   │   │   └── blog.validation.ts
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   ├── contact.controllers.ts
│   │   │   │   ├── contact.model.ts
│   │   │   │   ├── contact.route.ts
│   │   │   │   ├── contact.service.ts
│   │   │   │   ├── contact.interface.ts
│   │   │   │   └── contact.validation.ts
│   │   ├─── config/
│   │       └── index.ts
│   ├── app.ts
│   ├── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
