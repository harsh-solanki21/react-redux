# useEffect Cleanup

- It prevents memory leak (unused space in memory that is not properly released).
- Cleanup function is used to prevent unwanted behaviors, thereby optimizing application performance.
- Use cleanup when performing Asynchronous operation.

<br />

#### `Example 1:`

```jsx
import { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div>{count}</div>;
};
```

<br />

#### `Example 2:`

- This example will explain the absolute need for this cleanup function and how it can improve the performance of our application.
- The useEffect cleanup function can be crucial when working with async operations, such as API requests because it allows you to cancel any ongoing async tasks before the component is unmounted.

Consider the following example:

```jsx
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      {/* render other user data */}
    </div>
  );
};
```

- In this example, the UserProfile component fetches and displays information about a particular user. If the component is unmounted (for example, if the user navigates away from the component), the ongoing API request will still be in progress in the background. This can cause unnecessary network traffic and potentially result in data inconsistencies if the response from the API is received after the component has been unmounted.

<br />

- By using a useEffect cleanup function, you can cancel the ongoing API request when the component is unmounted, like so:

```jsx
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`, { signal });
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [userId]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      {/* render other user data */}
    </div>
  );
};
```

- In this version of the UserProfile component, the useEffect cleanup function cancels the ongoing API request by calling the abort method on the AbortController instance. This ensures that the request is stopped when the component is unmounted, helping to prevent unnecessary network traffic and data inconsistencies.

<br />

#### `Example 3:`

- Cancel an Axios request
- Axios comes with a cancellation option to finish a request before it ends. This is useful besides the cleanup function to prevent memory leaking.

```jsx
const controller = new AbortController();

useEffect(() => {
  await axios.get('/users', {
    signal: controller.signal
  })
  // ...

  return () => {
    controller.abort()
  }
}, [])
```
