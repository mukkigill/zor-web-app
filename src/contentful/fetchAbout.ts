import * as contentful from "contentful";
import fetchEntry from "./fetchEntry";
import { CmsBase } from "./types";

interface Value {
  title: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface AdvisorMember {
  name: string;
  bio: string;
}

export interface CmsAbout extends CmsBase {
  landingImage?: contentful.Asset;
  mobileLandingImage?: contentful.Asset;
  mainHeader?: string;
  missionHeader?: string;
  missionBody?: string;
  missionImage?: contentful.Asset;
  missionPortrait?: contentful.Asset;
  values?: Value[];
  valueIcons?: contentful.Asset[];
  teamHeader?: string;
  teamList?: TeamMember[];
  teamPictures?: contentful.Asset[];
  advisorHeader?: string;
  advisors?: AdvisorMember[];
  contactHeader?: string;
  contactEmail?: string;
}

export async function fetchAbout() {
  let about: CmsAbout = {};
  const data = await fetchEntry("webAboutUs");
  if (data.errors) {
    about.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.landingImage) {
      about.landingImage = item.fields.landingImage as contentful.Asset;
    }
    if (item.fields.mobileLandingImage) {
      about.mobileLandingImage = item.fields
        .mobileLandingImage as contentful.Asset;
    }
    if (item.fields.mainHeader) {
      about.mainHeader = item.fields.mainHeader.toString();
    }
    if (item.fields.missionHeader) {
      about.missionHeader = item.fields.missionHeader.toString();
    }
    if (item.fields.missionBody) {
      about.missionBody = item.fields.missionBody.toString();
    }
    if (item.fields.missionImage) {
      about.missionImage = item.fields.missionImage as contentful.Asset;
    }
    if (item.fields.missionPortrait) {
      about.missionPortrait = item.fields.missionPortrait as contentful.Asset;
    }
    if (item.fields.values) {
      about.values = item.fields.values as unknown as Value[];
    }
    if (item.fields.valueIcons) {
      about.valueIcons = item.fields.valueIcons as contentful.Asset[];
    }
    if (item.fields.teamHeader) {
      about.teamHeader = item.fields.teamHeader.toString();
    }
    if (item.fields.teamList) {
      about.teamList = item.fields.teamList as unknown as TeamMember[];
    }
    if (item.fields.teamPictures) {
      about.teamPictures = item.fields.teamPictures as contentful.Asset[];
    }
    if (item.fields.advisorHeader) {
      about.advisorHeader = item.fields.advisorHeader.toString();
    }
    if (item.fields.advisors) {
      about.advisors = item.fields.advisors as unknown as TeamMember[];
    }
    if (item.fields.contactHeader) {
      about.contactHeader = item.fields.contactHeader.toString();
    }
    if (item.fields.contactEmail) {
      about.contactEmail = item.fields.contactEmail.toString();
    }
  }

  return about;
}
