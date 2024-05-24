import { Content } from "./components/content";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Siderbar } from "./components/siderbar";

export function App() {
  return (
    <div className="max-w-[1216px] max-h-full mx-auto my-10 bg-white">
      <div className="">
        <Header />
      </div>
      <div className="flex flex-nowrap">
        <div className="basis-1/4">
          <Siderbar />
        </div>
        <div className="basis-3/4 flex flex-col">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

