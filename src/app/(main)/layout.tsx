import InfoBar from "@/components/info-bar";
import SideBar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideBar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
