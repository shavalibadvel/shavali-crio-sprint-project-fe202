import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DogPics.css";

const DogPics = () => {
  const [breed, setBreed] = useState("random");
  const [dogImage, setDogImage] = useState("");

  const fetchDog = async (selectedBreed) => {
    let url = "https://dog.ceo/api/breeds/image/random";
    if (selectedBreed !== "random") {
      url = `https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images/random`;
    }

    try {
      const response = await axios.get(url);
      setDogImage(response.data.message);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchDog("random");
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setBreed(value);
    fetchDog(value);
  };

  const handleNext = () => {
    fetchDog(breed);
  };

  return (
    <div className="dog-pics-container">
      <label className="breed-label" htmlFor="dog-select">
        Select a breed:{" "}
      </label>
      <select
        id="dog-select"
        className="breed-select"
        value={breed}
        onChange={handleSelectChange}
      >
        <option value="random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>

      <div className="image-wrapper">
        {dogImage && <img src={dogImage} alt="dog" className="dog-image" />}
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default DogPics;
