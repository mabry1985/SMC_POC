import { LitElement, html, TemplateResult, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import mapboxgl, { Map } from 'mapbox-gl';
import { tailwindStyles, mapboxStyle } from '../styles';
import { parks } from '../data/parks';
import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

// import './outline-map.css';
// import 'mapbox-gl/dist/mapbox-gl.css';

export type ParkFilter = 'PARK' | 'COUNTY PARK' | 'STATE PARK';

@customElement('outline-map')
export class OutlineMap extends LitElement {
  // createRenderRoot(): OutlineMap {
  //   return this;
  // }

  static styles = [
    tailwindStyles,
    mapboxStyle,
    css`
      .test {
        background: blue;
      }
    `,
  ];

  @query('.map-container')
  mapContainer!: HTMLElement;

  @state()
  private mapboxToken = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_MAPBOX_KEY;

  @property()
  mapboxStyle = 'mapbox://styles/mapbox/streets-v11';

  @property()
  lng: string | number = -122.3073;

  @property()
  lat: string | number = 37.5444;

  @property()
  zoom: string | number = 12.15;

  @property()
  mapHeight = '50vh';

  @property()
  mapWidth = '50vw';

  @property()
  mapBorderRadius?: string;

  @property()
  debugMode = false;

  @state()
  private map!: Map;

  setCoords(lng: string, lat: string, zoom: string): void {
    this.lng = lng;
    this.lat = lat;
    this.zoom = zoom;
    this.requestUpdate();
  }

  parkFilter = (data: any): any => {
    if (
      data[1].properties.ldmk_type === 'PARK' ||
      data[1].properties.ldmk_type === 'COUNTY PARK' ||
      data[1].properties.ldmk_type === 'STATE PARK'
    ) {
      return true;
    }

    return false;
  };

  parseParksData = (): void => {
    const filteredArr = Object.entries(parks.features).filter(i =>
      this.parkFilter(i)
    );

    console.log(filteredArr);
    filteredArr.forEach((item, index) =>
      console.log(index, item[1].properties.name)
    );
  };

  firstUpdated(): void {
    this.parseParksData();
    mapboxgl.accessToken = this.mapboxToken;
    if (this.map) return;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.mapboxStyle,
      center: [this.lng as number, this.lat as number],
      zoom: this.zoom as number,
    });
    this.map.on('move', () => {
      const lng = this.map.getCenter().lng.toFixed(4);
      const lat = this.map.getCenter().lat.toFixed(4);
      const zoom = this.map.getZoom().toFixed(2);

      this.setCoords(lng, lat, zoom);
    });
  }

  renderDebugger(): TemplateResult | null {
    if (!this.debugMode) return null;

    return html`
      <div class="sidebar">
        Longitude: ${this.lng} | Latitude: ${this.lat} | Zoom: ${this.zoom}
      </div>
    `;
  }

  render(): TemplateResult {
    const styles = {
      width: this.mapWidth,
      height: this.mapHeight,
      borderRadius: this.mapBorderRadius ? this.mapBorderRadius : '',
    };
    return html`
      <div
        class="flex flex-col justify-center items-center w-full"
        style="height: 100vh"
      >
        <h1 class="bg-green-300 test">Test</h1>
        ${this.renderDebugger()}
        <div style=${styleMap(styles)} class="map-container"></div>
      </div>
    `;
  }
}
