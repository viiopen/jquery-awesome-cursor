# viiopen notes

Forked from https://github.com/jwarby/jquery-awesome-cursor.git

## Additions

Added method to create an awesome cursor definition without creating a new DOM element

# jQuery Awesome Cursor plugin [![GitHub version](https://badge.fury.io/gh/jwarby%2Fjquery-awesome-cursor.svg)](http://badge.fury.io/gh/jwarby%2Fjquery-awesome-cursor)

[![Build Status](https://secure.travis-ci.org/jwarby/jquery-awesome-cursor.png?branch=master)](https://travis-ci.org/jwarby/jquery-awesome-cursor)
[![Dependency Status](https://david-dm.org/jwarby/jquery-awesome-cursor/peer-status.svg?style=flat)](https://david-dm.org/jwarby/jquery-awesome-cursor#info=peerDependencies)
[![devDependency Status](https://david-dm.org/jwarby/jquery-awesome-cursor/dev-status.svg?style=flat)](https://david-dm.org/jwarby/jquery-awesome-cursor#info=devDependencies)

A jQuery plugin for using FontAwesome icons as custom CSS cursors.  Also supports using a custom icon font instead of FontAwesome.

See <https://jwarby.github.io/jquery-awesome-cursor/> for the full documentation and demos.

```javascript
$('body').awesomeCursor('pencil');
```

Requires [jQuery](http://jquery.com) and [FontAwesome](http://fontawesome.io).

## Getting started

### Installing the plugin

#### via `bower`: Easiest

```shell
bower install jquery-awesome-cursor
```

```html
<link rel="stylesheet" href="bower_components/fontawesome/css/font-awesome.min.css" type="text/css">
<script src="bower_components/jquery/dist/jquery.min.js" type="text/javascript"></script>
<script src="bower_components/jquery-awesome-cursor/dist/jquery.awesome-cursor.min.js" type="text/javascript"></script>
```

#### via `npm`: Easier

```shell
npm install jquery-awesome-cursor
```

```html
<link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" type="text/css">
<script src="node_modules/jquery/dist/jquery.min.js" type="text/javascript"></script>
<script src="node_modules/jquery-awesome-cursor/dist/jquery.awesome-cursor.min.js" type="text/javascript"></script>
```

#### manual installation

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/jwarby/jquery-awesome-cursor/master/dist/jquery.awesome-cursor.min.js
[max]: https://raw.githubusercontent.com/jwarby/jquery-awesome-cursor/master/dist/jquery.awesome-cursor.js

In your web page:

```html
<link rel="stylesheet" href="/path/to/font-awesome.min.css" type="text/css">
<script src="/path/to/jquery.js"></script>
<script src="path/to/jquery.awesome-cursor.min.js"></script>
```
## Documentation

### Setting a cursor

You can set a FontAwesome cursor on any element by calling `awesomeCursor`, and passing the name of the icon you
want to use:

```javascript
$('body').awesomeCursor('<icon name>');
```

See <http://fontawesome.io/icons/> for a list of available icons.

### Setting cursor options

#### Colour

Cursors can be any color you want, specified as a CSS color:

```javascript
$('body').awesomeCursor('eyedropper', {
  color: '#ff0000'
})
```

```javascript
$('body').awesomeCursor('eyedropper', {
  color: 'rgba(255, 255, 255, 0.75)'
})
```

```javascript
$('body').awesomeCursor('eyedropper', {
  color: 'cyan'
});
```

```javascript
$('body').awesomeCursor('eyedropper', {
  color: 'hsl(90, 100%, 50%)'
});
```

#### Size

Cursors can be any size (specified in pixels):

```javascript
$('body').awesomeCursor('pencil', {
  size: 32
});
```

Only pixel values are supported, as CSS cursor hotspots can only be specified in pixels.

#### Hotspot

The hotspot for a cursor can be defined, with an array containing the hotspot's x and y offsets:

```javascript
$('body').awesomeCursor('pencil', {
  hotspot: [0, 17]
});
```

Or, using a string descriptor:

```javascript
$('body').awesomeCursor('pencil', {
  hotspot: 'bottom left'
});
```

##### String descriptors

The following values can be used in the hotspot string descriptor:

- `'center'`: positions the hotspot's x and y offset in the center of the cursor
- `'left'`  : positions the hotspot's x offset on the left of the cursor (equivalent to 0)
- `'right'` : positions the hotspot's x offset on the far right of the cursor (equivalent to cursorSize - 1)
- `'top'`   : positions the hotspot's y offset at the top of the cursor (equivalent to 0)
- `'bottom'`: positions the hotspot's y offset at the bottom of the cursor (equivalent to cursorSize - 1)

The descriptors can be combined by space-separating them, e.g.:

- `'top left'`
- `'center left'`
- `'bottom right'`
- `'top right'`
- etc.

#### Flip

Cursors can be flipped horizontally, vertically, or in both directions, by setting the `flip` option:

```javascript
// Horizontal flip
$('body').awesomeCursor('pencil', {
  flip: 'horizontal'
});

// Vertical flip
$('body').awesomeCursor('pencil', {
  flip: 'vertical'
});

// Horizontal and Vertical flip
$('body').awesomeCursor('pencil', {
  flip: 'both'
});
```

#### Rotate

A cursor can be rotated any number of degrees using the `rotate` option:

```javascript
// 45 degrees clockwise
$('body').awesomeCursor('pencil', {
  rotate: 45
});

// 105 degrees anti-clockwise
$('body').awesomeCursor('pencil', {
  rotate: -105
});
```

#### Outline

A cursor can be outlined in any color by setting the `outline` option to any valid CSS color:

```javascript
// Red outline
$('body').awesomeCursor('pencil', {
  outline: 'red'
});

// White outline
$('body').awesomeCursor('pencil', {
  outline: 'white'
});
```

#### Using a different icon font

As of `v0.1.0`, a different icon font instead of FontAwesome can be used.  To use a different font, the `font` option must be set to
an object, specifying the font family and the CSS class format for icons.  The example below shows how [typicons](http://typicons.com)
icons can be used instead of FontAwesome icons:

```javascript
// Using 'typicons' icons instead of FontAwesome
$('body').awesomecursor('brush', {
  font: {
    family: 'typicons',
    cssClass: 'typcn typcn-%s' // '%s' is the icon name ('brush')
  }
});
```

In the above example, we set the font `family` to 'typicons', and set the `cssClass` to the format that `typicons` uses.  `%s` denotes the
icon name that is passed as the first argument to `awesomeCursor`.

The `cssClass` option can either be a string, as shown above, or a function:

```javascript
// Using 'typicons' instead of fontawesome
$('body').awesomecursor('brush', {
  font: {
    family: 'typicons',
    cssClass: function(name) {

      // `name` is 'brush'
      return 'typcn typcn-' + name;
    }
  }
});
```

You may want to set your replacement icon font as the default:

```javascript
// Use 'typicons' as default
$.fn.awesomeCursor.defaults.font = {
  family: 'typicons',
  cssClass: 'typcn typcn-%s'
};
```
**Note: the replacement icon font must use `:before` pseudo elements with unicode content**

## Examples

```javascript
/* Set the body element's cursor to a green pencil, with the hotspot located at the bottom left of the cursor (where the
 * pencil tip is):
 */
$('body').awesomeCursor('pencil', {
  color: 'green',
  hotspot: 'bottom left'
});

// Set the cursor to be a big blue location arrow icon:
$('body').awesomeCursor('location-arrow', {
  color: '#0050FF',
  hotspot: 'top right',
  size: 48
});

// Set the cursor to be a horizontally flipped version of the location arrow
$('body').awesomeCursor('location-arrow', {
  color: '#0050FF',
  hotspot: 'top right',
  size: 48,
  flip: 'horizontal'
});

// Set the cursor to be a red rotated left arrow
$('body').awesomeCursor('long-arrow-left', {
  color: 'red',
  hotspot: 'top left',
  rotate: 45,
});

// Set the cursor to a black eraser icon with a red outline
$('body').awesomeCursor('eraser', {
  color: 'black',
  outline: 'red'
});
```

## Browser Support

- Chrome
- FireFox

## Bugs and Feature Requests

- <https://github.com/jwarby/jquery-awesome-cursor/issues>

## Contributing

See [CONTRIBUTING.md](https://github.com/jwarby/jquery-awesome-cursor/blob/master/CONTRIBUTING.md)

## Roadmap

- ~~Allow cursors to be flipped vertically and/or horizontally~~ [&#10004; v0.0.2](https://github.com/jwarby/jquery-awesome-cursor/releases/tag/v0.0.2)
- ~~Allow cursors to be rotated by an abitrary number of degrees~~ [&#10004; v0.0.4](https://github.com/jwarby/jquery-awesome-cursor/releases/tag/v0.0.4)
- ~~Optional outlines for cursors~~ [&#10004; v0.0.5](https://github.com/jwarby/jquery-awesome-cursor/releases/tag/v0.0.5)
- ~~Allow a different icon font to FontAwesome to be used~~ [&#10004; v0.1.0](https://github.com/jwarby/jquery-awesome-cursor/releases/tag/v0.1.0)
- IE11 support (if possible)
- Data API (under consideration)
- ~~Support for composite cursors made of up of multiple icons, a la FontAwesome stacked icons (under consideration)~~ [&#10005; Not implemented](https://github.com/jwarby/jquery-awesome-cursor/issues/7)

## Release History

- `v0.1.0` - `17th Dec 2014` - Add `font` option for specifying an alternative icon font to use instead of FontAwesome
- `v0.0.5` - `12th Dec 2014` - Add `outline` option for specifying an outline color for cursors
- `v0.0.4` - `29th Nov 2014` - Add `rotate` option for rotating cursor by a specified number of degrees.  Flip transformation now
  applied after other transformations (e.g. rotate)
- `v0.0.3` - `17th Nov 2014` - Fix an error in the README file
- `v0.0.2` - `17th Nov 2014` - Add the `flip` option to allow cursors to be flipped horizontally, vertically, or in both directions
- `v0.0.1` - `10th Nov 2014` - First version
