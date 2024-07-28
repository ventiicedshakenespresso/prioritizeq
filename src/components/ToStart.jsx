import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function ToStart(){
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 


    return(
        <div className="flex flex-col w-2/3 mt-24 items-center">
            <div className="text-2xl font-mono uppercase my-3 text-[#f6f5f4]">
                Please select a date to begin
            </div>
            <div className="w-56">
                <Datepicker
                    showShortcuts={true} 
                    configs={{
                        shortcuts: {
                            today: "Today", 
                            yesterday: "Yesterday", 
                        },
                    }} 
                    useRange={false}
                    asSingle={true}
                    // containerClassName="relative"
                    value={value} 
                    onChange={handleValueChange} 
                    primaryColor={"orange"}
                    displayFormat={"MM/DD/YYYY"} 
                />
            </div>
            <div>
                <select className="mt-10 w-56 h-8 bg-slate-900 text-white">
                    <option>1st shift</option>
                    <option>2nd shift</option>
                </select>
            </div>
        </div>

    );
}