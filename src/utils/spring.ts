export const buildInteractionObserverThreshold = (count = 300) => {
  const threshold = []

  const parts = 1 / count

  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)))
  }

  return threshold
}

export const transitionXR = {
  from: {
    opacity: 0,
    x: -80,
  },
  to: {
    opacity: 1,
    x: 0,
  },
}

export const transitionXL = {
  from: {
    opacity: 0,
    x: 80,
  },
  to: {
    opacity: 1,
    x: 0,
  },
}

export const transitionY = {
  from: {
    opacity: 0,
    y: 80,
  },
  to: {
    opacity: 1,
    y: 0,
  },
}

export const config = {
  once: false,
  rootMargin: '0px 0px -20% 0px',
  amount: buildInteractionObserverThreshold(),
}
