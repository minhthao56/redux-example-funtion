import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { doChangeRadomColor } from "../../redux/actions/changeColors";
import "./Home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.changeColors);
  const handleChangeColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    dispatch(doChangeRadomColor(`#${randomColor}`));
  };
  console.log("color", color);
  return (
    <div>
      <div>Home</div>
      <Button onClick={handleChangeColor} backgroundColor={color.color}>
        Change Header Color
      </Button>
    </div>
  );
};
