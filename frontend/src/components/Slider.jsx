import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";

function Slider({ onChange }) {
  const [priceRange, setPriceRange] = useState([0, 3800]);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleSliderChange = (e) => {
    const newRange = [e.target.valueAsNumber, priceRange[1]];
    setPriceRange(newRange);
    onChange(newRange);
  };

  //This is where the price UI would show up in my slider component
  const priceLabel = (
    <Tooltip id="price-tooltip">
      {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
    </Tooltip>
  );

  return (
    <>
      <Form.Label>Price Filter:</Form.Label>
      <OverlayTrigger placement="top" overlay={priceLabel}>
        <Form.Range
          value={priceRange[0]}
          onChange={handleSliderChange}
          min={0}
          max={3800}
        />
      </OverlayTrigger>
    </>
  );
}

export default Slider;
