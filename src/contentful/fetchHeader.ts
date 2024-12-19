import * as contentful from "contentful";
import fetchEntry from "./fetchEntry";
import { CmsBase } from "./types";

export interface CmsHeader extends CmsBase {
  logo?: contentful.Asset;
  logoURL?: string;
}

export async function fetchHeader() {

  let header: CmsHeader = {};
  const data = await fetchEntry('header');
  if (data.errors) {
    header.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.logo) {
      header.logo = item.fields.logo as contentful.Asset;
      header.logoURL = header.logo.fields.file?.url?.toString();
    }
  }

  return header;
}