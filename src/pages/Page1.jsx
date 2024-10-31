import { useNavigate } from "react-router-dom"; // Helps with navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importing font awsome
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; //importing the icon i want to use

function Page1() {
  const navigate = useNavigate();
  return (
    <>
      {/* table start */}
      <table className="table table1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
      {/* table end */}

      <div className="nav-button">
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => {
            navigate("/Page2");
          }}
        />
      </div>
    </>
  );
}

export default Page1;
