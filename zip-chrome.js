// require modules
const fs = require("fs");
const archiver = require("archiver");

// create a zip file that other files/folder will be added to
const output = fs.createWriteStream(__dirname + "/chrome.zip");

// Create a compression level of 9
const archive = archiver("zip", {
  zlib: { level: 9 },
});

// listen for all archive data to be written
// =========================================
// 'close' event is fired only when a file descriptor is involved
output.on("close", function () {
  console.log(archive.pointer() + " bytes");
  console.info("Chrome files has been zipped.");
});

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on("end", function () {
  console.log("Data has been drained");
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

// good practice to catch this error explicitly
archive.on("error", function (err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory("chrome_build/", false);

archive.finalize();
