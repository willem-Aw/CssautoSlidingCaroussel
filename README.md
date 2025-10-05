# CSS Auto-Sliding Carousel

A simple, lightweight auto-sliding carousel implemented using only HTML and CSS. The carousel features smooth, hardware-accelerated animations and an infinite loop effect.

## Features

- **Pure CSS Implementation**: No JavaScript required, making it fast and lightweight.
- **Infinite Loop**: Seamless sliding animation that repeats indefinitely.
- **Hover to Pause**: Animation pauses when hovering over the carousel for better user interaction.
- **Responsive Design**: Adapts to different screen sizes.
- **Hardware Acceleration**: Uses `transform3d` and `will-change` for smooth performance.

## Demo

Clone the repository and open `index.html` in your browser

## Customization

### Changing Slide Speed

Modify the animation duration in `style.css`:

```css
.slider {
    animation: slide 10s linear infinite; /* Change 10s to desired duration */
}
```

## Browser Support

Works in all modern browsers that support CSS animations and transforms.

## In case of any animation issues on old browsers

Use with the javascript provided in the file `script.js`.
In this case, to update the animation speed change the line below with higher value

```js
var speed = 0.5;
```

## Live Preview

Here is the link : [CssautoSlidingCaroussel](https://willem-aw.github.io/CssautoSlidingCaroussel/) 