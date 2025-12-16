import { useState,useCallback } from "react";
import Input from "../components/ui/input";
import { Link } from "react-router-dom";

const Register = () => {

    const[formData,setFormData] = useState({

        name:"",
        email:"",
        password:""
    });

    const handelChange = useCallback((e) =>{

setFormData((prev)=> ({
    ...prev,
    [e.target.name]:e.target.value,
}))
},[]);

const handleSubmit = useCallback((e) => {

    e.preventDefault();
    console.log(formData)
},[formData]);

return(
    <> 
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">

<h2 className="text-xl font-semibold text-center">Create Account</h2>

<Input

label="Name"
placeholder = "Aqeel"
value={formData.name}
onChange={handelChange}
type="text"
name="name"
/>

<Input
label= " Email"
placeholder= "you@gmail.com"
value={formData.email}
onChange={handelChange}
type="text"
name="email"
/>

<Input
label="password"
placeholder="........"
value={formData.password}
onChange={handelChange}
type="password"
name="password"
/>

<button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"> 
    Register </button>

<p className="text-sm text-center">
    Already have an account?{" "}
     <Link to="/login" className="text-blue-600 hover:underline"> Login</Link> 
     </p>
</form>

    </div>
    </>
)

}

export default Register;