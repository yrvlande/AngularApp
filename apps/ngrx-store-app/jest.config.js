module.exports = {
  name: 'ngrx-store-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-store-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
