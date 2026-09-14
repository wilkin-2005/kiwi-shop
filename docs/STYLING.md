
# Styling Conventions

## Naming convention

|     Element     |     Naming Style                                      |     Example                                                  |
|-----------------|-------------------------------------------------------|--------------------------------------------------------------|
| **CSS Classes** | **kebab-case** (Tailwind utilities or custom classes) | Tailwind example: `bg-blue-500` Custom class: `.btn-primary` |


For other naming conventions, see [`NAMING_CONVENTIONS.md`](./NAMING_CONVENTIONS.md)


## Colors

Use `oklch` by default for colors, instead of for example using `hex` or `rgb`.

When a color is available as a custom property in [`src/app/globals.css`](../src/app/globals.css), use that instead of hard coding the same OKLCH values in multiple places.  
See the [Custom properties](#custom-properties) heading for more information.


## Media queries

When writing media queries you should use range syntax such as `width < 700px` instead of `max-width: 700px`.

### Example

**Preferred media query:**

``` css
@media (width < 700px) {
    /* styling code */
}
```

**Unpreferred media query:**

``` css
@media (max-width: 700px) {
    /* styling code */
}
```


## Custom properties

All global custom properties are stored in [`src/app/globals.css`](../src/app/globals.css) in the project root, inside the `:root` pseudo-class at the top of the file.

Create new global custom properties for values that will be needed across multiple files and components.

Use an existing custom property when it represents the same design meaning. Do not reuse a semantically unrelated property just because its value happens to match. Create a local or global property when the value represents a new reusable concept.