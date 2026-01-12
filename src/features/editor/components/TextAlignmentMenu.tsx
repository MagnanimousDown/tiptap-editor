import { LuAlignLeft } from "react-icons/lu";
import { LuAlignCenter } from "react-icons/lu";
import { LuAlignRight } from "react-icons/lu";
import { LuAlignJustify } from "react-icons/lu";
import { ToolbarButton } from "./ToolbarButton";
import { SeparatorLine } from "../ui/SeparatorLine";
import { PiTextSuperscript } from "react-icons/pi";
import { PiTextSubscript } from "react-icons/pi";

export const TextAlignmentMenu = ({ onMenuItemSelect }: { onMenuItemSelect: () => void }) => {

    return <div className="absolute flex right-0 bottom-full w-max bg-[rgba(14,14,17,1)] rounded-2xl border border-white/5 shadow-[0px_16px_48px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(0,0,0,0.24),0px_6px_8px_0px_rgba(0,0,0,0.22),0px_2px_3px_0px_rgba(0,0,0,0.12)] p-1 my-1 ">
        <div>
            <ToolbarButton button={"superscript"} icon={<PiTextSuperscript />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"subscript"} icon={<PiTextSubscript />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
        <div className="flex items-center">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <ToolbarButton button={"textAlign-left"} icon={<LuAlignLeft />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"textAlign-center"} icon={<LuAlignCenter />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"textAlign-right"} icon={<LuAlignRight />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"textAlign-justify"} icon={<LuAlignJustify />} onMenuItemSelect={onMenuItemSelect}>
            </ToolbarButton>
        </div>
    </div>
}
