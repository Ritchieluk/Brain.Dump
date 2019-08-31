import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import User from "./pages/User";
import Journal from "./pages/Journal";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default[
    {path: "/", name: "Home", component: Home},
    {path: "/aboutus", name: "AboutUs", component: AboutUs},
    {path: "/profile", name: "User", component: User},
    {path: "/journal", name: "Journal", component: Journal},
    {path: "/signUp", name: "SignUp", component: SignUp},
    {path: "/signIn", name: "SignIn", component: SignIn}
];