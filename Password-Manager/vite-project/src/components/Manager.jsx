import React from "react";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

function Manager() {
  const [form, setForm] = useState({
    url: "",
    username: "",
    password: "",
  });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let result = localStorage.getItem("form");
    if (result) {
      setPasswordArray(JSON.parse(result));
    } else {
      console.log("There's no key-value pair in the local storage....");
    }
  }, []);

  const urlref = useRef();
  const usernameref = useRef();
  const passref = useRef();
  const eyeref = useRef();
  const passeyeref = useRef();

  //saving the data to the local storage
  const saveLS = () => {
    localStorage.setItem("form", JSON.stringify([...passwordArray, form]));
  };

  function handleChange(e) {
    let event = e.target.value;
    setForm({ ...form, [e.target.name]: event, id: uuidv4() });
  }

  function showPassword() {
    // alert('Do you wanna show the password?')
    if (eyeref.current.src.includes("icons/eyeonicon.svg")) {
      eyeref.current.src = "icons/eyeofficon.svg";
      passref.current.type = "text";
    } else {
      eyeref.current.src = "icons/eyeonicon.svg";
      passref.current.type = "password";
    }
  }

  function handleSaveButton(e) {
    console.log(e.target.value);
    console.log(urlref.current.value);
    if (
      urlref.current.value &&
      usernameref.current.value &&
      passref.current.value
    ) {
      console.log(form);
      setPasswordArray([...passwordArray, form]);
      saveLS();
      console.log(passwordArray);
      setForm({
        url: "",
        username: "",
        password: "",
      });

      toast.success('Saved Sucessfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    } else {
      toast.error('All the field must be filled....', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleEditButton = (id) => {
    let response = confirm("DO YOU WANNA EDIT YOUR INFORMATION");
    if (response) {
      const newArray = passwordArray.filter((items) => {
        if (items.id != id) {
          return items;
        }
        setTimeout(() => {
          if (items.id === id) {
            urlref.current.value = items.url;
            usernameref.current.value = items.username;
            passref.current.value = items.password;

            console.log(urlref.current.value);
          }
        }, 100);
      });
      console.log(newArray);
      setPasswordArray(newArray);
    }
  };

  const handleDeleteButton = (id) => {
    const newPassArr = passwordArray.filter((items) => {
      if (items.id != id) {
        console.log(items);
        return items;
      }
    });
    console.log(passwordArray);
    setPasswordArray(newPassArr);
    localStorage.setItem("form", JSON.stringify(newPassArr));

    toast('Deleted!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const copyTo = (itemUrl) => {

    navigator.clipboard.writeText(itemUrl)
    toast('Copied to the clipboard', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  //returing all the saved passwords
  const savedData = passwordArray.map((items) => {
    console.log(items);
    return (
      <tbody key={items.id}>
        <tr className="border-b h-10 hover:bg-green-600">
          <td className="flex justify-center items-center gap-2 pt-1">{items.url}<img onClick={() => { copyTo(items.url) }} className="cursor-pointer" src="icons/copyicon.svg" /></td>
          <td>{items.username}</td>
          <td>{items.password}</td>
          <td
            onClick={() => handleEditButton(items.id)}
            className="hover:cursor-pointer "
          >
            <img src="icons/editicon.svg"></img>
          </td>
          <td
            onClick={() => handleDeleteButton(items.id)}
            className="hover:cursor-pointer "
          >
            <img src="icons/deleteicon.svg"></img>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />

      <div className="flex flex-col gap-8 mt-[10vh] ">
        <div className="userinput text-sm flex flex-col w-[95%] gap-4 m-auto bg-gray-700 rounded-xl  py-3 justify-center items-center font-semibold lg:w-[70%]">
          <h1 className="text-white text-xl">
            Pass<span className="text-green-400">Manager</span>
          </h1>
          <input
            ref={urlref}
            onChange={handleChange}
            name="url"
            value={form.url}
            className="text-center w-[90%] rounded-md outline-green-600 border-none h-8 hover:cursor-pointer"
            type="text"
            placeholder="Enter a URL/website"
          ></input>
          <input
            ref={usernameref}
            onChange={handleChange}
            name="username"
            value={form.username}
            className="text-center w-[90%] rounded-md outline-green-600 border-none h-8 hover:cursor-pointer"
            type="text"
            placeholder="Username"
          ></input>

          <div className="password flex relative items-center">
            <input
              ref={passref}
              onChange={handleChange}
              name="password"
              value={form.password}
              className="text-center w-[100%] rounded-md outline-green-600 border-none h-8 hover:cursor-pointer"
              type="password"
              placeholder="Password"
            ></input>

            <img
              ref={eyeref}
              onClick={showPassword}
              src="icons/eyeonicon.svg"
              className="absolute right-3 h-5"
              alt="eye"
            ></img>
          </div>

          <div className="saveButton text-center w-[90%] rounded-md outline-green-600 border-none h-10 hover:cursor-pointer text-white border-2 bg-green-600 max-w-fit px-5 hover:font-bold flex items-center justify-center text-sm gap-1">
            <input
              onClick={handleSaveButton}
              className="text-lg hover:cursor-pointer"
              type="submit"
              value="Save"
            ></input>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "1.5rem" }}
            ></lord-icon>
          </div>
        </div>

        <div className="h-[45vh] overflow-auto w-[95%] m-auto rounded-lg lg:w-[80%]">

          {passwordArray.length > 0 ? (
            <table className="bg-gray-700 w-full m-auto text-center rounded-xl overflow-auto text-white text-sm md:text-lg ">
              <thead>
                <tr className="border-b h-10 hover:bg-green-500 space-x-3 lowercase">
                  <th>URL/Website</th>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
              </thead>

              {savedData}
            </table>) : (
            <h1 className="text-xl font-semibold text-blue-900 w-[60%] m-auto max-w-fit ">No data to show......</h1>)}

        </div>


      </div>
    </>
  );
}

export default Manager;
