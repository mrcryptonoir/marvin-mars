/**
 * The camera manifest. `poster` is the frame in /art; `clip` the file in /video.
 *
 * A camera with no `clip` shows its still and says so. That is a real state for
 * a downlink rather than a gap, so the deck reads the same either way.
 */
export const CAMERAS = [
  { id: '01', name: 'HAB-LOG', poster: 'cam-log', note: 'Personal log' },
  { id: '02', name: 'CORRIDOR-B', poster: 'cam-corridor', note: 'No activity' },
  { id: '03', name: 'GROW-01', poster: 'cam-greenhouse', note: 'One plant' },
  { id: '04', name: 'BERTH-2', poster: 'cam-bunk', note: 'Off shift' },
  { id: '05', name: 'GALLEY', poster: 'cam-galley', note: 'Feeding' },
  { id: '06', name: 'AIRLOCK-A', poster: 'cam-airlock', note: 'Cycling' },
  { id: '07', name: 'WORKSHOP', poster: 'cam-workshop', note: 'Unauthorised chewing' },
  { id: '08', name: 'EXT-NIGHT', poster: 'cam-night', note: 'Infrared', ir: true },
  { id: '09', name: 'EXT-RIDGE', poster: 'hero-mars-ridge', clip: 'hero-loop', note: 'Surface' },
  { id: '10', name: 'EXT-PAD', poster: 'spacex-pad', clip: 'pad-loop', note: 'Vehicle stack' },
  { id: '11', name: 'ROVER-FWD', poster: 'transmission-05', clip: 'tx-rover', note: 'In transit' },
  { id: '12', name: 'MARKET', poster: 'transmission-01', clip: 'tx-01-loop', note: 'Unsanctioned' },
  { id: '13', name: 'EXT-DUNE', poster: 'transmission-06', note: 'Dust', offline: true },
];

export const DEFAULT_CAM = 0;
