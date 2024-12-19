import * as contentful from "contentful";

const { REACT_APP_CMS_SPACE_ID, REACT_APP_CMS_ACCESS_TOKEN } = process.env;

export const client = contentful.createClient({
  space: REACT_APP_CMS_SPACE_ID ?? "",
  accessToken: REACT_APP_CMS_ACCESS_TOKEN ?? "",
});