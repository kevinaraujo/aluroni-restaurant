import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const ids = [10,20,30,40];

  const { id } = useParams();
  
  const user = ids.find(i => i === Number(id));

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      Admin page
    </>
  );
}