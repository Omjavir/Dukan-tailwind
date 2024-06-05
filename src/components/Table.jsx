import TableTop from "./TableTop";
import orderData from "../data/data.js";

const Table = () => {
  return (
    <div className="bg-white px-3 pt-3 pb-2 rounded-lg grid gap-4 items-center">
      <TableTop />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xm font-medium rounded uppercase text-black-400">
            <tr>
              <th className="px-6 py-3 font-medium">Order ID</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Transaction ID</th>
              <th className="px-6 py-3 font-medium">Refund Date</th>
              <th className="px-6 py-3 font-medium text-end">Order Amount</th>
            </tr>
          </thead>
          {orderData.map((order) => {
            return (
              <tbody key={order.id}>
                <tr className="bg-white border-b">
                  <th
                    key={order.id}
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
                  >
                    #{order.id}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2 text-black-600">
                    {order.status === "Successful" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    )}
                    {order.status === "Processing" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    )}
                    {order.status === "Failed" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    )}
                    {order.status}
                  </td>
                  <td className="px-6 py-4 text-black-400">
                    {order.transactionID}
                  </td>
                  <td className="px-6 py-4 text-black-400">
                    {order.refundDate}
                  </td>
                  <td className="px-6 py-4 text-right text-black-600">
                    {order.amount}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
