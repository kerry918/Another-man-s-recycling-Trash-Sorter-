const util = require('util');
const fs = require('fs');
const TrainingApi = require("@azure/cognitiveservices-customvision-training");
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");

const trainingKey = "64d44ff5e8f849edb12f9f6de560ef52"; //keys from the resource page in customvision
const predictionKey = "7879e85c46744915adc0d49f698e5a80";
const predictionResourceId = "76cc7d34-6400-43b5-935b-ce327a7b4e5d";
const endPoint = "https://trashsorter1.cognitiveservices.azure.com/"

const publishIterationName = "classifyModel";
const setTimeoutPromise = util.promisify(setTimeout);

//authentication
const credentials = new msRest.ApiKeyCredentials({ inHeader: { "Training-key": trainingKey } });
const trainer = new TrainingApi.TrainingAPIClient(credentials, endPoint);
const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, endPoint);


//customvision function call
(async () => {
    console.log("Creating project...");
    const TrashSorter = await trainer.createProject("TrashSorter"); //creates the project

    //create tags for different categories of images
    const cardboardTag = await trainer.createTag(TrashSorter.id, "Cardboard");
    const glassTag = await trainer.createTag(TrashSorter.id, "Glass");
    const metalTag = await trainer.createTag(TrashSorter.id, "Metal");
    const plasticTag = await trainer.createTag(TrashSorter.id, "Plastic");
    const paperTag = await trainer.createTag(TrashSorter.id, "Paper");
    const trashTag = await trainer.createTag(TrashSorter.id, "Trash");

    const sampleDataRoot = "../dataset-resized";

    console.log("Adding images...");
    let fileUploadPromises = [];

    //upload the tagged images
    const cardboardDir = `${sampleDataRoot}/cardboard`;
    const cardboardFiles = fs.readdirSync(cardboardDir);
    cardboardFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${cardboardDir}/${file}`), {tagIds: [cardboardTag.id]}));
    });

    const glassDir = `${sampleDataRoot}/glass`;
    const glassFiles = fs.readdirSync(glassDir);
    glassFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${glassDir}/${file}`), {tagIds: [glassTag.id]}));
    });

    const plasticDir = `${sampleDataRoot}/plastic`;
    const plasticFiles = fs.readdirSync(plasticDir);
    plasticFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${plasticDir}/${file}`), {tagIds: [plasticTag.id]}));
    });

    const metalDir = `${sampleDataRoot}/metal`;
    const metalFiles = fs.readdirSync(metalDir);
    metalFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${metalDir}/${file}`), {tagIds: [metalTag.id]}));
    });

    const paperDir = `${sampleDataRoot}/paper`;
    const paperFiles = fs.readdirSync(paperDir);
    paperFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${paperDir}/${file}`), {tagIds: [paperTag.id]}));
    });

    const trashDir = `${sampleDataRoot}/trash`;
    const trashFiles = fs.readdirSync(trashDir);
    trashFiles.forEach(file => {
        fileUploadPromises.push(trainer.createImagesFromData(TrashSorter.id, fs.readFileSync(`${trashDir}/${file}`), {tagIds: [trashTag.id]}));
    });

    console.log("Training...");
    await Promise.all(fileUploadPromises);


    let trainingIteration = await trainer.trainProject(TrashSorter.id);

// Wait for training to complete
    console.log("Training started...");
    while (trainingIteration.status == "Training") {
        console.log("Training status: " + trainingIteration.status);
        await setTimeoutPromise(1000, null);
        trainingIteration = await trainer.getIteration(TrashSorter.id, trainingIteration.id)
    }
    console.log("Training status: " + trainingIteration.status);

    await trainer.publishIteration(TrashSorter.id, trainingIteration.id, publishIterationName, predictionResourceId);

    const testFile = fs.readFileSync(`../dataset-resized/metal/metal410.jpg`);



})()






