// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import Loader from "../../components/loader/Loader";
// import { collection, onSnapshot, query, where } from "firebase/firestore";

// const Login = () => {
//     const context = useContext(myContext);
//     const { loading, setLoading } = context;

//     // navigate 
//     const navigate = useNavigate();

//     // User Signup State 
//     const [userLogin, setUserLogin] = useState({
//         email: "",
//         password: ""
//     });

//     /**========================================================================
//      *                          User Login Function 
//     *========================================================================**/

//     const userLoginFunction = async () => {
//         // validation 
//         if (userLogin.email === "" || userLogin.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true);
//         try {
//             const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
//             // console.log(users.user)

//             try {
//                 const q = query(
//                     collection(fireDB, "user"),
//                     where('uid', '==', users?.user?.uid)
//                 );
//                 const data = onSnapshot(q, (QuerySnapshot) => {
//                     let user;
//                     QuerySnapshot.forEach((doc) => user = doc.data());
//                     localStorage.setItem("users", JSON.stringify(user) )
//                     setUserLogin({
//                         email: "",
//                         password: ""
//                     })
//                     toast.success("Login Successfully");
//                     setLoading(false);
//                     if(user.role === "user") {
//                         navigate('/user-dashboard');
//                     }else{
//                         navigate('/admin-dashboard');
//                     }
//                 });
//                 return () => data;
//             } catch (error) {
//                 console.log(error);
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//             toast.error("Login Failed");
//         }

//     }
//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {loading && <Loader />}
//             {/* Login Form  */}
//             <div className="login_Form bg-gray-50 px-8 py-6 border border-gray-100 rounded-xl shadow-md">

//                 {/* Top Heading  */}
//                 <div className="mb-5">
//                 <h2 className='text-center text-2xl font-bold text-gray-900'>

//                         Login
//                     </h2>
//                 </div>

//                 {/* Input One  */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder='Email Address'
//                         value={userLogin.email}
//                         onChange={(e) => {
//                             setUserLogin({
//                                 ...userLogin,
//                                 email: e.target.value
//                             })
//                         }}
//                         className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
//                     />
//                 </div>

//                 {/* Input Two  */}
//                 <div className="mb-5">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value={userLogin.password}
//                         onChange={(e) => {
//                             setUserLogin({
//                                 ...userLogin,
//                                 password: e.target.value
//                             })
//                         }}
//                         className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
//                     />
//                 </div>

//                 {/* Signup Button  */}
//                 <div className="mb-5">
//                     <button
//                         type='button'
//                         onClick={userLoginFunction}
//                         className="bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold"

//                     >
//                         Login
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Don't Have an account <Link className=' text-gray-900 font-bold' to={'/signup'}>Signup</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Login;





import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const [buttonClicked, setButtonClicked] = useState(false); // State to track if login button is clicked

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("Please fill in all fields");
            return;
        }

        setLoading(true);
        setButtonClicked(true); // Set button clicked to true when login button is clicked
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', users?.user?.uid)
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({
                    email: "",
                    password: ""
                });
                toast.success("Login Successful");
                setLoading(false);
                if (user.role === "user") {
                    navigate('/user-dashboard');
                } else {
                    navigate('/admin-dashboard');
                }
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {loading && <Loader />}
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Login</h2>
                <div className="mb-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={userLogin.email}
                        onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                        className="input-field bg-gray-100 focus:bg-gray-50 w-full px-4 py-3 rounded-md border border-gray-800 transition duration-300 ease-in-out focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userLogin.password}
                        onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                        className="input-field bg-gray-100 focus:bg-gray-50 w-full px-4 py-3 rounded-md border border-gray-800 transition duration-300 ease-in-out focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={userLoginFunction}
                        className="btn-primary bg-gray-800 hover:bg-gray-800 text-white w-full py-3 rounded-md font-bold transition duration-300 ease-in-out"
                        disabled={loading || buttonClicked} // Disable button if loading or button clicked
                    >
                        {buttonClicked ? "Logging in..." : "Login"} {/* Use buttonClicked state to conditionally set button text */}
                    </button>
                </div>
                <div className="text-center text-gray-600">
                    Don't have an account? <Link className="text-blue-600 font-bold" to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
