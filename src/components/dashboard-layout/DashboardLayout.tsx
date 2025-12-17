import { useEffect, useState, type ReactNode } from "react"
import SideBar from "../sidebar/SideBar"

interface DashboardLayoutProp {
    children: ReactNode,
    pageTitle: String
}

function DashboardLayout({ children, pageTitle }: DashboardLayoutProp) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width:768px)');
        console.log(matchMedia)
        const handleChange = (e: any) => {
            setSidebarCollapsed(e.matches)
        }

        setSidebarCollapsed(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        }

    }, [])
    useEffect(() => {
        console.log(sidebarCollapsed)
    }, [sidebarCollapsed])

    function handleToggleCollapse() {
        setSidebarCollapsed(!sidebarCollapsed)
    }
    return (
        <div>
            <div >
                <div className="relative flex ">
                    <div className={`flex flex-col justify-between bg-(--color-surface) border border-(--color-border)  fixed bottom-0 top-0 left-0 h-screen  ${sidebarCollapsed ? 'w-20' : 'w-64'}  max-sm:hidden`}>
                        <SideBar collapsed={sidebarCollapsed} onToggleCollapse={handleToggleCollapse} />
                    </div>
                    <div className={`w-full ${sidebarCollapsed ? 'ml-20' : 'ml-64'} max-sm:m-auto`}>
                        <div className="flex items-center justify-center h-16 border-b border-(--color-border) bg-(--color-surface)">
                            <div className="wrapper flex items-center justify-between gap-2">
                                <div className="text-xl font-semibold">{pageTitle}</div>
                                <div className="flex items-center gap-2 font-extrabold">
                                    <div>kdf</div>
                                    <div>kdf</div>
                                    <div>kdf</div>
                                </div>
                            </div>
                        </div>
                        <div className={`py-6 wrapper flex  flex-col gap-8`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout