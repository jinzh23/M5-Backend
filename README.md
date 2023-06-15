# Backend built with nodejs, express linked to a MongoDB database & hosted with docker containers and docker compose

## Metro re-design of homepage and search listing page

---

### **Overview**

- Week 1: Will be setting up the infrastructure for UX Designer's application to run using docker containers, docker compose and MongoDB

- Week 2: Creating the application based on the version of prototype design received from UX Designers at the end of Week 1.

---

### **About our projects**

### _Metro Re-design_

(a) A redesigned home page at <https://metronz.co.nz/>, taking the customers feedback into consideration

- Metro Home page by Jin Zhang

(b) A redesigned search function and features page(s) of property listings, using the company’s third party web page at <https://apply.tpsportal.co.nz/tps6175?> as a reference.

- Metro search listing page by Ricardo Diaz Rodriguez

(c) A complete redesign building upon the property listings page. This additional listing information page provides the user with more detailed information about the selected property(s). Where they have the options to enquire about the property, book a viewing of the property or make an application for the property.

- Metro listing information page by Heni Kimura

### **Purpose**

The purpose of this project is to assimilate a working environment, adopting an agile mindset and putting into practice. Collaborating as a development team to deliver the re-designed prototype.

### **Built with:**

- [Nodejs](https://img.shields.io/badge/Nodejs-20232A?style=for-the-badge&logo-nodejs&logoColor=026e00 "Nodejs")
- [Nodejs-url](https://nodejs.org/en "Nodejsurl")
- [Expressjs](https://img.shields.io/badge/Expressjs-20232A?style=for-the-badge&logo-expressjs&logoColor=026e00 "Expressjs")
- [Expressjs-url](https://expressjs.com/ "Expressjsurl")
- [Dotenv](https://img.shields.io/badge/Dotenv-20232A?style=for-the-badge&logo-dotenv&logoColor=026e00 "Dotenv")
- [Dotenv-url](https://www.dotenv.org/ "Dotenvurl")
- [Cors](https://img.shields.io/badge/Cors-20232A?style=for-the-badge&logo-cors&logoColor=026e00 "Cors")
- [Cors-url](https://www.npmjs.com/package/cors "Corsurl")
- [Nodemon](https://img.shields.io/badge/Nodemon-20232A?style=for-the-badge&logo-nodemon&logoColor=026e00 "Nodemon")
- [Nodemon-url](https://nodemon.io/ "Nodemonurl")
- [MongoDB](https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo-mongodb&logoColor=026e00 "MongoDB")
- [MongoDB-url](https://www.mongodb.com/ "MongoDBurl")
- [Docker](https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo-docker&logoColor=CF649A "Docker")
- [Docker-url](https://www.docker.com/ "Dockerurl")

---

### **Getting started:**

### _Prerequisites -_

#### _The software needed to install -_

- _Dependencies:_

- Express

  ```sh
  npm i express
  ```

  - Dotenv

  ```sh
  npm i dotenv
  ```

- Cors

  ```sh
  npm i cors
  ```

- MongoDB

  ```sh
  npm i mongodb
  ```

- _DevDependencies:_

- Nodemon

  ```sh
  npm i -D nodemon
  ```

---

### **Project structure and installation:**

1. Root directory 

   ```sh
   Mission 5
   ```

2. Backend directory

   ```sh
   M5-Backend
   ```

3. Clone the backend repo

   ```sh
   git clone https://github.com/jinzh23/M5-Backend.git
   ```

4. Install NPM packages

   ```sh
   npm install
   ```   ```

5. Frontend directory

   ```sh
   M5-Frontend
   ```

6. Clone the frontend repo

   ```sh
   git clone https://github.com/HMoana/M5-Frontend.git
   ```

7. Install NPM packages

   ```sh
   npm install
   ```

---

### **Docker set-up:**

- Open integrated terminal on _M5-Backend_
- Open _docker desktop_ 
- In the terminal use command _'docker-compose up --build'_ this will build, run & compose the docker containers
- After some time the terminal will show _mongo output & listening to the server port_
- In _docker desktop_ both mongo and server containers should appear as _'running'_
- Open another integrated terminal on _M5-Frontend_ and use command _'npm start'_

---

### **Features:**

- Dockerized server built with nodejs and express
- Dockerized mongo database
- Built, hosted and run by docker compose
- Use of api to communicate requests & responses with dockerized containers

---

### **Future improvements:**

- Improve connection string to mongo compass
- Use mongoose, creating schemas and models
- Refactor and use testing during development

---

### **Contributors & our Contacts:**

_Developers:_

- Jin Zhang - <jinz@missionreadyhq.com>
- Heni Kimura - <henik@missionreadyhq.com>
- Ricardo Diaz Rodriguez <diiaz2910@gmail.com>

_UX Designers:_

- Aneesha Baidwan - <aneeshab@missionreadyhq.com>
- Myint Aung - <myint@missionreadyhq.com>

### **Project Link:**

[Github repository](https://github.com/jinzh23/M5-Backend.git "Github backend repository")
[Github repository](https://github.com/HMoana/M5-Frontend.git "Github frontend repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.

### **Acknowledgments:**

- [Programming with Mosh](https://youtu.be/pTFZFxd4hOI "Programming with Mosh")
- [Programming with Mosh, Docker Compose](https://youtu.be/HG6yIjZapSA "Programming with Mosh, Docker Compose")
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/ "Docker Compose")
- [ZenOfAI](https://medium.com/zenofai/how-to-build-a-node-js-and-mongodb-application-with-docker-containers-15e535baabf5 "ZenOfAI")
- [MongoDB](https://www.mongodb.com/basics/get-started "MongoDB")
- [MERN](https://youtu.be/0B2raYYH2fE "Mern")