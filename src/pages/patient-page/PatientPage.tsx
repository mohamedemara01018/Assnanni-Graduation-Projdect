import CardComp from "@/components/card-comp/CardComp";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router"
const appointments = [
    {
        id: 1,
        doctorName: "dr. sarah johnson",
        specialty: "cardiology",
        date: "2025-12-15",
        time: "10:00",
        status: "confirmed"
    },
    {
        id: 2,
        doctorName: "dr. emily rodriguez",
        specialty: "pediatrics",
        date: "2025-12-18",
        time: "14:00",
        status: "pending"
    }
];

function PatientPage() {
    return (
        <div className="">
            <div className=" flex ">
                <div className="py-8  flex flex-col flex-3 bg-(--color-surface) shadow">
                    hi imdkffffffff
                </div>
                <div className=" py-8 wrapper flex flex-12 flex-col gap-8">

                    <div >
                        <h1 className="text-3xl text-(--color-text)">Welcome Back, John</h1>
                        <p className=" text-(--color-text-light)">Here's your health dashboard overview</p>
                    </div>

                    <div className="flex gap-8 max-lg:flex-col">
                        <div className="flex flex-1 lg:flex-5 ">
                            <CardComp>
                                <div className="flex items-center justify-between gap-4 w-full ">
                                    <h2 className="text-xl">Upcoming Appointments</h2>
                                    <Link to={'/'} className="text-(--color-primary) hover:text-(--color-primary-light) transition duration-200">Book New</Link>
                                </div>
                                <div className=" flex flex-col gap-3 w-full">
                                    <Link to={'/'} className="flex items-center justify-between gap-4 p-4 bg-(--color-bg-link)  hover:bg-(--color-bg-link-hover) rounded-md transition duration-150">
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="flex items-center justify-center bg-blue-300 w-15 h-15 rounded-full max-sm:hidden">
                                                <AiOutlineSchedule className="text-blue-600 text-3xl " />
                                            </div>
                                            <div>
                                                <h3 className="text-(--color-text)">mohamed gamal</h3>
                                                <p className="text-(--color-text-light) text-sm">software engineer</p>
                                                <div className="flex items-center gap-4 mt-1 text-sm">
                                                    <span className="text-(--color-text-light) ">2025-10-1</span>
                                                    <span className="bg-(--color-text-light) w-1 h-1 rounded-full"></span>
                                                    <span className="text-(--color-text-light)">2 pm </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-green-500 bg-green-500/20 px-3 pb-1 rounded-2xl flex items-center">
                                            pending
                                        </div>
                                    </Link>

                                    <Link to={'/'} className="flex items-center justify-between gap-4 p-4 bg-(--color-bg-link)  hover:bg-(--color-bg-link-hover) rounded-md transition duration-150">
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="flex items-center justify-center bg-blue-300 w-15 h-15 rounded-full max-sm:hidden">
                                                <AiOutlineSchedule className="text-blue-600 text-3xl " />
                                            </div>
                                            <div>
                                                <h3 className="text-(--color-text)">mohamed gamal</h3>
                                                <p className="text-(--color-text-light) text-sm">software engineer</p>
                                                <div className="flex items-center gap-4 mt-1 text-sm">
                                                    <span className="text-(--color-text-light) ">2025-10-1</span>
                                                    <span className="bg-(--color-text-light) w-1 h-1 rounded-full"></span>
                                                    <span className="text-(--color-text-light)">2 pm </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-green-500 bg-green-500/20 px-3 pb-1 rounded-2xl flex items-center">
                                            pending
                                        </div>
                                    </Link>

                                    <Link to={'/'} className="flex items-center justify-between gap-4 p-4 bg-(--color-bg-link)  hover:bg-(--color-bg-link-hover) rounded-md transition duration-150">
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="flex items-center justify-center bg-blue-300 w-15 h-15 rounded-full max-sm:hidden">
                                                <AiOutlineSchedule className="text-blue-600 text-3xl " />
                                            </div>
                                            <div>
                                                <h3 className="text-(--color-text)">mohamed gamal</h3>
                                                <p className="text-(--color-text-light) text-sm">software engineer</p>
                                                <div className="flex items-center gap-4 mt-1 text-sm">
                                                    <span className="text-(--color-text-light) ">2025-10-1</span>
                                                    <span className="bg-(--color-text-light) w-1 h-1 rounded-full"></span>
                                                    <span className="text-(--color-text-light)">2 pm </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-green-500 bg-green-500/20 px-3 pb-1 rounded-2xl flex items-center">
                                            pending
                                        </div>
                                    </Link>

                                </div>
                            </CardComp>

                        </div>


                        <div className="flex flex-1 max-md:flex-wrap lg:flex-2 lg:flex-col gap-4 ">

                            <CardComp>
                                <h2 className="text-(--color-text) text-xl">Health Summary</h2>
                                <div className="flex flex-col gap-3 items-center w-full">
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>


                                </div>
                            </CardComp>

                            <CardComp>
                                <h2 className="text-(--color-text) text-xl">Recent Activity</h2>
                                <div className="flex flex-col gap-3 items-center w-full">
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between text-(--color-text-light) w-full">
                                        <h3 className="">Total Appointments</h3>
                                        <span>12</span>
                                    </div>


                                </div>
                            </CardComp>
                            <div className="flex flex-col items-start gap-2 p-6  w-full bg-linear-to-br from-blue-600 to-blue-800 rounded-xl text-white shadow">
                                <h3 className="text-lg">Health Tip of the Day</h3>
                                <p className="text-sm text-blue-100">
                                    Stay hydrated! Aim to drink at least 8 glasses of water daily for optimal health.
                                </p>
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </div >
    )
}

export default PatientPage