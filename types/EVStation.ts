import { Feature, Point } from 'geojson';

export type PointGeometry = {
  type: string;
  coordinates: number[];
};

export type EVCharger = {
  OBJECTID: number;
  slid: null;
  lat: null;
  lon: null;
  Date_Imported: null;
  TOOLTIP: null;
  NLA_URL: null;
};

export type EVChargersFeature = {
  type: string;
  id: number;
  geometry: PointGeometry;
  properties: EVCharger;
};

export type EVChargersFeatureCollection = {
  type: 'FeatureCollection';
  features: EVChargersFeature[];
};

type Properties = {
  EVCharger: EVCharger;
};
