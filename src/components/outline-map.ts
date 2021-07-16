import { LitElement, html, TemplateResult, css, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import mapboxgl, { Map, LngLatBoundsLike, LngLatLike } from 'mapbox-gl';
import turf from '@turf/centroid';
import turfDistance from '@turf/distance';
import { Units } from '@turf/helpers';
import { parks } from '../data/parks';
import { parkAmenities, allAmenities, icons } from './utils';
import { mapboxStyle } from '../styles';

@customElement('outline-map')
export class OutlineMap extends LitElement {
  static styles = [
    mapboxStyle,
    css`
      a {
        color: #404040;
        text-decoration: none;
      }

      a:hover {
        color: #101010;
      }

      h1 {
        font-size: 22px;
        margin: 0 auto;
        font-weight: 400;
        line-height: 20px;
        padding: 20px 2px;
      }

      .debug {
        background-color: rgba(35, 55, 75, 0.9);
        color: #ffffff;
        padding: 6px 12px;
        font-family: monospace;
        z-index: 10000;
        position: absolute;
        top: 0;
        left: 0;
        margin: 12px;
        border-radius: 4px;
      }

      .heading {
        background: #fff;
        border-bottom: 1px solid #eee;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        width: 100%;
        text-align: center;
      }

      .sidebar {
        background-color: white;
        /* border: 1px #eee solid; */
        display: flex;
        flex-direction: column;
        position: relative;
        top: 0;
        left: 0;
        /* overflow: hidden; */
        border-right: 1px solid rgba(0, 0, 0, 0.25);
        z-index: 100;
      }

      .map-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: full;
        height: 100vh;
        overflow: hidden;
      }

      .listings {
        display: flex;
        flex-direction: column;
        overflow: auto;
        /* height: 60%; */
      }

      .listings .item {
        display: block;
        border-bottom: 1px solid #eee;
        padding: 10px;
        text-decoration: none;
      }

      .listings .item:last-child {
        border-bottom: none;
      }

      .listings .item .title {
        display: block;
        color: #056cb6;
        font-weight: 700;
      }

      .listings .item .title small {
        font-weight: 400;
      }

      .listings .item.active .title,
      .listings .item .title:hover {
        color: #38939b;
      }

      .listings .item.active {
        background-color: #f8f8f8;
      }

      .listings-address {
        padding: 5px 0;
      }

      .listings-address p {
        margin: 2px 0;
        display: block;
        font-weight: 500;
        font-size: 14px;
        color: #464646;
      }

      .listings-address a {
        text-decoration: underline;
        color: #056cb6;
        font-size: 13.5px;
      }

      .distance {
        font-size: 14px;
        margin: 1px;
        color: #464646;
      }

      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
        border-left: 0;
        background: rgba(0, 0, 0, 0.1);
      }

      ::-webkit-scrollbar-track {
        background: none;
      }

      ::-webkit-scrollbar-thumb {
        background: #056cb6;
        border-radius: 0;
      }

      .clearfix {
        display: block;
      }

      .clearfix::after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }

      .mapboxgl-popup-close-button {
        display: none;
      }

      .mapboxgl-popup-content {
        font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;
        padding: 0;
        max-width: 220px;
        background-color: white;
        pointer-events: none;
      }

      .mapboxgl-popup-content-wrapper {
        padding: 1%;
      }

      .mapboxgl-popup-content h4 {
        text-align: center;
        font-size: 18px;
        margin: 0;
        display: block;
        padding: 10px;
        font-weight: 500;
        color: white;
        background-color: #056cb6;
        border-bottom: 1px solid #eee;
      }
      .mapboxgl-popup-content p {
        margin: 0;
        text-align: center;
        display: block;
        font-weight: 500;
        font-size: 14px;
      }

      .mapboxgl-popup-content div {
        padding: 20px;
      }

      .mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
        margin-top: 15px;
      }

      .popup-address {
        padding: 5px;
      }

      #popup-icons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 8px 10px 8px;
      }

      .popup-icon {
        width: 18px;
        padding: 5px;
        margin: 3px;
        border: 1px solid black;
        border-radius: 5px;
      }

      .user-marker {
        border: none;
        height: 24px;
        width: 24px;
        background-image: url(${unsafeCSS(icons.User)});
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, 0);
      }

      .park-marker {
        border: none;
        height: 24px;
        width: 24px;
        background-image: url(${unsafeCSS(icons.Marker)});
        background-color: rgba(0, 0, 0, 0);
      }

      .container {
        display: flex;
        flex-direction: column;
      }

      .smc-header {
        width: 100%;
        height: 5%;
        background-color: #056cb6;
        margin-bottom: 5px;
        margin-top: 0;
        padding-top: 30px;
      }

      .smc-header h4 {
        width: 100%;
        color: white;
        text-align: center;
        margin-top: 0;
        padding-bottom: 30px;
      }

      .amenities {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #eee;
        padding: 10px;
        padding-bottom: 20px;
      }

      .amenities h4 {
        color: #464646;
        margin-bottom: 10px;
        font-weight: 500;
        padding-left: 4px;
        margin-top: 5px;
        text-decoration: underline;
      }

      .amenity label {
        color: #464646;
        cursor: pointer;
      }

      .amenity input {
        color: #464646;
        /* display: none; */
      }

      .amenity input:checked + label {
        color: #056cb6;
      }

      .amenitiesDetails {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
      }

      .amenitiesDetails p {
        padding: 0 5px;
        margin: 1px;
      }

      .sr-only:not(:focus):not(:active) {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      .search-bar {
        padding: 10px;
        z-index: 100;
        position: absolute;
        top: 5;
        left: 30;
      }

      .search-bar button {
        background-color: #056cb6;
        color: white;
        border: none;
        cursor: pointer;
        height: 30px;
        width: 75px;
        margin-left: 10px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        padding: 5px;
      }

      .search-bar input {
        border: none;
        height: 30px;
        width: 200px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        padding: 5px;
        padding-left: 10px;
      }
    `,
  ];

  @query('.map-container')
  mapContainer!: HTMLElement;

  @query('#listings')
  listings!: HTMLElement;

  @query('#zip-code-search')
  searchField!: HTMLInputElement;

  @property()
  mapboxStyle = 'mapbox://styles/mapbox/streets-v11';

  @property()
  lng: string | number = -122.2308;

  @property()
  lat: string | number = 37.4889;

  @property()
  currentCoords = [this.lng as number, this.lat as number];

  @property()
  zoom: string | number = 10;

  @property()
  mapHeight = '100vh';

  @property()
  mapWidth = '100vw';

  @property()
  mapBorderRadius?: string;

  @property()
  debugMode = false;

  @state()
  private map!: Map;

  @state()
  private data!: any;

  @state()
  private allParks = parks;

  @state()
  private amenityFilters: string[] = [];

  @state()
  private mapboxToken =
    'pk.eyJ1IjoibWFicnljb2RlcyIsImEiOiJja3F2MDAwZmswOW13Mm9uM2ViZmg4NGN0In0.WZreGp-MouonlPwqe8fvug';

  setCoords(lng: string, lat: string, zoom: string): void {
    this.lng = lng;
    this.lat = lat;
    this.zoom = zoom;
    this.requestUpdate();
  }

  setFeaturePoint = (feature: any): any => {
    const newFeat = turf(feature[1].geometry);
    newFeat.properties = feature[1].properties;
    return newFeat;
  };

  parseParksData = (): void => {
    this.data = Object.entries(this.allParks.features).map(i =>
      this.setFeaturePoint(i)
    );
  };

  calculateDistance = (): void => {
    const options = { units: 'miles' as Units };
    this.data.forEach((park: any) => {
      Object.defineProperty(park.properties, 'distance', {
        value: turfDistance(
          this.currentCoords,
          park.geometry.coordinates,
          options
        ),
        writable: true,
        enumerable: true,
        configurable: true,
      });
    });
  };

  getRoute = (end: number[]) => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${this.currentCoords[0]},${this.currentCoords[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${this.mapboxToken}`;

    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = () => {
      const json = JSON.parse(req.response);
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route,
        },
      };
      if (this.map.getSource('route')) {
        // @ts-ignore
        this.map.getSource('route').setData(geojson);
      } else {
        this.map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                // @ts-ignore
                coordinates: geojson,
              },
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75,
          },
        });
      }
    };
    req.send();
  };

  addAmenities = (): void => {
    this.data.forEach((park: any) => {
      Object.defineProperty(park.properties, 'amenities', {
        value: this.getRandomAmenities(parkAmenities),
        writable: true,
        enumerable: true,
      });
    });
    this.data.forEach((park: any) => {
      park.properties.amenities.forEach((a: string) => {
        Object.defineProperty(park.properties, a, {
          value: true,
          writable: true,
          enumerable: true,
        });
      });
    });
  };

  getRandomAmenities = (arr: string[][]): string[] => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  sortByDistance = (): void => {
    this.data.sort((a: any, b: any) => {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0;
    });
    this.buildLocationList(this.data);
  };

  buildLocationList = (data: any): void => {
    data.forEach((park: any) => {
      const prop = park.properties;
      const parkCoords = park.geometry.coordinates;
      const listing = this.listings.appendChild(document.createElement('div'));
      listing.id = `listing-${prop.id}`;
      listing.className = 'item';

      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = `'link-${prop.id}`;
      link.innerHTML = this.formatName(prop.name);

      link.addEventListener('click', () => {
        const bbox = this.getBbox(park, this.currentCoords);
        this.map.fitBounds(bbox as LngLatBoundsLike, {
          padding: 180,
        });
        this.createPopUp(park);
        this.getRoute(parkCoords);

        const activeItem = this.shadowRoot!.querySelectorAll('.active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        listing.classList.add('active');
      });
      const listingAddress = listing.appendChild(document.createElement('div'));
      listingAddress.classList.add('listings-address');
      listingAddress.innerHTML +=
        '<p>1234 NE Street Ave</p><p>City State 00000</p>';
      listingAddress.innerHTML +=
        '<a href="https://parks.smcgov.org/" target="_blank">Park Website</a>';
      const details = listing.appendChild(document.createElement('div'));
      // const amenitiesDetails = details.appendChild(
      //   document.createElement('div')
      // );
      // amenitiesDetails.classList.add('amenitiesDetails');
      // if (prop.amenities) {
      //   prop.amenities.forEach((a: string) => {
      //     amenitiesDetails.innerHTML += `<p>${a}</p>`;
      //   });
      // }
      if (prop.distance) {
        details.innerHTML += `<p class='distance'><strong>${
          Math.round(prop.distance * 100) / 100
        } miles</strong></p>`;
      }
    });
  };

  clearListings = () => {
    while (this.listings.firstChild) {
      this.listings.removeChild(this.listings.firstChild);
    }
  };

  formatName = (name: string) =>
    name
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

  addMarkers = () => {
    this.data.forEach((m: any) => {
      const el = document.createElement('div');
      el.id = `marker-${m.properties.id}`;
      el.className = 'park-marker';
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(m.geometry.coordinates)
        .addTo(this.map);
    });
  };

  addUserMarker = () => {
    let el: HTMLElement;
    if (this.shadowRoot!.getElementById('user-marker')) {
      el = this.shadowRoot!.getElementById('user-marker') as HTMLElement;
    } else {
      el = document.createElement('div');
      el.id = 'user-marker';
      el.className = 'user-marker';
    }
    new mapboxgl.Marker(el, { offset: [0, 0] })
      .setLngLat(this.currentCoords as LngLatLike)
      .addTo(this.map);
  };

  flyToMarker = (coords: LngLatLike) => {
    this.map.flyTo({
      center: coords,
      zoom: 15,
    });
  };

  createPopUp = (currentFeature: any) => {
    const popUps = this.shadowRoot!.querySelectorAll('.mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    const amenities = currentFeature.properties.amenities.map(
      a => `<img class='popup-icon' src=${icons[a]} alt=${a}/>`
    );
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h4>${this.formatName(currentFeature.properties.name)}</h4>
        <div class="popup-address">
          <p>1234 NE Street Ave</p>
          <p>City, State 00000</p>
        </div>
        <div id='popup-icons-container'>
          ${amenities.join(' ')}
        </div>
        `
      )
      .addTo(this.map);
  };

  // addAmenityIcons = (park: any) =>
  //   park.properties.amenities.forEach(
  //     (a: any) => html`<img alt=${a} src=${icons[a]}></img>`
  //   );

  handleAmenitiesChange = (amenity: string) => {
    if (this.amenityFilters.includes(amenity)) {
      this.amenityFilters.splice(this.amenityFilters.indexOf(amenity), 1);
    } else {
      this.amenityFilters.push(amenity);
    }
    this.filterByAmenities();
  };

  buildFilter = (arr: string[]) => {
    const filter: any[] = ['all'];

    if (arr.length === 0) {
      return filter;
    }

    for (let i = 0; i < arr.length; i += 1) {
      filter.push(['==', ['get', arr[i] as string], true]);
    }

    return filter;
  };

  filterByAmenities = () => {
    this.map.setFilter('parks', this.buildFilter(this.amenityFilters));
    let filteredData = this.data;
    if (this.amenityFilters.length > 0) {
      filteredData = this.data.filter((park: any) =>
        this.arrayContainsArray(park.properties.amenities, this.amenityFilters)
      );
    }
    this.clearListings();
    this.buildLocationList(filteredData);
  };

  arrayContainsArray = (superset: string[], subset: string[]) => {
    if (subset.length === 0) {
      return false;
    }
    return subset.every(value => superset.indexOf(value) >= 0);
  };

  getBbox = (park: any, currentLocation: number[]) => {
    const lats = [park.geometry.coordinates[1], currentLocation[1]];
    const lons = [park.geometry.coordinates[0], currentLocation[0]];
    const sortedLons = lons.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });
    const sortedLats = lats.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });
    return [
      [sortedLons[0], sortedLats[0]],
      [sortedLons[1], sortedLats[1]],
    ];
  };

  renderDebugger(): TemplateResult | null {
    if (!this.debugMode) return null;

    return html`
      <div class="debug">
        Longitude: ${this.lng} | Latitude: ${this.lat} | Zoom: ${this.zoom}
      </div>
    `;
  }

  renderAmenities = (): TemplateResult[] =>
    allAmenities.map(
      a =>
        html`<span class="amenity">
          <input
            type="checkbox"
            @click=${() => this.handleAmenitiesChange(a)}
            id=${a}
            name=${a}
            .value=${a}
          />
          <label id=${a} for=${a}>${a}</label>
        </span> `
    );

  handleSearch = (e: MouseEvent) => {
    e.preventDefault();
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchField.value}.json?access_token=${this.mapboxToken}`
    )
      .then(response => response.json())
      .then(data => {
        this.currentCoords = data.features[0].center;
        this.addUserMarker();
        this.calculateDistance();
        this.sortByDistance();
        this.clearListings();
        this.buildLocationList(this.data);
        this.flyToMarker(this.currentCoords as LngLatLike);
      });
    this.searchField.value = '';
  };

  firstUpdated(): void {
    this.parseParksData();
    this.addAmenities();
    mapboxgl.accessToken = this.mapboxToken;
    if (this.map) return;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.mapboxStyle,
      center: this.currentCoords as LngLatLike,
      zoom: this.zoom as number,
      // minZoom: 9.5,
    });
    this.map.on('move', () => {
      const lng = this.map.getCenter().lng.toFixed(4);
      const lat = this.map.getCenter().lat.toFixed(4);
      const zoom = this.map.getZoom().toFixed(2);

      this.setCoords(lng, lat, zoom);
    });
    this.map.on('load', () => {
      this.getRoute(this.currentCoords);
      this.map.addSource('parks', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: this.data,
        },
      });
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addSource('user', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: this.currentCoords,
              },
              properties: {
                userName: 'Josh',
              },
            },
          ],
        },
      });

      this.addUserMarker();
      // this.addMarkers();
      this.map.addLayer({
        id: 'parks',
        type: 'circle',
        source: 'parks',
        paint: {
          'circle-radius': 5,
          'circle-color': '#7AAD34',
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2,
        },
        filter: ['==', '$type', 'Point'],
      });

      this.map.on('click', (e: any) => {
        const features = this.map.queryRenderedFeatures(e.point, {
          layers: ['parks'],
        });

        if (features.length !== undefined && features.length > 0) {
          const clickedPoint = this.data.filter(
            d => d.properties.id === features[0].properties!.id
          )[0];

          const bbox = this.getBbox(clickedPoint, this.currentCoords);
          this.map.fitBounds(bbox as LngLatBoundsLike, {
            padding: 120,
          });
          this.createPopUp(clickedPoint);
          // @ts-ignore
          this.getRoute(clickedPoint.geometry.coordinates);

          const activeItem = this.shadowRoot!.querySelectorAll('.active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          const listing = this.shadowRoot!.querySelector(
            `#listing-${clickedPoint.properties!.id}`
          );
          listing!.classList.add('active');
        }
      });
      this.buildLocationList(this.data);
    });

    this.calculateDistance();
    this.sortByDistance();
  }

  render(): TemplateResult {
    const mapStyles = {
      width: this.mapWidth,
      height: this.mapHeight,
      borderRadius: this.mapBorderRadius ? this.mapBorderRadius : '',
      border: '1px solid #eee',
    };
    const sidebarStyles = {
      height: this.mapHeight,
      width: '15vw',
    };
    const listingsStyle = {
      height: '100vh',
      width: '15vw',
      overflow: 'auto',
    };
    return html`
      ${this.renderDebugger()}
      <div class="container">
        <div class="map-wrapper">
          <div class="sidebar" style=${styleMap(sidebarStyles)}>
            <div class="smc-header">
              <a href="https://parks.smcgov.org/" target="_blank">
                <h4>San Mateo County Parks</h4>
              </a>
            </div>

            <div class="amenities">
              <h4>Filter By Amenities</h4>
              ${this.renderAmenities()}
            </div>
            <div
              id="listings"
              class="listings"
              style=${styleMap(listingsStyle)}
            ></div>
          </div>
          <div style=${styleMap(mapStyles)} class="map-container">
            <form class="search-bar">
              <label class="sr-only" for="zip-code-search"
                >Search by zip-code:</label
              >
              <input
                type="search"
                autocomplete="off"
                id="zip-code-search"
                name="q"
                aria-label="search starting coordinates by zip code"
                placeholder="Search by County Zipcode..."
              />
              <button @click=${this.handleSearch}>Search</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
