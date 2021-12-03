### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To enable navigation among views of components in a React app, allows changing the browser URL, and keeps the UI in sync with the URL.

- What is a single page application?
A single-page app is a web app that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.

- What are some differences between client side and server side routing?
A server-side request causes the whole page to refresh everytime a new GET request is sent to the server.  This will cause the whole page to refresh.

A client-side route happens when the route is handled internally by the javascript that is loaded on the page.  The URL changes but the request to the server is prevented.  The new URL will result in a changed state of the application, like rendering new components.

- What are two ways of handling redirects with React Router? When would you use each?
Using the history prop rendered by react router and using the redirect component.  We can use the redirect component when the user tries to go to page that doesn't exist.  You can use history to send a user back to another URL.

- What are two different ways to handle page-not-found user experiences using React Router? 
You can render a Error page component.  You can redirect to the proper URL.
- How do you grab URL parameters from within a component using React Router?
By using the useParams react hook.
- What is context in React? When would you use it?
A React component that subscribes to context changes.  To share data that can be considered global for react components.

- Describe some differences between class-based components and function
  components in React.
Syntax and state and lifecycle methods.

- What are some of the problems that hooks were designed to solve?
Allows ability to create/access React State and lifecycles.