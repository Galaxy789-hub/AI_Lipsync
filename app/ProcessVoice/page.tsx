import ContentHeader from "../components/layouts/Content/Header/page";
import ContentVoice from "../components/layouts/Content/Voice/page";
import Sidebar from "../components/layouts/Sidebar/page";

function ProcessVoice() {
  return (
    <>
      <div className="flex w-screen flex-1 flex-col overflow-auto lg:flex-row lg:gap-2 lg:overflow-visible bg-[#F5F5F5]">
        <Sidebar />
        <div className="relative flex flex-1 flex-col gap-2 transition-all duration-300 lg:w-auto lg:gap-4 lg:overflow-hidden lg:px-4">
          <ContentHeader />
          <ContentVoice />
        </div>
      </div>
    </>
  );
}

export default ProcessVoice;
