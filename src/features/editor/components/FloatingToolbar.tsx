import { SeparatorLine } from "../ui/SeparatorLine"
import { Hyperlink } from "./Hyperlink"
import { BlockTypeDropdown } from "./BlockTypeDropdown"
import { MoreOptions } from "./MoreOptions"
import { ToolbarButton } from "./ToolbarButton"
import { TextColor } from "./TextColor"
export const FloatingToolbar = () => {

    return <div className="py-1 px-1 bg-[rgba(14,14,17,1)] text-neutral-300 rounded-2xl flex items-center border border-white/5 shadow-[0px_16px_48px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(0,0,0,0.24),0px_6px_8px_0px_rgba(0,0,0,0.22),0px_2px_3px_0px_rgba(0,0,0,0.12)]
">
        <div>
            <BlockTypeDropdown></BlockTypeDropdown>
        </div>
        <div className="flex items-center ">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <ToolbarButton button={"bold"} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
                </svg>} >
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"italic"} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                </svg>}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"underline"}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5" />
                </svg>}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"strike"}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617M3.75 12h16.5" />
                </svg>}>
            </ToolbarButton>
        </div>
        <div>
            <ToolbarButton button={"code"}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>}>
            </ToolbarButton>
        </div>
        <div className="flex items-center">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <Hyperlink></Hyperlink>         
        </div>
        <div className="flex items-center">
            <TextColor></TextColor>
        </div>
        <div className="flex items-center">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <MoreOptions></MoreOptions>
        </div>
    </div>
}   