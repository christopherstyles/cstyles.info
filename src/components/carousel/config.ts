export const aspectRatios = {
  full: 5 / 3,
  collapsed: 3 / 3,
};

export const gap = 2;

export const imageVariants = {
  active: {
    scale: 0.9,
    opacity: 1,
  },
  inactive: {
    scale: 0.6,
    opacity: 0.3,
  },
};

export const margin = 4;

export const thumbnailVariants = {
  active: {
    aspectRatio: aspectRatios.full,
    marginLeft: `${margin}%`,
    marginRight: `${margin}%`,
    opacity: 1,
  },
  inactive: {
    aspectRatio: aspectRatios.collapsed,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.1,
  },
};

export const transition = { duration: 0.8, ease: [0.3, 0.7, 0, 1] };
