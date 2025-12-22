import { BlockTypeDropdown } from "./BlockTypeDropdown"
export const FloatingToolbar = () => {

    return <div className="py-2 bg-neutral-800 text-white rounded-2xl border border-gray-300 flex ">
        <div>
            <BlockTypeDropdown></BlockTypeDropdown>
        </div>
    </div>
}   