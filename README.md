# Project README

## Overview

This project utilizes several frameworks and libraries to build a scalable and efficient application. Below are the primary technologies used:

### Frameworks and Libraries
- **ExpressJS**: A minimal and flexible Node.js web application framework.
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Socket.IO**: A library for real-time, bidirectional communication between web clients and servers.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.

### Databases
- **MongoDB**: A document-oriented NoSQL database used for high-volume data storage.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: An open-source ORM that simplifies data modeling, migrations, and queries.

## Installation

### Creating the Environment Configuration File

Copy the .env.example file to .env.

```console
cp .env.example .env
```

### Prerequisites
Ensure you have the following installed:
- Node.js
- pnpm (fast, disk space-efficient package manager)

### Setting Up the Monorepo

We use Lerna to manage our monorepo. Follow these steps to set up the project:

1. **Install Lerna globally**:
    ```bash
    pnpm install -g lerna
    ```

2. **Bootstrap the project**:
    ```bash
    pnpm bootstrap
    ```

## Running the Services

### Authentication Service
To start the authentication service, use the following command:
```bash
pnpm run:auth-api

```
### Order Service
To start the order sevice,
use the following command:
```
pnpm run:order-api
```

