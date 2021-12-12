"use strict";

// ============
// Import stuff
// ============

const fs = require("fs");

const sharp = require("sharp");

// =======
// Methods
// =======

var methods = {};

// Path information
var path = {
	full: "",
	root: ""
}
methods.path = path;

// Create folder structure & mcmeta file
methods.createStructure = function(version, description) {
	const mcmeta = {
		"pack": {
			"pack_format": version,
			"description": description
		}
	}
	fs.mkdirSync(path.full, {recursive: true});
	fs.writeFileSync(path.root + "/pack.mcmeta", JSON.stringify(mcmeta));	
}

// Resize png & save to a location
methods.processImage = function(file, scale, options, output) {
	sharp(file)
		.resize(scale, scale, {
			kernel: options.kernel || "mitchell",
			fit: options.fit || "cover",
			position: "centre",
			background: {r: 0, g: 0, b: 0, alpha: 0}
		})
		.toFile(output);
}

module.exports = methods;