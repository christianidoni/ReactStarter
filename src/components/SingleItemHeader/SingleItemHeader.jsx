import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FilmsContext } from "../../context/FilmsContext";
import GradeIcon from "@mui/icons-material/Grade";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import useFormatDate from "../../hooks/useFormatDate";
import useFormatRuntime from "../../hooks/useFormatRuntime";
import { Box, Typography, IconButton } from "@mui/material";

const SingleItemHeader = () => {
  const { filmId } = useParams();
  const { data } = useContext(FilmsContext);
  const selectedFilm = data?.find((el) => el.show.id === parseInt(filmId));

  const formatRuntime = useFormatRuntime();
  const formatDate = useFormatDate();

  if (!selectedFilm) {
    return <div>Film not found</div>;
  }

  const { show } = selectedFilm;
  const { name, genres, runtime, ended, rating, image } = show;

  return (
    <Box sx={{ p: 2, bgcolor: "#141414", color: "#dedede" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Box sx={{ flex: 1, p: 1 }}>
          <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
            {name}
          </Typography>
          <Typography sx={{ color: "#BE2C25" }}>{genres.join(", ")}</Typography>
          <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
            <Typography>{formatRuntime(runtime)}</Typography>
            <Typography>{formatDate(ended)}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, mt: 1, color: "#D22F27" }}>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "#fff",
                border: "4px solid gray",
                borderRadius: "50%",
                p: 1,
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            color: "#D22F27",
            lineHeight: "80px",
            ml: 2,
            width: 170,
            height: 100,
          }}
        >
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </Box>
        <Typography sx={{ lineHeight: "70px", ml: 2 }}>
          {rating?.average ?? "?"}
        </Typography>
        <Box sx={{ flexShrink: 0, ml: 2 }}>
          <img
            src={image?.medium ?? ""}
            alt={`${name} Poster`}
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleItemHeader;

// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { FilmsContext } from "../../context/FilmsContext";
// import GradeIcon from "@mui/icons-material/Grade";
// import ShareIcon from "@mui/icons-material/Share";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddIcon from "@mui/icons-material/Add";
// import useFormatDate from "../../hooks/useFormatDate";
// import useFormatRuntime from "../../hooks/useFormatRuntime";

// const SingleItemHeader = () => {
//   const { filmId } = useParams();
//   const { data } = useContext(FilmsContext);
//   const selectedFilm = data?.find((el) => el.show.id === parseInt(filmId));

//   const formatRuntime = useFormatRuntime();
//   const formatDate = useFormatDate();

//   if (!selectedFilm) {
//     return <div>Film not found</div>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <div
//         style={{
//           display: "inline-flex",
//           textAlign: "left",
//           width: "100%",
//           float: "left",
//           padding: "0 10px",
//           color: "#dedede",
//           backgroundColor: "#141414",
//         }}
//       >
//         <div>
//           <h2 style={{ textTransform: "uppercase" }}>
//             {selectedFilm.show.name}
//           </h2>
//           <p style={{ color: "#BE2C25" }}>
//             {selectedFilm.show.genres.join(", ")}
//           </p>
//           <ul style={{ display: "flex", gap: "30px", width: "250px" }}>
//             <li>{formatRuntime(selectedFilm.show.runtime)}</li>
//             <li>{formatDate(selectedFilm.show.ended)}</li>
//           </ul>
//           <ul
//             style={{
//               display: "flex",
//               listStyleType: "none",
//               gap: "30px",
//               width: "250px",
//               color: "#D22F27",
//             }}
//           >
//             <li>
//               <ShareIcon
//                 style={{
//                   background: "#fff",
//                   border: "4px solid gray",
//                   borderRadius: "50%",
//                   padding: "3px",
//                 }}
//               />
//             </li>
//             <li>
//               <FavoriteIcon
//                 style={{
//                   background: "#fff",
//                   border: "4px solid gray",
//                   borderRadius: "50%",
//                   padding: "3px",
//                 }}
//               />
//             </li>
//             <li>
//               <AddIcon
//                 style={{
//                   background: "#fff",
//                   border: "4px solid gray",
//                   borderRadius: "50%",
//                   padding: "3px",
//                 }}
//               />
//             </li>
//           </ul>
//         </div>
//         <div
//           style={{
//             color: "#D22F27",
//             lineHeight: "80px",
//             marginLeft: "20px",
//             width: "170px",
//             height: "100px",
//           }}
//         >
//           <GradeIcon />
//           <GradeIcon />
//           <GradeIcon />
//           <GradeIcon />
//           <GradeIcon />
//         </div>
//         <span style={{ lineHeight: "70px" }}>
//           {selectedFilm.show.rating?.average ?? "?"}
//         </span>
//         <div style={{ float: "right", width: "100%" }}>
//           <img
//             src={selectedFilm.show.image?.medium ?? ""}
//             style={{ float: "right", marginRight: "20px", borderRadius: "8px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleItemHeader;
