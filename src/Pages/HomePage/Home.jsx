import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            start
           <Link to="/dashboard"> <button>dashboard</button></Link>
        </div>
    );
};

export default Home;