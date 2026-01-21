// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-400 px-6 py-20 flex items-center mt-20">
//       <div className="max-w-5xl mx-auto space-y-16 p-4">
//         {/* Top section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <img
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//             alt=""
//             className="rounded-xl shadow-lg"
//           />
//           <div>
//             <h1 className="text-3xl font-bold mb-4">About Us</h1>
//             <p className="text-gray-600 leading-7">
//               We build simple and modern digital solutions that help businesses
//               and individuals adapt and grow in a fast-changing world.
//             </p>
//           </div>
//         </div>

//         {/* bottom section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-white p-8 rounded-xl shadow">
//             <h2 className="text-2xl font-semibold mb-3">Our mission</h2>
//             <p className="text-gray-600 leading-7">
//               To innovate and deliver modern technology that solves real
//               problems and creates meaningful impact.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-xl shadow">
//             <h2 className="text-2xl font-semibold mb-3">Our mission</h2>
//             <p className="text-gray-600 leading-7">
//               To innovate and deliver modern technology that solves real
//               problems and creates meaningful impact.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useState } from "react";

const Login = () => {
  // Individual states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      name,
      email,
      password,
    };

    console.log("Login Data:", loginData);

    // reset fields (optional)
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
