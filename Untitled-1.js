

const uploadS3=require('../../config/multer');

router.post('/upload', uploadS3.single('file'),(req, res) => {
    // console.log("Check File Upload " +req.file.location);
	res.json(req.file.location); //link of that img 
});



//multer
'use strict';

const express = require('express');
const app = express();
const multer = require('multer');
const multers3 = require('multer-s3');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: '#'
  secretAccessKey: '#,
});

const uploadS3 = multer({
  storage: multers3({
    s3: s3,
    acl: 'public-read',
    bucket: 'profiler-storage',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

module.exports = uploadS3;
