import { useDispatch, useSelector } from "react-redux";
import TableData from "./TableData";
import { AppDispatch, RootState } from "../../app/store";
import { User, fetchUsers } from "../../features/asyncThunk/userSlice";
import { useEffect } from "react";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  let content;

  if (status === "loading") {
    content = <div className="text-center my-5">Loading...</div>;
  } else if (status === "succeeded") {
    content = users.map((user: User) => (
      <TableData key={user.id} user={user} />
    ));
  } else if (status === "failed") {
    content = (
      <>
        <h1>Users not found</h1>
        <p className="text-center text-danger">{error}</p>
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Here are all the Users</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default Users;
