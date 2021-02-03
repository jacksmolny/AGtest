const RANGE_STYLES = `
.rc-slider {
  height: 16px;
}
.rc-slider-rail {
  background-color: rgb(214, 217, 225);
  border-radius: 0;
}
.rc-slider-track {
  background-color: rgb(28, 184, 255);
  border-radius: 0;
}
.rc-slider-handle {
  width: 16px;
  height: 16px;
  margin-top: -8px;
  top: 50%;
  border: 2px solid rgb(28, 184, 255);
  background-color: rgb(255, 255, 255);
}
.rc-slider-handle-1 {
  transform: translateX(0) !important;
}
.rc-slider-handle-2 {
  transform: translateX(-100%) !important;
}
.rc-slider-handle:hover {
  border-color: rgb(28, 184, 255);
  background-color: rgb(255, 255, 255);
}
.rc-slider-handle-click-focused:focus {
  border-color: rgb(28, 184, 255);
  outline: none;
}
.rc-slider-handle-dragging {
  border-color: rgb(28, 184, 255) !important;
  box-shadow: none !important;
}
`;

export { RANGE_STYLES };
