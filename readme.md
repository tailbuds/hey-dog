# Table of Content


# Hey Dogs - TailBuds

## Setup

### 1. Clone this repository

```{sh}
git clone https://github.com/tailbuds/hey-dog.git
```

### 2. Install with dev dependencies

```{sh}
npm install
```

Get linting and formatter dependencies

```{sh}
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
npx install-peerdeps --dev eslint-config-airbnb
```

### 3. start node server

```{sh}
npm start
```

## APIs and content

> TODO: Much better Documentation

### Admin APIs

#### POST: Add Breeds

```-X POST http://localhost:3000/breeds```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "breedId": 5,
    "name": "Alfa",
    "tagline": "Alfa is a good dog",
    "bgImg": "images\\2020-05-23T19-58-26.711Zcropped-1400-425-587777.png",
    "puppyImg": "images\\2020-05-23T19-58-26.714ZArtboard+24.png",
    "minLife": 10,
    "maxLife": 12,
    "learningRate": "High",
    "minLitter": 4,
    "maxLitter": 6,
    "size": "large",
    "weightUnit": 2,
    "minMaleWeight": 35,
    "maxMaleWeight": 45,
    "minFemaleWeight": 30,
    "maxFemaleWeight": 45,
    "heightUnit": 2,
    "minMaleHeight": 20,
    "maxMaleHeight": 25,
    "minFemaleHeight": 20,
    "maxFemaleHeight": 25,
    "originCountry": 3,
    "otherNames": "",
    "desc1": "Amazing Dog",
    "decs2": null,
    "desc3": "Best Dog",
    "desc4": null,
    "desc5": null,
    "desc6": null,
    "desc7": null,
    "desc8": null,
    "desc9": null,
    "desc10": null,
    "desc11": null,
    "desc12": null,
    "desc13": null,
    "desc14": null,
    "desc15": null,
    "createdAt": "2020-05-23T19:58:27.000Z",
    "updatedAt": "2020-05-23T19:58:27.000Z"
    }
```
#### POST: Add Countries

```-X POST http://localhost:3000/countries```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
        "countryId": 3,
        "countryName": "INDIA",
        "dialCode": 91,
        "currencyName": "Indian Rupee",
        "capital": "Delhi",
        "regionName": "Asia",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "currencyCode": "INR",
        "minorUnits": 2,
        "timeZone": "+5:30"
    }
```
#### POST: Add Measurement Unit

```-X POST http://localhost:3000/measurements```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}

{
    "shortName": "In",
    "longName": "Inches",
    "category": "height",
    "measureSystem": "SI"
}
```

#### DELETE: Delete a Breed
```-X DELETE http://localhost:3000/breeds/{breedId}```

```-H "Accept: application/json"```

#### DELETE: Delete a Country
```-X DELETE http://localhost:3000/country/{countryId}```

```-H "Accept: application/json"```

#### DELETE: Delete a Measurement Unit
```-X DELETE http://localhost:3000/measurement/{shortName}```

```-H "Accept: application/json"```


### User APIs

#### GET: Get all breeds

```-X GET http://localhost:3000/breeds```

```-H "Accept: application/json"```


#### GET: Get a Specific Breed

```-X GET http://localhost:3000/breeds/{breedId}```

```-H "Accept: application/json"```

#### GET: Get all Countries

```-X GET http://localhost:3000/countries```

```-H "Accept: application/json"```

#### GET: Get a Specific Country

```-X GET http://localhost:3000/countries/{countryId}```

```-H "Accept: application/json"```

#### GET: Get all Measurement Units

```-X GET http://localhost:3000/measurement```

```-H "Accept: application/json"```

#### GET: Get a Specific Breed

```-X GET http://localhost:3000/measurement/{shortName}```

```-H "Accept: application/json"```

