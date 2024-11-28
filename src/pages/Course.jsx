import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    //asynchronous
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;

   setData(data_format);
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl">Course</h1>
      <hr />
      <div className="grid grid-cols-3 gap-6 p-6 mx-auto drop-shadow-xl">
      {data.map((course) => (
        <CourseCard key={course.id}{...course}/>
      ))}
      </div>
    </>
  );
};


const CourseCard = (props) => {
    return (
      <div className="bg-gray-400 max-w-md p-6">
        <div className="flex justify-center ">
          <img src={props.picture} alt="" style={{ width: 100 }}/>
        </div>
        <div>{props.title}</div>
        <div>{props.detail}</div>
        <div className="text-red-700 hover:text-blue-700 border-b-2" >
        <NavLink to={"/course/" + props.id}>เนื้อหาในหลักสูตร</NavLink>
        </div>
      </div>
    );
  }

export default Course;
