const Contact = () => {
    return (
        <>
      <div className="grid grid-cols-1items-center justify-center min-h-screen pt-20">
        <div className="border border-gray-300 rounded-lg p-4 w-80 m-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Contact Info</h2>
          <div className="mb-2">
            <h3 className="text-gray-400 font-medium">Discord</h3>
            <p className="text-gray-600">johncarter#5918</p>
          </div>
          <div className="mb-2">
            <h3 className="text-gray-400 font-medium">Telegram</h3>
            <p className="text-gray-600">@marsiancarter</p>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium">Github</h3>
            <p className="text-gray-600">marsianjohncarter</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 w-80 m-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Resume (Coming soon!)</h2>
          <div className="mb-2">
            <h3 className="text-gray-400 font-medium">Download .DOCX</h3>
            <p className="text-gray-600">https://coming.soon/file.pdf</p>
          </div>
          <div className="mb-2">
            <h3 className="text-gray-400 font-medium">Download .PDF</h3>
            <p className="text-gray-600">https://coming.soon/file.pdf</p>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium">Download .JPG</h3>
            <p className="text-gray-600">https://coming.soon/file.pdf</p>
          </div>
        </div>
      </div>

      </>
    );
  };
  
  export default Contact;
  