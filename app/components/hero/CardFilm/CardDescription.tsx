export default function CardDescription(){
    return(
        <>
            <div className="flex space-x-4 items-center">
                <div className="w-8 h-6 bg-[#262626] rounded flex items-center justify-center">
                    <span className="text-white text-xs text-center">16+</span>
                </div>
                <div className="w-8 h-6 bg-[#262626] rounded flex items-center justify-center">
                    <span className="text-white text-xs text-center">16+</span>
                </div>
                <span className="text-sm text-gray-400">2 saisons</span>
            </div>
            <div className="text-gray-300 text-sm space-x-4">
                <span>Action</span>
                <span>.</span>
                <span>Thriller</span>
            </div>
        </>
    )
}