import Navbar from "./components/global/Navbar";
import Navbar2 from "./components/global/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App flex overflow-hidden h-screen w-screen font-arimo bg-white">
      <Navbar2 />
      <img
        className="scale-150 translate-x-[20rem] hidden"
        src="https://cdn.dribbble.com/userupload/4243072/file/original-c8f726297af53d79bf98064c5637d0bc.jpg?resize=1024x768&vertical=center"
        alt=""
      />
      <div className="flex hidden">
        <img
          className="scale-[125%] -translate-y-[1.5rem] opacity-50 -translate-x-[11.3rem]"
          src="https://cdn.dribbble.com/userupload/4243072/file/original-c8f726297af53d79bf98064c5637d0bc.jpg?resize=1024x768&vertical=center"
          alt=""
        />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/80447e182386131.652d2dd531480.png"
          alt=""
          className="h-3/4"
        />
      </div>
    </div>
  );
}

export default App;
