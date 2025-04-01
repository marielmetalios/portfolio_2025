import pdf from "../assets/mariel_resume2025.pdf"

const Resume = () => {

return (
    <div className="text-3xl font-bold text-left text-gray-800">
        <a href={pdf} download="mariel_resume2025.pdf" >Click here to download</a>
    </div>
);

};

export default Resume;