
 <img src="#"> </img>
 
  <h1 align="center" id="top">Fincas Vlc - Front end</h1>

## 1. Introduction
This project is a database designed with well-defined relationships between tables, and a subsequently developed REST API that meet the next objectives and specified requirements for the management of the Consejo General de Colegios de Administradores de Fincas, with Node.js and Express technologies, coupled with MongoDB/Mongoose, a robust REST API for an online management application.
Opted for the Model-View-Controller (MVC) pattern in structuring our project, driven by the aim of achieving an efficient and visually organized application. The MVC architecture divides our system into three key components: the Model, responsible for managing data and implementing business logic; the View, handling visual representation and user interface; and the Controller, managing control logic and user interaction.

## User Benefits

- Improved Accessibility: Participants have easy access to event information, reducing friction in the registration process.

- Engaging Experiences: Attendees benefit from interactive event features, fostering engagement and networking opportunities.

- Data-Driven Decisions: Data analytics empower organizers to refine event strategies, ensuring they meet participant expectations.

- Enhanced Efficiency: Organizers can save time and resources by automating administrative tasks, allowing them to focus on creating memorable events. 

- We have implemented qrcode in our project to generate QR codes easily and quickly. qrcode is a Node.js library that allows creating QR codes in various output formats, such as PNG or SVG, as well as directly in the console.

- **Admin area**: We have implemented a real-time dashboard that updates as clients arrive. This dynamic dashboard provides up-to-the-minute information and automatically adjusts as new clients join the system.



  <img src="#"> </img>
  


## Index
1. [Structure](#structure)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Status](#status)
6. [Flow](#flow)
7. [FAQ](#faq)
8. [Relevant Links](#relevant-links)
9. [Credits](#Credits)
10. [Contribution](#contribution)
11. [ Development made by](#Developmentmadeby)



## 1. Structure
The choice to structure our project using the Model-View-Controller (MVC) pattern is based on the pursuit of an efficient and visually organized approach for our application. MVC divides the application into three core components: the Model, responsible for data management and business logic; the View, handling visual representation and the user interface; and the Controller, managing control logic and user interaction. This separation of responsibilities not only simplifies collaborative development but also enhances maintainability by enabling developers to work on specific parts of the project without affecting the whole. Furthermore, it facilitates code reuse, potentially speeding up development, and ensures that the application is scalable and adaptable as it evolves, resulting in a more robust and visually appealing final product. Ultimately, the choice of MVC contributes to a more efficient and successful development experience for our project.


## 2. Installation


### Front-end dependencies

These are the front-end dependencies used in the project, along with brief explanations of their roles and how to install them.

**React**

React is a widely adopted and extensively used JavaScript library in the web development world. React simplifies the creation of user interfaces by offering a structured and efficient way to build interactive web applications. It focuses on building reusable UI components that efficiently update and render when data changes. React is known for its performance, developer-friendly tools, and the ability to create single-page applications (SPAs).

```
npm install react
``` 

**Redux**

Redux is a predictable state management library commonly used in JavaScript applications, particularly with frameworks like React. It helps manage the state of your application in a predictable and efficient way, making it easier to develop complex user interfaces and handle data flow.

```
npm @reduxjs/toolkit
``` 


**Vite**

Vite is a build tool and development server that is designed to make modern web development faster and more efficient. It is often used for building JavaScript and TypeScript-based web applications, particularly with frameworks like Vue.js and React.

```
npm install vite
```

**AntDesign**

AntDesign is a popular and highly customizable component library for building user interfaces in React. It is designed to make it easy for developers to create beautiful and accessible UIs while maintaining flexibility and extensibility.

```
npm install antd
```

**Axios**

Axios is a popular JavaScript library that simplifies the process of making HTTP requests from web browsers or Node.js applications. It provides a clean and straightforward API for sending HTTP requests and handling responses. Axios is commonly used in web development for tasks like fetching data from a server, sending data to a server, or interacting with APIs.

```
npm install axios
```


**react-dom**

react-dom is a package in the React ecosystem that provides the necessary tools and methods for rendering React components in web applications. It specifically focuses on rendering React components into the Document Object Model (DOM) of a web page. Here are some key features and concepts related to react-dom.

```
npm install react-dom

```

**react-router-dom**

react-router-dom is a popular JavaScript library for adding client-side routing and navigation to React applications. It allows you to create single-page applications (SPAs) with multiple views and navigation between them without the need for full-page reloads. Here are some key features and concepts related to react-router-dom.

```
npm install react-router-dom

```

**Sass - (Syntactically Awesome Stylesheets)**

Sass is a CSS preprocessor that extends the capabilities of regular CSS. It adds features and functionality that make it easier to write and maintain stylesheets for web development. Sass is widely used in web development projects to improve the efficiency and organization of CSS code. Here are some key features and concepts related to Sass. 

```
npm install sass
```

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

<h1>

  <img src="#"> </img>
  
</h1>

### 2.3 .Development Dependencies

Below is a list of development dependencies used in this project along with a brief explanation of their functionality.


```
npm install nodemon -D

```

<h1>

  <img src="#"> </img>
  
</h1>

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 3. Usage

Once you have installed the main and secondary dependencies in your project, you can start using the Eventum Front end. Here are the basic steps for using it:

### 3.1. Start the Server

```
npm start
```

This command will start the server and get it up and running. Make sure the server is running before making any requests.

If you need more information about the API **(Back-end)**, feel free to visit our [Postman documentation](https://grey-meadow-86508.postman.co/workspace/poppaBack~40055b61-3f05-4b79-852e-054c752905f0/collection/28231572-60a28a80-ae6a-46a1-a63b-db457685977e?action=share&creator=28231572&active-environment=28231572-0744ac4e-249a-4509-8a21-792b6de4c867).

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 4. Configuration

#### 1-Create a new React project: Use Create React App or set up manually.
#### 2-Install Redux dependencies: Run npm install redux react-redux redux-thunk.
#### 3-Configure the Redux Store: Create a store to manage global state.
#### 4-Create Reducers: Define reducers to update state with actions.
#### 5-Create Actions: Design actions to dispatch events that modify state.
#### 6-Connect components: Utilize the connect function to link components to the Redux store.
#### 7-Define Routes: Set up routes using react-router-dom for navigation.
#### 8-Style components: Apply styling using SCSS or libraries like AntDesign.
#### 9-Develop components: Build reusable React components.
#### 10-Test and Deploy: Write tests, build for production, and deploy to a hosting server or platform.


### 4.1 Credentials

The project must have an .env file, which will contain all the environment variables used for both database connection and project deployment configuration. Among our files, you will find an example.env file that you can use as a template to input your own data if you wish to continue the development of this project.

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 5. Status

#### Scrum Methodology

1. **Adopting Agile Methodology:** Our project management approach is rooted in the principles of agility.
2. **Following Scrum Practices:** Specifically, Scrum methodology.
3. **Iterative Development:** Development cycles, within sprints.
4. **Collaborative Teams::** Cross-functional teams are assembled to address various tasks.
5. **Product Backlog:** Well-maintained product backlog ensures the prioritization of tasks.
6. **Sprint Sessions::** Comprehensive planning meetings are conducted to select tasks.
7. **Daily Standups:** Regular standup meetings facilitate daily coordination among team members.
8. **Review and Reflect:** Concluding each sprint, we review completed work and engage in retrospectives to enhance our processes.
9. **Adaptability:** Scrum promotes adaptation based on feedback, fostering flexibility in our approach.
10. **Continuous Enhancement:** Our primary focus is to deliver incremental value and perpetually refining our methodologies.

## 6. Flow 

<h1>

  <img src="#"> </img>
  
</h1>


<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 7. FAQ

## Frequently Asked Questions (Front End)

### How do I start the front-end development server?

To start the front-end development server, run the command `npm start` in your project's root directory. Ensure that you have installed the necessary dependencies with `npm install` beforehand.

### Where can I configure front-end settings?

Front-end configuration settings, such as API endpoints or environment variables, can be managed in the `.env` file located in the project's root directory. You can use the example.env file as a reference.

### How do I access the Redux DevTools during development?

You can access the Redux DevTools by installing the Redux DevTools browser extension for Chrome or Firefox. Once installed, you can use it to inspect and debug the Redux state and actions.

### What should I do if I encounter errors or bugs in the front-end?

If you encounter errors or bugs in the front-end, check the browser console for error messages. Review your code, ensure Redux actions and reducers are correctly configured, and verify that API requests are functioning as expected.

### How can I customize the user interface (UI) and components?

To customize the UI and React components, you can edit the source code located in the `src` directory. Modify or create new React components, update styles, and manage state with Redux as needed to tailor the application to your requirements.

### How do I handle routing in my React application?

For routing in your React application, you can use the `react-router-dom` library. Define routes in your application using `BrowserRouter` and `Route` components. Check the official documentation for detailed guidance on setting up routes.

### Where can I find additional resources for React and Redux?

To expand your knowledge of React and Redux, explore the official documentation and tutorials available on the following websites:
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Official Documentation](https://redux.js.org/)
- [React-Redux Official Documentation](https://react-redux.js.org/)
- [Redux Toolkit Official Documentation](https://redux-toolkit.js.org/)

### How do I optimize the performance of my React and Redux application?

Optimizing performance involves techniques like code splitting, lazy loading, and state normalization. Refer to performance optimization guides in the official documentation to enhance the speed and efficiency of your application.

### How can I get support for specific issues or questions?

If you encounter specific issues or have questions related to your React and Redux project, consider seeking help in online developer communities, forums, or by posting questions on platforms like Stack Overflow. You can also engage with the React and Redux communities on social media or consult project-specific documentation if available.

### How do I deploy my React and Redux application to a production server?

To deploy your React and Redux application to a production server, you'll need to build your app for production using `npm run build` and then configure the deployment to a hosting platform like Netlify, Vercel, or AWS. Ensure that production configurations are correctly set in the `.env` file and the backend is configured for production use.


<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 8. Relevant links

#### [React Official Documentation](https://legacy.reactjs.org/docs/getting-started.html)
#### [Redux Official Documentation](https://redux.js.org/)
#### [NodeJS download](https://nodejs.org/es/download)
#### [MongoDB download](https://cloud.mongodb.com/)

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 9. Credits

**Special thanks to the all Team**

## Cheers to the entire development team, as well as every member of the design team and the talented data experts. Your collaborative effort has played a pivotal role in bringing this project to life in record time.

--

# Data Science Overview:

- Data Acquisition, Analysis, Visualization: acquiring, analyzing, and visualizing data.
- Application Development with Python and Django: The core of our applications is built using the Flask framework.
- Data: contribution to the Database.

<img align="center" height="50" width="50" src="https://cdn-icons-png.flaticon.com/128/1387/1387537.png">
<img align="center"  height="50" width="50" src="https://cdn-icons-png.flaticon.com/128/1849/1849554.png">
<img align="center" height="50" width="50" src="https://cdn.svgporn.com/logos/visual-studio-code.svg">

--

# Overview UX/UI:


- Interface interaction and Design.
- Ideation and conceptualization: We brainstorm ideas and conceptualize user interfaces.
- Conduct user research to gain insights into user needs and preferences.
- Focus on designing interactions and interfaces that enhance user experiences.

<img align="center" height="50" width="50" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png">
<img align="center" height="50" width="50" src="https://cdn-icons-png.flaticon.com/128/552/552220.png">
<img align="center" height="50" width="50" src="https://cdn-icons-png.flaticon.com/128/1203/1203887.png">
<img align="center" height="50" width="50" src="https://cdn-icons-png.flaticon.com/128/7514/7514332.png">


<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>

## 10. Contribution

We welcome contributions from the community to help improve Eventum. If you wish to contribute, please follow these guidelines:

1. **Fork the Repository**

   To get started, fork the Eventum repository to your GitHub account. This will create a copy of the project that you can freely experiment with.

2. **Clone the Repository**

   Clone your forked repository to your local development environment using the following command (replace `[your_username]` with your GitHub username):

   ```
   git clone https://github.com/[your_username]/Fincas_Front.git
   ```

**Create a new branch**
Before making any changes, create a new branch for your contribution. This helps keep the main branch clean and allows for a focused contribution:

```
git checkout -b my-contribution
```

**Make Changes and Commit**
Make the necessary changes or additions to the codebase. Once you're satisfied with your changes, commit them using descriptive commit messages:

```
git commit -m "Add feature: [your feature description]"
```

**Push to Your Fork**
Push your changes to your forked repository on GitHub:

```
git push origin my-contribution
```

<div align="right">
  <a href="#top">↑ Back to the top</a>
</div>


## 11. FULL STACK TEAM 😁🚀

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/VeroPolegre">
        <img height="80" width="80" src="https://avatars.githubusercontent.com/u/145065743?v=4" alt="Vero Polegre">
      </a>
      <br>
      <a href="https://github.com/VeroPolegre">Vero Polegre</a>
    </td>
    <td align="center">
      <a href="https://github.com/cescalberola">
        <img height="80" width="80" src="https://avatars.githubusercontent.com/u/128794614?v=4" alt="Francesc Alberola">
      </a>
      <br>
      <a href="https://github.com/cescalberola">Francesc Alberola</a>
    </td>
  </tr>
</table>



