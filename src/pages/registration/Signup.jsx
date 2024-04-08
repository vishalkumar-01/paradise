// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import toast from "react-hot-toast";
// import Loader from "../../components/loader/Loader";

// const Signup = () => {
//     const context = useContext(myContext);
//     const {loading, setLoading } = context;

//     // navigate 
//     const navigate = useNavigate();

//     // User Signup State 
//     const [userSignup, setUserSignup] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     /**========================================================================
//      *                          User Signup Function 
//     *========================================================================**/

//     const userSignupFunction = async () => {
//         // validation 
//         if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true);
//         try {
//             const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//             // create user object
//             const user = {
//                 name: userSignup.name,
//                 email: users.user.email,
//                 uid: users.user.uid,
//                 role: userSignup.role,
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString(
//                     "en-US",
//                     {
//                         month: "short",
//                         day: "2-digit",
//                         year: "numeric",
//                     }
//                 )
//             }

//             // create user Refrence
//             const userRefrence = collection(fireDB, "user")

//             // Add User Detail
//             addDoc(userRefrence, user);

//             setUserSignup({
//                 name: "",
//                 email: "",
//                 password: ""
//             })

//             toast.success("Signup Successfully");

//             setLoading(false);
//             navigate('/login')
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }

//     }
//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {loading && <Loader/>}
//             {/* Login Form  */}
//             <div className="login_Form bg-gray-50 px-8 py-6 border border-gray-100 rounded-xl shadow-md">

//                 {/* Top Heading  */}
//                 <div className="mb-5">
//                     <h2 className='text-center text-2xl font-bold text-gray-900 '>
//                         Signup
//                     </h2>
//                 </div>

//                 {/* Input One  */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Full Name'
//                         value={userSignup.name}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 name: e.target.value
//                             })
//                         }}
//                         className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
//                     />
//                 </div>

//                 {/* Input Two  */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         placeholder='Email Address'
//                         value={userSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 email: e.target.value
//                             })
//                         }}
//                         className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-200'
//                     />
//                 </div>

//                 {/* Input Three  */}
//                 <div className="mb-5">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value={userSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
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
//                         onClick={userSignupFunction}
//                         className="bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold"
//                         >
//                         Signup
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Have an account <Link className=' text-gray-900 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Signup;





import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const [buttonClicked, setButtonClicked] = useState(false); // State to track if signup button is clicked

    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
            return;
        }

        setLoading(true); // Set loading state when user clicks signup
        setButtonClicked(true); // Set button clicked to true when signup button is clicked
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            const userRefrence = collection(fireDB, "user")

            await addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false); // Set loading state to false after signup is successful
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false); // Set loading state to false if signup fails
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {loading && <Loader/>}
            <div className="signup_Form bg-white px-8 py-10 border border-gray-800 rounded-xl shadow-lg" style={{ maxWidth: "400px", width: "90%", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}>
                <div className="mb-5">
                    <h2 className='text-center text-3xl font-bold text-gray-800'>
                        Signup
                    </h2>
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                        className='input-field bg-gray-50 focus:bg-gray-100 w-full px-4 py-3 rounded-md border border-gray-800 transition duration-300 ease-in-out focus:outline-none'
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                        className='input-field bg-gray-50 focus:bg-gray-100 w-full px-4 py-3 rounded-md border border-gray-800 transition duration-300 ease-in-out focus:outline-none'
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                        className='input-field bg-gray-50 focus:bg-gray-100 w-full px-4 py-3 rounded-md border border-gray-800 transition duration-300 ease-in-out focus:outline-none'
                    />
                </div>
                <div className="mb-6">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className="btn-primary bg-gray-800 hover:bg-gray-800 text-white w-full py-3 rounded-md font-bold transition duration-300 ease-in-out"
                        disabled={loading || buttonClicked} // Disable button if loading or button clicked
                    >
                        {buttonClicked ? "Signing up..." : "Signup"} {/* Use buttonClicked state to conditionally set button text */}
                    </button>
                </div>
                <div>
                    <h2 className='text-center text-gray-800'>Have an account? <Link className='text-blue-600 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
