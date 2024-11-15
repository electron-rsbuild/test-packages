/**
 * plugin-renderer for rsbuild
 * */
export function rendererPlugin() {
  return [
    {
      name: 'electron-rsbuild:renderer',

      setup() {
        console.log('test 2');
      },
    },
  ];
}
