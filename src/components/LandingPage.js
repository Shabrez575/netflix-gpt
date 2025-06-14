import Header from "./Header";
import TrendingNow from "./TrendingNow";

const LandingPage = () => {
    return (
        <div className="relative h-screen w-full">
            <Header />

            {/* Background Image */}
            <div className="relative h-screen">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
                    alt="Netflix background"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65 flex flex-col justify-center items-center text-white px-6 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                        Unlimited movies, TV <br/>shows and more
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6">
                    Starts at ₹149. Cancel at any time.
                    </p>

                    <p className="text-md sm:text-lg md:text-xl lg:text-sm font-medium lg:font-bold mb-6 max-w-xl">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    {/* Form */}
                    <form className="w-11/12 md:w-8/12 lg:w-9/12 max-w-2xl flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2 px-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 px-4 w-full lg:px-6 py-4 rounded text-white bg-black bg-opacity-70 border border-gray-500 placeholder-gray-400 focus:outline-white"
                        />
                        <button className="px-4 lg:px-6 py-4 bg-red-600 hover:bg-red-700 transition rounded font-bold lg:text-xl flex items-center text-white gap-4">
                            Get Started
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/chevron-right.png"
                                alt="arrow"
                                className="h-5 w-4 ml-2 lg:w-3"
                            />
                        </button>
                    </form>
                </div>
            </div>
            <div className="rounded-lg bg-black text-white">
                <TrendingNow/>
            </div>
        </div>
    );
};

export default LandingPage;
