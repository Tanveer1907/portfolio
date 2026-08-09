export const EASING = {
  // Refined editorial bezier curve: smooth acceleration, prolonged deceleration
  editorial: [0.25, 1, 0.5, 1] as const,
  reveal: [0.22, 1, 0.36, 1] as const,
  smooth: [0.16, 1, 0.3, 1] as const,
};

export const DURATION = {
  FAST: 0.25,
  MEDIUM: 0.45,
  SLOW: 0.7,
  SEQUENCE: 0.85,
};

export const STAGGER = {
  FAST: 0.04,
  MEDIUM: 0.07,
  SLOW: 0.12,
  ROW: 0.06,
};

export const DISTANCE = {
  HOVER_X: 6,
  HOVER_Y: 4,
  PARALLAX_MAX: 20,
};

