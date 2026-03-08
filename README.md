# 🚀 Drizzle URL Shortener

A high-performance, modern, and production-ready URL shortener built with **React**, **Express**, **Drizzle ORM**, and **PostgreSQL**. The entire stack is containerized for seamless development and deployment.

---

## ✨ Features

- **Blazing Fast**: Compiled TypeScript backend and optimized Vite frontend.
- **Glassmorphic UI**: A premium, dark-mode landing page with smooth animations (Framer Motion).
- **Dockerized**: Single-command setup for Database, API, and Client.
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL.
- **Management API**: Professional API structure under `/api/url`.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide React.
- **Backend**: Node.js, Express, TypeScript, Drizzle ORM.
- **Database**: PostgreSQL 15.
- **Infrastructure**: Docker, Docker Compose.

---

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) & Docker Compose installed.
- (Optional) [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/) for local development.

### Setup & Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pratham-prog861/full-stack-url-shortener-docker.git
   cd full-stack-url-shortener-docker
   ```

2. **Spin up the containers**:

   ```bash
   docker-compose up --build
   ```

3. **Initialize the Database Schema**:
   In a new terminal, while the containers are running, navigate to the `server` folder (or stay in root) and run:

   ```powershell
   # Move to server directory
   cd server

   # Push the schema to the running database container
   docker exec -it drizzle-server pnpm db:push
   ```

---

## 🔗 Project Structure

```bash
├── client/           # React frontend (Vite)
├── server/           # Express backend (TypeScript + Drizzle)
├── docker-compose.yml # Orchestration for DB, Server, and Client
└── LICENSE           # MIT License
```

---

## 📡 API Overview

| Method   | Endpoint              | Description                        |
| :------- | :-------------------- | :--------------------------------- |
| `GET`    | `/api/url`            | API Health Check                   |
| `POST`   | `/api/url/shorten`    | Create a new short URL             |
| `GET`    | `/api/url/links`      | Get last 10 shortened links        |
| `DELETE` | `/api/url/:shortCode` | Delete a specific link             |
| `GET`    | `/:shortCode`         | **Redirection Route** (Root level) |

---

## 🛡️ License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Pratham Darji**

- [GitHub](https://github.com/pratham-prog861)
- [LinkedIn](https://www.linkedin.com/in/pratham-darji-b704092a2/)
