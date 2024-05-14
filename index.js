const tar = require('tar');

tar.create({ file: './tmp/docs.tgz', cwd: './tmp/docs', gzip: true }, ['.']);
