import { config } from "./config";

export const variants = {
  slide: {
    active: {
      scale: 0.9,
      opacity: 1,
    },
    inactive: {
      scale: 0.6,
      opacity: 0.3,
    },
  },
  thumbnail: {
    active: {
      aspectRatio: config.aspectRatios.full,
      marginLeft: `${config.margin}%`,
      marginRight: `${config.margin}%`,
      opacity: 1,
    },
    inactive: {
      aspectRatio: config.aspectRatios.collapsed,
      marginLeft: 0,
      marginRight: 0,
      opacity: 0.1,
    },
  },
};
