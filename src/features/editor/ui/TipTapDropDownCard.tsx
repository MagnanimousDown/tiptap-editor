
export const TipTapDropDownCard = ({children}: {children: any}) => {

    return <div className="rounded-md">
        <div className="p-1">
            <div>
                Turn Into
            </div>
            <div className="hover:cursor-pointer">
                {children}
            </div>
        </div>
    </div>
}