import pdf from "../assets/resume.pdf"

const Resume = () => {

return (
    <div className="text-3xl font-bold text-left text-gray-800">
        <a href={pdf} download="resume.pdf" >Click here to download</a>
    </div>
);

};

export default Resume;