import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

const Table = ({ data }) => {
  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map((client, idx) => (
          <ClientRow client={client} key={idx} />
        ))}
      </tbody>
    </table>
  );
};

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <p>error...</p>;
  console.log(data);
  return <>{!loading && !error && <Table data={data} />}</>;
};

export default Clients;
