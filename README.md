# Rem

[![Version](https://flat.badgen.net/npm/v/@unsass/rem)](https://www.npmjs.com/package/@unsass/rem)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/rem)](https://www.npmjs.com/package/@unsass/rem)
[![License](https://flat.badgen.net/npm/license/@unsass/rem)](https://www.npmjs.com/package/@unsass/rem)

## Introduction

Easily manage your rem conversion.

> **Note:** this is new code moved
> from [`@sass-collective/rem`](https://github.com/sass-collective/sass-collective/tree/master/packages/rem) repository.

## Installing

```shell
npm install @unsass/rem
```

## Usage

```scss
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px);
}
```

### Configuration

```scss
@use "@unsass/rem" with (
    $baseline: 10px
);
```

### Options

| Variable    | Default | Description                            |
|-------------|---------|----------------------------------------|
| `$baseline` | `16px`  | Sets baseline reference. Only in `px`. |

### Top-level config override

If variables are already configured on top-level using `@use ... with`, by another dependency for example, you can't use
this solution anymore, because the module can only be setup once, this is a Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

| Mixin               | Description                              |
|---------------------|:-----------------------------------------|
| `config($baseline)` | Override top-level `with` configuration. |

#### Configuration rule with `rem.config()`

The following Sass will configure new parameters:

```scss
@use "@unsass/rem";

@include rem.config(10px);
```

## API

### Sass functions

| Function              | Description                 |
|-----------------------|-----------------------------|
| `convert($values...)` | Convert `px` unit to `rem`. |

#### Convert with `rem.convert()`

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    font-size: rem.convert(16px); // Single value.
    margin: rem.convert(20px 30px); // Multiple values.
    border: rem.convert(1px solid darkcyan); // Multiple mixed values.
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)); // Comma-separated values.
}
```

...will produce the following CSS...

```css
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

#### Baseline with `rem.baseline()`

The following Sass...

```scss
@use "@unsass/rem";

html,
body {
    font-size: rem.baseline();
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100%
}
```

### Sass mixins

| Mixin                                        | Description                                                                         |
|----------------------------------------------|-------------------------------------------------------------------------------------|
| `baseline($important)`                       | Sets declaration with `font-size` property, with optional `!important`.             |
| `declaration($property, $value, $important)` | Sets declaration with conversion of `px` unit to `rem`, with optional `!important`. |

#### Convert declaration with `rem.declaration()`

The following Sass...

```scss
@use "@unsass/rem";

.foo {
    @include rem.declaration(font-size, 16px); // Single value.
    @include rem.declaration(margin, 20px 30px); // Multiple values.
    @include rem.declaration(border, 1px solid darkcyan); // Multiple mixed values.
    @include rem.declaration(box-shadow, 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)); // Comma-separated values.
}
```

...will produce the following CSS...

```css
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

#### Baseline declaration with `rem.baseline()`

The following Sass...

```scss
@use "@unsass/rem";

html,
body {
    @include rem.baseline;
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100%
}
```
