import pdf from "../assets/resume.pdf"

const Resume = () => {

return (
    <div>
        <a href={pdf} download="resume.pdf">Click here to download</a>
    </div>
);

};

export default Resume;