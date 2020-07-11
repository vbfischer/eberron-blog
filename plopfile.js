var space_or_underbar = new RegExp("[ _]", "g")

module.exports = function (plop) {
  plop.setGenerator("continents", {
    description: "Create the continent files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "item Name",
      },
    ],
    actions: [
      {
        type: "add",
        skipIfExists: true,
        path: "src/data/continents/{{dashCase name}}.json",
        templateFile: "__plop-templates/continent-file.json",
      },
      {
        type: "add",
        path: "src/pages/geography/continents/{{dashCase name}}.md",
        templateFile: "__plop-templates/continent-file.md",
      },
    ],
  }),
    plop.setGenerator("Nation GEO", {
      description: "setup geo file for nation",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "nation",
        },
      ],
      actions: [
        {
          type: "add",
          skipIfExists: true,
          path: "src/data/geo/{{dashCase name}}.json",
          templateFile: "__plop-templates/nation-geo-file.json",
        },
      ],
    }),
    plop.setGenerator("nations", {
      description: "application controller logic",
      prompts: [
        {
          type: "input",
          name: "parent",
          message: "parent of this item",
        },
        {
          type: "select",
          name: "locationType",
          message: "Select type of location",
          choices: ["continent", "nation", "city", "district", "ward"],
        },
        {
          type: "input",
          name: "name",
          message: "item Name",
        },
      ], // array of inquirer prompts
      actions: [
        {
          type: "modify",
          path: "src/data/locations/{{parent}}.json",
          transform(fileContents, data) {
            const name = data.name.toLowerCase().replace(space_or_underbar, "-")
            const d2 = JSON.parse(fileContents)
            if (d2.nations.includes(name)) {
              return fileContents
            }

            d2.nations.push(name)
            return JSON.stringify(d2, null, 2)
          },
        },
        {
          type: "add",
          skipIfExists: true,
          path: "src/data/locations/{{dashCase name}}.json",
          templateFile: "__plop-templates/location-file.json",
        },
      ], // array of actions
    })
}
