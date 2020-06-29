// CRUD for breed and images

const Breed = require('../models/breed');
const Images = require('../models/images');
const Countries = require('../models/countries');
const MeasurementUnit = require('../models/measurementUnit');

//Enviroment Check
let SERVER_TYPE;
let SERVER_NAME;
let PROXY_PORT;

if (process.env.NODE_ENV === 'development') {
  SERVER_TYPE = process.env.DEV_SERVER_TYPE;
  SERVER_NAME = process.env.DEV_SERVER_NAME;
  PROXY_PORT = process.env.DEV_PROXY_PORT;
}
if (process.env.NODE_ENV === 'test') {
  SERVER_TYPE = process.env.TEST_SERVER_TYPE;
  SERVER_NAME = process.env.TEST_SERVER_NAME;
  PROXY_PORT = process.env.TEST_PROXY_PORT;
}
if (process.env.NODE_ENV === 'production') {
  SERVER_TYPE = process.env.PROD_SERVER_TYPE;
  SERVER_NAME = process.env.PROD_SERVER_NAME;
  PROXY_PORT = process.env.PROD_PROXY_PORT;
}

// POST add breed /breeds
exports.postBreed = (req, res, next) => {
  const fileInfo = req.files;
  const { weightUnit, heightUnit, originCountry } = req.body;
  let images = [];
  fileInfo.images.map((img) => {
    images.push(img.path);
  });

  const findWeightId = MeasurementUnit.findOne({
    where: { shortName: weightUnit },
  })
    .then((res) => {
      return res.measureId;
    })
    .catch((err) => {
      res.status(400).json({ createdBreed: 0, reason: err });
    });

  const findHeightId = MeasurementUnit.findOne({
    where: { shortName: heightUnit },
  })
    .then((res) => {
      return res.measureId;
    })
    .catch((err) => {
      res.status(400).json({ createdBreed: 0, reason: err });
    });

  const findCountryId = Countries.findOne({
    where: { countryName: originCountry },
  })
    .then((res) => {
      return res.countryId;
    })
    .catch((err) => {
      res.status(400).json({ createdBreed: 0, reason: err });
    });

  Promise.all([findWeightId, findHeightId, findCountryId])
    .then((values) => {
      const newBreed = Breed.create({
        breedId: null,
        name: req.body.name,
        tagline: req.body.tagline,
        bgImg: fileInfo.bgImg[0].path,
        puppyImg: fileInfo.puppyImg[0].path,
        minLife: req.body.minLife,
        maxLife: req.body.maxLife,
        learningRate: req.body.learningRate,
        minLitter: req.body.minLitter,
        maxLitter: req.body.maxLitter,
        size: req.body.size,
        weightUnit: values[0],
        minMaleWeight: req.body.minMaleWeight,
        maxMaleWeight: req.body.maxMaleWeight,
        minFemaleWeight: req.body.minFemaleWeight,
        maxFemaleWeight: req.body.maxFemaleWeight,
        heightUnit: values[1],
        minMaleHeight: req.body.minMaleHeight,
        maxMaleHeight: req.body.maxMaleHeight,
        minFemaleHeight: req.body.minFemaleHeight,
        maxFemaleHeight: req.body.maxFemaleHeight,
        originCountry: values[2],
        otherNames: req.body.otherNames,
        desc1: req.body.desc1,
        desc2: req.body.desc2,
        desc3: req.body.desc3,
        desc4: req.body.desc4,
        desc5: req.body.desc5,
        desc6: req.body.desc6,
        desc7: req.body.desc7,
        desc8: req.body.desc8,
        desc9: req.body.desc9,
        desc10: req.body.desc10,
        desc11: req.body.desc11,
        desc12: req.body.desc12,
        desc13: req.body.desc13,
        desc14: req.body.desc14,
        desc15: req.body.desc15,
      });
      return newBreed;
    })
    .then((newBreed) => {
      return newBreed.breedId;
    })
    .then((newBreedId) => {
      const img = Images.create({
        breedId: newBreedId,
        img1: images[0] ? images[0] : null,
        img2: images[1] ? images[1] : null,
        img3: images[2] ? images[2] : null,
        img4: images[3] ? images[3] : null,
        img5: images[4] ? images[4] : null,
        img6: images[5] ? images[5] : null,
        img7: images[6] ? images[6] : null,
        img8: images[7] ? images[7] : null,
        img9: images[8] ? images[8] : null,
      });
      return img;
    })
    .then(() => {
      res.status(201).json({ createdBreed: 1 });
    })
    .catch((err) => {
      res.status(400).json({ createdBreed: 0, reason: err });
    });
};

// GET all breeds /breeds
exports.getAllBreeds = (req, res, next) => {
  Breed.findAll({
    attributes: ['breedId', 'name', 'puppyImg'],
  })
    .then((breeds) => {
      breeds.map((breed) => {
        breed.puppyImg = `${SERVER_TYPE}://${SERVER_NAME}:${PROXY_PORT}/${breed.puppyImg}`;
      });
      return breeds;
    })
    .then((breeds) => {
      res.status(200).json(breeds);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message || 'Some error occurred while retrieving breeds',
      });
    });
};

// GET a breed /breeds/:breedId
exports.getBreed = (req, res, next) => {
  Breed.findByPk(req.params.breedId, {
    include: ['BreedImages', 'BreedCountry', 'BreedWeight', 'BreedHeight'],
  })
    .then((breed) => {
      breed.bgImg = `${SERVER_TYPE}://${SERVER_NAME}:${PROXY_PORT}/${breed.bgImg}`;
      breed.puppyImg = `${SERVER_TYPE}://${SERVER_NAME}:${PROXY_PORT}/${breed.puppyImg}`;
      let images = breed.BreedImages.dataValues;
      breed.originCountry = breed.BreedCountry.dataValues.countryName;
      breed.weightUnit = breed.BreedWeight.shortName;
      breed.heightUnit = breed.BreedHeight.shortName;
      Object.keys(images).map((key) => {
        if (images[key] != null && !Number.isInteger(images[key])) {
          images[
            key
          ] = `${SERVER_TYPE}://${SERVER_NAME}:${PROXY_PORT}/${images[key]}`;
        }
      });
      delete breed.dataValues.BreedCountry;
      delete breed.dataValues.BreedHeight;
      delete breed.dataValues.BreedWeight;
      res.status(200).json(breed);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while retrieving breed details',
      });
    });
};

// PATCH update breed /breeds/:breedId?edit=<information|backgroundImage|puppyImage|img1|img2|img3|img4|img5|img6|img7|img8|img9>
exports.patchBreed = (req, res, next) => {
  const { breedId } = req.params;
  const { weightUnit, heightUnit, originCountry } = req.body;
  let fileInfo;
  switch (req.query.edit) {
    case 'information':
      const findWeightId = MeasurementUnit.findOne({
        where: { shortName: weightUnit },
      })
        .then((res) => {
          return res.measureId;
        })
        .catch((err) => {
          res.status(400).json({ createdBreed: 0, reason: err });
        });

      const findHeightId = MeasurementUnit.findOne({
        where: { shortName: heightUnit },
      })
        .then((res) => {
          return res.measureId;
        })
        .catch((err) => {
          res.status(400).json({ createdBreed: 0, reason: err });
        });

      const findCountryId = Countries.findOne({
        where: { countryName: originCountry },
      })
        .then((res) => {
          return res.countryId;
        })
        .catch((err) => {
          res.status(400).json({ createdBreed: 0, reason: err });
        });

      Promise.all([findWeightId, findHeightId, findCountryId])
        .then((values) => {
          const updatedBreed = Breed.update(
            {
              name: req.body.name,
              tagline: req.body.tagline,
              minLife: req.body.minLife,
              maxLife: req.body.maxLife,
              learningRate: req.body.learningRate,
              minLitter: req.body.minLitter,
              maxLitter: req.body.maxLitter,
              size: req.body.size,
              weightUnit: values[0],
              minMaleWeight: req.body.minMaleWeight,
              maxMaleWeight: req.body.maxMaleWeight,
              minFemaleWeight: req.body.minFemaleWeight,
              maxFemaleWeight: req.body.maxFemaleWeight,
              heightUnit: values[1],
              minMaleHeight: req.body.minMaleHeight,
              maxMaleHeight: req.body.maxMaleHeight,
              minFemaleHeight: req.body.minFemaleHeight,
              maxFemaleHeight: req.body.maxFemaleHeight,
              originCountry: values[2],
              otherNames: req.body.otherNames,
              desc1: req.body.desc1,
              desc2: req.body.desc2,
              desc3: req.body.desc3,
              desc4: req.body.desc4,
              desc5: req.body.desc5,
              desc6: req.body.desc6,
              desc7: req.body.desc7,
              desc8: req.body.desc8,
              desc9: req.body.desc9,
              desc10: req.body.desc10,
              desc11: req.body.desc11,
              desc12: req.body.desc12,
              desc13: req.body.desc13,
              desc14: req.body.desc14,
              desc15: req.body.desc15,
            },
            { where: { breedId: breedId } },
          );
          return updatedBreed;
        })
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'backgroundImage':
      fileInfo = req.files;
      Breed.update(
        {
          bgImg: fileInfo.bgImg[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'puppyImage':
      fileInfo = req.files;
      Breed.update(
        {
          puppyImg: fileInfo.puppyImg[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img1':
      fileInfo = req.files;
      Images.update(
        {
          img1: fileInfo.img1[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img2':
      fileInfo = req.files;
      Images.update(
        {
          img2: fileInfo.img2[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img3':
      fileInfo = req.files;
      Images.update(
        {
          img3: fileInfo.img3[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img4':
      fileInfo = req.files;
      Images.update(
        {
          img4: fileInfo.img4[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img5':
      fileInfo = req.files;
      Images.update(
        {
          img5: fileInfo.img5[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img6':
      fileInfo = req.files;
      Images.update(
        {
          img6: fileInfo.img6[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img7':
      fileInfo = req.files;
      Images.update(
        {
          img7: fileInfo.img7[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img8':
      fileInfo = req.files;
      Images.update(
        {
          img8: fileInfo.img8[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    case 'img9':
      fileInfo = req.files;
      Images.update(
        {
          img9: fileInfo.img9[0].path,
        },
        { where: { breedId: breedId } },
      )
        .then(() => {
          res.status(200).json({ updatedBreed: 1 });
        })
        .catch((err) => {
          res.status(400).json({ updatedBreed: 0, reason: err });
        });
      break;

    default:
      res.status(400).json({ updatedBreed: 0, reason: `that didn't work` });
      break;
  }
};

// DELETE delete breed /breeds/:breedId
exports.deleteBreed = (req, res, next) => {
  Breed.destroy({ where: { breedId: req.params.breedId } })
    .then(() => {
      res.json({ deletedBreed: 1 }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ deletedBreed: 0, reason: err }).status(400);
    });
};
