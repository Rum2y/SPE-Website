import axios from "axios";
import { useState, useEffect } from "react";

export default function GetData(props) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  let newArr = [];

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
    if (data.length != 0) {
      let objs = [];
      for (let i = 1; i < data.length; i++) {
        objs.push({});
        for (let j = 0; j < data[0].length; j++) {
          if (data[0][j].includes(":"))
            data[0][j] = data[0][j].replace(":", "");

          objs[i - 1][data[0][j].toLowerCase()] = data[i][j] || "";
        }
        newArr.push(objs[i - 1]);
      }

      newArr.forEach((el) => {
        let img = el.name.replaceAll(" ", "-");
        el.img = `/img/people/${img}.jpg`;
      });
      console.log(newArr);
      setNewData(newArr);
      props.func(newData);
    }
  }, [data]);
}
