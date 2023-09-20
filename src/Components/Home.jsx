import { Link, Outlet } from "react-router-dom";

const Home = () => {


    return (
        <div>
            <div className="flex gap-2 mt-4 justify-center">

                <Link to={"/"}> <button className="text-lg bg-sky-200 rounded-md px-4 py-2 ">Home!!</button> </Link>
                <Link to={"/countries"}> <button className="text-lg bg-sky-200 rounded-md px-4 py-2 ">View All Countries!!</button> </Link>
            </div>

            {/* <h1 className="text-5xl mt-52 text-center">Home Sweet Home</h1> */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;