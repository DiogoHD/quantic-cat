import Map from "./components/map"
import Level from "./components/level"

export default function App() {
  return (
    <div className="h-screen w-screen flex bg-orange-500 text-white">
      {/* Left Side */}
      <div className="flex flex-1 bg-amber-200 items-center justify-center">
        <Level />
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-800 flex items-center justify-center">
        <Map />
      </div>
    </div>
  )
}