import { css } from 'lit';

export const tailwindStyles = css`/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

*,
::before,
::after{
	box-sizing:border-box;
}

html{
	-moz-tab-size:4;
	tab-size:4;
}

html{
	line-height:1.15;
	-webkit-text-size-adjust:100%;
}

body{
	margin:0;
}

body{
	font-family:system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}

hr{
	height:0;
	color:inherit;
}

abbr[title]{
	text-decoration:underline dotted;
}

b,
strong{
	font-weight:bolder;
}

code,
kbd,
samp,
pre{
	font-family:ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace;
	font-size:1em;
}

small{
	font-size:80%;
}

sub,
sup{
	font-size:75%;
	line-height:0;
	position:relative;
	vertical-align:baseline;
}

sub{
	bottom:-0.25em;
}

sup{
	top:-0.5em;
}

table{
	text-indent:0;
	border-color:inherit;
}

button,
input,
optgroup,
select,
textarea{
	font-family:inherit;
	font-size:100%;
	line-height:1.15;
	margin:0;
}

button,
select{
	text-transform:none;
}

button,
[type='button'],
[type='reset'],
[type='submit']{
	-webkit-appearance:button;
}

::-moz-focus-inner{
	border-style:none;
	padding:0;
}

:-moz-focusring{
	outline:1px dotted ButtonText;
}

:-moz-ui-invalid{
	box-shadow:none;
}

legend{
	padding:0;
}

progress{
	vertical-align:baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button{
	height:auto;
}

[type='search']{
	-webkit-appearance:textfield;
	outline-offset:-2px;
}

::-webkit-search-decoration{
	-webkit-appearance:none;
}

::-webkit-file-upload-button{
	-webkit-appearance:button;
	font:inherit;
}

summary{
	display:list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre{
  margin:0;
}

button{
  background-color:transparent;
  background-image:none;
}

button:focus{
  outline:1px dotted;
  outline:5px auto -webkit-focus-ring-color;
}

fieldset{
  margin:0;
  padding:0;
}

ol,
ul{
  list-style:none;
  margin:0;
  padding:0;
}

html{
  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height:1.5;
}

body{
  font-family:inherit;
  line-height:inherit;
}

*,
::before,
::after{
  box-sizing:border-box;
  border-width:0;
  border-style:solid;
  border-color:#e5e7eb;
}

hr{
  border-top-width:1px;
}

img{
  border-style:solid;
}

textarea{
  resize:vertical;
}

input::placeholder,
textarea::placeholder{
  opacity:1;
  color:#9ca3af;
}

button,
[role="button"]{
  cursor:pointer;
}

table{
  border-collapse:collapse;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight:inherit;
}

a{
  color:inherit;
  text-decoration:inherit;
}

button,
input,
optgroup,
select,
textarea{
  padding:0;
  line-height:inherit;
  color:inherit;
}

pre,
code,
kbd,
samp{
  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object{
  display:block;
  vertical-align:middle;
}

img,
video{
  max-width:100%;
  height:auto;
}

* {
	--tw-shadow: 0 0 #0000;
	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-ring-color: rgba(59, 130, 246, 0.5);
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
}
  .static {
	position: static;
}
  .sticky {
	position: sticky;
}
  .relative {
	position: relative;
}
  .flex {
	display: flex;
}
  .h-40 {
	height: 10rem;
}
  .h-20 {
	height: 5rem;
}
  .flex-shrink {
	flex-shrink: 1;
}
  .bg-green-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(110, 231, 183, var(--tw-bg-opacity));
}
  .bg-yellow-900 {
	--tw-bg-opacity: 1;
	background-color: rgba(120, 53, 15, var(--tw-bg-opacity));
}
  .bg-red-400 {
	--tw-bg-opacity: 1;
	background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
  .bg-yellow-100 {
	--tw-bg-opacity: 1;
	background-color: rgba(254, 243, 199, var(--tw-bg-opacity));
}
  .bg-yellow-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(252, 211, 77, var(--tw-bg-opacity));
}
  .p-10 {
	padding: 2.5rem;
}
  .py-10 {
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
}
  .text-center {
	text-align: center;
}
  .text-xl {
	font-size: 1.25rem;
	line-height: 1.75rem;
}
  .filter {
	--tw-blur: var(--tw-empty,/*!*/ /*!*/);
	--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
	--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
	--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
	--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
	--tw-invert: var(--tw-empty,/*!*/ /*!*/);
	--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
	--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
	--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
	filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
`;
