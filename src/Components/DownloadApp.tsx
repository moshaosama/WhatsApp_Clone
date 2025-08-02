const DownloadApp = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-[100vh]">
        <img
          src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png"
          alt="WhatsAppImage.png"
          className="w-72 h-72 object-contain"
        />

        <div className="text-white flex flex-col gap-2 -my-7 text-center">
          <h1 className="text-3xl">Download Mo4aApp For Windows</h1>

          <p className="text-[gray] w-[40pc]">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>

          <div className="bg-green-700 mx-60 py-2 my-4 rounded-full text-black font-semibold">
            <button>Download</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
