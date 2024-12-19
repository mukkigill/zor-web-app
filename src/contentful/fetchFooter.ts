import * as contentful from "contentful";
import { CmsBase } from "./types";
import fetchEntry from "./fetchEntry";

export interface CmsFooter extends CmsBase {
  logo?: contentful.Asset;
  logoURL?: string;
  email?: string;
}

export async function fetchFooter() {

  let footer: CmsFooter = {};
  const data = await fetchEntry('footer');
  if (data.errors) {
    footer.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.logo) {
      footer.logo = item.fields.logo as contentful.Asset;
      footer.logoURL = footer.logo.fields.file?.url?.toString();
    }
    if (item.fields.email) {
      footer.email = item.fields.email.toString();
    }
  }

  return footer;
}