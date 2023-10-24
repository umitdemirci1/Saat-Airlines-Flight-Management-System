import { useQuery, useMutation } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getFlights } from "@/lib/utils";

const Flights = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["flights"],
    queryFn: getFlights,
    staleTime: 5000,
  });

  if (isError) {
    return (
      <div>
        <h1>Error is occured!</h1>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container flex flex-col mx-auto py-10 h-[calc(100vh-45px)]">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Flights;
