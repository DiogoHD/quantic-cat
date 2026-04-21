import Cat from "../entities/cat"
import Fish from "../entities/fish"

export default function Map() {
  return (
    <div className="grid grid-rows-2 grid-cols-4 bg-amber-200 text-black text-center items-center justify-center">
        <div className="border-2 border-white p-2">
            0
        </div>
        <Cat />
        <div></div>
        <Fish />
        <div className="border-2 border-white p-2">
            1
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}