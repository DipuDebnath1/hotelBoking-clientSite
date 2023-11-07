import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";



const Register = () => {
    const {Register} = useContext(AuthContext)


    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const password = form.password.value
        const email = form.email.value
        const name = form.name.value

        Register(email,password)
        .then(res=>{
            
            console.log(res.user)
            form.reset()
        })
        .catch(err=>{
            console.log(err.message)
        })

        console.log({password,email,name});
    //    form.reset()
    
    }

    return (
        <div className=" md:w-2/4 mx-auto p-10  bg-gray-100">
        <h2 className="w-full text-3xl py-5 font-semibold">SIGN IN NOW</h2>
         <form onSubmit={handleSignUp} className="text-xl space-y-4" action="#">
            
         <label htmlFor="name" className="flex gap-2 flex-col">
                 <span className="text-start">Name</span>
                 <input  id="name" className="p-3 shadow-md  rounded outline-none text-sm" type="text" placeholder="name here..." name="name" required />
             </label>

             <label htmlFor="email" className="flex gap-2 flex-col">
                 <span className="text-start">Email</span>
                 <input  id="email" className="p-3 shadow-md  rounded outline-none text-sm" type="email" placeholder="email here..." name="email" required />
             </label>

             <label htmlFor="password" className="flex gap-2 flex-col">
                 <span className="text-start">Password</span>
                 <input  id="password" className=" shadow-md p-3 rounded outline-none text-sm" type="password" placeholder="password here..." name="password" required />
             </label>
             <div >
                 <input className="text-white py-2 block rounded bg-[#EE4036] w-full" type="submit" value="Sign In" />
                 <p className="text-lg"> Don{`'`}t have a account? <Link className="font-semibold text-blue-600" to={'/signup'}>Pelase Sign UP</Link> </p>
             </div>
         </form>
        
        </div>
    );
};

export default Register;