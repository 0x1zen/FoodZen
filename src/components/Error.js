import { useRouteError } from "react-router";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops..Error Occured</h1>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </div>
  );
}

export default Error;
