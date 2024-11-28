import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  // ยิง api ไป get chapter ยังไง?
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    // เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);
  return (
    <>
      <hr />
      {data.map((c) => (
        <ChapterCourse key={c.ch_id} {...c} />
      ))}
    </>
  );
};

const ChapterCourse = (props) => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-50">
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="text-lg font-bold text-gray-800 mb-2">{props.ch_title}</div>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="rounded-lg"
          src={"https://www.youtube.com/embed/" + props.ch_url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-sm text-gray-600">
          <div className="font-semibold text-gray-700">Views: {props.ch_view}</div> 
          <div className="font-semibold text-gray-700">Duration: {props.ch_timetotal}</div> 
      </div>
    </div>
  </div>
  
  );
};

export default Chapter;
