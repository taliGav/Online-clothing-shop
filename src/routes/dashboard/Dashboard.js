import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./../../contexts/user-context";


const Dashboard = () => {
  const { currentUser } = useContext(userContext);

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