import facepaint, { DynamicStyleFunction } from 'facepaint';

type DeviceSize = 'm';

type DeviceWidth = {
  [key in DeviceSize]: number;
};

const deviceWidth: DeviceWidth = {
  m: 1000,
};

const mq = (breakpoints = dev