const Dashboard = () => {
  return (
    <div className="w-full h-full bg-stone-900 flex flex-col">
      <div className="flex justify-center h-full mt-8 mb-8 gap-8">
        <div className="w-[45%] max-h-[100%] bg-stone-300"></div>
        <div className="w-[45%] max-h-[100%] bg-stone-300"></div>
      </div>
      <div className="flex justify-center h-full gap-8">
        <div className="w-[45%] max-h-[100%] bg-stone-300 mb-8"></div>
        <div className="w-[45%] max-h-[100%] bg-stone-300 mb-8"></div>
      </div>
    </div>
  );
};

export default Dashboard;
