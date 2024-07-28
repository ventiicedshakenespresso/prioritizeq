import Floor from "./components/Floor";
import Sidebar from "./components/Sidebar";
import ToStart from "./components/ToStart";

export default function App() {
  return (
    <main className="h-screen flex gap-8 bg-slate-950">
      <Sidebar />
      {/* <ToStart/> */}
      <Floor />
    </main>
  )
}