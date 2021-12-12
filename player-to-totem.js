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
	var tempPath = os.tmpdir() + "/player-to-totem/" + playername + "/";
	fs.mkdirSync(tempPath, {recursive: true});
	
	// Initialize path variables
	util.path.root = "_output/Player-to-Totem/" + playername + " Totem/";
	util.path.full = util.path.root + "/assets/minecraft/textures/items";
	
	// Create folder structure & mcmeta file
	util.createStructure(version, "Totem of " + playername + ".");
	
	// Get skin data
	const tempFile = tempPath + "64.png";
	download.image({
		url: "https://minotar.net/body/" + playername + "/" + "64.png",
		dest: tempPath
	}).then(() => {
		// Write images to resource packs
		const options = {
			kernel: sharp.kernel.nearest,
			fit: "contain"
		}
		util.processImage(tempFile, 32, options, util.path.full + "/totem.png");
		util.processImage(tempFile, 32, options, util.path.full + "/totem_of_undying.png");
		util.processImage(tempFile, 64, options, util.path.root + "pack.png");
	});
}
