import { TbArmchair2 } from "react-icons/tb";


export default function Floor() {
    return (
        <div className="flex flex-row-2 bg-slate-950">
            <div className="my-4 py-8 sm:w-200 md:w-2/3 px-8 w-2/3 border-8 border-gray-900 bg-slate-950">
                <div>
                    <h2 className="text-center uppercase font-bold text-2xl font-mono pb-10 text-[#f6f5f4]">Clinic Floor</h2>
                </div>
                <div>
                    <div className="grid justify-items-center grid-cols-9 gap-4 ml-8 mt-20 text-[#f6f5f4]">
                        <div className="text-center font-bold pr-16"> 01 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 02 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 03 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 04 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 05 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 06 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 07 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 08 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 09 <TbArmchair2 size={60}/></div>
                    </div>
                    <div className="grid justify-items-center grid-cols-9 gap-4 mt-36 ml-8 text-[#f6f5f4]">
                        <div className="text-center font-bold pr-16 col-start-4"> 11 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 10 <TbArmchair2 size={60}/></div>
                    </div>
                    <div className="grid justify-items-center grid-cols-9 gap-4 mt-36 ml-8 text-[#f6f5f4]">
                        <div className="text-center font-bold pr-16"> 17 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 16 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 15 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16 col-start-6"> 14 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 13 <TbArmchair2 size={60}/></div>
                        <div className="text-center font-bold pr-16"> 12 <TbArmchair2 size={60}/></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-32 mx-4 grow h-full text-white">
                <h2 className="text-center text-xl font-bold font-mono uppercase">POD DETAILS</h2>
                <div className="my-4 py-2 sm:px-6 lg:px-8 min-w-full inline-block">
                    <button className="rounded-full min-w-full bg-slate-600 uppercase mb-2">POD 1: DEREK SHEPHARD</button>
                    <table className="text-xs min-w-full text-left font-light text-white">
                        <thead>
                            <tr>
                                <th>Station#</th>
                                <th>Patient Name</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07</td>
                                <td>April Kepner</td>
                                <td>0600</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>08</td>
                                <td>Jo Wilson</td>
                                <td>0620</td>
                                <td>1020</td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>Miranda Bailey</td>
                                <td>0645</td>
                                <td>1045</td>
                            </tr>
                            <tr>
                                <td>09</td>
                                <td>Andrew Deluca</td>
                                <td>0705</td>
                                <td>1105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-4 py-2 sm:px-6 lg:px-8 min-w-full inline-block">
                <button className="rounded-full min-w-full bg-slate-600 uppercase mb-2">POD 2: MARK SLOAN</button>
                    <table className="text-xs min-w-full text-left font-light text-white">
                        <thead>
                            <tr>
                                <th>Station#</th>
                                <th>Patient Name</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04</td>
                                <td>April Kepner</td>
                                <td>0600</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Jo Wilson</td>
                                <td>0620</td>
                                <td>1020</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Miranda Bailey</td>
                                <td>0645</td>
                                <td>1045</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Andrew Deluca</td>
                                <td>0705</td>
                                <td>1105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-4 py-2 sm:px-6 lg:px-8 min-w-full inline-block">
                    <button className="rounded-full min-w-full bg-slate-600 uppercase mb-2">POD 3: OWEN HUNT</button>
                    <table className="text-xs min-w-full text-left font-light text-white">
                        <thead>
                            <tr>
                                <th>Station#</th>
                                <th>Patient Name</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>16</td>
                                <td>April Kepner</td>
                                <td>0600</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Jo Wilson</td>
                                <td>0620</td>
                                <td>1020</td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Miranda Bailey</td>
                                <td>0645</td>
                                <td>1045</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Andrew Deluca</td>
                                <td>0705</td>
                                <td>1105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-4 py-2 sm:px-6 lg:px-8 min-w-full inline-block">
                    <button className="rounded-full min-w-full bg-slate-600 uppercase mb-2">POD 4: CALLIE TORRES</button>
                    <table className="text-xs min-w-full text-left font-light text-white">
                        <thead>
                            <tr>
                                <th>Station#</th>
                                <th>Patient Name</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13</td>
                                <td>April Kepner</td>
                                <td>0600</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Jo Wilson</td>
                                <td>0620</td>
                                <td>1020</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Miranda Bailey</td>
                                <td>0645</td>
                                <td>1045</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Andrew Deluca</td>
                                <td>0705</td>
                                <td>1105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}