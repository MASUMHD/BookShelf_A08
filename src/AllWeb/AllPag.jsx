import { Outlet } from "react-router-dom";
import Nab from "../components/Nab";

const AllPag = () => {
    return (
        <div>
            <div className="h-16">
                <Nab />
            </div>
            
            <Outlet />

        </div>
    );
};

export default AllPag;