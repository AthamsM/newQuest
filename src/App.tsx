import { Content } from "./components/content";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Alternativa } from "./components/alternativa";
import { Siderbar } from "./components/siderbar";
import { Perguntas } from "./components/perguntas";

export function App() {
  return (
    <div className="w-full h-full bg-white">
      <div className="">
        <Header />
      </div>
      <div className="flex min-h-screen">
        <div className="basis-1/5">
          <Siderbar />
        </div>
        <div className="border border-black"></div>
        <div className="basis-4/5 flex flex-col">
          <Navbar />
          <Perguntas/>
        </div>
      </div>
    </div>
  )
}

