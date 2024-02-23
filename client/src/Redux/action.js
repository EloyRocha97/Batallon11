import axios from "axios";

export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const getPublications = () => {
  return async function (dispatch) {
    try {
      const dataPublic = await axios.get("/publications");
      const publication = dataPublic.data;
      dispatch({ type: GET_PUBLICATIONS, payload: publication });
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error);
    }
  };
};
