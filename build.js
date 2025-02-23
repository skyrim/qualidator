import path from 'node:path'
import { exec } from 'node:child_process'
import fs from 'fs-extra'
import { build } from 'esbuild'

async function main() {
  const dir = import.meta.dirname
  fs.removeSync(path.resolve(dir, 'lib'))
  const pkg = fs.readFileSync(path.resolve(dir, 'package.json'))
  await build({
    entryPoints: ['src/index.ts'],
    platform: 'neutral',
    target: 'es2020',
    bundle: true,
    define: {
      PACKAGE_VERSION: `'${JSON.parse(pkg).version}'`
    },
    outfile: 'lib/qualidator.js'
  })
  const proc = exec(path.resolve(dir, 'node_modules/.bin/tsc'))
  proc.addListener('message', (msg) => console.log(msg))
}

main()
