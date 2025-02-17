// import { useNavigate } from "react-router-dom";
// import jetLogo from "../assets/jetLogo"

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
                    <h2 className="text-3xl font-bold text-left text-gray-800">Mariel Metalios</h2>
                    <p className="text-1xl font-bold text-left text-gray-800 mt-3">Full Stack Developer | Former Senior Brand Management</p>
                    
                    <div className = "flex gap-3 mt-3">
                    <a href="/https://corporate.walmart.com/news/2016/08/08/walmart-agrees-to-acquire-jet-com-one-of-the-fastest-growing-e-commerce-companies-in-the-u-s">
                        <img src="./src/assets/jetLogo.png" alt="Jet.com Logo"
                            className="h-10 w-10 object-cover rounded-full shadow-lg"></img>
                    </a>
                    <a href="/https://corporate.walmart.com/news/2016/08/08/walmart-agrees-to-acquire-jet-com-one-of-the-fastest-growing-e-commerce-companies-in-the-u-s">
                        <img src="./src/assets/walmartLogo.png" alt="Walmart eCommerce Logo"
                            className="h-10 w-10 object-cover rounded-full shadow-lg"></img>
                    </a>
                    <a href="/https://recom.co/">
                        <img src="./src/assets/recomLogo.png" alt="Recommerce Logo"
                            className="h-10 w-10 object-cover rounded-full shadow-lg"></img>
                    </a>
                    </div>

                    <div className="mt-3 text-left text-gray-600 max-w-xl">
                        <p className="mt-2">
                        Hi, I'm Mariel! With eight years of experience in e-commerce brand management — specializing in Amazon and Walmart.com marketplaces, growth strategy, forecasting, digital advertising, and web integration — I was ready to learn a new skillset. I recently completed Columbia University's Software Development Bootcamp, and am thrilled to use my ecomm expertise to create data-driven, user-optimized, and highly engaging web applications. </p>
                        <p className="mt-2">Proficient in React, Node.js, Express, TypeScript/Javascript and PostgreSQL/Sequelize, and MongoDB/Mongoose.</p>
                        <p className="mt-2">What can we build together?</p>
                    </div>
                </div>
            </div>

            {/* Body content below */}

        </div>
    );
};

export default HomePage;