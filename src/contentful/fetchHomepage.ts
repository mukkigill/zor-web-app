import * as contentful from "contentful";
import fetchEntry from "./fetchEntry";
import { CmsBase, News, Redirection } from "./types";

export interface CmsHomepage extends CmsBase {
  mainHeader?: string;
  sectionHeader?: string;
  landingImage?: contentful.Asset;
  landingImageMobile?: contentful.Asset;
  internalLinks?: Redirection[];
  sectionText?: string;
  facts?: Redirection[];
  factImages?: contentful.Asset[];
  technology?: Redirection;
  newsHeader?: string;
  news?: News[];
  newsImages?: contentful.Asset[];
}

export async function fetchHomepage() {

  let homepage: CmsHomepage = {};
  const data = await fetchEntry('webHomepage');
  if (data.errors) {
    homepage.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.mainHeader) {
      homepage.mainHeader = item.fields.mainHeader.toString();
    }
    if (item.fields.landingImage) {
      homepage.landingImage = item.fields.landingImage as contentful.Asset;
    }
    if (item.fields.landingImageMobile) {
      homepage.landingImageMobile = item.fields.landingImageMobile as contentful.Asset;
    }
    if (item.fields.sectionHeader) {
      homepage.sectionHeader = item.fields.sectionHeader.toString();
    }
    if (item.fields.internalLinks) {
      homepage.internalLinks = item.fields.internalLinks as unknown as Redirection[];
    }
    if (item.fields.sectionText) {
      homepage.sectionText = item.fields.sectionText.toString();
    }
    if (item.fields.facts) {
      homepage.facts = item.fields.facts as unknown as Redirection[];
    }
    if (item.fields.factImages) {
      homepage.factImages = item.fields.factImages as contentful.Asset[];
    }
    if (item.fields.technologyLink) {
      homepage.technology = item.fields.technologyLink as unknown as Redirection;
    }
    if (item.fields.newsHeader) {
      homepage.newsHeader = item.fields.newsHeader.toString();
    }
    if (item.fields.news) {
      homepage.news = item.fields.news as unknown as News[];
    }
    if (item.fields.newsImages) {
      homepage.newsImages = item.fields.newsImages as contentful.Asset[];
    }
  }

  return homepage;
}