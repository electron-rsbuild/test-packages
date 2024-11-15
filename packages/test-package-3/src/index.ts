/**
 * plugin-preload for rsbuild
 * */
export function preloadPlugin() {
  return [
    {
      name: 'electron-rsbuild:preload',
      setup() {
        console.log('test 3');
      },
    },
  ];
}
