import { Feature, FeatureCollection, Geometry, Point, Polygon } from 'geojson';
import { CIPProject } from '../../types/CIPProject';
import { EVCharger } from '../../types/EVStation';

type CIPProjectsFeatureCollection = FeatureCollection<Polygon, CIPProject>;
type EVChargersFeatureCollection = FeatureCollection<Point, EVCharger>;

import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

const filterEVChargers = (
        evChargersData: EVChargersFeatureCollection,
        cipProjectsData: CIPProjectsFeatureCollection
      ): Feature<Point>[] => {
        return evChargersData.features.filter((charger) => {
          const chargerFeature: Feature<Point> = {
            type: 'Feature',
            geometry: charger.geometry,
            properties: charger.properties,
          };

       
          return cipProjectsData.features.some((project) => {
            return turf.booleanPointInPolygon(chargerFeature, project);
          });
        });
      };


export const Map = () => {
  const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.24, 34.0522],
      zoom: 10,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  useEffect(() => {
    
    if (!map) {
      return;
    }

    map.on('load', async () => {
      const cipProjectsResponse = await fetch('/data/cip_projects.json');
      const cipProjectsData = await cipProjectsResponse.json();

      map.addSource('cip_projects', {
        type: 'geojson',
        data: cipProjectsData,
      });

      map.addLayer({
        id: 'projects',
        type: 'fill',
        source: 'cip_projects',
        paint: {
          'fill-color': '#b15ac2',
          'fill-opacity': 0.5,
        },
      });

      const evChargersResponse = await fetch('/data/ev_chargers.json');
      const evChargersData = await evChargersResponse.json();

      console.log('evChargersData', evChargersData)

      const filteredEVChargers = filterEVChargers(evChargersData, cipProjectsData);

      const filteredEVChargersFeatureCollection: EVChargersFeatureCollection = {
        type: 'FeatureCollection',
        //@ts-ignore
        features: filteredEVChargers,
      };

      map.addSource('ev_chargers', {
        type: 'geojson',
        data: filteredEVChargersFeatureCollection,
      });

        map.addLayer({
        id: 'ev_chargers',
        type: 'circle',
        source: 'ev_chargers',
        paint: {
          'circle-color': 'deeppink',
          'circle-radius': 6,
        },
      });
    });
  }, [map]);


  return <div id="mapbox" style={{ width: '100vw', height: '100vh' }} />;
};

      

     
