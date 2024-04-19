import { useDispatch } from "react-redux";
import { deleteUser, User } from "../../features/asyncThunk/userSlice";
import { AppDispatch } from "../../app/store";

const TableData = ({ user }: { user: User }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    try {
      dispatch(deleteUser(user));
    } catch (error) {
      console.log(`Failed to delete the user ${error}`);
    }
  };

  return (
    <div className="item">
      <div>
        <span>{user.id}</span>
        {" | "}
        <span>{user.username}</span>
        {" | "}
        <span>{user.email}</span>
        {" | "}
        <span>{user.phone}</span>
      </div>
      <div>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <br />
    </div>
  );
};

export default TableData;
