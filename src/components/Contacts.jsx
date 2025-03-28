const Contacts = () => {
  const downloadResume = () => {
    const pdfUrl = "ValerieYen_Resume_1_5_25.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ValerieYenResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Contacts">
      <div className="Socials">
        <a href="https://www.linkedin.com/in/valmyen/">
          <img className="Icon" src="linkedin-app-white-icon.png" />
        </a>
        <a href="https://github.com/valerieYen">
          <img className="Icon" src="github-white-icon.png" />
        </a>
        <a href="https://vizzy.com/@valmyen">
          <img className="Icon" src="vizzylogo.png" />
        </a>
      </div>
      <div className="ResumeDownload" onClick={downloadResume}>
        <p className="TextForward">📄 Click here to download my resume! 📄</p>
      </div>
    </div>
  );
};

export default Contacts;
