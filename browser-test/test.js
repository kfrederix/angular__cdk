describe("@esm-bundle/angular__cdk", () => {
  const packages = [
    {
      packageName: "@angular/cdk/a11y",
      filename: "angular-a11y",
      expectedImport: "FocusMonitor",
    },
    {
      packageName: "@angular/cdk/accordion",
      filename: "angular-accordion",
      expectedImport: "CdkAccordion",
    },
    {
      packageName: "@angular/cdk/bidi",
      filename: "angular-bidi",
      expectedImport: "Directionality",
    },
    {
      packageName: "@angular/cdk/clipboard",
      filename: "angular-clipboard",
      expectedImport: "CdkCopyToClipboard",
    },
    {
      packageName: "@angular/cdk/coercion",
      filename: "angular-coercion",
      expectedImport: "coerceBooleanProperty",
    },
    {
      packageName: "@angular/cdk/collections",
      filename: "angular-collections",
      expectedImport: "DataSource",
    },
    {
      packageName: "@angular/cdk/dialog",
      filename: "angular-dialog",
      expectedImport: "Dialog",
    },
    {
      packageName: "@angular/cdk/drag-drop",
      filename: "angular-drag-drop",
      expectedImport: "CdkDrag",
    },
    {
      packageName: "@angular/cdk/keycodes",
      filename: "angular-keycodes",
      expectedImport: "INSERT",
    },
    {
      packageName: "@angular/cdk/layout",
      filename: "angular-layout",
      expectedImport: "BreakpointObserver",
    },
    {
      packageName: "@angular/cdk/listbox",
      filename: "angular-listbox",
      expectedImport: "CdkListboxModule",
    },
    {
      packageName: "@angular/cdk/menu",
      filename: "angular-menu",
      expectedImport: "CdkMenu",
    },
    {
      packageName: "@angular/cdk/observers",
      filename: "angular-observers",
      expectedImport: "ContentObserver",
    },
    {
      packageName: "@angular/cdk/overlay",
      filename: "angular-overlay",
      expectedImport: "CdkConnectedOverlay",
    },
    {
      packageName: "@angular/cdk/platform",
      filename: "angular-platform",
      expectedImport: "Platform",
    },
    {
      packageName: "@angular/cdk/portal",
      filename: "angular-portal",
      expectedImport: "CdkPortal",
    },
    {
      packageName: "@angular/cdk/private",
      filename: "angular-private",
      expectedImport: "_CdkPrivateStyleLoader",
    },
    {
      packageName: "@angular/cdk/scrolling",
      filename: "angular-scrolling",
      expectedImport: "CdkScrollable",
    },
    {
      packageName: "@angular/cdk/stepper",
      filename: "angular-stepper",
      expectedImport: "CdkStepper",
    },
    {
      packageName: "@angular/cdk/table",
      filename: "angular-table",
      expectedImport: "CdkTable",
    },
    {
      packageName: "@angular/cdk/text-field",
      filename: "angular-text-field",
      expectedImport: "CdkAutofill",
    },
    {
      packageName: "@angular/cdk/tree",
      filename: "angular-tree",
      expectedImport: "CdkTree",
    },
  ];

  const esVersions = ["es2022"];

  packages.forEach(({ packageName, filename, expectedImport }) => {
    describe(packageName, () => {
      esVersions.forEach((ecma) => {
        it(`can load the System.register ${ecma} bundle`, async () => {
          const m = await System.import(`/base/system/${ecma}/${filename}.js`);
          expect(m[expectedImport]).toBeDefined();
        });

        it(`can load the System.register ${ecma} prod bundle`, async () => {
          const m = await System.import(
            `/base/system/${ecma}/${filename}.min.js`,
          );
          expect(m[expectedImport]).toBeDefined();
        });
      });
    });
  });
});
