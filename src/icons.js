// One arrow icon for every button and link, rotated per direction.
const rotation = { right: 0, 'up-right': -45, down: 90, left: 180 }

export function arrow(dir = 'right') {
  return `<svg class="arrow-icon" style="transform: rotate(${rotation[dir]}deg)" width="1.35em" height="1.35em" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9.25" fill="currentColor" fill-opacity="0.14"/><path d="M5.75 10h7.5M10.25 6.5 13.75 10l-3.5 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}
