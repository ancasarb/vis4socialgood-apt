---
title: Explore regions
toc: false
---

# Explore data by regions

```js
const apt_data = FileAttachment("data/apt_data.csv").csv({typed: true});
```
<!-- <span class="big">${apt_data.filter((d) => d.Region === "Americas").length.toLocaleString("en-US")}</span> -->


```js
const regions = view(
  Inputs.select(
    new Map([
      ["Africa", 1],
      ["Americas", 2],
      ["Asia-Pacific", 3],
      ["Europe", 4],
      ["Middle East", 5]
    ]),
    {value: 4, label: "Region", format: ([name, value]) => `${name}`, width:150}
  )
);
regions
```