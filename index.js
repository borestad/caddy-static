const os = require('os')
const path = require('path')
const platform = os.platform()
const arch = os.arch()

if (!/^(linux|darwin|win32)$/.test(platform)) {
  console.error('Unsupported platform.')
  process.exit(1)
}

exports.path = path.join(__dirname, 'bin', platform, arch, platform === 'win32'
  ? 'caddy.exe'
  : 'caddy')
