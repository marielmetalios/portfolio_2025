const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            {/* Top section with image and header */}
            <div className="flex flex-row items-start gap-8 w-full max-w-4xl">
                {/* Image on the left */}
                <div className="w-1/3">
                    <img
                        className="h-100 w-500 object-cover rounded-full shadow-lg"
                        src="./src/assets/mar_headshot.jpg"
                        alt="Headshot"
                    />
                </div>
                {/* Header on the right */}
                <div className="w-2/3">
                    <h2 className="text-3xl font-bold text-left text-gray-800">Welcome to My Portfolio</h2>
                    <div className="mt-8 max-w-4xl text-left">
                        <p className="text-lg text-gray-600">
                            Hi, I'm Mariel. After 7 years of e-commerce brand management experience, I was ready to expand my skillset. I recently completed Columbia University's software development bootcamp, and discovered a passion for building highly interactive web applications for brands and small businesses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Body content below */}

        </div>
    );
};

export default HomePage;