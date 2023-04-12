export type CIPProject = {
  type: string;
  id: number;
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  properties: {
    OBJECTID: number;
    GeocodingID: number;
    Geotype: string;
    GeocodeDate: number;
    PROJECTID: number;
    NavLA_CIP: number;
    NavLA_Archive: number;
    ProgramID: number;
    ProgramName: string;
    ProjectTitle: string;
    WO_Status: string;
    PM_Name: string;
    PM_Phone: string;
    PM_EMail: string;
  };
};

export type EVCharger = {
  type: string;
  id: number;
  geometry: {
    type: 'Point';
    coordinates: number[];
  };
  properties: {
    OBJECTID: number;
    slid: null;
    lat: null;
    lon: null;
    Date_Imported: null;
    TOOLTIP: null;
    NLA_URL: null;
  };
};
