/**
 * plugin-renderer for rsbuild
 * */
export function rendererPlugin() {
  return [
    {
      name: 'electron-rsbuild:renderer',

      setup(api:any) {
        api.modifyRsbuildConfig((config: any, { mergeRsbuildConfig }) => {
        });
      },
    },
  ];
}
