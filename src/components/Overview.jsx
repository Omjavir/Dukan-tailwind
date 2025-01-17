import BlueCard from "./BlueCard";
import RevenueCard from "./RevenueCard";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-5">
        <div className="text-2xl font-semibold">Overview</div>
        <div className="flex border-2 px-4 py-2 rounded-md gap-2">
          <h4 className="text-xl font-normal">This Month</h4>
          <svg
            width="16"
            height="14"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z"
              fill="#4D4D4D"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BlueCard title={"Next Payout"} price={"2,313.20"} orderCnt={"23"} />
        <RevenueCard
          title={"Amount Pending"}
          price={"92,313.20"}
          orderCnt={"13"}
        />
        <RevenueCard title={"Amount Processed"} price={"23,92,313.20"} />
      </div>
    </div>
  );
};

export default Overview;
