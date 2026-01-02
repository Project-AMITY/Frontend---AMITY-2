import DeveloperCards from "../components/DeveloperCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DeveloperTeam = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white overscroll-none">
      <Navbar />
      <main className="flex flex-col justify-center item-center mt-16">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold pt-12 ">
          <span className="text-primary">EonX. </span> Developer team</h1>
        <DeveloperCards/>
      </div>
      <Footer />
      </main>
    </div>
  );
};

export default DeveloperTeam;
