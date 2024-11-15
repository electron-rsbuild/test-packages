/**
 * plugin-main for rsbuild
 * */
export function mainPlugin() {
  return [
    {
      name: 'electron-rsbuild:main',
      setup() {
        console.log('test 1');
      },
    },
  ];
}
