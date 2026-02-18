import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";

const Livesite = () => {
  const { id } = useParams();
  const [html, setHtml] = useState(" ");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleGetWebsite = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/website/get-by-slug/${id}`,
          { withCredentials: true },
        );
        setHtml(result.data.latestCode);
      } catch (error) {
        console.log(error);
        setError("site not found");
      }
    };

    handleGetWebsite();
  }, [id]);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-red-400">
        {error}
      </div>
    );
  }

  //   if (!website) {
  //     return (
  //       <div className="h-screen flex items-center justify-center bg-black text-white">
  //         Loading...
  //       </div>
  //     );
  //   }

  return (
    // <div className="h-screen w-screen bg-black text-white flex flex-col">
    //   <div className="h-14 px-4 flex items-center justify-between border-b border-white/10 bg-black/80">
    //     <h1 className="font-semibold truncate">{website.title}</h1>
    //   </div>

    <iframe
      srcDoc={html}
      className="w-screen h-screen border-none"
      sandbox="allow-scripts allow-same-origin allow-forms"
      title="Live Website Preview"
    />
    // </div>
  );
};

export default Livesite;
