import { useContext } from "react";
import {AuthContext} from '../../auth-context';

const LoginPage = () => {
    const {login} = useContext(AuthContext);

  return (
    <>
      <h1>Вхід на сайт</h1>
      <button className="btn btn-success" onClick={()=>{
          login({name: "Славік"});
      }}>Логін</button>
    </>
  );
};
export default LoginPage;