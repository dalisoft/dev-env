import mime from '@sifrr/server/src/server/mime.js';
import stream2Buffer from '@sifrr/server/src/server/streamtobuffer.js';
import sendFile from '@sifrr/server/src/server/sendfile';

const { getMime } = mime;

export { getMime, stream2Buffer, sendFile };
