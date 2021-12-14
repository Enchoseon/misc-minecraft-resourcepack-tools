"use strict";

// ============
// Import stuff
// ============

const fs = require("fs");
const util = require("./util.js");

const sharp = require("sharp");
const prompt = require("prompt");

// ====================
// Get Pack Information
// ====================

prompt.start();
prompt.get([{
		name: "name",
		message: "Pack Name",
		required: true
	}, {
		name: "description",
		message: "Pack Description",
		required: true
	}, {
		name: "version",
		type: "integer",
		message: "Pack Version",
		required: true
	}], function (err, result) {
		assembleResourcePacks(result.name, result.description, result.version);
	}
);

// =======================
// Assemble Resource Packs
// =======================

function assembleResourcePacks(name, description, version) {	
	// Initialize path variables
	util.path.root = "_output/Panorama Assembler/" + name + " Panorama/";
	util.path.full= util.path.root + "/assets/minecraft/textures/gui/title/background";
	
	// Create folder structure & mcmeta file
	util.createStructure(version, description);
	
	// Write images to resource packs
	fs.readdir("_input", (err, files) => {
		files.forEach(function callback(file, j) {
			file = "_input/" + file;
			util.processImage(file, 922, {}, util.path.full + "/panorama_" + j + ".png");
			if (j === 0) {
				util.processImage(file, 64, {}, util.path.root + "/pack.png");
			}
		});
	});
}
