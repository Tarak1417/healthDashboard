import {
  LayoutDashboard,
  Clock,
  CalendarDays,
  ClipboardList,
  BarChart3,
  MessageCircle,
  Phone,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      {/* Full sidebar for large devices */}
      <aside className="w-50 h-full bg-[#f9fbfc] p-6 text-gray-600 flex flex-col justify-between shadow-md hidden lg:block">
        {/* Top Logo */}
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-900 mb-8">
            Health<span className="text-indigo-900">care.</span>
          </h1>

          {/* General Section */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase mb-3">General</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-indigo-900 font-semibold">
                <LayoutDashboard size={20} />
                Dashboard
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <Clock size={20} />
                History
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <CalendarDays size={20} />
                Calendar
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <ClipboardList size={20} />
                Appointments
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <BarChart3 size={20} />
                Statistics
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-3">Tools</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <MessageCircle size={20} />
                Chat
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
                <Phone size={20} />
                Support
              </li>
            </ul>
          </div>
        </div>

        {/* Setting at bottom */}
        <div className="mt-50">
          <ul className="space-y-5">
            <li className="flex items-center gap-3 hover:text-indigo-900 cursor-pointer">
              <Settings size={20} />
              Setting
            </li>
          </ul>
        </div>
      </aside>

      {/* Bottom icon bar for small and medium devices */}
     <div className="lg:hidden fixed bottom-3 left-0 w-full   flex justify-around items-center p-4 ">
  <LayoutDashboard className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <Clock className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <CalendarDays className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <ClipboardList className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <BarChart3 className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <MessageCircle className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <Phone className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
  <Settings className="text-gray-600 w-5 h-5 sm:w-4 sm:h-4" />
</div>

    </>
  );
};

export default Sidebar;
