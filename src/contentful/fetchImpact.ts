import * as contentful from "contentful";
import fetchEntry from "./fetchEntry";
import { CmsBase } from "./types";

interface CmsImpactArea {
  type: string;
  stat: string;
  description?: string;
  isLeft?: boolean;
}

export interface CmsImpact extends CmsBase {
  landingImage?: contentful.Asset;
  landingImageMobile?: contentful.Asset;
  mainHeader?: string;
  impactAreas?: CmsImpactArea[];
  impactAreaImages?: contentful.Asset[];
  growthHeader?: string;
  growthVisualization?: contentful.Asset;
}

export async function fetchImpact() {

  let impact: CmsImpact = {};
  const data = await fetchEntry('impact');
  if (data.errors) {
    impact.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.landingImage) {
      impact.landingImage = item.fields.landingImage as contentful.Asset;
    }
    if (item.fields.landingImageMobile) {
      impact.landingImageMobile = item.fields.landingImageMobile as contentful.Asset;
    }
    if (item.fields.mainHeader) {
      impact.mainHeader = item.fields.mainHeader.toString();
    }
    if (item.fields.impactAreas) {
      impact.impactAreas = item.fields.impactAreas as unknown as CmsImpactArea[];
    }
    if (item.fields.impactAreaImages) {
      impact.impactAreaImages = item.fields.impactAreaImages as contentful.Asset[];
    }
    if (item.fields.growthSectionHeader) {
      impact.growthHeader = item.fields.growthSectionHeader.toString();
    }
    if (item.fields.growthVisualization) {
      impact.growthVisualization = item.fields.growthVisualization as contentful.Asset;
    }
  }

  return impact;
}