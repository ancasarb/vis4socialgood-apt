---
title: Explore indicators
toc: false
---

# Explore data by indicators

```js
const indicators = view(
  Inputs.select(
    new Map([
      ["Ratification of the UN Convention against Torture", 1],
      ["Ratification of Optional Protocol (OPCAT)", 2],
      ["Submission of initial report to CAT", 3],
      ["Prohibition of torture in the constitution", 4],
      ["Criminalisation of torture under domestic law", 5],
      ["Designation of the National Preventive Mechanism (in law)", 6],
      ["Operationality of the National Preventive Mechanism", 7],
      ["Existence of National Human Rights Institution that fully complies with Paris Principles", 8],
    ]),
    {value: 1, label: "Indicator", format: ([name, value]) => `${name}`, width: 600},
  )
);
indicators
```