import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";


const Dashboard = () => {
  const currentUser = useSelector(selectCurrentUser);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authenticated");
//     if (loggedInUser) {
//       setauthenticated(loggedInUser);
//     }
//   }, []);

  if (!currentUser) {
    return <Navigate replace to="/auth" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};

export default Dashboard;
