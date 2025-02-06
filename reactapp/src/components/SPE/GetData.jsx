import axios from "axios";
import { useState, useEffect } from "react";

export default function GetData(props) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.link);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    let objs = [];

    for (let i = 1; i < data.length; i++) {
      const obj = {};
      for (let j = 0; j < data[0].length; j++) {
        let header = data[0][j];
        if (header.includes(":")) header = header.replace(":", "");
        header = header.toLowerCase();

        obj[header] = data[i][j] || "";
      }

      let img = obj.name.replaceAll(" ", "-");
      obj.img = `/img/people/${img}.jpg`;

      objs.push(obj);
    }

    console.log("Processed data:", objs); // Verify in console
    setNewData(objs);
    props.func(objs); // Pass the directly processed array
  }, [data]);

  // Keep your original return null if not rendering anything
  return null;
}
