import Navbar from "./components/global/Navbar";

function App() {
  return (
    <div className="App w-screen flex font-roboto bg-[#171717]">
      <Navbar />
      <div className="flex">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/80447e182386131.652d2dd531480.png"
          alt=""
          className="h-2/3"
        />
        <img
          className="h-2/3"
          src="https://cdn.dribbble.com/userupload/3261383/file/original-e444aac3525e6826bcde874892265c75.png?resize=1024x768&vertical=center"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
