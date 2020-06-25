/* eslint-disable no-param-reassign, no-nested-ternary,
  no-underscore-dangle */
import FileType from 'file-type';
import { resolveDocsPath, removeFile } from '../helpers/utils/fs-utils.js';

const ALLOWED_DOCUMENT_TYPES = ['pdf'] // Complex documents
  .concat(['csv', 'txt']) // Text-RAW documents
  .concat(['jpg', 'png']) // Image formats
  .concat(['xls', 'doc']); // Old document file-formats

export const generateExtension = (file) => FileType.fromBuffer(file.data);
export const createNoFilesError = (req, res, next) => {
  if (!req.files) {
    return next(
      Object.assign(
        new Error(
          'Файлы не загружень так как фалйы отстуствует или повреждень, пожалуйста проверьте документ которые вы загружаете'
        ),
        { status: 400 }
      )
    );
  }
};
export const handleCloudError = (req, res, next) => {
  if (req.cloudFile === false || req.cloudFiles === false) {
    return next(
      Object.assign(
        new Error('При загрузке файлы на хранилище произошла ошибка'),
        { status: 500 }
      )
    );
  }
};

export const isFileTypeSupports = (file) => {
  const extension = file.name.split('.')[1];
  return (
    // eslint-disable-next-line operator-linebreak
    ALLOWED_DOCUMENT_TYPES.indexOf(extension) !== -1 &&
    FileType.extensions.has(extension)
  );
};

export const prepareFileItem = async (file) => {
  if (!isFileTypeSupports(file)) {
    const genPath = resolveDocsPath(file.name);
    await file.mv(genPath);
    return {
      hash: file.md5,
      extension: file.name.split('.')[1],
      path: genPath,
    };
  }

  const { ext: extension } = await generateExtension(file);

  if (ALLOWED_DOCUMENT_TYPES.indexOf(extension) === -1) {
    throw Object.assign(
      new Error(`Only ${ALLOWED_DOCUMENT_TYPES.join(', ')} files are allowed`),
      {
        code: 'disallowed_files',
        status: 400,
      }
    );
  }

  return {
    hash: file.md5,
    extension,
    name: `${file.md5}.${extension}`,
    buffer: file.data,
  };
};

export const mergeFileData = (cloudFile, info) => {
  if (typeof info === 'object' && info) {
    cloudFile.hash = info.hash;
    cloudFile.extension = info.extension;
  }
};

export { removeFile };
