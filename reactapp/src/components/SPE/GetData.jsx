import axios from "axios";
import { useState, useEffect } from "react";

export default function GetData(props) {
  const [data, setData] = useState([]);

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

    // Process data
    const headers = data[0].map((header) =>
      header.replace(":", "").toLowerCase()
    );

    const processedData = data.slice(1).map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] || "";
      });

      // Generate image path
      const imgName = obj.name.replaceAll(" ", "-").toLowerCase();
      obj.img = `/img/people/${imgName}.jpg`; // 🚨 Verify image exists here

      return obj;
    });

    console.log("Processed Data:", processedData); // Debug
    props.func(processedData); // ✅ Pass data DIRECTLY to parent
  }, [data]);

  return null;
}
