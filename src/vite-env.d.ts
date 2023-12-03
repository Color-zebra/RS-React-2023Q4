/// <reference types="vite/client" />

interface HTMLFormControlsCollection extends HTMLCollectionBase {
  [item: string]: HTMLInputElement | RadioNodeList;
}
