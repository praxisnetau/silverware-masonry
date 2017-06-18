# SilverWare Masonry Module

[![Latest Stable Version](https://poser.pugx.org/silverware/masonry/v/stable)](https://packagist.org/packages/silverware/masonry)
[![Latest Unstable Version](https://poser.pugx.org/silverware/masonry/v/unstable)](https://packagist.org/packages/silverware/masonry)
[![License](https://poser.pugx.org/silverware/masonry/license)](https://packagist.org/packages/silverware/masonry)

Provides a masonry component for use with [SilverWare][silverware].

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [Contribution](#contribution)
- [Attribution](#attribution)
- [Maintainers](#maintainers)
- [License](#license)

## Requirements

- [SilverWare][silverware]

## Installation

Installation is via [Composer][composer]:

```
$ composer require silverware/masonry
```

## Usage

This module provides a `MasonryComponent` which accepts an implementation of `SilverWare\Lists\ListSource` in
order to render the list items using a [masonry layout][masonry].  It is recommended that the list items provide
a image via `SilverWare\Extensions\Model\MetaDataExtension` in order to be rendered correctly.

To make use of this component:

1. Using the CMS, add a new instance of `MasonryComponent` to your SilverWare template or layout.
2. Select the list source for the component from the dropdown field on the Main tab.
3. Configure the component using the Style and Options tabs.

### Column Widths

On the Style tab, you may choose either "Pixels" or "Percentages" for the column widths of the component.
For each type of unit, fields are available to specify the column width per viewport size:

- Tiny
- Small
- Medium
- Large
- Huge

As SilverWare uses a mobile-first approach, enter at least one width in the "Tiny" field.

### Gutter

On the Style tab, you may also define the gutter size in pixels. The gutter is the amount of space between
each item in the masonry grid.

### Horizontal Order

The component defaults to using a horizontal order for the rendered items. On the Options tab, you may
uncheck the "Order items horizontally" checkbox to alter the layout order.  For more information,
please see the [Masonry documentation][masonry-horiz-order].

## Issues

Please use the [GitHub issue tracker][issues] for bug reports and feature requests.

## Contribution

Your contributions are gladly welcomed to help make this project better.
Please see [contributing](CONTRIBUTING.md) for more information.

## Attribution

- Makes use of [Masonry](https://github.com/desandro/masonry) and
  [imagesLoaded](https://github.com/desandro/imagesloaded) by [David DeSandro](https://github.com/desandro).

## Maintainers

[![Colin Tucker](https://avatars3.githubusercontent.com/u/1853705?s=144)](https://github.com/colintucker) | [![Praxis Interactive](https://avatars2.githubusercontent.com/u/1782612?s=144)](http://www.praxis.net.au)
---|---
[Colin Tucker](https://github.com/colintucker) | [Praxis Interactive](http://www.praxis.net.au)

## License

[BSD-3-Clause](LICENSE.md) &copy; Praxis Interactive

[silverware]: https://github.com/praxisnetau/silverware
[composer]: https://getcomposer.org
[issues]: https://github.com/praxisnetau/silverware-masonry/issues
[masonry]: https://masonry.desandro.com
[masonry-horiz-order]: https://masonry.desandro.com/options.html#horizontalorder
