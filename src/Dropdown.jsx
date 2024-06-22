import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({data, setInfo, setTurnOn}) {
  const [isActive, setIsActive] = useState(false);
  // console.log(data[0].name);
  console.log(data);

  const handleClick = (data) => {
    setTurnOn(true);
    setInfo({
      image : data.image,
      name : data.name,
      breed : data.breed,
      type : data.type,
      weight : data.weight,
      color : data.color
    })

    setIsActive(!isActive);
  }


  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        Choose a Pet
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {/* <div className="dropdown-item"><img src = "https://image.petmd.com/files/inline-images/golden-retriever-2.jpg?VersionId=9HAclc1bWh8XvyNoGi2.UxpdEp1gygb_"/>Tommy</div> */}
          {
            data?.map((pet) => (
              <div className="dropdown-item" onClick={() => handleClick(pet)}><img src={pet.image}/>{pet.name}</div>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Dropdown;
