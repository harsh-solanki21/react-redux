# Higher-order components (HOCs)

- A Higher Order Components (HOC) are a powerful feature of the React that allows us `to reuse and share logic between components.` HOCs are not part of the React API, but a pattern that emerges from React's compositional nature.

- A Higher Order Component is a function that `takes a component and returns a new component with added or enhanced functionality`.

<br />

###### Here's a simple example of a HOC that adds a simple login feature to a component:

```jsx
import React, { useState } from "react";

const withLogin = (WrappedComponent) => {
  return (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    return (
      <WrappedComponent
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
        {...props}
      />
    );
  };
};

const LoginButton = (props) => {
  return (
    <button onClick={props.toggleLogin}>
      {props.isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};

const LoginButtonWithHOC = withLogin(LoginButton);
```

<br />

- In this example, the **withLogin** HOC takes the LoginButton component as an argument and returns a new component with the added isLoggedIn and toggleLogin state and methods. The original **LoginButton** component is wrapped by the HOC and receives the added props.

- You can use the HOC just like any other component, and it will add the new functionality to the wrapped component.

- Note that HOCs are a powerful pattern and should be used with caution, as they can make your code more complex and harder to understand.
  _It's best to use HOCs when you need to share logic between multiple components, rather than using them for every component._

<br />

##### Here are some real-life scenarios where HOCs shine:

- Authentication and Authorization
- Data fetching and state management
- Error handling and logging
- Analytics and performance tracking
- Theming and styling

<br />

##### Best Practices for Using HOCs:

- **Naming conventions:** Use the "with" prefix to make your HOCs easily recognizable, like _withAuth_ or _withErrorHandler_.
- **Maximizing HOC composability:** HOCs can be combined to create even more powerful components.
- **Avoiding prop name collisions:** Be mindful of prop names when using multiple HOCs to avoid overwriting important data.
- **Stateless HOCs and pure components:** Keep your HOCs stateless and pure for maximum reusability and performance.
- **Ref forwarding:** If you need access to the wrapped component’s instance, use React’s forwardRef to pass refs through your HOCs.
