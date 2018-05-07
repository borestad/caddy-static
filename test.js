import test from 'ava'
import caddy from './'
import * as fs from 'fs'

test('caddy binary exists', t => {
  let stats = fs.statSync(caddy.path)
  t.ok(stats.isFile(ffmpeg.path))
})
