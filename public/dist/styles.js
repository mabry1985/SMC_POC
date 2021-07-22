import { css } from 'lit';

export const mapboxStyle = css`
  .mapboxgl-map{
    font:12px/20px Helvetica Neue, Arial, Helvetica, sans-serif;
    overflow:hidden;
    position:relative;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  }
  .mapboxgl-canvas{
    position:absolute;
    left:0;
    top:0;
  }
  .mapboxgl-map:-webkit-full-screen{
    width:100%;
    height:100%;
  }
  .mapboxgl-canary{
    background-color:salmon;
  }
  .mapboxgl-canvas-container.mapboxgl-interactive,
  .mapboxgl-ctrl-group button.mapboxgl-ctrl-compass{
    cursor:-webkit-grab;
    cursor:grab;
    -webkit-user-select:none;
    -moz-user-select:none;
     -ms-user-select:none;
         user-select:none;
  }
  .mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-track-pointer{
    cursor:pointer;
  }
  .mapboxgl-canvas-container.mapboxgl-interactive:active,
  .mapboxgl-ctrl-group button.mapboxgl-ctrl-compass:active{
    cursor:-webkit-grabbing;
    cursor:grabbing;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas{
    touch-action:pan-x pan-y;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-drag-pan,
  .mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas{
    touch-action:pinch-zoom;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan
    .mapboxgl-canvas{
    touch-action:none;
  }
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right,
  .mapboxgl-ctrl-top-left,
  .mapboxgl-ctrl-top-right{
    position:absolute;
    pointer-events:none;
    z-index:2;
  }
  .mapboxgl-ctrl-top-left{
    top:0;
    left:0;
  }
  .mapboxgl-ctrl-top-right{
    top:0;
    right:0;
  }
  .mapboxgl-ctrl-bottom-left{
    bottom:0;
    left:0;
  }
  .mapboxgl-ctrl-bottom-right{
    right:0;
    bottom:0;
  }
  .mapboxgl-ctrl{
    clear:both;
    pointer-events:auto;
    transform:translate(0);
  }
  .mapboxgl-ctrl-top-left .mapboxgl-ctrl{
    margin:10px 0 0 10px;
    float:left;
  }
  .mapboxgl-ctrl-top-right .mapboxgl-ctrl{
    margin:10px 10px 0 0;
    float:right;
  }
  .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl{
    margin:0 0 10px 10px;
    float:left;
  }
  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl{
    margin:0 10px 10px 0;
    float:right;
  }
  .mapboxgl-ctrl-group{
    border-radius:4px;
    background:#fff;
  }
  .mapboxgl-ctrl-group:not(:empty){
    box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl-group:not(:empty){
      box-shadow:0 0 0 2px ButtonText;
    }
  }
  .mapboxgl-ctrl-group button{
    width:29px;
    height:29px;
    display:block;
    padding:0;
    outline:none;
    border:0;
    box-sizing:border-box;
    background-color:transparent;
    cursor:pointer;
  }
  .mapboxgl-ctrl-group button + button{
    border-top:1px solid #ddd;
  }
  .mapboxgl-ctrl button .mapboxgl-ctrl-icon{
    display:block;
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    background-position:50%;
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl-icon{
      background-color:transparent;
    }
    .mapboxgl-ctrl-group button + button{
      border-top:1px solid ButtonText;
    }
  }
  .mapboxgl-ctrl-attrib-button:focus,
  .mapboxgl-ctrl-group button:focus{
    box-shadow:0 0 2px 2px #0096ff;
  }
  .mapboxgl-ctrl button:disabled{
    cursor:not-allowed;
  }
  .mapboxgl-ctrl button:disabled .mapboxgl-ctrl-icon{
    opacity:0.25;
  }
  .mapboxgl-ctrl button:not(:disabled):hover{
    background-color:rgba(0, 0, 0, 0.05);
  }
  .mapboxgl-ctrl-group button:focus:focus-visible{
    box-shadow:0 0 2px 2px #0096ff;
  }
  .mapboxgl-ctrl-group button:focus:not(:focus-visible){
    box-shadow:none;
  }
  .mapboxgl-ctrl-group button:focus:first-child{
    border-radius:4px 4px 0 0;
  }
  .mapboxgl-ctrl-group button:focus:last-child{
    border-radius:0 0 4px 4px;
  }
  .mapboxgl-ctrl-group button:focus:only-child{
    border-radius:inherit;
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E %3C/svg%3E");
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E %3C/svg%3E");
    }
  }
  @media (-ms-high-contrast: black-on-white){
    .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E %3C/svg%3E");
    }
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E %3C/svg%3E");
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E %3C/svg%3E");
    }
  }
  @media (-ms-high-contrast: black-on-white){
    .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E %3C/svg%3E");
    }
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E %3Cpath id='south' d='M10.5 16l4 8 4-8h-8z' fill='%23ccc'/%3E %3C/svg%3E");
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E %3Cpath id='south' d='M10.5 16l4 8 4-8h-8z' fill='%23999'/%3E %3C/svg%3E");
    }
  }
  @media (-ms-high-contrast: black-on-white){
    .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M10.5 14l4-8 4 8h-8z'/%3E %3Cpath id='south' d='M10.5 16l4 8 4-8h-8z' fill='%23ccc'/%3E %3C/svg%3E");
    }
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23aaa'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl
    button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active
    .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl
    button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error
    .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl
    button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background
    .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl
    button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error
    .mapboxgl-ctrl-icon{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl
    button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting
    .mapboxgl-ctrl-icon{
    -webkit-animation:mapboxgl-spin 2s linear infinite;
            animation:mapboxgl-spin 2s linear infinite;
  }
  @media (-ms-high-contrast: active){
    .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23999'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl
      button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active
      .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl
      button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error
      .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl
      button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background
      .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl
      button.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error
      .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
  }
  @media (-ms-high-contrast: black-on-white){
    .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
    }
    .mapboxgl-ctrl button.mapboxgl-ctrl-geolocate:disabled .mapboxgl-ctrl-icon{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23666'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' fill='red'/%3E %3C/svg%3E");
    }
  }
  @-webkit-keyframes mapboxgl-spin{
    0%{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(1turn);
    }
  }
  @keyframes mapboxgl-spin{
    0%{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(1turn);
    }
  }
  a.mapboxgl-ctrl-logo{
    width:88px;
    height:23px;
    margin:0 0 -4px -4px;
    display:block;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow:hidden;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E %3Cdefs%3E %3Cpath id='logo' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E %3Cpath id='text' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E %3C/defs%3E %3Cmask id='clip'%3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='white'/%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/mask%3E %3Cg id='outline' opacity='0.3' stroke='%23000' stroke-width='3'%3E %3Ccircle mask='url(%23clip)' cx='11.5' cy='11.5' r='9.25'/%3E %3Cuse xlink:href='%23text' mask='url(%23clip)'/%3E %3C/g%3E %3Cg id='fill' opacity='0.9' fill='%23fff'%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/g%3E %3C/svg%3E");
  }
  a.mapboxgl-ctrl-logo.mapboxgl-compact{
    width:23px;
  }
  @media (-ms-high-contrast: active){
    a.mapboxgl-ctrl-logo{
      background-color:transparent;
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E %3Cdefs%3E %3Cpath id='logo' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E %3Cpath id='text' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E %3C/defs%3E %3Cmask id='clip'%3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='white'/%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/mask%3E %3Cg id='outline' opacity='1' stroke='%23000' stroke-width='3'%3E %3Ccircle mask='url(%23clip)' cx='11.5' cy='11.5' r='9.25'/%3E %3Cuse xlink:href='%23text' mask='url(%23clip)'/%3E %3C/g%3E %3Cg id='fill' opacity='1' fill='%23fff'%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/g%3E %3C/svg%3E");
    }
  }
  @media (-ms-high-contrast: black-on-white){
    a.mapboxgl-ctrl-logo{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='88' height='23' viewBox='0 0 88 23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd'%3E %3Cdefs%3E %3Cpath id='logo' d='M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z'/%3E %3Cpath id='text' d='M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z'/%3E %3C/defs%3E %3Cmask id='clip'%3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='white'/%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/mask%3E %3Cg id='outline' opacity='1' stroke='%23fff' stroke-width='3' fill='%23fff'%3E %3Ccircle mask='url(%23clip)' cx='11.5' cy='11.5' r='9.25'/%3E %3Cuse xlink:href='%23text' mask='url(%23clip)'/%3E %3C/g%3E %3Cg id='fill' opacity='1' fill='%23000'%3E %3Cuse xlink:href='%23logo'/%3E %3Cuse xlink:href='%23text'/%3E %3C/g%3E %3C/svg%3E");
    }
  }
  .mapboxgl-ctrl.mapboxgl-ctrl-attrib{
    padding:0 5px;
    background-color:hsla(0, 0%, 100%, 0.5);
    margin:0;
  }
  @media screen{
    .mapboxgl-ctrl-attrib.mapboxgl-compact{
      min-height:20px;
      padding:2px 24px 2px 0;
      margin:10px;
      position:relative;
      background-color:#fff;
      border-radius:12px;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact-show{
      padding:2px 28px 2px 8px;
      visibility:visible;
    }
    .mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl-attrib.mapboxgl-compact-show,
    .mapboxgl-ctrl-top-left > .mapboxgl-ctrl-attrib.mapboxgl-compact-show{
      padding:2px 8px 2px 28px;
      border-radius:12px;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-inner{
      display:none;
    }
    .mapboxgl-ctrl-attrib-button{
      display:none;
      cursor:pointer;
      position:absolute;
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E %3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E %3C/svg%3E");
      background-color:hsla(0, 0%, 100%, 0.5);
      width:24px;
      height:24px;
      box-sizing:border-box;
      border-radius:12px;
      outline:none;
      top:0;
      right:0;
      border:0;
    }
    .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl-attrib-button,
    .mapboxgl-ctrl-top-left .mapboxgl-ctrl-attrib-button{
      left:0;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact-show .mapboxgl-ctrl-attrib-inner,
    .mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-button{
      display:block;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact-show .mapboxgl-ctrl-attrib-button{
      background-color:rgba(0, 0, 0, 0.05);
    }
    .mapboxgl-ctrl-bottom-right > .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      bottom:0;
      right:0;
    }
    .mapboxgl-ctrl-top-right > .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      top:0;
      right:0;
    }
    .mapboxgl-ctrl-top-left > .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      top:0;
      left:0;
    }
    .mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      bottom:0;
      left:0;
    }
  }
  @media screen and (-ms-high-contrast: active){
    .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' fill='%23fff'%3E %3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E %3C/svg%3E");
    }
  }
  @media screen and (-ms-high-contrast: black-on-white){
    .mapboxgl-ctrl-attrib.mapboxgl-compact:after{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E %3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E %3C/svg%3E");
    }
  }
  .mapboxgl-ctrl-attrib a{
    color:rgba(0, 0, 0, 0.75);
    text-decoration:none;
  }
  .mapboxgl-ctrl-attrib a:hover{
    color:inherit;
    text-decoration:underline;
  }
  .mapboxgl-ctrl-attrib .mapbox-improve-map{
    font-weight:700;
    margin-left:2px;
  }
  .mapboxgl-attrib-empty{
    display:none;
  }
  .mapboxgl-ctrl-scale{
    background-color:hsla(0, 0%, 100%, 0.75);
    font-size:10px;
    border:2px solid #333;
    border-top:#333;
    padding:0 5px;
    color:#333;
    box-sizing:border-box;
  }
  .mapboxgl-popup{
    position:absolute;
    top:0;
    left:0;
    display:flex;
    will-change:transform;
    pointer-events:none;
  }
  .mapboxgl-popup-anchor-top,
  .mapboxgl-popup-anchor-top-left,
  .mapboxgl-popup-anchor-top-right{
    flex-direction:column;
  }
  .mapboxgl-popup-anchor-bottom,
  .mapboxgl-popup-anchor-bottom-left,
  .mapboxgl-popup-anchor-bottom-right{
    flex-direction:column-reverse;
  }
  .mapboxgl-popup-anchor-left{
    flex-direction:row;
  }
  .mapboxgl-popup-anchor-right{
    flex-direction:row-reverse;
  }
  .mapboxgl-popup-tip{
    width:0;
    height:0;
    border:10px solid transparent;
    z-index:1;
  }
  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip{
    align-self:center;
    border-top:none;
    border-bottom-color:#fff;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip{
    align-self:flex-start;
    border-top:none;
    border-left:none;
    border-bottom-color:#fff;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip{
    align-self:flex-end;
    border-top:none;
    border-right:none;
    border-bottom-color:#fff;
  }
  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip{
    align-self:center;
    border-bottom:none;
    border-top-color:#fff;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip{
    align-self:flex-start;
    border-bottom:none;
    border-left:none;
    border-top-color:#fff;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip{
    align-self:flex-end;
    border-bottom:none;
    border-right:none;
    border-top-color:#fff;
  }
  .mapboxgl-popup-anchor-left .mapboxgl-popup-tip{
    align-self:center;
    border-left:none;
    border-right-color:#fff;
  }
  .mapboxgl-popup-anchor-right .mapboxgl-popup-tip{
    align-self:center;
    border-right:none;
    border-left-color:#fff;
  }
  .mapboxgl-popup-close-button{
    position:absolute;
    right:0;
    top:0;
    border:0;
    border-radius:0 3px 0 0;
    cursor:pointer;
    background-color:transparent;
  }
  .mapboxgl-popup-close-button:hover{
    background-color:rgba(0, 0, 0, 0.05);
  }
  .mapboxgl-popup-content{
    position:relative;
    background:#fff;
    border-radius:3px;
    box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);
    padding:10px 10px 15px;
    pointer-events:auto;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-content{
    border-top-left-radius:0;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-content{
    border-top-right-radius:0;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content{
    border-bottom-left-radius:0;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content{
    border-bottom-right-radius:0;
  }
  .mapboxgl-popup-track-pointer{
    display:none;
  }
  .mapboxgl-popup-track-pointer *{
    pointer-events:none;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none;
  }
  .mapboxgl-map:hover .mapboxgl-popup-track-pointer{
    display:flex;
  }
  .mapboxgl-map:active .mapboxgl-popup-track-pointer{
    display:none;
  }
  .mapboxgl-marker{
    position:absolute;
    top:0;
    left:0;
    will-change:transform;
    opacity:1;
    transition:opacity 0.2s;
  }
  .mapboxgl-user-location-dot,
  .mapboxgl-user-location-dot:before{
    background-color:#1da1f2;
    width:15px;
    height:15px;
    border-radius:50%;
  }
  .mapboxgl-user-location-dot:before{
    content:'';
    position:absolute;
    -webkit-animation:mapboxgl-user-location-dot-pulse 2s infinite;
            animation:mapboxgl-user-location-dot-pulse 2s infinite;
  }
  .mapboxgl-user-location-dot:after{
    border-radius:50%;
    border:2px solid #fff;
    content:'';
    height:19px;
    left:-2px;
    position:absolute;
    top:-2px;
    width:19px;
    box-sizing:border-box;
    box-shadow:0 0 3px rgba(0, 0, 0, 0.35);
  }
  @-webkit-keyframes mapboxgl-user-location-dot-pulse{
    0%{
      transform:scale(1);
      opacity:1;
    }
    70%{
      transform:scale(3);
      opacity:0;
    }
    to{
      transform:scale(1);
      opacity:0;
    }
  }
  @keyframes mapboxgl-user-location-dot-pulse{
    0%{
      transform:scale(1);
      opacity:1;
    }
    70%{
      transform:scale(3);
      opacity:0;
    }
    to{
      transform:scale(1);
      opacity:0;
    }
  }
  .mapboxgl-user-location-dot-stale{
    background-color:#aaa;
  }
  .mapboxgl-user-location-dot-stale:after{
    display:none;
  }
  .mapboxgl-user-location-accuracy-circle{
    background-color:rgba(29, 161, 242, 0.2);
    width:1px;
    height:1px;
    border-radius:100%;
  }
  .mapboxgl-crosshair,
  .mapboxgl-crosshair .mapboxgl-interactive,
  .mapboxgl-crosshair .mapboxgl-interactive:active{
    cursor:crosshair;
  }
  .mapboxgl-boxzoom{
    position:absolute;
    top:0;
    left:0;
    width:0;
    height:0;
    background:#fff;
    border:2px dotted #202020;
    opacity:0.5;
  }
  @media print{
    .mapbox-improve-map{
      display:none;
    }
  }
`;
