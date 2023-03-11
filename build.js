import esbuild from 'esbuild';
import { resolve } from 'path';

const PORT = 8080;
const DEV = process.argv.includes('-d');
const OUTFILE = resolve('dist/app.js');
const ENTRY = resolve('src/index.jsx');

// create & configure context
const ctx = await esbuild.context({
  format: 'iife',
  entryPoints: [ENTRY],
  outfile: OUTFILE,
  bundle: true,
  minify: !DEV,
  sourcemap: DEV,
  plugins: [{
    name: 'on-end',
    setup(build) {
      build.onEnd(({ errors }) => {
        if (errors[0]) {
          console.error('Bundling Failed!', errors[0]);
          return;
        }

        console.log('Bundled: ', OUTFILE);
      });
    }
  }]
});

if (DEV) {
  await ctx.watch();

  await ctx.serve({
    servedir: resolve('dist'),
    port: PORT
  });

  console.log(`Listening on port ${PORT}...`);
  process.on('exit', ctx.dispose);
} else {
  ctx.rebuild().finally(ctx.dispose);
}