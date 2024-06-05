import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import Topbar from "./components/Topbar";
import Transactions from "./components/Transactions";
import Table from "./components/Table";

function App() {
  return (
    <div className="bg-white">
      <Sidebar />
      <div className="border-b sm:pl-64 border-gray-300 bg-white">
        <Topbar />
      </div>

      <div className="m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
