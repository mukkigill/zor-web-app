import * as contentful from "contentful";
import { TimelineEvent } from "../components/Timeline";
import fetchEntry from "./fetchEntry";
import { CmsBase, Technology } from "./types";

export interface CmsTechnology extends CmsBase {
  mainHeader?: string;
  landingImage?: contentful.Asset;
  timelineHeader?: string;
  timeline?: TimelineEvent[];
  technologyHeader?: string;
  technology?: Technology[];
  technologyImages?: contentful.Asset[];
}

export async function fetchTechnology() {

  let technology: CmsTechnology = {};
  const data = await fetchEntry('technology');
  if (data.errors) {
    technology.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.mainHeader) {
      technology.mainHeader = item.fields.mainHeader.toString();
    }
    if (item.fields.landingImage) {
      technology.landingImage = item.fields.landingImage as contentful.Asset;
    }
    if (item.fields.timelineHeader) {
      technology.timelineHeader = item.fields.timelineHeader.toString();
    }
    if (item.fields.timeline) {
      technology.timeline = item.fields.timeline as unknown as TimelineEvent[];
    }
    if (item.fields.technologyHeader) {
      technology.technologyHeader = item.fields.technologyHeader.toString();
    }
    if (item.fields.technology) {
      technology.technology = item.fields.technology as unknown as Technology[];
    }
    if (item.fields.technologyImages) {
      technology.technologyImages = item.fields.technologyImages as contentful.Asset[];
    }
  }

  return technology;
}