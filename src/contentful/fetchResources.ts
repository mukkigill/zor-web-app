import * as contentful from 'contentful';
import fetchEntry from './fetchEntry';
import { CmsBase, News } from './types';

export interface CmsResources extends CmsBase {
  mainHeader?: string;
  landingImage?: contentful.Asset;
  landingImageMobile?: contentful.Asset;
  primarySectionHeader?: string;
  primarySectionBody?: string;
  primarySource?: string;
  resourcesSectionTitle?: string;
  resourcesData?: News[];
  resourcesImages?: contentful.Asset[];
}

export async function fetchResources() {

  let resources: CmsResources = {};
  const data = await fetchEntry('resources');
  if (data.errors) {
    resources.errors = data.errors;
  }

  for (const item of data.items) {
    if (item.fields.mainHeader) {
      resources.mainHeader = item.fields.mainHeader.toString();
    }
    if (item.fields.landingImage) {
      resources.landingImage = item.fields.landingImage as contentful.Asset;
    }
    if (item.fields.landingImageMobile) {
      resources.landingImageMobile = item.fields.landingImageMobile as contentful.Asset;
    }
    if (item.fields.primarySectionHeader) {
      resources.primarySectionHeader = item.fields.primarySectionHeader.toString();
    }
    if (item.fields.primarySectionBody) {
      resources.primarySectionBody = item.fields.primarySectionBody.toString();
    }
    if (item.fields.primarySource) {
      resources.primarySource = item.fields.primarySource.toString();
    }
    if (item.fields.resourcesSectionTitle) {
      resources.resourcesSectionTitle = item.fields.resourcesSectionTitle.toString();
    }
    if (item.fields.resourcesData) {
      resources.resourcesData = item.fields.resourcesData as unknown as News[];
    }
    if (item.fields.resourcesImages) {
      resources.resourcesImages = item.fields.resourcesImages as contentful.Asset[];
    }
  }
  return resources;
}