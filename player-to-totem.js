"use strict";

// ============
// Import stuff
// ============

const fs = require("fs");
const util = require("./util.js");
const os = require("os");

const sharp = require("sharp");
const prompt = require("prompt");
const download = require("image-downloader");

// ======================
// Get Player Information
// ======================

prompt.start();
prompt.get([{
		name: "playername",
		message: "Playername",
		required: true
	}, {
		name: "version",
		message: "Pack Version",
		required: true
	}], function (err, result) {
		assembleTotem(result.playername, result.version);
	}
);

// =======================
// Assemble Resource Packs
// =======================

function assembleTotem(playername, version) {
	// Create temp file
	var tempFile = os.tmpdir() + "/player-to-totem/";
	fs.mkdirSync(tempFile, {recursive: true});
	tempFile += playername + ".png";
	
	// Initialize path variables
	util.path.root = "_output/Player-to-Totem/" + playername + " Totem/";
	util.path.full = util.path.root + "/assets/minecraft/textures/items";
	
	// Create folder structure & mcmeta file
	util.createStructure(version, "Totem of " + playername + ".");
	
	// Get skin data
	download.image({
		url: "https://minotar.net/body/" + playername + "/" + "64.png",
		dest: tempFile
	}).then((data) => {
		// Write images to resource packs
		const file = tempFile;
		const options = {
			kernel: sharp.kernel.nearest,
			fit: "contain"
		}
		util.processImage(file, 32, options, util.path.full + "/totem.png");
		util.processImage(file, 32, options, util.path.full + "/totem_of_undying.png");
		util.processImage(file, 64, options, util.path.root + "pack.png");
	});
}