import { Outlet} from "react-router-dom";

const Authlayout = () => {

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
            <Outlet/>
            </div>

        </div>
    )
}

export default Authlayout;