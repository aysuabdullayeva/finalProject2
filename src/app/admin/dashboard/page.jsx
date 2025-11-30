import Link from "next/link";
import AdminHome from "../adminhome/page";

const DashboardPage = () => {
  //   const [stats, setStats] = useState({
  //     users: 0,
  //     orders: 0,
  //     revenue: 0,
  //     feedback: 0,
  //   });
  //   useEffect(() => {
  //     async function fetchStats() {
  //       try {
  //         const res = await fetch("/api/admin/stats");
  //         const data = await res.json();
  //         setStats(data);
  //       } catch (err) {
  //         console.error("Failed to fetch stats:", err);
  //       }
  //     }
  //     fetchStats();
  //   }, []);
  return (
    <div className="p-5">
      <header className="bg-white shadow rounded-lg !p-4 !mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <Link href={"/admin"}>
          <button className="bg-red-500 text-white !px-4 !py-1 rounded hover:bg-red-600">
            Logout Admin
          </button>
        </Link>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-extrabold text-blue-500">Users</p>
          <p className="text-2xl mt-2 text-gray-700">4,582</p>
          <p className="mt-1 text-sm text-gray-400">Active this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-extrabold text-green-500">Orders</p>
          <p className="text-2xl mt-2 text-gray-700">1,236</p>
          <p className="mt-1 text-sm text-gray-400">Completed this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-extrabold text-yellow-500">Revenue</p>
          <p className="text-2xl mt-2 text-gray-700">$18,742</p>
          <p className="mt-1 text-sm text-gray-400">Total this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition-transform">
          <p className="text-3xl font-extrabold text-purple-500">Feedback</p>
          <p className="text-2xl mt-2 text-gray-700">512</p>
          <p className="mt-1 text-sm text-gray-400">New reviews</p>
        </div>
      </section>

      {/* <section className="bg-white !p-5 rounded-lg shadow">
        <h2 className="text-xl font-bold !mb-4 text-gray-800">
          Recent Activity
        </h2>
        <ul className="divide-y divide-gray-200">
          <li className="!py-2 flex justify-between">
            <span>User John signed up</span>
            <span className="text-gray-500 text-sm">2h ago</span>
          </li>
          <li className="!py-2 flex justify-between">
            <span>Order #1023 completed</span>
            <span className="text-gray-500 text-sm">3h ago</span>
          </li>
          <li className="!py-2 flex justify-between">
            <span>Feedback from Alice received</span>
            <span className="text-gray-500 text-sm">5h ago</span>
          </li>
        </ul>
      </section> */}

      <AdminHome />
    </div>
  );
};

export default DashboardPage;