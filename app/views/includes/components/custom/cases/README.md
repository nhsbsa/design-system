# Cases

## Guidance

Find out more about the cases component and when to use it in the [NHSBSA design system](#).

## Quick start example

[Preview the cases component](#)

### HTML markup

```html
<p>HTML GOES HERE</p>
```

### Nunjucks macro

```
{% from 'components/cases/macro.njk' import cases %}

{{ cases({
  
  
}) }}
```

### Nunjucks arguments

The cases Nunjucks macro takes the following arguments:

| Name             | Type     | Required  | Description |
| -----------------|----------|-----------|-------------|
| text             | string   | Yes       | Text to be displayed within the cases component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
