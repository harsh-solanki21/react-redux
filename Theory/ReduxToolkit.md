# Redux Toolkit

- The 4 key components that enable this centralized approach to state management are:

### Store

- The Redux store is like a giant container that holds all the data for your application. It is the single source of truth for your application's state.

### Actions

- An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.
- An action must have a "type" property describing the action being performed. This "type" property is typically defined as a string constant to ensure consistency and avoid typos.
- In addition to the "type" property, an action can have a "payload" property. The "payload" property represents the data that provides additional information about the action being performed. For example, if an action type is ADD_TASK, the payload might be an object containing a new task item's "id", "text", and "completed status".

#### `Here's an example of an action:`

```jsx
{
  type: 'ADD_TASK',
  payload: {
    id: 1,
    text: 'Buy groceries',
    completed: false
  }
}
```

### Dispatch

- In Redux, dispatch is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

### Reducers

- Reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

#### `Here's an example of a simple reducer:`

```jsx
const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```

<br />
<br />

## RTK Query

- RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

<br />

#### Mutation

- Mutations are used to send data updates to the server and apply the changes to the local cache. Mutations can also invalidate cached data and force re-fetches.

<br />
<br />

## Redux Thunk

- In Redux, middleware has always been used to perform asynchronous tasks.
- A middleware is designed to enable developers to write logic that has Side Effects (any external interaction outside an existing client application such as fetching data from an API).
  An example is a package called `redux-thunk`.

<br />

#### createAsyncThunk

- CreateAsyncThunk is where we perform asychronous tasks in our slice. It receives 2 parameters:

<br />

1. Name of the action, the standard convention is `[slice name]/[action name]` such as `posts/fetchPosts`

2. The callback function that performs the API call and returns the result when it is finished. Our API call returns a `promise` (which is an object that represents the status of an asynchronous operation, in our case an API call).
   For each action that is created using `createAsyncThunk`, there are three probable state for the promise returned. `pending`, `fulfilled`, `rejected`.

<br />

- We decide what Redux should do in the 3 different stages of the API call. Inside our slice we will add a property called `extraReducers` that holds a couple functions to handle the return of the API: `pending`, `fulfilled` and `rejected`.

<br />

#### extraReducers

- We use extraReducers to handle actions that are created by `createAsyncThunk`. Based on the status of the promise, we will update our state.
