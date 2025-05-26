import React from "react";

const LoginPage = () => {
    return (
        <div className="relative h-screen bg-black w-full">
            {/* Header with logo */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center px-3 text-white z-50">
                <div className="w-3/12 sm:w-2/12 md:w-w-2/12 lg:w-2/12 xl:w-3/12 my-2 mx-10 xl:px-20">
                    <img
                        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                        alt="Netflix Logo"
                    />
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 -z-10"></div>


            {/* Background image - hidden on small devices */}
            <div className="absolute hidden sm:block">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" 
                    alt="background"
                    className="top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
                />
            </div>

            {/* Form */}
            <form className="absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 p-6 sm:p-12 bg-black sm:bg-opacity-80 my-40 sm:my-36 mx-auto right-0 left-0 rounded-lg shadow-lg">
                <h2 className="text-white mb-8 font-bold text-3xl">Sign In</h2>

                <input
                    type="text"
                    placeholder="Email or Mobile number"
                    className="p-3 mb-4 w-full rounded bg-black border border-gray-500 text-white placeholder-gray-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-3 mb-4 w-full rounded bg-black border border-gray-500 text-white placeholder-gray-500"
                />

                <button className="p-3 mb-4 w-full bg-red-600 rounded font-semibold hover:bg-red-700 transition text-white">
                    Sign In
                </button>

                <p className="text-center text-white mb-4">OR</p>

                <button className="p-3 mb-4 w-full bg-gray-600 rounded font-semibold hover:bg-gray-700 transition text-white bg-opacity-60">
                    Use a sign-in code
                </button>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-400 mb-6 gap-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-red-600" />
                        <span>Remember me</span>
                    </label>
                    <a href="/" className="hover:underline text-white">Forgot password?</a>
                </div>

                <div className="text-gray-400 text-sm">
                    <p className="mb-2">
                        New to Netflix?{" "}
                        <a href="/" className="text-white hover:underline">Sign up now.</a>
                    </p>
                    <p className="text-xs">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                        <a href="/" className="text-blue-500 hover:underline">Learn more.</a>
                    </p>
                </div>
            </form>
        </div>
        
    );
};

export default LoginPage;

